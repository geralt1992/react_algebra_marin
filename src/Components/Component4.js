import React from 'react'
import Context from '../Context/Context.js'

function Component4() {

    const contextObject = React.useContext(Context);


    return <div>
        <h2>Komponenta 4 - consumer</h2>
        <p>{contextObject.text} - dobiveno iz konteksta, a broj je {contextObject.number}</p>
    
    </div>
}


export default Component4