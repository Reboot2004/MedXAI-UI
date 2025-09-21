/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer
      className="footer"
      // data-background-color="#191970"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#191970",
      }}
    >
      <Container>
        <nav style={{ color: "white" }}>
          <ul>
            <li>
              <a href="/index">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </nav>
        <div style={{ color: "white" }} className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a href="/about">SegXperts</a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
