import { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Calculator from './Calculator';

const Prikaz = () => {

    const [name, setName] = useState("");

    useEffect(() => {
        const name = JSON.parse(localStorage.getItem('DATA'));
        
        if (name) {
         setName(name);
        }
    }, []);

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center mt-1'>{name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Calculator/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Prikaz;