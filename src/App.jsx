import React from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import Notes from "./Notes.jsx"


function App(){
    return <div>
        <Header />
        {Notes.map(context=> (<Note title = {context.title} content ={context.content}/>))}
        <Footer />
    </div>
}

export default App;
