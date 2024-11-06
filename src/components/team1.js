import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team1.css'

const Team1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team1-max-width thq-section-max-width">
        <div className="team1-section-title">
          <span className="thq-body-small team1-text10">
            {props.content1 ?? (
              <Fragment>
                <span className="team1-text71">
                  Meet the talented individuals behind our innovative robotics
                  company.
                </span>
              </Fragment>
            )}
          </span>
          <div className="team1-content10">
            <h2 className="thq-heading-2 team1-text11">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team1-text43">Our Amazing Team</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large team1-text12">
              {props.content2 ?? (
                <Fragment>
                  <span className="team1-text47">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="team1-content11">
          <div className="team1-content12">
            <div className="team1-row1">
              <div className="team1-container1">
                <div className="team1-card1">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="team1-placeholder-image1 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content13">
                    <div className="team1-title1">
                      <span className="team1-text13 thq-body-small">
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team1-text66">Alice Smith</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text14 thq-body-small">
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team1-text65">
                              CEO &amp; Co-Founder
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text15 thq-body-small">
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team1-text70">
                            Alice is a visionary leader with a passion for
                            robotics and technology.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card2">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="team1-placeholder-image2 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content14">
                    <div className="team1-title2">
                      <span className="team1-text16 thq-body-small">
                        {props.member2 ?? (
                          <Fragment>
                            <span className="team1-text55">Bob Johnson</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text17 thq-body-small">
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team1-text46">CTO</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text18 thq-body-small">
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team1-text41">
                            Bob is a tech guru who ensures our products are at
                            the forefront of innovation.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="team1-container2">
                <div className="team1-card3">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="team1-placeholder-image3 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content15">
                    <div className="team1-title3">
                      <span className="team1-text19 thq-body-small">
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team1-text69">Eva Brown</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text20 thq-body-small">
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team1-text44">Lead Engineer</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text21 thq-body-small">
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team1-text57">
                            Eva brings expertise in robotics engineering to
                            create cutting-edge solutions.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card4">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="team1-placeholder-image4 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content16">
                    <div className="team1-title4">
                      <span className="team1-text22 thq-body-small">
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team1-text67">David Lee</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text23 thq-body-small">
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team1-text64">
                              Head of Security
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text24 thq-body-small">
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team1-text45">
                            David keeps our products secure with his extensive
                            cybersecurity background.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons4">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="team1-row2">
              <div className="team1-container3">
                <div className="team1-card5">
                  <img
                    alt={props.member5Alt}
                    src={props.member5Src}
                    className="team1-placeholder-image5 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content17">
                    <div className="team1-title5">
                      <span className="team1-text25 thq-body-small">
                        {props.member5 ?? (
                          <Fragment>
                            <span className="team1-text60">Full name</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text26 thq-body-small">
                        {props.member5Job ?? (
                          <Fragment>
                            <span className="team1-text73">Job title</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text27 thq-body-small">
                      {props.member5Content ?? (
                        <Fragment>
                          <span className="team1-text40">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons5">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card6">
                  <img
                    alt={props.member6Alt}
                    src={props.member6Src}
                    className="team1-placeholder-image6 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content18">
                    <div className="team1-title6">
                      <span className="team1-text28 thq-body-small">
                        {props.member6 ?? (
                          <Fragment>
                            <span className="team1-text59">Full name</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text29 thq-body-small">
                        {props.member6Job ?? (
                          <Fragment>
                            <span className="team1-text56">Job title</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text30 thq-body-small">
                      {props.member6Content ?? (
                        <Fragment>
                          <span className="team1-text72">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons6">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="team1-container4">
                <div className="team1-card7">
                  <img
                    alt={props.member7Alt}
                    src={props.member7Src}
                    className="team1-placeholder-image7 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content19">
                    <div className="team1-title7">
                      <span className="team1-text31 thq-body-small">
                        {props.member7 ?? (
                          <Fragment>
                            <span className="team1-text51">Full name</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text32 thq-body-small">
                        {props.member7Job ?? (
                          <Fragment>
                            <span className="team1-text68">Job title</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text33 thq-body-small">
                      {props.member7Content ?? (
                        <Fragment>
                          <span className="team1-text52">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons7">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team1-card8">
                  <img
                    alt={props.member8Alt}
                    src={props.member8Src}
                    className="team1-placeholder-image8 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content20">
                    <div className="team1-title8">
                      <span className="team1-text34 thq-body-small">
                        {props.member8 ?? (
                          <Fragment>
                            <span className="team1-text50">Full name</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text35 thq-body-small">
                        {props.member8Job ?? (
                          <Fragment>
                            <span className="team1-text53">Job title</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text36 thq-body-small">
                      {props.member8Content ?? (
                        <Fragment>
                          <span className="team1-text42">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons8">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team1-content21">
            <div className="team1-content22">
              <h2 className="thq-heading-2 team1-text37">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="team1-text54">We’re hiring!</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small team1-text38">
                {props.content3 ?? (
                  <Fragment>
                    <span className="team1-text61">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <button className="team1-button thq-button-filled">
              <span className="thq-body-small">
                {props.actionContent ?? (
                  <Fragment>
                    <span className="team1-text58">Open positions</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Team1.defaultProps = {
  member5Content: undefined,
  member8Src:
    'https://images.unsplash.com/photo-1636041282690-8404f759538e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDkyMjk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Content: undefined,
  member8Content: undefined,
  heading1: undefined,
  member3Job: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1517916358207-1e49f666e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDkyMjk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member1Alt: 'Image of Alice Smith, CEO & Co-Founder',
  member4Content: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1429594801156-2c53a0d4f96e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDkyMjk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Src:
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDkyMjk2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  member2Job: undefined,
  content2: undefined,
  member8: undefined,
  member7: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1508002366005-75a695ee2d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDkyMjk2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  member7Content: undefined,
  member8Job: undefined,
  heading2: undefined,
  member2: undefined,
  member6Job: undefined,
  member3Alt: 'Image of Eva Brown, Lead Engineer',
  member6Alt: 'Member Alt',
  member3Content: undefined,
  member7Src:
    'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDkyMjk2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  member2Src:
    'https://images.unsplash.com/photo-1715615685666-882710b534f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDkyMjk2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  member2Alt: 'Image of Bob Johnson, CTO',
  actionContent: undefined,
  member6: undefined,
  member5: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1701284901211-f3a2fea71d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDkyMjk2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  content3: undefined,
  member4Job: undefined,
  member5Alt: 'Member Alt',
  member1Job: undefined,
  member1: undefined,
  member4: undefined,
  member7Job: undefined,
  member4Alt: 'Image of David Lee, Head of Security',
  member3: undefined,
  member1Content: undefined,
  member7Alt: 'Member Alt',
  content1: undefined,
  member6Content: undefined,
  member8Alt: 'Member Alt',
  member5Job: undefined,
}

Team1.propTypes = {
  member5Content: PropTypes.element,
  member8Src: PropTypes.string,
  member2Content: PropTypes.element,
  member8Content: PropTypes.element,
  heading1: PropTypes.element,
  member3Job: PropTypes.element,
  member5Src: PropTypes.string,
  member1Alt: PropTypes.string,
  member4Content: PropTypes.element,
  member3Src: PropTypes.string,
  member4Src: PropTypes.string,
  member2Job: PropTypes.element,
  content2: PropTypes.element,
  member8: PropTypes.element,
  member7: PropTypes.element,
  member6Src: PropTypes.string,
  member7Content: PropTypes.element,
  member8Job: PropTypes.element,
  heading2: PropTypes.element,
  member2: PropTypes.element,
  member6Job: PropTypes.element,
  member3Alt: PropTypes.string,
  member6Alt: PropTypes.string,
  member3Content: PropTypes.element,
  member7Src: PropTypes.string,
  member2Src: PropTypes.string,
  member2Alt: PropTypes.string,
  actionContent: PropTypes.element,
  member6: PropTypes.element,
  member5: PropTypes.element,
  member1Src: PropTypes.string,
  content3: PropTypes.element,
  member4Job: PropTypes.element,
  member5Alt: PropTypes.string,
  member1Job: PropTypes.element,
  member1: PropTypes.element,
  member4: PropTypes.element,
  member7Job: PropTypes.element,
  member4Alt: PropTypes.string,
  member3: PropTypes.element,
  member1Content: PropTypes.element,
  member7Alt: PropTypes.string,
  content1: PropTypes.element,
  member6Content: PropTypes.element,
  member8Alt: PropTypes.string,
  member5Job: PropTypes.element,
}

export default Team1
