const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE users.id = $1";
const addUser = `INSERT INTO users 
(name, topics, questions, video, discord, telegram, email, reward) 
VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;
module.exports = {getUsers,getUserById,addUser,};