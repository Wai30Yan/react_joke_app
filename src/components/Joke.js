import React, { useEffect, useState } from 'react'

const Joke = ({ joke }) => {

    const newJoke = joke
    const [delivery, setDelivery] = useState(false)

    useEffect(() => {
        setDelivery(false)
    }, [newJoke])
    
    const handleDelivery = () => {
        setDelivery(!delivery)
    }

    return (
        <div style={{ width: '85%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
            { joke && joke.type === 'twopart' ? 
                <>
                    <p className='joke-line'>{joke.setup}</p>
                    { delivery ? <p className='delivery' style={{ margin: '13px' }} >{joke.delivery}</p> : <button className='btn' onClick={handleDelivery} >Reveal Punchline</button> }
                    <div className='joke-info'>
                        <p>{joke.category}</p>
                        <p>{joke.type.toUpperCase()}</p>

                    </div>
                </> : <>
                {/* <p>it is not a twoparts joke</p> */}
                { joke ? (
                    <>
                        <p className='joke-line' >{joke.joke}</p>
                        <div className='joke-info'>
                            <p>{joke.category}</p>
                            { joke.type && <p>{joke.type.toUpperCase()}</p> }
                            
                        </div>
                    </>
                ) : (
                    null
                )}
                </>
            }
        </div>
    )
}

export default Joke
