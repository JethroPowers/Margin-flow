"use client";

export default function UrgencyBanner() {
  const spotsLeft = 3;

  return (
    <div className="urgency-banner">
      <div className="urgency-content">
        <span className="urgency-icon">⚡</span>
        <div className="urgency-text">
          <strong>December 2025 Cohort:</strong> Only {spotsLeft} implementation slots remaining
          <span className="urgency-divider">•</span>
          <span>Lock in your spot before year-end</span>
        </div>
      </div>
    </div>
  );
}
