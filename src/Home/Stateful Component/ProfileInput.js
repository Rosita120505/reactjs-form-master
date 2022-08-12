import React from "react";
import { Input, Form, FormGroup, Label, Col, Row } from 'reactstrap';
import Profile from './Profile';
import TableProfile from './TableProfile';

export default class HomePage extends React.Component {
    state = {
        name: '',
        company: '',
        position: '',
        listProfile: [],
    }

    toggle = (data) => {
        this.setState({
            name: '',
            company: '',
            position: ''
        })
        this.setState({ listProfile: data })
        //console.log(this.state.listProfile)
    }

    dataChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        //console.log('aaa', event.target.value)
    }

    render() {
        return (
            <div className="App" >
                <Row>
                    <Col md="6">
                        <h1>Profile Input</h1>
                        <Form id="formBiodata">
                            <FormGroup>
                                <Label for="name"><b>Nama</b></Label>
                                <Input type="text" name="name" id="name"
                                    autoComplete='off'
                                    placeholder="Masukkan Nama"
                                    value={this.state.name} required
                                    onChange={this.dataChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="company"><b>Perusahaan</b></Label>
                                <Input type="text" name="company" id="company"
                                    autoComplete='off'
                                    placeholder="Perusahaan"
                                    value={this.state.company} required
                                    onChange={this.dataChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="position"><b>Posisi</b></Label>
                                <Input type="text" name="position" id="position"
                                    autoComplete='off'
                                    placeholder="Posisi"
                                    value={this.state.position} required
                                    onChange={this.dataChange} />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md="6">
                        <Profile
                            name={this.state.name}
                            company={this.state.company}
                            position={this.state.position}
                            reset={(data) => { this.toggle(data) }}
                        />
                    </Col>
                </Row>
                <TableProfile listProfile={this.state.listProfile} key={this.state.listProfile.length}/>
            </div >
        );
    }
}