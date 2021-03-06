import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director,idx)=> (
        <div key={idx} className='director'>
        <h3>{director.name}</h3>
          <ul>
            {director.movies.map((movie, idx)=>(
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
