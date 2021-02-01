import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import InputArea from "./InputArea"




function App() {


    const [title, setTitle] = React.useState([]);
    const [content, setContent] = React.useState([]);


    function addTitle(title) {

        setTitle(prevItems => {
            return [...prevItems, title];
        });
    }

    function addContent(content) {

        setContent(prevItems => {
            return [...prevItems, content];
        });
    }




    return <div>
        <Header />
        <InputArea addTitle={addTitle} addContent={addContent} />

        {title.map((titulo, index) =>
            <Note
                key={index} id={index} title={titulo} content={content} />
        )}


        <Footer />

    </div>




}


export default App;