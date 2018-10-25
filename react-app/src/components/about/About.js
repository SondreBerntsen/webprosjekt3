import React, { Component } from "react";
import Navbar from "../Navbar";
import "../../styles/about.css";

class About extends Component {
  state = {
    aboutFestival: {
      vision:
        "Drammen Sacred Music Festival er et møtested for å dele musikk, bilder og fortellinger fra ulike tradisjoner. Vi tror musikk og kunst generelt kan uttrykke menneskets mest grunnleggende lengsler og overstige språklige, nasjonale, kulturelle, ideologiske, rasemessige og religiøse grenser. I konsertene presenterer vi lokale og gjestende artister som har noe viktig på hjertet. Seminarer, foredrag, filmer og workshops er rammen rundt refleksjon, dialog og læring.\n\nDrammen-området er kjent for sin internasjonale befolkning og festivalen legger stor vekt på dialog og å involvere ulike grupperinger i festivalen. Festivalens visjon er å legge til rette for møter som berører, beveger og skaper mening, og har ambisjon om å være en sentral festival i dette landskapet.",

      greeting:
        "Velkommen til Drammen Sacred Music Festival, 15. – 23. september 2018!",

      collabPublicDescr:
        "Festivalen kan gjennomføres på grunn av den støtten som gis fra en rekke offentlige instanser. De største er Drammen Kommune Interkultur, Norsk Kulturråd og Buskerud Fylkeskommune.",

      collabLocalDescr:
        "Like viktig er samarbeidet med lokale institusjoner for gjennomføring av de ulike arrangementene. Festivalen har siden starten vært knyttet til området ved Union og Papirbredden ved Ypsilon. Union Scene er en viktig samarbeidspartner.",

      organization:
        "Drammen og omegn tros- og livssynsforum (DoTL) startet festivalen i 2010 sammen med Drammen kommune, Interkultur. Initiativtakere og pådrivere var Arve Vannebo og Ricardo Sanchez (Drammen kommune Interkultur) og Ivar Flaten (sokneprest Fjell menighet). Fra 2012 har festivalen vært organisert som en forening der DoTL er representert i styret sammen med lokale, regionale og nasjonale samarbeidspartnere. Drammen kommune er en sentral samarbeidspartner i programmering og produksjon.\n\nStyret for DSMF består av Sharee Loren, Tal Coleman, Terje-Brun Pedersen, Ingvild Jacobsen, Reidun Svabø og Ivar Flaten som er styreleder.\n\nFestivalen har gjennom årene hatt samarbeid med fagpersoner i programarbeidet: Ricardo Sanchez (tidl. produsent Interkultur)Jørgen Nøvik (musiker, billedkunstner m.m),  Svanhild Rohdin (billedkunstner), Fernando Sallum (musiker), Tal Zimra Coleman (musiker), Svein Westad (musiker), Erik Hillestad (Kirkelig Kulturverksted) og Ingebrigt Håker Flaten (musiker). Henrik Melius (Spiritus Mundi, Malmø) og Eli Borchgrevink (Buskerud teaterverksted – tidligere Trap- og Du Store Verden) er eksterne konsulenter og samarbeidspartnere."
    },

    collaborators: [
      {
        name: "Drammen kommune Interkultur",
        type: "public"
      },
      {
        name: "Norsk Kulturråd",
        type: "public"
      },
      {
        name: "Drammen prosti / Fjell menighet",
        type: "public"
      },
      {
        name: "Buskerud fylkeskommune",
        type: "public"
      },
      {
        name: "Kulturdepartementet",
        type: "public"
      },
      {
        name: "Tunsberg bispedømmekontor",
        type: "public"
      },
      {
        name: "Drammen kirkelige fellesråd",
        type: "public"
      },
      {
        name: "Kari Ulleberg",
        type: "public"
      },
      {
        name: "Drammen kommune Interkultur",
        type: "local"
      },
      {
        name: "Papirbredden AS",
        type: "local"
      },
      {
        name: "Comfort Hotel Union Brygge",
        type: "local"
      },
      {
        name: "Drammen Filmklubb",
        type: "local"
      },
      {
        name: "Mangfoldhuset, Drammen",
        type: "local"
      },
      {
        name: "Drammen og omegn tros- og livssynsforum (DoTL)",
        type: "local"
      },
      {
        name: "Introduksjonssenteret",
        type: "local"
      },
      {
        name: "Biblioteket i Drammen",
        type: "local"
      },
      {
        name: "Tunsberg bispedømmeråd",
        type: "local"
      },
      {
        name: "Drammen kirkelige fellesråd",
        type: "local"
      },
      {
        name: "Fjell menighetsråd",
        type: "local"
      },
      {
        name: "Strømsø menighetsråd",
        type: "local"
      },
      {
        name: "Strømsgodset menighetsråd",
        type: "local"
      },
      {
        name: "Bragernes menighetsråd",
        type: "local"
      },
      {
        name: "Byen vår Drammen",
        type: "local"
      },
      {
        name: "Buskerud Innvandrerråd",
        type: "local"
      },
      {
        name: "Byavisa Drammen",
        type: "local"
      }
    ],

    reports: [
      {
        id: "1",
        name: "festivalrapport 2012",
        link:
          "http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/08/DSMF_12_rapport_lo2012.pdf",
        language: "norsk"
      },
      {
        id: "2",
        name: "festivalrapport 2013",
        link:
          "http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/08/DSMF_Rapport_lo2013.pdf",
        language: "norsk"
      },
      {
        id: "3",
        name: "festivalrapport 2013",
        link:
          "http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/08/DSMF_Report_lo2013.pdf",
        language: "english"
      },
      {
        id: "4",
        name: "festivalrapport 2014",
        link:
          "http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/08/DSMF_Rapport-final-31.10.14.pdf",
        language: "norsk"
      },
      {
        id: "5",
        name: "festivalrapport 2015",
        link:
          "http://w134760-www.php5.dittdomene.no/wp-content/uploads/2015/06/DSMF-Report-2015.pdf",
        language: "norsk"
      },
      {
        id: "6",
        name: "festivalrapport 2016",
        link:
          "http://www.drammensacred.no/wp-content/uploads/2015/06/DSMF_Rapport2016.pdf",
        language: "norsk"
      },
      {
        id: "7",
        name: "festivalrapport 2017",
        link:
          "https://www.drammensacred.no/wp-content/uploads/2018/07/Rapport-DSMF-2017_norsk-1.pdf",
        language: "norsk"
      }
    ]
  };

  render() {
    /*  the constant "reports" iterates through the reports 
        and outputs each report as a list element */
    const reports = this.state.reports.map(report => (
      <li key={report.id}>
        <a href={report.link} target="_blank" rel="noopener noreferrer">
          {report.name}
        </a>
        _{report.language}
      </li>
    ));

    /*  the constant "publicCollaborators" iterates through the 
        collaborators and outputs each collaborator that has a 
        type equal to "public" as a list element */
    const publicCollaborators = this.state.collaborators.map(function(
      collaborator
    ) {
      if (collaborator.type === "public") {
        return (
          <li key={collaborator.name} collabtype={collaborator.type}>
            <i className="fas fa-circle" />
            {collaborator.name}
          </li>
        );
      }
      return publicCollaborators;
    });

    /* the constant "localCollaborators" iterates through the 
      collaborators and outputs each collaborator that has a 
      type equal to "local" as a list element */
    const localCollaborators = this.state.collaborators.map(function(
      collaborator
    ) {
      if (collaborator.type === "local") {
        return (
          <li key={collaborator.name} collabtype={collaborator.type}>
            <i className="far fa-circle" />
            {collaborator.name}
          </li>
        );
      }
      return localCollaborators;
    });

    return (
      <div>
        <Navbar />
        <div className="container">
          <div classNme="row">
            <div className="about-title">
              <h2 className="center title">Om festivalen</h2> <hr />
            </div>
            <div className="textblock">
              <h4>Visjon</h4>
              <p>{this.state.aboutFestival.vision}</p>
              <p>
                <strong>{this.state.aboutFestival.greeting}</strong>
              </p>
              <hr />
            </div>
            <div className="textblock">
              <h4>Samarbeidspartnere</h4>
              <p>{this.state.aboutFestival.collabPublicDescr}</p>
              <ul>{publicCollaborators}</ul>
              <p>{this.state.aboutFestival.collabLocalDescr}</p>
              <ul>{localCollaborators}</ul>
              <hr />
            </div>
            <div className="textblock">
              <h4>Organisering</h4>
              <p>{this.state.aboutFestival.organization}</p>
              <hr />
            </div>
            <div className="textblock">
              <h4>Rapporter fra tidligere festivaler</h4>
              <ul>{reports}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
