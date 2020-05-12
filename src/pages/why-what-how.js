import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { showModal } from "../components/modal"
import ModalDownload from "../components/modal-download"
import ModalSignup from "../components/modal-signup"

import CognitiveImg from "../images/guide/cognitive.jpg"
import NudgeImg from "../images/guide/nudge.png"
import GuideImg from "../images/quick-guide-flat.jpg"

const QuickGuidePage = () => (
  <Layout>
    <SEO title="Inclusion Nudges Quick Guide: Why, What, How" description="The Inclusion Nudges Guidebook, 3rd edition, by Lisa Kepinski & Tinna C. Nielsen, is your go to resource with over 100 howto examples that are based on behavioural science" />
    <div className="accent-1">
      <h2 className="text">Inclusion Nudges Quick Guide: Why, What, How</h2>
    </div>
    <div className="blog-post">
      <img src={GuideImg} className="front-page" alt="" />
      <p>This Quick Guide navigates you as you apply Inclusion Nudges to de-bias and change your organisations, communities, and society to be inclusive as the default and the norm. The <strong>Inclusion Nudges Guidebook, 3rd edition</strong>, by Lisa Kepinski & Tinna C. Nielsen, is your <strong>go to resource</strong> with over 100 howto examples that are based on behavioural science. These have been designed and applied by the authors and others in their work as change makers to lessen the influence of bias, increase inclusivity, ensure equality, and leverage the diversity of all of us.</p>
      <p>If you have read the 2nd edition of the guidebook (2016), you’ll be pleased to know there are 57 new examples of Inclusion Nudges, and all the examples from the previous version have been updated with new design variations and behavioural insights. A new feature is more designs for virtual working.</p>
      <h3>Why designing for inclusion is a must</h3>
      <p>The global world is changing at a pace and scale never experienced before. As cognitive, cultural, and demographic diversity continues to increase around us, people, communities, and organisations must be able to interact and make decisions in an increasingly complex environment. This puts a toll on our ability to collaborate across identity and knowledge diversity. </p>
      <img src={CognitiveImg} alt="Cognitive Systems" className="guide-image" />
      <p>To remain agile and innovative, we need to make sure people can leverage the diversity of experiences, perspectives, and knowledge that are available in organisations, teams, schools, cities, communities, and society. Only then can we put into play our full potential and resources of people. This is about much more than leveraging the full potential of people to perform and innovate well. This is about the well-being and health of the billions of people living in our communities and working in our organisations. New solutions are needed to create a socially, culturally, environmentally, and economically sustainable world.</p>
      <h3>Hidden barriers to achieving inclusion</h3>
      <p>Yet, we have gaps between intentions and actions for achieving greater inclusion. Worldwide, decades of research and case studies have proven the importance of inclusion and diversity to people, business, cities, communities, and society. But the underlying issue for not achieving this is partly due to the biases and inequality that are inherent in the systems, processes, practices, and policies in our organisations, institutions, and labour markets. The status quo is maintained because the human brain has not evolved to deal with such increased complexity, diversity, and constant changes that we experience in today’s world. Though we like to believe we are rational thinkers, who would make the needed changes according to the evidence showing us all the benefits we can achieve from inclusion and diversity, the reality is that we are not rational.</p>
      <p>Researchers estimate that as much as 90-99 % of our thought processes, choices, and behaviours occur automatically in our subconscious brain (Daniel Kahneman calls this system 1). While the subconscious brain evolved to ensure our survival, it also holds us back from being objective and inclusive. The brain receives more than 11 million bits of information at any given moment through all our senses. To cope with this complexity, mental shortcuts (bias) evolved. These shortcuts (biases) enable our thinking and functioning to occur without using a lot of energy on interpretations and complex evaluations. In most cases, this works but in many other cases, errors in judgment and choices are made, which are not registered in the conscious, reflective mind (called system 2). Unconscious biased thinking is universal. We all do this. And this brings the challenge that cognitive bias can make people act opposite to their own values, beliefs, and intentions of supporting equality, and even contrary to their own self-perception of being a fair person.</p>
      <h3>Design for inclusion as the new default and norm</h3>
      <p>Knowing in the rational, conscious mind (Daniel Kahneman calls this system 2) about bias and having good intentions does not reduce the impact of bias in the unconscious mind (system1), nor does it make people act accordingly with this knowledge. This means that trying as change makers to convince people to be more inclusive and make them aware of their biases is not going to work. Unfortunately, this is a common approach across the world. Instead, designing for inclusion is a must. We cannot wait for people to think it’s a good idea. We need to enable and empower as many people as possible to do inclusion automatically. We need to design systems, processes, cultures, technologies, policies, environments, and cities based on behavioural insights to foster inclusive behaviour, interactions, and decision making. This is the purpose of the <strong>Inclusion Nudges</strong> change approach that the internationally recognised thought leaders and authors of the guidebook, Tinna C. Nielsen and Lisa Kepinski, coined and developed in 2013 based on nudge theory by Thaler and Sunstein and many others in the behavioural sciences field, and based on their decades of experience as change makers for inclusion, diversity, and equity.</p>
      <h3>What’s an Inclusion Nudge</h3>
      <p>An Inclusion Nudge is a designed intervention based on insights from behavioural and social sciences that gently prods the unconscious mind to change behaviour in a predictable direction of inclusiveness by targeting the behavioural drivers, judgment and choice processes, and perceptions in the unconscious mind.</p>
      <p style={{marginBottom:'4px'}}>Inclusion Nudges</p>
      <ul className="arrow-list">
        <li><FontAwesomeIcon icon={faArrowRight} /> motivate and engage people</li>
        <li><FontAwesomeIcon icon={faArrowRight} /> enable people to do inclusion automatically</li>
        <li><FontAwesomeIcon icon={faArrowRight} /> re-frame perceptions, stereotypes, and biases</li>
      </ul>
      <p>Inclusion Nudges help the brain change behaviour and close the intentions- action gap by addressing the implicit norms in our cultures and the systems. Nudging for inclusion is about making it easy to do inclusion as the norm, without the need of convincing with rational arguments, threats, or punishments or requiring effortful, conscious thinking. In Lisa’s and Tinna’s work with many communities, organisations, teams, leaders, and individuals worldwide, we have seen first-hand how this approach of applying behavioural science insights promotes more inclusiveness. As we experimented and developed the Inclusion Nudges concept and change approach, we identified three types of designs that have worked for us. All three types of Inclusion Nudges address the challenges of creating sustainable changes for inclusivity. All three are relevant to use, but not necessarily for every challenge. Here is an overview.</p>
      <p><strong>Each example in the guidebook is scripted out in details, so you can customise the designs for your context and challenges.</strong></p>
      <ul className="image-list">
        <li>
          <h4>Challenge</h4>
          <p>Context on why the intervention is needed and the challenges it’s addressing</p>
        </li>
        <li>
          <h4>The Inclusion Nudge</h4>
          <p>Brief description of the designed intervention and the purpose</p>
        </li>
        <li>
          <h4>How To</h4>
          <p>What was done in the design process, facilitation, and how you can do it</p>
        </li>
        <li>
          <h4>Virtual design version</h4>
          <p>How to do it in virtual settings and meetings</p>
        </li>
        <li>
          <h4>Impact</h4>
          <p>What were the outcome and impact</p>
        </li>
        <li>
          <h4>Authors’ Comments & Behavioural Insights</h4>
          <p>Insights on how to expand the intervention, other contexts where it could be applied, and research insights from behavioural and social sciences on why this works.</p>
        </li>
        <li>
          <h4>Publicly Available Resources</h4>
          <p>Free resources and tools you can find online</p>
        </li>
        <li>
          <h4>Acknowledgement</h4>
          <p>Thank you to the people who have inspired with examples</p>
        </li>
      </ul>
      <h3>Feel the Need Inclusion Nudges</h3>
      <p>Use these to motivate people to change behaviour and engage groups of people in making profound change for inclusiveness by making the brain’s unconscious system feel the need for change. These are designed to show the implications of bias rather than tell people that they are biased. These designs make the invisible patterns visible and make people feel the need to change status quo.</p>
      <div className="bordered-section">
        <img src={NudgeImg} alt="" />
        <h3>Seeing those not seen <br/>and sponsoring them</h3>
        <p>Show with visuals what leaders don’t see. Create two visual views with small pictures of the leadership pipeline (top talents), one visual with all the top talents and one with only the women.</p>
        <p>Show the first visual.</p>
        <p>Ask the executives to call out the names of the people they know. Then, show the other visual with the pictures of only women.</p>
        <p>Ask them to call out the names of the people they know.</p>
        <p>Ask them if they notice a pattern.</p>
        <p style={{textAlign:'left'}}><strong>Purpose:</strong> Show that many people are not seen for their performance, and that there was not gender equality in the senior executives’ formal & informal networks. Reduce the leaders resistance on the need for greater visibility of women talents through a sponsorship program. Increase their buy-in for the sponsorship program by realising the limited gender equality in their networks. By calling out the names of a lot of men, but only a few names for the second visual of the women, they felt the need for a change.</p>
      </div>
      <h3>Process Design Inclusion Nudges</h3>
      <p>Use these to make it easy for people to do inclusiveness by designing processes, systems, and the environment. Ability and simplicity are key. This is about empowering and enabling as many people as possible to do inclusiveness automatically without reflection. These designs mitigate bias, and help people make better judgments and decisions and be more inclusive in ways of working and collaborating as the default.</p>
      <div className="bordered-section">
        <img src={NudgeImg} alt="" />
        <h3>Share with a peer <br/>to access diversity in groups</h3>
        <p>Each member in the group shares their perspective with one other person (peer) in the group.</p>
        <p>They, then, share each other’s perspectives to the larger group in plenary.</p>
        <p style={{textAlign:'left'}}><strong>Purpose:</strong> Ensure all people feel safe to share their perspective (this intervention does require a level of trust in the group), ensure that individuals do not conform to the view of majority of group members, and ensure that communication misunderstandings are captured and corrected.</p>
      </div>
      <h3>Framing Perceptions Inclusion Nudges</h3>
      <p>Use these to help our unconscious mind perceive issues related to inclusion, diversity, gender party, equality, and human rights as meaningful. These aim at changing the narratives, discourses, and stereotypes that influence our behaviour towards others. By flipping perceptions, priming specific associations, appealing to identity, altering the frame, or changing the anchor of the thought process, we can frame perceptions to increase inclusion as the norm.</p>
      <div className="bordered-section">
        <img src={NudgeImg} alt="" />
        <h3>Show the hidden people <br/>by reversing the numbers</h3>
        <p>Re-frame the perception by reversing the numbers to show the hidden facts.</p>
        <p>Ask the leaders: “How many people are working here?” <br/>Ask: “How many is 35 % out of the total number of employees?”</p>
        <p>Then say: <br/> “If 65 % feel empowered and growing, then 22,000 (35 %) of your employees do NOT feel empowered and do not have opportunities to grow. That is a lot of talent to miss out on!”</p>
        <p style={{textAlign:'left'}}><strong>Purpose:</strong> Reverse the numbers to change perceptions to see the full picture and see the hidden people behind the numbers and also the consequences.</p>
      </div>
      <p>Learn more about how you can apply Inclusion Nudges in your change efforts to increase inclusivity, leverage diversity, and ensure more equitable decision making and interactions by reading the 3rd edition of the Inclusion Nudges Guidebook. In this, you will be inspired with over 100 how-to examples that are scripted out in details, so you can easily apply these to your context. You can reduce the influence of bias, and change your organisation, community, and society to be inclusive as the default and norm.</p>
      <div className="guide-links">
        <button onClick={() => showModal('modal-download')} className="modal-form__button">Download</button>
        <button onClick={() => window.print()} className="modal-form__button">Print</button>
        <button onClick={() => showModal('modal-signup')} className="modal-form__button">Sign up to stay updated</button>
        <Link to="/articles-podcasts-videos" className="modal-form__button">More <br className="tablet-up" />Resources</Link>
      </div>
      <h2 style={{textAlign:'center', margin:'2rem 0 1rem'}}>Share with other people</h2>
      <div className="guide-links share">
        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Finclusion-nudges.org%2Fwhy-what-how&text=Check%20out%20%23InclusionNudges%20Guidebook.%20You%20get%20100%20examples%20of%20behavioural%20%23designs%20to%20%23debias%20%26%20make%20%23inclusion%20%26%20%23diversity%20the%20norm%20in%20your%20organisation%2C%20community%20and%20society.%20%20A%20%23HowTo%20guide%20for%20%23ChangeMakers%21" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faTwitter} className="icon-heading large" />
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Finclusion-nudges.org%2Fwhy-what-how%2F" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon-heading large" />
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Finclusion-nudges.org%2Fwhy-what-how%2F" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faFacebookF} className="icon-heading large" />
        </a>
        <a href="mailto:?subject=Inclusion%20Nudges&body=Hi!%20I%20just%20visited%20this%20website%20and%20thought%20you%20might%20find%20the%20Inclusion%20Nudges%20global%20initiative%20and%20the%20Inclusion%20Nudges%20Guidebook%20interesting.%20%0Awww.inclusion-nudges.org%2Fwhy-what-how" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faEnvelope} className="icon-heading large" />
        </a>
      </div>
    </div>
    <ModalDownload />
    <ModalSignup />
  </Layout>
)

export default QuickGuidePage