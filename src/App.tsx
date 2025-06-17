import { useState } from 'react';
import { Card, Col, Container, Row} from 'react-bootstrap';
import { type Note } from './model/note.model';
import Header from './components/header/Header';
import NotesList from './components/notes/NotesList';
import CreateNotes from './components/notes/CreateNotes';
import './App.css';

export function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    name: "sugar",
    text: "text sugar regarding the life",
    color: "#eeeeee",
    date: (new Date).toString()
  }]);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
      {/* {notes.map(note => (
        <Card key={note.id} style={{ backgroundColor: note.color, marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>{note.name}</Card.Title>
            <Card.Text>{note.text}</Card.Text>
            <Card.Footer className="text-muted">{note.date}</Card.Footer>
          </Card.Body>
        </Card>
      ))} */}
    </>

  );
}
