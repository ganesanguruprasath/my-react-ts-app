import * as React from 'react';
import {type Note} from '../../model/note.model';
import NoteCard from './NoteCard';
import type { JSX } from 'react/jsx-runtime';

interface INotesListProps {
    notes:Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({notes, setNotes}) => {
    const handleDelete = (id:string) =>{
        // console.log("Note to be deleted:",id);
        setNotes(notes.filter(note=>note.id !==id));
    }
    const renderNote = ():JSX.Element[] => {
        // console.log(notes[0].name);
        return notes.map(note => (
           <NoteCard key={note.id} note={note} handleDelete={ handleDelete } />
        ))
    }
    return (
        <>
            <h2>Notes</h2>
            <div>{renderNote()}</div>
        </>
    );
};

export default NotesList;
