import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { showModal } from "../components/modal"
import TinnaImg from "../images/tinna.png"
import LisaImg from "../images/lisa.png"
import FoundersImg from "../images/founder-video-poster.png"
import FoundersVideo from "../videos/founders.mp4"
import FoundersVTT from "file-loader!../videos/founders.vtt"

const FoundersPage = () => (
  <Layout>
    <SEO title="The Founders" />
    <div className="accent-2">
      <h2 className="text">The Inclusion Nudges Founders’ Story</h2>
      <h3 className="text">How two personal journeys became a global movement</h3>
    </div>
    <div className="blog-post">
      <video poster={FoundersImg} controls="controls" width="100%" height="auto" className="founders-video">
        <source src={FoundersVideo} type="video/mp4" />
        <track default kind="captions" srcLang="en" src={FoundersVTT} label="English subtitles" />
      </video>
      <p>The Inclusion Nudges change approach was developed by Tinna C. Nielsen and Lisa Kepinski, in 2013 when we were both working as leaders with global responsibility for inclusion and diversity in multinationals—Lisa in France and Tinna in Denmark. A mutual friend who was in the U.S. introduced us, saying “you both apply behavioural insights and experiment in ways that I have not seen others do in the work of diversity and inclusion, and I think you should know each other.” </p>
      <p>In March 2013, Lisa & Tinna followed up on this email introduction and scheduled a virtual call. We shared our experiences with leading inclusion and diversity—our successes and challenges. And it was especially sharing the struggles of being change agents and getting thousands of people to change behaviour fast and effectively, that led to our collaboration. Both Tinna and Lisa each had different stories but we also had similar approaches of how to get people engaged in creating sustainable change in the processes they used, in their actions and perceptions, as well as the culture. We also wanted to do this in an easy and playful way so we (and other change makers) weren’t so exhausted with a feeling of constant, energy-depleting efforts, and the burden of having to ‘fix it’ (‘it’ = discrimination, harassment, inequality, diversity, inclusion). </p>
      <p>We both realised that when we had the greatest successes in our work, it was from designs we created based on behavioural and social sciences insights. Tinna has a background in anthropology, sports, and human rights.  Lisa has a background in social psychology, socio-linguistics, and organisational development. Through applying our knowledge and decades of experience in leading inclusion, equity, and diversity initiatives, we were, in the early 2000’s, also becoming pragmatic behavioural designers with impactful results. There was a pattern emerging in our work on what triggered the desired results at the individual, group, and organisational levels. We wanted, and needed, science-based practical solutions that worked! </p>
      <p>And this is what we shared in our first call. Not only did our approaches align, we also clicked with each other sharing a vision for a world with more collaboration across as many people as possible making inclusion the norm everywhere and for everyone. From other initiatives that we were part of, we also knew the power of networks as a community where all could share their experiences, openly discuss about the approaches that worked and didn’t work, and encourage each other. From our own experiences and what we’d heard from many inclusion leaders across our global networks, we saw so many stuck patterns repeated time and time again. A new approach was clearly needed! </p>
      <p>In spring 2013, Tinna and Lisa reached out to many thought leaders seeking if anyone was applying behavioural economics to inclusion and diversity. No one had done it in a unified, conceptual approach, and not in a way that would enable and empower others to do this as well. Several behavioural economists, social scientists, academics, and inclusion, equity, and diversity leaders encouraged us to do this. So, we did. </p>
      <p>This became a process of merging our change approaches, developing the concept, and coining the term ‘Inclusion Nudges’. We started sharing with many in our networks about the approach and giving examples of Inclusion Nudges that we used in our work. The interest was high and people kept asking for more examples. From this, we founded the Inclusion Nudges global initiative based on the concept of sharing and reciprocity. By sharing what works, not only from the us as the founders but also from the thousands of members in the Inclusion Nudges community, we can empower many people worldwide to make inclusion the norm. Today, Inclusion Nudges is internationally recognised as game changing and as a means to achieve inclusive outcomes effectively. It is a global community and a global movement of fundamentally changing how we achieve inclusion faster and make it the default and norm – everywhere, for everyone. </p>
    </div>
    <div className="center-content" style={{marginTop: '0'}}>
      <div className="row-auto founders" style={{gap:'2rem'}}>
        <div>
          <img src={TinnaImg} alt="Tinna" style={{width:'250px', marginLeft:'-40px'}} />
          <h2>Tinna C. Nielsen</h2>
          <h3>Co-Founder, Inclusion Nudges </h3> 
          <h3>Co-Author the Inclusion Nudges Guidebook & Inclusion Nudges Action Guide Series </h3>
          <p>contact@inclusion-nudges.org</p>
          <h3>Founder, Move the Elephant for Inclusiveness </h3>
          <p>tinna@movetheelephant.org</p>
          <p>Tinna is an anthropologist, social entrepreneur, and behavioural designer passionately pioneering innovative approaches to accelerate inclusiveness, diversity, equality, and gender parity as a means to achieve innovation, development, and the Global Goals (SDGs) For the past 19 years she has specialized in applying insights from behavioural and social sciences to design impactful solutions, and change behaviours, cultures, and systems to be inclusive by default and as the norm. Tinna’s unique strength and approach is to enable and empower people of all walks of life to make changes and social innovation in their sphere of influence. </p>
          <p>In her work, Tinna applies a frame of reference shaped by her background of growing up in a working class family in the countryside in Denmark; having an older brother with severe dyslexia; working in hospitals, working as a caretaker for adults with disability, working in a kindergarden;  studying French in Paris; hitch-hiking across Europe; backpacking in India; playing basketball on the Danish National Team; playing college basketball in San Francisco, bartending in New York, studying psychology and anthropology at university, working at the Danish Institute for Human Rights, and leading the global work on Inclusion, Diversity & Collaboration in a multinational cooperative, Arla Foods;  being a social entrepreneur and the founder of the change-organisation Move the Elephant for Inclusiveness, as well as co-founding the Inclusion Nudges global initiative and community and co-authoring The Inclusion Nudges Guidebook together with Lisa Kepinski; co-authored the book Motivated Employment, which is about redesigning the social welfare benefit system based on a behavioural economics approach and Inclusion Nudges approach. </p>
          <p> Tinna is partnering with private, public, and NGO organisations, practitioners in all sectors, leaders at all levels, politicians, architects and city developers, as well as social entrepreneurs worldwide to redesign communities, organisations, and societies for more sustainable and just development through inclusiveness. She has extensive experience in leadership development at all levels and in all functions. </p>
          <p> The World Economic Forum selected Tinna as a Young Global Leader 2015 to take active part in creating solutions to improve the state of the world. She served as co-chair of the Global Future Council on Behavioural Science at the World Economic Forum 2016-18, and she is in their Expert Network, as well as writing for their blog Agenda.  She is also a fellow at the RSA, Royal Society of Arts, and serves on several advisory boards. Tinna has been strategic partner for inclusiveness and gender parity at the United Nations since 2015. </p>
          <p> Tinna is also challenging status quo by playfully teaching, designing, and facilitating how to apply anthropology, behavioural insights, mitigate cognitive bias, innovate and collaborate across diversity, foster sharing, openness, reciprocity, diversity, inclusion, leadership, and humanity around the world. Tinna is a internationally recognised speaker and influencer. In her 2017 TEDx talk she shares her vision and passion about how we can all Nudge Behaviour for a more Inclusive World. </p>
          <p>Tinna is living in Denmark with her husband Troels, and their three daughters Rosa, Freja and Sigrid. </p>
        </div>
        <div>
          <img src={LisaImg} alt="Lisa" style={{width:'250px', marginLeft:'-60px'}} />
          <h2>Lisa Kepinski</h2>
          <h3>Co-Founder, Inclusion Nudges </h3> 
          <h3>Co-Author the Inclusion Nudges Guidebook & Inclusion Nudges Action Guide Series </h3>
          <p>contact@inclusion-nudges.org</p>
          <h3>Founder, Inclusion Institute </h3>
          <p>lisa.kepinski@inclusion-institute.com</p>
          <p>Lisa partners with organisations on how to successfully achieve their goals for creating a more inclusive culture for sustainable growth. Her deep expertise in organisational development and behavioural science integrated with inclusive culture make her a unique resource. With nearly 20 years’ experience as a global inclusion, equity, & diversity executive for AXA, Microsoft, & HP, Lisa knows well the realities of creating change inside large, global organisations. With deep experience as an internal inclusion change leader, Lisa founded in 2013 the Inclusion Institute and focuses on designing organisational and behavioural change strategy and actions to increase inclusion, equity, and diversity. She also coaches change makers and leaders to enable them to carry this work forward in their organisations. Lisa’s clients are from a wide range of sectors including multinationals, businesses, NGOs, governments, universities, and directly with individual change makers. In 2013, Lisa and Tinna C. Nielsen founded the Inclusion Nudges global initiative. They are the authors of the Inclusion Nudges Guidebook, the Inclusion Nudges Actions Guide Series, and several articles. For this innovative work, they were named to The Economist’s & The Telegraph’s Global Diversity “Top 10” List in 2015, 2016, & 2017 and shortlisted in 2019 for a European Diversity Award. </p>
          <p> As an inclusion and behavioural change thought leader, Lisa frequently speaks at conferences, offers webcasts, and advises organisations. In June 2017, Lisa gave a TEDx talk on the need to design for inclusive behavioural change. She conducts research and writes to help further the practice of inclusion, equity, and diversity. Doing this always with a practical application focus. In addition to the Inclusion Nudges Guidebook, she has co-conducted global studies on improving the effectiveness of women networks, inclusion & diversity actions with impact (published by Newsweek), and most recently on inclusive virtual working. Lisa works with groups to focus on inclusion, such as by serving on several advisory boards, chairing conferences, founding the Europe-based Global D&I Forum, and an expert panellist for Global Diversity & Inclusion Benchmarks. </p>
          <p> Lisa grew up in a lower middle-class, military, conservative family in the U.S. Her family came from many generations of Southern poor, farming, and working-class white people who immigrated in the late 1700’s from England. Her maternal grandmothers’ grandmother was Cherokee Native American, but unfortunately this culture was not passed through the family. Social mobility came from she and her family having white privilege within a deeply racist and discriminatory culture. Lisa was the first on her mother’s side to graduate from university with two degrees in social psychology and socio-linguistics. Despite being told repeatedly that she had two career options (to be a nurse or a teacher), she went a different path. Growing up, having seen and felt racism, sexism, classism, and other forms of oppression, including having been abused, she felt the need to find a way to address inequalities. With her work in inclusion, diversity, and equity, she tries to do this. </p>
          <p> Throughout Lisa’s life, she moved every few years, living in many states in the U.S. and in 5 countries. She has travelled extensively in her global work. For the past 20 years, Lisa has lived in Europe, and from their home in southern Germany, she and her husband, Pawel, raised their two daughters who are now young adults. They have also had five Weimaraner dogs and one cat whose cranky cries have been the backdrop of many calls and webcasts! Lisa's background, and much more, shapes how she approaches her work with inquisitiveness to know other people’s stories, striving to use her voice for equity and inclusion, and questioning and taking action on behaviours and structures that limit our potential. There simply isn’t an option to ignore including all people. It’s the hope for a more equitable world that pushes Lisa to do the work she does. </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default FoundersPage
