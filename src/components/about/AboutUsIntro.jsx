import React from "react";
import styled from "./AboutUsIntro.module.css";
import squarePlate from "../../images/square-plate.png";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";

const AboutUsIntro = () => {
  return (
    <section className={styled["about-us-intro"]}>
      <Wrapper>
        <div className={styled["intro-content"]}>
          <figure>
            <img
              src={squarePlate}
              alt="Black plate with rice and shrimp and vegetables"
            />
          </figure>
          <article>
            <Heading
              text={
                <>
                  about <span>us</span>
                </>
              }
              className="heading-md"
            />
            <p className="paragraph">
              The Good Food was started by a group of friends who were
              passionate about food and wanted to share their love of good eats
              with the world. We believe that everyone deserves access to
              delicious meals, so we opened up restaurant to cook and serve up
              just that.
            </p>

            <p className="paragraph">
              You can always expect to find fresh, made-from-scratch dishes that
              will tantalize your taste buds. Whether it's a quick bite or a
              leisurely meal, The Good Food is the perfect spot for you.
            </p>
          </article>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutUsIntro;
