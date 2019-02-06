import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import classes from './CarDetailComponents.module.css';

const carPic = (props) => {
    const imagesPath = props.imagesPath.map((path, index) => (
        <Carousel.Item key={index}>
            <img
                className="d-block w-100 h-100"
                src={path}
                alt='carPic'
            />
            <Carousel.Caption>
                <p>Picture {index + 1}</p>
            </Carousel.Caption>
        </Carousel.Item>
    ))
    return (
        <Carousel>
            {imagesPath}
        </Carousel>
    );
}

const carDetailR = (props) => {

    return (
        <div>
            <div className={classes.DivHeader}><span className={classes.Header}>{props.brand + " - " + props.type}</span></div>
        </div>
    );
}

const carDetailMiddle = (props) => {

    return (
        <div className={classes.Detail}>
            <Row>
                <Col>รถปี:</Col><Col>{props.payload.regYear}</Col>
            </Row>
            <Row>
                <Col>เลขทะเบียน:</Col><Col>{props.payload.LNumber}</Col>
            </Row>
            <Row>
                <Col>ประเภทเกียร์:</Col><Col>{props.payload.gear === 'auto' ? 'Auto' : 'Manual'}</Col>
            </Row>
            <Row>
                <Col>จำนวนที่นั่ง:</Col><Col>{props.payload.seat}</Col>
            </Row>
            <Row>
                <Col>อุปกรณ์เสริม:</Col><Col>{props.payload.equipment}</Col>
            </Row>
            <Row>
                <Col>วันที่สามารถใช้ได้ :</Col><Col>ตั้งแต่ XXXX จนถึง XXXX</Col>
            </Row>
            <Row>
                <Col>รายละเอียด:</Col><Col>XXXX</Col>
            </Row>
            <Row>
                <Col>ราคาต่อวัน:</Col><Col>XXXX</Col>
            </Row>
        </div >
    );
}

export { carPic, carDetailR, carDetailMiddle };