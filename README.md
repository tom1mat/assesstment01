# Southworks Assestment
In this project we are going to go through two ways of caching data in the browser.
The frontend will be covered by Jquery and Jquery Datatables  for consuming the data.
On the other hand, the backend will be developed in Node and Express for having a fast and simple implementation.
# Instalation
```sh
$ npm install --save express
$ node server.js
```
# Server endpoints
| Endpoint | Action |
| -------- | ------ |
| /get/tech-events | Returns the data  |
| /get/data-version | Returns last data-version |
| /update/data-version/:id | Updates the last data-version for simulating that the data has been updated  (in a real world scenario it should be put method)|

