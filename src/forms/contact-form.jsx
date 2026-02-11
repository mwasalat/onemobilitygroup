import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (res.ok) {
                setStatus({ type: 'success', message: data.message });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        }
        setLoading(false);
    };

    return (
        <>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div className="contact__input">
                        <i className="fas fa-user"></i>
                        <input className="w-100" type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div className="contact__input">
                        <i className="fas fa-envelope"></i>
                        <input className="w-100" type="email" placeholder="Email address" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div className="contact__input">
                        <i className="fas fa-pen pen"></i>
                        <textarea className="w-100" placeholder="Message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                </div>
                {status.message && (
                    <div className="col-12">
                        <div style={{
                            padding: '12px 16px',
                            borderRadius: '8px',
                            marginBottom: '15px',
                            background: status.type === 'success' ? '#e8f5e9' : '#ffebee',
                            color: status.type === 'success' ? '#2e7d32' : '#c62828',
                            fontWeight: '500',
                            fontSize: '14px',
                        }}>
                            {status.type === 'success' && <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>}
                            {status.type === 'error' && <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i>}
                            {status.message}
                        </div>
                    </div>
                )}
                <div className="col-xxl-12 col-lg-12 col-md-12">
                    <div className="contact__btn">
                        <button className="tp-btn w-100" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Get A Quotation'} <i className="fal fa-long-arrow-right"></i>
                        </button>
                    </div>
                </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;