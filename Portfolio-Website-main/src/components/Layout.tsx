const Layout = () => {
  return (
    <main>
      <div className="landing-section">
        {/* Landing content */}
      </div>
      
      <div className="about-section">
        {/* About content */}
      </div>

      <div className="tech-stack-section">
        {/* Tech stack content - separated from work */}
        <TechStack />
      </div>

      <div className="work-section">
        {/* Work content - now separate */}
        <Work />
      </div>
    </main>
  );
}; 