import React from "react"
import Modal from "../components/modal"

const ModalVideo = () => (
  <Modal modalClass="modal-video">
    <video poster="http://inclusion-nudges.org/wp-content/uploads/2017/10/placeholder.png" controls="controls" width="100%" height="auto">
      <source src="http://inclusion-nudges.org/wp-content/uploads/2017/10/founders.mp4 " type="video/mp4" />
    </video>
  </Modal>
)

export default ModalVideo
