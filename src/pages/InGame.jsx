import { Button, Container, Modal } from "react-bootstrap"
import CharacterSelector from "../components/CharacterSelector"
import HangmanViewer from "../components/HangmanViewer"
import InputViewer from "../components/InputViewer";

export default (props) => {

    return <>
    <Container className="d-flex" style={{flexDirection:"column"}}>
        <Container className="w-100 d-flex" style={{height:"85vh", flexDirection:"row"}}>
            <Container className="w-50 d-flex align-items-center justify-content-center"
                style={{flexDirection:"column"}}>
                    <HangmanViewer err={props.err}/>
                    <InputViewer word={props.word} inputs={props.inputs}/>
            </Container>
            <CharacterSelector addInput={props.addInput}/>
        </Container>
        <Container className="d-flex justify-content-center align-items-center">
            <Button 
                className="bg-secondary border-secondary w-25"
                onClick={() => {
                    props.reset();
                }}
                >다시하기</Button>
        </Container>
    </Container>
    </>
}