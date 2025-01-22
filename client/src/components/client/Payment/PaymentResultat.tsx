import React from 'react';
import { useLocation } from 'react-router';

const PaymentResult: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const status = params.get('status');
    const transactionId = params.get('transaction_id');

    return (
        <div>
            <h1>Résultat du Paiement</h1>
            {status === 'SUCCESS' ? (
                <p>Le paiement a été effectué avec succès ! Transaction ID : {transactionId}</p>
            ) : (
                <p>Le paiement a échoué. Veuillez réessayer.</p>
            )}
        </div>
    );
};

export default PaymentResult;
