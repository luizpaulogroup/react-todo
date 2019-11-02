import React, { Component } from 'react';

import User from '../controllers/UserController';

// Aplicação utilizando localStorage com ReactJS

export default class Todo extends Component {

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

        User.save(user);

    }

    render() {

        const { error } = this.state;

        return (
            <div style={{
                flex: 1,
                margin: 'auto',
                maxWidth: 720,
                display: 'flex',
                background: '#212121',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <p style={{
                    color: '#FFF',
                    fontSize: 18
                }}>Todo</p>

                <form
                    onSubmit={this.handleSubmit}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,
                    }}>
                    <div>
                        <div>
                            <input
                                style={{
                                    borderLeft: 0,
                                    borderTop: 0,
                                    borderRight: 0,
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'yellow',
                                    padding: 15,
                                    boxSizing: 'border-box',
                                    height: 25,
                                    width: '100%',
                                    outline: 'none',
                                    background: '#212121',
                                    color: '#FFF'
                                }}
                                placeholder="name"
                                autoComplete="off"
                                onChange={(text) => this.setState({ name: text.target.value })}
                            />
                        </div>
                        <div>
                            <input
                                style={{
                                    borderLeft: 0,
                                    borderTop: 0,
                                    borderRight: 0,
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'yellow',
                                    padding: 15,
                                    boxSizing: 'border-box',
                                    height: 25,
                                    width: '100%',
                                    outline: 'none',
                                    background: '#212121',
                                    color: '#FFF'
                                }}
                                placeholder="email"
                                autoComplete="off"
                                onChange={(text) => this.setState({ email: text.target.value })}
                            />
                        </div>
                        <div>
                            <input
                                style={{
                                    borderLeft: 0,
                                    borderTop: 0,
                                    borderRight: 0,
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'yellow',
                                    padding: 15,
                                    boxSizing: 'border-box',
                                    height: 25,
                                    width: '100%',
                                    outline: 'none',
                                    background: '#212121',
                                    color: '#FFF'
                                }}
                                placeholder="language" autoComplete="off"
                                onChange={(text) => this.setState({ language: text.target.value })}
                            />
                        </div>
                        {error && <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <p style={{ color: '#FFF' }}>{error}</p>
                        </div>}
                        <button
                            style={{
                                marginTop: 20,
                                width: '100%',
                                height: 35,
                                border: 0,
                                outline: 'none',
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: '#FFF',
                                background: '#141414'
                            }}
                            type="submit"
                        >
                            Save
                            </button>
                    </div>
                </form>
            </div>
        )
    }
}