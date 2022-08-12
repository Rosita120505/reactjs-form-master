import React from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";

export default class TableProfile extends React.Component {
  render() {
    return (
      <div>
        {/* <Card bg="primary" style={{ height: '300px' }} >
                    <CardHeader style={{ backgroundColor: '#F1C047' }}><h2>Table Profile</h2></CardHeader>
                    <CardBody> */}
        {/* <Table> */}
        {/* <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Adress</th>
                                </tr>
                            </thead> */}

        <tbody>
          {this.props.listProfile.length ? (
            this.props.listProfile.map((data) => (
              <div className="kartu">
                <div className="card-text">
                  <div className="portada"></div>
                  <div className="title-total">
                    <div className="title" id="valueperusahaan">
                      {data.company}
                    </div>
                    <h2 id="valuenama">{data.name}</h2>
                    <div className="desc" id="valueposisi">
                      {data.position}
                    </div>
                    <div className="actions"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          )}
        </tbody>
        {/* </Table> */}
        {/* </CardBody>
                 </Card>  */}
      </div>
    );
  }
}
