import React, { useEffect, useState, useRef } from "react";

import Modal from "react-modal";
import ReactModal from "react-modal";
import styled from "styled-components";
import "./assets/scss/App.scss";
import * as stylesModal from "./assets/scss/Modal.scss";
import data from "./assets/json/data.js";

const CreateForm = styled.form``;
const UpdateForm = styled.form``;
const ItemList = styled.ul``;
const Item = styled.li``;

ReactModal.setAppElement("body");

function App() {
	const [items, setItems] = useState(data);
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div id="App">
			<h1>AJAX: Restful API</h1>

			<div>
				<CreateForm>
					<select name={"type"}>
						<option>BOOK</option>
						<option>CLOTHE</option>
						<option>MUSIC</option>
						<option>CAR</option>
						<option>BEAUTY</option>
						<option>MOVIE</option>
						<option>FOOD</option>
					</select>{" "}
					<input
						type={"text"}
						name={"name"}
						placeholder={"name"}
					/>
					<input
						type={"submit"}
						value={"[C]reate (post)"}
					/>
				</CreateForm>
				<form>
					<select name={"type"}>
						<option>BOOK</option>
						<option>CLOTHE</option>
						<option>MUSIC</option>
						<option>CAR</option>
						<option>BEAUTY</option>
						<option>MOVIE</option>
						<option>FOOD</option>
					</select>{" "}
					<input
						type={"text"}
						name={"name"}
						placeholder={"name"}
					/>
					<input type={"file"} name={"file"} />
					<input
						type={"submit"}
						value={"[C]reate (post)"}
					/>
				</form>
			</div>

			<h2 title={"[R]ead (get)"}>Items</h2>

			<ItemList>
				{items?.map((item, index) => (
					<Item key={item.id}>
						<h4>
							<b
								title={
									"[R]ead (get)"
								}
								onClick={() =>
									setModalOpen(
										!modalOpen
									)
								}
							>
								{item.name}
							</b>
							<button>
								{
									"[D]elete (delete)"
								}
							</button>
						</h4>
						<div>
							<span>
								<b>
									{index +
										1}
								</b>
								<i>
									{
										item.type
									}
								</i>
							</span>
							<img
								src={
									item.image ||
									"/assets/images/no-image.png"
								}
							/>
						</div>
					</Item>
				))}
			</ItemList>

			<Modal
				isOpen={modalOpen}
				onRequestClose={() => setModalData(!modalOpen)}
				className={stylesModal.Modal}
				overlayClassName={stylesModal.Overlay}
				style={{ content: { width: 280 } }}
			>
				<h3>Update Item</h3>
				<UpdateForm>
					<label>TYPE</label>{" "}
					<select name={"type"}>
						<option>BOOK</option>
						<option>CLOTHE</option>
						<option>MUSIC</option>
						<option>CAR</option>
						<option>BEAUTY</option>
						<option>MOVIE</option>
						<option>FOOD</option>
					</select>
					<br />
					<br />
					<label>NAME</label>{" "}
					<input type={"text"} name={"name"} />
					<hr />
					<input
						type={"submit"}
						value={"[U]pdate (update)"}
					/>
				</UpdateForm>
			</Modal>
		</div>
	);
}

export { App };
