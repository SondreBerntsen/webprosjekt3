import React, { Component } from "react";
import "../styles/footer.css";

class Footer extends Component {
  state = {
    socialMedias: [
      {
        name: "Twitter",
        link: "https://twitter.com/drammensacred",
        icon: "fab fa-twitter"
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/Drammensacred",
        icon: "fab fa-facebook-f"
      },
      {
        name: "Pinterest",
        link: "https://no.pinterest.com/soulfullbags/?autologin=true",
        icon: "fab fa-pinterest"
      }
    ]
  };
  render() {
    /* The constant socialMediaList iterates through the array socialMedias 
        and outputs the properties we want as a template */
    const { socialMedias } = this.state;
    const socialMediaList = socialMedias.map(media => {
      return (
        <div className="social-media col" key={media.name}>
          <a href={media.link}>
            <i className={media.icon} />
            <p>{media.name}</p>
          </a>
        </div>
      );
    });
    // returning the templates sequentially
    return (
      <footer className="footer row">
        <div className="col-2">
          <p className="copyright">Copyright @ Drammen Sacred</p>
        </div>
        <div className="col-8 offset-1 row">{socialMediaList}</div>
      </footer>
    );
  }
}

export default Footer;
