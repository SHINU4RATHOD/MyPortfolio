
# MyAIPortfolio - Shinu Rathod: Data Scientist & AI Engineer

![MyAIPortfolio Hero Section Screenshot](https://placehold.co/1200x600.png?text=Portfolio+Screenshot+Placeholder)
*Replace the placeholder above with an actual screenshot of the deployed portfolio's hero section.*

This repository contains the source code for the personal portfolio website of **Shinu Rathod**, a passionate and results-oriented Data Scientist and AI Engineer. The portfolio is designed to showcase Shinu's skills, experience, and projects to potential employers at top MNCs, targeting roles such as Data Scientist, AI Engineer, and Machine Learning Engineer.

**Live Demo:** [shinurathod.com](https://shinurathod.com) *(Replace with actual deployed link)*

## About Shinu Rathod

Passionate Data Scientist with hands-on experience in building and deploying AI-driven solutions, specializing in Machine Learning, Deep Learning, NLP, and Generative AI. Proficient in crafting scalable, production-grade models to solve complex, real-world problems. Developed impactful solutions like autism detection (91.8% accuracy) and intelligent Medical Chatbot, building a Source Code Analyzer, and creating a Multi-Document Reader using state-of-the-art AI technologies. Dedicated to continuous learning, innovation, and delivering impactful, data-driven insights.

## Key Features

*   **Modern Single-Page Design:** Clean, professional, and visually stunning layout optimized for user experience and ATS-friendliness.
*   **Responsive Across Devices:** Fully responsive design ensuring optimal viewing on mobile, tablet, and desktop.
*   **Targeted Content:** Information tailored to attract hiring managers from top MNCs.
*   **Smooth Scroll Navigation:** Intuitive navigation with a sticky header for easy access to all sections.
*   **Interactive Sections:**
    *   **Hero Section:** Bold introduction with quick access to resume and contact information.
    *   **About Me:** Concise and impactful professional summary.
    *   **Skills Showcase:** Categorized display of technical proficiencies with icons.
    *   **Experience Timeline:** Chronological presentation of work history and key achievements.
    *   **Featured Projects:** Detailed cards for key projects, highlighting technologies and impact, with links to GitHub/Kaggle.
    *   **Education & Certifications:** Clear listing of academic background and professional credentials.
    *   **Contact Form:** Easy way for interested parties to get in touch.
*   **SEO Optimized:** Meta tags and relevant keywords for better search engine visibility.
*   **Subtle Animations & Hover Effects:** Enhancing user engagement without being distracting.

## Tech Stack

This portfolio is built with a modern, robust, and performant technology stack:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **(Future AI Features):** [Genkit by Google](https://firebase.google.com/docs/genkit) (for potential future AI-powered resume alignment tool or other GenAI features)
*   **Deployment:** [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## Getting Started

To run this project locally:

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SHINU4RATHOD/MyPortfolio.git
    cd MyPortfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Environment Variables (if any):**
    If the project requires environment variables (e.g., for future Genkit API keys), create a `.env.local` file in the root directory and add them:
    ```env
    # Example:
    # GENKIT_API_KEY=your_api_key_here
    ```
    *(Currently, this portfolio does not rely on specific API keys for its core functionality.)*

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    The application will be available at `http://localhost:9002` (or another port if 9002 is in use).

### Building for Production

To create a production build:
```bash
npm run build
```
This will generate an optimized static build in the `.next` folder.

## Deployment

This portfolio is configured for deployment on **Firebase App Hosting**.
The `apphosting.yaml` file in the root directory contains the necessary configuration.

To deploy:
1.  Ensure the [Firebase CLI](https://firebase.google.com/docs/cli) is installed and you are logged in (`firebase login`).
2.  Make sure your Firebase project has billing enabled (required for App Hosting, even for the free tier).
3.  Run the deployment command:
    ```bash
    firebase apphosting:backends:deploy --project YOUR_FIREBASE_PROJECT_ID
    ```
    Replace `YOUR_FIREBASE_PROJECT_ID` with your actual Firebase Project ID (e.g., `myaiportfolio`).

## Customization

To adapt this portfolio for your own use:

1.  **Update Personal Information:** Modify the data in `src/config/portfolio.ts`. This file contains all personal details, project descriptions, experience, skills, etc.
2.  **Replace Images:**
    *   Profile Picture: Replace `public/images/shinu-rathod-profile.png`.
    *   Project Images: Place your project images in `public/images/projects/` and update the `imageUrl` paths in `src/config/portfolio.ts`.
3.  **Resume:** Place your resume PDF in the `public/` directory and update the link in `src/components/sections/HeroSection.tsx` if the filename is different.
4.  **Styling:**
    *   Colors and theme variables are primarily defined in `src/app/globals.css`.
    *   Tailwind CSS utility classes are used throughout the components for styling.
5.  **Meta Tags:** Update SEO meta tags (title, description, keywords) in `src/app/layout.tsx`.

## Folder Structure (Simplified)

```
MyPortfolio/
├── public/                 # Static assets (images, resume PDF, favicon)
│   ├── images/
│   │   ├── projects/       # Project-specific images
│   │   └── shinu-rathod-profile.png
│   └── Shinu_Rathod_Resume_MNC1.pdf
├── src/
│   ├── ai/                 # Genkit related files (if AI features are added)
│   ├── app/                # Next.js App Router (pages, layout, global styles)
│   │   ├── actions.ts      # Server Actions (e.g., contact form)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx        # Main portfolio page
│   ├── components/         # React components
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Portfolio sections (Hero, About, Skills, etc.)
│   │   └── ui/             # ShadCN UI components and custom UI elements
│   ├── config/
│   │   └── portfolio.ts    # Central configuration for all portfolio content
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility functions
├── .env.local              # Local environment variables (optional, gitignored)
├── apphosting.yaml         # Firebase App Hosting configuration
├── components.json         # ShadCN UI configuration
├── next.config.ts          # Next.js configuration
├── package.json
├── README.md               # This file
└── tsconfig.json
```

## Contact

Shinu Rathod
*   **Email:** [shinukrathod0143@gmail.com](mailto:shinukrathod0143@gmail.com)
*   **LinkedIn:** [linkedin.com/in/shinurathod-data-scientist](https://www.linkedin.com/in/shinurathod-data-scientist)
*   **GitHub:** [github.com/SHINU4RATHOD](https://github.com/SHINU4RATHOD)
*   **Phone:** +91 63641 63900

---

*This README was generated with assistance from an AI coding partner in Firebase Studio.*
