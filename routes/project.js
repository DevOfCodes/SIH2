//jshint esversion:6

const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User, validate} = require('../models/project');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  const project = await Project.findById(req.project._id);
  res.send(project);
});

router.post('/', async (req, res) => {
  const { error } = validateProject(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let project = await Project.findOne({ name: req.body.name });
  if (project) return res.status(400).send('Project Name already registered.');

  user = new User(_.pick(req.body, ['name', 'description', 'owner']));
  await user.save();

});

module.exports = router;
