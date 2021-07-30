import React from "react";
import { Grid } from "@material-ui/core";
import "@fontsource/roboto";
import "../assets/style/Footer.css";
import footerLogo from "../assets/images/footerLogo.png";
import gPlayLogo from "../assets/images/gPlayLogo.png";
import appStoreLogo from "../assets/images/appStoreLogo.png";
import facebookLogo from "../assets/images/facebookLogo.png";
import pinterestLogo from "../assets/images/pinterestLogo.png";
import instagramLogo from "../assets/images/instagramLogo.png";

const Footer = () => {
  const footerSocmed = [
    { image: facebookLogo },
    { image: pinterestLogo },
    { image: instagramLogo },
  ];

  const footerDownload = [{ image: gPlayLogo }, { image: appStoreLogo }];

  const footerCenter = [
    { title: "Tentang Kami" },
    { title: "Blog" },
    { title: "Layanan" },
    { title: "Karir" },
    { title: "Pusat Media" },
  ];
  return (
    <div className="footer__wrapper">
      <div className="footer__container">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={4} lg={4}>
            <div className="footer__left">
              <div className="footer__brand">
                <div className="footer__logo">
                  <img src={footerLogo} alt="..." />
                </div>
                <div className="footer__title">
                  <h1>MilanTV</h1>
                </div>
              </div>
              <div className="footer__content">
                <p>
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard"
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div className="footer__about">
              <ul className="footer__center">
                <li>
                  {footerCenter.map((item, index) => (
                    <div key={index}>
                      <p>{item.title}</p>
                    </div>
                  ))}
                </li>
              </ul>
              <div className="footer__right">
                <h2>Download</h2>
                <div className="footer__download">
                  {footerDownload.map((item, index) => (
                    <div key={index}>
                      <img src={item.image} alt="..." />
                    </div>
                  ))}
                </div>
                <div>
                  <h2>Social Media</h2>
                </div>
                <div className="footer__socmed">
                  {footerSocmed.map((item, index) => (
                    <div key={index}>
                      <img src={item.image} alt="..." />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="footer__copyright">
        <p>Copyright © 2000-2021 MilanTV. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
