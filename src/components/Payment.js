import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const { certName } = location.state || {};  // Get the certification name passed from the previous page
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [upiId, setUpiId] = useState(''); // For UPI ID input
    const [cardNumber, setCardNumber] = useState(''); // For Debit/Credit card number
    const [expiryDate, setExpiryDate] = useState(''); // For card expiry date
    const [cvv, setCvv] = useState(''); // For card CVV

    const handlePayment = () => {
        if (!selectedPaymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        if (selectedPaymentMethod === 'UPI' && !upiId) {
            alert('Please enter your UPI ID.');
            return;
        }

        if ((selectedPaymentMethod === 'Debit Card' || selectedPaymentMethod === 'Credit Card') && (!cardNumber || !expiryDate || !cvv)) {
            alert('Please enter all card details.');
            return;
        }

        alert(`Payment successful for ${certName} using ${selectedPaymentMethod}`);
        // Redirect to a confirmation page or the home page after payment
        navigate('/');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', color: '#007BFF' }}>Payment Page</h1>
            <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px' }}>
                Complete your payment for the {certName} certification.
            </p>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '20px', color: '#555' }}>Select Payment Method</h2>
                <div>
                    <label style={{ fontSize: '16px' }}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="UPI"
                            checked={selectedPaymentMethod === 'UPI'}
                            onChange={() => setSelectedPaymentMethod('UPI')}
                        />
                        UPI
                    </label>
                </div>
                <div>
                    <label style={{ fontSize: '16px' }}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Debit Card"
                            checked={selectedPaymentMethod === 'Debit Card'}
                            onChange={() => setSelectedPaymentMethod('Debit Card')}
                        />
                        Debit Card
                    </label>
                </div>
                <div>
                    <label style={{ fontSize: '16px' }}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Credit Card"
                            checked={selectedPaymentMethod === 'Credit Card'}
                            onChange={() => setSelectedPaymentMethod('Credit Card')}
                        />
                        Credit Card
                    </label>
                </div>
            </div>

            {/* UPI Input Field */}
            {selectedPaymentMethod === 'UPI' && (
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <label style={{ fontSize: '16px' }}>
                        Enter your UPI ID:
                        <input
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            placeholder="example@upi"
                            style={{ padding: '5px', marginTop: '10px', width: '250px', fontSize: '16px' }}
                        />
                    </label>
                </div>
            )}

            {/* Debit/Credit Card Input Fields */}
            {(selectedPaymentMethod === 'Debit Card' || selectedPaymentMethod === 'Credit Card') && (
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <div>
                        <label style={{ fontSize: '16px' }}>
                            Card Number:
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="1234 5678 9876 5432"
                                style={{ padding: '5px', marginTop: '10px', width: '250px', fontSize: '16px' }}
                            />
                        </label>
                    </div>
                    <div>
                        <label style={{ fontSize: '16px' }}>
                            Expiry Date:
                            <input
                                type="month"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                style={{ padding: '5px', marginTop: '10px', width: '250px', fontSize: '16px' }}
                            />
                        </label>
                    </div>
                    <div>
                        <label style={{ fontSize: '16px' }}>
                            CVV:
                            <input
                                type="text"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                placeholder="123"
                                style={{ padding: '5px', marginTop: '10px', width: '250px', fontSize: '16px' }}
                            />
                        </label>
                    </div>
                </div>
            )}

            <div style={{ textAlign: 'center' }}>
                <button
                    onClick={handlePayment}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                >
                    Proceed with Payment
                </button>
            </div>
        </div>
    );
}

export default Payment;