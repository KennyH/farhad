import React from 'react';

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

export default ConcertListings;
