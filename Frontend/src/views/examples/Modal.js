import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ReplyModal = ({ show, handleClose, handleReplySubmit, handleReplyContentChange }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Répondre</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" className="form-control" name="replyContent" onChange={handleReplyContentChange} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                   Fermer
                </Button>
                <Button variant="primary" onClick={handleReplySubmit}>
                   Envoyer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ReplyModal;
