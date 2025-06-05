import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accordion = () => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/accordion')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
      {items.map((item, index) => (
        <div key={item._id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
          <div
            onClick={() => toggleIndex(index)}
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div style={{ padding: '10px 0' }}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
