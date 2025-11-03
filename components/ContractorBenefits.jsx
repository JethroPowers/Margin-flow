"use client";

export default function ContractorBenefits() {
  return (
    <section className="contractor-benefits case-study-section">
      <div className="container narrow">
        <div className="case-study-badge">Real Client Result</div>
        <h2 className="section-title">ABC Roofing: From 11 Jobs to 26 Jobs Per Month</h2>
        <p className="case-study-intro">
          Dallas roofing contractor was spending $4,500/month on Google Ads but losing most leads to slow follow-up.
          Here&apos;s what happened when we fixed their lead flow:
        </p>

        <div className="case-study-header">
          <div className="case-study-stat-box before">
            <span className="stat-label">Before MarginFlow</span>
            <div className="stat-number">11</div>
            <span className="stat-description">jobs/month</span>
            <div className="stat-detail">23% conversion rate</div>
          </div>
          <div className="arrow-divider">→</div>
          <div className="case-study-stat-box after">
            <span className="stat-label">After 60 Days</span>
            <div className="stat-number">26</div>
            <span className="stat-description">jobs/month</span>
            <div className="stat-detail">58% conversion rate</div>
          </div>
        </div>

        <div className="timeline-section">
          <h3 className="timeline-title">The 60-Day Transformation</h3>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">Day 1</div>
              <div className="timeline-content">
                <h4>The Problem</h4>
                <p>Owner Mike was personally responding to every lead. By the time he called back (usually 2-4 hours later), 60% had already hired someone else. He was working 70-hour weeks just to stay afloat.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">Week 1</div>
              <div className="timeline-content">
                <h4>We Go Live</h4>
                <p>Installed our system in 8 days. Every lead now gets instant response—quotes delivered in under 60 seconds via text and email. Mike&apos;s phone stops ringing at 9pm.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">Week 4</div>
              <div className="timeline-content">
                <h4>Early Results</h4>
                <p>Conversion jumps from 23% to 41%. Mike books 18 jobs that month instead of 11. He stops chasing leads personally and focuses on running crews.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">Day 60</div>
              <div className="timeline-content">
                <h4>Full Momentum</h4>
                <p>System hitting 58% conversion. 26 jobs booked. Same $4,500 ad spend, but now generating $147,000/month instead of $62,000. Mike hired another crew to handle the volume.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="what-changed-grid">
          <h3 className="what-changed-title">What Actually Changed</h3>

          <div className="change-cards">
            <div className="change-card">
              <span className="change-icon">⚡</span>
              <h4>Response Time: 2-4 hours → 60 seconds</h4>
              <p>Leads get instant quotes via text before they call your competitors. No more &quot;I&apos;ll get back to you.&quot;</p>
            </div>

            <div className="change-card">
              <span className="change-icon">📞</span>
              <h4>Mike&apos;s Time: 70 hrs/week → 45 hrs/week</h4>
              <p>Stopped chasing cold leads. Only talks to people ready to book. Got his evenings and weekends back.</p>
            </div>

            <div className="change-card">
              <span className="change-icon">💰</span>
              <h4>Revenue: $62K/mo → $147K/mo</h4>
              <p>Same ad budget. Same service area. Just stopped losing leads to slow follow-up and poor systems.</p>
            </div>

            <div className="change-card">
              <span className="change-icon">📅</span>
              <h4>Calendar: Feast or famine → Consistently full</h4>
              <p>Leads book directly to his calendar. Automated reminders cut no-shows in half. Predictable job flow every week.</p>
            </div>
          </div>
        </div>

        <div className="case-study-quote">
          <div className="quote-mark">&quot;</div>
          <p className="quote-text">
            I was skeptical about automation, but this isn&apos;t robotic—it&apos;s just fast.
            Leads get quotes instantly, I only talk to serious buyers, and my calendar stays full.
            Best business decision I&apos;ve made in 10 years.
          </p>
          <div className="quote-attribution">
            <strong>Mike Chen</strong>
            <span>Owner, ABC Roofing • Dallas, TX</span>
          </div>
        </div>

        <div className="urgency-box">
          <span className="urgency-icon-large">⏰</span>
          <div className="urgency-box-content">
            <strong>November 2025 Cohort Closing Soon</strong>
            <p>We only take on 12 contractors per month to ensure you get results in 14 days.
            3 spots remain for November.</p>
            <div className="spots-indicator">
              <div className="spot filled"></div>
              <div className="spot filled"></div>
              <div className="spot filled"></div>
              <div className="spot filled"></div>
              <div className="spot filled"></div>
              <div className="spot filled"></div>
              <div className="spot filled"></div>
              <div className="spot filled"></div>
              <div className="spot filled"></div>
              <div className="spot available"></div>
              <div className="spot available"></div>
              <div className="spot available"></div>
            </div>
            <span className="spots-text">9 of 12 spots filled</span>
          </div>
        </div>

        <div className="benefits-cta">
          <a href="#book-call" className="btn btn-primary">Book Your Walkthrough — See If This Works for You</a>
        </div>
      </div>
    </section>
  );
}
