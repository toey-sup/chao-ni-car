import React, { Component } from 'react';

import { Button, Modal } from 'react-bootstrap';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: false,
            detail: ''
        }
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: false });
                return req;
            })
            this.resIntercepter = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: true, detail: error });
            })
        }

        componentWillUnmount() { //เมื้อ component ไม่ใช้แล้ว(Routing ไปหน้าอื่น)
            //console.log('Will Unmount', this.reqInterceptor, this.resIntercepter);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor); //เอาออกพอเปลี่ยนหน้า กัน memory leak and error

        }

        errorConfirmedHandler = () => {
            this.setState({ error: false });
        }

        render() {
            return (
                <>
                    <Modal show={this.state.error} onHide={this.errorConfirmedHandler}>
                        <Modal.Header closeButton>
                            <Modal.Title>Error</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.error ? this.state.detail.message : null}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.errorConfirmedHandler}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}

export default withErrorHandler;