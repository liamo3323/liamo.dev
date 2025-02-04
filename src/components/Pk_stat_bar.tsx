import React from "react";

interface ProgressBarProps {
  value: number;
  max: number;
  color?: string; // Optional custom color
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, color = "#3498db" }) => {
  const percentage = max > 0 ? Math.min((value / max) * 100, 100) : 0;

  return (
    <div style={styles.container}>
      <div style={{ ...styles.bar, width: `${percentage}%`, backgroundColor: color }} />
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: "100%",
    height: "16px",
    backgroundColor: "#ddd",
    borderRadius: "8px",
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    transition: "width 0.3s ease-in-out",
  },
};

export default ProgressBar;