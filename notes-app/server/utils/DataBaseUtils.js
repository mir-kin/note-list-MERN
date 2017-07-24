import mongoose from 'mongoose';
import '../models/Note';

import { db } from '../config.json';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect(`mongodb://${db.host}/${db.name}${db.params}`);
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title : data.title,
        text : data.text,
        color : data.color,
        createdAt : new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}