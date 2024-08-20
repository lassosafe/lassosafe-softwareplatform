"use client";

import { DashboardHeader } from "../DashboardComponents/DashboardHeader";
import Footer from "../Footer/Footer";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./Methodology.scss";

export default function Methodology() {
  return (
    <div className="methodology-page">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu />
        <div className="methodology-container">
          <div className="methodology-title">
            Athlete Experience Recognition Methodology
          </div>
          <div className="methodology-text">
            <h2 className="methodology-text-header">
              Sport Environmental Wellness
            </h2>
            <p>
              A sport community that applies an environmental wellness approach
              as a pathway to sport is by nature more inclusive, safe and
              prosperous. The purpose of Sports Wellness Platform is to support
              its members with data-driven science and tools to learn from your
              most important stakeholders, your athletes, and advance your
              organizational performance through wellness competency and best
              practices. As a Sport Wellness Platform account manager, we are
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
            <h2 className="methodology-header-small">
              Environmental Emotional Wellness
            </h2>
            <p>
              environmental interaction with athletes&apos; as it influences
              their ability to accept and manage their emotions and cope with
              challenges in sport
            </p>
            <h2 className="methodology-header-small">
              Environmental Mental Wellness
            </h2>
            <p>
              as a place in which athletes are and feel psychologically safe
              with access to basic mental health support
            </p>
            <h2 className="methodology-header-small">
              Environmental Physical Wellness
            </h2>
            <p>
              The factors in &apos;s environment that contribute to the
              prioritization of athletes&apos; physical care
            </p>
            <h2 className="methodology-header-small">
              Environmental Social Wellness
            </h2>
            <p>
              monitoring, protection and nurturing of athletes&apos; connection,
              sense of belonging and well-developed support system
            </p>
            <h2 className="methodology-text-header">
              Sport Wellness Platform Model
            </h2>
            <p>
              Sport Wellness Platform&apos;s model brings forth awareness of the
              interconnectedness of each wellness dimension and how they
              contribute to your organization&apos;s environment. This holistic
              model explains mental, emotional, physical and social wellness and
              their foundational attributes as they pertain to athlete safety,
              development and culture.
            </p>
            <h2 className="methodology-header-small">
              Understanding Your Report{" "}
            </h2>
            <p>
              wellness report is delivered to you in real-time per your
              campaign&apos;s response. In an easy-to-understand, visual format,
              the data is presented for the recognition of your athletes&apos;
              perceived experiences of your environment.
            </p>
            <br />
            <p>You can find your report to be offered in three tiers.</p>

            <h2 className="methodology-header-small">
              Tier 1 - High-level report
            </h2>
            <p>
              A quick and simple glance at the overall results of &apos;s
              performance
            </p>
            <h2 className="methodology-header-small">
              Tier 2 - Midlevel report
            </h2>
            <p>
              A breakdown of Tier 1 to display data as it is categorized within
              the Wellness Pillars
            </p>
            <h2 className="methodology-header-small">
              Tier 3 - Complete report{" "}
            </h2>
            <p>
              Foundational attributes of wellness pillars are individually
              presented for a thorough understanding of your athletes&apos;
              campaign response
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
