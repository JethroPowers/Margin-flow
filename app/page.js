import CalEmbed from "../components/CalEmbed";
import SystemFlowchart from "../components/SystemFlowchart";
import ContractorBenefits from "../components/ContractorBenefits";
import UrgencyBanner from "../components/UrgencyBanner";

export default function Home() {
  return (
    <>
      <UrgencyBanner />

      <main>
        <section className="video-section" id="top">
          <div className="container narrow">
            <span className="badge" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              For Roofing, Remodeling & HVAC Contractors
            </span>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>
              From click to paid job in days, not weeks.
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Most contractors lose 50-70% of their paid leads to slow follow-up.
              We fix your lead flow so you book more jobs from the same ad spend.
            </p>

            <div className="urgency-pill">
              <span className="pulse-dot"></span>
              <strong>Live now:</strong> 47 contractors watching this video
            </div>

            <div className="video-frame">
              <iframe
                src="https://www.loom.com/embed/c370c31d43c046358c019b83a0bbf8d3?sid=e5f6d7c8-9a0b-1c2d-3e4f-5a6b7c8d9e0f"
                title="MarginFlow overview video"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="video-caption">
              5-minute walkthrough of how we turn your ad leads into cash faster.
            </div>

            <div className="social-proof-bar">
              <div className="proof-item">
                <span className="proof-number">26 jobs/mo</span>
                <span className="proof-label">From 11 (same ad spend)</span>
              </div>
              <div className="proof-item">
                <span className="proof-number">60 days</span>
                <span className="proof-label">Average time to results</span>
              </div>
              <div className="proof-item">
                <span className="proof-number">23% → 58%</span>
                <span className="proof-label">Lead-to-job improvement</span>
              </div>
            </div>
          </div>
        </section>

        <SystemFlowchart />

        <ContractorBenefits />

        <section className="thank-you" id="book-call">
          <div className="container cal-container">
            <div className="booking-urgency-header">
              <span className="urgency-badge pulsing">🔥 Last 3 Spots for November</span>
            </div>

            <h2>Book Your Walkthrough — Go Live in 14 Days</h2>
            <p>
              We&apos;ll show you exactly how we fix your lead flow so you book more jobs from the same ad spend.
              If your lead-to-job ratio doesn&apos;t improve within 90 days, we&apos;ll keep working free until it does.
            </p>

            <div className="urgency-benefits">
              <div className="urgency-benefit-item">
                <span className="check-icon">✓</span>
                <span>Book this week, start seeing results in 14 days</span>
              </div>
              <div className="urgency-benefit-item">
                <span className="check-icon">✓</span>
                <span>90-day performance guarantee</span>
              </div>
              <div className="urgency-benefit-item">
                <span className="check-icon">✓</span>
                <span>Turn more leads into cash, faster</span>
              </div>
            </div>

            <div className="deliverables">
              <strong>What you&apos;ll get in the call:</strong>
              <ul>
                <li>Custom audit of your current lead flow</li>
                <li>Walkthrough of how we&apos;ll fix your conversion gaps</li>
                <li>ROI projection based on your ad spend</li>
                <li>14-day implementation timeline</li>
              </ul>
            </div>

            <CalEmbed />

            <div className="booking-footer-urgency">
              <p>⚡ <strong>November 2025 cohort closing soon.</strong> Only 3 implementation slots remain.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>© MarginFlow 2025</footer>
    </>
  );
}
