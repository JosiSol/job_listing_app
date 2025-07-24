# Job Listing App

A modern job listing application built with Next.js, TypeScript, and Tailwind CSS. Browse through various job opportunities with detailed descriptions, requirements, and company information.

## 🌟 Features

- **Browse Job Listings**: View all available job opportunities in a clean, card-based layout
- **Detailed Job Pages**: Click on any job to see comprehensive details including:
  - Job description and responsibilities
  - Ideal candidate requirements
  - Location and timing information
  - Required skills and categories
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean interface with hover effects and smooth transitions
- **Company Logos**: Visual representation of each company

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Daisy UI
- **Icons**: React Icons
- **Runtime**: React 19

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine (version 18 or higher recommended).

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd job_listing_app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
job_listing_app/
├── app/
│   ├── components/
│   │   └── JobCard.tsx          # Job card component
│   ├── jobs/
│   │   └── [jobId]/
│   │       └── page.tsx         # Individual job detail page
│   ├── data.ts                  # Type definitions
│   ├── getJobs.ts              # Job data fetching utility
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── data/
│   └── jobs.json               # Job listings data
├── public/
│   ├── job1.png                # Company logos
│   ├── job2.png
│   └── ...
└── README.md
```

## 🎨 Customization

### Adding New Jobs

1. Edit `data/jobs.json` to add new job postings
2. Add corresponding company logos to the `public/` directory
3. The application will automatically display the new jobs

## 📸 Preview
Opportunities Page
<img width="1439" height="772" alt="Screenshot 2025-07-23 at 11 17 04 at night" src="https://github.com/user-attachments/assets/49b0945b-20ba-4612-86ca-c80f8c9809c7" />

Applicant Page
<img width="1439" height="776" alt="Screenshot 2025-07-23 at 11 18 19 at night" src="https://github.com/user-attachments/assets/77310f39-dd30-4da9-a630-cd0e008a341b" />


## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn TypeScript
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn Tailwind CSS
- [React Documentation](https://react.dev/) - Learn React
