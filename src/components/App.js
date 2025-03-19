import React, { useState } from "react";
import "./../styles/App.css";

function App() {
    const [showPara, setShowPara] = useState(false);

    return (
        <div id="main">
            {/* Do not alter the main div */}
            <button id="click" onClick={() => setShowPara(!showPara)}>
                {showPara ? "Hide Paragraph" : "Show Paragraph"}
            </button>
            {showPara && (
                <p id="para" className={showPara ? "show" : "hide"}>
                   "Life isn’t about finding yourself. Life is about creating yourself." 
                </p>
            )}
        </div>
    );
}

export default App;
