# Heartpace Frontend Architecture - README #

### Overview ###
This repository contains a micro frontends-based architecture that consists of three applications:

* Host App - The main application that integrates components from the other two applications and manages the overall state.
* Remote Users - A micro frontend responsible for user management, including CRUD operations.
* Remote Charts - A micro frontend that provides three different Material UI charts used in the host application.

The architecture provides scalability, improves maintainability, and ensures a seamless user experience across the micro frontends.

### Download Demo here ###
https://drive.google.com/file/d/1RqlGSHp4ekRZ9LxT4YdwRsto_TWB5tdR/view?usp=sharing

### Code Quality, Component Design & Micro Frontend Architecture ###
To ensure high code quality and maintainability, I have implemented best practices such as ESLint and TypeScript for enforcing consistency and preventing errors. The application follows a modular, component-based architecture, promoting reusability and scalability across micro frontends. React Context API and Redux Toolkit manage state and theme propagation efficiently, while centralized error handling using error boundaries enhances resilience. Ag-Grid Server-Side Row Model optimizes performance by efficiently handling large datasets. Unit testing with Vite Test and Jest ensures code reliability, while selective use of lazy loading and memoization improves rendering performance.

The application is built using a micro frontend architecture, consisting of three independent applications, each with its own responsibilities.This architecture enables scalability, maintainability, and independent deployment, allowing each micro frontend to be developed, updated, and tested separately without impacting the others.

### Micro Frontends Breakdown ###
## Host App ##
* Acts as the main application.
* Integrates components from the remoteUsers and remoteCharts micro frontends.
* Uses a centralized Redux store for error state management.
* Propagates themes using React Context API.

## Remote Users ##
* Handles user management (CRUD operations).
* Displays user lists using ag-grid.
* Implements infinite scrolling using ServerSideRowModelModule.
* We can avoid use react lazy loading, useCallback, useMemo, in react 19. But we used it here. Its make no harm.
* Uses json-server to mock API responses.
* Important Note: Used enterprise features for backend data loading. The trial license key for ag-grid is hardcoded.

## Remote Charts ##
* Provides three different Material UI charts.
* These charts are shared with the host application.

### Tech Stack ###
* Framework: React 19
* Build Tool: Vite
* State Management: Redux Toolkit
* Form validation : Formik and Yup
* UI Components and styles: Material UI & Emotion
* Data grid : ag-grid-community, ag-grid-enterprise, ag-grid-react
* Module Federation: @originjs/vite-plugin-federation
* Testing: Vite Test, Jest
* Mock back-end : jason-server
* Linting : ES Lint

### Setup and Running Instructions ###

Follow the steps below to set up and run the applications:

Install Dependencies
Run the following command in each project (host, remoteUsers, remoteCharts):

### Start Each Application ###
Run the following commands in each project:
## Host App ##
* cd host-app
* npm install
* npm run build
* npm run preview

## Remote Users ##
* cd remote-users-app
* npm install
* npm run build
* npm run preview
* npm run start:server (To start jason-server)

## Remote Charts ##
* cd remote-charts
* npm install --save-dev @types/redux-mock-store
* npm install --save-dev @types/jest
* npm install
* npm run build
* npm run preview

to run tests
* npm run test

Each application will be available on different ports, and the host app will dynamically load the remote components.

### Improvements & Suggestions ###
* Improve unit test coverage to 80%
* Integrate Cypress for End-to-End (E2E) Testing
* Branching Strategy & Test Environments
    * Feature Branching: Each new feature is developed in a separate branch before merging into develop.
    * Release Branches: Separate SIT, UAT, and Production branches ensure smooth testing and release cycles.
    * Hotfixes: Critical fixes are done in hotfix branches and merged into main and develop.
* Integrate coverity and blackduck like tools to identify code complexities and security vulnerabilities.
* Setup CI/CD pipeline using git-hub actions or some other tool and Automated deployments ensure SIT/UAT environments.
* Add Disaster Recovery Plan like
    * Automated Backups: Ensure database and configuration files are backed up daily.
    * Rollback Strategy: Keep previous versions ready for quick re-deployment.
    * API Failover: Use another server backup for JSON server.
    * Error Monitoring: Integrate Sentry or New Relic to track failures in real-time.
    * Documentation: Maintain a clear recovery guide for system failures. 

### Contribution Guidelines ###

Writing Tests

Use Vite Test and Jest for unit testing.

Run tests using: 
* npm run test

 Code Review

* Follow best practices for code readability and maintainability.
* Use Linting tools like ES-Lint to check the code.
* Ensure all PRs are reviewed before merging.

Other Guidelines

* Follow semantic versioning for releases.
* Ensure all dependencies are up-to-date. 
* Always check for security vulnerabilities before release.

