import { Component } from "react";
import {
    Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button 
    } from "reactstrap";

class ReactstrapCard extends Component{
    render(){
        return(
            <>
            <Card>
                <CardImg top height="300px" src="https://t1.daumcdn.net/cfile/tistory/206FFA024CDA899150" alt="Card image cap"/>

                <CardBody>
                    <CardTitle>Card 제목</CardTitle>
                    <CardSubtitle>Card 부제목</CardSubtitle>
                    <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
                    <Button>버튼</Button>
                </CardBody>
                
            </Card>
            </>
        )
    }
}



export default ReactstrapCard;