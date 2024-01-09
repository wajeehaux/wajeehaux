import scholarsCoveLanding from '../lib/images/scholars-cove-landing.png';
import scholarsCoveCourse from '../lib/images/scholars-cove-course.png';
import acadiaLanding from "../lib/images/acadia-landing.jpg";
import acadiaChat from "../lib/images/acadia-chat.png";

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    description: string;
    previewImage: string;
    allImages: string[];
}

export const PROJECTS: Project[] = [
    {
        slug: "scholars-cove",
        title: "Scholar's Cove",
        subtitle: "UI/UX | Ed-tech",
        date: "December 2023",
        description: "Taking inspiration from Khan Academy, Scholar's Cove is a user-friendly e-learning platform for studying courses. It's designed to be both beautiful and practical, with intuitive navigation and eye-catching visuals to suit all learning styles, accessible and immersive for all.",
        previewImage: scholarsCoveCourse,
        allImages: [scholarsCoveCourse, scholarsCoveLanding]
    },
    {
        slug: "acadia-ai",
        title: "Acadia AI",
        subtitle: "UI/UX | Ed-tech | Generative AI",
        date: "December 2023",
        description: "Acadia AI is my dive into AI tutoring, mixing smarts with personalized learning vibes. I whipped up a chill chat interface to surf unique learning paths. With chatty sessions and spot-on advice, Acadia AI flips the script on education, inviting learners to ride a personalized learning wave.",
        previewImage: acadiaChat,
        allImages: [acadiaChat, acadiaLanding]
    },
    // {
    //     slug: "scholars-cove",
    //     title: "Scholar's Cove",
    //     subtitle: "UI/UX | Ed-tech",
    //     previewImage: scholarsCoveCourse,
    //     allImages: ["scholars-cove-course.png", "scholars-cove-landing.png"]
    // }
]