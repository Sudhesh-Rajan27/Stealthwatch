import React, { useState } from "react";
import { Link } from "react-router-dom";
import './history.css'
export default function History() {
    const navItems = ["home", "settings", "history", "bookmark"];
    const [isOpen, setIsOpen] = useState(false);
    const [searchDate, setSearchDate] = useState('');
    const [events, setEvents] = useState([
        { id: 1, date: '2024-05-20', time: '14:30', description: 'Shoplifting detected at entrance' },
        { id: 2, date: '2024-05-21', time: '11:15', description: 'Suspicious activity in electronics section' },
        { id: 3, date: '2024-05-22', time: '16:45', description: 'Shoplifting detected at exit' },
        // Add more events as needed
    ]);

    const handleSearchChange = (e) => {
        setSearchDate(e.target.value);
    };

    const filteredEvents = events.filter(event => event.date.includes(searchDate));

    return (
        <section className="pag">
            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <header>
                    <button
                        type="button"
                        className="sidebar-burger"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="material-symbols-outlined">
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                </header>
                <nav>
                    {navItems.map((item) => (
                        <div key={item} className="link-container">
                            <Link to={`/${item}`} key={item}>
                                <button type="button" >
                                    <span className="material-symbols-outlined">{item}</span>
                                    <p>{item}</p>
                                </button>
                            </Link>
                        </div>
                    ))}
                </nav>
            </aside>

                <div className="history-container">
                    <h2>Shoplifting History</h2>
                    <div className="search-container">
                        <input
                            type="text"
                            value={searchDate}
                            onChange={handleSearchChange}
                            placeholder="Search by date (YYYY-MM-DD)"
                            className="search-input"
                        />
                    </div>
                    <table className="history-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEvents.map(event => (
                                <tr key={event.id}>
                                    <td>{event.date}</td>
                                    <td>{event.time}</td>
                                    <td>{event.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
        </section>
    );
}
