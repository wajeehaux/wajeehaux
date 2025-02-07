function t(e) {
    return e?.length !== void 0 ? e : Array.from(e);
  }
  
  // Corrected const declarations for images
  const s = "" + new URL("../assets/scholars-cove-landing.73D11TT0.png", import.meta.url).href,
    a = "" + new URL("../assets/scholars-cove-course.vKdbyKnw.png", import.meta.url).href,
    n = "" + new URL("../assets/acadia-landing.4u-6q4WH.jpg", import.meta.url).href,
    i = "" + new URL("../assets/acadia-chat.p9fEqLBu.png", import.meta.url).href,
    platePlanner = "" + new URL("../assets/plate-planner-pro2 .png", import.meta.url).href,
    platePlanner2 = "" + new URL("../assets/Frame-50.png", import.meta.url).href,
    platePlanner3 = "" + new URL("../assets/Frame-15-2.png", import.meta.url).href,
    platePlanner4 = "" + new URL("../assets/plate-planner-pro-1.png", import.meta.url).href,
    P2_1 = "" + new URL("../assets/1.png", import.meta.url).href,
    P2_7 = "" + new URL("../assets/7.png", import.meta.url).href;
  
  // Fixed allImages array for information-architecture-workbook
  const allImagesP2 = Array.from({ length: 35 }, (_, idx) => {
    return "" + new URL(`../assets/${idx + 1}.png`, import.meta.url).href;
});
console.log("URL:",allImagesP2);
  
  const r = [
    {
      slug: "plate-planner-pro",
      title: "Plate Planner Pro",
      subtitle: "UI/UX | Meal Planning App",
      date: "December 2024",
      description:
        "Plate Planner Pro is a user-centered mobile app designed to simplify meal planning for busy individuals. By offering personalized recipe suggestions based on available ingredients, nutritional tracking and streamlined grocery list creation, Plate Planner Pro aims to reduce the stress and time associated with healthy eating, empowering users to achieve their dietary goals with ease and enjoyment. Integrating key usability feedback, the design prioritizes clarity, efficiency, and customization, ensuring home-cooked meals remain convenient and enjoyable despite a hectic lifestyle.",
      previewImage: platePlanner4,
      allImages: [platePlanner2, ],
      displayImages: [platePlanner, platePlanner3]
    },
    {
      slug: "information-architecture-workbook",
      title: "Information Architecture Workbook",
      subtitle: "UI/UX | Design Workbook",
      date: "December 2024",
      description:
        "This Information Architecture Workbook serves as a comprehensive, hands-on reference guide to key concepts and practical techniques explored throughout the course. Covering essential topics like content inventory, card sorting, tree testing, and Figma prototyping, it documents practical exercises and insightful reflections designed to reinforce learning.",
      previewImage: P2_7,
      allImages: allImagesP2,
      displayImages: [P2_1, P2_7]
    },
    {
      slug: "scholars-cove",
      title: "Scholar's Cove",
      subtitle: "UI/UX | Ed-tech",
      date: "June 2024",
      description:
        "Taking inspiration from Khan Academy, Scholar's Cove is a user-friendly e-learning platform for studying courses. It's designed to be both beautiful and practical, with intuitive navigation and eye-catching visuals to suit all learning styles, accessible and immersive for all.",
      previewImage: a,
      allImages: [a, s],
      displayImages: [a]
    },
    {
      slug: "acadia-ai",
      title: "Acadia AI",
      subtitle: "UI/UX | Ed-tech | Generative AI",
      date: "June 2024",
      description:
        "Acadia AI is my dive into AI tutoring, mixing smarts with personalized learning vibes. I whipped up a chill chat interface to surf unique learning paths. With chatty sessions and spot-on advice, Acadia AI flips the script on education, inviting learners to ride a personalized learning wave.",
      previewImage: i,
      allImages: [i, n],
      displayImages: [i]
    }
  ];
  
  export { r as P, t as e };
  