import React from 'react';

export default function Banner() {
  return (
    <img
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "600px",
        padding: "0",
        margin: "0",
        objectFit: "cover"
      }}
      src="banner.png"
      alt="Banner"
    />
  );
}
