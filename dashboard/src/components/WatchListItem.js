import React, { useState } from "react";

const WatchListItem = ({ patient, onSelectPatient }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
    onSelectPatient(patient);
  };

  return (
    <li onClick={handleClick}>
      <div className="item row">
        <div className="col-5">
          <p>{patient.name}</p>
        </div>
        <div className="col-2">
          <p>{patient.age}</p>
        </div>
        <div className="col-5">
          <p>{patient.condition}</p>
        </div>
      </div>
      
    </li>
  );
};

export default WatchListItem;
