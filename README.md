## Introduction

HomeMonitor is a web application that allows users to login based on SSO, using their Gmail or Facebook accounts.

Once the users are signed in, the user can see three main elements:

1. Temperature/Humidity readings per room
   - Once the room names are clicked, the users can see the temperature and humidity plot for the past 5 hours for that specific room.
2. Weather report from user's GPS location
   - Once logged in to the dashboard page, your browser prompts you for your location. If they allow this, the application shows your current location, written weather, temperature and humidity.
3. News headings
   - The application picks up the news headings from 

## Technical Specifications

The web application is structured with three HTML files and one JavaScript file.

- Index.html
  - Holds the SSO feature utilizing FireBase authorization. Tokens recieved in the Google Cloud Services and Facebook Applications are used to make SSO possible.
- dashboard.html
  - Test
- dashboard.js
  - Includes a multitude of functions, mainly handling the replication of sensor values of temperature and humidity, API calls to AccuWeather  for weather by location and the New York Times for current news headlines.
- plots.html
  - test

## Running HomeMonitor

We will attach the configuration file which includes FireBase and API keys. Please place it in the root folder of your cloned local repository. User/.../home_owner_project/

Whoever is reading this yet has not recieved the configuration file, please contact us from the email below and we will be happy to send you the configuration file.

In your terminal or command line, install http-server (Node tool used to host simple web applications locally) by one of either way.

```
npm install --global http-server
```

```
brew install http-server
```

To use http-server, all you have to do is run

```
http-server [path]
```

Replace [path] with the path to the locally cloned repo, with config.js placed in it.

Now you can visit http://localhost:8080 to see the application running. If you see EC463 Mini Project, that is the right one.

Any other preferred method of running a simple html or directory locally can be used as well.

## Troubleshooting

When playing around with the contents locally, make sure to re-run the http-server, and force reload the localhost page on your browser to register the changes.

## Contact

Ghazanfar Yezdan - gyezdan@bu.edu

Kaito Yamagishi - kaitoy@bu.edu

Project Link (Does not work without configuration file but hosted on GitHub Pages): https://gyezdan327.github.io/home_owner_project/
