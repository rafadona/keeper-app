import React from "react";




function InputArea(props) {

    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");


    function handleTitle(event) {
        const text = event.target.value;
        setTitle(text)
    }

    
    function handleContent(event) {
        const contentBody = event.target.value;
        setContent(contentBody)
    }

    return <div>
        <form>
            <input name="title" placeholder="title" onChange={handleTitle} value={title}></input>
            <textarea name="content" placeholder="Escreva algo..." rows="5" onChange={handleContent} value={content}></textarea>
            <button 
            onClick={(event)=>{
            props.addTitle(title)
            props.addContent(content)            
            event.preventDefault();
            
        }}
        
        >
        Add</button>
        </form>

    </div>

}



export default InputArea;