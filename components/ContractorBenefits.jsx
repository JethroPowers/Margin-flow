"use client";

export default function ContractorBenefits() {
  const benefits = [
    {
      icon: "💰",
      title: "30-50% Higher Conversion Rate",
      stat: "From click to booked job",
      details: [
        "Average contractor closes 20-30% of paid leads",
        "With MarginFlow, you'll close 50-60%",
        "Same ad spend, double the revenue"
      ],
      color: "green"
    },
    {
      icon: "⚡",
      title: "60-Second Response Time",
      stat: "Every lead, every time",
      details: [
        "78% of customers choose whoever responds first",
        "AI responds instantly—even at 11pm on Sunday",
        "Your competitors are still checking their phone"
      ],
      color: "blue"
    },
    {
      icon: "🤖",
      title: "Zero Manual Quoting",
      stat: "Save 10-15 hours per week",
      details: [
        "AI handles intake, photos, and initial pricing",
        "No more \"let me get back to you\" moments",
        "You only talk to qualified, ready-to-book leads"
      ],
      color: "purple"
    },
    {
      icon: "📅",
      title: "Self-Service Booking",
      stat: "No more phone tag",
      details: [
        "Hot leads book directly to your calendar",
        "Reduces no-shows with automated reminders",
        "Works 24/7—even when you're on a job site"
      ],
      color: "orange"
    },
    {
      icon: "📊",
      title: "See Your True ROI",
      stat: "Real-time performance dashboard",
      details: [
        "Track: leads → quotes → booked jobs",
        "Know exactly which ads are profitable",
        "Weekly reports show cost per booked job"
      ],
      color: "teal"
    },
    {
      icon: "🔄",
      title: "Recover \"Ghost\" Leads",
      stat: "3-step follow-up sequence",
      details: [
        "50% of leads need 2-3 touches to book",
        "AI follows up automatically for 7 days",
        "Turns \"let me think about it\" into bookings"
      ],
      color: "red"
    }
  ];

  return (
    <section className="contractor-benefits">
      <div className="container narrow">
        <h2 className="section-title">What MarginFlow Does for Contractors</h2>
        <p className="benefits-intro">
          Most trades waste 50-70% of their paid leads on slow responses, manual quoting,
          and forgotten follow-ups. Here&apos;s what changes when you plug in MarginFlow:
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
              <strong>December 2025 Cohort Closing Soon</strong>
              <p>We only onboard 12 contractors per month to ensure quality implementation.
              3 spots remain for December start dates.</p>
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
