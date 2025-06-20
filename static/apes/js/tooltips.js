const TOOLTIPS = {
    photosynthesis: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
    "cellular respiration": "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP)",
    combustion: "Hydrocarbon + O₂ → CO₂ + H₂O + energy (e.g., CH₄ + 2O₂ → CO₂ + 2H₂O + energy).",
    biosphere: "All living organisms and their ecosystems.",
    hydrosphere: "All the water on Earth- oceans, lakes, rivers, groundwater, and water vapor in the atmosphere.",
    lithosphere: "The crust and upper mantle (e.g., Rocks, minerals, landforms).",
    anthropogenic: "Caused by human action or inaction",
    leaching: "water dissolves and carries double materials from soil's top layer, and mining, the phosphorus then reaches the soil",
    "haber-bosch process": "An industrial process that synthesizes ammonia from nitrogen and hydrogen",
    "higher plants": "Plants that have vein tissue and can be planted like trees and ferns",
    guano: "organic solid waste from seabirds",
};

document.activateTooltips = () => {
    var terms = document.querySelectorAll(".tooltip");
    terms.forEach((term) => {
        const key = term.textContent.toLowerCase().trim();
        const definition = TOOLTIPS[key];
        if (definition) {
            term.setAttribute("data-tooltip", definition)
        } else {
            term.setAttribute("data-tooltip", "An error was encountered when loading the definition. Please report this bug to jay@jayagra.com.")
        }
    })
};