# Photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts.

## Features of App
- The user can navigate to different photo categories.
- The user can click on a photo to view a larger version of the photo and relevant photos.
- The user can like a photo from anywhere within the application where the photo is displayed.
- The user can view a heart icon with a green point notification in the navigation if there are liked photos.
- The navigation will consist of different topics and logo which refreshes the page.

### Short demovideo
![Demovideo](/frontend/public/docs/demo4.gif)

### The main page with all the photos
![Main page](/frontend/public/docs/MainPage.png)

### Liked photo and notification in navigation bar
![Like page](/frontend/public/docs/LikePage.png)

### Extra window (modal) for larger version of photo
![Modal page](/frontend/public/docs/LargePage.png)


## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

### [Frontend] Running Webpack Development Server
```sh
cd frontend
npm start
```

### [Backend] Running Backend Servier
Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Dependencies

### Frontend Dependencies
"@testing-library/jest-dom": "^5.16.5"
"@testing-library/react": "^13.4.0"
"@testing-library/user-event": "^13.5.0"
"react": "^18.2.0"
"react-dom": "^18.2.0"
"react-scripts": "5.0.1"
"web-vitals": "^2.1.4"

### Backend Dependencies
"body-parser": "^1.18.3"
"cors": "^2.8.5"
"dotenv": "^7.0.0"
"express": "^4.16.4"
"helmet": "^3.18.0"
"pg": "^8.5.0"
"socket.io": "^2.2.0"
"ws": "^7.0.0"

## Tech Stack
- React
- Javascript
- Express
- PostgreSQL
- Node
- Webpack
- Babel
- SASS
- Axios
