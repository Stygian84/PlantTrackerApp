import React from "react";
import "../css/components/ToggleSwitch.css";

function ToggleSwitch(props) {
  const { checked, onChange } = props;

  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
}

export default ToggleSwitch;
