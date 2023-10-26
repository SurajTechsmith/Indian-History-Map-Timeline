import React, { useState } from 'react';
import { motion} from 'framer-motion';
import data from './data.json';
import Eimg from './image.webp';

import './history.css';

 

function History({ location }) {
  const [selectedCard, setSelectedCard] = useState(null);


  return (
    <div className="history">
      <ul>
        {data.events.map((event, index) => (
          <motion.li
            key={index}
            layoutId={index.toString()}
            onClick={() => {
              setSelectedCard(selectedCard === index ? null : index);
              location(event.longitude, event.latitude);
            }}
            className={selectedCard === index ? 'selected overlay card' : 'linorm'}
          >
           <motion.div>
            <motion.figure>
              <motion.img
               className={selectedCard === index ? 'card-image' : ''}
                layout="position"
                src={event.image || Eimg}
                alt={`Event ${event.year}`}
                onError={(e) => {
                  e.target.src = Eimg;
                }}
              />
            </motion.figure>
            </motion.div>
            <motion.div    className={selectedCard === index ? 'text-content' : ''}>
            <motion.h2 layout="position">{event.year}</motion.h2>
            <motion.h5 layout="position">{event.place}</motion.h5>
          
            {selectedCard === index && (
              <motion.p layout="position">{event.description}</motion.p>
            )}
            </motion.div>
          </motion.li>
        ))}
      </ul>
    
    </div>
  );
}

export default History;