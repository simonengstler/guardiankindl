import React, { useState } from 'react';
import '../styles/toggleSwitch.css';

const OpenEvents = () => {
    const [distance, setDistance] = useState(40); // Initial distance value

    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
    };

    return (
    <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-100 px-8 pt-48 rounded-lg shadow-md h-full w-screen">
                {/* Profile Picture */}
                <div className="flex items-center bg-white px-8 py-3 rounded-xl mb-4">
                    <div className="h-20 w-20 rounded-full overflow-hidden">
                        <img
                            className="object-cover w-full h-full"
                            src="default_profilepicture.jpg"
                            alt="Profile"
                        />
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold">Samuel Sacher &rarr;</h2>
                        <p className="text-sm text-gray-500">Registered via e-ID</p>
                    </div>
                </div>
                {/* Adjustable Distance */}
                <div className='bg-white px-8 py-3 rounded-xl'>
                <div className="mt-4 ">
                    <h3 className="text-lg font-semibold mb-2">Maximum Distance</h3>
                    <input
                        type="range"
                        min={1}
                        max={100}
                        value={distance}
                        onChange={handleDistanceChange}
                        className="w-full"
                    />
                    <p className="text-sm text-gray-500 text-right mt-2">{distance} km</p>
                </div>
                {/* Checkboxes */}
                <div className="flex flex-col">
                    <label className="mb-2">Social Tasks</label>
                    <label className="switch">
                        <input
                            type="checkbox"
                            name="social"
                            defaultChecked
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="flex flex-col">
                    <label className="mb-2">Physical Work</label>
                    <label className="switch">
                        <input
                            type="checkbox"
                            name="physical"
                            defaultChecked
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="flex flex-col">
                    <label className="mb-2">Logistics</label>
                    <label className="switch">
                        <input
                            type="checkbox"
                            name="logistics"
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
                </div>
                {/* Notification Settings */}
                <div className="mt-4 bg-white px-8 py-3 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2">Notification Settings &rarr;</h3>
                    {/* Implement notification settings UI */}
                    {/* Example: Toggle switches, dropdowns */}
                </div>
            </div>
        </div>
    );
};

export default OpenEvents;