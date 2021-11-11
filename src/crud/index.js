import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Tabel from './Table';
import Formulir from './Formulir'

export default class Crud extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            ussername: "",
            password: "",
            alamat: "",
            id: "",
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.id === "") {
            this.setState({
                user: [
                    ...this.state.user,
                    {
                        id: this.state.user.length + 1,
                        ussername: this.state.ussername,
                        password: this.state.password,
                        alamat: this.state.alamat,

                    }
                ]
            })

        } else {
            const ussers = this.state.user
            ussers.filter((ussername) => ussername.id !== this.state.id)
                .map((filterussername) => {
                    return filterussername
                });

            this.setState({
                user: [
                    ...ussers,
                    {
                        id: this.state.user.length + 1,
                        ussername: this.state.ussername,
                        password: this.state.password,
                        alamat: this.state.alamat,

                    }
                ]
            })
        }
        this.setState({
            ussername: "",
            password: "",
            alamat: "",
            id: ""
        })
    }

    edit = (id) => {
        const usser = this.state.user
        usser.filter((ussername) => ussername.id === id)
            .map((filterussername) => {
                return filterussername
            })
        //console.log(usser)
        this.setState({
            ussername: usser[0]?.ussername,
            password: usser[0]?.password,
            alamat: usser[0]?.alamat,
            id: usser[0]?.id,
        })

    }

    delet = (id) => {
        // const Nusser = this.state.user
        //  Nusser.filter((ussername) => ussername.id !== id)
        //   .map((filterussername) => {
        //     return filterussername
        //});
        console.log(id)

        // this.setState({
        //    user: Nusser
        //})
    }

    render() {
        console.log(this.state.user);
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                    <Tabel user={this.state.user} edit={this.edit} delet={this.delet} />
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
