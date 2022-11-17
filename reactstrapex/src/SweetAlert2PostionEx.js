import { Component } from "react";
import Swal from "sweetalert2";


class SweetAlert2PostionEx extends Component {
    saveAlert = (flag, positionflag,e)=>{
        Swal.fire({
            position:positionflag,
            icon:'success',
            title:flag+'준비되었습니다.',
            showConfirmButton:false,
            timer:1500
        })
    }
    render(){
        return(
            <>
                <h1>sweetalert2</h1>
                <button onClick={e=>this.saveAlert('저장','center')}>저장</button>
                <button onClick={e=>this.saveAlert('수정','bottom-end')}>수정</button>
            </>
        )
    }
}

export default SweetAlert2PostionEx;