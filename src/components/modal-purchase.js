import React from "react"
import PropTypes from "prop-types"
import Modal from "../components/modal"
import AmazonLinks from "../components/amazon-links"
import GuideFrontImg from "../images/guidebook-front.png"
import LeaderImg from "../images/ag-leaders.png"
import TalentImg from "../images/ag-talent-selection.png"
import AlliesImg from "../images/ag-motivating-allies.png"

const ModalPurchase = ({modalClass}) => (
  <Modal modalClass={modalClass}>
    {modalClass === 'modal-purchase' &&
    <>
      <h3 className="modal-title">Order<br/>THE INCLUSION NUDGES GUIDEBOOK</h3>
      <h3 className="modal-title">100 Inclusion Nudges for Change Makers</h3>
      <div className="row-left-aside">
        <div>
          <img src={GuideFrontImg} alt="" style={{width:'100%'}} />
        </div>
        <div>
          <p><span style={{fontWeight:'bold'}}>WHAT</span> A how-to guide with 100 behavioural designs scripted out step by step making it easy for you to re-design and de-bias cultures, processes, systems, perceptions, and behaviours to be inclusive as the norm everywhere, for everyone. A guide on how to leverage the diverse human potential to co-create inclusive organisations and communities. </p>
          <p><span style={{fontWeight:'bold'}}>WHO</span> For you who are leading change. You work on organisational, community, or societal development and on diversity, equity, inclusion, social impact, human resources, and the UN Global Goals. </p>
        </div>
      </div>
      <p style={{textAlign:'center'}}>Note:<br/>Due to the pandemic, Amazon.com has some shipping disruptions. Order your book from your regional Amazon site. You will find the options below..</p>
      <AmazonLinks productCode="B086PMRGNY" />
    </>
    }
    {modalClass === 'ag-leaders-purchase' &&
    <>
      <h3 className="modal-title">Order<br/>INCLUSION NUDGES FOR LEADERS<br/>Action Guide with 30 examples</h3>
      <div className="row-left-aside">
        <div>
          <img src={LeaderImg} alt="" style={{width:'100%'}} />
        </div>
        <div>
          <p><span style={{fontWeight:'bold'}}>WHAT</span> 30 practical ways to enhance your leadership by leveraging diverse human potential and de-biasing processes, cultures, and behaviours to be inclusive as the norm.</p>
          <p><span style={{fontWeight:'bold'}}>WHO</span> For you who are leaders, formal and informal, managers, project leads, entrepreneurs, and decision makers in organisations of all sectors and in local and global communities of all kinds (online and in person).</p>
        </div>
      </div>
      <p style={{textAlign:'center'}}>Note:<br/>Due to the pandemic, Amazon.com has some shipping disruptions. Order your book from your regional Amazon site. You will find the options below..</p>
      <AmazonLinks productCode="B08GVCMY24" />
    </>
    }
    {modalClass === 'ag-talent-purchase' &&
    <>
      <h3 className="modal-title">Order<br/>INCLUSION NUDGES FOR TALENT SELECTION<br/>Action Guide with 30 examples</h3>
      <div className="row-left-aside">
        <div>
          <img src={TalentImg} alt="" style={{width:'100%'}} />
        </div>
        <div>
          <p><span style={{fontWeight:'bold'}}>WHAT</span> 30 practical ways how you can re-design and de-bias the processes to recruit and promote people, compose great teams, and enhance the diversity of talents of all people. By applying these Inclusion Nudges you make inclusion the norm in all talent selection processes.</p>
          <p><span style={{fontWeight:'bold'}}>WHO</span> For you who are involved in selecting people for jobs and composing diverse teams or in any other way involved in talent selection processes in your project, change initiative, organisation or community.</p>
        </div>
      </div>
      <p style={{textAlign:'center'}}>Note:<br/>Due to the pandemic, Amazon.com has some shipping disruptions. Order your book from your regional Amazon site. You will find the options below..</p>
      <AmazonLinks productCode="B08GV8ZX1F" />
    </>
    }
    {modalClass === 'ag-allies-purchase' &&
    <>
      <h3 className="modal-title">Order<br/>INCLUSION NUDGES FOR MOTIVATING ALLIES<br/>Action Guide with 30 examples</h3>
      <div className="row-left-aside">
        <div>
          <img src={AlliesImg} alt="" style={{width:'100%'}} />
        </div>
        <div>
          <p><span style={{fontWeight:'bold'}}>WHAT</span> 30 practical ways to motivate more people to get engaged in making changes for more diversity, equity, and inclusion by showing them the issues of inequality, discrimination, unconscious bias that they are blind to. Make them feel the need  and they will automatically be allies for change.</p>
          <p><span style={{fontWeight:'bold'}}>WHO</span> For you who are a leader, social activist, human resource professional or diversity, equity, and inclusion (DEI) professional, human rights advocate, politician, or public official. Maybe you are a resident, citizen, neighbour, student, employee, teacher, refugee, prisoner, child, parent, grandparent, or anyone else who cares about making positive change for the greater good of all in your organisation, community, and society -  and you know you need more people on board to make it happen.</p>
        </div>
      </div>
      <p style={{textAlign:'center'}}>Note:<br/>Due to the pandemic, Amazon.com has some shipping disruptions. Order your book from your regional Amazon site. You will find the options below..</p>
      <AmazonLinks productCode="B08GV91VYP" />
    </>
    }
  </Modal>
)

ModalPurchase.propTypes = {
  modalClass: PropTypes.string
}

ModalPurchase.defaultProps = {
  modalClass: 'modal-purchase'
}

export default ModalPurchase
