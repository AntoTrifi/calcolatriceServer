const express = require("express");
const app = express();
const port = 3333;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + "client.html");
});

// http://localhost:3333/users?id=1234&token=abc
// app.get('/users', (req, res) => {
//     console.log(req.query);
//     // https://expressjs.com/en/4x/api.html#req.query
//     const userId = req.query.id || -1;
//     const token = req.query.token || -1;
//     /*
//         Token validation and logging in 
//      */
//     console.log(`User ${userId} loggged in at ${Date.now()}`);
//     res.status(200).send("OK");
// });

// http://localhost:3333/calc?display=${display.innerText}
app.get('/calc', (req, res) => {
    // https://expressjs.com/en/4x/api.html#req.params
    console.log(req.query);
    let display = req.query.display;
    let result = eval(display);
    result = result.toString();
    console.log("Output: " + eval(display));
    console.log(`Input: ${display}`);
    let json= {
        "result" : result
    }
    res.send(json);
});

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.post('/users', (req, res) => {
//     console.log(req.body);
//     const userId = req.body.id;
//     const token = req.body.token;
//     console.log(`User ${userId} loggged in at ${Date.now()}`);
//     res.status(200).send("OK");
// });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});