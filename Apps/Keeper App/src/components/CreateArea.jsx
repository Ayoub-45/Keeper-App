import React,{useState}from "react";

export function CreateArea({setNotes}) {
    const [note,setNote]=useState({
        title:"",
        content:""
    });
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
    
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3"onChange={handleChange} value={note.content} />
        <button onClick={()=>addNote(note)}>Add</button>
      </form>
    </div>
  );
}
