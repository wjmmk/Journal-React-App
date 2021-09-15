import React, {useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import NotesAppBar from './NotesAppBar';
import useForm  from '../../Hooks/useForm';
import { activeNote } from '../../Actions/notes';

const NoteScreen = () => {

    const {active: note} = useSelector( state => state.notes);
    const dispatch = useDispatch();
    
    const [formValues, handleInputChange, reset] = useForm( note );
    const {body,title, url} = formValues;


    const activeId = useRef(note.id)

    useEffect(() => {
        
        if( note.id !== activeId.current){
            reset( note );
            activeId.current = note.id;
        }

    }, [note, reset]);


    useEffect(() => {
        dispatch( activeNote(formValues.id, { ...formValues }))
    }, [formValues, dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    className="notes__title-input"
                    type="text"
                    name="title"
                    placeholder="Some awesome title"
                    value= {title}
                    onChange= { handleInputChange }
                />

                <textarea 
                    className="notes__textarea"
                    name="body"
                    placeholder="what happened today"
                    value= {body}
                    onChange= { handleInputChange }
                ></textarea>

               { 
                  url &&
                    <div className="notes__image">
                        <img 
                            src="https://marcianosmx.com/wp-content/uploads/2013/08/minimoo64_fractals_01.jpg"
                            alt="Img"
                        />
                    </div>
               } 
            </div>

        </div>
    )
}

export default NoteScreen
