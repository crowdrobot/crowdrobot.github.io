
function mainpage() {
    if(document.body.clientWidth<500 && document.body.clientWidth!=306) {
        console.log(document.body.clientWidth);
        main.style.height = document.body.clientHeight - nav.offsetHeight;
        for (let block of blocks) {
                    block.style.height = (document.body.clientHeight - nav.offsetHeight)/3;
                }
    }
			
               
			}
function mainbgr(){
    $('.')
}

            function typedtext(sel){
                var typed = new Typed(sel, {
  strings: ["Authors_"],
  typeSpeed: 300,
  loop: true
});
            }
			
            function headerlink(url){
                if(document.body.clientWidth>500){
                    location.href = url+".html";
                }
                else{
                   location.href = "index.html";
                }
            }
            
            

			function link(url) {
                
                    location.href = url+".html";
                
				
			}

              
            function tglink(url) {
                
                    location.href = "https://telegram.me/"+url;
                
                
            }

			function count(id, value) {
				switch(id) {
    	case 2: 
    	$('#num'+id).val(value+' $');
    	break;
    	case 3:
    	$('#num'+id).val(value+' %');
    	break;
    	default:
    	$('#num'+id).val(value);
    	break;
    }
			}
            function popup(url){
var res;
$.ajax({
    url: url+".html",
    success: function (response) {
        console.log('данные получены', response);
        res = response;
            $('#frame').html(res);
                $('#frame').css('display','flex');
                $('body').removeClass('scroll');
                $('.container').addClass('blur');
                $('body').addClass('noscroll');
    }
})
                
            }


 

                function closex(){
                   $('#frame').css('display','none');
                   $('body').removeClass('noscroll');
                    $('body').addClass('scroll');  
                   $('.container').removeClass('blur');
                }

                
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $(".upfab").css('display' , "block");
  } else {
    $(".upfab").css('display' , "none");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $("html, body").animate({ scrollTop: 0 }, 600);  // For Chrome, Firefox, IE and Opera

}


function scrolltocalc() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#calc").offset().top
    }, 600);
};


