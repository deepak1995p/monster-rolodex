import React from 'react'
import './Card-list-style.css'
import Card from '../Card/Card'

const Cardlist = props => {

    return (
        <div className="card-list">
            {props.monster.map(monster => (
                <Card key= {monster.id} monster={monster}/>
            ))}
        </div>
    )
}

export default Cardlist
