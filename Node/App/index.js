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
connection.end()

app.get('/', (req, res) => {
    res.send('<h1> Full Cycle </h1>')
})


app.listen(port, () => {
    console.log('Rodando na porta: ' + port)

})