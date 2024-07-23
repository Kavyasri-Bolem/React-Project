# Spring Boot and ReactJS Project

## Overview

This repository contains a full-stack web application that uses Spring Boot for the backend and ReactJS for the frontend. The backend handles business logic, data processing, and API services, while the frontend provides a responsive user interface.

## Project Structure
my-project/
├── backend/                     # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/            # Main Java source files
│   │   │   │   └── com/example/
│   │   │   │       └── myproject/
|   |   |   |           ├── Config/
│   │   │   │           ├── controller/
│   │   │   │           ├── model/
│   │   │   │           ├── repository/
│   │   │   │           ├── service/
│   │   │   │           └── MyProjectApplication.java
│   │   │   ├── resources/       # Resource files
│   │   │   │   ├── static/      # Static files (HTML, CSS, JavaScript)
│   │   │   │   ├── templates/   # Template files (Thymeleaf, etc.)
│   │   │   │   └── application.properties
│   │   └── test/                # Test files
│   │       ├── java/
│   │       │   └── com/example/
│   │       │       └── myproject/
│   │       │           └── MyProjectApplicationTests.java
│   ├── target/                  # Compiled files (generated)
│   ├── .gitignore
│   ├── pom.xml                  # Maven configuration file
│   └── README.md
├── frontend/                    # ReactJS frontend
│   ├── public/                  # Public files (static assets)
│   │   ├── index.html
│   │   └── ...
│   ├── src/                     # React source files
│   │   ├── components/          # React components
│   │   ├── App.js               # Main React component
│   │   ├── index.js             # Entry point of the React application
│   │   └── ...
│   ├── node_modules/            # Node.js modules (generated)
│   ├── .gitignore
│   ├── package.json             # npm configuration file
│   ├── package-lock.json
│   └── README.md
├── .gitignore
└── README.md                    # Project README file


## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Java JDK 8+](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Maven](https://maven.apache.org/install.html)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Getting Started

### Backend (Spring Boot)
Controller package : for request handling controllers.
Config package : for configuration required to accepts get/post/put/delete mappings.
Model package : for creating model class based on requirement.
Repository Package : for Data Access layer using spring data Jpa/ spring mongo db.
Service Package : for business logics.
### Application.properties
To configure the server and db connections
### Frontend (React.js)
To create UI and for connecting to server I used Axioms

