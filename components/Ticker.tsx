const items = [
  'New Website Builds', 'Project Rescue', '3D Construction Showcases',
  'Custom Web Apps', 'Always-On Support', 'Performance Optimization',
  'Home Builder Websites', 'Concrete Company Sites', '15+ Years Experience',
  'Zero Hidden Fees', 'Ann Arbor, Michigan', 'Client-First Approach',
];

// Duplicate for seamless loop
const allItems = [...items, ...items];

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-in">
        {allItems.map((t, i) => (
          <span className="titem" key={i}>
            <span className="tdot">◆</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
