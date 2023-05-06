import React from "react";
import "./Home.css";
import page from '../page.png'
import page2 from '../page2.png'
import page3 from '../page3.png'

export default function Home() {
  const data = [
    {
      image:
        "https://static.wixstatic.com/media/284930_0a22b9f1c68544b8b0ccf8867c0fa557.png/v1/fill/w_122,h_99,al_c,q_85,enc_auto/284930_0a22b9f1c68544b8b0ccf8867c0fa557.png",
      name: "System Audit (ISAs)",
    },
    {
      image:
        "https://static.wixstatic.com/media/284930_62bf716ee6ed403aab5b720586bb3d5e.png/v1/fill/w_118,h_107,al_c,q_85,enc_auto/284930_62bf716ee6ed403aab5b720586bb3d5e.png",
      name: "Risk Assessment (ISRAs)",
    },
    {
      image:
        "https://static.wixstatic.com/media/284930_0af5a1be620c41e6b305975716391fa2.png/v1/fill/w_119,h_111,al_c,q_85,enc_auto/284930_0af5a1be620c41e6b305975716391fa2.png",
      name: "System Infiltration (ISIAs)",
    },
    {
      image:
        "https://static.wixstatic.com/media/284930_476ab8e028ff41d0a2e2078623ddbc0f.png/v1/fill/w_117,h_105,al_c,q_85,enc_auto/284930_476ab8e028ff41d0a2e2078623ddbc0f.png",
      name: "GRCS (ISIACs)",
    },
    {
      image:
        "https://static.wixstatic.com/media/284930_3c5fb42cec4848e2bf9bb4707aab3061.png/v1/fill/w_155,h_135,al_c,q_85,enc_auto/284930_3c5fb42cec4848e2bf9bb4707aab3061.png",
      name: "Security Coaching (ISCs)",
    },
  ];
  return (
      <>
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={page} class="d-block w-100" alt="First Slide"/>
    </div>
    <div class="carousel-item">
      <img src={page2} class="d-block w-100" alt="Second Slide"/>
    </div>
    <div class="carousel-item">
      <img src={page3} class="d-block w-100" alt="Third Slide"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> <button style={{marginLeft:"70%",marginTop:"-5%",zIndex:"6", position:"fixed",paddingTop:5,backgroundColor:"skyblue",color:"white",padding:"0.8%",outline:"none",border:"none" ,borderRadius:"15px",fontSize:"1.5rem" }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> Let's Chat</button>
      <div style={{ marginLeft: "15%", marginRight: "14%" }}>
        <div >
          <h1 style={{ textAlign: "center" ,paddingTop:5 }}>Destination for all InfoSec Compliances</h1>
        </div>
        <div className="row justify-content-between pt-5">
          <div className="col-5 Company"><br/><br/>
            <h1>Company...</h1>
            <p>
              Information Systems plays an imperative role to make
              organizational success and create a brand image in minds of
              customers
              <br />
              <br />
              NUK 9 Information Security Auditors LLP, commonly referred as,
              “NUK 9 Auditors”, leads into it.
              <br />
              <br />
              India’s first LLP Company, driven professionally and fully
              Focused, Governed and Managed in the arena of Information Systems
              Security, GRC, Certification and Training Assurance Services
            </p>
          </div>
          <div className="underline_tag3 col-2"></div>
          <div className="col-5 Our_strength">
            <br />
                      <br />
                      <br />
            <br />
            <p>
              Our Track record of extensive and exclusive 20+ years hands-on
              expertise in the field of IT Assurance, Consulting and
              Certification Assessment Services with vide industry and
              engagement exposures. Having consultants with industry reputed and
              globally accepted qualifications and certifications.
              <br />
              <br />
              At NUK 9 Deliveries is always a Top Priority Our Expertise
              guarantees 100% improvement on the client’s Process, Security and
              Practices (PSP)
            </p>
            <br />
            <br />
            <h1 style={{textAlign:"end"}}>Our Strength...</h1>
                  </div>
                  
              </div>
              <br/><br/>
        <h2 style={{textAlign:"end",textDecoration:"underline",color:"red"}}>Our Detailed Profile</h2>
        <div className="underline_tag2" />
        <h3
          style={{
            textDecoration: "underline",
            textAlign: "center",
            color: "grey",
            fontWeight: "bold",
          }}
        >
          {" "}
          Our Portfolio of Services
        </h3>

        <div className="underline_tag" />
        <div className="container text-center " style={{ marginTop: 15 }}>
          <p style={{ textAlign: "justify", fontSize: "18px", color: "grey" }}>
            Your Governance, Risk, Compliance and Information Security services
            under on roof, that not only enables you to achieve the needs of the
            stake holders but also shocast Risk on Security Investments (ROSI)
            to the Top Management
          </p>
        </div>
        <div className="container">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 justify-content-md-center">
            {data.map((e) => (
              <div className="col">
                <img src={e.image} alt={e.name} />
                <p
                  style={{
                    fontFamily: "nimbus-sans-tw01con,sans-serif",
                    fontSize: "25px",
                    color: "gray",
                  }}
                >
                  {e.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid black",
            backgroundColor: "red",
            padding: 2,
            color: "white",
          }}
        >
          <p>
            (C) NUK 9 Information Security Auditors LLP &trade;
            <span style={{ marginLeft: "50%" }}>Disclaimer</span>
          </p>
        </div>
      </div>
    </>
  );
}
