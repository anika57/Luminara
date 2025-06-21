import React, { useState } from "react";
import "./Explanation.css";

function Explanation() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      title: "Nourishing Plant Extracts",
      content:
        "Packed with vitamins and antioxidants, our nourishing plant extracts deeply hydrate, repair, and protect your skin. Experience nature’s touch for a healthy, radiant glow.",
    },
    {
      title: "Rich In Antioxidants",
      content:
        "Our organic oils provide deep moisture and essential nutrients to keep your skin soft, smooth, and glowing.",
    },
    {
      title: "Free From Harsh Chemicals",
      content:
        "Crafted without harsh chemicals, our gentle formulations respect your skin’s natural balance, reducing irritation and promoting health.",
    },
    {
      title: "Free From Harsh Chemicals",
      content:
        "We prioritize sustainability, using biodegradable, eco-friendly ingredients that are kind to both your skin and the environment.",
    },
  ];

  const pointData=[
    {   
        id:"001",
        title:"Stay Hydrated & Glowy",
        content:"Infused with skin-loving ingredients to deeply hydrate and enhance your natural radiance, day and night.",
        image:`${process.env.PUBLIC_URL}/assets/face-mask.png`,
    },
    {   
        id:"002",
        title:"Your New Bedtime Ritual",
        content:"Nourish, repair, and rejuvenate your skin overnight for a fresh, glowing complexion by morning.",
        image:`${process.env.PUBLIC_URL}/assets/bedtime.png`,
    },
    {
        id:"003",
        title:"Hydro-Melt Glow Capsules",
        content:"A concentrated blend of hydration and nutrients that melt into your skin, leaving it soft, plump, and luminous.",
        image:`${process.env.PUBLIC_URL}/assets/capsule.png`,
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="exp-container">
      <div className="exp-upper-heading">
        <p>ORGANIC INGREDIENTS ARE BETTER</p>
      </div>
      <div className="exp-heading">
        <p>
          ACHIEVE RADIANT AND GLOWING SKIN WITH PURE, NATURAL, EFFECTIVE
          INGREDIENTS
        </p>
      </div>
    <div className="exp-main-content">
        <ul className="faq-list">
          {faqData.map((item, index) => (
            <li key={index}>
              <div className="faq">
                <hr />
                <div className="faq-heading" onClick={() => toggleFAQ(index)}>
                  <p>{item.title}</p>
                  <img
                    src={openIndex === index ? `${process.env.PUBLIC_URL}/assets/down-arrow.png` : `${process.env.PUBLIC_URL}/assets/up-arrow.png`}
                    alt="Toggle Icon"
                  />
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        <div className="faq"><hr /></div>
        </ul>
        <div className="exp-image">
          <img src={`${process.env.PUBLIC_URL}/assets/hand-oil.png`} alt="Hand with Oil" />
        </div>
    </div>
    <div className="points">
    <ol className="point-list">
          {pointData.map((item, index) => (
            <li key={index}>
            <hr/>
              <div className="point">
                <div className="point-id">
                    {item.id}
                </div>
                <div className="point-img">
                    <img src={item.image}/>
                </div>
                <div className="point-text">
                <div className="point-heading">
                  <p>{item.title}</p>
                </div>
                <div className="point-answer">
                    <p>{item.content}</p>
                </div>
                </div>
              </div>
            </li>
          ))}
        <hr />
        </ol>
    </div>
    </div>
  );
}

export default Explanation;
