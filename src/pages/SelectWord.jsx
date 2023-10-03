import { faArrowsRotate, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Container, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"

export default (props) => {

    const [hover, setHover] = useState(-1);
    const [hover2, setHover2] = useState(0);
    const [show, setShow] = useState(false);

    const tooltipReroll = (
        <Tooltip id="tooltip">
          클릭 시, 단어 <strong>3개</strong>를 <strong>다시</strong> 뽑습니다.
        </Tooltip>
      );

    const tooltipHelp = (
        <Tooltip id="tooltip">
          처음 게임을 해보신다면 클릭해서 도움말을 확인해보세요!
        </Tooltip>
      );

    const renderer = () => {
        if(props.words === undefined){
            return <h3>데이터베이스 로드 중입니다. 잠시만 기다려주세요.</h3>
        }
        const result = [];
        for(let i = 0; i < 3; i ++){
            result.push(<Button 
                className={"m-5 w-25 border-secondary " + (hover === i ? "bg-black" : "bg-secondary")}
                onMouseEnter={()=>{setHover(i)}}
                onMouseLeave={()=>{setHover(-1)}}
                onClick={()=>{props.setWord(props.words[i])}}
                key={i} 
                style={{fontSize:"3vw"}}>
                {props.words[i]}
            </Button>)
        }
        return result;
    }

    return <>
        <Container className="d-flex justify-content-center align-items-center" style={{flexDirection:"column"}}>
            {props.words !== undefined && <h2 className="m-5">출제할 단어를 선택해주세요!</h2>}
            <Container className="d-flex justify-content-center align-items-center" style={{flexDirection:"row"}}>
                {renderer()}
            </Container>
            <Container className="mt-3 d-flex justify-content-center align-items-center" style={{flexDirection:"row"}}>
                <Container/>
                <OverlayTrigger placement="bottom" overlay={tooltipReroll}>
                    <Container
                        className={"d-flex justify-content-center align-items-center me-3 w-50 p-3 " +
                            (hover2 == 1 ? "bg-secondary rounded" : "")}
                        style={{flexDirection:"column"}}
                        onMouseEnter={()=>setHover2(1)}
                        onMouseLeave={()=>setHover2(0)}
                        onClick={()=>props.getRand()}>
                        <FontAwesomeIcon className="mb-2" icon={faArrowsRotate} size="2x"/>
                        <h5>다시뽑기</h5>
                    </Container>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={tooltipHelp}>
                    <Container
                        className={"d-flex justify-content-center align-items-center ms-3 w-50 p-3 " +
                            (hover2 == 2 ? "bg-secondary rounded" : "")}
                        style={{flexDirection:"column"}}
                        onMouseEnter={()=>setHover2(2)}
                        onMouseLeave={()=>setHover2(0)}
                        onClick={()=>setShow(true)}>
                    <FontAwesomeIcon className="mb-2" icon={faQuestion} size="2x"/>
                        <h5>게임규칙</h5>
                    </Container>
                </OverlayTrigger>
                <Container/>
            </Container>
        </Container>
        <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>도움말</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>어서오세요! 친구들과 함께 즐길 수 있는 행맨 게임입니다.</h5>
            <p>
                1. 친구들과 출제자를 1명 선정해주세요.
            </p>
            <p>
                2. 출제자는 초기화면에서 마음에 드는 단어를 하나 선택해주세요. 만약 마음에 들지 않는다면 다시 뽑기를 해도 좋아요!
            </p>
            <p>
                3. 이제 출제자를 제외한 친구들은 글자를 맞춰주면 돼요.
            </p>
            <h5>다 함께 즐겁게 게임을 즐겨주세요!</h5>
        </Modal.Body>
      </Modal>
    </>
}