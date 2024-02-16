
// path to resolve each client request

const userController = require('../CONTROLLERs/userController')
const projectController = require('../CONTROLLERs/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

// 1) import express

const express = require('express');

// 2) create an object for the class router in express

const router = new express.Router();

// 3) define paths

router.post('/user/register', userController.register);

router.post('/user/login',userController.login);

router.post('/project/add', jwtMiddleware, projectController.addProject)

// 4) export rounter

module.exports = router;