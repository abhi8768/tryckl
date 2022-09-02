import React, { Component } from "react";

class LandingPAge extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div id="new-design" data-scroll-container style="display: none;">
        {/* <link href="/landing_assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all" id="landing_bootstrap"/> 
			<link href="/landing_assets/css/custom.css" rel="stylesheet" type="text/css" media="all" id="landing_custom"/> 
			<link rel="stylesheet" href="/landing_assets/css/mobile5e1f.css" media="screen" type="text/css" />
			<link rel="stylesheet" href="/landing_assets/css/desktop.css" media="only screen and (min-width: 1020px)" type="text/css" />
			<link rel="preconnect" href="https://fonts.gstatic.com">
			<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">
			<link rel="preconnect" href="https://fonts.gstatic.com">
			<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet"> */}

        <div className="container-fluid bg-white pb-5">
          <div className="container" data-scroll-section>
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="/">
                {" "}
                <img src="/landing_assets/img/logo.png" className="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li></li>
                </ul>
                <ul className="navbar-nav float-right">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about-us">
                      About Us
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/how-it-works">
                      How it Works
                    </a>
                  </li>
                  {/* <!-- <li className="nav-item">
							<a className="nav-link" href="/privacy-policy">Privacy</a>
							</li> -->
							<!-- <li className="nav-item">
							<a className="nav-link" href="#">Download</a>
							</li> -->
							<!-- Disabled for Production Only --> */}
                  <li className="nav-item">
                    <a className="nav-link" href="/agent-login">
                      Login / Register
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div id="scroll" style="display: none;">
          <div className="first-fold" data-scroll-section>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-auto">
                  <h1>
                    Welcome <br />
                    to the new <br />
                    efficiency-driven
                    <br />
                    <b>Agent Experience</b>
                  </h1>
                  <p>
                    Tryckl takes the necessary, yet time consuming, day to day
                    items that create revenue and scales them in a convenient
                    platform, leveraging the collective efforts of all real
                    estate agents in your market.
                  </p>
                  <p>
                    {" "}
                    Welcome to the new way to REpresent! Welcome to Tryckl.{" "}
                  </p>
                  <a
                    href="https://apps.apple.com/us/app/tryckl/id1561380058"
                    className="mr-3"
                  >
                    <img
                      src="/landing_assets/img/app-store-btn.png"
                      className=""
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.tryckl.com">
                    <img
                      src="/landing_assets/img/google-play-btn.png"
                      className=""
                    />
                  </a>
                </div>
                <div className="col-lg-6">
                  <img
                    src="/landing_assets/img/first-fold-img-1.png"
                    className="ani1 other-position1"
                  />
                  <img
                    src="/landing_assets/img/first-fold-img-2.png"
                    className="ani12 other-position"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            id="demo3"
            className="carousel slide"
            data-ride="carousel"
            data-scroll-section
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-2 m-auto">&nbsp;</div>
                  <div className="col-lg-10 m-auto">
                    <div className="col-lg-12 mar-bot">
                      <h3 className="">
                        One platform, <br />
                        army of agents,
                        <br /> endless opportunities.
                      </h3>
                      <p>
                        - Increase income, close more deals and recruit top
                        agents
                      </p>
                      <p>
                        - Accelerate training and get exposure to the top teams,
                        agents and clients.
                      </p>
                      <p>- Take control of your time and increase efficiency</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 video-bg">
                <div className="video-icon2 text-center">
                  <a
                    className="popup wow fadeInUp"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    href=""
                  >
                    <img src="/landing_assets/img/video-icon.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            id="demo"
            className="carousel slide"
            data-ride="carousel"
            data-scroll-section
          >
            {/* <!-- Indicators --> */}
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            {/* <!-- The slideshow --> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row slider-one">
                  <div className="container">
                    <div className="">
                      <div className="col-lg-12">
                        <h3 className="">Avenue for Experience</h3>
                        <p className="">
                          <b>
                            Acelerate training and get exposure to the <br />{" "}
                            top teams, agents and clients
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row slider-two">
                  <div className="container">
                    <div className="">
                      <div className="col-lg-12 text-right">
                        <h3 className="">Opportunity for Growth</h3>
                        <p className="">
                          <b>
                            Increase Income, close more deals and recruit <br />{" "}
                            top agents.
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row slider-three">
                  <div className="container">
                    <div className="">
                      <div className="col-lg-12">
                        <h3 className="">Potential to Become</h3>
                        <p className="">
                          <b>
                            Make your RE career a realty. Own your time <br />{" "}
                            and your future. Reach higher. <br /> <br />{" "}
                            Become..
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Left and right controls --> */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
          <div className="third-fold" data-scroll-section>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-auto">
                  <h1 className="">Dedicated to Agents</h1>
                  <p>
                    Agents are under-appreciated for the value they bring to a
                    negotiation and the contract management. We are an AFT
                    (Agent-Friendly Tech) company at our core and our focus from
                    the beginning was to make a simple but powerful platform
                    that works on the tech you use. We know the right technology
                    will highlight an agents value, produce consistent income,
                    and pave the way for efficient growth. <br /> <br />
                    That’s the ‘why’ behind Tryckl.
                  </p>

                  <img
                    src="/landing_assets/img/aft2.png"
                    className="img-fluid aft-logo"
                  />
                  <br className="read-more-br" />
                  <a href="/about-us" className="read-more">
                    Read More
                  </a>
                </div>
                <div className="col-lg-6 text-center">
                  <img
                    src="/landing_assets/img/smart-guy.png"
                    className=" img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-mod" data-scroll-container>
            <section className="mod matches" id="reviews" data-scroll-section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 phone" data-scroll>
                    <img src="/landing_assets/img/mobile1.png" />
                  </div>
                  <div className="col-lg-6 feature m-auto" data-scroll>
                    <h3 className="animate-title">
                      01. <br />
                      The hub for <br />
                      getting it done
                    </h3>
                    <p className="animate-text">
                      Every day, agents are coordinating with other agents,{" "}
                      <br />
                      regardless of broker borders, to accomplish <br />
                      more than they ever could themselves.
                      <br /> Call it scale. Call it efficiency. <br />
                      We call it success!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="word single-word word-reviews"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-6"
                data-scroll-target="#reviews"
              ></div>
            </section>

            <section className="mod" id="improve" data-scroll-section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 feature m-auto" data-scroll>
                    <h3 className="animate-title">
                      02. <br />
                      Share the workload
                      <br />
                      far and wide
                    </h3>
                    <p className="animate-text">
                      In mere seconds, push a showing, an open house,
                      <br />
                      a contractor’s need, or whatever is on your plate
                      <br />
                      out to hundreds of agents in your market based on user
                      settings
                      <br />
                      so that it’s a tailored fit for just the right agents.
                    </p>
                  </div>
                  <div className="col-lg-6 phone text-right" data-scroll>
                    <img src="/landing_assets/img/mobile2.png" />
                  </div>
                </div>
              </div>
              <div
                className="word single-word word-improve"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="6"
                data-scroll-target="#improve"
              ></div>
            </section>

            <section className="mod" id="learn" data-scroll-section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 phone" data-scroll>
                    <img src="/landing_assets/img/mobile3.png" />
                  </div>
                  <div className="col-lg-6 feature m-auto" data-scroll>
                    <h3 className="animate-title">
                      03. <br />
                      Seeing is believing
                    </h3>
                    <p className="animate-text">
                      Whether you’re accepting offers or posting them, you’ll
                      appreciate how much Tryckl becomes a part of your digital
                      dependency. <br /> Download the app, sign in, begin
                      enjoying the better way to run your real estate business.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="word single-word word-learn"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-6"
                data-scroll-target="#learn"
              ></div>
            </section>

            <section className="mod" id="community" data-scroll-section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 feature m-auto" data-scroll>
                    <h3 className="animate-title">
                      04. <br />
                      Shaking hands <br />
                      in a digital world
                    </h3>
                    <p className="animate-text">
                      An old fashioned handshake is all it took <br /> and a
                      commitment was made. We’ve partnered with <br /> Stripe
                      payments to facilitate the digital handshake <br />
                      when the work is done and payment <br /> is passed from
                      one user to another.
                    </p>
                  </div>
                  <div className="col-lg-6 phone text-right" data-scroll>
                    <img src="/landing_assets/img/mobile4.png" />
                  </div>
                </div>
              </div>
              <div
                className="word single-word word-community"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="6"
                data-scroll-target="#community"
              ></div>
            </section>
          </div>
          <div className="three-in-fold" data-scroll-section>
            <div className="container" id="three-in-fold">
              <div className="row">
                <div className="col-lg-4 m-auto">
                  <h1 className="">
                    REthink <br />
                    your strategy
                  </h1>
                  <p>
                    Whether on the go, or in the office, the Tryckl platform
                    runs on the devices you use so you can connect from the
                    office, the car, or the field. The only question now is, can
                    real estate keep up with you?
                  </p>
                  <a
                    href="https://apps.apple.com/us/app/tryckl/id1561380058"
                    className="mb-2 d-block"
                  >
                    <img src="/landing_assets/img/big-apple.png" width="90%" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.tryckl.com">
                    <img src="/landing_assets/img/big-google.png" width="90%" />
                  </a>
                </div>
                <div className="col-lg-8 text-center">
                  <img
                    src="/landing_assets/img/three-in-one.png"
                    className=" img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            id="demo2"
            className="carousel slide"
            data-ride="carousel"
            data-scroll-section
          >
            {/* <!-- Indicators --> */}
            <ul className="">
              {/* <!-- <ul className="carousel-indicators"> --> */}
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              {/* <!-- <li data-target="#demo" data-slide-to="1"></li>
			<li data-target="#demo" data-slide-to="2"></li> --> */}
            </ul>

            {/* <!-- The slideshow --> */}
            <div className="carousel-inner container">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-4 m-auto text-white text-center">
                    <img src="/landing_assets/img/summer.png" className="" />

                    <p>
                      <b>Summer Luke</b>
                    </p>
                    <p>Keller Williams Westfield</p>
                  </div>
                  <div className="col-lg-8 m-auto text-white">
                    <p className="demo2">
                      " I was a new agent trying to get my real estate business
                      going. I started picking up offers to show properties and
                      meet with the clients of the #1 agent in my area. <br />
                      After multiple successfully completed offers, I was
                      invited to join that very team and I broke six figures in
                      my first year! "{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- <div className="carousel-item">
				<div className="row">
					<div className="col-lg-4 m-auto text-white text-center">
					<img src="/landing_assets/img/robert.png">
					<p>Robert Jackson</p>
					<p>CEO, Red cliff mountain</p>
					</div>
					<div className="col-lg-8 m-auto text-white">
					<p className="demo2">" Donec euismod vulputate augue, ac sagittis lacus lobortis id. Donec varius velit eget interdum<br> semper. Mauris quis nunc eget blandit ac quam elit finibus semper eu non tellus. <br>
		Donec at eros sed ante. </p>
					</div>
				</div>
			</div>
			<div className="carousel-item">
				<div className="row">
					<div className="col-lg-4 m-auto text-white text-center">
					<img src="/landing_assets/img/robert.png">
					<p>Robert Jackson</p>
					<p>CEO, Red cliff mountain</p>
					</div>
					<div className="col-lg-8 m-auto text-white">
					<p className="demo2">" Donec euismod vulputate augue, ac sagittis lacus lobortis id. Donec varius velit eget interdum<br> semper. Mauris quis nunc eget blandit ac quam elit finibus semper eu non tellus. <br>
		Donec at eros sed ante. </p>
					</div>
				</div>
			</div> --> */}
            </div>

            {/* <!-- Left and right controls --> */}
            <a
              className="carousel-control-prev"
              href="#demo2"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a
              className="carousel-control-next"
              href="#demo2"
              data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
        {/* <!--END LANDING PAGE --> */}

        <div id="scroll1" data-scroll-container style="display: none;">
          <div className="first-fold" data-scroll-section>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-auto">
                  <h1>It’s simple.</h1>

                  <p>
                    Do what you’re already doing - <br />
                    only faster, easier and more efficiently!
                  </p>
                  <a
                    href="https://apps.apple.com/us/app/tryckl/id1561380058"
                    className="mr-3"
                  >
                    <img
                      src="/landing_assets/img/app-store-btn.png"
                      className=""
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.tryckl.com">
                    <img
                      src="landing_assets/img/google-play-btn.png"
                      className=""
                    />
                  </a>
                </div>
                <div className="col-lg-6 text-center">
                  <img
                    src="/landing_assets/img/works-mobile.png"
                    className="how-mob"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works" data-scroll-section>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 text-center">
                  <div className="blue-rounded">
                    <img src="/landing_assets/img/round-1.png" className="" />
                  </div>
                  <h4>Create a Listing</h4>
                  <p>
                    Select the type (showing, open house, etc.), the location,
                    and the ‘when’ of a job to be done.
                  </p>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="blue-rounded">
                    <img src="/landing_assets/img/round-2.png" className="" />
                  </div>
                  <h4>The Listing is Matched & Accepted</h4>
                  <p>
                    A Listing is matched with user settings and is accepted as a
                    Card by another user.
                  </p>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="blue-rounded">
                    <img src="/landing_assets/img/round-3.png" className="" />
                  </div>
                  <h4>Complete the Card</h4>
                  <p>
                    Accepted listings become cards that users complete based on
                    the time and date scheduled.
                  </p>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="blue-rounded">
                    <img src="/landing_assets/img/round-4.png" className="" />
                  </div>
                  <h4>Payment Sent</h4>
                  <p>
                    When a card is completed, payment is approved via Stripe and
                    the work is done!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer" data-scroll-section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <img src="/landing_assets/img/footer-logo.png" className="" />
                <p>Tryckl, LLC</p>
                {/* <!-- <p>987 California str, Suite 111<br>
		San Francisco, CA 12345</p>
		<p>1-123-456-7890<br>
		info@tryckl.com</p> --> */}
              </div>
              <div className="col-lg-3">
                <h4>Navigate</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/how-it-works">How it Works</a>
                  </li>
                  {/* <!-- <li id="scrolltop" ><a onclick=scrolltop()>Services</a></li> -->
					<!-- 	<li><a href="javascript:void(0)" onclick="gotoTestimonial();">Testimonials</a></li> --> */}
                </ul>
              </div>
              <div className="col-lg-3">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <a href="/about-us">About Company</a>
                  </li>
                  <li>
                    <a href="/terms-n-condition">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy </a>
                  </li>
                  <li>
                    <a href="/payment-policy">Payment Policy</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h4>Downloads</h4>
                <ul>
                  <li>
                    <a href="https://apps.apple.com/us/app/tryckl/id1561380058">
                      {" "}
                      <img
                        src="/landing_assets/img/footer-app-store.png"
                        className=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://play.google.com/store/apps/details?id=com.tryckl.com">
                      {" "}
                      <img
                        src="/landing_assets/img/footer-google-play.png"
                        className=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body">
                {/* <!-- <iframe width="100%" height="400" src="https://www.youtube.com/embed/zFw6A9LkbpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> --> */}

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/UUyIaS_CHKA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPAge;
