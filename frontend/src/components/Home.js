import React, { Component } from "react";
import { Button, Box, Paragraph, Heading } from "grommet";
import { Group, Login } from "grommet-icons";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

export class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <Box direction="column" justify="center"  gap="0px" width="100%">
        <Box direction="row" className="wrapper">
          <Box direction="column" width="50%" paragraph="small">
            <Heading level="2" size="medium">Willkommen beim Online-Tool zur Durchführung einer 6-3-5-Session</Heading>
            <Paragraph size="small">In wenigen Schritten kann man mit diesem Tool gemeinsam tolle Ideen entwickeln. Dazu muss nur jeder Teilnehmer ein eigenes Gerät mitbringen und dann kann es eigentlich auch schon losgehen.</Paragraph>
          </Box>
          <Box direction="column" width="50%">
          <img height="auto" width="100%" src="\635.png" alt="Bild 635 Methode"></img>
          </Box>
        </Box>
        <Box
          direction="row-responsive"
          justify="center"
          pad="xlarge"
          gap="medium"
        >
    
          <Box pad="large" align="center" background="light-6" round gap="small">
            <Group size="large" color="dark-2" />
            <Link to="/topic">
              <Button primary label="Schnelle Runde erstellen" hoverIndicator='true' />
            </Link>
          </Box>

          <Box pad="large" align="center" background="light-6" round gap="small">
            <Login size="large" color="dark-2" />
            <Link to="/playerView">
              <Button primary label="Runde beitreten" hoverIndicator='true'/>
            </Link>
          </Box>
        </Box>
        <Box direction="column" justify="center" pad="large"  width="100%" background="accent-2">
          <Paragraph size="small" paragraph="xxlarge">
            <h3>Über die 6-3-5 Methode</h3>
            Die 6-3-5 Methode kann man einsetzen um gemeinsam in einem festgesetzten Zeitrahmen Ideen zu entwickeln. <br></br>
            Standardmäßig führt man eine Session mit 6 Teilnehmern durch, die jeweils 3 Ideen in 3 min entwickeln. Nach Ablauf dieser 3 Minuten wird das Blatt einmal im Kreis weitergereicht und man hat 3min Zeit um die Ideen des Vorgängern mit eigenen Ideen und Anmerkungen zu ergänzen. Das Weitergeben und Weiterentwickeln wird insgesamt 5 mal durchgeführt. Daher 6-3-5. 
          </Paragraph>
          <Paragraph size="small" paragraph="xxlarge">
            <h3>Über das Tool</h3>
            Mit unserem Tool kann man einfach eine 6-3-5-Session durchführen, mit beliebig vielen Teilnehmern und beliebig langer Rundenzeit. Es muss bloß jeder Teilnehmer ein eigenes Gerät mitbringen und einen Internetzugang haben.
            Zur Durchführung einfach eine schnelle Session erstellen, die Fragestellung, die Teilnehmeranzahl und die Rundenzeit angeben und dann ist die Session eröffnet. Danach wird ein Seite angezeigt mit einem Link, den die Teilnehmer besuchen und dem Code, den sie eingeben müssen. 
            Nach Eingabe des Codes und einem Namen, ist der Teilnehmer auch schon in der virtuellen Runde. Der Ablauf danach ist analog zu der Papierversion und dem vorher beschriebenen Vorgehen. Nun trägt jeder Teilnehmer seine Ideen ein, die Zeit läuft sobald die Session gestartet wurde und ist bei allen Teilnehmern synchronisiert und sichtbar. 
            Nach Ablauf der (standardmäßigen) 3min wird das "eigene Blatt" automatisch an den Nachbarn weitergeben und man kann die nächste Zeile ausfüllen.  
            Nachdem die Session beendet ist, werden alle ausgefüllten Tabellen automatisch gesammelt und derjenige, der die Runde erstellt hat, kann alle einsehen. 
          </Paragraph>
        </Box>
        <Box background="accent-3">
          <Box id="footer" pad="medium" align="center" color="white" size="small" direction="row">
            <Box direction="row" width="auto" style={{marginLeft:"auto",marginRight:"auto"}}>
              <img style={{marginLeft:"auto",marginRight:"20px"}} width="150px" height="auto" src="\logo.png" alt="Logo der Hochschule Kaiserslautern"></img>
              <Box style={{marginTop:"auto",marginBottom:"0"}}>
                <a href="https://www.hs-kl.de/datenschutz/">Datenschutzerklärung der Hochschule Kaiserslautern</a><br></br>
                <a href="https://www.hs-kl.de/impressum/">Impressum der Hochschule Kaiserslautern</a>
              </Box>
            </Box>
          </Box>
        </Box>       
      </Box>
     
    );
  }
}

export default withTranslation()(Home);
