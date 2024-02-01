const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql_insert = `INSERT INTO people(name) values ('Leonardo')`
connection.query(sql_insert)
var queryResults
connection.query("SELECT * FROM people", function (err, result, fields) {
    queryResults = result
    console.log(result);
});
connection.end()

app.get('/', (req, res) => {
    res.send('<h1> Full Cycle </h1>' + queryResults[0].name)
})


app.listen(port, () => {
    console.log('Rodando na porta: ' + port)

})