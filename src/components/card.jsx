/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './card.css';

const Card = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h2 className="card-title">{children}</h2>;
};

const CardDescription = ({ children }) => {
  return <p className="card-description">{children}</p>;
};

const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent };