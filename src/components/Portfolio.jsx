import React from "react";
import flipkart from "../images/flipkart.png";
import g2048 from "../images/2048game.png";
import currencyConvertor from "../images/currencyconvertor.png";
import tenor from "../images/tenor.png";
import tictactoe from "../images/tictactoe.png";
import weather from "../images/weather.png";

const data = [
  {
    img: flipkart,
    name: "Flipkart mobile listing",
    alt: "Flipkart_mobile_listing",
    link: "https://nsvenkatesh.github.io/flipkart/Flipkart/",
    content:
      "This prototype simulates the Flipkart mobile listing interface with functional search filters. It mirrors key aspects of the Flipkart Web app.\nTechnologies used: HTML, CSS, jQuery.",
  },
  {
    img: g2048,
    name: "2048 game",
    alt: "2048_img",
    link: "https://nsvenkatesh.github.io/2048game/2048/",
    content:
      "2048 is a puzzle game. The game is 4x4 grid and the goal is to combine tiles with the same numbers to create a tile with the value of 2048.\nTechnologies used: HTML, CSS, jQuery.",
  },
  {
    img: currencyConvertor,
    name: "Currency convertor",
    alt: "currency_convertor",
    link: "http://exchangerate.orgfree.com/Exchangerate/index.html",
    content:
      "Currency converter is an online tool that allows users to convert the value of one currency to another in real-time based on current exchange rates.\nTechnologies used: HTML, CSS, jQuery.",
  },
  {
    img: tenor,
    name: "Tenor Gif",
    alt: "Tenor_Gif",
    link: "https://nsvenkatesh.github.io/tenor/",
    content:
      "Tenor Gif is a prototype of popular online platform Tenor that provides a vast collection of animated GIFs.\nTechnologies used: HTML, CSS, React Js.",
  },
  {
    img: tictactoe,
    name: "Tic Tac Toe game",
    alt: "Tic Tac Toe",
    link: "https://nsvenkatesh.github.io/tic-tac-toe/",
    content:
      "Fast & fun Tic-Tac-Toe with React & Vite! Play solo vs AI or with a friend. Tracks turns, detects winners, and offers quick restarts.\nTechnologies used: React JS, Tailwind CSS",
  },
  {
    img: weather,
    name: "Weather App",
    alt: "Weather",
    link: "https://nsvenkatesh.github.io/weather-app/",
    content:
      "Real-time Weather App built with React & Vite! Instantly check temperature, humidity, and wind speed for any city.\nTechnologies used: React JS, Tailwind CSS",
  },
];

function Portfolio() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-teal-700 mb-8 border-b-2 border-teal-500 pb-2">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(({ img, name, alt, link, content }) => (
            <div
              key={name}
              className="bg-white flex flex-col rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <a
                href={link}
                target="_blank"
                className="flex justify-center"
                rel="noopener noreferrer"
              >
                <img
                  src={img}
                  alt={alt}
                  className="w-4/5 h-32 sm:h-40 lg:h-48"
                />
              </a>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {content}
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal-600 font-medium inline-block mt-3 border border-teal-500 px-3 py-1 rounded-md hover:bg-teal-500 hover:text-white transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
