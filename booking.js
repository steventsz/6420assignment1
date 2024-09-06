document.addEventListener("DOMContentLoaded", () => {

	let currentPage = 1;

	let Details = {
		adults: 1,
		children: 0,
		date: "",
		name: "",
		email: "",
		ticket_color: "#ffffff",
		storage_locker: "no",
		agreement: false,
	};

	function switchPage(n) {
		let bookingContainer = document.getElementById("booking");
		let bookingProgress = document.getElementById("booking_progress");

		let currentPageClass = "step_" + currentPage;
		let nextPageClass = "step_" + n;

		bookingContainer.classList.remove(currentPageClass);
		bookingContainer.classList.add(nextPageClass);
		bookingProgress.classList.remove(currentPageClass);
		bookingProgress.classList.add(nextPageClass);

		currentPage = n;

		if (currentPage === 5) {
			updateReview();
		}
	}

	function updateReview() {
		document.querySelector('#review_date').textContent = Details.date;
		document.querySelector('#review_adults').textContent = Details.adults;
		document.querySelector('#review_children').textContent = Details.children;
		document.querySelector('#review_name').textContent = Details.name;
		document.querySelector('#review_email').textContent = Details.email;
		document.querySelector('#review_ticket_color').textContent = Details.ticket_color;
		
		let colorBox = document.createElement('div');
		colorBox.className = 'color-box';
		colorBox.style.backgroundColor = Details.ticket_color;

		let ticketColorSpan = document.querySelector('#review_ticket_color');
		ticketColorSpan.textContent = " "; 
		ticketColorSpan.appendChild(colorBox);

		document.querySelector('#review_storage_locker').textContent = 
			Details.storage_locker === "yes" ? "Yes" : "No";
	}

	function resetForms() {
		document.getElementById("booking_group_form").reset();
		document.getElementById("booking_customer_form").reset();
		document.getElementById("booking_facilities_form").reset();
		Details = {
			adults: 1,
			children: 0,
			date: "",
			name: "",
			email: "",
			ticket_color: "#ffffff",
			storage_locker: "no",
			agreement: false,
		};
	}

	document.getElementById("booking").addEventListener("click", (e) => {
		let t = e.target;
		if (t.tagName.toLowerCase() === "button") {
			e.preventDefault();
			let page = t.dataset.page;
			let pageNumber = parseInt(page);
			if (isNaN(pageNumber)) {
				return;
			}
			switchPage(pageNumber);
			currentPage = pageNumber;

			if (pageNumber === 5) {
				updateReview();
			}

			if (pageNumber === 1 && t.textContent.trim() === "Restart") {
				resetForms();
			}
		}
	});

	document.getElementById("booking").addEventListener("change", (e) => {
		let t = e.target;
		if (t.tagName.toLowerCase() !== "input") {
			return;
		}

		let v = t.type === "checkbox" ? t.checked : t.value;
		switch (t.name) {
			case "adults":
				Details.adults = parseInt(v);
				break;
			case "children":
				Details.children = parseInt(v);
				break;
			case "date":
				Details.date = v;
				break;
			case "name":
				Details.name = v;
				break;
			case "email":
				Details.email = v;
				break;
			case "ticket_color":
				Details.ticket_color = v;
				break;
			case "storage_locker":
				Details.storage_locker = v;
				break;
			case "agreement":
				Details.agreement = t.checked;
				break;
		}
	});
	
	switchPage(currentPage);
});
