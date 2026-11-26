
const internships = [

    {
        title: "UI/UX Design Intern",
        company: "PixelCraft Studio",
        domain: "UI/UX Design",
        duration: 30,
        mode: "Remote",
        stipend: 2000,
        skills: "Figma, Wireframing, Prototyping",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=700"
    },

    {
        title: "DSA Developer Intern",
        company: "CodeBridge",
        domain: "DSA",
        duration: 90,
        mode: "Remote",
        stipend: 3000,
        skills: "Java, Arrays, Algorithms",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=700"
    },

    {
        title: "Frontend Developer Intern",
        company: "WebNest Technologies",
        domain: "Frontend Development",
        duration: 90,
        mode: "Hybrid",
        stipend: 4000,
        skills: "HTML, CSS, JavaScript, React",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700"
    },

    {
        title: "Backend Developer Intern",
        company: "DevCore Solutions",
        domain: "Backend Development",
        duration: 180,
        mode: "Remote",
        stipend: 6000,
        skills: "Node.js, Express, SQL",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700"
    },

    {
        title: "Python Developer Intern",
        company: "PyWorks",
        domain: "Python Development",
        duration: 30,
        mode: "Remote",
        stipend: 2500,
        skills: "Python, Django, OOP",
        image: "https://i.pinimg.com/originals/6a/fb/f4/6afbf45910b9b4c344737f76043d2cbc.jpg"
    },

    {
        title: "Generative AI Intern",
        company: "FutureMind AI",
        domain: "Generative AI",
        duration: 180,
        mode: "Remote",
        stipend: 6000,
        skills: "LLMs, Prompt Engineering, RAG",
        image: "https://img.magnific.com/premium-photo/ai-ethics-laws-regulations-futuristic-legal-standards-design_932138-59950.jpg?semt=ais_hybrid&w=740&q=80"
    },

    {
        title: "Data Science Intern",
        company: "Insight Analytics",
        domain: "Data Science",
        duration: 90,
        mode: "Hybrid",
        stipend: 4500,
        skills: "Python, Pandas, Data Visualization",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700"
    },

    {
        title: "Cybersecurity Intern",
        company: "SecureNet Labs",
        domain: "Cybersecurity",
        duration: 30,
        mode: "Remote",
        stipend: 1500,
        skills: "Network Security, Linux",
        image: "https://media.istockphoto.com/id/2174551157/photo/cyber-security-data-protection-business-technology-privacy-concept.jpg?s=612x612&w=0&k=20&c=Uu7-WupcUWAKcyMEtoHLriKNnHOGrljO_Nds6NnwDxQ="
    },

    {
        title: "Cloud Computing Intern",
        company: "CloudBase",
        domain: "Cloud Computing",
        duration: 90,
        mode: "Remote",
        stipend: 3500,
        skills: "AWS, Azure, Docker",
        image: "https://media.istockphoto.com/id/1669453534/photo/3d-render-cloud-computing-circuit-board-background.jpg?s=612x612&w=0&k=20&c=hpJ-qm6jT-Ip-1grdsbw6Xkr_fWz36UV_JnMB68geJc="
    },

    {
        title: "Java Developer Intern",
        company: "ByteWorks",
        domain: "Java Development",
        duration: 180,
        mode: "On-site",
        stipend: 5000,
        skills: "Java, JDBC, Spring Boot",
        image: "https://t4.ftcdn.net/jpg/02/92/83/57/360_F_292835773_oImixQGFKLpOPnjfsbesHyqdjOk5hsxL.jpg"
    }

];


// Get HTML elements
const searchInput = document.getElementById("searchInput");
const domainFilter = document.getElementById("domainFilter");
const internshipGrid = document.getElementById("internshipGrid");
const resultCount = document.getElementById("resultCount");
const clearButton = document.getElementById("clearButton");


// Validate stipend and duration
function validateInternship(item) {

    return (
        item.stipend >= 1000 &&
        item.stipend <= 6000 &&
        [30, 90, 180].includes(item.duration)
    );

}


// Format stipend in Indian Rupees
function formatStipend(amount) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);

}


// Convert duration into readable format
function formatDuration(days) {

    if (days === 30) {
        return "1 Month";
    }

    if (days === 90) {
        return "3 Months";
    }

    if (days === 180) {
        return "6 Months";
    }

    return `${days} Days`;

}


// Create reusable internship card
function createInternshipCard(item) {

    const card = document.createElement("article");
    card.className = "internship-card";


    // Image
    const image = document.createElement("img");

    image.className = "card-image";
    image.src = item.image;
    image.alt = `${item.domain} internship`;
    image.loading = "lazy";

    image.onerror = function () {
        image.onerror = null;
        image.src =
            "https://placehold.co/700x400/EEEAFE/303047?text=Internship";
    };


    const content = document.createElement("div");
    content.className = "card-content";


    // Domain
    const tag = document.createElement("span");

    tag.className = "domain-tag";
    tag.textContent = item.domain;


    // Title
    const title = document.createElement("h3");

    title.textContent = item.title;


    // Company
    const company = document.createElement("p");

    company.className = "company-name";
    company.textContent = item.company;


    // Details
    const details = document.createElement("div");

    details.className = "card-details";


    const duration = document.createElement("span");

    duration.className = "detail-item";
    duration.textContent = `◷ ${formatDuration(item.duration)}`;


    const mode = document.createElement("span");

    mode.className = "detail-item";
    mode.textContent = `⌖ ${item.mode}`;


    const skills = document.createElement("span");

    skills.className = "detail-item";
    skills.textContent = item.skills;


    details.append(duration, mode, skills);


    // Stipend and Apply button
    const bottom = document.createElement("div");

    bottom.className = "card-bottom";


    const stipend = document.createElement("span");

    stipend.className = "stipend";

    stipend.textContent =
        `${formatStipend(item.stipend)} / month`;


    const apply = document.createElement("a");

    apply.className = "apply-link";
    apply.href = "#";
    apply.textContent = "Apply Now ↗";

    apply.setAttribute(
        "aria-label",
        `Apply for ${item.title}`
    );

    // Sample application action
    apply.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "This is a sample internship listing. " +
            "Add the verified company's application URL here."
        );

    });


    bottom.append(stipend, apply);

    content.append(
        tag,
        title,
        company,
        details,
        bottom
    );

    card.append(image, content);

    return card;

}


// Display empty and error messages
function showMessage(title, description, isError = false) {

    const message = document.createElement("div");

    message.className = "message-box";


    const heading = document.createElement("h3");

    heading.textContent = title;


    const paragraph = document.createElement("p");

    paragraph.textContent = description;


    message.append(heading, paragraph);


    if (isError) {

        const retry = document.createElement("button");

        retry.textContent = "Try Again";

        retry.addEventListener("click", displayInternships);

        message.appendChild(retry);

    }

    internshipGrid.appendChild(message);

}


// Search and filter functionality
function displayInternships() {

    try {

        const keyword = searchInput.value
            .trim()
            .toLowerCase();

        const selectedDomain = domainFilter.value;


        // Find matching internships
        const filteredInternships = internships.filter(function (item) {

            const searchableText = [

                item.title,
                item.company,
                item.domain,
                item.skills

            ].join(" ").toLowerCase();


            const matchesSearch =
                searchableText.includes(keyword);


            const matchesDomain =
                selectedDomain === "all" ||
                item.domain === selectedDomain;


            const validInternship =
                validateInternship(item);


            return (
                matchesSearch &&
                matchesDomain &&
                validInternship
            );

        });


        // Remove old cards
        internshipGrid.replaceChildren();


        // Update result count
        resultCount.textContent =
            `Showing ${filteredInternships.length} of ${internships.length} internships`;


        // Empty state
        if (filteredInternships.length === 0) {

            showMessage(
                "No internships found!",
                "Try another keyword or select a different domain."
            );

            return;

        }


        // Display cards
        filteredInternships.forEach(function (item) {

            const card = createInternshipCard(item);

            internshipGrid.appendChild(card);

        });


    } catch (error) {

        console.error("Error displaying internships:", error);

        resultCount.textContent = "Unable to load internships";

        showMessage(
            "Something went wrong!",
            "We couldn't load the internships. Please try again.",
            true
        );

    }

}


// Search while typing
searchInput.addEventListener("input", displayInternships);


// Domain filter
domainFilter.addEventListener("change", displayInternships);


// Clear filters
clearButton.addEventListener("click", function () {

    searchInput.value = "";

    domainFilter.value = "all";

    displayInternships();

});


// Initial display
displayInternships();
