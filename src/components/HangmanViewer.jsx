import { Container } from "react-bootstrap"

export default (props) => {

    return <>
    <Container className="w-50 h-75 d-flex align-items-center justify-content-center">
        <img style={{objectFit:"contain"}} width="200%" src={require('../imgs/Error'+(props.err+1)+".png")}>
        </img>
    </Container>
    </>
}