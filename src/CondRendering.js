import React from "react";

// {/* PROPS */}
function ConditionalRendering(props) {

    function getText() {
        if(props.number > 3) {
            return "veći od 3";
        } else {
            return "manji ili jednak 3";
        }
        
    }


    return <div>{getText()}</div>
}

export default ConditionalRendering;