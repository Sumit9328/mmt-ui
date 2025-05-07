export default function FaqSection() {
  const faqs = [
    {
      question: "How do I make a flight booking on MakeMyTrip?",
      answer:
        "You can book a flight on MakeMyTrip in five easy steps: Head over to the MakeMyTrip flight booking page, Enter your departure and arrival destinations, Select your travel date, Click on ‘Search’. Browse through a wide range of cheap flights based on your airfare preferences, Click on ‘Book Now’ and your air flight booking is done. Alternatively, you can also use the MakeMyTrip app for your flight ticket booking. Download the MakeMyTrip app, Put in the details i.e. date of journey, departure and arrival destinations, travel class of your choice, Select on your best comfortable option and click on ‘Book Now’.",
    },
    {
      question: "Can I avail domestic flight offers on MakeMyTrip?",
      answer:
        "Of course you can. While making domestic flight bookings, you can avail any special offer that is active at that time. In accordance with the offer selected, a listing of eligible cheapest flights would show up on your screen. You can then apply the price filter and click on the downwards arrow, following which budget-friendly flights would start showing up in ascending order from the top (lowest price on top).",
    },
    {
      question: "How can I avail budget air tickets on MakeMyTrip?",
      answer:
        "It’s super-easy to avail budget airfare while booking your cheap flight tickets on MakeMyTrip. Just select the ‘Price’ filter once the available flight options are displayed and adjust as per your convenience. On the MakeMyTrip app, you can select the downward arrow, which will show the lowest airfare at the top and continue downward in ascending order.",
    },
    {
      question:
        "Why could I not avail the flight booking offers at the time of checkout?",
      answer:
        "MakeMyTrip makes use of a world-class real-time reservation database to list airfare and availability. As dynamic changes in airfare take place, or the available flight tickets sell out, the database reflects the changes in real-time. Hence, we suggest you double-check online flight booking prices while selecting flight tickets, and if the airfare might have been dynamically updated since the last time the user had browsed or planned your itinerary.",
    },
  ];

  return (
    <div className="overflow-hidden bg-gray-200">
      ;
      <div className="container-fluid">
        <div className="row">
          <div className="w-12/12">
            <div className="w-10/12 mx-auto">
              <div className="py-6 px-3 sm:px-4 md:px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-2">
                        Q - {faq.question}
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                      <hr className="my-4" />
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
