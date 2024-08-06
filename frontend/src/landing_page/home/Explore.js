// Explore.js
import React from 'react';
import Card from '../Card';
import './Explore.css'; 

const Explore = () => {
  const cardsData = [
    {
      image: "https://i.imgur.com/oYiTqum.jpg",
      thumb: "https://i.imgur.com/7D7I6dI.png",
      title: "Jessica Parker",
      status: "1 hour ago",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
    },
    {
      image: "https://i.imgur.com/2DhmtJ4.jpg",
      thumb: "https://i.imgur.com/sjLMNDM.png",
      title: "Kim Cattrall",
      status: "3 hours ago",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
    },
    {
      image: "https://i.imgur.com/oYiTqum.jpg",
      thumb: "https://i.imgur.com/7D7I6dI.png",
      title: "Sarah Jessica",
      status: "5 hours ago",
      description: "Dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
    },
    {
      image: "https://i.imgur.com/2DhmtJ4.jpg",
      thumb: "https://i.imgur.com/sjLMNDM.png",
      title: "Cynthia Nixon",
      status: "8 hours ago",
      description: "Adipisicing elit. Asperiores, blanditiis?"
    },
    {
      image: "https://i.imgur.com/4VtW7iJ.jpg",
      thumb: "https://i.imgur.com/MvQhYgT.png",
      title: "Kristin Davis",
      status: "12 hours ago",
      description: "Eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "https://i.imgur.com/F5TZ11C.jpg",
      thumb: "https://i.imgur.com/6h3Kgy3.png",
      title: "Chris Noth",
      status: "1 day ago",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      image: "https://i.imgur.com/3tYS61n.jpg",
      thumb: "https://i.imgur.com/D8m9k7A.png",
      title: "David Eigenberg",
      status: "2 days ago",
      description: "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
    },
    {
      image: "https://i.imgur.com/bXGqCpT.jpg",
      thumb: "https://i.imgur.com/8QZz2JH.png",
      title: "Evan Handler",
      status: "3 days ago",
      description: "Reprehenderit in voluptate velit esse cillum dolore eu fugiat."
    },
    {
      image: "https://i.imgur.com/8fpdlCs.jpg",
      thumb: "https://i.imgur.com/2lw9XT1.png",
      title: "Jason Lewis",
      status: "4 days ago",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui."
    },
    {
      image: "https://i.imgur.com/U0Rhrbd.jpg",
      thumb: "https://i.imgur.com/6mTYRCe.png",
      title: "Kyle MacLachlan",
      status: "5 days ago",
      description: "Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis."
    },
    {
      image: "https://i.imgur.com/F1t6JbR.jpg",
      thumb: "https://i.imgur.com/U5T5uQw.png",
      title: "Mikhail Baryshnikov",
      status: "6 days ago",
      description: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem."
    },
    {
      image: "https://i.imgur.com/jDs1t4r.jpg",
      thumb: "https://i.imgur.com/y3SK2OU.png",
      title: "James Remar",
      status: "1 week ago",
      description: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto."
    }
  ];
  
  

  return (
    <ul className="cards">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          thumb={card.thumb}
          title={card.title}
          status={card.status}
          description={card.description}
        />
      ))}
    </ul>
  );
};

export default Explore;
