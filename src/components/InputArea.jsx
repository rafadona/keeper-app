import React from "react";

function InputArea(props) {

    const [note, setNote] = React.useState({
        title:"",
        content:""
    });
  


    function handleChange(event) {
        const {name,value} = event.target;
        setNote(prevNote =>{
            return{
                ...prevNote,
            [name]:value
            }
        })
    }    
    

    return <div>
        <form>
            <input name="title" placeholder="title" onChange={handleChange} value={note.title}></input>
            <textarea name="content" placeholder="Escreva algo..." rows="5" onChange={handleChange} value={note.content}></textarea>
            <button 
            onClick={(event)=>{
            props.addNote(note) 
            setNote({
                title:"",
                content:""
            })                    
            event.preventDefault();
            
        }}> Add</button>
        </form>

    </div>

}

export default InputArea;