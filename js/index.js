Array.from(document.querySelectorAll(".navLinks button")).forEach((element, index) => {
    element.addEventListener("click", () => {
        console.log("Tab selected: " + Array.from(["Nitrogen", "Carbon", "Phosphorous", "Water"])[index])
    });
});