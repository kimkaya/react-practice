import { Component } from "react";
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";

class PopoverEx extends Component{
    render(){
        return(
            <>
                <Button id="popover_id" type="button">
                    Popover button
                </Button>

                <UncontrolledPopover placement="bottom" target="popover_id">
                    <PopoverHeader>React start</PopoverHeader>
                    
                    <PopoverBody>
                        Aenean id magna id risus congue ornare.
                        Vestibulum sed diam et mi pulvinar facilisis sed eu risus
                    </PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default PopoverEx;