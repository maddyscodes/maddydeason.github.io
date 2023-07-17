import type { Projects } from "./types";

const projects: Projects[] = [
    {
        title: 'Developer Relations project for internal frontend ecosystem',
        skills: ['Communication', 'Community Management', 'Documentation'],
        description:
            'A community building project aimed at fostering engagement and empowering tenants of the internal frontend ecosystem which provides a robust suite of frontend development tools, services, and resources. This ongoing project involves many initiatives including: creating and improving documentation to provide clear and accessible resources, developing an effective onboarding process to ensure a smooth transition for new tenants, designing and implementing a feedback survey and analysis to gather valuable insights, and fostering a collaborative environment through proactive engagement and support.',
        image: 'https://placehold.jp/200x150.png',
        imageAlt: 'placeholder',
        status: 'Ongoing',
        isFeatured: false,
    },
    {
        title: 'Design System components development',
        skills: ['React', 'Typescript', 'CSS(vanilla-extract)', 'HTML', 'Storybook', 'Cypress'],
        description: 'Built a collection of reusable React components for a comprehensive Design System. By commiting to code quality and collaborating closely with designers for the best approach, I contributed to a cohesive set of components that not only adhere to UX guidelines, but also streamline the development process for future projects. I continue to provide support for developers implementing the Design System.',
        image: 'https://placehold.jp/200x150.png',
        imageAlt: 'placeholder',
        status: 'Ongoing',
        isFeatured: true,
    },
    {
        title: 'Web accessibility training for developers',
        skills: ['Web Accessibilty', 'HTML', 'Communication'],
        description: 'Created and continuously instruct an internal web accessibility training that achieved an NPS (Net Promoter Score) of +91 points and a knowledge increase KPI of almost 2x. One of the highest rated of all tech trainings in Rakuten.',
        image: 'https://placehold.jp/200x150.png',
        imageAlt: 'placeholder',
        status: 'Ongoing',
        isFeatured: true,
    },
    {
        title: 'Rakuten Keiba Odds Bet renewal project',
        skills: ['Vue', 'Typescript', 'CSS(Sass)', 'HTML', 'GraphQL'],
        description: 'Introduced Vue to renew a legacy betting system, drastically improving the user experience and web performance. Several new features were also introduced (such as being able to check the latest odds while selecting bets). Vue has now been widely implemented across the site, including in a completely new SPA version of the site.',
        url: 'https://keiba.rakuten.co.jp/special_event/info/newoddsbet/',
        image: 'https://placehold.jp/200x150.png',
        imageAlt: 'placeholder',
        status: 'Complete',
        isFeatured: false,
    },
    {
        title: 'ArtKatsu - Art gallery loyalty app, UI/UX case study',
        skills: ['Figma', 'Adobe XD', 'UX Research'],
        description:
            'Currently working on a comprehensive UI/UX case study as part of the Google UX Design Professional Certificate program. Focusing on real-world scenarios and user-centered design principles, this ongoing project aims to showcase my ability to create intuitive and visually appealing interfaces while solving complex user experience challenges. Stay tuned for the final results and an in-depth analysis of the design process.',
        url: 'https://www.coursera.org/professional-certificates/google-ux-design',
        image: 'https://placehold.jp/200x150.png',
        imageAlt: 'placeholder',
        status: 'In progress',
        isFeatured: false,
    },
];

function isFeaturedProject(projects: Projects) {
    return projects.isFeatured
}

const featuredProjects = projects.filter(isFeaturedProject);

export {
    projects,
    featuredProjects,
}
