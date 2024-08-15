import React from "react"
import memesData from "../memesData"

function Meme(){
    //Get a random meme
    const [memeImage, setMemeImage] = React.useState("")

    function randomMeme(){
        const randomMeme = memesData.data.memes
        const randomNum = Math.floor(Math.random() * 100)
        setMemeImage(randomMeme[randomNum].url)
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
            <div className="meme--image">
                <img src={memeImage} alt="meme image." />
            </div>
            
        </main>
    )
}

export default Meme