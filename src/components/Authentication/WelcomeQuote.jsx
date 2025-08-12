import React from "react";
import "./WelcomeQuote.css"
 
const WelcomeQuote = () => {
  // You can customize the quotes array with your desired welcome quotes
  const quotes = [
    "Welcome back! Adventure awaits.",
    "Hello traveler! Ready to explore?",
    "Great to see you again! Let's plan your next journey.",
    "Welcome back, wanderer! Your next adventure begins here.",
  ];
 
  // Randomly select a quote from the quotes array
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
 
  return (
    <div className="card" style={{marginTop:'1cm'}}>
      <div className="card-body text-center">
       
        <h5 style={{color:"black"}}>Welcome Back!</h5>
        <p style={{color: "black"}}>{randomQuote}</p>
       
      </div>
    </div>
  );
};
 
export default WelcomeQuote;