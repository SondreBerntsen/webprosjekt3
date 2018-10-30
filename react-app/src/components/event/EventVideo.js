//EventVideo page

//https://codepen.io/vincentorback/pen/KaqbLK
import React, { Component } from "react";
import "../../styles/eventvideo.css";

class EventVideo extends Component {
  render() {
    const url = `https://www.youtube.com/embed/${
      this.props.url
    }?feature=oembed&autoplay=1&hd=1`;
    const videoElements = document.querySelectorAll(".js-video");
    const activeClass = "is-active";
    const loadingClass = "is-loading";
    const videoWrapSelector = ".js-videoWrap";
    const videoPlaceholderSelector = ".js-videoPlaceholder";

    function loadVideo(event) {
      let video = event.currentTarget;
      video.removeEventListener("click", loadVideo, false);
      video.classList.add(activeClass, loadingClass);

      let wrap = video.querySelector(videoWrapSelector);
      let placeholder = video.querySelector(videoPlaceholderSelector);
      let videoUrl = video.getAttribute("data-url");
      let videoClasses = video.getAttribute("data-class");

      let iframe = stringToElements(
        `<iframe
      class="${videoClasses}"
      src="${videoUrl}"
      frameborder="0"
      allowfullscreen
    />`
      );

      iframe.onload = () => {
        video.classList.remove(loadingClass);
        window.setTimeout(() => {
          placeholder.parentNode.removeChild(placeholder);
        });
      };

      wrap.appendChild(iframe);
    }

    Array.from(videoElements, video => {
      video.addEventListener("click", loadVideo, false);
    });

    function stringToElements(string) {
      const div = document.createElement("div");
      div.innerHTML = string;

      if (div.childNodes.length > 1) {
        return div.childNodes;
      }

      return div.firstChild;
    }
    /*checks if event has youtube link or not*/
    const hasVideo =
      this.props.url !== "" ? (
        /*if event has youtube link*/
        <div>
          <div
            className="Video js-video"
            data-url={url}
            data-class="Video-iframe"
            data-width="1280"
            data-height="720"
          >
            <div className="Video-wrap js-videoWrap">
              <a className="Video-title" href="full-url-goes-here">
                {this.props.title}
              </a>
              <img
                className="Video-placeholder js-videoPlaceholder"
                src={this.props.placeholderImage}
                alt=""
              />
              <svg
                className="Video-playButton"
                viewBox="0 0 136 198"
                width="50"
                height="80"
              >
                <polygon fill="currentColor" points="136 102 0 198 0 0" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        /*if the event has no youtube link*/
        <div>
          <div data-width="1280" data-height="720">
            <div className="Video-wrap js-videoWrap">
              <img
                className="Video-placeholder js-videoPlaceholder"
                src={this.props.placeholderImage}
                alt=""
              />
              <svg
                className="Video-playButton"
                viewBox="0 0 136 198"
                width="50"
                height="80"
              />
            </div>
          </div>
        </div>
      );

    return <div>{hasVideo}</div>;
  }
}

export default EventVideo;
