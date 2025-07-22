import React from 'react';

export default function About(props) {
  const mystyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#dee2e6'
  };

  return (
    <div className="container" style={mystyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextTutorials offers a powerful text analyzer that helps users evaluate and optimize
              their writing efficiently. Whether it's word count, character count, or readability,
              our analyzer provides instant results to improve clarity and structure. 
              It’s ideal for content creators, students, and professionals who need accurate
              text analysis in real time.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
             TextTutorials is a free, user-friendly platform designed to simplify 
             content evaluation. We deliver tools that report word and character 
             statistics with zero complexity. Our mission is to help users write better 
             and smarter — whether it's for blogs, reports, social media, or academic assignments.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Our tool is fully compatible with all modern browsers including Chrome, Firefox,
              Safari, Edge, and Opera. Whether you're on desktop or mobile, TextTutorials functions 
              seamlessly without the need for installation. This makes it perfect for on-the-goediting
               and quick access across devices.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
