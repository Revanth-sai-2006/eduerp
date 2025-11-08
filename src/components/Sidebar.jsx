// components/Sidebar.jsx
import React from "react";

export default function Sidebar({ activePage, setActivePage, user }) {
  const menuItems = [
    { id: "dashboard-page", label: "Dashboard", icon: "fa-solid fa-house" },
    { id: "students-page", label: "Students", icon: "fa-solid fa-user-graduate" },
    { id: "faculty-page", label: "Faculty", icon: "fa-solid fa-chalkboard-teacher" },
    { id: "courses-page", label: "Courses", icon: "fa-solid fa-book" },
    { id: "schedule-page", label: "Schedule", icon: "fa-solid fa-calendar-days" },
    { id: "finance-page", label: "Finance", icon: "fa-solid fa-money-bill-wave" },
    { id: "library-page", label: "Library", icon: "fa-solid fa-book-open" },
    { id: "reports-page", label: "Reports", icon: "fa-solid fa-chart-column" },
    { id: "settings-page", label: "Settings", icon: "fa-solid fa-gear" }
  ];

  return (
    <aside className="sidebar">

      {/* Profile */}
      <div className="sidebar-profile">
        <div className="profile-circle">
          {user?.username?.substring(0, 2).toUpperCase()}
        </div>
        <div className="sidebar-email">{user?.username}@32343</div>
        <div className="sidebar-role">Administrator</div>
      </div>

      {/* Menu */}
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`sidebar-item ${activePage === item.id ? "active" : ""}`}
            onClick={() => setActivePage(item.id)}
          >
            <i className={`${item.icon} sidebar-icon`}></i>
            <span className="sidebar-text">{item.label}</span>
          </li>
        ))}
      </ul>

    </aside>
  );
}
