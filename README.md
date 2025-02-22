# Todo-App-React-Redux-TS
A simple todo list application built with React, TypeScript, and Redux, showcasing CI/CD pipelines across multiple platforms.

## Features

- Create, toggle, and manage todo items
- Built with React and TypeScript for type-safe development
- State management using Redux
- Client-side routing with React Router
- Webpack for bundling and development server
- Compatible with various CI/CD pipelines (GitLab, GitHub, AWS CodePipeline, Harness)

## Technologies Used

- React
- TypeScript
- Redux
- React Router
- Webpack
- Babel
- CSS

## Project Structure
todo-app/
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ │ ├── images/
│ │ └── styles/
│ │ └── main.css
│ ├── components/
│ │ ├── TodoItem.tsx
│ │ └── TodoList.tsx
│ ├── store/
│ │ ├── actions.ts
│ │ ├── reducers.ts
│ │ └── store.ts
│ ├── App.tsx
│ ├── index.tsx
│ └── routes.ts
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── webpack.config.js

## Getting Started

1. Clone the repository:
```bash
git clone git@github.com:niksodavaram/Todo-App-React-Redux-TS
```
2. Install dependencies:
```bash
yarn install
```
3. Start the development server
```bash
yarn start
```
4. Open your browser and navigate to
```bash
http://localhost:3000
```
4. Build for Production
```bash
yarn run build
```
This will generate a `dist` folder with the bundled application

## CI/CD Pipeline Showcase

This project includes pipeline templates for:

- GitLab CI/CD
- GitHub Actions
- AWS CodePipeline
- Harness

These templates demonstrate how to build, test, and deploy this application across different platforms.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.
