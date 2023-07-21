import React,{useState} from "react"
import { Heading } from "./Heading"
import { Footer } from "./Footer"
import { Note } from "./Note"
import { CreateArea } from "./CreateArea"
export function App(){
    const [notes,setNotes]=useState([])
    return(
        <div>
            <Heading/>
            <CreateArea notes={notes} setNotes={setNotes}/>          
            { 
             notes.map((note,index)=>{
                    return(
                        <Note key={index} title={note.title} content={note.content} />
                    )
                })
            }
            <Footer/>
        </div>
    )
}