import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const Breadcrumbs = () => {
  const { exerciseID, statistics } = useParams();

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> /
        <a href={`/exercises/${exerciseID}/statistics`}>Statistics</a>
      </nav>
    </div>
  );
};
