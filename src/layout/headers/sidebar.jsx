import Link from 'next/link';
import React from 'react';
import MobileMenus from './mobile-menus';

const Sidebar = ({isOpen, setIsOpen}) => {
    return (
        <>
            <div className={`tp-sidebar-menu ${isOpen && "sidebar-opened"}`}>
                <button type="button" onClick={() => setIsOpen(false)} className="sidebar-close" aria-label="Close menu"><i className="fal fa-times"></i></button>
                <div className="d-flex align-items-center justify-content-between mb-20" style={{ gap: "12px" }}>
                    <div onClick={() => setIsOpen(false)} className="side-logo">
                        <Link href="/"><img src="/assets/img/onemobility-assets/onembility.png" alt="One Mobility Group" style={{ maxHeight: "48px", width: "auto", objectFit: "contain" }} /></Link>
                    </div>
                    <button type="button" onClick={() => setIsOpen(false)} className="sidebar-close-inner" aria-label="Close menu" style={{ flexShrink: 0, width: "44px", height: "44px", borderRadius: "8px", border: "1px solid #eee", background: "#f5f5f5", color: "#333", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", cursor: "pointer" }}><i className="fal fa-times"></i></button>
                </div>
                <div className="mobile-menu mean-container">
                    <MobileMenus />
                    <div className="sidebar-title">
                        <h3>CONTACT US</h3>
                    </div>
                    <ul className="sidebar-list">
                        <li>One Mobility Group</li>
                        <li>info@onemobilitygroup.com</li>
                    </ul>
                </div>
            </div>
            <div onClick={() => setIsOpen(false)} className={`body-overlay ${isOpen && "opened"}`}></div>
        </>
    );
};

export default Sidebar;