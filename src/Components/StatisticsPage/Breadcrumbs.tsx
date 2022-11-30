import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const Breadcrumbs = () => {

  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> /
        <a onClick={refreshPage}>Statistics</a>
      </nav>
    </div>
  );
};
