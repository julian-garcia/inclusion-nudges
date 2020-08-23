import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { showModal } from "../components/modal"
import SocialShare from "../components/social-share"

const  slugify = require('slugify')

const Blog = ({pageContext, location}) => {
  const { group, index, first, last, pageCount, allPosts } = pageContext
  const previousUrl = index - 1 === 1 ? '/blog' : '/blog/' + (index - 1).toString()
  const nextUrl = '/blog/' + (index + 1).toString()
  const [filteredPosts, setFilteredPosts] = useState(group);
  const uniqueCategories = [...new Set(getCategories(allPosts))];
  let pageArray = [];
  for (let i = 1; i <= pageCount; i++) { pageArray.push(i) }

  const pageNum = location.pathname.split('/')[2];
  const currentPage = !pageNum ? 1 : parseInt(pageNum);

  function getPosts(e, posts, category) {
    document.querySelectorAll('.blog__category').forEach((ctgy) => {
      ctgy.classList.remove('active');
    });
    e.target.classList.add('active');
    document.querySelector('.blog__search-input').value = '';
    setFilteredPosts(posts.filter((item) => 
      (item.node.frontmatter.category === category || category === 'all')))
  }

  function searchBlog(event, posts) {
    document.querySelectorAll('.blog__category').forEach((ctgy) => {
      ctgy.classList.remove('active');
    });
    document.querySelectorAll('.blog__category')[0].classList.add('active');
    const searchString = event.target.value.toLowerCase();
    if (searchString) {
      if (searchString.length >= 3) {
        setFilteredPosts(posts.filter((item) => 
          (item.node.rawMarkdownBody.toLowerCase().includes(searchString))))
      }
    } else {
      setFilteredPosts(group);
    }
  }

  return (
    <Layout>
      <SEO title="Blog" description="The Inclusion Nudges blog is a go-to resource for people wanting to make changes in their organisations, communities, and society. Inclusion Nudges are a proven change approach. The change makers and inclusion experts Lisa Kepinski and Tinna C. Nielsen share with you practical behavioural designs, insights, and actions to make inclusion the norm everywhere, for everyone." />
      <div className="accent-2">
        <h2 className="text">Don’t miss out. Stay informed about new blog posts. <span role="button" tabIndex="0" className="colour-accent-3" style={{cursor:'pointer'}} onClick={() => showModal('modal-signup-blog')} onKeyPress={() => {}}>Subscribe HERE</span></h2>
      </div>
      <div className="center-content" style={{textAlign:'center', maxWidth:'730px', margin:'2rem auto'}}>
        <p><strong>We are Lisa Kepinski and Tinna C. Nielsen,</strong><br/>the Founders of the Inclusion Nudges global initiative <Link to="/founders">www.inclusion-nudges.org</Link> and authors of The Inclusion Nudges Guidebook and the Action Guide Series.</p>

        <p><strong>In this blog</strong>  we share our personal and professional insights from leading change efforts for more diverse, equal, and inclusive organisations and communities worldwide.</p>

        <p><strong>Our purpose</strong> is to inspire and empower you to apply behavioural insights and the Inclusion Nudges change approach to make impactful change in your sphere of influence.</p>
      </div>
      <div className="blog">
        <div className="indented-row">
          <div className="blog__categories">
            <span className="blog__categories-title">Categories: </span>
            <button className="blog__category active" onClick={(e) => { getPosts(e, group, 'all')}}>all</button>
            {uniqueCategories.map((category, i) => (
              <button className="blog__category" onClick={(e) => { getPosts(e, allPosts, category)}} key={`key${i}`}>{category}</button>
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
              <span className="blog__date">{node.frontmatter.post_date_string}</span>
              <a className="blog__link" href={`/blog/${slugify(node.frontmatter.category, {lower: true})}/${slugify(node.frontmatter.slug, {lower: true})}`}>Continue Reading</a>
            </div>
          ))}
        </div>
        {pageCount > 1 &&
        <div className="indented-row blog-page-nav">
          {first && <span className="blog-page__prev modal-form__button inactive">
                      Back
                    </span>}
          {!first && <Link className="blog-page__prev modal-form__button" to={previousUrl}>
                       Back
                     </Link>}
          <div>
          {pageArray.map((pageNum, i) => {
            pageNum = pageNum === 1 ? '' : pageNum;
            return  <Link className={`blog-page__number ${currentPage === (pageNum || 1) ? 'active': ''}`} 
                          to={`/blog${pageNum ? '/' : ''}${pageNum}`}
                          key={i}>
                      {pageNum || 1}
                    </Link>
          })}
          </div>
          {last && <span className="blog-page__next modal-form__button inactive">More Posts...</span>}
          {!last && <Link className="blog-page__next modal-form__button" to={nextUrl}>More Posts...</Link>}
        </div>
        }
      </div>
      <SocialShare origin="blog" />
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

  return categories.sort();
}

export default Blog
