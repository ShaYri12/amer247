import { fetchStrapi } from "@/components/utils/fetchStrapi";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body) {
      return NextResponse.json({ error: "No body provided" }, { status: 422 });
    }

    const { order_no, transaction_status } = body;

    if (!order_no || !transaction_status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Define your content types
    const contentTypes = ["pay-onlines", "tourist-visas"]; // Add other content types if needed

    let result = null;

    for (const type of contentTypes) {
      try {
        const data = await fetchStrapi(
          `api/${type}?filters[orderNo][$eq]=${order_no}`
        );

        if (data?.data?.length > 0) {
          result = { contentType: type, id: data.data[0].id };
          break;
        }
      } catch (strapiError) {
        console.error(
          `Error fetching data from content type ${type}:`,
          strapiError
        );
      }
    }

    if (!result) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${result.contentType}/${result.id}`,
        {
          data: {
            transactionStatus: transaction_status,
          },
        }
      );
    } catch (axiosError) {
      console.error("Error updating data:", axiosError);
      return NextResponse.json(
        { error: "Failed to update transaction status" },
        { status: 500 }
      );
    }

    return NextResponse.json({ status: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
