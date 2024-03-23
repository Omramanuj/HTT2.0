/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function TransparentAdminFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li >
              
                Team Spark
              
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-transparent-footer"
            target="_blank"
          >
            Spark
          </a>
          
        </div>
      </Container>
    </footer>
  );
}

