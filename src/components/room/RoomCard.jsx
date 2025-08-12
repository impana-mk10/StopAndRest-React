import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaBed, FaHotel, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";

function RoomCard({ room, exchangeRate }) {
  // Assuming exchangeRate is the conversion rate from dollars to rupees

  // Convert price from dollars to rupees
  const roomPriceInRupees = room.roomPrice * exchangeRate;

  return (
    <Col key={room.id} className="mb-4" xs={12}>
      <Card>
        <Card.Body className="d-flex flex-wrap align-items-center">
          <div className="flex-shrink-0 mr-3 mb-md-0">
            <Link to={`/details/${room.id}`}>
              <Card.Img
                variant="top"
                src={`data:image/png;base64,${room.photo}`}
                alt="Room Photo"
                style={{ width: "100%", maxWidth: "200px", height: "auto" }}
              />
            </Link>
          </div>
          <div className="flex-grow-1 ml-3 px-5">
            <Card.Title className="hotel-color">{room.propertyName}</Card.Title>
            <Card.Text>
            <FaBed />
            &nbsp;{room.roomType}
        </Card.Text>
            {/* Display price in rupees */}
            <Card.Text className="room-price">
              <FaRupeeSign className="mr-2" /> {room.roomPrice.toFixed(2)}/Night
            </Card.Text>
            <Card.Text>
              <FaMapMarkerAlt className="mr-2" /> {room.city}
            </Card.Text>
            <a
              href={`mailto:${room.ownerEmail}`}
              className="btn btn-hotel btn-sm"
            >
              Contact Owner
            </a>
          </div>
          <div className="flex-shrink-0 mt-3">
            <Link to={`/details/${room.id}`} className="btn btn-hotel btn-sm">
              Book Now
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RoomCard;
