import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';
import {useNavigate} from 'react-router-dom'

const NotePage = () => {

  const { id } = useParams()
  const noteId = id;
  console.log("noteId:", noteId)

  const history = useNavigate()

  const [note, setNote] = useState(null)

  useEffect(()=>{
    getNote()
 }, [noteId])

  const getNote = async ()=>{
    if(noteId === 'new') return
    const response = await fetch(`https://notesapp-2758f5a48695.herokuapp.com/api/notes/${noteId}/`)
    const notedata = await response.json()
    setNote(notedata)
  }


  const createNote = async () =>{
    fetch(`https://notesapp-2758f5a48695.herokuapp.com/api/notes/create/`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
}


  const updateNote = async () =>{
      fetch(`https://notesapp-2758f5a48695.herokuapp.com/api/notes/${noteId}/update/`, {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  const deleteNote = async ()=>{
    fetch(`https://notesapp-2758f5a48695.herokuapp.com/api/notes/${noteId}/delete/` , {
      method:'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })
    history('/', { replace: true })
  }

  const handleSubmit = ()=>{
   if(noteId !== 'new' && !note.body){
     deleteNote()
   }else if(noteId !== 'new'){
     updateNote()
   }else if(noteId === 'new' && note.body !== null){
     createNote()
   }
    history('/', { replace: true })
  }

 

  return (
    <div className='note'>
      <div className='note-header'>
       
          <h3><ArrowLeft onClick={handleSubmit}/></h3>
          {noteId !== 'new'?(
             <button onClick={deleteNote}>Delete</button>
          ):(
            <button onClick={handleSubmit}>Create</button>
          )}
      </div>
      <textarea onChange={(e)=> {setNote({...note, 'body':e.target.value})}} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage;
