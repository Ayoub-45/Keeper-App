import React,{useState}from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import { Zoom } from '@mui/material';
export function CreateArea({setNotes}) {
    const [note,setNote]=useState({
        title:"",
        content:""
    });
    const [show,setShow]=useState(false)
    function handleChange(e){
        const {name,value}=e.target
        setNote(prevNote=>{
            switch(name){
                case "content": 
                    return {
                        title:prevNote.title,
                        content:value
                    }
                case "title":
                    return{
                        title:value,
                        content:prevNote.content
                    }
                default:
                    return {
                        title:"",
                        content:""
                    }
            }

        })

    }
    function addNote(note){
         setNotes((prevNotes)=>{
            return [...prevNotes,note]
         })
         setNote({
            title:"",
            content:""
         })
        
    }
    function handleClick(){
        setShow((prevShow)=>{
            return !prevShow
        })
    }    
  return (
    <div>
      <form className="create-note" onSubmit={(e)=>{e.preventDefault()}}>
        {show &&<input name="title" placeholder="Title" onChange={handleChange} value={note.title} />}
        
        <textarea onClick={handleClick} name="content" placeholder="Take a note..." rows={show?"3":"1"}onChange={handleChange} value={note.content} />
        <Zoom in={show}>
        <Fab color="black" onClick={()=>addNote(note)}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}
