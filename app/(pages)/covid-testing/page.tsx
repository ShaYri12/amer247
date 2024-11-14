import Heading from '@/components/shared/common/heading'
import SubHeading from '@/components/shared/common/subHeading'
import React from 'react'
import img from '/public/assets/24.png'
import Image from 'next/image'
import CustomFaq from '@/components/contact/faq/customFaq'

type Props = {}

const data = [


    { title: '', SubHeading: "Your request for a SARS-CoV-2 PCR TEST is subject to the below advice, terms and conditions. Please read them carefully before placing your order or if your order has already been placed, please contact us immediately to discuss any issues or concerns." },
    { title: '', SubHeading: "Results are given by means of an official Laboratory report provided to youat the earliest opportunity. Results are given by either email sent to you confidentially or, whenever applicable, a file attachment uploaded to your secure patient portal at the earliest opportunity. Whenever possible we will contact you by phone also to give your result. Regrettably, Amer247 cannot disclose results of any patient to a 3rd party (including relatives) other than a consenting adult. If you prefer us to share your results with someone else, please confirm this to us at the time of booking or visit." },
    { title: '', SubHeading: " Amer247 does not accept bookings which, to the best of our knowledge, cannot be fulfilled timely, and we will always do our utmost best to understand, document and meet your required timescales. However, in certain cases, we may take your order and advise you of the risk. We kindly ask you that place your order at the earliest opportunity that allows us enough notice to process all the administration which are required to provide regulated COVID-19 tests." },
    { title: '', SubHeading: " Amer247 runs its testing service under very strict processes to ensure all timescales are met, however no process is a 100% perfect, if you believe you haven't received any due document references or certificates for any purpose we kindly ask you to please contact us immediately so that we are aware and may ratify any issues which may have occurred." },
    { title: '', SubHeading: "As with any other tests, a small percentage of samples can be inconclusive for a number of reasons ranging from sample contamination, insufficient material, presence of blood, inadequate storage, or infections which are detected as similar to COVID, however inconclusive which do not allow the laboratory to provide a definite result, in the unlikely event that this happens, you understand and agree that you will need to re-take the test and the same charges will apply." },
    { title: '', SubHeading: "You understand that regardless of the notice given and whether you ordered online or by phone there are several steps we must take as Amer247in order to understand your requirement, plan your test, register each test, assigning tracking numbers, completing the forms for PHE, preparing kits for dispatch, etc. which involve a significant amount of work on our part from the very moment we take your order so that we can produce results as quickly as possible for you. For this reason, if you have booked a test, should you decide to cancel a test after purchasing it for any reason, you will be given the option to 'freeze' your test and use it at a later occasion (unlimited date changes within 2 months, free of charge)." },
    { title: '', SubHeading: "Please note that travel and/or test requirements from local destinations may vary weekly or even daily, and there is conflicting information on the official information sites. It is critical that you check both with the destination authority and your airline to ensure you give us the exact requirements applicable to your trip, and we will base our planning on the requirements you provide us. Due to the constant variations we are unable to verify this on your behalf but will endeavor to share our best knowledge which should not be construed as that by under any circumstance." },
    { title: '', SubHeading: "Due to the specialized Covid-19 preparation, appointments for sample collections require 24h for changes to the appointment. If you miss your appointment or change outside this window, or cancel the test due to reasons beyond our control, you will be required to book another visit and the same fees will apply and no refund will be processed. Occasionally it may be possible to re-arrange the time, so if you believe you are likely to be delayed, please contact us at the earliest opportunity by WhatsApp/phone, not email." },
    { title: '', SubHeading: "By confirming your booking you acknowledge that it is your responsibility to check travel requirements carefully, as under no circumstance will Amer247 be held responsible for missed flights or any losses incurred in connection with testing, including in the event of a positive or delayed result." },
    { title: '', SubHeading: "By engaging Amer247, you acknowledge that you understand and agree to the full terms above and that Amer247 cannot be held liable for any losses related to your tests which are outside our control." },
]

const faqs = [
    {
        question: "What is PCR ?",
        answer:
            "A polymerase chain reaction (PCR) test is performed to detect genetic material from a specific organism, such as a virus. At the moment the majority of the current Covid-19 tests accredited for travel that all the reports are coming from are using PCR.",
    },
    {
        question: "Is service available 24 hours ?",
        answer:
            "Yes we have few clinics, which opens 24 hours. You have to book online at https://amer247.com/pcr-form/ to avail the priority and hassle free testing services. .",
    },
    {
        question: "How can I book PCR Test ?",
        answer:
            "You can book online at https://amer247.com/pcr-form/ and once booking is done an voucher will be sent to you via email and your appointment will be auto confirmed with lab, in case of home/hotel visit you will receive call to confirm the address within 30 mins.",
    },

    {
        question: "What is the cost of PCR ?",
        answer:
            "We have different prices depending Upon the urgency of reports. For Clinic Visit .AED69 Report in 24hrs .AED99 Report in 12 hrs AED199 Report in 4-6 hrs .AED349 Report in 90 mins. For Home/ Office / Hotel Visit . AED89 Report in 24hrs . AED139 Report in 12 hrs .AED299 Report in 4 - 6 hrs .AED499 Report in 120 mins",
    },

{
    question: "When will it get my results ?",
        answer:
    "We have an express service and after taking the sample you will receive the report within 3-6 hours. For Basic package its 24 to 48 hours and for Urgent its within 12 hrs after taking the sample.",
    },

{
    question: "How will I receive the result ?",
        answer:
    "Results will be sent to you via sms and email on your registered email address and the records will be updated on hasana app as well.",
    },

    {
        question: "Are PCR result accredited for travel?",
        answer:
            "Yes, All our labs are DHA Approved and reports are Fully accredited for travel. * Traveling from Dubai to India? The PCR test should be conducted within 72 hours of travel date.* Traveling from Dubai to any other destinations? The PCR test should be conducted within 96 hours of travel date. Kindly also check travel guidelines for the country which you are traveling to.",
    },
]

const CovidTesting = (props: Props) => {
    return (
        <div>
            <div className="flex justify-center md:px-24  items-center gap-5 flex-col md:py-20 py-16 md:mt-20 px-5">
                <div className="mx-auto">
                    <Image src={img} alt='' className='' />
                </div>

                <div className="space-y-4 md:w-4/5 w-full">
                    <p className="text-lg text-center">
                        <span className="font-semibold ">247 Medical Services</span> is a subsidiary of <span className="font-semibold">Amer247</span> and a leading and innovative medical facilitation company with a high-performance track record of experience and excellence in the healthcare assistance industry.

                        Our main goal is providing hassle-free PCR testing through our esteemed partner labs. All our partnered labs CAP accredited and audited by the Dubai Health Authority (DHA) in Dubai.

                        For bookings help call/whatsapp +971585211601
                    </p>

                    <h3 className="text-xl font-semibold text-primary text-center">Apple Pay Now accepted (Works with Iphone with Safari Browser)</h3>
                </div>


                <div className="space-y-4 md:w-3/4 w-full">
                    <h3 className="text-xl font-semibold text-primary text-center">Need Negative Covid-19 Testing For Travel?</h3>

                    <p className="text-lg text-center">
                        All Countries and airlines around the globe now require COVID-19 Screening For Travel
                        as a prerequisite for boarding and entry. We got you covered. Book online now.
                    </p>

                </div>


                <div className="space-y-4 md:w-4/5 w-full">
                    <h3 className="text-xl font-semibold text-primary text-center py-3">How It Works?</h3>
                    <p className="text-lg text-center">
                        <span className="font-semibold ">For Hospital/Clinic testing, kindly note:</span> No appointment is required for Hospital/Clinic testing. You just need to visit any of our testing locations below to avail of the service. Once the sample is collected, the test result will be released by email to the customer as per the category booked (test is processed from the time of sample collection, not from the time of booking).
                    </p>

                    <p className="text-lg text-center">
                        <span className="font-semibold ">For Home/Hotel testing, kindly note: </span> After the booking our team will contact you and will schedule appointment as per your conveinient time, Service available 24 hours all days. Once the sample is collected, the test result will be released by email to the customer as per the category booked (test is processed from the time of sample collection, not from the time of booking).
                    </p>


                </div>
                <div className="md:w-4/5 w-full">
                    <Heading text="PCR FAQ's" />
                    <div className="py-10">
                        <CustomFaq faqs={faqs} />
                    </div>
                </div>

                <div className="md:w-4/5 w-full">
                    <Heading text="PCR Terms & Conditions" styles='!text-center' />
                    <div className="py-10">

                        {
                            data.map((item, i) => (
                                <div key={i} className="space-y-4 py-5 flex items-center gap-2">
                                    <span className="font-semibold text-lg ">{i+1}. </span>
                                    <SubHeading text={item.SubHeading} styles='!border-0 !pl-0' />
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CovidTesting