import React from 'react'


const Card = (props) => {  // destructing can be done even here ({name, email,id})
    const { name, email, id, website } = props
    return (
        <div className='tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img alt='' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{website}</p>
            </div>
        </div>
    )
}

export default Card;
