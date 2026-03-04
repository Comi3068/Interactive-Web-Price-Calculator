const websiteType = document.getElementById("websiteType");
const pagesRange = document.getElementById("pagesRange");
const pagesInput = document.getElementById("pagesInput");
const pagesValue = document.getElementById("pagesValue");
const seo = document.getElementById("seo");
const maintenance = document.getElementById("maintenance");
const totalElement = document.getElementById("total");
const summaryElement = document.getElementById("summary");
const form = document.getElementById("calculatorForm");

function calculatePrice() {
    let numPages = parseInt(pagesInput.value);
    if(isNaN(numPages) || numPages < 1) numPages = 1;

    const typePrice = parseInt(websiteType.value);
    let total = typePrice + numPages * 100;
    let summaryArr = [];

    if(seo.checked) { total += 300; summaryArr.push("SEO"); }
    if(maintenance.checked) { total += 200; summaryArr.push("Maintenance"); }

    totalElement.textContent = "$" + total;
    totalElement.style.transform = "scale(1.2)";
    setTimeout(()=> totalElement.style.transform = "scale(1)", 150);
    summaryElement.textContent = summaryArr.length ? "Includes: " + summaryArr.join(", ") : "No extras selected";

    // Sync slider and number input
    pagesRange.value = numPages;
    pagesValue.textContent = numPages;
}

// Event listeners
websiteType.addEventListener("change", calculatePrice);
pagesRange.addEventListener("input", () => {
    pagesInput.value = pagesRange.value;
    calculatePrice();
});
pagesInput.addEventListener("input", calculatePrice);
seo.addEventListener("change", calculatePrice);
maintenance.addEventListener("change", calculatePrice);

// Initial calculation
calculatePrice();