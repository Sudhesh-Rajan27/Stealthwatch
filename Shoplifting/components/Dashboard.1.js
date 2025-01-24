import React, { useState } from "react";
import './dash.css';
import myImage from '../Assests/icon.png';
import { Link } from "react-router-dom";

export default function Dashboard() {
    const navItems = ["home", "settings", "history", ""];
    const [isOpen, setIsOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState(null);
      
    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            setVideoSrc(videoUrl);
        }
    };

    return (
        <section className="pagee">
            <div className="title">
                <img src={myImage} alt="task-icon" />
            </div>
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
                                <button type="button">
                                    <span className="material-symbols-outlined">{item}</span>
                                    <p>{item}</p>
                                </button>
                            </Link>
                        </div>
                    ))}
                </nav>
            </aside>
            <div className="video-uploader">
                <div className="uploader-box">
                    <input 
                        type="file" 
                        id="videoUpload" 
                        accept="video/*" 
                        onChange={handleVideoUpload} 
                    />
                    <label htmlFor="videoUpload">Choose a video</label>
                    <p>or drag and drop a file here</p>
                </div>
                {videoSrc && (
                    <div className="video-preview">
                        <video controls>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>
        </section>
    );
}
