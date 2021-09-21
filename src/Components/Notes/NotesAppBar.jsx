import React from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../Actions/notes';
import { startUploading } from '../../Actions/notes';

const NotesAppBar = ({id, title, body, date, url}) => {

    const noteDate = moment(date);

    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes);

    const handleSave = () => {
        dispatch( startSaveNote( active ));
    }

    const handleFileLoader = () => {
        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]

        if(file){
            dispatch( startUploading(file) )
        }
    }

    return (
        <div className="notes__appbar">
            <span>{noteDate.format('MMMM Do YYYY, h:mm:ss a')}</span>

            <input 
                id='fileSelector'
                name= 'file'
                type='file'
                style= { {display: 'none'} }
                onChange= { handleFileChange }
            />

            <div>
                <button 
                    className="btn"
                    onClick= { handleFileLoader }
                >
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
