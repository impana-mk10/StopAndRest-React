import React, { useEffect, useState } from "react";
import { getRoomTypes } from "../utils/ApiFunctions";

function RoomTypeSelector({ handleRoomInputChange, newRoom }) {
  const [roomTypes, setRoomTypes] = useState([]);
  const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState("");

  useEffect(() => {
    getRoomTypes()
      .then((data) => {
        setRoomTypes(data);
      })
      .catch((error) => {
        console.error("Error fetching room types:", error);
        // Handle error gracefully
      });
  }, []);

  const handleNewRoomTypeInputChange = (e) => {
    setNewRoomType(e.target.value);
  };

  const handleAddNewRoomType = () => {
    if (newRoomType.trim() !== "") {
      setRoomTypes([...roomTypes, newRoomType]);
      setNewRoomType("");
      setShowNewRoomTypeInput(false);
    }
  };

  return (
    <div>
      <select
        id="roomType"
        className="form-control mb-3"
        name="roomType"
        value={newRoom.roomType}
        onChange={(e) => {
          if (e.target.value === "Add New") {
            setShowNewRoomTypeInput(true);
          } else {
            handleRoomInputChange(e);
          }
        }}
      >
        <option value={""}>Select a room type</option>
        <option value={"Add New"}>Add New</option>
        {roomTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      {showNewRoomTypeInput && (
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter a new room type"
            value={newRoomType}
            onChange={handleNewRoomTypeInputChange}
          />
          <button
            className="btn btn-hotel"
            type="button"
            onClick={handleAddNewRoomType}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}

export default RoomTypeSelector;
