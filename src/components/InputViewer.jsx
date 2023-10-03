import { Col, Row } from "react-bootstrap";

export default (props) => {
    const renderer = () => {
        const columns = [];
        for(let i = 0; i < props.word.length; i ++){
            columns.push(<Col key={i}>
                <img
                width={(300/props.word.length)+"vh"}
                alt="masking"
                key={i}
                src={
                    props.inputs.includes(props.word.charAt(i).toUpperCase())?
                    require('../imgs/' + props.word.charAt(i).toUpperCase() + ".png") :
                    require('../imgs/Underbar.png')
                }
                />
            </Col>)
        }
        const result = [];
        result.push(<Row className="mt-2">{columns}</Row>);
        return result;
    }

    return <>
        {renderer()}
    </>
}