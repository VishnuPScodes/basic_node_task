# User API

Welcome to the User API! This API allows you to perform CRUD operations on user data.

## Base URL
The base URL for all endpoints is `http://your-api-domain.com/users`.

## Routes

### Get all users
- **URL:** `/`
- **Method:** `GET`
- **Description:** Retrieves all users.
- **Request Body:** None
- **Response:** Returns a JSON array of user objects.

### Get one user
- **URL:** `/:userId`
- **Method:** `GET`
- **Description:** Retrieves a single user by their ID.
- **Request Parameters:**
  - `userId`: The ID of the user to retrieve.
- **Response:** Returns a JSON object representing the user.

### Create a new user
- **URL:** `/`
- **Method:** `POST`
- **Description:** Creates a new user.
- **Request Body:** JSON object with the following fields:
  - `name`: Name of the user.
  - `email`: Email address of the user.
  - `age`: Age of the user.
- **Response:** Returns a JSON object representing the newly created user.

### Update a user
- **URL:** `/:userId`
- **Method:** `PUT`
- **Description:** Updates an existing user.
- **Request Parameters:**
  - `userId`: The ID of the user to update.
- **Request Body:** JSON object with fields to update:
  - `name`: Name of the user.
  - `email`: Email address of the user.
  - `age`: Age of the user.
- **Response:** Returns a JSON object representing the updated user.

### Delete a user
- **URL:** `/:userId`
- **Method:** `DELETE`
- **Description:** Deletes an existing user.
- **Request Parameters:**
  - `userId`: The ID of the user to delete.
- **Response:** Returns a success message if the user was deleted successfully.

## Example Usage

### Get all users
