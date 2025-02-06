import scholarsCoveLanding from '../lib/images/scholars-cove-landing.png';
import scholarsCoveCourse from '../lib/images/scholars-cove-course.png';
import acadiaLanding from "../lib/images/acadia-landing.jpg";
import acadiaChat from "../lib/images/acadia-chat.png";
import PlatePlanner from "../lib/images/plate-planner-pro-1.png";
import Frame15_1 from "../lib/images/Frame-15-1.png";
import Frame15_2 from "../lib/images/Frame-15-2.png";
import Frame_50 from "../lib/images/Frame-50.png";
import ArchitectureWorkbook from "../lib/images/Architecture-Workbook.jpeg";
import P2_1 from "../lib/images/1.png";
import P2_2 from "../lib/images/2.png";
import P2_3 from "../lib/images/3.png";
import P2_4 from "../lib/images/4.png";
import P2_5 from "../lib/images/5.png";
import P2_6 from "../lib/images/6.png";
import P2_7 from "../lib/images/7.png";
import P2_8 from "../lib/images/8.png";
import P2_9 from "../lib/images/9.png";
import P2_10 from "../lib/images/10.png";  
import P2_11 from "../lib/images/11.png";
import P2_12 from "../lib/images/12.png";
import P2_13 from "../lib/images/13.png";
import P2_14 from "../lib/images/14.png";
import P2_15 from "../lib/images/15.png";
import P2_16 from "../lib/images/16.png";
import P2_17 from "../lib/images/17.png";
import P2_18 from "../lib/images/18.png";
import P2_19 from "../lib/images/19.png";
import P2_20 from "../lib/images/20.png";
import P2_21 from "../lib/images/21.png";
import P2_22 from "../lib/images/22.png";
import P2_23 from "../lib/images/23.png"; 
import P2_24 from "../lib/images/24.png";
import P2_25 from "../lib/images/25.png";
import P2_26 from "../lib/images/26.png";
import P2_27 from "../lib/images/27.png";
import P2_28 from "../lib/images/28.png";
import P2_29 from "../lib/images/29.png";
import P2_30 from "../lib/images/30.png";
import P2_31 from "../lib/images/31.png";
import P2_32 from "../lib/images/32.png";
import P2_33 from "../lib/images/33.png";
import P2_34 from "../lib/images/34.png";
import P2_35 from "../lib/images/35.png";

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    description: string;
    previewImage: string;
    allImages: string[];
    displayImages: string[]
}

export const PROJECTS: Project[] = [
    {
        slug: "plate-planner-pro",
        title: " Plate Planner Pro",
        subtitle: "UI/UX | Meal Planning App",
        date: "December 2024",
        description: "Plate Planner Pro is a user-centered mobile app designed to simplify meal planning for busy individuals. By offering personalized recipe suggestions based on available ingredients, nutritional tracking and streamlined grocery list creation, Plate Planner Pro aims to reduce the stress and time associated with healthy eating, empowering users to achieve their dietary goals with ease and enjoyment. Integrating key usability feedback, the design prioritizes clarity, efficiency, and customization, ensuring home-cooked meals remain convenient and enjoyable despite a hectic lifestyle.",
        previewImage: PlatePlanner,
        allImages: [Frame_50],
        displayImages: [PlatePlanner]
    },
    {
        slug: "information-architecture-workbook",
        title: "Information Architecture Workbook",
        subtitle: "UI/UX | Design Workbook",
        date: "December 2024",
        description: "This Information Architecture Workbook serves as a comprehensive, hands-on reference guide to key concepts and practical techniques explored throughout the course. Covering essential topics like content inventory, card sorting, tree testing, and Figma prototyping, it documents practical exercises and insightful reflections designed to reinforce learning. More than just a review, it is designed as a resource to revisit, helping students and designers understand how to structure and organize information effectively to create better, more intuitive user experiences.",
        previewImage: P2_7,
        allImages: [P2_1, P2_2, P2_3, P2_4, P2_5, P2_6, P2_7, P2_8, P2_9, P2_10, P2_11, P2_12, P2_13, P2_14, P2_15, P2_16, P2_17, P2_18, P2_19, P2_20, P2_21, P2_22, P2_23, P2_24, P2_25, P2_26, P2_27, P2_28, P2_29, P2_30, P2_31, P2_32, P2_33, P2_34, P2_35],
        displayImages: [P2_1,P2_7]
    },
    {
        slug: "scholars-cove-duplicate",
        title: "Scholar's Cove",
        subtitle: "UI/UX | Ed-tech",
        date: "June 2024",
        description: "Taking inspiration from Khan Academy, Scholar's Cove is a user-friendly e-learning platform for studying courses. It's designed to be both beautiful and practical, with intuitive navigation and eye-catching visuals to suit all learning styles, accessible and immersive for all.",
        previewImage: scholarsCoveCourse,
        allImages: [scholarsCoveCourse, scholarsCoveLanding],
        displayImages: [scholarsCoveCourse, scholarsCoveLanding]
    },
    {
        slug: "acadia-ai-duplicate",
        title: "Acadia AI",
        subtitle: "UI/UX | Ed-tech | Generative AI",
        date: "June 2024",
        description: "Acadia AI is my dive into AI tutoring, mixing smarts with personalized learning vibes. I whipped up a chill chat interface to surf unique learning paths. With chatty sessions and spot-on advice, Acadia AI flips the script on education, inviting learners to ride a personalized learning wave.",
        previewImage: acadiaChat,
        allImages: [acadiaChat, acadiaLanding],
        displayImages: [acadiaChat, acadiaLanding]
    }
    // {
    //     slug: "scholars-cove",
    //     title: "Scholar's Cove",
    //     subtitle: "UI/UX | Ed-tech",
    //     previewImage: scholarsCoveCourse,
    //     allImages: ["scholars-cove-course.png", "scholars-cove-landing.png"]
    // }
]