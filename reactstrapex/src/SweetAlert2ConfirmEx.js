import { Component } from "react";
import Swal from "sweetalert2";
import SweetAlert2BasicEx from "./SweetAlert2BasicEx";

class SweetAlert2ConfirmEx extends Component{
    deleteAlert = (e)=>{
        Swal.fire({
            title:'정말 삭제하시겠습니까?',
            icon:'question',
            showConfirmButton:true,
            confirmButtonColor:'#4B088A',
            showCancelButton: true,
            cancelButtonColor:'#01DF01',
            confirmButtonText:'예',
            cancelButtonText:'아니요',
        }).then((result=>{
            if(result.value){
                document.getElementById('deleteId').remove();
                Swal.fire('Deleted','sweetalert2 삭제 완료', "success");
            }
        }))
    }
    render(){
        return(
            <>
                <h1 id='deleteId'>sweetalert2</h1>
                <button onClick={e=>this.deleteAlert()}>삭제</button>
            </>
        )
    }
}

export default SweetAlert2ConfirmEx;