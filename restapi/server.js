const userRoutes = require('./src/users/routes')
const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors())
const PORT = 3000;
app.use(express.json());

app.get('/', (request, response) => {
    //response.send('hey!')
})
app.use('/api/v1/users', userRoutes)




app.listen(PORT, ()=> console.log(`server running on a port ${PORT}`));
