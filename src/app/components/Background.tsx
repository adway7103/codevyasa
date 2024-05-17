import React from "react";

function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full min-h-screen bg-black bg-grid-white/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}

export default Background;
