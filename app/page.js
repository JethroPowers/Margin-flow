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
              Built for growth-focused contractors
            </span>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>
              Watch how contractors lose half their ad leads — and how to fix it.
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Most trades lose jobs after the click. See how MarginFlow turns your ad spend
              into booked jobs automatically.
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
              5 minute breakdown of the biggest leak in contractor marketing.
            </div>

            <div className="social-proof-bar">
              <div className="proof-item">
                <span className="proof-number">243</span>
                <span className="proof-label">Jobs booked last month</span>
              </div>
              <div className="proof-item">
                <span className="proof-number">$100k+</span>
                <span className="proof-label">Revenue generated</span>
              </div>
              <div className="proof-item">
                <span className="proof-number">58%</span>
                <span className="proof-label">Avg conversion rate</span>
              </div>
            </div>
          </div>
        </section>

        <SystemFlowchart />

        <ContractorBenefits />

        <section className="thank-you" id="book-call">
          <div className="container cal-container">
            <div className="booking-urgency-header">
              <span className="urgency-badge pulsing">🔥 Last 3 Spots for December</span>
            </div>

            <h2>Claim Your December Implementation Slot</h2>
            <p>
              Book a 15-minute walkthrough to secure one of the final 3 spots for December 2025.
              We&apos;ll audit your lead flow and show you exactly how to turn your ad spend into booked jobs.
            </p>

            <div className="urgency-benefits">
              <div className="urgency-benefit-item">
                <span className="check-icon">✓</span>
                <span>Book this week, go live before year-end</span>
              </div>
              <div className="urgency-benefit-item">
                <span className="check-icon">✓</span>
                <span>Start 2026 with automated lead conversion</span>
              </div>
              <div className="urgency-benefit-item">
                <span className="check-icon">✓</span>
                <span>Priority implementation queue</span>
              </div>
            </div>

            <div className="deliverables">
              <strong>What you&apos;ll get in the call:</strong>
              <ul>
                <li>Custom quote for your service + market volume</li>
                <li>Live demo of the AI quote engine + follow-up system</li>
                <li>ROI projection based on your current ad spend</li>
                <li>Implementation timeline (go live by Dec 31st)</li>
              </ul>
            </div>

            <CalEmbed />

            <div className="booking-footer-urgency">
              <p>⚡ <strong>December 2025 cohort filling fast.</strong> Only 3 implementation slots remain.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>© MarginFlow 2025</footer>
    </>
  );
}
