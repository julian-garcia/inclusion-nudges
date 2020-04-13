import React from "react"
import PropTypes from "prop-types"
import Modal from "../components/modal"
import SignatureImg from "../images/signature.png"

const ModalVideo = ({ videoClass, videoUrl, placeHolder, subtitles, signature }) => (
  <Modal modalClass={videoClass} signature={signature}>
    {!videoUrl.includes('youtube') && 
      <video poster={placeHolder} controls="controls" width="100%" height="auto">
        <source src={videoUrl} type="video/mp4" />
        <track default kind="captions" srcLang="en" src={subtitles} label="English subtitles" />
      </video>
    }
    {videoUrl.includes('youtube') && 
      <iframe width="100%" height="315" title="Youtube video" src={videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    }
    {signature &&
      <img src={signature} alt="Signature" className="modal-signature-single" />
    }
    {!signature &&
      <img src={SignatureImg} alt="Signature" className="modal-signature" />
    }
  </Modal>
)

ModalVideo.propTypes = {
  videoClass: PropTypes.string,
  videoUrl: PropTypes.string,
  placeHolder: PropTypes.string,
  subtitles: PropTypes.string,
  signature: PropTypes.string
}

export default ModalVideo
