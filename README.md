# Amber Assessment Project

An app to manage candidate recruitment.

## To Launch App
 - launch nodemon in your terminal to start a server
 - launch the frontend app

## Available Interactions

### Sidebar

- You can toggle the sidebar

### Candidates Page

- On the table, select the stage selector to set the application process stage
- On the table, click on the "see more" buttons to view detailed candidate info

### Candidate Page

- Click the "see login info" button to show/hide the login info
- Click the "back" button to navigate back to the candidates page

## Things I would do differently 

### Backend
 - Implemented swagger documentation UI to give viewers ui view of API specification
 - Implemented a database (such as mongodb) to manage data storage

### Frontend
#### Logic
 - Implemented global state management to manage fetching data from database to aid in managing candidates data. 
 - Implemented observer pattern for auth and candidates data fetching. If there are changes in the candidates model in the backend, update the frontend ui
 - Add global theme constants to make applying consistent themes more manageable

#### Components
 - Refactored CandidatesPage components to make them more reusable
 - Implemented interactive tabs on the CandidatePage

#### Styles
 - Created a breakpoint between @media (min-width: 768px) and @media (min-width: 1024px). The UI does not look really pleasing for screen sizes between these breakpoints

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

In the backend project directory, you can run:

### `nodemon app.js`

Launches the server and listens to changes.\

