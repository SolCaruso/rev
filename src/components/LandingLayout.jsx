"use client";

export default function LandingLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Main content area for the landing page sections */}
      <main className="flex-grow">{children}</main>

    </div>
  );
}