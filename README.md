# Ma Milkshake

## Table of Contents 

1. [Overview](#overview)
2. [Installation](#installation)
3. [Initializing](#initializing)
	- [Local Server](#local-server)
	- [Heroku](#heroku)
4. [How It Works](#how-it-works)

<a name="overview"></a>
## Overview

Ma Milkshake is a milkshake logger with an MVC architecture. It uses a MySQL database to keep track of each milkshake order and uses other technologies such as Node, Express, Handlebars, and ORM to handle routing and page generation.

<a name="installation"></a>
## Installation

### Step 1: Git Clone

Clone the repo to your local machine:

```
git clone git@github.com:v-tank/ma-milkshake.git
```

The required files should now be on your local machine.

### Step 2: Install Dependencies

Dependencies used for this app include the following:

* express
* body-parser
* express-handlebars
* mysql

Install all the required packages using the following command:

```
npm install or npm i
```

The dependencies should now be in the local `node_modules` folder.

<a name="initializing"></a>
## Initializing

There are two ways to run this application. The user can either run the application on their local server or access the application deployed to Heroku.

<a name="local-server"></a>
### Local Server

1. Ensure the two steps in [Installation](#installation) are completed.

2. Run the Node application called server.js to initialize the user's local server using the following command:

	```
	node server.js
	```

3. Open the browser and connect to [PORT 3000 of the local host](http://localhost:3000/) to reach the homepage.

<a name="heroku"></a>
### Heroku

1. Open the browser and go to the deployed [Heroku](https://ma-milkshake.herokuapp.com/) application to reach the homepage.


<a name="how-it-works"></a>
## How It Works

1. The homepage will display a list of all milkshakes on order and allow the user to do one of the following:

	- `Order` a Milkshake by creating their own milkshake, or 
	- `Gulp` any milkshake listed under *On Order*

2. If the user chooses to `Order` a milkshake, the application will add the shake to *On Order*.

3. If the user chooses to `Gulp` a milkshake, the application will move the shake from the *Completed Orders*.

![](https://media.giphy.com/media/5aY6fmJwCkkbfywvIP/giphy.gif)
