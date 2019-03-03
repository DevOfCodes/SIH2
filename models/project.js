//jshint esversion:6

const config = require('config');
const Joi = require('joi');
const mongoose = require('mongoose');
const project = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 10000,
    unique: true
  },
  owner: {
    type:String,
  },
  tags : [{
    type:String
  }],
  contributer:[{
    type : String,
  }]
});

const Project = mongoose.model('Project', project);

function validateProject(Project) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(5).max(10000).required(),
    owner: Joi.string().min(5).max(1024).required()
  };

  return Joi.validateProjectg (Project, schema);
}

exports.Project = Project;
exports.validateProject = validateProject;
