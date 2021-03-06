import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TinnaImg from "../images/tinna.png"
import LisaImg from "../images/lisa.png"
import FoundersImg from "../images/founder-video-poster.png"
import BooksImg from "../images/book-series.png"
import FoundersVideo from "../videos/founders.mp4"
import FoundersVTT from "file-loader!../videos/founders.vtt"
import { playPause, adjustVolume, muteVolume } from "../../static/script.js"

const FoundersPage = () => (
  <Layout>
    <SEO title="The Founders" />
    <div className="accent-2 strapline">
      <h2 className="text">The Inclusion Nudges Founders’ Story</h2>
      <h3 className="text">
        <span className="pad-right">
          How two personal journeys became a global movement
          <Link
            className="book-series"
            onClick={() => scrollTo("#books")}
            to={"/#books"}
          >
            <img src={BooksImg} alt="" />
          </Link>
        </span>
      </h3>
      <Link
        className="book-series mobile"
        onClick={() => scrollTo("#books")}
        to={"/#books"}
      >
        <img src={BooksImg} alt="" />
      </Link>
    </div>
    <div className="blog-post founders">
      <p style={{ position: "relative" }}>
        <div className="founders-video">
          <video id="video" poster={FoundersImg} width="100%" height="auto">
            <source src={FoundersVideo} type="video/mp4" />
            <track
              default
              kind="captions"
              srcLang="en"
              src={FoundersVTT}
              label="English subtitles"
            />
          </video>
          <div id="controls" className="controls">
            <button id="playpause" onClick={playPause}>
              Play/Pause
            </button>
            <input
              id="volume"
              min="0"
              max="1"
              step="0.1"
              type="range"
              onInput={adjustVolume}
            />
            <button id="mute" onClick={muteVolume}>
              Mute
            </button>
          </div>
        </div>
        We, Tinna C. Nielsen and Lisa Kepinski, are the Founders of the
        Inclusion Nudges global initiative. We developed the change approach
        that we call Inclusion Nudges based on our backgrounds in behavioural
        and social science and our lived experiences with diversity, equity, and
        inclusion. This is our story, and we want to share it with you.
      </p>
      <p>
        {" "}
        For as long as we can remember, we have both one way or another been
        engaged in making changes, small and big. Our work is centred on
        creating equitable, diverse, and inclusive communities, organisations,
        systems, families, policies, cities, and societies. We have both felt
        like outsiders the majority of our lives and have turned this into a
        drive for making impactful changes. We both come from working-class
        backgrounds and were the first in our families to attend university. We
        both feel blessed having had opportunities to travel and meet people
        from other cultures and have our own perspectives broadened. We have
        many similarities, but also completely different backgrounds,
        upbringings, and lives today.{" "}
      </p>
      <p>
        {" "}
        It’s amazing serendipity that our life paths crossed in 2013. At that
        time, Lisa, an American, was working for a multinational financial
        organisation in Paris and was commuting weekly to her family and home in
        Germany. Tinna, a Dane, was settled in Denmark after many years living
        and travelling abroad, and was working in a global food company in
        Denmark. We were introduced to each other through a mutual contact, who
        said: “You both apply behavioural insights and experiment in ways that I
        have not seen others do in the work of diversity and inclusion, and I
        think you should know each other.” As leaders with global responsibility
        for inclusion and diversity, we had both been working this way on our
        own for several years because it was how we could succeed. We both
        experienced the struggle of ‘being shot’ as the messengers and change
        makers, having people say the right things but not change behaviour,
        seeing increased leader support while having backlash within the
        culture, and so much more. With our foundations in social sciences, we
        were applying behavioural designs to empower and nudge people to be more
        inclusive. We experimented as undercover change agents. It worked for us
        and for the organisations in which we worked.{" "}
      </p>
      <p>
        {" "}
        Our first online meeting was scheduled for an hour. But the conversation
        went on for several hours as we discovered so much common ground. We
        shared our thoughts about the needs that we both saw for breakthrough
        change in how inclusion, equity, and diversity were being practiced.
        With the energy we got from our discussion, we decided to merge our
        approaches and frame up the concept of Inclusion Nudges in ways that
        could enable and empower others to also apply it. And so began our
        journey together. In addition to setting up together the Inclusion
        Nudges global initiative, we each founded our own change organisations.
        We want to empower change makers, leaders, practitioners, and social
        activists because none of us should exhaust ourselves by the burden of
        having to ‘fix it’ (‘it’ = discrimination, harassment, inequality,
        diversity, inclusion). We should join forces in getting as many people
        as possible engaged in creating sustainable changes for inclusive
        cultures and systems.{" "}
      </p>
      <p>
        {" "}
        We have spent thousands of hours working together exchanging ideas,
        designs, frustrations, joys, and hope. This has resulted in the
        Inclusion Nudges approach being internationally recognised as game
        changing. We have given many keynote talks, offered learning sessions,
        coached leaders, and (as of 2020) written 6 books and many articles. We
        have heard from people how this has transformed how they work as change
        makers. Our work with the Inclusion Nudges change approach has led to
        impactful changes in collaboration with organisations, such as the
        United Nations, the International Red Cross & Red Crescent Movement, the
        World Economic Forum, Amnesty International, the OECD, the Danish Film
        Institute, and many multinational corporations, small and medium-sized
        businesses, universities, hospitals, governmental agencies, individual
        change makers, and more. Businesses, humanitarian organisations, social
        innovators, refugees, leaders, and many others around the world are
        applying Inclusion Nudges to make it easier to make changes. We couldn’t
        be prouder. For this work, we were named to The Economist’s Global
        Diversity “Top 10” List in 2015, 2016, & 2017. With humility we continue
        to build a global movement that can fundamentally change how we achieve
        diversity, equity, belonging, and inclusion faster and make it stick. We
        really hope you will join us. Together, by applying Inclusion Nudges we
        can make inclusion the norm—everywhere, for everyone.{" "}
      </p>
      <p>
        {" "}
        You can learn more in The Inclusion Nudges Guidebook, the Inclusion
        Nudges Action Guide Series, and the Inclusion Nudges blog, as well as
        several articles on the World Economic Forum’s Agenda blog where we also
        publish.
      </p>
    </div>
    <div className="center-content blog-post" style={{ marginTop: "0" }}>
      <div className="row-auto founders" style={{ gap: "2rem" }}>
        <div>
          <img
            src={TinnaImg}
            alt="Tinna"
            style={{ width: "250px", marginLeft: "-40px" }}
          />
          <h2>Tinna C. Nielsen</h2>
          <h3>Co-Founder, Inclusion Nudges </h3>
          <h3>
            Co-Author the Inclusion Nudges Guidebook & Inclusion&nbsp;Nudges
            Action Guide Series{" "}
          </h3>
          <p>tinna_and_lisa@inclusion-nudges.org</p>
          <h3>Founder, Move the Elephant for Inclusiveness </h3>
          <p>tinna@movetheelephant.org</p>
          <p>
            {" "}
            Tinna is a world-acclaimed specialist in applying insights from
            behavioural and social sciences to design impactful solutions and
            change behaviours. Her unique strength and approach are listening to
            the voices of people and empowering people of all walks of life to
            make changes and social innovation in their sphere of influence.
            Tinna is an anthropologist, social entrepreneur, and behavioural
            designer passionately pioneering innovative approaches to accelerate
            inclusiveness, diversity, equality, and gender parity as a means to
            achieve innovation, development, and the Global Goals (SDGs){" "}
          </p>
          <p>
            {" "}
            In 2015, The World Economic Forum selected Tinna as a Young Global
            Leader to take an active part in creating solutions to improve the
            state of the world. At the same time Tinna was asked by the United
            Nations to become strategic partner for inclusiveness and gender
            parity and has influenced several UN projects since 2015. She served
            as co-chair of the Global Future Council on Behavioural Science at
            the World Economic Forum 2016-18, and is part of the Expert Network,
            as well as a writer for their blog Agenda. As a fellow at the RSA,
            Royal Society of Arts, Tinna also serves on several advisory boards.{" "}
          </p>
          <p>
            {" "}
            Tinna has worked for the Danish Institute for Human Rights, and as
            the Global Head of Inclusion, Diversity, and Collaboration in Arla,
            a multinational food corporation (2010-15). The same year she
            co-founded Inclusion Nudges, she founded the change organisation
            Move the Elephant for Inclusiveness and today she is partnering with
            private, public, and NGO organisations, practitioners in all
            sectors, leaders at all levels, politicians, architects and city
            developers, as well as refugees and social activists worldwide to
            redesign communities, organisations, and societies for more
            sustainable and just development through inclusiveness. She has
            extensive experience in leadership development and cultural change
            at all levels and in all functions. And she can describe a complex
            change process as drawings. Tinna is an internationally recognised
            speaker and influencer. In her TEDx talk, she shares how we can all
            Nudge Behaviour for a More Inclusive World. In addition to the
            Inclusion Nudges Guidebook and the Action Guide Series, Tinna has
            co-authored books on how to apply behavioural insights to improve
            the social welfare system, as well as a book on inclusive community
            co-creation.{" "}
          </p>
          <p>
            {" "}
            Growing up in the 1970s in a working-class family, with loving
            parents and an older brother, Tinna experienced gender equality
            first-hand when her mother broke out of limiting traditions and
            joined the women’s movement. This combined with experiencing the
            implications of her brother’s severe dyslexia in a school system
            that believed he was unable to learn other languages, proven wrong
            by a teacher who helped him pass the English exam in less than a
            year, sparked a belief in Tinna at an early age, that every person
            has potential that can and should be leveraged – also when it’s
            against all odds. Tinna has throughout her teenage and young adult
            years felt like an outlier herself being 185 cm (6.2 inches) tall
            and not fitting the unspoken and unwritten norms of women having to
            be shorter than men. The feeling of shame was replaced with pride
            when she started playing basketball, which led to playing for the
            Danish National Team and among the 16 best college teams in the U.S.
            Tinna has worked since she was 13 years old (in factories,
            hospitals, kindergarten, and as a carer for people with disability),
            and she was the first on both her mother’s and father’s side to
            graduate from university (Master in Anthropology). Social mobility
            came from growing up in a country built on solidarity with equal and
            free access to education for all citizens. Growing up, experiencing
            the potential of equality, the barriers of excluding norms, and
            later experiencing the joy of diverse cultures when travelling the
            world, Tinna found her dedication and profession of making
            diversity, equity, and inclusion the norm. Today, Tinna is living in
            Denmark with her husband Troels and their three daughters Rosa,
            Freja, and Sigrid.{" "}
          </p>
        </div>
        <div>
          <img
            src={LisaImg}
            alt="Lisa"
            style={{ width: "250px", marginLeft: "-60px" }}
          />
          <h2>Lisa Kepinski</h2>
          <h3>Co-Founder, Inclusion Nudges </h3>
          <h3>
            Co-Author the Inclusion Nudges Guidebook & Inclusion&nbsp;Nudges
            Action Guide Series{" "}
          </h3>
          <p>tinna_and_lisa@inclusion-nudges.org</p>
          <h3>Founder, Inclusion Institute </h3>
          <p>lisa.kepinski@inclusion-institute.com</p>
          <p>
            {" "}
            As an organisational and behavioural change thought leader, Lisa
            frequently speaks at conferences, designs and delivers learning
            sessions, coaches leaders, advises organisations, conducts research,
            and writes. Her clients are multinationals, businesses, NGOs,
            governments, universities, and change makers. She is a strategic
            partner to the United Nations for equity and inclusion. In June
            2017, Lisa gave a TEDx talk on the need to design for inclusive
            behavioural change in talent selections. The focus of her work is to
            help further the profession of inclusion, equity, and diversity with
            new insights and practices and also to empower people to be
            effective change leaders for inclusion. She does this always with a
            practical application focus.{" "}
          </p>
          <p>
            {" "}
            This pragmatic perspective is based on her 20 years’ experience as a
            global inclusion, equity, & diversity executive for AXA, Microsoft,
            & HP. Lisa knows well the realities of creating change inside large,
            global organisations. In 2013, she founded the Inclusion Institute
            and focuses on designing organisational and behavioural change
            strategy and actions. Her practice is based on collaborative
            partnership with clients on how to successfully achieve their goals
            within an inclusive culture for sustainable and equitable growth.
            She also coaches change makers and leaders to enable them to carry
            the work forward in their own organisations. Lisa works with groups
            to focus on inclusion, such as by serving on several advisory
            boards, chairing conferences, founding the Europe-based Global D&I
            Forum, and as an expert panellist for the Global Diversity &
            Inclusion Benchmarks.{" "}
          </p>
          <p>
            {" "}
            In addition to the Inclusion Nudges Guidebook and the Inclusion
            Nudges Action Guide Series, Lisa has co-authored three global
            research studies. Her 2016 research report “A Fresh Look at Women
            Networks” offers insights and advice on increasing the effectiveness
            of women networks. In 2017, she wrote a report for Newsweek on
            impactful inclusion and diversity actions. Lisa’s research in 2019
            examined ways to have an inclusive ‘remote’ working experience,
            offering insights and designs to increase connection and belonging
            across location-distributed teams.{" "}
          </p>
          <p>
            {" "}
            Lisa grew up in a lower middle-class, military, conservative family
            in the U.S. Her family came from many generations of Southern poor,
            farming, and working-class white people who immigrated in the late
            1700’s from England. Her maternal grandmother's mother was Cherokee
            Native American, but unfortunately this culture was not passed
            through the family. Social mobility came from Lisa and her family
            having white privilege within a deeply racist, sexist,
            discriminatory, and violent culture. Her grandmother's gentle
            spirits are with Lisa as she cooks the food of her past—representing
            the complex legacy of the many people of her hometown of Charleston,
            South Carolina, including enslaved Black people, slave owners,
            farmers, poor people, Native American people, and immigrants.{" "}
          </p>
          <p>
            {" "}
            Despite being told repeatedly that she had two career options (to be
            a nurse or a teacher), Lisa went a different path. She was the first
            on her mother’s side to graduate from university and with two
            degrees. Her studies in social psychology focused on human behaviour
            and in socio-linguistics she had two specialisations—one on gender
            and language and another on immigrant cultural assimilation and
            language. Growing up, having seen and felt racism, sexism, classism,
            and other forms of oppression, including abuse, Lisa felt the need
            to find a way to address inequalities, and through her work, she
            tries to do this. Central to this is examining her past to see how
            the power of privilege and oppression are a part of who she is. With
            reflection and questioning, Lisa approaches her work as a change
            maker.{" "}
          </p>
          <p>
            {" "}
            Lisa is a world citizen. She lived in many states in the U.S. and in
            5 countries. She has travelled extensively in her global work. For
            the past 20 years, Lisa has lived in Europe, and now is settled in a
            small German Alpine village. With this backdrop, Lisa and her
            husband, Pawel, raised their two daughters, Anya and Camila.{" "}
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default FoundersPage
