import React from "react"
import PropTypes from "prop-types"
import Modal from "../components/modal"

const ModalVideo = ({ videoClass, videoUrl, placeHolder, subtitles }) => (
  <Modal modalClass={videoClass}>
    {!videoUrl.includes('youtube') && 
      <video poster={placeHolder} controls="controls" width="100%" height="auto">
        <source src={videoUrl} type="video/mp4" />
        <track default kind="subtitles" srcLang="en" src={subtitles} label="English subtitles" />
      </video>
    }
    {videoUrl.includes('youtube') && 
      <iframe width="100%" height="315" title="Youtube video" src={videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    }
  </Modal>
)

Modal.propTypes = {
  videoClass: PropTypes.string,
  videoUrl: PropTypes.string,
  placeHolder: PropTypes.string,
  subtitles: PropTypes.string
}

export default ModalVideo
