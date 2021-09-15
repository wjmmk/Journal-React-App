import React from 'react'
import NoteScreen from '../Notes/NoteScreen';
import NothingSelecter from './NothingSelecter';
import { useSelector } from 'react-redux';
import Siderbar from './Sidebar';

const JournalScreen = () => {

    const {active} = useSelector( state => state.notes)

    return (
     <div className="journal__main-content">

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
