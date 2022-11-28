import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

export const Breadcrumbs = () => {
  const { exerciseID, statistics } = useParams();

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> /
        <a href={`/exercises/${exerciseID}/`}>Exercise</a>
      </nav>
    </div>
  );
};
