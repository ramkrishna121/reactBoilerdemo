import React, { Suspense } from 'react';

import artists from '../Store/index';

import styled, { keyframes } from 'styled-components';

const Heading = styled.h1`
  padding: 20px;
  color: red;
`;

// const BounceAnimation = keyframes`
//   0% { margin-bottom: 0; }
//   50% { margin-bottom: 15px }
//   50% { margin-bottom: 0 }
// `;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Division = styled.div`
   display: inline-block; 
  padding: 10px;
  margin: 30px 30px;
  border: 5px solid rgb(93, 171, 207);
  border-radius: 8px;
  background: lightblue;
  outline-style : dashed;
  outline-color : red;
  opacity : 0.3;
  text-shadow :  2px 2px 2px red;
  box-shadow : 5px 5px 5px blue;
  /* border-radius : 50%; */
  border-image: url(border.png) 30 stretch;

  /* animation: ${BounceAnimation} 0s infinite; */
  animation: ${rotate} 2s linear infinite;
  animation-direction : alternate-reverse;
  animation-timing-function : ease-in-out;
`;

export default function Artists() {
  return (
    <>
      <Heading>MTV Base Headline Artists 2019</Heading>
      {artists.map(artist => (
        <div key={artist.id}>
          <Division>
            <h2>{artist.name}</h2>
            <p>genre: {artist.genre}</p>

            <p>Albums released: {artist.albums}</p>
          </Division>
        </div>
      ))}
    </>
  );
}
