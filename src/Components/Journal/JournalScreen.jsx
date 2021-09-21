import React from 'react'
import NoteScreen from '../Notes/NoteScreen';
import NothingSelecter from './NothingSelecter';
import { useSelector } from 'react-redux';
import Siderbar from './Sidebar';

const JournalScreen = () => {

    const {active} = useSelector( state => state.notes)

    return (
     <div 
        className="journal__main-content animate__animated animate__fadeIn animate__faster"
      >

        <Siderbar />

        <main>
        
          {
            
            (active)
              ? <NoteScreen />
              : <NothingSelecter />
          
          }

          
        </main> 
     </div>   
    )
}

export default JournalScreen
