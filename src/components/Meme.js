import React from "react"
import memesData from "../memesData"

function Meme(){
    //Get a random meme using .useState
    //const [memeImage, setMemeImage] = React.useState("")

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    setAllMemeImages(memesData)

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
        })
    
    function randomMeme(){
        const memesArray = allMemeImages.data.memes
        const randomNum = Math.floor(Math.random() * 100)
        const url = memesArray[randomNum].url
        setMeme(prevMeme => ({...prevMeme, randomImage: url}))
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
                <img src={meme.randomImage} alt="meme image." />
            </div>
            
        </main>
    )
}

export default Meme