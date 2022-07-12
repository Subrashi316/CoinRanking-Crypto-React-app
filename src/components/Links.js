import React from "react";

import {
  AiFillGithub,
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsTelegram, BsReddit,BsCurrencyBitcoin } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const iconMap = {
  website: <CgWebsite  className="links-icon" />,
  github: <AiFillGithub className="links-icon" />,
  reddit: <BsReddit className="links-icon" />,
  telegram: <BsTelegram className="links-icon" />,
  explorer: <MdExplore className="links-icon" />,
  bitcointalk: <BsCurrencyBitcoin className="links-icon" />,
  youtube: <AiFillYoutube className="links-icon" />,
  facebook: <AiFillFacebook className="links-icon" />,
  twitter: <AiOutlineTwitter className="links-icon" />,
};

function Links({ Links }) {
    console.log(Links);
  return (
    <div className="links-container">
      {Links.map((item, i) => {
        return (
          <a
            href={`${item.url}`}
            target="_blank"
            rel="noreferrer"
            className="link-item"
            key={i}
          >
            <div className="link-img-box">{iconMap[item.type] || <CgWebsite className="links-icon" />}</div>
            <p className="link-text coin-item-text">{item.name}</p>
          </a>
        );
      })}
    </div>
  );
}

export default Links;
