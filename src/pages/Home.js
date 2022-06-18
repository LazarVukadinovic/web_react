import {Container, Row, Col} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from '../Components/InputForm';
import Calculator from './Calculator';


const Home = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center mt-3">Pocetna strana</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-4">
                        <InputForm nameField="Unesite naslov strane za prikaz:"/>
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

export default Home;