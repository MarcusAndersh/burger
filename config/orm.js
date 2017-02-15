const connection = require('./connection.js');

module.exports = {
    selectAll: (tableName, callback) => {
        connection.query(
            `SELECT * FROM ${tableName};`,
            (err, res) => {
                err ? console.log(error) : callback(res);
            }
        );
    },
    
    insertOne: (tableName, columns, values, callback) => {
        connection.query(
            `INSERT INTO ${tableName} (${columns.toString()})
             VALUES (${values.toString()})`,
            (err, res) => {
                err ? console.log(error) : callback(res);
            }
        );
    },

    updateOne: (tableName, columns, values, whereColumn, whereValue, callback) => {
        let columnValueArray = [];
        columns.map((column, i) => {
            columnValueArray.push(`${column}='${values[i]}'`);
        });
        connection.query(
            `UPDATE ${tableName}
             SET ${columnValueArray.toString()}
             WHERE ${whereColumn}=${whereValue}`,
            (err, res) => {
                err ? console.log(error) : callback(res);
            }
        );
    }
}