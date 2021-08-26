import React from 'react'

const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
                 style= {{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg)'
                 }}
             />
        <div className="journal__entry-body">
           <p className="journal__entry-title">
              Un nuevo día!!!
           </p>
                <br/>
           <p className="journal__entry-content">
              Cargado de Muchas Bendiciones. 
           </p>
        </div>     

        <div className="journal__entry-date-box">
             <span>Monday</span>
             <h4>26</h4>
        </div>

        </div>
    )
}

export default JournalEntry
