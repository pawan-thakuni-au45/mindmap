
import React, { useState } from 'react';
import './MindMap.css';

const phasesData = [
  { id: 'market-research', name: 'Market Research', details: 'Conduct market surveys, analyze competitors, identify target audience, gather consumer feedback.' },
  { id: 'planning', name: 'Planning', details: 'Define project scope and objectives, establish project timeline and budget, allocate resources, identify potential risks and mitigation strategies.' },
  { id: 'design', name: 'Design', details: 'Conceptualize vehicle design, create prototypes, test for functionality and safety, refine design based on feedback.' },
  { id: 'manufacturing', name: 'Manufacturing', details: 'Source materials and components, set up manufacturing facilities, produce vehicle units, implement quality control measures.' },
  { id: 'sales', name: 'Sales', details: 'Develop marketing strategies, launch advertising campaigns, distribute vehicles to dealerships, monitor sales performance.' }
];

const MindMap = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const handlePhaseHover = (phaseId) => {
    setSelectedPhase(phaseId);
  };

  return (
    <div className="timeline-container">
      <div className="timeline">
        {phasesData.map((phase) => (
          <div
            key={phase.id}
            className={`phase ${selectedPhase === phase.id ? 'selected' : ''}`}
            onMouseEnter={() => handlePhaseHover(phase.id)}
            onMouseLeave={() => setSelectedPhase(null)}
          >
            {phase.name}
            <div className="tooltip">{phase.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindMap;