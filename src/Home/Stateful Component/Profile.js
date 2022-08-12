import React from "react";
import { Card, CardBody, CardHeader, Button } from 'reactstrap';


export default class Profile extends React.Component {
    state = {
        data: []
    }

    saveHandle = async (name, company, position) => {
        // console.log(name, company, position)
        await this.setState(prevState => ({
            data: [...prevState.data, { "id": this.state.data.length + 1, "name": name, "company": company, "position": position }]
        }))
        await this.props.reset(this.state.data)
    }

    render() {
        return (
            <>
                <Card bg="primary" style={{ height: '300px' }} >
                    <CardHeader style={{ backgroundColor: '#47CDF1' }}><h1>Profile</h1></CardHeader>
                    <CardBody>
                        Nama = {this.props.name}
                        <br />
                    Perusahaan = {this.props.company}
                        <br />
                    Posisi = {this.props.position}
                    </CardBody>
                    <div style={{ float: 'right' }}>
                        <Button
                            className="btn-pill btn-lg float-right"
                            style={{ background: "#9ACD32", border: "none", width: '100px' }}
                            onClick={() => { this.saveHandle(this.props.name, this.props.company, this.props.position) }}
                        >
                            Save
                        </Button>
                    </div>
                </Card>

            </>
        );
    }
}

