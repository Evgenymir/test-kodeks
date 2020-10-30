import React from 'react';
import './App.scss';
import Form from './components/form/Form.jsx';
import Letters from './components/letters/Letters.jsx';
import Numbers from './components/numbers/Numbers.jsx';
import Others from './components/others/Others.jsx';

const App = () => (
    <>
        <div className="main-content">
            <Form />
            <Letters />
            <Numbers />
            <Others />
        </div>
    </>
);

export default App;
