import React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SubjectIcon from '@mui/icons-material/Subject';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import SpeakerNotesRoundedIcon from '@mui/icons-material/SpeakerNotesRounded';
import ExplicitRoundedIcon from '@mui/icons-material/ExplicitRounded';
import AirportShuttleRoundedIcon from '@mui/icons-material/AirportShuttleRounded';
import GiteRoundedIcon from '@mui/icons-material/GiteRounded';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import MessageIcon from '@mui/icons-material/Message';
import GridViewIcon from '@mui/icons-material/GridView';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'



const SidebarData = [
   {
    title:"Dashboard",
    path:"/dashboard",
    icon: <AiIcons.AiFillDashboard />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill/>,
    subNav: [
        {
            title:"Admin",
            path:"/dashboard/admin",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Student",
            path:"/dashboard/student",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Parents",
            path:"/dashboard/parents",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Teachers",
            path:"/dashboard/teachers",
            icon: <RiIcons.RiArrowRightSFill />,
        }
    ]
   },

     
   {
    title:"Students",
    path:"/students",
    icon: <GroupIcon />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill/>,
    subNav: [
        {
            title:"All Students",
            path:"/students/allStudents",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        { 
            title:"Student Details",
            path:"/students/studentDetails",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Admission Form",
            path:"/students/admissionForm",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Student Promotion",
            path:"/students/studentPromotion",
            icon: <RiIcons.RiArrowRightSFill />,
        }
    ]
   },

     
   {
    title:"Teachers",
    path:"/teachers",
    icon: <GroupsIcon />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill/>,
    subNav: [
        {
            title:"All Teachers",
            path:"/teachers/allTeachers",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        { 
            title:"Teachers Details",
            path:"/teachers/teacherDetails",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Add Teacher",
            path:"/teachers/addTeacher",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Payment",
            path:"/teachers/payment",
            icon: <RiIcons.RiArrowRightSFill />,
        }
    ]
   },


     
   {
    title:"Parents",
    path:"/parents",
    icon: <FamilyRestroomIcon />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill/>,
    subNav: [
        {
            title:"All Parents",
            path:"/parents/allParents",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        { 
            title:"Parents Details",
            path:"/parents/parentsDetails",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Add Parent",
            path:"/parents/addParent",
            icon: <RiIcons.RiArrowRightSFill />,
        },
    ]
   },
     

     
   {
    title:"Library",
    path:"/library",
    icon: <LibraryBooksIcon />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill/>,
    subNav: [
        {
            title:"All Books",
            path:"/library/allBooks",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        { 
            title:"Add New Book",
            path:"/library/addnewBook",
            icon: <RiIcons.RiArrowRightSFill />,
        },
    ]
   },


     
   {
    title:"Acconunt",
    path:"/acconunt",
    icon: <ReceiptIcon />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill/>,
    subNav: [
        {
            title:"All Fees Collection",
            path:"/acconunt/aLLFeesCollection",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        { 
            title:"Expenses",
            path:"/acconunt/expenses",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Add Expenses",
            path:"/acconunt/addExpenses",
            icon: <RiIcons.RiArrowRightSFill />,
        },
    ]
   },


     
   {
    title:"Class",
    path:"/class",
    icon: <DesignServicesIcon />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill/>,
    subNav: [
        {
            title:"All Classes",
            path:"/class/allClasses",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Add New Class",
            path:"/class/addNewClass",
            icon: <RiIcons.RiArrowRightSFill />,
        },
    ]
   },

    {
        title:"Subject",
        path:"/subjects",
        icon: <SubjectIcon />,
        iconClosed: <RiIcons.RiArrowRightSFill />,
        iconOpened: <RiIcons.RiArrowDownSFill/>,
    },

      
    {
        title:"Class Routine",
        path:"/classroutine",
        icon: <MenuBookRoundedIcon />,
        iconClosed: <RiIcons.RiArrowRightSFill />,
        iconOpened: <RiIcons.RiArrowDownSFill/>,
    },

      
    {
        title:"Attendance",
        path:"/attendance",
        icon: <SpeakerNotesRoundedIcon />,
        iconClosed: <RiIcons.RiArrowRightSFill />,
        iconOpened: <RiIcons.RiArrowDownSFill/>,
    },


       
   {
    title:"Exam",
    path:"/exam",
    icon: <ExplicitRoundedIcon />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill/>,
    subNav: [
        {
            title:"Exam Schedule",
            path:"/exam/examschedule",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Exam Grades",
            path:"/class/examGrades",
            icon: <RiIcons.RiArrowRightSFill />,
        },
    ]
   },

   {
        title:"Transport",
        path:"/transport",
        icon: <AirportShuttleRoundedIcon />,
        iconClosed: <RiIcons.RiArrowRightSFill />,
        iconOpened: <RiIcons.RiArrowDownSFill/>,
    },


    {
        title:"Hostel",
        path:"/hostel",
        icon: <GiteRoundedIcon />,
        iconClosed: <RiIcons.RiArrowRightSFill />,
        iconOpened: <RiIcons.RiArrowDownSFill/>,
    },


    {
        title:"Notice",
        path:"/notice",
        icon: <AttachEmailIcon />,
        iconClosed: <RiIcons.RiArrowRightSFill />,
        iconOpened: <RiIcons.RiArrowDownSFill/>,
    },


    {
        title:"Message",
        path:"/message",
        icon: <MessageIcon />,
        iconClosed: <RiIcons.RiArrowRightSFill />,
        iconOpened: <RiIcons.RiArrowDownSFill/>,
    },

      
   {
    title:"UI Elements",
    path:"/elements",
    icon: <GridViewIcon />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill/>,
    subNav: [
        {
            title:"Alart",
            path:"/elements/alart",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        { 
            title:"Button ",
            path:"/elements/button",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Grid",
            path:"/elements/grid",
            icon: <RiIcons.RiArrowRightSFill />,
        },
        {
            title:"Modal",
            path:"/elements/modal",
            icon: <RiIcons.RiArrowRightSFill />,
        },
         
        {
            title:"Progress Bar",
            path:"/teachers/progressBar",
            icon: <RiIcons.RiArrowRightSFill />,
        },
         
        {
            title:"Tab",
            path:"/elements/tab",
            icon: <RiIcons.RiArrowRightSFill />,
        },
         
        {
            title:"Widget",
            path:"/elements/widget",
            icon: <RiIcons.RiArrowRightSFill />,
        },
    ]
   },

     
    {
        title:"Map",
        path:"/map",
        icon: <AddLocationAltIcon />,
        iconClosed: <RiIcons.RiArrowRightSFill />,
        iconOpened: <RiIcons.RiArrowDownSFill/>,
    },
      
    {
        title:"Account",
        path:"/account",
        icon: <ManageAccountsIcon />,
        iconClosed: <RiIcons.RiArrowRightSFill />,
        iconOpened: <RiIcons.RiArrowDownSFill/>,
    },
    
]

export default SidebarData