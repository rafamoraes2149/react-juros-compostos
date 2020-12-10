import React from 'react';

export default function Installment({ month, p1, p2, p3 }) {
  return (
    <div className="col s3 m2">
      <div className="card-panel teal">
        <span>{month}</span>
        <div className="row">
          <span className="white-text">{p1}</span>
        </div>
        <div className="row">
          <span className="white-text">{p2}</span>
        </div>
        <div className="row">
          <span className="white-text">{p3}%</span>
        </div>
      </div>
    </div>
  );
}
