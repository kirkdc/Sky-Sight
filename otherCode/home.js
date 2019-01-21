$("document").ready(function() {
  var options = {  videoId: 'N4GAnyQ6-N8', 
                   start: 3, 
                   repeat: true
                };  
  
	$('#youtube').tubular(options); 
}); 

let nav = false;

        function show_hide_nav(id) {
            let navbar = document.getElementById(id);

            if (nav == false) {
                navbar.style.display = "block";
                nav = true;
            } else {
                navbar.style.display = "none";
                nav = false;
            }
        }