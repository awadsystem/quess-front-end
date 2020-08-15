import React from 'react'
import './videoPlayer.css'

const videoPlayer = props => {

    let { title, image, time } = props

    return (
        <div className="video-player-holder" >
            <div className="video-player-background" style={{ backgroundImage: `url(${image})` }}>
                <div className="video-player-items">
                    <div className="row">
                        <div className="col-md-4" />
                        <div className="col-md-8">
                            <p className="video-player-text">{title}</p>
                        </div>
                    </div>
                    <div className="video-player-loop text-center">
                        <div className="flex-container">
                            <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/video.svg" />
                            <div className="time-line-bar" />
                            <span>00:00/{time}</span>
                            <img className="image-loop" src="https://assetshost.fra1.cdn.digitaloceanspaces.com/volume.svg" />
                            <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/switch-to-full-screen-button.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default videoPlayer