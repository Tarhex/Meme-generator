import { useState } from "react";
import FormField from "./FormField";
import MemesData from './MemesData'

const Content = function Content()
{
    
    const  [meme, setMeme] = useState({
        "randomImage" : "",
        "topText" : "",
        "bottomText" : ""
    });

    const  [oldMeme, setOldMeme] = useState(MemesData);

    // const memeData = MemesData.data.memes.map( meme => {
    //     return meme
    // })

    function randMeme() {
        const {url, name} = oldMeme.data.memes[Math.floor(Math.random() * oldMeme.data.memes.length)]
        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage : url,
                topText : name
            })
        ) ;
    }

    return (
       <section>
            <div className="form">
                <FormField 
                    topText = {meme.topText}
                    bottomText = {meme.bottomText}
                />
                <button onClick={randMeme} className="btn">Get a new meme image  🖼</button>
            </div>

            <div className="meme">
                <span className="meme-txt txt1">{meme.topText}</span>
                <span className="meme-txt txt2">AND TAKE MY MONEY</span>
                <img src={meme.randomImage} alt="" className="meme-img"/>
            </div>
       </section>
    )

}

export default Content