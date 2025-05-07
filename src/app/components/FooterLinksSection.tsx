export default function FooterLinksSection() {
  const sections = [
    {
      title: "MAKEMYTRIP",
      items: [
        "About Us",
        "Investor Relations",
        "Careers",
        "Sustainability",
        "MMT Foundation",
        "Legal Notices",
        "CSR Policy",
        "myPartner – Travel Agent Portal",
        "List your hotel",
        "Partners - Redbus",
        "Partners - Goibibo",
        "Advertise with Us",
        "Holiday-Franchise",
      ],
    },
    {
      title: "ABOUT THE SITE",
      items: [
        "Customer Support",
        "MMT Black Loyalty Program",
        "Payment Security",
        "Privacy Policy",
        "Cookie Policy",
        "User Agreement",
        "Terms of Service",
        "Franchise Offices",
        "Make A Payment",
        "Work From Home",
        "Escalation Channel",
      ],
    },
    {
      title: "PRODUCT OFFERING",
      items: [
        "Flights",
        "International Flights",
        "Charter Flights",
        "Hotels",
        "International Hotels",
        "Homestays and Villas",
        "Activities",
        "Holidays in India",
        "International Holidays",
        "Book Hotels From UAE",
        "myBiz for Corporate Travel",
        "Book Online Cabs",
        "Book Bus Tickets",
        "Book Train Tickets",
        "Cheap Tickets to India",
        "Book Flights From US",
        "Book Flights to India",
        "Trip Planner",
        "Forex Card",
        "Buy Foreign Currency",
        "Travel Insurance",
        "Visa Services",
        "Gift Vouchers",
      ],
    },
    {
      title: "QUICK LINKS",
      items: [
        "Flights Discount Coupons",
        "Domestic Airlines",
        "Indigo Airlines",
        "Air Asia",
        "SpiceJet",
        "GoAir",
        "Air India",
        "Air India Express",
        "Vistara",
        "New Delhi Mumbai Flights",
        "Pune Delhi Flights",
        "Delhi Chennai Flights",
        "Delhi Guwahati Flights",
        "Mumbai Varanasi Flights",
        "Guwahati Delhi Flights",
        "Goa Delhi Flights",
        "Delhi Goa Flights",
        "Delhi Chennai Flights",
      ],
    },
    {
      title: "IMPORTANT LINKS",
      items: [
        "Cheap Flights",
        "Flight Status",
        "Kumbh Mela",
        "Domestic Airlines",
        "International Airlines",
        "Indigo",
        "SpiceJet",
        "GoAir",
        "Air Asia",
        "Air India",
        "Indian Railways",
        "Trip Ideas",
        "Beaches",
        "Honeymoon Destinations",
        "Romantic Destinations",
      ],
    },
    {
      title: "CORPORATE TRAVEL",
      items: [
        "Business Travel",
        "Corporate Travel",
        "Corporate Travel Management",
        "Corporate Travel Solution",
        "Corporate Hotel Booking",
        "Corporate Flight Booking",
        "Expense Management",
        "Corporate Expense Management",
        "GST on Hotel Rooms",
        "GST on Flight Tickets",
        "Business Travel for SME",
        "GST Invoice for International Flights",
        "GST on Train Tickets",
        "myBiz - Best Business Travel Platform",
        "GST Invoice for Corporate Travel",
      ],
    },
  ];

  return (
    <div className="overflow-hidden bg-gray-100">
      ;
      <div className="container-fluid">
        <div className="row">
          <div className="w-12/12">
            <div className="w-10/12 mx-auto">
              <div className="py-10 px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 gap-6">
                  {sections.map((section, index) => (
                    <div key={index}>
                      <p className="text-xs font-bold text-gray-900 mb-2">
                        {section.title}
                      </p>
                      <p className="space-y-1 flex flex-wrap">
                        {section.items.map((item, idx) => (
                          <span key={idx} className="text-[13px] text-gray-700">
                            {item}
                          </span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
