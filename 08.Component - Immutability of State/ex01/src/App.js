import React from 'react';
import data from './assets/json/data.js';

function App() {

    return (
        <div id='App'>
            <button>
                {"배송지 수정"}
            </button>
            <br/><br/>

            <button>
                {"결제수단 변경"}
            </button>
            <br/><br/>

            <button>
                {"상품 추가"}
            </button>
            <br/><br/>

            <button>
                {"3rd 상품이름 변경"}
            </button>
            <br/><br/>

            <hr/>

            <p>{`배송지:`}</p>
            <p>{`결제수단:`}</p>
            <p>{'상품'}</p>
            <ul>
            </ul>
        </div>
    );
}

export {App};