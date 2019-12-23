import React from 'react';
import { Bar, Card } from '../';
import './Suggestions.scss';

export default props => {
    return (
        <Bar className="suggestions-wrapper">
            <div className="suggestions">
                <Card className="suggested-user">
                    <p>Opa</p>
                </Card>
                <Card className="suggested-user">
                    <p>Opa</p>
                </Card>
            </div>
        </Bar>
    );
};
