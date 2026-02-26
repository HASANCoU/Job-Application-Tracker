const allJobContainer = document.getElementById("all-job-container");
const interviewedJobSection = document.getElementById("interviewed-job");
const rejectedJobSection = document.getElementById("rejected-job");
const interviewedJobContainer = document.getElementById("inerviewed-job-container");
const rejectedJobContainer = document.getElementById("rejected-job-container");
const emptyJobSection = document.getElementById("empty-job");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const totalJobCount = document.getElementById("total-job");

function allCards() {
  return Array.from(allJobContainer.querySelectorAll(".card"));
}

function applyStatusStyle(statusButton, status) {
  if (!statusButton) return;

  if (status === "interviewed") {
    statusButton.textContent = "Interviewed";
    statusButton.style.border = "1px solid #10b981";
    statusButton.style.color = "#10b981";
    return;
  }

  if (status === "rejected") {
    statusButton.textContent = "Rejected";
    statusButton.style.border = "1px solid #ef4444";
    statusButton.style.color = "#ef4444";
    return;
  }

  statusButton.textContent = "Not Applied";
  statusButton.style.border = "";
  statusButton.style.color = "";
}

function renderStatusList(container, cards, emptyText) {
  container.innerHTML = "";

  if (cards.length === 0) {
    container.innerHTML = `<h3 class="gray">${emptyText}</h3>`;
    return;
  }

  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    container.appendChild(clone);
  });
}

function updateCountersAndViews() {
  const cards = allCards();
  const interviewed = cards.filter((card) => card.dataset.status === "interviewed");
  const rejected = cards.filter((card) => card.dataset.status === "rejected");

  totalJobCount.textContent = cards.length;
  interviewCount.textContent = interviewed.length;
  rejectedCount.textContent = rejected.length;

  renderStatusList(interviewedJobContainer, interviewed, "No interview jobs yet");
  renderStatusList(rejectedJobContainer, rejected, "No rejected jobs yet");

  if (cards.length === 0) {
    allJobContainer.classList.add("hidden");
    interviewedJobSection.classList.add("hidden");
    rejectedJobSection.classList.add("hidden");
    emptyJobSection.classList.remove("hidden");
  } else {
    emptyJobSection.classList.add("hidden");
  }

  if (typeof showOnly === "function") {
    showOnly(window.currentTab || "all-job-container");
  }
}

function findSourceCard(card) {
  if (!card) return null;
  const sourceId = card.dataset.jobId;
  if (!sourceId) return card;
  return allJobContainer.querySelector(`.card[data-job-id="${sourceId}"]`);
}

function handleCardActions(event) {
  const card = event.target.closest(".card");
  if (!card) return;

  const sourceCard = findSourceCard(card);
  if (!sourceCard) return;

  if (event.target.closest(".btn-success")) {
    sourceCard.dataset.status = "interviewed";
    applyStatusStyle(sourceCard.querySelector(".status-btn"), "interviewed");
    updateCountersAndViews();
    return;
  }

  if (event.target.closest(".btn-error")) {
    sourceCard.dataset.status = "rejected";
    applyStatusStyle(sourceCard.querySelector(".status-btn"), "rejected");
    updateCountersAndViews();
    return;
  }

  if (event.target.closest(".delete")) {
    sourceCard.remove();
    updateCountersAndViews();
  }
}

allCards().forEach((card, index) => {
  card.dataset.jobId = String(index + 1);
  card.dataset.status = "";
  applyStatusStyle(card.querySelector(".status-btn"), "");
});

allJobContainer.addEventListener("click", handleCardActions);
interviewedJobContainer.addEventListener("click", handleCardActions);
rejectedJobContainer.addEventListener("click", handleCardActions);

updateCountersAndViews();
