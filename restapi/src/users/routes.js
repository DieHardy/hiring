const {Router} = require ('express');
const controller = require('./controller')
const router = Router();

//router.get('/', controller.getUsers)
//router.get('/:id', controller.getUserById)
router.post('/addUser', controller.addUser)
module.exports = router;
