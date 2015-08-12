var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  question: {type:String, trim: true},
  description: {type:String, trim:true},
  answers:
    [{
        answer: {type:String, trim:true},
        details:{type:String, trim:true},
        likes:{type:Number},
        name:{type:String, trim:true}
    }]
});

mongoose.model('Question', QuestionSchema);
