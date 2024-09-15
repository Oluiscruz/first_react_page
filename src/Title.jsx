import { useState } from "react"

function Title({ color }) {
    const [text, setText] = useState("Hello World!")
    const [inputText, setInputText] = useState("")


    function clicou() {
        setText(inputText)
    }
    return (
        <div className="title">
            <h1 style={{color: color}}>{text}</h1>
            <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
            <button onClick={clicou}>Mudar</button>
        </div>
    )
}
export default Title