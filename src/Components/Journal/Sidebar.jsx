import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../Actions/auth';
import JournalEntries from './JournalEntries'

const Sidebar = () => {

    const dispacth = useDispatch();

    const hanleLogout = () => {
        dispacth(startLogout())
    }

    return (
        <aside className="jourl__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="">
                    <i className="far fa-moon"></i>
                    <span> WjmmK!!!</span>
                </h3>

                <button 
                        className="btn"
                        onClick= { hanleLogout }
                >
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar
