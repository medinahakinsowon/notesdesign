import { useState, useEffect } from 'react';
import Listitem from '../components/Listitem';
import AddButton from '../components/AddButton';

const NoteListPages = () => {

  const [notes, setNotes] = useState([])

  const getNotes = async () => {
    const response = await fetch('https://notesapp-2758f5a48695.herokuapp.com/api/notes/')
    const data = await response.json()
    console.log(data)
    setNotes(data)
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>
      <div className='notes-list'>
        {notes.map((note, index) => (
          <Listitem key={index} note={note} />
        ))}
      </div>
      <AddButton/>
    </div>
  )
}

export default NoteListPages;
