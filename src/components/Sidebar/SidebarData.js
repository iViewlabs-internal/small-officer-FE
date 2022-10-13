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
        path : '/community',
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
        path : '/resources',
        icon : <IoIcons.IoIosPaper />,
        subNav : [
            {
                title : 'All Resources',
                path : '/resources/allResources'
            },
            {
                title : 'Invoice Items',
                path : '/resources/invoiceItems'
            },
            {
                title : 'Payments',
                path : '/resources/payments'
            }
        ]
    }
]