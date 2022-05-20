import "./EmojiContainer.css";
import React, { useEffect, useState } from "react";


const EmojiContainer = (props) => {
    const [emojiNumber, setEmojiNumber] = useState([0]);

    const setEmoji = (e) => {
        setEmojiNumber(e)
    }

    const copy = (e) => {
        navigator.clipboard.writeText(e)
    }



    useEffect(() => {
        setEmojiNumber(0)
    }, [props.data])

    return (

        <div className="container">
            <div className="half">
                {props.data.map((data, index) => (
                    <div onClick={() => setEmoji(index)} className="emoji" dangerouslySetInnerHTML={{ __html: data.htmlCode[0] }} key={data.name}>
                    </div>
                ))}
            </div>
            <div className="half">
                {props.data[emojiNumber] &&
                    <div className="card">
                        <h2>{props.data[emojiNumber].name}</h2>
                        <div className="alignLeft">
                            <div className="describe">Category:
                                <span className="description">{" " + props.data[emojiNumber].category}</span>
                            </div>
                            <div className="describe">htmlCode:
                                <span className="description">{" " + props.data[emojiNumber].htmlCode}</span>
                            </div>
                            <div className="describe">unicode:
                                <span className="description">{" " + props.data[emojiNumber].unicode}</span>
                            </div>
                        </div>
                        <div id="bigEmoji" dangerouslySetInnerHTML={{ __html: props.data[emojiNumber].htmlCode[0] }}></div>
                        <button id="copyButton" onClick={() => copy(document.getElementById("bigEmoji").innerHTML)}>Copy</button>
                    </div>}

            </div>
        </div>
    );
};

export default EmojiContainer;