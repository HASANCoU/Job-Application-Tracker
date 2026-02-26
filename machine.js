function showOnly(id){
    const allJob = document.getElementById("all-job-container");
    const interviewedJob = document.getElementById("interviewed-job");
    const rejectedJob = document.getElementById("rejected-job");
    const emptyJob = document.getElementById("empty-job");

    const interviewCount = Number(document.getElementById("interview-count")?.textContent || 0);
    const rejectedCount = Number(document.getElementById("rejected-count")?.textContent || 0);
    const activeTabCount = document.getElementById("active-tab-count");

    const totalJobs = document.querySelectorAll("#all-job-container .card").length;
    window.currentTab = id;
    
    const tabAll = document.getElementById("tab-all");
    const tabInterview = document.getElementById("tab-interview");
    const tabRejected = document.getElementById("tab-rejected");

    tabAll.classList.remove("primary");
    tabInterview.classList.remove("primary");
    tabRejected.classList.remove("primary");

    if (id === "all-job-container") {
        tabAll.classList.add("primary");
        activeTabCount.textContent = totalJobs;
    } 

    if (id === "interviewed-job") {
        tabInterview.classList.add("primary");
        activeTabCount.textContent = interviewCount;
    }
    if (id === "rejected-job") {
        tabRejected.classList.add("primary");
        activeTabCount.textContent = rejectedCount;
    }

    

    // Hide all sections first
    allJob.classList.add("hidden");
    interviewedJob.classList.add("hidden");
    rejectedJob.classList.add("hidden");
    emptyJob.classList.add("hidden");

    // Show empty section when selected tab has no jobs
    if (id === "all-job-container" && totalJobs === 0) {
        emptyJob.classList.remove("hidden");
        return;
    }
    if (id === "interviewed-job" && interviewCount === 0) {
        emptyJob.classList.remove("hidden");
        return;
    }
    if (id === "rejected-job" && rejectedCount === 0) {
        emptyJob.classList.remove("hidden");
        return;
    }

    document.getElementById(id).classList.remove("hidden");
}
