# Tech Thoughts

![BSD](https://img.shields.io/badge/license-BSD3-green)


## Description
A back end app for an e-commerce website that uses the latest technologies. 

## Table of Contents
- [What was my motivation?](#what-was-my-motivation)
- [What did I do?](#what-did-i-do)
- [What did I learn?](#what-did-i-learn)
- [Usage](#usage)
- [Credits](#credits)

## What was my motivation?
To use all my knowledge from the previous weeks in Coding Bootcamp to use the given starter code and develop it into a full and functional app.

## What did I do?
Take a working Express.js API and configure it to use Sequalize to interact with a MySql database. Ensured all GET, POST, PUT and DELETE routes were working correctly.

## What did I learn?
- The proper steps to create a schema from the MySQL shell, seed a database and start an app's server.
- How to create relashionships between models using the foreign key.  
- Best practice to perform RESTful CRUD Operations.

## Usage

Installation
1)  Download the app.
2)  Use the following code to create the schema, seed the database and start the app. (Be sure to you use your own username and password)

```bash
mysql -u username -p
password
```
```bash
source db/schema.sql
exit 
```
```bash
npm run seed
node server
```

Use Insomnia to access the routes that are available.

Gif of live application 

![me](https://github.com/nxtera/Whats-Back-There/blob/main/Public/Images/Whats-Back-There.gif)


Video Demo:
https://drive.google.com/file/d/1AliqB2DSS_CrPyyd_7dveditmqg7q87Z/view?usp=share_link

## Credits
Created readme with help from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide.


## License
Copyright (c) <2022>, <Ashleigh>
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree. 
