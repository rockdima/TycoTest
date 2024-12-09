
# React CVE Search & Filter Challenge

This is a React application that allows users to view and filter CVE (Common Vulnerabilities and Exposures) details. The app includes features such as search by title, filter by categories, and pagination using a "Show More" button. The list of CVEs is displayed in a card format with progress bars indicating the severity score of each CVE.

## Features

- **Search Functionality**: Users can search for CVEs by title.
- **Category Filter**: Users can filter CVEs by category.
- **Pagination**: Displays 6 CVEs initially, with a "Show More" button to load 6 more items.
- **Card View**: Each CVE is displayed in a card with the following details:
  - Title
  - Score (displayed as a progress bar)
  - Date
  - Description
  - Priority

## Tech Stack

- **React**: For building the user interface.
- **Vite**: For fast bundling and development setup.
- **SCSS**: For modular styling.
- **React Context API**: For managing global state between components.

## Requirements

- **Vite**: Used to set up the React app.
- **React**: Use functional components with React Hooks (useState, useEffect, useContext).
- **React Context**: To share state across components.
- **No External Libraries**: Use only native React features (no additional libraries such as React-Bootstrap, React-Select, etc.).
- **SCSS**: To style the components. Ensure that the layout is responsive and matches the Figma design.

## Setup Instructions

### Prerequisites

Before you start, make sure you have the following installed:

- Node.js (v16 or higher)
- npm (v8 or higher)

### 1. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### 2. Start the Development Server

To start the app in development mode, run:

```bash
npm run dev
```

This will start a local development server

## Project Structure

Here is an overview of the project structure:

```
/react-cve-search
├── /src
│   ├── /assets          # Any assets such as images, icons, etc.
│   ├── /components      # React components (CveCard, Search, ShowMoreButton, etc.)
│   ├── /context         # React Context for managing global state
│   ├── /styles          # SCSS files for styling
│   ├── App.jsx           # Main app component
│   └── index.jsx         # Entry point for React app
├── /public              # Public assets (index.html)
├── package.json         # Project metadata and dependencies
└── README.md            # This file
```

## Components

- **CveCard**: Displays individual CVE information in a card format with a progress bar.
- **Search**: A search input to filter CVEs by title.
- **Filter**: A component that allows users to filter CVEs by category.
- **ShowMoreButton**: A button that loads more CVEs when clicked.
- **ProgressBar**: A component that renders a progress bar based on CVE score.

## Data
- **CVE Data**: The data for the CVEs is stored in a JSON file (`/public/data/cves.json`).
- **Categories**: The categories for the CVEs are stored in a JSON file (`/public/data/categories.json`).

## Styling

- All styling is written in **SCSS** to keep it modular and maintainable.
- Followed the Figma design for layout and UI elements.
- Styles are placed in `/src/styles` with separate files for each component.

## How It Works

1. **Context API**: We use React's Context API to manage the state for CVEs and categories globally. The `CveProvider` component holds the state, which is accessible by any child component that consumes the context.

2. **Card View**: Each CVE is displayed in a card format. The score of each CVE is represented as a progress bar, which visually shows the severity of the CVE (higher score = more severe).

3. **Pagination**: Initially, 6 CVEs are displayed, and additional items are loaded with the "Show More" button, which fetches the next 6 CVEs.

4. **Search & Filter**: The search bar allows users to filter the CVEs by title, while the category filter limits results to only those CVEs that belong to the selected categories.

# Design
- [Figma Design](https://www.figma.com/proto/zC98IOjyYXuphrNFn8ksIE/Dev-Hub-19.08.22?node-id=1209-315&node-type=frame&t=14HKehKuVWtX4Ygk-0&scaling=min-zoom&content-scaling=fixed&page-id=608%3A597)