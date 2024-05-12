import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {

    render() {
        return(
            <Modal show={this.props.beast !== null} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.beast?.image_url} alt={this.props.beast?.description} style={{width: '100%'}} />
                    <p>{this.props.beast?.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast;