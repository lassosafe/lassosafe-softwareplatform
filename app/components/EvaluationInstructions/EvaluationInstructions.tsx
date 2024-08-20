"use client";
import { DashboardHeader } from "../DashboardComponents/DashboardHeader";
import Footer from "../Footer/Footer";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./EvaluationInstructions.scss";

export default function EvaluationInstructions() {
  return (
    <div className="instructions-page">
      <DashboardHeader />
      <div className="center-components">
        <NavigationMenu />
        <div className="instructions-container">
          <div className="instructions-title">
            Athlete Experience Recognition Evaluation Instructions
          </div>
          <div className="instructions-text">
            <p>
              Your athletes&apos; experiences of their environment ebbs and
              flows by sport season, sport division, competition level, staff
              turnover, organizational reform and more. It&apos;s important to
              learn from each athletic demographic within throughout their sport
              year.
            </p>
            <br />
            <p>
              Use the recognition campaign to label a survey send-out and
              categorize the resulting data. Then compare your newest data
              trends with your previous campaigns to recognize patterns unique
              to your environment and inform learning module selection.
            </p>
            <h2 className="question">Who do I send campaigns to?</h2>
            <p>
              You can send out a Recognition Campaign to all athletes and sports
              participants currently involved with your organization age twelve
              years and up, or categorize lists based on sport division,
              competition level, sport season and more. We suggest that you
              consult with your leadership team to establish campaign contact
              lists on your organization&apos;s CRM.
            </p>
            <p className="list-header">Do not send the evaluation to:</p>
            <ul>
              <li>Visiting athletes</li>
              <li>Athletes no longer involved in your organization</li>
              <li>Athletes under 12 years of age</li>
              <li>
                Athletes who do not have a feel of your current environent due
                to recent intake or extended absence.
              </li>
            </ul>
            <h2 className="question">
              When do I send out a Recognition Campaign?
            </h2>
            <p>
              Recognition Campaigns can be scheduled at your discretion without
              limitation.
            </p>
            <p className="list-header">Common schedule considerations are:</p>
            <ul>
              <li>
                Attach the campaign to a membership or event registration to
                require response.
              </li>
              <li>
                Seasonal: monitor athlete experiences around their sport season.
              </li>
              <li>Monthly: build consistent data to review year-over-year.</li>
              <li>
                Athlete responsiveness (too often or too little can affect the
                interest of athletes).
              </li>
            </ul>
            <h2 className="question">
              How do I send out a Recognition Campaign?
            </h2>
            <ol type="1">
              <li>
                Using the form in the New Evaluation tab, enter the title and
                required information of your campaign
              </li>
              <li>
                Next, a unique survey link will be generated. Copy the link to
                insert into your campaign email via your organization&apos;s
                CRM. You may want to require participation by attaching it to a
                membership renewal or event registration.
              </li>
              <li>
                Create email content to introduce the campaign to your athletes.
                Use this as an opportunity to let them know that their voice
                matters and engage them in quality feedback. If you have applied
                learning modules in response to a previous campaign, this could
                be a good time to let your athletes know and encourage them to
                participate in change-making again. Feel free to copy and paste
                our suggested content as a starting point.
              </li>
              <li>
                If you have a campaign schedule, you may want to let them know
                when to expect the next one.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
