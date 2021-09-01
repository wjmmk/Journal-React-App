import React from 'react'
import NoteScreen from '../Notes/NoteScreen';
/* import NothingSelecter from './NothingSelecter'; */
import Siderbar from './Sidebar';

const JournalScreen = () => {
    return (
     <div className="journal__main-content">

        <Siderbar />

        <main>
        
          {/*   <NothingSelecter /> */}

          <NoteScreen />
        </main> 
     </div>   
    )
}

export default JournalScreen
