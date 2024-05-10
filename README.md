# Enhanced Authentication API

This project implements an enhanced backend API for an authentication system with the added feature of allowing users to set their profiles as public or private. Additionally, it includes functionality for admin users to view both public and private user profiles, while normal users can only access public profiles. The backend is developed using Node.js and MongoDB.

## Table of Contents

- [Features](#features)
- [User Stories](#user-stories)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- Authentication with external providers (Google, Facebook, Twitter, GitHub)
- User profile management (view, edit, set as public/private)
- Admin functionality to view all user profiles
- Authorization checks for accessing public/private profiles
- Error handling, validation, and security measures implemented

## User Stories

As a user, I can:

- Register a new account
- Log in
- Log in or register with at least one of the following services: Google, Facebook, Twitter, or GitHub
- Sign out
- See my profile details
- Edit my details including photo, name, bio, phone, email, and password
- Upload a new photo or provide an image URL
- Choose to make my profile public or private

As an admin user, I can:

- See both public and private user profiles

As a normal user, I can:

- Only see public user profiles

## Requirements

- Node.js
- MongoDB
- Postman (optional, for testing endpoints)


## Getting Started

### Prerequisites

Before starting, ensure you have the following installed on your local machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/enhanced-authentication-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd enhanced-authentication-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory of the project and define the following environment variables:

```
MONGODB_URI=mongodb://localhost:27017/Voosh
PORT=3000
```

Replace `Voosh` with the name of your MongoDB database.

## Usage

Start the server:

```bash
npm start
```

Access the API endpoints using Postman or any HTTP client.

## Testing

To test the API endpoints, you can use Postman or any other HTTP client. Ensure that the server is running (`npm start`) and send requests to the appropriate endpoints.

## Contributing

Contributions are welcome