"use client";
/**
 * Component for Methodology page for Umbrella account with description from Pam
 */

import { useSearchParams } from "next/navigation";
import { DashboardHeader } from "../DashboardComponents/DashboardHeader";
import Footer from "../Footer/Footer";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import swpscore from "../../../public/images/swpscore.png";
import swpmodel from "../../../public/images/swpmodel.png";
import swpScoreUmbrella from "../../../public/images/swpScoreUmbrella.png";
import swpScience from "../../../public/images/swpScience.png";
import swpForEveryone from "../../../public/images/swpForEveryone.png";
import keyfeatures from "../../../public/images/keyfeatures.png";
import companyprocess from "../../../public/images/companyprocess.png";

import Image from "next/image";

import "./Methodology.scss";

export default function UmbrellaMethodology() {
  const searchParams = useSearchParams();
  const isUmbrella = searchParams.get("isUmbrella") === "true" ? true : false;
  return (
    <div className="methodology-page">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu isUmbrella={isUmbrella} />
        <div className="methodology-container">
          <div className="methodology-title">
            Athlete Experience Recognition Methodology Umbrella Plan
          </div>
          <div className="methodology-text">
            <h2 className="methodology-text-header">
              Intelligence software for athlete experience recognition
            </h2>
            <p>The Scientific Way to Audit Sport Safety Culture and Climate</p>
            <p style={{ marginTop: "20px" }}>
              Sports Wellness Platform (SWP) Umbrella Plan uses medical science
              and machine learning to assess, classify and rate athlete
              experiences as they relate to risk assessment, mitigation and
              remediation.
            </p>
            <p style={{ marginTop: "20px" }}>
              Use SWP to apply the science of mental, emotional, physical and
              social environments with your member organizations.
            </p>
            <Image
              src={swpScience}
              alt="swpscience"
              objectFit="contain"
              className="swp-science"
              style={{
                width: "50%",
                marginTop: "20px",
              }}
            ></Image>
            <Image
              src={swpForEveryone}
              alt="swpforeveryone"
              objectFit="contain"
              className="swp-for-everyone"
              style={{
                width: "50%",
                marginTop: "20px",
              }}
            ></Image>
            <h2 className="methodology-text-header">Sport Wellness</h2>
            <p>
              A community that applies an environmental wellness approach as a
              pathway to sport is by nature more inclusive, safe and prosperous.
              The purpose of Sports Wellness Platform is to support its members
              with data-driven science and tools to learn from your most
              important stakeholders, your athletes, and advance your
              organizational performance through wellness competency and best
              practices. For Sports Wellness Platform account managers, we are
              here to assist you with the development of your
              organization&apos;s information, knowledge, awareness, and skills
              to deliver safe and culturally appropriate programs and services
              for sports participants, athletes, partner leagues, underserved
              populations, and your local community.
            </p>

            <h2 className="methodology-text-header">
              Defining Environmental Wellness in Sport
            </h2>
            <p>
              Applying a multidimensional wellness approach that considers the
              whole athlete can be useful in nearly every sport environment.
              Environmental wellness in sport is the ability to create and
              maintain a safe, inclusive culture where athletes are and feel
              valued as people. It also fosters a strong sense of belonging and
              positive contribution to one&apos;s sport, community, school
              league, organization, governing body, city, province/state, and
              country. Environmental wellness incorporates a sense of awareness,
              understanding, and respect for all dimensions of wellness and
              their foundational attributes.
            </p>
            <p>
              Similarly, it includes awareness and understanding of, and respect
              for, one&apos;s own contribution to their environment.
              Environmental wellness avoids damaging tolerances and
              normalizations, promoting a positive, inclusive, supportive
              experience for all athletes; a place where everyone stands-up for
              others in cases of injustice, without fear of retaliation and with
              respect for, and adherence to, laws and regulations.
            </p>
            <p className="methodology-motto">
              A sport culture that mindfully focuses on environmental wellness
              builds resilience within their organization and athletes, enabling
              everyone to thrive amidst sports&apos; inevitable personal and
              professional challenges.
            </p>
            <h2 className="methodology-text-header">SWP Score</h2>
            <Image
              src={swpScoreUmbrella}
              alt="swpScoreUmbrella"
              objectFit="contain"
              className="swp-score-umbrella"
              style={{
                width: "35%",
                marginTop: "20px",
              }}
            ></Image>
            <Image
              src={swpscore}
              alt="swpscore"
              objectFit="contain"
              className="swp-score"
              style={{
                width: "35%",
                marginTop: "20px",
              }}
            ></Image>
            <p
              style={{
                width: "fit-content",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <span
                style={{
                  backgroundColor: "lightgreen",
                  padding: "10px",
                }}
              >
                A
              </span>{" "}
              = Congratulations, your clients are excelling in environmental
              wellness!
            </p>
            <p
              style={{
                width: "fit-content",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <span
                style={{
                  backgroundColor: "lightgreen",
                  padding: "10px",
                }}
              >
                B
              </span>{" "}
              = Your clients are on a good path. Let&apos;s take a look at some
              opportunities for growth!
            </p>
            <p
              style={{
                width: "fit-content",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <span
                style={{
                  backgroundColor: "gold",
                  padding: "10px",
                  paddingBottom: "5px",
                }}
              >
                C
              </span>{" "}
              = Some of your client&apos;s athletes are asking for help in
              certain areas of their sporting experience. Bring your
              safeguarding team together and review their detailed report to
              identify gaps and areas of risk.
            </p>
            <p
              style={{
                width: "fit-content",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <span
                style={{
                  backgroundColor: "red",
                  padding: "10px",
                  paddingBottom: "5px",
                }}
              >
                D
              </span>{" "}
              = Aspects of your client&apos;s environment are being perceived as
              harmful by some of their athletes. This could indicate gaps in
              their safeguarding and failure to effectively provide protection
              for their people. A low SWP Score is correlated to escalation of
              risk and claims. This is an opportunity to work together and raise
              their SWP Score for the improvement of athlete safety and
              wellbeing.
            </p>
            <h2 className="methodology-text-header">
              Sport Wellness Platform Model
            </h2>
            <p>
              Sport Wellness Platform&apos;s model brings forth awareness of the
              interconnectedness of each wellness dimension and how they
              contribute to your organization&apos;s environment. This holistic
              model explains mental, emotional, physical and social wellness and
              their foundational attributes as they pertain to athlete
              safety/wellness, development and culture.
            </p>
            <h2 className="methodology-text-header">
              How To Use The SWP Score and Intelligence Report
            </h2>
            <Image
              src={keyfeatures}
              alt="keyfeatures"
              objectFit="contain"
              className="key-features"
              style={{
                width: "35%",
                marginTop: "20px",
              }}
            ></Image>
            <Image
              src={companyprocess}
              alt="companyprocess"
              objectFit="contain"
              className="company-proceess"
              style={{
                width: "35%",
                marginTop: "20px",
              }}
            ></Image>

            <Image
              src={swpmodel}
              alt="swpmodel"
              objectFit="contain"
              className="swp-model"
              style={{
                width: "35%",
                marginTop: "20px",
              }}
            ></Image>
            <h2 className="methodology-header-small">Categories</h2>
            <p>
              SWP subjectively recognizes three categories of an athlete’s
              experience in the sports environment
            </p>
            <p
              style={{
                marginLeft: "20px",
                marginBottom: "20px",
                marginTop: "10px",
              }}
            >
              1. Safety and Wellness- an athlete&apos;s perception of their
              sense of protection from danger, risk or injury and their state of
              being in good health, especially as they actively pursue their
              athletic goals.
            </p>
            <p style={{ marginLeft: "20px", marginBottom: "20px" }}>
              2. Development- an athlete’s subjective experience as it pertains
              to their habitual development of athleticism over time to improve
              their health and fitness, enhance physical performance, reduce the
              relative risk of injury and develop their confidence and
              competence as an individual.{" "}
            </p>
            <p style={{ marginLeft: "20px", marginBottom: "20px" }}>
              3. Culture- how an athlete experiences shared attitudes, values,
              goals, and practices that characterizes your organization.
            </p>
            <h2 className="methodology-header-small">Wellness Pillars</h2>
            <p style={{ marginTop: "20px" }}>
              <b>Emotional</b> - Your organization’s environmental interaction
              with athletes as it influences their ability to accept and manage
              their emotions and cope with challenges in sport.
            </p>
            <p style={{ marginTop: "20px" }}>
              <b>Mental</b> - Your organization as a place in which athletes are
              and feel psychologically safe with access to basic mental health
              support.
            </p>
            <p style={{ marginTop: "20px" }}>
              <b>Physical</b> - The factors in your organization&apos;s
              environment that contribute to the prioritization of
              athletes&apos; physical care.
            </p>
            <p style={{ marginTop: "20px" }}>
              <b>Social</b> - Your organization’s monitoring, protection and
              nurturing of athletes&apos; connection, sense of belonging and
              well-developed support system.
            </p>
            <p style={{ marginTop: "20px" }}>
              <b>Attributes</b> - SWP attributes are the qualities
              scientifically regarded as a characteristic or inherent part of
              the wellness pillars. In your SWP reports, you will find up to
              ninety attributes identifying and classifying athletes’
              experiences.{" "}
            </p>
            <h2 className="methodology-header-small">
              Understanding Your Report{" "}
            </h2>
            <p>
              Your wellness report is delivered to you in real-time per your
              campaign&apos;s response. In an easy-to-understand, visual format,
              the data is presented for the recognition of your athletes&apos;
              perceived experiences of your environment.
            </p>
            <br />
            <p>
              You can find your report to be broken down in three levels of
              detail as they relate to the SWP model.
            </p>
            <h2 className="methodology-header-small">Category</h2>
            <p>
              A quick and simple glance at the overall results of your
              organization&apos;s performance
            </p>
            <h2 className="methodology-header-small">Pillar</h2>
            <p>
              SWP’s wellness pillars are displayed in three graphs per category,
              giving you a mid-level view of your performance data.
            </p>
            <h2 className="methodology-header-small">Attribute</h2>
            <p>
              Foundational attributes of wellness pillars are individually
              presented for a thorough understanding of your athletes&apos;
              response.
            </p>

            <h2 className="methodology-text-header">Learning Modules</h2>
            <p>
              Accompanied with report, you receive strategically suggested
              learning modules. From a library of 450 items, Sports Wellness
              Platform applies 14 years of international research to your
              current improvement opportunities as informed by your
              athletes&apos; experiences. You are provided with the most
              relevant, effective and economic resources for policy, procedure
              and best practice response by partners who are already vetted and
              approved for your success. You can also use the Learning Modules
              Library to select your own learning modules.
            </p>
            <br />
            <p>
              You can also use the Learning Modules Library to select your own
              learning modules.
            </p>
            <h2 className="methodology-text-header">Resource Partners</h2>
            <p>
              You are provided with the most relevant, effective and economic
              resources for policy, procedure and best practice response by
              partners who are already vetted and approved for your success.{" "}
            </p>
            <p style={{ marginTop: "20px" }}>
              <b>Want to be a resource partner?</b> Contact us at{" "}
              <a
                href="mailto:info@lassosafe.com"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                info@lassosafe.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
