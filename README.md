# Erc20TokenBalanceAndTransfer

This project is a React.js web application built using Vite for fast development and optimized builds, and Tailwind CSS for styling. The main focus of the project is to provide functionality for fetching and displaying the ERC20 token balance of a user's wallet and enabling ERC20 token transfers between users.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow the instructions below to set up and run the project on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository.

`git clone` https://github.com/SynysterGate7/Erc20TokenBalanceAndTransfer.git

2. Navigate to the project folder.

`cd Erc20TokenBalanceAndTransfer`

3. Install dependencies.

`npm install`

## Development

To start the development server and run the project locally, use the following command:

`npm run dev`

This will start the development server, and you can access the application at `http://localhost:5173`.

## Build

To create an optimized production build of the project, use the following command:

`npm run build`

The build files will be generated in the `dist` folder.

## Folder Structure

Here's a brief overview of the folder structure of the project:

Erc20TokenBalanceAndTransfer/
├── node_modules/
├── public/
├── src/
│ ├── ABI/
│ ├── assets/
│ ├── components/
│ │ ├── helpers/
│ │ │ ├── Constants
│ │ │ ├── CustomHooks
│ ├── pages/
│ │ ├── main
│ ├── redux/
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
├── index.html
├── .eslintrc.cjs
├── postcss.config.js
├── .gitignore
├── package.json
├── README.md
├── vite.config.js

- `node_modules`: Contains the project dependencies.
- `public`: This folder contains static assets that will be served as-is.
- `src`: Contains the application source code and React components.
  - `ABI`: Contains Application Binary Interface files.
  - `assets`: Contains assets used in the application.
  - `components`: Contains reusable React components.
  - `helpers`: Contains helper functions and utilities.
    - `Constants`: Contains constant values used in the application.
    - `CustomHooks`: Contains custom React hooks.
  - `pages`: Contains different pages of the application.
    - `main`: Contains the main page of the application.
  - `redux`: Contains Redux-related files.
- `App.css`, `App.jsx`, `index.css`, `main.jsx`: Main files for the React application.
- `index.html`: The main HTML file that includes the React app's root element.
- `.eslintrc.cjs`: ESLint configuration file.
- `postcss.config.js`: PostCSS configuration file.
- `.gitignore`: Specifies files and directories to ignore in version control.
- `package.json`: Contains project metadata and dependencies.
- `README.md`: The file you are currently reading. Provides information about the project.
- `vite.config.js`: The Vite configuration file.

## Contributing

Contributions are welcome! If you find any issues or want to improve the project, feel free to create a pull request.

## License

This project is not licensed yet.
