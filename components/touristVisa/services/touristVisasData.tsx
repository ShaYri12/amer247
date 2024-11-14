type Visa = {
  heading: string;
  ProcessingTime: string;
  stayPeriod: string;
  slug: string;
  validity: string | number; // Update type to allow both string and number
  entry: string | number; // Update type to allow both string and number
  price: number;
};

export const TouristVisasData: Visa[] = [
  {
    heading: "On Arrival Visa Extension",
    ProcessingTime: "1 day",
    stayPeriod: "20 - 30",
    validity: "", // Provide a value for validity
    entry: "",
    price: 1100,
    slug: "On_arrival_visa_extension",
  },
  {
    heading: "96 Hours Transit Visa ",
    ProcessingTime: "Upto 2-4 days (Air Ticket Copies Required)",
    stayPeriod: "4",
    validity: "30",
    entry: "Single",
    slug: "96_hours_tourist_visa",
    price: 400,
    // price: 5,
  },
  {
    heading: "14 Days Tourist Visa ",
    ProcessingTime: "Upto 2-4 days",
    stayPeriod: "14",
    validity: "58",
    entry: "single",
    slug: "14_days_tourist_visa",
    price: 650,
  },
  {
    heading: "14 Days Tourist Visa (Express) ",
    ProcessingTime: "Upto 24 hours",
    stayPeriod: "14",
    validity: "58",
    entry: "single",
    price: 750,
    slug: "14_days_tourist_visa_express",
  },
  {
    heading: "30 Days Tourist Visa (Popular) ",
    ProcessingTime: "Upto 2-4 days",
    stayPeriod: "30",
    validity: "58",
    entry: "single",
    slug: "30_days_tourist_visa_popular",
    price: 650,
  },

  {
    heading: "30 Days Tourist Visa (Multiple Entry) ",
    ProcessingTime: "Upto 2-4 days",
    stayPeriod: "30",
    validity: "58",
    entry: "Multiple",
    price: 900,
    slug: "30_days_tourist_visa_multiple_entry",
  },
  {
    heading: "30 Days Tourist Visa (Express) ",
    ProcessingTime: "Upto 24 hours",
    stayPeriod: "30",
    validity: "58",
    entry: "Single",
    slug: "30_days_tourist_visa_express",
    price: 750,
  },
  {
    heading: "60 Days Tourist Visa",
    ProcessingTime: "Upto 2-4 days",
    stayPeriod: "60",
    validity: "", // Provide a value for validity
    entry: "",
    price: 850,
    slug: "60_days_tourist_visa",
  },
  {
    heading: "60 Days Multiple Entry",
    ProcessingTime: "Upto 2-4 days",
    stayPeriod: "60",
    validity: "", // Provide a value for validity, assuming it's a number
    entry: "",
    price: 1100,
    slug: "60_days_multiple_entry",
  },
  {
    heading: "90 Days Single Entry",
    ProcessingTime: "Upto 2-4 days",
    stayPeriod: "90",
    validity: "", // Provide a value for validity
    entry: "",
    price: 1800,
    slug: "90_days_single_entry",
  },
  
  // Add more dummy data as needed
];
