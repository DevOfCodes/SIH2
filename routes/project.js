//jshint esversion:6

const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {Project, validateProject} = require('../models/project');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const project = await Project.find();
  res.send(project);
});


router.post('/', async (req, res) => {
  const project = new Project(_.pick(req.body, ['name', 'description', 'owner']));
  const result = await project.save();
  res.send(result);

});

module.exports = router;
