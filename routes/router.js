const express = require('express')
const userController = require('../controllers/userController')
const projectController = require('../controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')

const router = new express.Router()

// register : http://localhost:3000/register
// router.post('/register',(req,res)=>{
//     console.log("inside register controller");

//     res.status(200).json("register request recieved")
    
// })

// register: http://localhost:3000/register
router.post('/register',userController.registerController)
// login: http://localhost:3000/login
router.post('/login',userController.loginController)
// add-project: http://localhost:3000/add-project
router.post('/add-project',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.addProjectController)
// home-project: http://localhost:3000/home-project
router.get('/home-project',projectController.homePageProjectController)
// all-project: http://localhost:3000/all-project
router.get('/all-project',jwtMiddleware,projectController.allProjectController)
// all-project: http://localhost:3000/user-project
router.get('/user-project',jwtMiddleware,projectController.userProjectController)
// projects/10/edit: http://localhost:3000/project/id/edit
router.put('/projects/:id/edit',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.editProjectController)
// projects/10/edit: http://localhost:3000/project/id/edit
router.delete('/projects/:id/remove',jwtMiddleware,projectController.removeProjectController)
//edit-user: http://localhost:3000/edit-user
router.put('/edit-user',jwtMiddleware,multerMiddleware.single('profilePic'),userController.editUserController)


module.exports = router