package com.example.NotesApp.controller;

import com.example.NotesApp.entities.Note;
import com.example.NotesApp.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/notes")
@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping("/all")
    public ResponseEntity<List<Note>> getAllNotes(){
        try {
            List<Note> notes = noteService.getAllNotes();
            return ResponseEntity.ok(notes);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @PostMapping("/addnote")
    public ResponseEntity<Note> createNote(@RequestBody Note note){
        try {
            Note createdNote = noteService.createNote(note);
            return ResponseEntity.ok(createdNote);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable Long id){
        try {
            Note note = noteService.getNoteById(id);
            return ResponseEntity.ok(note);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody Note note){
        try {
            Note updatedNote = noteService.updateNote(id,note);
            return ResponseEntity.ok(updatedNote);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNote(@PathVariable Long id){
        try {
            noteService.deleteNoteById(id);
            return ResponseEntity.ok("Deleted Successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to delete the note");
        }
    }
}

