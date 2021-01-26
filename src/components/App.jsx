import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"




function App() {


    return <div>
        <Header></Header>
        {notes.map(note => <Note key={note.key} name={note.tile} content={note.content} />)}

        <Footer></Footer>

    </div>


};




export default App;