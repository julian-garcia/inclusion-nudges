import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { showModal } from "../components/modal"
import ModalDownload from "../components/modal-download"

const QuickGuidePage = () => (
  <Layout>
    <SEO title="Free Quick Guide" />
    <div className="accent-1">
      <h2 className="text">Free Quick Guide</h2>
    </div>
    <button onClick={() => showModal('modal-download')} className="modal-form__button guidebook-link">Download</button>
    <ModalDownload />
  </Layout>
)

export default QuickGuidePage