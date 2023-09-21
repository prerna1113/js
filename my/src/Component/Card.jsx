

import React from 'react';
import Gallery from './Gallery';

function Profile({
    heading,
    imageId,
    name,
    imageSize,
    awards,
    profession,
    discovery
}){
    return (
        <div>
            <h1>{heading}</h1>
            <img src={imageId} alt ={name} />
            <ul>
                <li><b>Profession:</b>{profession}</li>
                <li><b>awards: {awards.length}</b>({awards.join(' ,')})</li>
                <li>
                    <b>
                        discovery:
                    </b>
                    {discovery}
                </li>
            </ul>

        </div>
    )
}

 export default function Card(){
    return(
        <div>
            <h1>notable scientist</h1>
            <Profile 
            heading= "Sihizune"
            imageId={"https://i.imgur.com/1bX5QH6.jpg"}
            name= "sihi"
            profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
            />
        </div>
    )

}