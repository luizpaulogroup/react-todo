import React, { Component } from 'react';

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            language: ''
        }
    }

    render() {
        return (
            <view style={{
                flex: 1,
                display: 'flex',
                background: '#212121',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
            }}>
                <p style={{
                    color: '#FFF',
                    fontSize: 18
                }}>Todo</p>

                <form style={{
                    maxWidth: 720,
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
                                    background: '#212121'
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
                                    background: '#212121'
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
                                    background: '#212121'
                                }}
                                placeholder="language" autoComplete="off"
                                onChange={(text) => this.setState({ language: text.target.value })}
                            />
                        </div>
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
                            }}>
                            Save
                            </button>
                    </div>
                </form>
            </view>
        )
    }
}