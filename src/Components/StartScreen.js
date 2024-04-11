

const StartScrenn = ({questions, dispatch}) =>{
    return(
        <div className="start">
            <h2>Welcome To The React Quiz!</h2>
            <h3>{questions} question to test your react mastery</h3>
            <button className="btn btn-ui" onClick={() =>dispatch({type:"start"})}>let's start</button>
        </div>
    )
}

export default StartScrenn;