# React and Rails To Do List Application

This application is an experiment in integrating React with Rails. Rails was used for routing and generating very simple views. React and javascript were used to render and populate the views. This application uses the flux architecture (stores, action creators and dispatchers) to control the flow of data within the application. The data is pulled from and sent to the [blocitoff API](http://github.com/ujkhokhar/blocitoff-api).

## Try it yourself
To see it in action, run the [blocitoff API](http://github.com/ujkhokhar/blocitoff-api) on a local server on port 3001. Then run this React and Rails application on a local server with a different port. Once both applications are running on their own servers, navigate to the React and Rails root (probably localhost:3000) and sign up for an account. Once you confirm your account, a new user and authentication token will be sent to the API. This will allow you to use the application to view and create items. 

## To do
* Add edit and delete actions.
* Allow users to create authentication tokens on user profile pages.