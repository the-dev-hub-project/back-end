const mongoose = require('../db/connection')

const Schema = mongoose.Schema;

const NoteSchema = new Schema(
    {
        date:{
            type: Date,
            default: Date.now,
            required: true
        },
        content: String,
        application:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application'
        }
    }
)

module.exports = mongoose.model('Note', NoteSchema)