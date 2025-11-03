"use client";

export default function ContractorBenefits() {
  const benefits = [
    {
      icon: "💰",
      title: "Book More Jobs, Faster",
      stat: "From 23% to 58% conversion",
      details: [
        "Average contractor closes 20-30% of paid leads",
        "We help you close 50-60% of the same leads",
        "Same ad spend, double the booked jobs"
      ],
      color: "green"
    },
    {
      icon: "⚡",
      title: "Never Miss a Lead Again",
      stat: "Every lead gets a response",
      details: [
        "78% of customers choose whoever responds first",
        "We respond instantly—even at 11pm on Sunday",
        "Your competitors are still checking their phone"
      ],
      color: "blue"
    },
    {
      icon: "📞",
      title: "Stop Chasing Leads",
      stat: "Save 10-15 hours per week",
      details: [
        "We handle initial contact and follow-up",
        "No more \"let me get back to you\" moments",
        "You only talk to qualified, ready-to-book leads"
      ],
      color: "purple"
    },
    {
      icon: "📅",
      title: "Calendar Stays Full",
      stat: "No more phone tag",
      details: [
        "Hot leads book directly to your calendar",
        "Automated reminders reduce no-shows",
        "Works 24/7—even when you're on a job"
      ],
      color: "orange"
    },
    {
      icon: "📊",
      title: "Know What's Working",
      stat: "Real numbers, not guesses",
      details: [
        "Track exactly: leads → booked jobs → revenue",
        "See which ads are actually profitable",
        "Know your true cost per booked job"
      ],
      color: "teal"
    },
    {
      icon: "🔄",
      title: "Turn Maybe into Yes",
      stat: "Recover lost opportunities",
      details: [
        "50% of leads need 2-3 touches to book",
        "We follow up automatically so you don't have to",
        "Turn \"let me think about it\" into signed jobs"
      ],
      color: "red"
    }
  ];

  return (
    <section className="contractor-benefits">
      <div className="container narrow">
        <h2 className="section-title">What Changes When You Work With Us</h2>
        <p className="benefits-intro">
          Most contractors lose 50-70% of their paid leads to slow follow-up and poor conversion systems.
          Here&apos;s what changes when we fix your lead flow:
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className={`benefit-card benefit-${benefit.color}`}>
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">{benefit.icon}</span>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-stat">{benefit.stat}</p>
                <ul className="benefit-details">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-proof">
          <div className="proof-box">
            <strong>Real Result:</strong> ABC Roofing (Dallas) went from 23% lead-to-job rate to 58% in 60 days.
            Same ad spend ($4,500/mo), but went from 11 jobs/month to 26 jobs/month.
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
        </div>

        <div className="benefits-cta">
          <a href="#book-call" className="btn btn-primary">Show Me How This Works for My Business</a>
        </div>
      </div>
    </section>
  );
}
