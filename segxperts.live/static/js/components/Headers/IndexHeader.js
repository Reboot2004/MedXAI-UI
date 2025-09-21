/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Button, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (window.innerWidth > 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });

  return (
    <>
      <div className="page-header" filter-color="green">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg_new_1.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand" style={{ marginTop: "300px" }}>
            {/* <img
              alt="..."
              className="n-logo"
              src={require("assets/img/large-Lp-Hb_BH1-transformed.png")}
              style={{ width: "475px" }}
            ></img> */}
            <h1 style={{ fontWeight: 500 }}>SegXperts</h1>

            <Row style={{ marginLeft: "110px" }}>
              <Col md="10">
                <Button
                  className="btn-round"
                  type="button"
                  onClick={() => navigate("/segmentation")}
                  style={{
                    marginLeft: "20px",
                    backgroundColor: "#06299b",
                    width: "200px",
                    height: "60px",
                    fontSize: "15px",
                  }}
                >
                  Start SegXperts
                </Button>
                <Button
                  className="btn-round"
                  type="button"
                  onClick={() => navigate("/usermanual")}
                  style={{
                    marginLeft: "20px",
                    backgroundColor: "#000147",
                    width: "200px",
                    height: "60px",
                    fontSize: "15px",
                  }}
                >
                  User Manual
                </Button>
              </Col>
            </Row>
            {/* <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
