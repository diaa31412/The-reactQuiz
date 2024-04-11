
const FinishScrenn=({points,maxPoints ,dispatch}) =>{
    const perctange = (points / maxPoints) *100 ;
    return(
        <>
            <p className="result">Your scored <strong>{points}</strong> 
            Out Of {maxPoints} ({Math.ceil(perctange)} %)</p>
            <button className="btn btn-ui" onClick={()=>dispatch({type: "restart"})}>Restart Quiz</button>
        </>
    )
}

export default FinishScrenn;