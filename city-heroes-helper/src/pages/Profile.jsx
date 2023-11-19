import React, {useState} from 'react';
import '../styles/toggleSwitch.css'; // Make sure to import the new CSS file
import '../styles/profile.css'; // Make sure to import the new CSS file

const OpenEvents = () => {
    const [distance, setDistance] = useState(40);

    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
    };

    return (
        <div className="flex-container">
            <div className="">
                {/* Profile Picture */}
                <div className="profile-container">
                    <div className="profile-image">
                        <img src="default_profilepicture.jpg" alt="Profile"/>
                    </div>
                    <div className="profile-info">
                        <h2 className="heading">Samuel Sacher &rarr;</h2>
                        <p className="small-text">Registered via e-ID</p>
                    </div>
                </div>
                {/* Adjustable Distance */}
                <div className='adjustable-distance'>
                    <h3 className="heading mb-2">Maximum Distance</h3>
                    <input
                        type="range"
                        min={1}
                        max={100}
                        value={distance}
                        onChange={handleDistanceChange}
                        className="range-input"
                    />
                    <p className="small-text range-value">{distance} km</p>
                    {/* Checkboxes */}
                    <div className="checkbox-group">
                        <label className="checkbox-label">Social Tasks</label>
                        <label className="switch">
                            <input type="checkbox" name="social" defaultChecked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label className="checkbox-label">Physical Work</label>
                        <label className="switch">
                            <input type="checkbox" name="physical" defaultChecked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label className="checkbox-label">Logistics</label>
                        <label className="switch">
                            <input type="checkbox" name="logistics"/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="notification-settings">
                    <h3 className="heading mb-2">Notification Settings &rarr;</h3>
                    {/* Implement notification settings UI */}
                    {/* Example: Toggle switches, dropdowns */}
                </div>
            </div>
        </div>
    );
};

export default OpenEvents;
