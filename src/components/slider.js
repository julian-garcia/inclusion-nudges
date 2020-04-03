import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDotCircle, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
let slideTimer;
let showSlideTimeout;
let loopTimeout;

function showSlide(index) {
  clearTimeout(showSlideTimeout);
  showSlideTimeout = setTimeout(() => {
    let currentSlideHeight = 0;
    let sliderHeight = 0;
    if (typeof document !== `undefined`) {
      const slider = document.querySelector('.slider');
      if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
      }
      if (slider) {
        const sliderTitleHeight = slider.querySelector('.page-heading').offsetHeight;
        document.querySelectorAll('.slide').forEach((slide) => {
          slide.classList.remove('show');
          currentSlideHeight = slide.querySelector('.slide__text').offsetHeight + sliderTitleHeight;
          if (currentSlideHeight > sliderHeight) { sliderHeight = currentSlideHeight }
        });
        document.querySelectorAll('.slider__bullet').forEach((bullet) => {
          bullet.classList.remove('show');
        });
        document.querySelector(`.slide-${index}`).classList.add('show');
        document.querySelector(`.slider__bullet-${index}`).classList.add('show');
        slider.style.height = `calc(${sliderHeight}px + 9rem)`;
      }
    }
  }, 0)
}

function clickShowSlide(i) {
  clearInterval(slideTimer);
  showSlide(i);
}

function moveSlider(direction, numSlides) {
  let slideNumber = parseInt(document.querySelector('.slide.show').getAttribute('data-slide'));
  if (direction === '<') {
    slideNumber = (slideNumber === 0) ? numSlides - 1 : slideNumber - 1;
  } else {
    slideNumber = (slideNumber === numSlides - 1) ? 0 : slideNumber + 1;
  }
  clickShowSlide(slideNumber);
}

function autoLoop(numSlides, delay) {
  clearTimeout(loopTimeout);
  loopTimeout = setTimeout(() => {
    let currentSlide = document.querySelector('.slide.show');
    clearInterval(slideTimer);
    let i = 0;
    if (currentSlide) {
      i = Number(currentSlide.getAttribute('data-slide'));
    }
    showSlide(i);
    slideTimer = setInterval(() => {
      if (++i === numSlides) i = 0;
      showSlide(i);
    }, 12000)
  }, delay)
}

const Slider = ({testimonials}) => {
  const filteredData = testimonials.allMarkdownRemark.edges.filter((item) => {
    if (item.node.frontmatter.testimonial) { return true }
    return false;
  });
  autoLoop(filteredData.length, 0);
  return (
    <div className="slider" onMouseLeave={() => autoLoop(filteredData.length, 0)} role="button" tabIndex={0}>
      <h2 className="page-heading" style={{margin:'0 0 1rem'}}>What people say about Inclusion Nudges</h2>
      {filteredData.map(({node}, i) => (
        node.frontmatter.testimonial &&
        <div className={`slide slide-${i} ${(i === 0 ? 'show' : 'hide')}`} key={`slide-${i}`} data-slide={i}>
          <div className={`slide__text slide__text-${i}`}>
            <h3 style={{marginBottom:'1rem'}}>{node.frontmatter.testimonial}</h3>
            <p>{node.frontmatter.title}, {node.frontmatter.position} {node.frontmatter.organisation}</p>
          </div>
        </div>
      ))}
      <div className="slider__bullets">
        {filteredData.map(({node}, i) => (
          node.frontmatter.testimonial &&
          <button className={`slider__bullet slider__bullet-${i}`} key={`slide-${i}`}>
            <FontAwesomeIcon icon={faDotCircle} onClick={() => clickShowSlide(i)} />
          </button>
        ))}
      </div>
      <div className="slider__arrows">
        <FontAwesomeIcon className="slider__left" icon={faChevronLeft} onClick={() => moveSlider('<',filteredData.length)} />
        <FontAwesomeIcon className="slider__right" icon={faChevronRight} onClick={() => moveSlider('>',filteredData.length)} />
      </div>
    </div>
  )
}

Slider.propTypes = {
  testimonials: PropTypes.object
}

export default Slider
