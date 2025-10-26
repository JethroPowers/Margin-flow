import "./globals.css";

export const metadata = {
  title: "MarginFlow | Convert More Ad Leads into Booked Jobs",
  description:
    "MarginFlow builds done-for-you quote and follow-up systems so contractors turn more paid ad leads into booked jobs automatically."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
