import React from "react";
import memeData from './memedata'

export default function Meme(){

    const [memes, setMemes] = React.useState({
        topText: '',
        bottomText: '',
        ImageUrl: "https://i.imgflip.com/1g8my4.jpg"
    })

    const [allmeme, setAllmeme] = React.useState([])

    React.useEffect(() => {
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllmeme(data.data.memes)
        }
        getMemes()
    }, [])
    console.log('sushil')
    console.log(allmeme)
    //const [getMemeArray, setMemeArray] = useState(memeData)

    function getMemeImg(){
        const getRandomNumebr = Math.floor(Math.random() * allmeme.length)
        const url = allmeme[getRandomNumebr].url
        setMemes(prevMemes => ({
            ...prevMemes,
            ImageUrl : url
        }))

    }

    function handleChange(event){
        const {name, value} = event.target
        setMemes(prevAllmeme => ({
            ...prevAllmeme,
            [name] : value
        }))
    }

    return(
        <div className="meme--main">
            <div className="meme--form">
                <input
                    type='text'
                    className="meme--input"
                    placeholder="Top Text"
                    name="topText"
                    onChange={handleChange}
                    value={memes.topText}
                />
                <input 
                    type='text' 
                    className="meme--input"
                    placeholder="bottom Text"
                    name="bottomText"
                    onChange={handleChange}
                    value={memes.bottomText}
                />
                <button onClick={getMemeImg} type='button' className="meme--btn">GENERATE A NEW MEME</button>
            </div>
            <div className="meme">
            <img src={memes.ImageUrl} className="meme--Img" />
                <h2 className="meme--text top">{memes.topText}</h2>
                <h2 className="meme--text bottom">{memes.bottomText}</h2>
            </div>            
        </div>
    )
}