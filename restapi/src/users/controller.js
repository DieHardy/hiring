const pool = require('../../db');
const queries = require('./queries')

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
const getUserById = (req, res) => {
    const id = parseInt(req.params.id) 
    pool.query(queries.getUserById,[id], (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
 
const addUser = (req, res) => {
    console.log(req.body)
    const {name, topics, questions, video, discord, telegram, email, reward } = req.body;
    pool.query(queries.addUser,
        [name, topics, questions, video, discord, telegram, email, reward], (error, results)=>{
        if (error) throw error;
        res.status(201).send('Application added');
        console.log('Application created.')
    })
}
module.exports = {
    getUsers,getUserById,addUser,
}