"use client";

import { useState, useEffect, useRef } from "react";

export default function SystemFlowchart() {
  const [activeStage, setActiveStage] = useState(-1);
  const containerRef = useRef(null);
  const stageRefs = useRef([]);

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

  // Scroll-based animation - triggers when stage is in center of screen
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;

      let closestStage = -1;
      let closestDistance = Infinity;

      // Find which stage is closest to the center of the viewport
      stageRefs.current.forEach((stageEl, index) => {
        if (stageEl) {
          const rect = stageEl.getBoundingClientRect();
          const stageCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(stageCenter - centerY);

          // Only consider stages that are at least partially visible
          if (rect.top < windowHeight && rect.bottom > 0) {
            if (distanceFromCenter < closestDistance) {
              closestDistance = distanceFromCenter;
              closestStage = index;
            }
          }
        }
      });

      // Update active stage with smooth transition
      setActiveStage(closestStage);
    };

    // Use requestAnimationFrame for smooth scrolling
    let ticking = false;
    const smoothHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', smoothHandleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', smoothHandleScroll);
  }, []);

  return (
    <div className="flowchart-container" ref={containerRef}>
      <div className="flowchart-header">
        <h2 className="section-title">The MarginFlow System: From Click to Booked Job</h2>
        <p className="flowchart-subtitle">
          This is what happens behind the scenes when a lead clicks your ad. Scroll to see each stage.
        </p>
      </div>

      <div className="flowchart-stages-animated">
        {stages.map((stage, index) => (
          <div
            key={stage.id}
            className="stage-wrapper-animated"
            ref={(el) => (stageRefs.current[index] = el)}
          >
            <div className={`stage-card ${activeStage === index ? 'active-animated' : ''} ${index < activeStage ? 'completed-animated' : ''}`}>
              <div className="stage-header-animated">
                <span className="stage-number-animated">{stage.id}</span>
                <h3>{stage.title}</h3>
              </div>
              <p className="stage-subtitle-animated">{stage.subtitle}</p>

              {/* Show details when active */}
              <div className={`stage-details-animated ${activeStage === index ? 'visible' : ''}`}>
                {stage.steps && (
                  <div className="flow-steps-animated">
                    {stage.steps.map((step, idx) => (
                      <div key={idx} className="flow-step-animated">
                        <span className="step-icon-animated">{step.icon}</span>
                        <div className="step-content-animated">
                          <strong>{step.label}</strong>
                          <span className="step-desc-animated">{step.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {stage.branches && (
                  <div className="flow-branches-animated">
                    {stage.branches.map((branch, idx) => (
                      <div key={idx} className={`branch-animated branch-${branch.color}`}>
                        <div className="branch-label-animated">{branch.label}</div>
                        {branch.steps.map((step, stepIdx) => (
                          <div key={stepIdx} className="branch-step-animated">
                            <span className="step-icon-animated">{step.icon}</span>
                            <div className="step-content-animated">
                              <strong>{step.text}</strong>
                              <span className="step-desc-animated">{step.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {stage.outcomes && (
                  <div className="flow-outcomes-animated">
                    {stage.outcomes.map((outcome, idx) => (
                      <div key={idx} className={`outcome-animated outcome-${outcome.color}`}>
                        <div className="outcome-header-animated">
                          <span className="outcome-icon-animated">{outcome.icon}</span>
                          <strong>{outcome.label}</strong>
                        </div>
                        <div className="outcome-actions-animated">
                          {outcome.actions.map((action, actionIdx) => (
                            <div key={actionIdx} className="action-item-animated">
                              <span className="action-icon-animated">{action.icon}</span>
                              <div className="action-content-animated">
                                <strong>{action.text}</strong>
                                <span className="action-desc-animated">{action.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Animated connector between stages */}
            {index < stages.length - 1 && (
              <div className={`stage-connector-animated ${index < activeStage ? 'flowing' : ''} ${index === activeStage ? 'active-flow' : ''}`}>
                <div className="flow-arrow-animated">↓</div>
                <div className="flow-pulse"></div>
              </div>
            )}
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
