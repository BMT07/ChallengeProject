import React, { useEffect } from "react";
import { Row, Container } from "reactstrap";

function DemoFooter() {
  useEffect(() => {
    const script = document.createElement("script");

    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '65b96066af9962c75637baec' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };

    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#" target="_blank">
                  Bricolage
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Reparation
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Environnement
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © Copyright{new Date().getFullYear()}, made {" "}
            </span>
          </div>
        </Row>
        <Row>
          <div className="col-md-6">
            <h1>À propos de nous</h1>
            <p>
              Issus d'écoles d'ingenieurs et de management nous sommes des jeunes entrepreneurs et dynamiques et nous avons une vision claire qui est celle de redonner vie à nos appareils et protéger l'environnement
            </p>
            {/* Ajoutez d'autres informations sur votre entreprise ici */}
          </div>
          {/* Ajoutez d'autres colonnes ou composants au besoin */}
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
