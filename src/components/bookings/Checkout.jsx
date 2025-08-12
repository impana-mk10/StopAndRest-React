import React, { useEffect, useState } from "react";
import {
    FaUtensils,
    FaWifi,
    FaTv,
    FaWineGlassAlt,
    FaParking,
    FaCar,
    FaTshirt,
    FaRupeeSign
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getRoomById } from "../utils/ApiFunctions";
import RoomCarousel from "../common/RoomCarousel";
import { Button } from "react-bootstrap";
import NavBar from "../layout/Nav"; // Import the NavBar component
import "./Checkout.css"; // Import Checkout styles

const Checkout = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [roomInfo, setRoomInfo] = useState({
        photo: "",
        roomType: "",
        roomPrice: "",
        propertyName: "",
        address: "",
        postcode: "",
        city: ""
    });

    const { roomId } = useParams();

    useEffect(() => {
        setTimeout(() => {
            getRoomById(roomId)
                .then((response) => {
                    setRoomInfo(response);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setIsLoading(false);
                });
        }, 2000);
    }, [roomId]);

    // Unified long description for all rooms
    const longDescription = `
        Experience a luxurious stay at our hotel where every room is meticulously designed to offer you the utmost comfort and relaxation. Immerse yourself in opulence and indulge in top-notch amenities and services. From high-speed WiFi to a well-stocked mini bar, we ensure your every need is catered to for an unforgettable stay. Treat yourself to our sumptuous breakfast spread each morning and unwind in our spa facilities after a day of exploring the city. Our dedicated concierge team is available around the clock to assist you with any inquiries or arrangements, ensuring your stay is seamless and memorable.

        Discover a sanctuary of tranquility and sophistication in the heart of the city. Our elegantly appointed rooms offer a peaceful retreat from the hustle and bustle of urban life, allowing you to relax and recharge in style. Start your day with a leisurely stroll through our lush garden oasis or rejuvenate your senses with a pampering spa treatment. Indulge in delectable cuisine at our rooftop restaurant, where panoramic views and exquisite flavors await. Whether you're here for business or pleasure, our hotel provides an unparalleled experience that will leave you feeling refreshed and revitalized.
    `;

    return (
        <>
            <NavBar /> {/* Render the NavBar component */}
            <div className="checkout-container">
                <section className="container checkout-section">
                    <div className="row align-items-start">
                        <div className="col-md-6 mt-5 mb-5">
                            {isLoading ? (
                                <p>Loading room information...</p>
                            ) : error ? (
                                <p>{error}</p>
                            ) : (
                                <div className="room-info">
                                    <img
                                        src={`data:image/png;base64,${roomInfo.photo}`}
                                        alt="Room photo"
                                        className="room-photo"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="col-md-6 mt-5 mb-5">
                            {!isLoading && !error && (
                                <div className="room-details">
                                    <h3>{roomInfo.propertyName}</h3>
                                    <p className="room-type">Room Type: {roomInfo.roomType}</p>
                                    <p className="room-price">Price per night: <FaRupeeSign style={{ fontSize: '13px' }}/>{roomInfo.roomPrice}</p>
                                    <div className="description-container">
                                        <p className="description">{longDescription}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {!isLoading && !error && (
                        <div className="row mt-3">
                            <div className="col-12">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Property Name:</th>
                                            <td>{roomInfo.propertyName}</td>
                                            <th>Room Type:</th>
                                            <td>{roomInfo.roomType}</td>
                                        </tr>
                                        <tr>
                                            <th>Price per night:</th>
                                            <td><FaRupeeSign/> {roomInfo.roomPrice}</td>
                                            <th>Address:</th>
                                            <td>{roomInfo.address}</td>
                                        </tr>
                                        <tr>
                                            <th>Postcode:</th>
                                            <td>{roomInfo.postcode}</td>
                                            <th>City:</th>
                                            <td>{roomInfo.city}</td>
                                        </tr>
                                        <tr>
                                            <th>Room Service:</th>
                                            <td colSpan="3">
                                                <ul className="list-unstyled">
                                                    <li><FaWifi /> Wifi</li>
                                                    <li><FaTv /> Netflix Premium</li>
                                                    <li><FaUtensils /> Breakfast</li>
                                                    <li><FaWineGlassAlt /> Mini bar refreshment</li>
                                                    <li><FaCar /> Car Service</li>
                                                    <li><FaParking /> Parking Space</li>
                                                    <li><FaTshirt /> Laundry</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link to={`/book-room/${roomId}`}>
                                        <Button className="btn btn-hotel">Reserve Now</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
                <div className="container">
                    <RoomCarousel />
                </div>
            </div>
        </>
    );
};

export default Checkout;
