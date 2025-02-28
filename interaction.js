document.querySelector('.project-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const title = document.querySelector('#title').value;
    const goal = document.querySelector('#goal').value;
    const description = document.querySelector('#description').value;

    if (title === "" || goal === "" || description === "") {
        alert("All fields are required!");
        return;
    }

    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <img src="https://via.placeholder.com/300" alt="Project Image">
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="goal">
            <p><strong>Goal:</strong> $${goal}</p>
            <p><strong>Raised:</strong> $0</p>
        </div>
        <label for="donation">Donation Amount:</label>
        <input type="number" class="donation-input" placeholder="Enter amount" min="1">
        <button class="donate-button">Contribute</button>
    `;

    document.querySelector('.project-cards').appendChild(projectCard);

    document.querySelector('.project-form').reset();

    alert("Project created successfully!");
});

document.querySelector('.project-cards').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('donate-button')) {
        const projectCard = event.target.closest('.project-card');
        const raisedElement = projectCard.querySelector('.goal p:nth-child(2)');
        const donationInput = projectCard.querySelector('.donation-input');
        const raisedAmount = parseInt(raisedElement.textContent.replace('Raised: $', ''));
        const donationAmount = parseInt(donationInput.value);

        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }

        const newRaisedAmount = raisedAmount + donationAmount;
        raisedElement.textContent = `Raised: $${newRaisedAmount}`;

        donationInput.value = '';

        alert(`Thank you for your contribution of $${donationAmount}!`);
    }
});
