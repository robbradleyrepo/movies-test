## Aurora.co Front End Developer Test

Rob Bradley
paraxia@hotmail.com
Submitted 13.01.25

### Movies API List

A React application that lists movies, features pagination, and implements a light theme using Material-UI and CSS modules with focus on error handling.

### Features

- Fetches movies from an API.
- Paginates the movie list, displaying a fixed number of items per page.
- Light theme with smooth transitions.
- Accessible, reusable pagination buttons.
- Modularized code for easy maintenance.
- Customised Error Handling.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

```bash
git clone https://github.com/robbradleyrepo/movies-test.git
cd movies-test
npm i
```
React working in Vite with HMR and some ESLint rules.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Developer Submission Notes

I ended up focusing on the API error handling but of course, so much more could be done here to enhance the UX for these scenarios.

The module architecture and its respective styles need to be refined, I ran out of time here. If you'd like me to resubmit with this cleaned up I would appreciate the opportunity. No problem, but assuming the error handling is the focus of this exercise for now...

Very occasionally, I did catch some http errors in browser console ONLY, which my services/api.js code did not catch appropriately. This would need to be resolved before releasing to production, however I ran out of time identifying the cause of this specific error scenario. Interesting...

Rob Bradley


## Requirements

### Goal
Build a UI for an endpoint that returns a list of movies.
Endpoint Documentation: Movies API Documentation

### Task
Build a user-friendly interface to fetch and display movies from the API.
Include pagination to navigate the movie list.
Handle API errors gracefully.
Focus on creating a clean and intuitive design.

### Requirements
Use any modern frontend framework (e.g., React, Vue, Angular).
Deploy the application to a static hosting platform (e.g., Netlify, Vercel, GitHub Pages).
Ensure the code is clean, modular, and easy to understand.

### Submission
Share a link to the public repository or directly with Dmitry (ogurtsov on GitHub, GitLab, or Bitbucket).
Provide the URL of the deployed application.

### Time Estimate
The task should take no more than 2 hours.
Complete it within 7 days of receiving the assignment.
We look forward to your submission!

From: Dmitry Ogurtsov <dmitry@joinaurora.co>