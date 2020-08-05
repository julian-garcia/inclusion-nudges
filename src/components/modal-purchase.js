import React from "react"
import PropTypes from "prop-types"
import Modal from "../components/modal"
import AmazonLinks from "../components/amazon-links"

const ModalPurchase = ({modalClass}) => (
  <Modal modalClass={modalClass}>
    {modalClass === 'modal-purchase' &&
    <div style={{textAlign:'center'}}>
      <h3 className="modal-title">Purchase your<br/>Inclusion Nudges Guidebook</h3>
      <h3 className="modal-title">For Change Makers - 100 Inclusion Nudges</h3>
      <p><span style={{fontWeight:'bold'}}>WHAT</span> A how-to guide with 100 behavioural designs scripted out step by step making it easy for you to re-design and de-bias cultures, processes, systems, perceptions, and behaviours to be inclusive as the norm everywhere, for everyone. A guide on how to leverage the diverse human potential to co-create inclusive organisations and communities. </p>
      <p><span style={{fontWeight:'bold'}}>WHO</span> For you who are leading change. You work on organisational, community, or societal development and on diversity, equity, inclusion, social impact, human resources, and the UN Global Goals. </p>
      <br/>
    </div>
    }
    {modalClass === 'ag-leaders-purchase' &&
    <div style={{textAlign:'center'}}>
      <h3 className="modal-title">Purchase your<br/>Action Guide For Leaders<br/>30 Inclusion Nudges</h3>
      <p><span style={{fontWeight:'bold'}}>WHAT</span> 30 practical ways to enhance your leadership by leveraging diverse human potential and de-biasing processes, cultures, and behaviours to be inclusive as the norm.</p>
      <p><span style={{fontWeight:'bold'}}>WHO</span> For you who are leaders, formal and informal, managers, project leads, entrepreneurs, and decision makers in organisations of all sectors and in local and global communities of all kinds (online and in person).</p>
      <br/>
    </div>
    }
    {modalClass === 'ag-talent-purchase' &&
    <div style={{textAlign:'center'}}>
      <h3 className="modal-title">Purchase your<br/>Action Guide For Talent Selection<br/>30 Inclusion Nudges</h3>
      <p><span style={{fontWeight:'bold'}}>WHAT</span> 30 practical ways how you can re-design and de-bias the processes to recruit and promote people, compose great teams, and enhance the diversity of talents of all people. By applying these Inclusion Nudges you make inclusion the norm in all talent selection processes.</p>
      <p><span style={{fontWeight:'bold'}}>WHO</span> For you who are involved in selecting people for jobs and composing diverse teams or in any other way involved in talent selection processes in your project, change initiative, organisation or community.</p>
      <br/>
    </div>
    }
    {modalClass === 'ag-allies-purchase' &&
    <div style={{textAlign:'center'}}>
      <h3 className="modal-title">Purchase your<br/>Action Guide For Motivating Allies<br/>30 Inclusion Nudges</h3>
      <p><span style={{fontWeight:'bold'}}>WHAT</span> 30 practical ways to motivate more people to get engaged in making changes for more diversity, equity, and inclusion by showing them the issues of inequality, discrimination, unconscious bias that they are blind to. Make them feel the need  and they will automatically be allies for change.</p>
      <p><span style={{fontWeight:'bold'}}>WHO</span> For you who are a leader, social activist, human resource professional or diversity, equity, and inclusion (DEI) professional, human rights advocate, politician, or public official. Maybe you are a resident, citizen, neighbour, student, employee, teacher, refugee, prisoner, child, parent, grandparent, or anyone else who cares about making positive change for the greater good of all in your organisation, community, and society -  and you know you need more people on board to make it happen.</p>
      <br/>
    </div>
    }
    <div style={{textAlign:'center'}}>
      <p>Note: Due to the pandemic, Amazon.com only ships within the US – Order your book from one of the other Amazon sites. You find the options for your region/country below.</p>
      {modalClass === 'modal-purchase' &&
      <p>If you experience that none of the Amazon sites can ship the guidebook (paperback) to your country, we recommend that you order the shorter Action Guides as ebooks (available soon).</p>}
      {modalClass !== 'modal-purchase' &&
      <p>If you experience that none of the Amazon sites can ship the Inclusion Nudges Guidebook (paperback only) or this Action Guide as a paperback to your country, then we recommend that you order this Action Guide as an ebook (available soon).</p>}
    </div>
    <AmazonLinks modalClass={modalClass} />
  </Modal>
)

ModalPurchase.propTypes = {
  modalClass: PropTypes.string
}

ModalPurchase.defaultProps = {
  modalClass: 'modal-purchase'
}

export default ModalPurchase
