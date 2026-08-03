import React from "react";

export default function EventData2() {
    const onClickStartStop = (ev) => {
        let t = ev.target.innerText;
        let s = (t === 'Start' || t === 'start') ? 'Stop' : 'Start';
        ev.target.innerText = s;
        alert(`You clicked ${t}`);
    };

    const handleCalculate = (ev) => {
        let expression = ev.target.innerText; 
        let result = eval(expression);        
        alert(`${expression} = ${result}`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
            <button onClick={(ev) => onClickStartStop(ev)}>Start</button><br/><br/>
            <button onClick={(ev) => handleCalculate(ev)}>10 + 20</button><br/><br/>
            <button onClick={(ev) => handleCalculate(ev)}>30 * 40</button><br/><br/>
        </div>
    );
}