package com.example.NotesApp.services;

import com.example.NotesApp.entities.Note;
import com.example.NotesApp.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImpl implements NoteService {

    @Autowired
    private NoteRepository noterepo;

    @Override
    public List<Note> getAllNotes() {
        return noterepo.findAll();
    }

    @Override
    public Note createNote(Note note) {
        return noterepo.save(note);
    }

    @Override
    public Note updateNote(Long id, Note note) {
        try {
            return noterepo.findById(id)
                    .map(existingNote -> {
                        existingNote.setTitle(note.getTitle());
                        existingNote.setDescription(note.getDescription());
                        return noterepo.save(existingNote);
                    })
                    .orElseThrow(() -> new IllegalArgumentException("Note with id " + id + " not found"));
        } catch (IllegalArgumentException e) {
            // Handle the exception or rethrow it as per your application's requirements
            // Example: logger.error("Error updating note: " + e.getMessage());
            return null; // Or throw a custom exception or handle it in a different way
        }
    }

    @Override
    public Note getNoteById(Long id) {
        Optional<Note> oNote = noterepo.findById(id);
        return oNote.orElse(null);
    }

    @Override
    public void deleteNoteById(Long id) {
        noterepo.deleteById(id);
    }
}
