import React from "react";

// Admin Imports
import MainDashboard from "views/student/default";
import NFTMarketplace from "views/student/questions";
import Profile from "views/student/profile";
import DataTables from "views/student/tables";
import Jobs from 'views/company/jobs'
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdQuestionMark,
  MdBackpack,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/student",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Questions",
    layout: "/student",
    path: "questions",
    icon: <MdQuestionMark className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Jobs",
    layout: "/student",
    icon: <MdBackpack className="h-6 w-6" />,
    path: "jobs",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/student",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Admin",
    layout: "/student",
    path: "route",
    icon: <MdBackpack className="h-6 w-6" />,
    component: <Jobs />,
  },
];
export default routes;
