import React, { Component } from 'react';

import UserController from '../../controllers/UserController';

import './styles.css';

export default class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            language: '',
            error: null,
            users: []
        }
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        const users = UserController.getAll();
        this.setState({ users });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, language } = this.state;

        if (name === '') {
            this.setState({ error: 'name is required' });
            return;
        }

        if (email === '') {
            this.setState({ error: 'email is required' });
            return;
        }

        if (language === '') {
            this.setState({ error: 'language is required' });
            return;
        }

        var user = {
            name,
            email,
            language,
        }

        UserController.save(user);
        this.loadUsers();

        this.setState({ name: '', email: '', language: '' })
    }

    render() {

        const { error, users } = this.state;

        return (
            <div className="content">
                <p className="title">Users</p>
                <form
                    className="form"
                    onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            className="input"
                            placeholder="name"
                            autoComplete="off"
                            onChange={(text) => this.setState({ name: text.target.value })}
                            value={this.state.name}
                        />
                        <input
                            className="input"
                            placeholder="email"
                            autoComplete="off"
                            onChange={(text) => this.setState({ email: text.target.value })}
                            value={this.state.email}
                        />
                        <input
                            className="input"
                            placeholder="language"
                            autoComplete="off"
                            onChange={(text) => this.setState({ language: text.target.value })}
                            value={this.state.language}
                        />
                        {error && <div className="error"><p style={{ color: '#FFF' }}>{error}</p></div>}
                        <button className="button" type="submit">Save</button>
                    </div>
                </form>
                <div className="list-users">
                    <ul>
                        {users.map((user, key) => (
                            <li key={key}>
                                <ul>
                                    <li>NAME: {user.name}</li>
                                    <li>EMAIL: {user.email}</li>
                                    <li>LANGUAGE: {user.language}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}