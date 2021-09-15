import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../Actions/auth';
import { startNewNote } from '../../Actions/notes';
import JournalEntries from './JournalEntries'

const Sidebar = () => {

    const dispacth = useDispatch();
    const {name} = useSelector( state => state.auth);

    const hanleLogout = () => {
        dispacth(startLogout())
    }

    const handleAddNewEntry = () => {
        dispacth( startNewNote())
    }

    return (
        <aside className="jourl__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="">
                    <i className="far fa-moon"></i>
                    <span> {name}</span>
                </h3>

                <button 
                        className="btn"
                        onClick= { hanleLogout }
                >
                    Logout
                </button>
            </div>

            <div 
                className="journal__new-entry"
                onClick= {handleAddNewEntry}
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar
