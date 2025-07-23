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

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Jobs

1. Edit `data/jobs.json` to add new job postings
2. Add corresponding company logos to the `public/` directory
3. The application will automatically display the new jobs

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will automatically detect it's a Next.js app and deploy it

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn TypeScript
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn Tailwind CSS
- [React Documentation](https://react.dev/) - Learn React
