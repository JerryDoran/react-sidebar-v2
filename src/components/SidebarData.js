import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";

const sidebarData = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiFillHome />,
    iconClosed: <RiArrowDownSFill />,
    iconOpen: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoIosPaper />
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIosPaper />
      }
    ],
    cName: "nav-text"
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIosPaper />,
    iconClosed: <RiArrowDownSFill />,
    iconOpen: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Report One",
        path: "/reports/report-one",
        icon: <IoIosPaper />
      },
      {
        title: "Report Two",
        path: "/reports/report-two",
        icon: <IoIosPaper />
      },
      {
        title: "Report Three",
        path: "/reports/report-three",
        icon: <IoIosPaper />
      }
    ]
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaCartPlus />
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoMdPeople />
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaEnvelopeOpenText />,
    iconClosed: <RiArrowDownSFill />,
    iconOpen: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Message One",
        path: "/messages/message-one",
        icon: <IoIosPaper />
      },
      {
        title: "Message Two",
        path: "/reports/message-two",
        icon: <IoIosPaper />
      }
    ]
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoMdHelpCircle />
  }
];

export default sidebarData;
