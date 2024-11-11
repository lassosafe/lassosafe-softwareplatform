"use client";

import { useSearchParams } from "next/navigation";
import { DashboardHeader } from "../DashboardComponents/DashboardHeader";
import Footer from "../Footer/Footer";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import swpscore from "../../../public/images/swpscore.png";
import swpmodel from "../../../public/images/swpmodel.png";
import swpprocess from "../../../public/images/swpprocess.png";
import swpScience from "../../../public/images/swpScience.png";
import swpForEveryone from "../../../public/images/swpForEveryone.png";

import Image from "next/image";

import "./Methodology.scss";

export default function UmbrellaMethodology() {
  const searchParams = useSearchParams();
  const isViewer = searchParams.get("isViewer") === "true" ? true : false;
  return (
    <div className="methodology-page">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu isViewer={isViewer} />
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
            <h2
              style={{
                marginTop: "20px",
                marginBottom: "5px",
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              SWP Process
            </h2>
            <Image
              src={swpprocess}
              alt="swpprocess"
              objectFit="contain"
              className="swp-process"
              style={{
                width: "55%",
                marginTop: "20px",
              }}
            ></Image>
            <p style={{ marginTop: "20px" }}>
              <span style={{ color: "#ff8c00" }}>
                Athlete experience recognition campaign.
              </span>{" "}
              Send out the link via your organization’s CRM to a select group of
              athletes or your full membership. You will receive the final
              report on the last day of your campaign cycle.
            </p>
            <p style={{ marginTop: "20px" }}>
              <span style={{ color: "green" }}>
                Identify highest priority trend.
              </span>{" "}
              Use your athletes’ feedback to improve their experiences and raise
              your SWP score. To do this, bring your safeguarding team together
              to select which trends your organization would like to improve
              upon. Don’t know where to start? Use your SWP score as a guide.{" "}
            </p>
            <p style={{ marginTop: "20px" }}>
              <span style={{ color: "#1b8dff" }}>
                Select strategic suggestions.
              </span>{" "}
              Consult with your safeguarding team to make an action and response
              plan. SWP’s strategic suggestions can help point you in the right
              direction.
            </p>
            <p style={{ marginTop: "20px" }}>
              <span style={{ color: "purple" }}>
                Implement suggestions or ask a resource partner for help.
              </span>{" "}
              Once your plan is set, let your athletes know that their feedback
              is making a difference and get your action team going! Need help?
              Check out the resources partners listed with your selected
              strategic suggestion. They’re quality is vetted for your success!
            </p>

            <p style={{ marginTop: "20px" }}>
              <span style={{ color: "#ff8c00" }}>
                Athlete experience recognition campaign.
              </span>{" "}
              Repeat a campaign to measure your action plan’s impact.{" "}
            </p>
            <p>
              Your score isn’t improving: it may be a sign that your efforts are
              not impacting athletes’ experiences and its time to reassess your
              action plan.{" "}
            </p>
            <p>
              Your score IS improving: You’re doing great. Keep up the good work
              and select your next priority for growth!{" "}
            </p>
            <p
              style={{
                color: "teal",
                fontStyle: "italic",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              A professional approach to Safeguarding is Good Business
            </p>
            <p style={{ color: "teal", fontStyle: "italic" }}>
              Continue your SWP Process to build a sports business that
              habitually improves your athletes’ experiences and is ahead of the
              curve on safeguarding and performance!
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
            <h2 className="methodology-text-header">SWP Score</h2>
            <p>
              Your SWP Score communicates your athletes’ collective feedback by
              grade and number.{" "}
            </p>
            <Image
              src={swpscore}
              alt="swpscore"
              objectFit="contain"
              className="swp-score"
              style={{
                width: "50%",
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
              = Congratulations, you&apos;re doing great!
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
              = You&apos;re on a good path. Let&apos;s take a look at some
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
              = Some of your athletes are asking for help in certain areas of
              their sporting experience. Bring your safeguarding team together
              and check out your strategic suggestions for next steps.
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
              = You’re not alone here. Let’s come together and get your score
              up! Aspects of your environment are being perceived as harmful by
              some of your athletes. Consider reminding your athletes of your
              organization’s abuse reporting platform to learn more from them
              and be sure to take strategic, timely steps toward remedy. The key
              is to work together to improve your athletes’ experiences and your
              score!
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
