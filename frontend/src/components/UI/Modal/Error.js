import React, { Component } from 'react';

import { Button, Modal } from 'react-bootstrap';

const Error = (props) => {
    return class extends Component {
        state = {
            error: null,
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            if (this.props.error) {
                this.setState({ error: this.props.error })
            }
            return (
                <>
                    <Modal show={Boolean(this.state.error)} onHide={this.errorConfirmedHandler}>
                        <Modal.Header closeButton>
                            <Modal.Title>Error</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.error ? this.state.error.message : null}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.errorConfirmedHandler}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            );
        }
    }
}

export default Error;