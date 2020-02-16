import React from "react"
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from "react-share"

export default function Share({ socialConfig, tags }) {
  return (
    <div className="post-social">
      <FacebookShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded facebook"
      >
        <span className="icon">
          <i className="fab facebook-f" />
        </span>
        <span className="text">Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded twitter"
        title={socialConfig.config.title}
        via={socialConfig.twitterHandle.split("@").join("")}
        hashtags={tags}
      >
        <span className="icon">
          <i className="fab twitter" />
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>
      <GooglePlusShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded googleplus"
      >
        <span className="icon">
          <i className="fab google-plus-g" />
        </span>
        <span className="text">Google+</span>
      </GooglePlusShareButton>
      <LinkedinShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded linkedin"
        title={socialConfig.config.title}
      >
        <span className="icon">
          <i className="fab linked-in" />
        </span>
        <span className="text">LinkedIn</span>
      </LinkedinShareButton>
      <RedditShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded reddit"
        title={socialConfig.config.title}
      >
        <span className="icon">
          <i className="fab reddit-alien" />
        </span>
        <span className="text">Reddit</span>
      </RedditShareButton>
      <WhatsappShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded whatsapp"
        title={socialConfig.config.title}
      >
        <span className="icon">
          <i className="fab whatsApp" />
        </span>
        <span className="text">WhatsApp</span>
      </WhatsappShareButton>
    </div>
  )
}
