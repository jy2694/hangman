import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"

export default (props) => {

    const [hover, setHover] = useState(0);
    const [down, setDown] = useState(0);

    const renderColumn = (start, end) => {
        const columns = [];
        for(let i = start.charCodeAt(0); i <= end.charCodeAt(0); i ++){
            columns.push(<Col key={i}>
                <img 
                    width="85vh"
                    alt={String.fromCharCode(i)}
                    onMouseEnter={()=>{setHover(i)}}
                    onMouseLeave={()=>{setHover(0)}}
                    onMouseDown={()=>{setDown(i)}}
                    onMouseUp={()=>{setDown(0)}}
                    onClick={()=>{props.addInput(String.fromCharCode(i))}}
                    className={(hover == i ? "border border-1 border-white" : "") + " rounded m-1"}
                    style={down == i ? {backgroundColor:"gray"} : {}}
                    src={require("../imgs/"+String.fromCharCode(i)+".png")}/>
                </Col>)
        }
        const result = [];
        result.push(<Row>{columns}</Row>);
        return result;
    }

    return <>
        <Container className="w-50 d-flex align-items-center justify-content-center" style={{height:"85vh", flexDirection:"column"}}>
            {renderColumn("A", "D")}
            {renderColumn("E", "H")}
            {renderColumn("I", "L")}
            {renderColumn("M", "P")}
            {renderColumn("Q", "T")}
            {renderColumn("U", "X")}
            {renderColumn("Y", "Z")}
        </Container>
    </>
}