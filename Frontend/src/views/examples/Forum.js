import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode library
import { Modal, Button } from 'react-bootstrap';
import ReplyModal from './Modal';

const Forum = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState({ content: '' });
    const [userName, setUserName] = useState('');
    const [replying, setReplying] = useState(false);
    const [selectedParentMessageId, setSelectedParentMessageId] = useState(null);
    const [replyContent, setReplyContent] = useState('');
    const [showReplyModal, setShowReplyModal] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/forum/list')
            .then(response => setMessages(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleInputChange = (e) => {
        setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = jwtDecode(token);
            setUserName(decodedToken.utilisateur.name);
        }

        try {
            const response = await axios.post('http://localhost:5000/forum/create', {
                content: newMessage.content,
                sender: userName,
                parentMessageId: selectedParentMessageId,
            }, { headers: { Authorization: `${token}` } });

            const updatedMessages = await axios.get('http://localhost:5000/forum/list');
            setMessages(updatedMessages.data);

            setNewMessage({ content: '' });
            setReplying(false);
            setSelectedParentMessageId(null);
        } catch (error) {
            console.error(error);
        }
    };

    const handleReplySubmit = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const decodedToken = jwtDecode(token);
                setUserName(decodedToken.utilisateur.name);
            }

            const response = await axios.post('http://localhost:5000/forum/create', {
                content: replyContent,
                sender: userName,
                parentMessageId: selectedParentMessageId,
            }, { headers: { Authorization: `${token}` } });

            const updatedMessages = await axios.get('http://localhost:5000/forum/list');
            setMessages(updatedMessages.data);

            setReplyContent('');
            setSelectedParentMessageId(null);
            setShowReplyModal(false);
        } catch (error) {
            console.error('Error submitting reply:', error);
        }
    };
    const handleReplyClick = (parentMessageId) => {
        setShowReplyModal(true);
        setSelectedParentMessageId(parentMessageId);
    };

    const handleCloseReplyModal = () => {
        setShowReplyModal(false);
        setSelectedParentMessageId(null);
        setReplyContent('');
    };




    return (
        <div className="container mt-5">
            <h1 className="mb-4">Forum</h1>
            <div className="mb-4">
                {messages.map(message => (
                    <div key={message._id} className="border p-3 mb-3">
                        <h8>{message.sender}:{message.content}</h8>
                        {message.replies && message.replies.length > 0 && (
                            <div className="">
                                {message.replies.map(reply => (
                                    <div key={reply._id}>
                                        <h8>{reply.sender}:{reply.content}</h8>
                                    </div>
                                ))}
                            </div>
                        )}

                        <button type="button" class="btn btn-secondary mt-1" onClick={() => handleReplyClick(message._id)}>Répondre</button>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Contenu:</label>
                    <input type="text" className="form-control" name="content" value={newMessage.content} onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>

            <ReplyModal
                show={showReplyModal}
                handleClose={handleCloseReplyModal}
                handleReplySubmit={handleReplySubmit}
                handleReplyContentChange={(e) => setReplyContent(e.target.value)}
            />
        </div>
    );
};

export default Forum;
