import React, { useEffect, useState } from 'react';
import './ServerInfo.css';

const ServerInfo = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/server-info')
      .then(res => res.json())
      .then(data => setInfo(data));
  }, []);

  if (!info) return <p>Loading...</p>;

  return (
    <div className="server-info">
      <p><strong>Players:</strong> {info.players}</p>
      <p><strong>Ping:</strong> {info.ping}</p>
      <p><strong>Tickrate:</strong> {info.tickrate}</p>

      <div className="teams">
        {info.teams.map((team, idx) => (
          <div key={idx} className="team">
            <h4>{team.name}</h4>
            <ul>
              {team.players.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerInfo;