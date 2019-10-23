## Endpoints

### POST /api/register
* To register a employee, user must have username, password and email.
* Request example: 
```
{
  username: "David",
  password: "password",
  email: "david@email.com"
}
```
* Returns
```
{
  username: "David",
  email: "david@email.com",
}
```

### POST /api/login
* Provide a body with username and password. Returns a user object and a jwt token.
* Request example:
```
{
  "username": "David",
  "password": "password"
}
```
* Returns 
```
{
  "user": {
    username: "David",
    password: "password",
  },
    "token": "eyJhbI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imp1c3RpbiIsImlhdCI6MTU0OTI5MTkyNiwiZXhwmTIW7fdXkrA8"
}
```
---
### GET /api/employee/all
**JWT token required**
* Returns all Employee's info. Only accessible by an authorized employee.
---
### PUT /api/employee/:id
**JWT token required**
* Update an Employee info. Only accessible by that an authorized employee.
* Request example:
```
{
    "username": "Norman",
    "email": "new@email.com"
}
```
* Returns 
```
{
    "username": "Norman",
    "email": "new@email.com"
}
```
---
### DELETE /api/employee/:id
**JWT token required**
* Delete an employee profile. Only accessible by an authorized employee.
---
### POST /api/client
**JWT token required**
* Request Example
```
{
    "name": "Duck",
    "village": "Brooklyn",
    "loanAmount": 30000,
    "paidAmount": 20000,
    "dueAmount": 10000,
    "loanInitialDate": "10/23/19",
    "loanDueDate": "10/23/19",
    "achievedBag": 30,
    "goalBag": 20
}

```
* Returns 
```
{
    "id": 7,
    "name": "Duck",
    "village": "Brooklyn",
    "loanAmount": 30000,
    "paidAmount": 20000,
    "dueAmount": 10000,
    "loanInitialDate": "10/23/19",
    "loanDueDate": "10/23/19",
    "achievedBag": 30,
    "goalBag": 20
}

```
---
### GET /api/client/all
**JWT token required**
* Returns all client's info. Only accessible by an authorized employee.

---
### GET /api/client/:id
**JWT token required**
* Returns an object with a single client's info. Only accessible by an authorized employee.
```
{
    "id": 5,
    "name": "MoNo",
    "village": "Brooklyn",
    "loanAmount": 30000,
    "paidAmount": 20000,
    "dueAmount": 10000,
    "loanInitialDate": "10/23/19",
    "loanDueDate": "10/23/19",
    "achievedBag": 30,
    "goalBag": 20
}

```
---
### PUT /api/client/:id
**JWT token required**
* Update Client info. Only accessible by that an authorized employee.
* Request example:
```
{
    "name": "Meaw",
    "village": "Bronx",
    "loanAmount": 300,
    "paidAmount": 200,
    "dueAmount": 100,
    "loanInitialDate": "10/23/19",
    "loanDueDate": "10/23/19",
    "achievedBag": 30,
    "goalBag": 20
}

```
* Returns 
```
{
    "name": "Meaw",
    "village": "Bronx",
    "loanAmount": 300,
    "paidAmount": 200,
    "dueAmount": 100,
    "loanInitialDate": "10/23/19",
    "loanDueDate": "10/23/19",
    "achievedBag": 30,
    "goalBag": 20
}
```
---
### DELETE /api/client/:id
**JWT token required**
* Delete a client. Only accessible by an authorized employee.