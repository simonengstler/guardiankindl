import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OpenEvents from './pages/OpenEvents';

const App = () => {
    const [currentPage, setCurrentPage] = useState('OpenEvents');

    const renderPage = () => {
        switch (currentPage) {
            case 'OpenEvents':
                return <OpenEvents />;
            case 'MoreDetails':
                return <MoreDetails />
            // TODO: Add profile & Accepted Events Page
            default:
                return null;
        }
    };

    return (
        <div>
            {renderPage()}
            <footer className="ios-footer">
                <button onClick={() => setCurrentPage('AcceptedEvents')}>Accepted Events</button>
                <button onClick={() => setCurrentPage('OpenEvents')}>Open Events</button>
                <button onClick={() => setCurrentPage('Profile')}>Profile</button>
            </footer>
        </div>
    );
};

export default App;
