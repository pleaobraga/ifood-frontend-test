# Spotifood

Is a React Web Application to display the preferred playlists from iFood's customers.

It is integrated with the newest libraries such as:

- React
- React Hooks
- Redux
- Redux saga
- React Router Dom
- Jest
- Enzyme
- Storybook
- Babel
- Webpack
- styled components
- material UI
- Formik
- Yup

[**Access the Spotifood APP Demonstration**](https://spotifood-pleaobraga.herokuapp.com/)

[**Access the Project UI Documentation**](https://pleaobraga.github.io/spotifood/?path=/story/components-molecule-card--default)

# Quick Start

Check your node version, this project needs the node version >= 12 and yarn >= 1.22.0

## Installing dependencies

```
yarn
```

## Starting the project

To start the project use this command in your terminal and wait for a few seconds and the project will open a new tab in your browser automatically using port 8080

```
yarn start
```

### Test all project

```
yarn test
```

## Run UI documetation localy (Storybok)

To start the Storybook use the command, it will open a new webpage with Storybook running on port 9000

```
yarn storybook
```

# Project development

This project is was build from [**React Scaffold**](https://pleaobraga.github.io/spotifood/?path=/story/components-molecule-card--default) an open souce project created by myself which helps you to create a react project from scratch and that project does not create-react-app, I set everithing up from zero.

To achive the test requirements I chose to use Redux-saga to help with the race condition and the lib date-fns to deal with the date formatation because it has the most closer patter to deal with the date pattern provided by the API.

The App create all field and its validations in execution time. using the Filter api to provide all those two informations.

To deal with form and its validations it was used Formik and Yup to take care of it.

TO help the UI it was used Material UI and Styled components

For the test Jest and Enzyme

For the documentation Storybook and PropTypes

## Optimizations

To reduce the numbers of the API request it was used the debounce aproach with 250ms in every field that makes a request when its value changes.

A new request will only make if the fields change between this 250ms, if an user typed "1", then erase, then type "1" again in this 250ms time the APP will not make a new request because the current filter is already the same as the new one.

If the api returned an error the automatic update will not be trigger until the api start tu return 200 again

# Project architecture

The project architecture was designed using **SOLID** principles

The project was designed to support new features and pages in the future

The projct folder structure

```
src
├── api
├── components
│   ├── Atom
│   └── Molecule
│   └── Organism
│   └── UILess
├── pages
├── redux
│   ├── actions
│   └── reducer
│   └── sagas
├── service
├── utils
```

## Components

The components were created based on atomic design and each component has that structure

```
Component
├── Component.jsx
├── Component.test.js
├── Component.styles.js
├── index.js
```

Due **SOLID** principle some components like _Filter_ and _PlaylistCard_ do not cosume data direct from redux ( using the useSelector), but from props (from father to children), to let them more reusable, to support new pages and new features in the future.

## Redux

As we are using 2 diferents apis I created 2 diferents reducers and its ecosistems Filter and Playist to deal with them

As I said before the redux saga was chose because it can handle well with race condition and in this app that can happend.

## Auth

To deal with the autentication I used an API from Spotify to get the token, I stored it in the LocalStorage to avoid make unecessary requests.

## Tests

It was written Unit tests with more than 80% coverage
![alt text](https://github.com//ifood-frontend-test/blob/master/github-images/other/featuring.png?raw=true)
