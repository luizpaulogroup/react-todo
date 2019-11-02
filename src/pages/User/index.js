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
            error: null
        }
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

    }

    render() {

        const { error } = this.state;

        return (
            <div className="content">
                <p className="title">Todo</p>
                <form
                    className="form"
                    onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            className="input"
                            placeholder="name"
                            autoComplete="off"
                            onChange={(text) => this.setState({ name: text.target.value })}
                        />
                        <input
                            className="input"
                            placeholder="email"
                            autoComplete="off"
                            onChange={(text) => this.setState({ email: text.target.value })}
                        />
                        <input
                            className="input"
                            placeholder="language"
                            autoComplete="off"
                            onChange={(text) => this.setState({ language: text.target.value })}
                        />
                        {error && <div className="error"><p style={{ color: '#FFF' }}>{error}</p></div>}
                        <button className="button" type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}