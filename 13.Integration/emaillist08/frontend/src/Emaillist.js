import React from "react";
import { Email_List } from "./assets/scss/Emaillist.scss";
import Email from "./Email";

function Emaillist({ emails }) {
	console.log(emails);
	return (
		<ul className={Email_List}>
			{
				// ?. 은 null이 아니면 emails.map을 실행
				emails?.map((email) => (
					<Email
						key={email.id}
						firstName={email.firstName}
						lastName={email.lastName}
						email={email.email}
						no={email.id}
					/>
				))
			}
		</ul>
	);
}

export default Emaillist;
