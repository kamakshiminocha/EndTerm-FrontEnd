import React from "react";
import Wrapper from "../helpers/Wrapper";
import styled from "./Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { ImAndroid, ImAppleinc } from "react-icons/im";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className={styled.footer}>
      <Wrapper>
        <section className={styled["footer-content"]}>
          <article>
            <p className={styled.logo}>the good food</p>
            <p className="paragraph">
              If you want an amazing dining experience, you need to come to The
              Good Food Restaurant. We have it all – great food, wonderful
              service, and a comfortable atmosphere.
            </p>
          </article>

          <div>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="#home" smooth>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" smooth>
                  About
                </Link>
              </li>
              <li>
                <Link to="#menu" smooth>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="#contact" smooth>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Find us </h2>
            <article className={styled.details}>
              <p>
                Call <span>9876543219</span>
              </p>
              <p>
                Address <span>XYZ Noida, Uttar Pradesh</span>
              </p>
              <p>
                Mail Us <span>tgf@gmail.com</span>
              </p>
            </article>

            <div className={styled.socials}>
              <ImAndroid size="25px" />
              <ImAppleinc size="25px" />
              <AiFillInstagram size="30px" />
              <AiOutlineTwitter size="30px" />
              <FaFacebookSquare size="28px" />
            </div>
          </div>
        </section>
      </Wrapper>
    </footer>
  );
};

export default Footer;
