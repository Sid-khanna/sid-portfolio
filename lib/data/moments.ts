export type Moment = {
  title: string;
  caption?: string;
  year?: string;
  src: string;   // path in /public
  tag?: string;
  href?: string;
};

export const MOMENTS: Moment[] = [
  { title: "World Solar Challenge", caption: "Structural & fabrication lead (WSC ’23)", year: "2023", src: "/images/work/wsc-finish.jpeg", tag: "Hardware", href: "/projects?tab=work" },
  { title: "ParSight", caption: "Golf-ball tracking drone (HSV + IBVS/PD) on Jetson", year: "2024", src: "/images/work/drone-parsight.png", tag: "Robotics" },
  { title: "CAD Automation", caption: "CPS → SIGMAXIM macros/DLLs to cut cycle time", year: "2025", src: "/images/work/shop-sanding.jpeg", tag: "Automation" },
  { title: "RSX Rover", caption: "Wiring + autonomy stack", src: "/images/work/rover-rsx.jpg", tag: "Robotics" },
  { title: "Scuba", caption: "Where ideas breathe", src: "/images/life/scuba.jpeg", tag: "Life" },
  { title: "Kayaking", caption: "Quiet mornings, clear thinking", src: "/images/life/kayak.jpeg", tag: "Life" },
  { title: "Vinyl Nights", caption: "Records, writing, and late-night edits", src: "/images/life/vinyl.jpeg", tag: "Creative" },
];
