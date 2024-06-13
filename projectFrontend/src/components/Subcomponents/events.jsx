import React, { useState, useEffect } from 'react';
import Card from './card/Card';
import "./event.css"

const EventShow = () => {
  const [lists, setLists] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/events/");
      const data = await response.json();
      setLists(data);
      console.log(lists)
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Events List</h1>
      <div className="container">
      {lists.map((element, index) => (
          <Card key={index} data={element}/>
        ))}
      </div>
    </>
  );
};

export default EventShow;