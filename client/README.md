# Full Stack Task Manager App
This is a task manager app. The name of the app is WorkWise. It is built using React.js, Express, Node.js, and Postman. It allows users to create and manage task items..


## Getting started

To install and run the app:

1. Clone this repository.
2. Install the dependencies:
npm install
3. Start the development server:
npm start


The app will be running at http://localhost:5000.

### API documentation

The app has a simple API that can be used to create, read, update, and delete tasks.

**Endpoint** | **Method** | **Description**
------- | -------- | --------
`/tasks` | `GET` | Get all task items.
`/tasks` | `POST` | Create a new task.
`/tasks/:id` | `GET` | Get a task by ID.
`/tasks/:id` | `PUT` | Update a task.
`/tasks/:id` | `DELETE` | Delete a task.

**Example request to create a new task item:**

### Testing

To test the app, you can use Postman to send requests to the API endpoints.

**Example test to create a new task:**

1. Create a new POST request to the `/tasks` endpoint.
2. Set the Content-Type header to `application/json`.
3. In the body of the request, add the following JSON:

```json
{
  "task": "Finish homework"
}


4. Click the Send button.

If the request is successful, you will receive a 201 Created response with the newly created to-do item.


### Features
- Create, edit and delete tasks



