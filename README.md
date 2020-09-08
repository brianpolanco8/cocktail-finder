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
* **react-native-linear-gradient**: for a nice background color .
* **axios**: as a http client for fetching APIs.
* **prop-types**: as a typing library.
* **redux**: as a state container.
* **redux-thunk**: as a way to dispatch asynchronous actions.


# How can the list be more performant ?

For the list to be more performant I'll fetch the drinks by chunks, each chunk with a maximum quantity of drinks, doing it this has the advantage of limiting the amount of data the users receives which results in a faster server response to the client because the server doesn't has to send all the information back to the user. So, each time the user scrolls down and reaches the bottom of the app list, this will trigger another fetch that will bring the other chunk of data.