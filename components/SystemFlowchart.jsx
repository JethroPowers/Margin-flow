"use client";

import { useState } from "react";

export default function SystemFlowchart() {
  const [activeStage, setActiveStage] = useState(null);

  const stages = [
    {
      id: 1,
      title: "Lead Capture",
      subtitle: "Integrate leads directly from your ad",
      steps: [
        { label: "Ad Click", icon: "🎯", desc: "Google/Facebook Ad" },
        { label: "Optimized Landing Page", icon: "📄", desc: "We host the conversion-optimized page" },
        { label: "Dynamic Intake Form", icon: "📝", desc: "Collects service, photos & job type" },
        { label: "Quote Calculator Sync", icon: "🔄", desc: "Instantly enters AI/MarginFlow CRM" }
      ],
      color: "green"
    },
    {
      id: 2,
      title: "Instant Quote Delivery",
      subtitle: "Quote sent within 60 seconds",
      steps: [
        { label: "AI analyzes lead data", icon: "🤖", desc: "Service type, location, photos" },
        { label: "Instant Quote via SpeedToLead", icon: "⚡", desc: "SMS + Email with price range" }
      ],
      color: "green"
    },
    {
      id: 3,
      title: "AI Follow-Up Agent (24/7)",
      subtitle: "Never lose a lead — even on holidays",
      branches: [
        {
          type: "engaged",
          label: "If Engaged",
          color: "purple",
          steps: [
            { text: "Responds to Questions", icon: "💬", desc: "Answers questions, shares reviews" },
            { text: "AI Diagnoses Instantly", icon: "🔍", desc: "Answers objections/FAQs (60 secs)" }
          ]
        },
        {
          type: "silent",
          label: "If Silent After 4 Hours",
          color: "gray",
          steps: [
            { text: "Day 1: Friendly Nudge", icon: "👋", desc: "'Still interested? Here's our top review...'" },
            { text: "Day 3: Urgency Sequence", icon: "⏰", desc: "'Only 2 slots left this week + 10% off if booked by Friday'" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Lead Ready to Book?",
      subtitle: "Smart routing based on behavior",
      outcomes: [
        {
          label: "Says 'Yes' or Requests More Info",
          icon: "✅",
          color: "green",
          actions: [
            { text: "Books Job via Cal.com", icon: "📅", desc: "Self-service scheduling" },
            { text: "Books Automatically", icon: "🎉", desc: "Job added to calendar" }
          ]
        },
        {
          label: "Hesitates or Needs Consultation",
          icon: "🤔",
          color: "yellow",
          actions: [
            { text: "Connects with Human via Cal.com", icon: "👤", desc: "Books strategy call" },
            { text: "Escalates to Sales Consultant", icon: "📞", desc: "For custom quotes" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="flowchart-container">
      <div className="flowchart-header">
        <h2 className="section-title">The MarginFlow System: From Click to Booked Job</h2>
        <p className="flowchart-subtitle">
          This is what happens behind the scenes when a lead clicks your ad.
          Click each stage to see the details.
        </p>
      </div>

      <div className="flowchart-stages">
        {stages.map((stage, index) => (
          <div key={stage.id} className="stage-wrapper">
            <button
              className={`stage-button ${activeStage === stage.id ? 'active' : ''}`}
              onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
            >
              <div className="stage-header">
                <span className="stage-number">Stage {stage.id}</span>
                <h3>{stage.title}</h3>
              </div>
              <p className="stage-subtitle">{stage.subtitle}</p>
              <span className="expand-icon">{activeStage === stage.id ? '−' : '+'}</span>
            </button>

            {activeStage === stage.id && (
              <div className="stage-details">
                {stage.steps && (
                  <div className="flow-steps">
                    {stage.steps.map((step, idx) => (
                      <div key={idx} className="flow-step">
                        <span className="step-icon">{step.icon}</span>
                        <div className="step-content">
                          <strong>{step.label}</strong>
                          <span className="step-desc">{step.desc}</span>
                        </div>
                        {idx < stage.steps.length - 1 && <div className="flow-arrow">→</div>}
                      </div>
                    ))}
                  </div>
                )}

                {stage.branches && (
                  <div className="flow-branches">
                    {stage.branches.map((branch, idx) => (
                      <div key={idx} className={`branch branch-${branch.color}`}>
                        <div className="branch-label">{branch.label}</div>
                        {branch.steps.map((step, stepIdx) => (
                          <div key={stepIdx} className="branch-step">
                            <span className="step-icon">{step.icon}</span>
                            <div className="step-content">
                              <strong>{step.text}</strong>
                              <span className="step-desc">{step.desc}</span>
                            </div>
                            {stepIdx < branch.steps.length - 1 && <div className="flow-arrow-down">↓</div>}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {stage.outcomes && (
                  <div className="flow-outcomes">
                    {stage.outcomes.map((outcome, idx) => (
                      <div key={idx} className={`outcome outcome-${outcome.color}`}>
                        <div className="outcome-header">
                          <span className="outcome-icon">{outcome.icon}</span>
                          <strong>{outcome.label}</strong>
                        </div>
                        <div className="outcome-actions">
                          {outcome.actions.map((action, actionIdx) => (
                            <div key={actionIdx} className="action-item">
                              <span className="action-icon">{action.icon}</span>
                              <div className="action-content">
                                <strong>{action.text}</strong>
                                <span className="action-desc">{action.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {index < stages.length - 1 && <div className="stage-connector">↓</div>}
          </div>
        ))}
      </div>

      <div className="flowchart-cta">
        <p><strong>Result:</strong> Job booked + added to your calendar automatically</p>
        <a href="#book-call" className="btn btn-primary">See It in Action</a>
      </div>
    </div>
  );
}
