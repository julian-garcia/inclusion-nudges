import React from "react"
import PropTypes from "prop-types"
import Modal from "../components/modal"

const ModalVideo = ({ videoClass, videoUrl, placeHolder, subtitles, signature, roles }) => (
  <Modal modalClass={videoClass} signature={signature}>
    {!videoUrl.includes('youtube') && 
      <video poster={placeHolder} controls="controls" width="100%" height="auto">
        <source src={videoUrl} type="video/mp4" />
        <track kind="captions" srcLang="en" src={subtitles} label="English subtitles" />
      </video>
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
