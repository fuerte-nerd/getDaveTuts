import React from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from "react-share"

import "./Share.scss"

export default function Share(props) {

  const titleHack = (e)=>{
      e.currentTarget.removeAttribute('title')
  }


  return (
      <div className="post-social animated fadeIn">
        <FacebookShareButton
          url={props.metaData.url}
          className="button facebook"
        >
          <span className="icon">
            <i className="fab fa-facebook-f d-block" />
          </span>
        </FacebookShareButton>
        <TwitterShareButton
          url={props.metaData.url}
          className="button twitter"
          title={props.metaData.title}
          onMouseOver={titleHack}
          onFocus={titleHack}
          // via={socialConfig.twitterHandle.split("@").join("")}
          // hashtags={tags}
        >
          <span className="icon">
            <i className="fab fa-twitter d-block" />
          </span>
        </TwitterShareButton>
        <LinkedinShareButton
          url={props.metaData.url}
          className="button linkedin"
          title={props.metaData.title}
          onMouseOver={titleHack}
          onFocus={titleHack}
        >
          <span className="icon">
            <i className="fab fa-linkedin-in d-block" />
          </span>
        </LinkedinShareButton>
        <RedditShareButton
          url={props.metaData.url}
          className="button reddit"
          title={props.metaData.title}
          onMouseOver={titleHack}
          onFocus={titleHack}
        >
          <span className="icon">
            <i className="fab fa-reddit-alien d-block" />
          </span>
        </RedditShareButton>
        <WhatsappShareButton
          url={props.metaData.url}
          className="button whatsapp"
          title={props.metaData.title}
          onMouseOver={titleHack}
          onFocus={titleHack}
          separator=": "
        >
          <span className="icon">
            <i className="fab fa-whatsapp d-block" />
          </span>
        </WhatsappShareButton>
      </div>
  )
}
