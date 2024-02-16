# Countries API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project was created as part of a task from the website [Frontend Mentor](https://www.frontendmentor.io/home).

## Demo

You can preview demo of this application without having to set up it on your local machine by visiting [Countries API Demo](https://celdur27.github.io/countries-api).

## How to run project?

First of all you have to install all dependencies. To achive that you have to run:

```http
  npm install
```

When all dependecies are installed, You just have to run:

```http
  npm start
```

Application will be available under [http://localhost:3000](http://localhost:3000) address.

## How to use this project?

After displaying main page application will send request to [Rest Countries](https://restcountries.com/) to get all data. As user you can click on any Country Card to display details about this country. Also You can filter by name and region, and You can sort by name, population and region. User can switch between Light and Dark mode at any time.

## Used libraries

To create this project I've used this libraries:

- Tanstack Query - to manage queries and http requests;
- React Router - to add routing to this application;
- node-sass - to use SASS preprocesor for CSS;
