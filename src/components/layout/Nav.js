import React from "react";
import "./nav.css";
export default function Nav() {
  return (
    <>
      <div
        className="row justify-content-center "
        style={{ marginLeft: "15%", marginRight: "14%" }}
      >
        <div className="col-6">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <img src="https://static.wixstatic.com/media/284930_33f66871888440399552121a9551ec74.jpg/v1/fill/w_96,h_122,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/284930_33f66871888440399552121a9551ec74.jpg" />&trade;
                  <h3 style={{ marginLeft: "7%" , color:"gray" }}>
                    NUK 9 Information Security Auditors LLP&trade;
                  </h3>
                </div>
              </div>
            </div>
          </nav>
          <h6 style={{ marginLeft: "25%" }}>
            Governance | Risk | Compliance | Security | Coaching Destination for
            all InfoSec Compliances
          </h6>
        </div>
        <div className="col-6">
          <div class="container">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </>
  );
}
