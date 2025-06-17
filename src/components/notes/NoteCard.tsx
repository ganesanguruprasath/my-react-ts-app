import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import { type Note } from '../../model/note.model';

interface INoteCardProps {
    note: Note,
    handleDelete:(id:string)=>void;
}

const NoteCard: React.FunctionComponent<INoteCardProps> = ({ note,handleDelete }) => {
    return (
        <>
            <Card key={note.id} style={{ backgroundColor: note.color, marginBottom: '1rem' }}>
                <Card.Title>{note.name}</Card.Title>
                <Card.Text>{note.text}</Card.Text>
                <Card.Footer className="text-muted">{note.date}</Card.Footer>
                <Button variant="danger" className="mb-3" onClick={ () => handleDelete(note.id)}>Delete</Button>
            </Card>
        </>
    );
};

export default NoteCard;
