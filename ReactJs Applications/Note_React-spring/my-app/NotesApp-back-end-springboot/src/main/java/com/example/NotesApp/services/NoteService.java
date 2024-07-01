package com.example.NotesApp.services;

import com.example.NotesApp.entities.Note;

import java.util.List;
import java.util.Optional;

public interface NoteService {

    List<Note> getAllNotes();

    Note createNote(Note note);

    Note updateNote(Long id, Note note);

    Note getNoteById(Long id);

    void deleteNoteById(Long id);
}
