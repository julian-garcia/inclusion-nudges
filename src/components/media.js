import React from "react"
import { Link } from "gatsby"
import { showModal } from "../components/modal"

import TinnaImg from "../images/tinna-tedx.jpg"
import LisaImg from "../images/lisa-tedx.png"
import PublicationsImg from "../images/publications.png"
import TedXImg from "../images/ted-x.png"
import InitiativeImg from "../images/initiative.png"

const Media = () => (
  <>
    <h2 className="page-heading">Learn more</h2>
    <div className="row-auto bottom">
      <div className="grid-item-image" style={{backgroundImage:`url(${InitiativeImg})`}} onClick={() => showModal('modal-video-1')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-video-1')}>
        {/* <h2 className="grid-item-title">Why we started the Inclusion Nudges Initiative?</h2>  */}
        <h2>The Founders</h2>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${TinnaImg})`}} onClick={() => showModal('modal-video-2')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-video-2')}>
        <img src={TedXImg} alt="Tedx" className="image-tedx" />
        {/* <h2 className="grid-item-title">Nudging behaviour for a more inclusive world</h2> */}
        <h2>TEDx Talk by Tinna C. Nielsen</h2>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${LisaImg})`}} onClick={() => showModal('modal-video-3')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-video-3')}>
        <img src={TedXImg} alt="Tedx" className="image-tedx" />
        {/* <h2 className="grid-item-title">Mitigating bias in talent decisions</h2>  */}
        <h2>TEDx Talk by Lisa Kepinski</h2> 
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${PublicationsImg})`}} >
        <Link to="/articles-podcasts-videos" className="unstyled-button"></Link>
        {/* <h2 className="grid-item-title">Resources</h2> */}
        <h2>Writings, Podcasts, Videos, Blog</h2>
      </div>
    </div>
  </>
)

export default Media
