import styled from "styled-components";

const Style = styled.div`
  .card {
    box-sizing: border-box;
    margin-top: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #00000005;
    padding: 0px 0px 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }
  th {
    text-align: left;
    padding: 20px 10px 20px 15px;
  }
  tr {
    position: relative;
    border-bottom: 1px solid #f5f5f5;
  }
  td {
    position: relative;
    padding: 20px 15px;
    vertical-align: center;
  }
  input {
    cursor: pointer;
  }
  .room__img {
    float: left;
    width: 60%;
    height: 50%;
    left: 0;
    border-radius: 10px;
  }
  .room_txt {
    padding-left: 70%;
    &__p1 {
      cursor: pointer;
      margin-top: 0;
      color: #799283;
      font-size: 12px;
    }
    &__p2 {
      color: #393939;
      font-size: 14px;
    }
  }
  .mini {
    color: #799283;
    font-size: 12px;
    padding-left: 5px;
  }
  .status {
    display: flex;
    justify-content: space-between;
    & button {
    }
    &__b1 {
      font-family: "Poppins", sans-serif;
      color: #ffffff;
      border-style: none;
      border-radius: 10px;
      padding: 10px 20px;
      margin-right: 50px;
    }
    &__b2 {
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 20px;
      border-style: none;
      border-radius: 10px;
      color: #6e6e6e;
      background-color: inherit;
      font-size: 25px;
      font-weight: 700;
      &:hover {
        color: black;
        font-size: 28px;
      }
    }
  }
  .Availible {
    background-color: #5ad07a;
  }
  .Booked {
    background-color: #e23428;
  }
  .pagination {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }
  .right-filter__button {
    color: #135846;
    background-color: inherit;
    font-size: 14px;
    border-style: none;
    border: 1px solid #135846;
    border-radius: 10px;
    padding: 15px 25px;
    margin-left: 20px;
    &:hover {
      color: #ffffff;
      background-color: #135846;
    }
  }
  .selected {
    color: #ffffff;
    background-color: #135846;
  }
`;
export const RoomsTable = () => {
  return (
    <>
      <Style>
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Room Name</th>
                <th>Bed Type</th>
                <th>Room Floor</th>
                <th>Facilities</th>
                <th>Rate</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img className="room__img" src="http://gobebaba.com/images/merlin-grey-ral-colour_2.jpg" alt="" />
                  <div className="room_txt">
                    <p className="room_txt__p1">#0123456</p>
                    <p className="room_txt__p2">DeluxeA-91234</p>
                  </div>
                </td>
                <td>Double Bed</td>
                <td>Floor A-1</td>
                <td>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</td>
                <td>
                  $145<span className="mini">/night</span>
                </td>
                <td>
                  <button className="status__b1 Availible">Availible</button>
                  <button className="status__b2">⋮</button>
                </td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img className="room__img" src="http://gobebaba.com/images/merlin-grey-ral-colour_2.jpg" alt="" />
                  <div className="room_txt">
                    <p className="room_txt__p1">#0123456</p>
                    <p className="room_txt__p2">DeluxeA-91234</p>
                  </div>
                </td>
                <td>Double Bed</td>
                <td>Floor A-1</td>
                <td>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</td>
                <td>
                  $145<span className="mini">/night</span>
                </td>
                <td>
                  <button className="status__b1 Booked">Booked</button>
                  <button className="status__b2">⋮</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img className="room__img" src="http://gobebaba.com/images/merlin-grey-ral-colour_2.jpg" alt="" />
                  <div className="room_txt">
                    <p className="room_txt__p1">#0123456</p>
                    <p className="room_txt__p2">DeluxeA-91234</p>
                  </div>
                </td>
                <td>Double Bed</td>
                <td>Floor A-1</td>
                <td>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</td>
                <td>
                  $145<span className="mini">/night</span>
                </td>
                <td>
                  <button className="status__b1 Availible">Availible</button>
                  <button className="status__b2">⋮</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img className="room__img" src="http://gobebaba.com/images/merlin-grey-ral-colour_2.jpg" alt="" />
                  <div className="room_txt">
                    <p className="room_txt__p1">#0123456</p>
                    <p className="room_txt__p2">DeluxeA-91234</p>
                  </div>
                </td>
                <td>Double Bed</td>
                <td>Floor A-1</td>
                <td>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</td>
                <td>
                  $145<span className="mini">/night</span>
                </td>
                <td>
                  <button className="status__b1 Availible">Availible</button>
                  <button className="status__b2">⋮</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img className="room__img" src="http://gobebaba.com/images/merlin-grey-ral-colour_2.jpg" alt="" />
                  <div className="room_txt">
                    <p className="room_txt__p1">#0123456</p>
                    <p className="room_txt__p2">DeluxeA-91234</p>
                  </div>
                </td>
                <td>Double Bed</td>
                <td>Floor A-1</td>
                <td>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</td>
                <td>
                  $145<span className="mini">/night</span>
                </td>
                <td>
                  <button className="status__b1 Booked">Booked</button>
                  <button className="status__b2">⋮</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img className="room__img" src="http://gobebaba.com/images/merlin-grey-ral-colour_2.jpg" alt="" />
                  <div className="room_txt">
                    <p className="room_txt__p1">#0123456</p>
                    <p className="room_txt__p2">DeluxeA-91234</p>
                  </div>
                </td>
                <td>Double Bed</td>
                <td>Floor A-1</td>
                <td>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</td>
                <td>
                  $145<span className="mini">/night</span>
                </td>
                <td>
                  <button className="status__b1 Booked">Booked</button>
                  <button className="status__b2">⋮</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <div>
            <p>Showing 6 of 6 Data</p>
          </div>
          <div className="right-filter">
            <button className="right-filter__button">Prev</button>
            <button className="right-filter__button selected">1</button>
            <button className="right-filter__button">Next</button>
          </div>
        </div>
      </Style>
    </>
  );
};
