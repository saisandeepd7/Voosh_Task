# Enhanced Authentication API with Node.js

This project implements an enhanced authentication system using Node.js and MongoDB. It supports traditional email/password registration and login, as well as OAuth authentication with Google, Facebook, Twitter, and GitHub. Users can manage their profiles, including making them public or private, and admin users have the ability to view all profiles.

## Features

- User registration and login with email/password.
- OAuth authentication with Google (extendable to Facebook, Twitter, and GitHub).
- Session management with JSON Web Tokens (JWT).
- Profile management including photo, name, bio, phone, and email.
- Option for users to make their profile public or private.
- Admin users can view both public and private user profiles.
- Normal users can only see public user profiles.

## Technology Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Authentication:** Passport.js for handling OAuth and local authentication strategies
- **Other Libraries:** bcryptjs (for hashing passwords), jsonwebtoken (for JWT management), multer (for handling file uploads)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- MongoDB
- npm or yarn

### Installing

A step by step series of examples that tell you how to get a development environment running.


   git clone https://yourrepository.git
   cd your-project
   npm i
   npm start

### Usage

After starting the server, you can access the following endpoints:

   POST /api/auth/register for user registration.
   POST /api/auth/login for user login.
   GET /api/auth/google for authentication via Google.
   GET /api/users/profile for viewing the authenticated user's profile.
   POST /api/users/profile for editing the authenticated user's profile.
   GET /api/users/public-profiles for listing all public profiles.