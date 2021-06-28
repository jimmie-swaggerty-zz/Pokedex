import React, {useState} from 'react'
import PokeList from '../components/PokeList'

const AllPoke = (props) => {
    return(
        <div className="container-fluid">
            <PokeList title="All Pokemon"/>
        </div>
    )
}
export default AllPoke