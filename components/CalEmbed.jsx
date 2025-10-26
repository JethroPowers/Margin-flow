"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const NAMESPACE = "marginflow-walkthrough";
const CAL_LINK = "jethroxavier/marginflow-walkthrough";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: NAMESPACE });
        cal("ui", {
          theme: "light",
          hideEventTypeDetails: false,
          layout: "month_view"
        });
      } catch (error) {
        console.error("Failed to initialize Cal embed", error);
      }
    })();
  }, []);

  return (
    <div className="cal-wrapper">
      <Cal
        namespace={NAMESPACE}
        calLink={CAL_LINK}
        className="cal-embed-frame"
        style={{ width: "100%", height: "100%" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
