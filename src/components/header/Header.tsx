import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

// const Header: React.FunctionComponent<IHeaderProps> = (props) => { OR }
const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <>
            <Container>
                <Navbar variant='dark' bg='dark' fixed='top'>
                    <Navbar.Brand>Notes App - React+Typescript</Navbar.Brand>
                </Navbar>
            </Container>
        </>
    )
};

export default Header;
