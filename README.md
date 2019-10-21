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