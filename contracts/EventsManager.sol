// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract EventManager {
    struct Event {
        string title;
        string description;
        string image;
        string ipfsCID;
        uint256 date;
        address creator;
    }

    Event[] public events;

    function createEvent(
        string memory _title,
        string memory _description,
        string memory _image,
        string memory _ipfsCID,
        uint256 _date
    ) public {
        events.push(Event(_title, _description, _image, _ipfsCID, _date, msg.sender));
    }

    function getAllEvents() public view returns (Event[] memory) {
        return events;
    }
}
