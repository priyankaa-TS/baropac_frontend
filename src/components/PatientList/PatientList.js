import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { Card, Row, Table, Col, CardBody, CardTitle, Button } from "reactstrap";
import timerIcon from "../../assets/utils/images/timer.png";
import Pagination from "./../../components/Pagination/Pagination";

export default function PatientList() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/patient-info");
  };
  return (
    <Row>
      <Col lg="10" className="mx-auto">
        <Card className="main-card mb-3">
          <CardBody>
            {/* <CardTitle>Table bordered</CardTitle> */}
            <Table className="mb-0 text-center" bordered responsive>
              <thead>
                <tr>
                  <th>MRN</th>
                  <th>Date of Reg.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Last Successful Programming Date</th>
                  <th>Schdule</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>14/07/2022</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>26 Jul 2022 02:00 PM</td>
                  <td>
                    <img
                      src={timerIcon}
                      className="cursor-pointer"
                      onClick={handleClick}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>14/07/2022</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Thornton</td>
                  <td>26 Jul 2022 02:00 PM</td>

                  <td>
                    <img
                      src={timerIcon}
                      className="cursor-pointer"
                      onClick={handleClick}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>14/07/2022</td>

                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>the Bird</td>
                  <td>26 Jul 2022 02:00 PM</td>

                  <td>
                    <img
                      src={timerIcon}
                      className="cursor-pointer"
                      onClick={handleClick}
                    />
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
