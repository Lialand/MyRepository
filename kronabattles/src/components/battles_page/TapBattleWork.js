import React from 'react'

export default function TapBattleWork(props) {
    const numbers = props.images;
    const images = numbers.map((number) => 
        <div className="content_block" key={number.toString()}>
            <div className="image_container">
                <img src={"./images/"+number+".jpg"} />
            </div>
            <footer>   
                <div className="flexrow">
                    <img src={props.useravatar} className="thumbnail" />
                    <div className="username">
                        <p>{props.username}</p>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat_redacts">
                        <img src="vectors/redacts.svg" />
                        <p>{props.redacts}</p>
                    </div>
                    <div className="stat_likes">
                        <img src="vectors/likes.svg" />
                        <p>{props.likes}</p>
                    </div>
                    <div className="stat_score">
                        <img src="vectors/score.svg" />
                        <p>{props.score}</p>
                    </div>
                </div>
            </footer>
        </div>)
    return (
        <React.Fragment>
            {images}
        </React.Fragment>
    )
}