import React from "react"
import memesData from "../memesData"

function Meme(){
    //Get a random meme
    function randomMeme(){
        const memesArray = memesData.data.memes
        const randNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randNum].url
        console.log(url)
    }

    return(
        <main>
            <div className="form">
                <div className="form--label">
                    <label className="form--label--text">Top text</label>
                    <input 
                        id="top-text"
                        className="form--input"
                        type="text"
                        placeholder="Top text">
                    </input>
                </div>
                <div className="form--label">
                    <label className="form--label--text">Bottom text</label>
                    <input
                        id="bottom-text" 
                        className="form--input"
                        type="text"
                        placeholder="Bottom text">
                    </input>
                </div>

                <button onClick={randomMeme} className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>  
        </main>
    )
}

export default Meme