// components/MainContent.jsx
import React from "react";
import DashboardPage from "./Pages/DashboardPages";
import StudentsPage from "./Pages/StudentsPage";
import FacultyPage from "./Pages/FacultyPage";
import CoursesPage from "./Pages/CoursesPage";
import SchedulePage from "./Pages/SchedulePage";
import FinancePage from "./Pages/FinancePage";
import LibraryPage from "./Pages/LibraryPage";
import ReportsPage from "./Pages/ReportsPage";
import SettingsPage from "./Pages/SettingsPage";

export default function MainContent({ activePage, user }) {
  return (
    <div className="main-area">
      {activePage === "dashboard-page" && <DashboardPage user={user} />}
      {activePage === "students-page" && <StudentsPage />}
      {activePage === "faculty-page" && <FacultyPage />}
      {activePage === "courses-page" && <CoursesPage />}
      {activePage === "schedule-page" && <SchedulePage />}
      {activePage === "finance-page" && <FinancePage />}
      {activePage === "library-page" && <LibraryPage />}
      {activePage === "reports-page" && <ReportsPage />}
      {activePage === "settings-page" && <SettingsPage />}
    </div>
  );
}
