# FoxBox CockTail Finder Challenge

CocktailFinder

This a react-native simple application in order to test my skills for foxbox interview proccess.


# Installation and Setup Instructions

After cloning this repository, you'll need `node` and `yarn` installed globally on your machine.  

## Installation:

To install dependencies run `yarn` in the project root.

`yarn`  

To start development server depending on the OS you'll want the app to run, execute either: 

`yarn run ios` or   `yarn run android`

# List of libraries used

* **react-native-navigation**: to move between screens.
* **react-native-linear-gradient**: for a nice background color.
* **axios**: as a http client for fetching APIs.
* **prop-types**: as a typing library.
* **redux**: as a state container.
* **redux-thunk**: as a way to dispatch asynchronous actions.


# How can the list be more performant ?

To get a better performance I would fetch the drinks by chunks, making each one have a maximum quantity of drinks. In this way, I would limit the amount of data the users receive thus getting server responses faster to the client. That’s because the server doesn't have to send all the information back to the user. Therefore, each time the user scrolls down and reaches the bottom of the app list, another fetch would be triggered that will bring the other chunk of data making the user feel more comfortable with the responsiveness of the application.