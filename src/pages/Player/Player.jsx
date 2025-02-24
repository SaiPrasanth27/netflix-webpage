import React from 'react'
import './Player.css'
import Back_arrow from '../../assets/back_arrow_icon.png'
const Player =()=>{
    return(
        <div className='Player'>
            <img src={Back_arrow} alt="" />
            <iframe width='90%' height='90%'
            src="https://ww.youtube.com/embed/srMN8TKlVg0&ab_channel=TeluguFilmy"
            title='trailer' frameBorder='0' ></iframe>
            <div className="info">
                <p>Published Date</p>
                <p>Name</p>
                <p>Type</p>
            </div>
        </div>
    )
}

export default Player