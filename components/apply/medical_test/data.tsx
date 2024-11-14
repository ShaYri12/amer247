export type DataItem = {
    id: string;
    title: string;
    services: {
        heading: string;
        subHeading: string;
        price: string | TrustedHTML;
        slug: string;
        reqDocs: string[];
        redpoints: string[];
    }[];
};

export const data: DataItem[] = [
    {
        id: "1",
        title: "MEDICAL TEST",
        services: [
            {
                heading: "NEW ENTRY",
                slug: "new-entry", // Slug should be in kebab case
                subHeading: "NEW ENTRY",
                price: "AED 382.50 (Normal 24hrs) <br/> AED 812.50 (VIP 06 Hours)  <br/> AED 812.50 (VVIP 02 Hours)", // Removed duplicate entry
                reqDocs: [
                    "Applicant Passport",
                    "Applicant Entry Permit",
                ],
                redpoints: [],
            },

            {
                heading: "RENEWAL",
                slug: "renewal", // Slug should be in kebab case
                subHeading: "RENEWAL",
                price: "AED 382.50 (Normal 24hrs) <br/> AED 812.50 (VIP 06 Hours)  <br/> AED 812.50 (VVIP 02 Hours)", // Removed duplicate entry
                reqDocs: [
                    "Applicant Passport",
                    "Applicant Entry Permit",
                ],
                redpoints: [],
            },

            {
                heading: "GOLDEN VISA",
                slug: "golden-visa", // Slug should be in kebab case
                subHeading: "GOLDEN VISA",
                price: "AED 382.50 (Normal 24hrs) <br/> AED 812.50 (VIP 06 Hours)  <br/> AED 812.50 (VVIP 02 Hours)", // Removed duplicate entry
                reqDocs: [
                    "Applicant Passport",
                    "Applicant Entry Permit",
                ],
                redpoints: [],
            },
        ],
    },
];
