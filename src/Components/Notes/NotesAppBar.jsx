import React from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../Actions/notes';

const NotesAppBar = ({id, title, body, date, url}) => {

    const noteDate = moment(date);

    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes);

    const handleSave = () => {
        dispatch( startSaveNote( active ));
    }

    return (
        <div className="notes__appbar">
            <span>{noteDate.format('MMMM Do YYYY, h:mm:ss a')}</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick= {handleSave}
                >
                    Save
                </button>
            </div>
               

        </div>
    )
}

export default NotesAppBar
