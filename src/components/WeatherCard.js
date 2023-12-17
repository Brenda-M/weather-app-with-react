import React from 'react';
import { Card, CardDeck} from 'react-bootstrap';

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
  const date = new Date(dt);
  return (
    <div>
      <CardDeck >
      <Card className='weather-cards p-3 m-4'  style={{ width: '15rem' }} bg="secondary">
        <Card.Img
          variant='top'
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <Card.Body>
          <Card.Title>{main}</Card.Title>
          <p>
            {date.toLocaleDateString()} - {date.toLocaleTimeString()}
          </p>
          <p>Min: {Math.round(temp_min)}F</p>
          <p>Max: {Math.round(temp_max)}F</p>
        </Card.Body>
      </Card>
      </CardDeck>
      
    </div>
  );
};
export default WeatherCard;
