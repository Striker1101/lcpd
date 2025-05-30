import React from 'react'

export default function Button({link, text}) {
  return (
    <a href={link} className="bg-red-600 text-white p-1 rounded">
      {text}
    </a>
  );
}
