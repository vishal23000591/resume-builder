const mongoose = require('mongoose')


const ResumeSchema = new mongoose.Schema({
basics: {
name: String,
title: String,
email: String,
phone: String,
summary: String
},
experience: [{ role:String, company:String, start:String, end:String, desc:String }],
education: [{ school:String, degree:String, start:String, end:String }],
skills: [String],
createdAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model('ResumeBuilder', ResumeSchema)