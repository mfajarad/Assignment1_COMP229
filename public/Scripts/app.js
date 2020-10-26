// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let buttonDelete = document.querySelectorAll('.btn-danger')

        for(button of buttonDelete) {
            button.addEventListener('click', (event) => {
                if(!confirm("Confirm Deletion?")) {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }
    
    window.addEventListener("load", Start);

})();