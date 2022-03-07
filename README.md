# **Calculator**

This is a server-side calculator app that exposes four routes for basic operations to be performed upon.

## **Using the Application**

### **Application requirements**
This application requires `node@>=12.0.0`, `npm@>=6.0.0`, and `yarn@^1.0.0`. 

### **Starting the application**
You can start the application by running `yarn deploy`. This will install the latest packages, transpile the code and then start a server on your local machine, on port `3000`.

The following **four** API endpoints are exposed:

`http://localhost:3000/Add`

`http://localhost:3000/Subtract`

`http://localhost:3000/Multiply`

`http://localhost:3000/Divide`

I have kept them captialised as per the specification.

To action these endpoints correctly, add a query string parameter, `values`, which should contain a comma-separated list of numbers you would like to operate upon. For example: 

`http://localhost:3000/Add?values=10,20,30`

Will perform an addition operation on the numbers `10`, `20`, and `30`, in that order.

You can run the application's tests via `yarn test`.

---

## **Considerations**

### **GET vs POST**
I thought about this for a little while and decided to go with `GET` for easier usage. There are arguments for and against both:

**GET**
- easier to query (just access the URL via browser and append values in a query string).
- Limit on how large the request can be which depends on server and browser setup.

**POST**
- Much larger amounts of data able to be received compared to `GET` requests.
- Harder to test as an independant API without either a client-side (mocked or actual) or an external tool to send `POST` requests.

To switch this to POST, you would simply need to change the verbs used in `app.ts`.

From a development environment you could test these routes using [Postman](https://www.postman.com/) to fire off your own HTTP `POST` requests.

### **Static methods vs this**
I've used static methods throughout the `CalculatorController` to avoid having to instantiate the class on each request.

If there were any future API endpoints that would require more complex actions than simple operations, then I would strongly consider moving the functionality over to a class based approach.

### **reduce vs recursive**

I've used a reducer function on all the operations. You could also do this recursively by embedding the functionality into each method and recalling itself until an empty array is left. 


### **Return values**
You can't send numbers as return values in `express` as they get interpreted as HTTP status codes, so I've sent an object containing a result property and a value.

You could also convert the result to a string and send that back, but I prefer the object approach as you get the ability to define the value type as part of the return as well.


### **Local dev environment**
I've used `nodemon` to enable a hot-reloading environment for me to work in.

`supertest` was also used to enable mock HTTP requests for integration testing.

---
## **Continuing on**

I ended up stopping mid-way through the integration tests, the next step would be to add non-happy path tests for each of the routes.

The next steps after this would be to add a logging and monitoring functionality to report on any errors that may occur. I would use [winston](https://github.com/winstonjs/winston) for this and integrate into a third party system such as [sentry](https://sentry.io/welcome/).