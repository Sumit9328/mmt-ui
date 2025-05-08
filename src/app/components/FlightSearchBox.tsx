'use client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FlightBooking() {
    const [activeTab, setActiveTab] = useState('Flights');
    const [selectedFare, setSelectedFare] = useState('Regular');

    const tabList = [
        { name: 'Flights', icon: '✈️' },
        { name: 'Hotels', icon: '🏨' },
        { name: 'Homestays & Villas', icon: '🏡' },
        { name: 'Holiday Packages', icon: '🎒' },
        { name: 'Trains', icon: '🚄' },
        { name: 'Buses', icon: '🚌' },
        { name: 'Cabs', icon: '🚖' },
        { name: 'Visa', icon: '📄' },
        { name: 'Forex Card & Currency', icon: '💱' },
        { name: 'Travel Insurance', icon: '🛡️' },
    ];

    const fares = [
        { label: 'Regular', desc: 'Regular fares' },
        { label: 'Student', desc: 'Extra discounts/baggage' },
        { label: 'Senior Citizen', desc: 'Up to ₹ 600 off' },
        { label: 'Armed Forces', desc: 'Up to ₹ 600 off' },
        { label: 'Doctor and Nurses', desc: 'Up to ₹ 600 off' },
    ];

    return (


        <>


            <div className="bg-cover p-6 mt-5 sm:block hidden" style={{ backgroundImage: `url('/your-background.jpg')` }}>
                <div className="bg-white absolute top-[140px] z-1 left-1/2 transform -translate-x-1/2 rounded-xl shadow-md p-3 flex flex-wrap justify-between text-center w-max">
                    {tabList.map(tab => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`flex flex-col items-center px-3 py-2 text-sm font-medium transition border-b-2 ${activeTab === tab.name
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-300'
                                }`}
                        >
                            <span className="text-xl">{tab.icon}</span>
                            <span className="text-xs">{tab.name}</span>
                        </button>
                    ))}
                </div>


                <div className='w-10/12 mx-auto'>
                    <div className="bg-white rounded-xl relative shadow-lg mt-4 p-5">
                        {activeTab === 'Flights' && (
                            <>
                                <div className="flex gap-6 mb-4">
                                    {['One Way', 'Round Trip', 'Multi City'].map((type, idx) => (
                                        <label key={idx} className="flex items-center space-x-2 cursor-pointer">
                                            <input type="radio" name="trip" defaultChecked={type === 'One Way'} />
                                            <span className="font-semibold">{type}</span>
                                        </label>
                                    ))}
                                </div>

                                <div className="row g-3 mb-4">
                                    <div className="col-md-3">
                                        <label className="form-label fw-bold">From</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Delhi"
                                            style={{ fontSize: "40px" }}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label fw-bold">To</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Bengaluru"
                                            style={{ fontSize: "40px" }}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <label className="form-label fw-bold">Departure</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            defaultValue="2025-05-08"
                                            style={{ fontSize: "18px" }}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <label className="form-label fw-bold">Return</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            disabled
                                            placeholder="Tap to add date"
                                            style={{ fontSize: "18px" }}
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <label className="form-label fw-bold">Travellers</label>
                                        <select className="form-select">
                                            <option>1 Traveller</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <p className="fw-bold mb-2">Select a special fare</p>
                                    <div className="d-flex flex-wrap gap-3">
                                        {fares.map(fare => (
                                            <button
                                                key={fare.label}
                                                onClick={() => setSelectedFare(fare.label)}
                                                className={`p-3 rounded-lg border-2 transition text-start ${selectedFare === fare.label
                                                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                                                    : 'border-gray-300 text-gray-700 hover:border-blue-300'
                                                    }`}
                                            >
                                                <div className="form-check d-flex align-items-center gap-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="fare"
                                                        checked={selectedFare === fare.label}
                                                        readOnly
                                                    />
                                                    <div>
                                                        <div className="fw-bold">{fare.label}</div>
                                                        <div className="text-sm text-muted">{fare.desc}</div>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center mt-5 absolute bottom-[-20px] w-11/12">
                                    <button className=" btn btn-primary px-5 py-2 text-lg rounded-[40px] shadow-lg">
                                        SEARCH
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>





            <div
                className="bg-cover sm:p-4 p-3 sm:p-6 sm:mt-0 sm:hidden block"
                style={{ backgroundImage: `url('/your-background.jpg')` }}
            >
                <div className="bg-white relative z-10 top-10 left-1/2 transform -translate-x-1/2 rounded-xl shadow-md p-2 flex flex-wrap justify-center sm:justify-between text-center w-full sm:w-max">
                    {tabList.map(tab => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`flex flex-col items-center px-3 py-2 text-xs sm:text-sm font-medium transition border-b-2 ${activeTab === tab.name
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-300'
                                }`}
                        >
                            <span className="text-lg sm:text-xl">{tab.icon}</span>
                            <span>{tab.name}</span>
                        </button>
                    ))}
                </div>

                <div className="w-full sm:w-10/12 mx-auto">
                    <div className="bg-white rounded-xl relative shadow-lg mt-12 sm:mt-16 p-4 sm:p-6">
                        {activeTab === 'Flights' && (
                            <>
                                <div className="flex flex-wrap gap-4 mb-4 justify-center sm:justify-start">
                                    {['One Way', 'Round Trip', 'Multi City'].map((type, idx) => (
                                        <label
                                            key={idx}
                                            className="flex items-center space-x-2 cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="trip"
                                                defaultChecked={type === 'One Way'}
                                            />
                                            <span className="font-semibold text-sm sm:text-base">{type}</span>
                                        </label>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-bold mb-1">From</label>
                                        <input
                                            type="text"
                                            className="w-full border p-2 rounded text-[35px] leading-[35px]"
                                            defaultValue="Delhi"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-1">To</label>
                                        <input
                                            type="text"
                                            className="w-full border p-2 rounded text-[35px] leading-[35px]"
                                            defaultValue="Bengaluru"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold mb-1">Departure</label>
                                        <input
                                            type="date"
                                            className="w-full border p-2 rounded"
                                            defaultValue="2025-05-08"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-1">Return</label>
                                        <input
                                            type="date"
                                            className="w-full border p-2 rounded"
                                            disabled
                                            placeholder="Tap to add date"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-bold mb-1">Travellers</label>
                                        <select className="w-full border p-2 rounded">
                                            <option>1 Traveller</option>
                                        </select>
                                    </div>
                                </div>


                                <div>
                                    <p className="font-bold mb-2">Select a special fare</p>
                                    <div className="flex flex-wrap gap-3">
                                        {fares.map(fare => (
                                            <button
                                                key={fare.label}
                                                onClick={() => setSelectedFare(fare.label)}
                                                className={`p-3 rounded-lg border-2 text-left w-full sm:w-auto ${selectedFare === fare.label
                                                        ? 'border-blue-500 text-blue-600 bg-blue-50'
                                                        : 'border-gray-300 text-gray-700 hover:border-blue-300'
                                                    }`}
                                            >
                                                <div className="flex items-start gap-2">
                                                    <input
                                                        type="radio"
                                                        className="mt-1"
                                                        name="fare"
                                                        checked={selectedFare === fare.label}
                                                        readOnly
                                                    />
                                                    <div>
                                                        <div className="font-bold">{fare.label}</div>
                                                        <div className="text-sm text-gray-500">{fare.desc}</div>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center mt-6">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-lg text-lg">
                                        SEARCH
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>





    );
}


