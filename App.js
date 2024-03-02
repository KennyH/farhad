import React, { useEffect, useState } from 'react';
import happy1 from './images/happy1.webp';
import happy2 from './images/happy2.webp';
import happy3 from './images/happy3.webp'; // Adjust the path as necessary

const images = [happy1, happy2, happy3];

// Define the ConcertListings component
const concerts = [
  { id: 1, artist: 'The Cosmic Keys', date: '2024-04-15', location: 'The Grand Arena' },
  { id: 2, artist: 'Jazz in Motion', date: '2024-04-20', location: 'Downtown Club' },
  { id: 3, artist: 'Electro Symphony', date: '2024-04-25', location: 'City Hall Auditorium' },
  { id: 4, artist: 'Rock Revivalists', date: '2024-05-02', location: 'Open Air Theatre' },
  { id: 5, artist: 'Folklore Singers', date: '2024-05-10', location: 'Riverside Festival Grounds' },
];

const ConcertListings = () => {
  return (
    <div>
      <h2>Upcoming Concerts</h2>
      <ul>
        {concerts.map(concert => (
          <li key={concert.id}>
            <strong>{concert.artist}</strong> - {concert.date} at {concert.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const [positions, setPositions] = useState(
    images.map(() => ({
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100),
      dx: (Math.random() - 0.5) * 10,
      dy: (Math.random() - 0.5) * 10,
    }))
  );

  useEffect(() => {
    const moveImages = () => {
      setPositions((currentPositions) =>
        currentPositions.map(({ x, y, dx, dy }) => {
          let newX = x + dx;
          let newY = y + dy;

          if (newX < 0 || newX + 100 > window.innerWidth) {
            dx = -dx;
          }
          if (newY < 0 || newY + 100 > window.innerHeight) {
            dy = -dy;
          }

          return { x: newX, y: newY, dx, dy };
        })
      );
    };

    const intervalId = setInterval(moveImages, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      {positions.map((pos, index) => (
        <img
          key={index}
          src={images[index]}
          alt={`Happy ${index + 1}`}
          style={{
            position: 'absolute',
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: '100px', // Adjust based on your image size
          }}
        />
      ))}
      {/* Include the ConcertListings component */}
      <ConcertListings />
    </div>
  );
}

export default App;
