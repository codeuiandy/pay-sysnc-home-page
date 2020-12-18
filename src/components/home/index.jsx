import React from "react";
import Layout from "../layout/layout";
import "./home.css";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Playstoreimg from "../../assets/playstore.svg";
import Apple from "../../assets/apple.svg";
import recycleRight from "../../assets/recycle.svg";
import recycleLeft from "../../assets/recycle.png";
import crackers from "../../assets/crackers.svg";
import previousIcon from "../../assets/PreviousIcon.svg";
import nextIcon from "../../assets/NextIcon.svg";
import userImg from "../../assets/userImage.svg";
export default function Index(props) {
  return (
    <React.Fragment>
      <Layout background={false}>
        <div className="home-page-wrap">
          <div className="pay-sync-hero-text-wrap">
            <h1>
              Powerful, Simple <br />
              Banking
            </h1>
            <h4>
              PaySync gives employers the ability to offer their employees
              <br />
              access to their wages as they have earned them.
            </h4>
          </div>
        </div>
        <div style={{ backgroundColor: "white", width: "100%" }}>
          <div className="body-gen-padding-home">
            <div className="about-app-home-page">
              <div className="download-app-home">
                <div className="avalable-home">
                  <h1>Available on</h1>
                </div>
                <div className="download-store-home">
                  <img src={Playstoreimg} alt="" />
                  <img src={Apple} alt="" />
                </div>
              </div>
              <div className="trustedby-sec-home">
                <h1>
                  Trusted By Employers that care <br />
                  for their employees.
                </h1>
                <div className="trusted-by-images-home">
                  <img src="./paystack.svg" alt="" />
                  <img src="./fluterwave.svg" alt="" />
                  <img src="./moneso.svg" alt="" />
                  <img src="./moneyfy.svg" alt="" />
                  <img src="./rubbies.svg" alt="" />
                </div>
                <div className="hr-home-center">
                  <div className="hr-home-sm"></div>
                </div>
                <div className="paysync-solution-home">
                  <h1>What pain do we solve for you?</h1>
                  <h3>
                    We make your life easy by reducing and eliminating the
                    friction of you granting employees loans by allowing workers
                    to access their own money instead of relying on
                    high-interest loans, workers live financially healthy lives
                    by eliminating them the hassle and stress to sought out
                    their financial issues at workplace. Ultimately, we are
                    focusing on improving your happiness and productivity
                    through the most reputable financial platform in Africa.
                  </h3>
                </div>

                <div className="what-we-do-home">
                  <div className="accordion-section-home">
                    <Accordion allowZeroExpanded>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Employee access to already earned wages and payment
                            solutions
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          We make your life easy by reducing and eliminating the
                          friction of you granting employees loans by allowing
                          workers to access their own money instead of relying
                          on high-interest loans.
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Financially Healthy Life
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          We make your life easy by reducing and eliminating the
                          friction of you granting employees loans by allowing
                          workers to access their own money instead of relying
                          on high-interest loans.
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Increased Productivity
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          We make your life easy by reducing and eliminating the
                          friction of you granting employees loans by allowing
                          workers to access their own money instead of relying
                          on high-interest loans.
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="what-we-do-img">
                    <img src="./phone.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="our-service-home">
            <div className="service-padding-home">
              <h1 className="service-header-home">
                Our Additional Value-Added Services
              </h1>

              <div className="serve-list-home">
                <div>
                  <div className="service-home-list-img-wrap"></div>
                  <h1>
                    Employee budget & <br />
                    planning tool
                  </h1>
                  <p>Lorem ipso dolor ipsum nisi</p>
                </div>

                <div>
                  <div className="service-home-list-img-wrap"></div>
                  <h1>
                    In-App Financial <br />
                    Transactions
                  </h1>
                  <p>Lorem ipso dolor ipsum nisi</p>
                </div>

                <div>
                  <div className="service-home-list-img-wrap"></div>
                  <h1>Free Debit Card</h1>
                  <p>Lorem ipso dolor ipsum nisi</p>
                </div>
              </div>

              <div className="serve-list-home">
                <div>
                  <div className="service-home-list-img-wrap"></div>
                  <h1>Zero Integration Cost</h1>
                  <p>Lorem ipso dolor ipsum nisi</p>
                </div>

                <div>
                  <div className="service-home-list-img-wrap"></div>
                  <h1>Financial Training</h1>
                  <p>Lorem ipso dolor ipsum nisi</p>
                </div>

                <div>
                  <div className="service-home-list-img-wrap"></div>
                  <h1>24 hours user support</h1>
                  <p>Lorem ipso dolor ipsum nisi</p>
                </div>
              </div>
            </div>
          </div>


          <div className="subscription-news-home">
            <div className="subscription-padding-home">
              <h1 className="subscription-header-home">
                Financial inclusion in African market has been <b>out of reach</b> for decades,
                but we have found the <b>solution</b>.
                <img src={crackers} alt="" />
              </h1>
              <h1 className="subscribe-label">Get Started</h1>

              <div className="subscribe-wrapper-home">
                <img src={recycleLeft} alt="" className="arrow-recycle-left" />
                <div className="subscribe-now-home">
                  <input type="email" name="email" placeholder="Your email address" />
                  <button>Let's go</button>
                </div>
                <img src={recycleRight} alt="" className="arrow-recycle-right" />
              </div>

            </div>
          </div>


          <div className="testimonials-home">
            <div className="testimonials-padding-home">
              <small>Testimonials</small>
              <h1 className="testimonials-header-home">
                Loved by our users.
              </h1>
              <div className="testimonial-middle">
                <img src={previousIcon} alt="" className="previous-testimony" />
                <div className="testimonial-message-box">
                  <p>
                    “It is comforting to know that if for some reason during the month you are in urgent need of cash
                    that you have Floatpays as a back up, and the best of all it is money that you have already earned
                    during the month and no percentage fees to worry about.”
                  </p>
                  <div className="user-name-testimony">
                    <img src={userImg} alt="" />
                    <div className="user-img-testimony">Diana Pierce</div>
                    <div className="user-designation-testimony">CEO, Brick Consulting</div>
                  </div>
                </div>
                <img src={nextIcon} alt="" className="next-testimony" />
              </div>

            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}
