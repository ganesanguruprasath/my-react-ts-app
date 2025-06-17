import { useState, useRef } from 'react';
import { Alert, Form, Button, Card } from 'react-bootstrap';
import { type Note } from '../../model/note.model';

interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
    const [error, setError] = useState<string>("");
    const nameRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (nameRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All fields are mandatory");
        }

        setError("");
        setNotes([...notes, {
            id: (new Date()).toString(),
            name: (nameRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);

        (nameRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";

    }

    return (
        <>
            <Card className='text-start'>
                <h2>Create Notes</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Tittle</Form.Label>
                        <Form.Control type="text" placeholder="Enter name for the Note" ref={nameRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Text</Form.Label>
                        <Form.Control placeholder="Enter your notes" as="textarea" rows={3} ref={textRef} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="colorInput">Choose your notes color</Form.Label>
                        <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" name="Choose your color" ref={colorRef} />
                    </Form.Group>
                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
            </Card>
        </>
    );
};

export default CreateNotes;