import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDotCircle } from "@fortawesome/free-solid-svg-icons"

function showSlide(index) {
  setTimeout(() => {
    let currentSlideHeight = 0;
    let sliderHeight = 0;
    const slider = document.querySelector('.slider');
    if (slider) {
      document.querySelectorAll('.slide').forEach((slide) => {
        slide.classList.remove('show');
        currentSlideHeight = slide.querySelector('.slide__text').offsetHeight + 90;
        if (currentSlideHeight > sliderHeight) { sliderHeight = currentSlideHeight }
      });
      document.querySelectorAll('.slider__bullet').forEach((bullet) => {
        bullet.classList.remove('show');
      });
      document.querySelector(`.slide-${index}`).classList.add('show');
      document.querySelector(`.slider__bullet-${index}`).classList.add('show');
      slider.style.height = `${sliderHeight}px`
    }
  }, 0)
}

function autoLoop(numSlides) {
  setTimeout(() => {
    let i = 1;
    showSlide(0);
    setInterval(() => {
      showSlide(i);
      if (++i === numSlides) i = 0;
    }, 6000)
  }, 0)
}

const Slider = ({testimonials}) => {
  const filteredData = testimonials.allMarkdownRemark.edges.filter((item) => {
    if (item.node.frontmatter.testimonial) { return true }
    return false;
  });
  autoLoop(filteredData.length);
  return (
    <div className="slider">
      {filteredData.map(({node}, i) => (
        node.frontmatter.testimonial &&
        <div className={`slide slide-${i} ${(i === 0 ? 'show' : 'hide')}`} key={`slide-${i}`}>
          <div className={`slide__text slide__text-${i}`}>
            <h3 style={{marginBottom:'1rem'}}>{node.frontmatter.testimonial}</h3>
            <p>{node.frontmatter.title}</p>
            <p>{node.frontmatter.position}</p>
            <p>{node.frontmatter.organisation}</p>
          </div>
        </div>
      ))}
      <div className="slider__bullets">
        {filteredData.map(({node}, i) => (
          node.frontmatter.testimonial &&
          <button className={`slider__bullet slider__bullet-${i}`} key={`slide-${i}`}>
            <FontAwesomeIcon icon={faDotCircle} onClick={() => showSlide(i)} />
          </button>
        ))}
      </div>
    </div>
  )
}

Slider.propTypes = {
  testimonials: PropTypes.object
}

export default Slider
