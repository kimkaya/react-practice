import { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
    {
        src:'https://s2.coinmarketcap.com/static/img/coins/200x200/21453.png',
        altText:'강아지1',
        caption:'강아지1 설명',
        headers:'강아지1제목'
    },
    {
        src:'https://image.yes24.com/goods/101961007/XL',
        altText:'강아지2',
        caption:'강아지2 설명',
        headers:'강아지2제목'
    },
    {
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHI-5Y_yTx6tBCjLliPlufHsQvYPKwUBkFSg&usqp=CAU',
        altText:'강아지3',
        caption:'강아지3 설명',
        headers:'강아지3제목'
    }
];

class ReactstrapCarouesl extends Component{
    render(){
        return(
            <div>
            <UncontrolledCarousel items={items} style={{display:"inline-block",width:'500px',height:'200px',objectFit:"fill"}}/>
            </div>
        )
    }
}

export default ReactstrapCarouesl;