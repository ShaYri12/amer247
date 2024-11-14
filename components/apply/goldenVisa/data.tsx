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
    title: "All Golden Visa Services",
    services: [
      {
        heading: "Golden Visa for Commercial Investor",
        slug: "golden_visa_for_commercial_investor",
        subHeading: "Read more about required documents, details & apply now",
        price: "2978.90 AED",
        reqDocs: [
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "Auditor's professional license copy",
          "Auditor company Trade License",
          "Audit report for the previous financial year",
          "Last 3-month bank statement copy",
          "Trade license copy + establishment card copy + memorandum",
        ],
        redpoints: [
          "** Applicant Should be inside country for the complete process",
          "** Fees – AED 2978.90 (Additional AED 100 for Each Dependent to hold their visa)",
        ],
      },
      {
        heading: "Golden Visa for Director / Manager",
        slug: "golden_visa_for_director_manager",
        subHeading: "Read more about required documents, details & apply now",
        price: "2978.90 AED",
        reqDocs: [
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "Bachelor degree or Above - certificate should be attested from MOFA UAE (if Immigration requested for further clarification you need to provide Equivalency Certificate from Ministry of Education.)",
          "Latest 6 months bank statement with bank stamp reflecting salary of AED 30,000 in the last 6 months (1 page per month showing salary credited in your account)",
          "Arabic Salary certificate (For Free Zone - Issued by Free zone Authority/ Govt - Salary should be AED 30,000 or above)",
          "Labor contract (For Private Sector – Salary should be AED 30,000 or above)",
          "Company NOC letter for your Golden Visa",
          "Equivalency Certificate Issued from MOE (Mandatory)",
          "Applicant Basic Salary Should be AED 30,000 or more",
        ],
        redpoints: [
          "** Profession should be Manager/Director/CEO on Visa",
          "** Profession should be same on Visa and Labor contract/Salary Certificate",
          "** Applicant Should be inside country for the complete process",
          "** Fees – AED 2978.90 (Additional AED 100 for Each Dependent to hold their visa)",
        ],
      },
      {
        heading: "Golden Visa for Doctors",
        subHeading: "Read more about required documents, details & apply now",
        slug: "golden_visa_for_doctors",
        price: "2978.90 AED",
        reqDocs: [
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "DHA professional license copy",
          "Latest 6 months bank statement with bank stamp reflecting salary of AED 30,000 in the last 6 months (1 page per month showing salary credited in your account)",
          "Arabic Salary certificate (For Free Zone - Issued by Free zone Authority/ Govt - Salary should be AED 30,000 or above)",
          "Labor contract (For Private Sector – Salary should be AED 30,000 or above)",
          "Company NOC letter for your Golden Visa",
        ],
        redpoints: [
          "** Profession should be same on Visa and Labor contract/Salary Certificate",
          "** Applicant Should be inside country for the complete process",
          "** Fees – AED 2978.90 (Additional AED 100 for Each Dependent to hold their visa)",
        ],
      },
      {
        heading: "Golden Visa for Engineers",
        subHeading: "Read more about required documents, details & apply now",
        slug: "golden_visa_for_engineers",
        price: "2978.90 AED",
        reqDocs: [
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "Engineering Degree or Above - certificate should be attested from MOFA UAE (if Immigration requested for further clarification you need to provide Equivalency Certificate from Ministry of Education.)",
          "Latest 6 months bank statement with bank stamp reflecting salary of AED 30,000 in the last 6 months (1 page per month showing salary credited in your account)",
          "Arabic Salary certificate (For Free Zone - Issued by Free zone Authority/ Govt - Salary should be AED 30,000 or above)",
          "Labor contract (For Private Sector – Salary should be AED 30,000 or above)",
          "Company NOC letter for your Golden Visa",
          "Equivalency Certificate Issued from MOE (Mandatory)",
          "Applicant Basic Salary Should be AED 30,000 or more",
        ],
        redpoints: [
          "** Profession should be same on Visa and Labor contract/Salary Certificate",
          "** Applicant Should be inside country for the complete process",
          "** Fees – AED Your Price Here (Additional AED 100 for Each Dependent to hold their visa)",
        ],
      },
      {
        heading: "Golden Visa for New Born Baby",
        subHeading: "Read more about required documents, details & apply now",
        slug: "golden_visa_for_new_born_baby",
        price: "1,578.90 AED",
        reqDocs: [
          "Sponsor Original ID",
          "Passport & Visa of the Baby",
          "A Digital Photo of the Baby",
          "Arabic Birth Certificate of the Baby",
          "Passport and visa copy of Mother",
          "Arabic Salary certificate (For Free Zone - Issued by Free zone Authority/ Govt)",
          "Labor contract (For Private Sector)",
        ],
        redpoints: [
          "** A baby born in UAE and not exit the country is considered as the New Born category",
          "** Fees – 1,578.90 AED",
        ],
      },
      {
        heading: "Golden Visa for PhD Holder",
        subHeading: "Read more about required documents, details & apply now",
        price: "2978.90 AED",
        slug: "golden_visa_for_phd_holder",
        reqDocs: [
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "Attested PHD Degree",
          "Equivalency Letter from Ministry Of Education",
          "Company NOC letter for your Golden Visa",
          "Valid Employment Contract",
          "Last 06 Months Bank Statement",
        ],
        redpoints: [
          "** Applicant Should be inside country for the complete process",
          "** Fees – AED 2978.90 (Additional AED 100 for Each Dependent to hold their visa)",
        ],
      },
      {
        heading: "Golden Visa for Scientists",
        subHeading: "Read more about required documents, details & apply now",
        price: "2978.90 AED",
        slug: "golden_visa_for_scientists",
        reqDocs: [
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "Scientist License Certificate",
          "A letter of nomination from the Council of Emirates Scholars",
          "Company NOC letter for your Golden Visa",
          "Valid Employment Contract",
        ],
        redpoints: [
          "** Applicant Should be inside country for the complete process",
          "** Fees – AED 2978.90 (Additional AED 100 for Each Dependent to hold their visa)",
        ],
      },
      {
        heading: "Golden Visa for Family Members",
        subHeading: "Read more about required documents, details & apply now",
        price: "2978.90 AED",
        slug: "golden_visa_for_family_members",
        reqDocs: [
          "Sponsor Original ID",
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "Attested Birth Certificate (For Children)",
          "Attested Marriage Certificate (For Spouse)",
          "Arabic Salary certificate (For Free Zone - Issued by Free zone Authority/ Govt)",
          "Labor contract (For Private Sector)",
          "Medical Fit Certificate (For 18 Years +)",
        ],
        redpoints: [
          "** Applicant Should be inside country for the complete process",
          "** For existing UAE residents can cancel their Visa only after verification of documents",
          "** Fees – AED 2978.90",
        ],
      },
      {
        heading:
          "Golden Visa for Bachelor Degree Holder / Professionals 300000 Aed or above Salary",
        subHeading: "Read more about required documents, details & apply now",
        slug: "golden_visa_for_bachelor_degree_holder_professionals_300000_aed_or_above_salary",
        price: "2978.90 AED",
        reqDocs: [
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "Bachelor degree or Above - certificate should be attested from MOFA UAE (if Immigration requested for further clarification you need to provide Equivalency Certificate from Ministry of Education.)",
          "Latest 6 months bank statement with bank stamp reflecting salary of AED 30,000 in the last 6 months (1 page per month showing salary credited in your account)",
          "Arabic Salary certificate (For Free Zone - Issued by Free zone Authority/ Govt - Salary should be AED 30,000 or above)",
          "Labor contract (For Private Sector – Salary should be AED 30,000 or above)",
          "Company NOC letter for your golden visa",
          "Equivalency Certificate Issued from MOE (Mandatory)",
          "Applicant Basic Salary Should be AED 30,000 or more",
        ],
        redpoints: [
          "** Profession should be same on Visa and Labor contract/Salary Certificate",
          "** Applicant Should be inside country for the complete process",
          "** Fees – AED 2978.90 (Additional AED 100 for Each Dependent to hold their visa)",
        ],
      },
      {
        heading:
          "Golden Visa for Commercial Investor (With 2 Million Fixed Deposit in Bank)",
        subHeading: "Read more about required documents, details & apply now",
        slug: "golden_visa_for_commercial_investor_with_2_million_fixed_deposit_in_bank",
        price: "2978.90 AED",
        reqDocs: [
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "A letter from the Bank (Arabic)",
        ],
        redpoints: [
          "** Letter Should mention that the deposit will not break for 2 years",
          "** You have to report GDRFA if want to withdraw Deposit",
          "** Applicant Should be inside country for the complete process",
          "** Fees – AED 2978.90 (Additional AED 100 for Each Dependent to hold their visa)",
        ],
      },
      {
        heading: "Golden Visa for Outstanding Student/ Highschool Graduate",
        subHeading: "Read more about required documents, details & apply now",
        slug: "golden_visa_for_outstanding_student_highschool_graduate",
        price: "2978.90 AED",
        reqDocs: [
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "Mark list showing 3.8 GPA and above",
          "Accredited university certificate",
          "ICP nomination Email – (Screen Shot)",
        ],
        redpoints: [
          "** Applicant Should be inside country for the complete process",
          "** Fees – AED 2978.90",
        ],
      },
      {
        heading: "Golden Visa for Outstanding Student/ University Graduate",
        subHeading: "Read more about required documents, details & apply now",
        slug: "golden_visa_for_outstanding_student_university_graduate",
        price: "2978.90 AED",
        reqDocs: [
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "Mark list showing 3.8 GPA and above",
          "Accredited university certificate",
          "ICP nomination Email – (Screen Shot)",
        ],
        redpoints: [
          "** Applicant Should be inside country for the complete process",
          "** Fees – AED 2978.90 (Additional AED 100 for Each Dependent to hold their visa)",
        ],
      },
      {
        heading: "Golden Visa for Creative People in Culture & Art",
        subHeading: "Read more about required documents, details & apply now",
        slug: "golden_visa_for_creative_people_in_culture_art",
        price: "2978.90 AED",
        reqDocs: [
          "Passport & Visa of the Applicant",
          "Emirates ID copy of the Applicant",
          "A Digital Photo of the Applicant",
          "Recommendation letter from Dubai Culture and Arts Authority",
          "Latest Resume",
          "** Applicant Should be inside country for the complete process",
        ],
        redpoints: [
          "** Applicant Should be inside country for the complete process",
          "** Fees – AED 2978.90 (Additional AED 100 for Each Dependent to hold their visa)",
        ],
      },
    ],
  },
];
