import React from 'react'

const JokeForm = ({ category, type, flags, custom, categoryHandler, typeHandler, customHandler, flagsHandler, handleJoke }) => {
    
    return (
        <div>
            <h2>Category is { category }</h2>
            <label style={{ marginRight: '10px' }}>Choose category</label>
            <select style={{ padding: '4px', borderRadius: '3px', fontWeight: 'bold' }} value={category} onChange={categoryHandler} >
                <option value="Any" >Any</option>
                <option value="Custom" >Custom</option>
            </select>

            {
                category === "Custom" && (
                    <div>
                        <p style={{ fontWeight: 'bold' }} >Choose types of jokes</p>
                        <div className='flags'>
                            <input name='Programming' type='checkbox' checked={custom.Programming} onChange={customHandler} /> <label>Programming</label>
                            <input name='Dark' type='checkbox' checked={custom.Dark} onChange={customHandler} /> <label>Dark</label>
                            <input name='Pun' type='checkbox' checked={custom.Pun} onChange={customHandler} /> <label>Pun</label>
                            <input name='Spooky' type='checkbox' checked={custom.Spooky} onChange={customHandler} /> <label>Spooky</label>
                            <input name='Misc' type='checkbox' checked={custom.Misc} onChange={customHandler} /> <label>Misc</label>

                        </div>
                    </div>
                )
            }
            <h2>Type is { type }</h2>
            <label style={{ marginRight: '10px' }}>Choose type</label>
            <select style={{ padding: '4px', borderRadius: '3px', fontWeight: 'bold' }} value={type} onChange={typeHandler} >
                <option value="Single" >Single</option>
                <option value="TwoPart" >Two Parts</option>
            </select>           
            <p style={{ fontWeight: 'bold' }} >Tick to blacklist the following jokes</p>
            <div className='flags' >
                <input type='checkbox' name='nsfw' checked={flags.nsfw} onChange={flagsHandler} /> <label>nsfw</label>
                <input type='checkbox' name='religious' checked={flags.religious} onChange={flagsHandler} /> <label>religious</label>
                <input type='checkbox' name='political' checked={flags.political} onChange={flagsHandler} /> <label>political</label>
                <input type='checkbox' name='racist' checked={flags.racist} onChange={flagsHandler} /> <label>racist</label>
                <input type='checkbox' name='sexist' checked={flags.sexist} onChange={flagsHandler} /> <label>sexist</label>
                <input type='checkbox' name='explicit' checked={flags.explicit} onChange={flagsHandler} /> <label>explicit</label>
            </div>
            <button style={{ margin: '30px' }} className="joke-btn" onClick={handleJoke} type="button">
                Get Joke
            </button>
        </div>
    )
}

export default JokeForm

