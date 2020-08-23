import React from "react"
import PropTypes from "prop-types"
import Modal from "../components/modal"
import {playPause, adjustVolume, muteVolume} from '../../static/script.js'

const ModalVideo = ({ videoClass, videoUrl, placeHolder, subtitles, signature, roles }) => (
  <Modal modalClass={videoClass} signature={signature}>
    {!videoUrl.includes('youtube') && 
    <>
      <video id="video" poster={placeHolder} width="100%" height="auto">
        <source src={videoUrl} type="video/mp4" />
        <track default kind="captions" srcLang="en" src={subtitles} label="English subtitles" />
      </video>
      <div id="controls" className="controls">
        <button id="playpause" onClick={playPause}>Play/Pause</button>
        <input id="volume" min="0" max="1" step="0.1" type="range" onInput={adjustVolume} />
        <button id="mute" onClick={muteVolume}>Mute</button>
      </div>
    </>
    }
    {videoUrl.includes('youtube') && 
      <iframe width="100%" height="315" title="Youtube video" src={videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    }
    {signature && <h3 style={{marginTop:'1rem', marginBottom:'.3rem'}}>{signature}</h3>}
    {roles && <h3 style={{marginBottom:'.5rem'}}>{roles}</h3>}
  </Modal>
)

ModalVideo.propTypes = {
  videoClass: PropTypes.string,
  videoUrl: PropTypes.string,
  placeHolder: PropTypes.string,
  subtitles: PropTypes.string,
  signature: PropTypes.string,
  roles: PropTypes.string
}

export default ModalVideo
