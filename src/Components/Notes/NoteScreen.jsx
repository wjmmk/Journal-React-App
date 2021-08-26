import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    className="notes__title-input"
                    type="text"
                    placeholder="Some awesome title"
                />

                <textarea 
                    className="notes__textarea"
                    placeholder="what happened today"
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://marcianosmx.com/wp-content/uploads/2013/08/minimoo64_fractals_01.jpg"
                        alt="Img"
                    />
                </div>
            </div>

        </div>
    )
}

export default NoteScreen
