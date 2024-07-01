import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Note from './Note';

const ListOfNotes = () => {

    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllNotes()
    },[]);

    // get all notes
    const getAllNotes = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/notes/all", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json()
            setNotes(data)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            {notes.length === 0 ? <p className='container ln p-3'>loading...</p> : <div className='container ln p-3'>
                <span className='btn btn-success my-2' onClick={() => navigate('/addnote')}>AddNote</span>
                <div className='row'>
                    {
                        notes.map((item) => {
                            return (
                                <Note key={item.id} item={item} />

                            )
                        })
                    }
                </div>
            </div>}

        </>
    );
}

export default ListOfNotes;
