document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Smart Header Hide/Show Logic ---
    let lastScroll = 0;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        // Agar scroll 100px se zyada ho tabhi hide karein
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Niche scroll kar rahe hain -> Hide Header
            navbar.classList.add("nav-hidden");
        } else {
            // Upar scroll kar rahe hain -> Show Header
            navbar.classList.remove("nav-hidden");
        }

        // Agar scroll ekdam top par hai toh shadow hata dein (Optional)
        if (currentScroll <= 0) {
            navbar.classList.remove("shadow-sm");
        } else {
            navbar.classList.add("shadow-sm");
        }

        lastScroll = currentScroll;
    });

    // --- 2. Search Validation ---
    const searchForm = document.querySelector('form[action="search.php"]');
    if(searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const input = this.querySelector('input[name="q"]');
            if(input.value.trim() === "") {
                e.preventDefault();
                alert("Please enter something to search!");
            }
        });
    }

    // --- 3. Quantity Control for Cart ---
    const qtyInputs = document.querySelectorAll('input[type="number"]');
    qtyInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value < 1) {
                this.value = 1;
            }
        });
    });

});