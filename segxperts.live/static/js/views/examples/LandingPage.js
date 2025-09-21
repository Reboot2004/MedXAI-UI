import React, { useRef } from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DarkFooter from "components/Footers/DarkFooter";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const citationRef = useRef(null);

  const copyCitation = () => {
    const textArea = document.createElement("textarea");
    textArea.value = citationRef.current.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            {/* <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">About our Application</h2>
                <h5 className="description" style={{ color: 'grey', fontWeight: 'bold', fontStyle: 'italic' }}>
                  Welcome to SegXperts, which employs our novel algorithm to segment cervical
                  cell images using Explainable Artificial Intelligence (XAI). Alongside accessing segmentation masks,
                  unlock deeper insights with XAI heatmaps and essential cell descriptors like the N:C ratio.
                </h5>
                <h5 className="description" style={{ color: '#333' }}>
                  This application was developed as a part of our Final Year Research
                  project at the Department of Computer Science and Engineering, University of Moratuwa.
                </h5>
              </Col>
            </Row> */}
            <div
              className="section section-team text-center"
              style={{
                paddingTop: "20px",
                paddingRight: "0",
                paddingLeft: "0",
                paddingBottom: "70px",
              }}
            >
              <Container>
                <h2 className="title">Here is Our Team</h2>
                <div className="team">
                  <Row>
                    <Col md="4">
                      <div className="team-player">
                        <img
                          alt="..."
                          className="rounded-circle img-fluid img-raised"
                          src={require("assets/img/prathushan.jpg")}
                        ></img>
                        <h4 className="title">Prathushan Inparaj</h4>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "mailto:inparaj.19@cse.mrt.ac.lk";
                          }}
                        >
                          <i className="fas fa-envelope"></i> {/* Gmail icon */}
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              "https://www.linkedin.com/in/prathushan-inparaj/",
                              "_blank"
                            );
                          }}
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="team-player">
                        <img
                          alt="..."
                          className="rounded-circle img-fluid img-raised"
                          src={require("assets/img/niru.jpg")}
                        ></img>
                        <h4 className="title">Niruthikka Sritharan</h4>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "mailto:niruthikka.19@cse.mrt.ac.lk";
                          }}
                        >
                          <i className="fas fa-envelope"></i> {/* Gmail icon */}
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              "https://www.linkedin.com/in/niruthikka-sritharan/",
                              "_blank"
                            );
                          }}
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="team-player">
                        <img
                          alt="..."
                          className="rounded-circle img-fluid img-raised"
                          src={require("assets/img/nishaanthini.png")}
                        ></img>
                        <h4 className="title">Nishaanthini Gnanavel</h4>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "mailto:nishaanthini.19@cse.mrt.ac.lk";
                          }}
                        >
                          <i className="fas fa-envelope"></i> {/* Gmail icon */}
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              "https://www.linkedin.com/in/nishaanthini-gnanavel-a5950176/",
                              "_blank"
                            );
                          }}
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ justifyContent: "center" }}>
                    <Col md="4">
                      <div className="team-player">
                        <img
                          alt="..."
                          className="rounded-circle img-fluid img-raised"
                          src={require("assets/img/dulani_madam.jpg")}
                        ></img>
                        <h4 className="title">Prof. Dulani Meedeniya</h4>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "mailto:dulanim@cse.mrt.ac.lk";
                          }}
                        >
                          <i className="fas fa-envelope"></i> {/* Gmail icon */}
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              "https://www.linkedin.com/in/dulani-meedeniya-015b23a1/",
                              "_blank"
                            );
                          }}
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
                      </div>
                    </Col>

                    <Col md="4">
                      <div className="team-player">
                        <img
                          alt="..."
                          className="rounded-circle img-fluid img-raised"
                          src={require("assets/img/pratheepan_sir.jpg")}
                        ></img>
                        <h4 className="title">Dr. Pratheepan Yogarajah</h4>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "mailto:p.yogarajah@ulster.ac.uk";
                          }}
                        >
                          <i className="fas fa-envelope"></i> {/* Gmail icon */}
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              "https://www.linkedin.com/in/pratheepan-yogarajah-92359117/",
                              "_blank"
                            );
                          }}
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  {/* <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/aboutus_2.png") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div> */}
                  {/* <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/aboutus_3.PNG") + ")",
                    }}
                  ></div> */}
                </Col>
                <Col md="5">
                  {/* <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/aboutus_2.png") + ")",
                    }}
                  ></div> */}
                </Col>
              </Row>
            </div>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Our Research Contributions</h2>
                <p>
                  In our research journey, we've shared insights at esteemed
                  conferences, with some work published in IEEE Xplore. Explore
                  our contributions at the links provided. If you find our app
                  helpful, citing our papers would further academic discourse.
                  Thanks for joining us!
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h5 className="description">
                  <a
                    href="https://ieeexplore.ieee.org/document/10499737"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Interpretable Cervical Cell Classification: A Comparative
                    Analysis
                  </a>
                </h5>
                <div className="code-sample">
                  <button className="copy-button" onClick={copyCitation}>
                    <i className="fas fa-clipboard"></i>
                  </button>
                  <pre className="citation" style={{ textAlign: "left" }}>
                    <code ref={citationRef}>
                      {`N. Gnanavel, P. Inparaj, N. Sritharan, D. Meedeniya and P. Yogarajah, "Interpretable Cervical Cell Classification: A Comparative Analysis," 
2024 4th International Conference on Advanced Research in Computing (ICARC), Belihuloya, Sri Lanka, 2024, pp. 7-12, 
doi: 10.1109/ICARC61713.2024.10499737.`}
                    </code>
                  </pre>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Contact Our Team</h2>
            <p>
              Have questions or feedback? Reach out to us! We're eager to hear
              from you and assist in any way we can.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingBottom: "90px" }}>
          <Col className="ml-auto mr-auto text-center" md="8">
            <Button
              className="btn-icon btn-round btn-lg"
              color="info"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:nishaanthini.19@cse.mrt.ac.lk";
              }}
            >
              <i className="fas fa-envelope"></i> {/* Gmail icon */}
            </Button>
            <Button
              className="btn-icon btn-round btn-lg"
              color="info"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://github.com/gnishaanthini", "_blank");
              }}
            >
              <i className="fab fa-github"></i>
            </Button>
          </Col>
        </Row>
        {/* <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
