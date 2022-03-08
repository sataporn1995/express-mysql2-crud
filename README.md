# express-mysql2
Create API using Express.js and MySQL Database

## Step: 1
Create Database and Table by file "create-database.sql"

## Step: 2
$ npm install
# http://localhost:3000/

## Request
**C = Create** ==> [POST] /create-employee
Body:
{
  "name": "TESTER",
  "date": "2022-01-01"
}

**R = Read** ==> [GET] /all-employees

**U = Update** ==> [POST] /edit-employee
Body:
{
  "id": 1,
  "name": "ABCD",
  "date": "2022-01-02"
}

**D = Delete** ==> [GET] /remove-employee/<id>
