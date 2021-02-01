import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import InputArea from "./InputArea"




function App() {


    const [notes, setNotes] = React.useState([]);


    function addNote(note) {

        setNotes(prevItems => {
            return [...prevItems, note];
        });
    }


    return <div>
        <Header />
        <InputArea addNote={addNote} />

        {notes.map((notes,index) =>{return <Note key={index} id={index} title={notes.title} content={notes.content} />}
            
        )}


        <Footer />

    </div>




}


export default App;