var navLinks = Array.from(document.querySelectorAll(".navLinks button"));

document.body.onload = () => {
    document.loadContent(0)
}

navLinks.forEach((element, index) => {
    element.addEventListener("click", () => {
        console.log("Tab selected: " + Array.from(["c", "h", "n", "p"])[index])
        navLinks.forEach((element) => {
            element.classList.remove("navLinkButtonSelected");
        });
        navLinks[index].classList.add("navLinkButtonSelected");
        document.loadContent(index)
    });
});

document.loadContent = (index) => {
    console.log("Loading content with index " + index)
    var stepElements = [];
    
};

const CYCLES = [
    {
        title: "Carbon",
        base_image: "",
        layer_images: [""],
        steps: [
            {
                title: "",
                brief: "",
                html: "",
            },
        ],
    },
    {
        title: "Water",
        base_image: "",
        layer_images: [""],
        steps: [
            {
                title: "",
                brief: "",
                html: "",
            },
        ],
    },
    {
        title: "Nitrogen",
        base_image: "",
        layer_images: [""],
        steps: [
            {
                title: "",
                brief: "",
                html: "",
            },
        ],
    },
    {
        title: "Phosphorous",
        base_image: "",
        layer_images: [""],
        steps: [
            {
                title: "",
                brief: "",
                html: "",
            },
        ],
    },
];
