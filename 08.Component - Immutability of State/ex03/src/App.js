import React from 'react';
import data from './assets/json/data.js';

function App() {

    return (
        <div id='App'>
            <p>{`배송지:`}</p>
            <p>{`결제수단:`}</p>
            <p>{'상품'}</p>
            <button>
                {"배송지 수정"}
            </button>
        </div>
    );
}

export {App};