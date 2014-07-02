$(function(){
    console.log("ready");
    $(".objet").removeClass().addClass("objet porte")
    .delay(2000).queue(function(){

    	$(this).addClass("open");
    	$(this).dequeue();
    	$(this).delay(4000).queue(function(){

    		$(this).removeClass("open porte").addClass("valise");
    		$(this).dequeue();
    		$(this).delay(4000).queue(function(){

		        $(this).addClass("bateau");
		        $(this).dequeue();
		        //return false;
		        $(this).delay(6000).queue(function(){

		        	$(this).addClass("hublot");
		        	$(this).dequeue();
		        	$(this).delay(2000).queue(function(){

		        		$(this).addClass("open");
		        		$(this).dequeue();
		        		
		        	});
		        });
	        //$(this).dequeue();
	    	});
	    });
	});
});