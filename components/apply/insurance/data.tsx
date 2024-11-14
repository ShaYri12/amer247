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
    title: "INSURANCE",
    services: [
      {
        heading: "Insurance for employees (Age-18-90) (Salary below AED 4000)",
        slug: "insurance-for-employees-age-18-90",
        subHeading: "Insurance for employees (Age-18-90)",
        price: "AED 816.35",
        reqDocs: ["Applicant Passport", "Applicant Entry Permit"],
        redpoints: [
          "Maternity will be covered for married females aged between 18-45, only after 40 days from the policy issuance.",
        ],
      },
      {
        heading:
          "Insurance for employees/partners/Investors (Age-18-65) (Salary AED 4000 OR More)",
        slug: "insurance-for-employees-partners-investors-age-18-65",
        subHeading: "Insurance for employees/partners/Investors (Age-18-65)",
        price: "AED 1162.75",
        reqDocs: ["Applicant Passport", "Applicant Entry Permit"],
        redpoints: [
          "Maternity will be covered for married females aged between 18-45, only after 40 days from the policy issuance.",
        ],
      },
      {
        heading: "Insurance for child Son/Daughter (Age 0-5)",
        slug: "insurance-for-child-son-daughter-age-0-5",
        subHeading: "Insurance for child Son/Daughter (Age 0-5)",
        price: "AED 1403.30",
        reqDocs: ["Applicant Passport", "Applicant Entry Permit"],
        redpoints: [
          "Maternity will be covered for married females aged between 18-45, only after 40 days from the policy issuance.",
        ],
      },
      {
        heading: "Insurance for child Son/Daughter (Age 06-25)",
        slug: "insurance-for-child-son-daughter-age-06-25",
        subHeading: "Insurance for child Son/Daughter (Age 06-25)",
        price: "AED 1264.70",
        reqDocs: ["Applicant Passport", "Applicant Entry Permit"],
        redpoints: [
          "Maternity will be covered for married females aged between 18-45, only after 40 days from the policy issuance.",
        ],
      },
      {
        heading: "Insurance for Daughter (Age 26-28)",
        slug: "insurance-for-daughter-age-26-28",
        subHeading: "Insurance for Daughter (Age 26-28)",
        price: "AED 1264.70",
        reqDocs: ["Applicant Passport", "Applicant Entry Permit"],
        redpoints: [
          "Maternity will be covered for married females aged between 18-45, only after 40 days from the policy issuance.",
        ],
      },
      {
        heading: "Insurance for Spouse (Age 18-60)",
        slug: "insurance-for-spouse-age-18-60",
        subHeading: "Insurance for Spouse (Age 18-60)",
        price: "<b>Husband</b> - AED 2605.55 <br/>  <b>Wife</b> - AED 2926.85",
        reqDocs: ["Applicant Passport", "Applicant Entry Permit"],
        redpoints: [
          "Maternity will be covered for married females aged between 18-45, only after 40 days from the policy issuance.",
        ],
      },
      {
        heading: "Insurance for Spouse (Age 61-90)",
        slug: "insurance-for-spouse-age-61-90",
        subHeading: "Insurance for Spouse (Age 61-90)",
        price: "<b>Husband</b> - AED 5902.55 <br/>  <b>Wife</b> - AED 5902.55",
        reqDocs: ["Applicant Passport", "Applicant Entry Permit"],
        redpoints: [
          "Maternity will be covered for married females aged between 18-45, only after 40 days from the policy issuance.",
        ],
      },
      {
        heading: "Insurance for Parents (Aged up to 90)",
        slug: "insurance-for-parents-aged-up-to-90",
        subHeading: "Insurance for Parents (Aged up to 90)",
        price: "AED 5902.55",
        reqDocs: ["Applicant Passport", "Applicant Entry Permit"],
        redpoints: [
          "Maternity will be covered for married females aged between 18-45, only after 40 days from the policy issuance.",
        ],
      },
    ],
  },
];
