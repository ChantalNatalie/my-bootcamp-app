import React from 'react';
import './SupportInfo.css';

const SupportInfo = ({ items }) => {
  return (
    <div className="support-info">
      {items.map((item, index) => (
        <div key={index} className="support-item">
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SupportInfo;
