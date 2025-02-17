import React, { useEffect, useState } from "react";
import update from "react-addons-update";
import data from "./assets/json/data.js";

function App() {
	const [order, setOrder] = useState(data);
	const [payment, setPayment] = useState(order.payment);
	const [goods, setGoods] = useState(order.goods);

	useEffect(() => {
		console.log("Order Updated");
	}, [order]);

	useEffect(() => {
		console.log("Payment Updated");
	}, [payment]);

	useEffect(() => {
		console.log("Goods Updated");
	}, [goods]);

	return (
		// React Addon에 복잡하고 중첩된 객체의 변경을 도와주는 immutablity helper 함수를 사용
		<div id="App">
			<button
				onClick={() => {
					// violation - 에러는 아니지만 위배되는 코드
					// order.receive = '서울시 서초구 논현동...';
					// setOrder(order);

					// solution
					// const orderUpdated = Object.assign({}, order, {receive: '서울시 서초구 논현동...'}); // (빈 객체, 복사할 source 객체, 바꿀 내용)
					// setOrder(orderUpdated);

					// solution.recommended: 프로퍼티
					const orderUpdated = update(order, {
						receive: {
							$set: "서울시 서초구 논현동...",
						},
					}); //  const newObject = update(objectInState, { [WHERE] : { [WHAT]: updateValue } });
					setOrder(orderUpdated);
				}}
			>
				{"배송지 수정"}
			</button>
			<br />
			<br />

			<button
				onClick={() => {
					// 불변성을 지켜야 한다는 것에 대한 violation(직접 변경 불가)
					// const orderUpdated = Object.assign({}, order);
					// orderUpdated.payment.method = 'Mobile';
					// setOrder(orderUpdated.payment);

					// solution
					// const orderUpdated = Object.assign({}, order);
					// orderUpdated.payment = Object.assign({}, order.payment, {method: 'Mobile'});
					// setPayment(orderUpdated.payment);

					// sol.recommended: nest 객체 프로퍼티 수정
					const orderUpdated = update(order, {
						payment: {
							method: {
								$set: "Mobile",
							},
						},
					});
					setPayment(orderUpdated.payment);
				}}
			>
				{"결제수단 변경"}
			</button>
			<br />
			<br />

			<button
				onClick={() => {
					// violation - 동일한 내용이면 추가가 안됨
					// order.goods.push({
					//     "no": "p002-001",
					//     "name": "팬츠스트라이프",
					//     "price": 2000,
					//     "amount": 1});
					// setGoods(goods);

					// solution 01
					// const goodsUpdate = goods.concat({
					//     "no": "c002-003",
					//     "name": "블루양말",
					//     "price": 2000,
					//     "amount": 1
					// });
					// setGoods(goodsUpdate);

					// solution 02
					// const goodsUpdate = [{
					//     "no": "c002-003",
					//     "name": "블루양말",
					//     "price": 2000,
					//     "amount": 1
					// }, ...goods] // 배열 복사
					// setGoods(goodsUpdate);

					// solution.recommended: 배열 요소 추가
					const goodsUpdate = update(goods, {
						$unshift: [
							{
								no: "c002-003",
								name: "블루양말",
								price: 2000,
								amount: 1,
							},
						], // unshift는 앞에 추가, push는 뒤에 추가
					});
					setGoods(goodsUpdate);
				}}
			>
				{"상품 추가"}
			</button>
			<br />
			<br />

			<button
				onClick={() => {
					// violation
					// goods[2].name = '블루면티'
					// setGoods(goods);

					// solution
					// const goodsUpdate = [...goods.slice(0, 2),
					//     Object.assign({}, goods[2], {name: '블루면티'}),
					//     ...goods.slice(3)];
					// setGoods(goodsUpdate);

					// solution.recommended: 배열요소 수정
					const goodsUpdate = update(goods, {
						2: {
							name: {
								$set: "블루면티",
							},
						},
					});
					setGoods(goodsUpdate);
				}}
			>
				{"3rd 상품이름 변경"}
			</button>
			<br />
			<br />

			<hr />

			<p>{`배송지: ${order.receive}`}</p>
			<p>{`결제수단: ${payment.method}`}</p>
			<p>{"상품"}</p>
			<ul>
				{goods.map((good, index) => (
					<li key={index}>
						{`${good.name}:${good.price}:${good.amount}`}
					</li>
				))}
			</ul>
		</div>
	);
}

export { App };
