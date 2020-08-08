import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { showModal } from "../components/modal"
import ModalSignup from "../components/modal-signup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const  slugify = require('slugify')

const Blog = ({pageContext, location}) => {
  const { group, index, first, last, pageCount, allPosts } = pageContext
  const previousUrl = index - 1 === 1 ? '/blog' : '/blog/' + (index - 1).toString()
  const nextUrl = '/blog/' + (index + 1).toString()
  const [filteredPosts, setFilteredPosts] = useState(group);
  const uniqueCategories = [...new Set(getCategories(allPosts))];
  const pageArray = [];
  for (let i = 1; i <= pageCount; i++) { pageArray.push(i) }

  const pageNum = location.pathname.split('/')[2];
  const currentPage = !pageNum ? 1 : parseInt(pageNum);

  function getPosts(posts, category) {
    document.querySelector('.blog__search-input').value = '';
    setFilteredPosts(posts.filter((item) => 
      (item.node.frontmatter.category === category || category === 'all')))
  }

  function searchBlog(event, posts) {
    const searchString = event.target.value.toLowerCase();
    if (searchString) {
    setFilteredPosts(posts.filter((item) => 
      (item.node.rawMarkdownBody.toLowerCase().includes(searchString))))
    } else {
      setFilteredPosts(group);
    }
  }

  return (
    <Layout>
      <SEO title="Blog" description="The Inclusion Nudges blog is a go-to resource for people wanting to make changes in their organisations, communities, and society. Inclusion Nudges are a proven change approach. The change makers and inclusion experts Lisa Kepinski and Tinna C. Nielsen share with you practical behavioural designs, insights, and actions to make inclusion the norm everywhere, for everyone." />
      <div className="accent-2">
        <h2 className="text">Don’t miss out. Stay informed about new blog posts. <span role="button" tabIndex="0" className="colour-accent-3" style={{cursor:'pointer'}} onClick={() => showModal('modal-signup')} onKeyPress={() => {}}>Subscribe HERE</span></h2>
      </div>
      <div className="center-content">
        <p style={{textAlign:'center'}}>This blog is part of the Inclusion Nudges global initiative. www.inclusion-nudges.org</p>
        <h2 className="page-heading">Welcome to the Inclusion Nudges blog  </h2>
      
        <p><strong>We are Lisa Kepinski and Tinna C. Nielsen</strong> <br/> We are the Founders of the Inclusion Nudges global initiative, the authors of The Inclusion Nudges Guidebook and the Action Guide Series, <strong>We are designing to increase diversity, equity, and inclusion in behaviours, cultures, and systems in organisations & communities around the world.</strong></p>

        <p><strong>These blog posts give you inspiration and practical actions to make inclusion the norm everywhere, for everyone. </strong><br/> We share with you our personal and professional insights, learnings, passion, and expertise based on our extensive experience of leading change efforts combined with our backgrounds in behavioural sciences. We give you some eye-openers and make sure you can apply the Inclusion Nudges change approach. </p>

        <p><strong>We will sprinkle the seriousness of these topics with a dash of humour</strong><br/>– because let’s face it, the irrationalities of human behaviour is leading to absurdities that we will have to embrace to change, and playfulness is proven to be crucial catalysts for change.</p>
      </div>
      <div className="blog">
        <div className="indented-row">
          <div className="blog__categories">
            <span className="blog__categories-title">Categories: </span>
            <button className="blog__category" onClick={() => { getPosts(group, 'all')}}>all</button>
            {uniqueCategories.map((category, i) => (
              <button className="blog__category" onClick={() => { getPosts(group, category)}} key={`key${i}`}>{category}</button>
            ))}
          </div>
          <div className="blog__search">
            <label htmlFor="blogSearch" className="blog__search-label">Search:</label>
            <input type="text" className="blog__search-input" id="blogSearch"
                  onChange={(e) => searchBlog(e, allPosts)}>
            </input>
          </div>
        </div>
        <div className="indented-row row-auto">
          {filteredPosts.map(({node}, i) => (
            <div className="blog__card" key={`key${i}`}>
              <div className="blog__image" style={{backgroundImage: `url(${node.frontmatter.thumbnail})`}}></div>
              <h3 className="blog__title">{node.frontmatter.title}</h3>
              <p className="blog__excerpt">{node.excerpt}</p>
              <a className="blog__link" href={`/blog/${slugify(node.frontmatter.category, {lower: true})}/${slugify(node.frontmatter.slug, {lower: true})}`}>Read More</a>
              <span className="blog__category">{node.frontmatter.category}</span>
            </div>
          ))}
        </div>
        <div className="indented-row blog-page-nav">
          {first && <span className="blog-page__prev">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </span>}
          {!first && <Link className="blog-page__prev" to={previousUrl}>
                       <FontAwesomeIcon icon={faChevronLeft} />
                     </Link>}
          {pageArray.map((pageNum, i) => {
            pageNum = pageNum === 1 ? '' : pageNum;
            return  <Link className={`blog-page__number ${currentPage === (pageNum || 1) ? 'active': ''}`} 
                          to={`/blog/${pageNum}`}
                          key={i}>
                      {pageNum || 1}
                    </Link>
          })}
          {last && <span className="blog-page__next"><FontAwesomeIcon icon={faChevronRight} /></span>}
          {!last && <Link className="blog-page__next" to={nextUrl}><FontAwesomeIcon icon={faChevronRight} /></Link>}
        </div>
      </div>
      <ModalSignup signupType='blog' />
    </Layout>
  )
}

function getCategories(posts) {
  let categories = [];
  posts.filter((item) => {
    if (item.node.frontmatter.post_date) { 
      categories.push(item.node.frontmatter.category) 
      return true; 
    }
    return false;
  });

  return categories;
}

export default Blog
