import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title : 'Dashboard',
        path : '/',
        icon : <AiIcons.AiFillHome />,
        iconClosed : <RiIcons.RiArrowDownFill />,
        iconOpend : <RiIcons.RiArrowUpFill />
    },
    {
        title : 'Calender',
        path : '/calender',
        icon : <AiIcons.AiFillCalendar />
    },
    {
        title : 'Chat',
        path : '/chat',
        icon : <AiIcons.AiFillMessage />
    },
    {
        title : 'User',
        path : '/user',
        icon : <AiIcons.AiFillProfile />
    },
    {
        title : 'Community',
        icon : <RiIcons.RiShareFill />,
        subNav : [
            {
                title : 'Announcements',
                path : '/community/announcements'
            },
            {
                title : 'Info Page',
                path : '/community/infoPage'
            }
        ]
    },
    {
        title : 'Plans',
        path : '/plans',
        icon : <IoIcons.IoIosBriefcase />
    },
    {
        title : 'Resources',
        icon : <IoIcons.IoIosPaper />,
        subNav : [
            {
                title : 'All resources',
                path : '/resources/allResources'
            },
            {
                title : 'Resource types',
                path : '/resources/resourceTypes'
            }
        ]
    },
    {
        title : 'Invoices', 
        icon : <IoIcons.IoIosPaper />,
        subNav : [
            {
                title : 'Invoices',
                path : "/Invoices"
            },
            {
                title : 'Invoice Items',
                path : '/invoiceItems'
            },
            {
                title : 'Payments',
                path : 'Payments'
            }
        ]
    }
]