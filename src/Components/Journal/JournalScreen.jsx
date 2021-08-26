import React from 'react'
import NoteScreen from '../Notes/NoteScreen';
/* import NothingSelecter from './NothingSelecter'; */
import Siderbar from './Sidebar';

const JournalScreen = () => {
    return (
     <div className="journal__main-content">

        <Siderbar />

        <main>
            <h1> Main content</h1>

          {/*   <NothingSelecter /> */}

          <NoteScreen />
        </main>
     </div>   
    )
}

export default JournalScreen
