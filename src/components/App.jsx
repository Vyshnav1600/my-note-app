import React, { useEffect, useState } from "react";
import Header from "./Header";
import TextArea from "./Textarea";
import Note from "./Note";
import { getNotes } from "../apis/notesApi";
import Footer from "./Footer";


function App() {
  const [data,setData]=useState([]);

  const fetchNote=async()=>{
    const notesData= await getNotes();
    setData(notesData);
  }


  // useEffect(()=>{ 
  //   console.log('datas:', data);
  // },[data]);

  useEffect(()=>{
    fetchNote()  
  },[]);

  return (
    <div>
    <Header/>
    <TextArea refreshNotes={fetchNote}/>
    {data.map((noteItem,index )=> (
        <Note
          key={index}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          refreshNotes={fetchNote}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
