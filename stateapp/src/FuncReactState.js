import { useState } from "react";

function FuncReactState({reactString}){
    // const[StateString,setStateString] = useState(reactString);
    // const[StateNumber,setStateNumber] = useState(200);
const [StateCombine, setStateCombine] = useState({StateString:reactString,StateNumber:200});

    return(
        <>
        <div>{StateCombine.StateString}{StateCombine.StateNumber}</div>
        <button onClick={(e)=>setStateCombine({...StateCombine,StateString:'리액트'})}>한/영</button>
        <button onClick={(e)=>setStateCombine({...StateCombine,StateNumber:300})}>300</button>
        </>
    )
}

export default FuncReactState;