import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { Card, Row, Table, Col, CardBody, CardTitle, Button } from "reactstrap";
import timerIcon from "../../assets/utils/images/timer.png";
import Pagination from "./../../components/Pagination/Pagination";

export default function PatientList(props) {
  const history = useHistory();
  // console.log("history: ", history);
  const handleClick = () => {
    console.log("handleClick: ");
    history.push("/patient-info");
  };
  return (
    <Row>
      <Col lg="10" className="mx-auto">
        <Card className="main-card mb-3">
          <CardBody>
            {/* <CardTitle>Table bordered</CardTitle> */}
            <Table className="mb-0 text-center" bordered>
              <thead>
                <tr>
                  <th>MRN</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Schdule</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>
                    <img src={timerIcon} />
                  </td>
                  <td>View</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Thornton</td>
                  <td>
                    <img src={timerIcon} />
                  </td>
                  <td>View</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>the Bird</td>
                  <td>
                    <img src={timerIcon} />
                  </td>
                  <td>
                    <span onClick={handleClick}>View</span>
                  </td>
                </tr>
              </tbody>
            </Table>

            <div
              className="d-flex"
              style={{
                marginTop: "10px",
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <span className="Rows-per-page">Rows per page:</span>
              <select
                className="form-control rows-per-page-select"
                name="pageSize"
                // value={pageSize}
                // onChange={(e) => handleInputChange(e)}
                style={{ width: "65px" }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
              &nbsp;&nbsp;
              <div style={{ marginTop: "5px" }}>
                <Pagination
                  margin={2}
                  page={1}
                  count={10}
                  // page={page}
                  // count={totalPages}
                  // pageSize={pageSize}
                  // totalRecords={totalRetailCounts}
                  // onPageChange={handlePageChange}
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
