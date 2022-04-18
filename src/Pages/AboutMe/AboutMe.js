import React from "react";
const AboutMe = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-12">
            <img
              className="w-100"
              src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
              alt=""
            />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div>
              <div className="text-box">
                <h1
                  style={{
                    fontSize: "44px",
                    lineHeight: "56px",
                    fontFamily: "'Kaushan Script', cursive",
                    color: "#292929",
                  }}
                >
                  I'm Marouful Islam , <br />
                  Web Designer &amp; Web Developer <br />
                  from Bangladesh, Chittagong.
                </h1>
                <p className="my-3">
                  I have rich experience in web site design &amp; building and
                  customization. Also I am good at html, css, javascript, React
                  js, tailwind, firebase, bootstrap. I love learning something
                  new. I am a hard worker. I am dedicated on my work finish on
                  the the deadline. I love to talk with you about our unique
                  approach. Feel free to contact me writing an email with your
                  project idea.
                </p>
              </div>
              <div className="bts">
                <button className="btn btn-link">Download Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
