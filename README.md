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
### GET /api/client/all
**JWT token required**
* Returns all client's info. Only accessible by authorized employee.

---
### GET /api/client/:id
**JWT token required**
* Returns an object with a single client's info. Only accessible by Authorized employee.
```
{
    "id": 5,
    "name": "MoNo",
    "village": "Brooklyn",
    "loanAmount": 30000,
    "paidAmount": 20000,
    "dueAmount": 10000,
    "loanInitailDate": "10/23/19",
    "loanDueDate": "10/23/19"
}

```
---
### PUT /api/client/:id
**JWT token required**
* Update Client info. Only accessible by that Authorized employee.
* Request example:
```
{
    "name": "Meaw",
    "village": "Bronx",
    "loanAmount": 300,
    "paidAmount": 200,
    "dueAmount": 100,
    "loanInitailDate": "10/23/19",
    "loanDueDate": "10/23/19"
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
    "loanInitailDate": "10/23/19",
    "loanDueDate": "10/23/19"
}
```
---
### DELETE /api/client/:id
**JWT token required**
* Delete a client. Only accessible by Authorized employee.