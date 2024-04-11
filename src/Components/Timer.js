import { useEffect } from "react";
const Timer = ({ dispatch, secondsRemaining }) => {
    const mins = Math.floor(secondsRemaining / 60);
    const secon = secondsRemaining % 60;
    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: "tick" });
        }, 1000);

        // Returning a cleanup function to clear the interval
        return () => clearInterval(id);
    }, [dispatch]);

    return (
        <div className="timer">
            {mins < 10 && "0"}
            {mins}:{secon < 10 && "0"}
            {secon}

        </div>
    );
}
export default Timer;