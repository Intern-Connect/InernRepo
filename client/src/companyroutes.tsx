import React from "react";

// Admin Imports
import Jobs from 'views/company/jobs'
import Questions from 'views/company/question'


// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdQuestionMark,
  MdBackpack,
  MdBackHand,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Jobs",
    layout: "/company",
    path: "jobs",
    icon: <MdBackpack className="h-6 w-6" />,
    component: <Jobs />,
  },
  {
    name: "Questions",
    layout: "/company",
    path: "questions",
    icon: <MdQuestionMark className="h-6 w-6" />,
    component: <Questions />,
  },

  {
    name: "Student",
    layout: "/company",
    path: "route",
    icon: <MdBackHand className="h-6 w-6" />,
    component: <Questions />,
  },
];
export default routes;
