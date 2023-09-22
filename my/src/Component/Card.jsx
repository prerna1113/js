

import React from 'react';

function Profile({

    heading,
    ImageId,
    name,
    size,
    profession,
    award,
    discovery

})

{
    return(
        <div>
            <h1>{heading}</h1>
            <img src={ImageId} alt ={name} style={{width:"100px"}} />

            <ul>
                <li>
                    <b>
                        Profession:
                    </b>
                    {profession}
                </li>
                
                <li>
                    <b>awards:{award.length}</b>
                    ({award.join(' ,')})
                </li>

                <li>
                    <b>Discovery:</b>
                    {discovery}
                </li>
            </ul>
        </div>
    )
}


export default function Card(){

    return(
        <div>
            <Profile
            heading="Naruto"
            ImageId={"https://wallpapers.com/images/hd/naruto-profile-pictures-sa1tekghfajrr928.jpg"}
            alt ="naruto"
            profession="Scientist"
            award ={[
                'sasuke','naruto'
            ]}
            discovery="orchimaru"
             />
             
        </div>
    )
}