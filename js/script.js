//get user browser height
function getViewportDimensions() {
     var viewportwidth;
     var viewportheight;
     // The more standards compliant browsers (mozilla/netscape/opera/chrome/IE7) use window.innerWidth and window.innerHeight
     if (typeof window.innerWidth != 'undefined') {
         viewportwidth = window.innerWidth;
         viewportheight = window.innerHeight;
     }
     // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
     else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
         viewportwidth = document.documentElement.clientWidth;
         viewportheight = document.documentElement.clientHeight;
     }
     // older versions of IE
     else {
         viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
         viewportheight = document.getElementsByTagName('body')[0].clientHeight;
     }
  	return [viewportwidth, viewportheight];   
 }

 var viewportDimensions = getViewportDimensions();
 var viewWidth = viewportDimensions[0];
 var viewHeight = viewportDimensions[1];
 
 console.log("viewport width is: " + viewWidth); 
 console.log("viewport height is: " + viewHeight);
 //console.log("logo top height is: " + logoHeight);

//document.body.style.cursor = 's-resize';
// var myPlayer = _V_("passionataVid");
 
//JQUERY
$(document).ready(function() {

	//COVER PAGE PLACEMENT
	//$('body').css({"width":viewWidth});
	$('#cover').css({"height":viewHeight+viewHeight/8}); //bit longer than the viewport
	
	
	var logoHeight = viewHeight/2-196; // half of the viewport minus half of the logo height
	$('#logo').css({"top":logoHeight});
	
	
	
	//placing the parallax element based on viewport
	var p1w = $('#parallax1').width();
	$('#parallax1').css({"top":viewHeight-viewHeight/3, "right":"10%"});
	var p2w = $('#parallax2').width();
	$('#parallax2').css({"top":0, "left":"40%"});
	var p3w = $('#parallax3').width();
	var p3h = $('#parallax3').height();
	$('#parallax3').css({"top":viewHeight/3-viewHeight/12, "right":"12%"});
	//$('#parallax3').css({"line-height":"0.6em"});
	//$('#parallax3').css({"height":"0.4em"});
	
	var p4w = $('#parallax4').width();
	$('#parallax4').css({"top":viewHeight/8, "left":"20%"});
	var p5w = $('#parallax5').width();
	$('#parallax5').css({"top":viewHeight/10, "right":"40%"});

	//$('#textureBG').css({"width":viewWidth});
	$('.lineBreak').css({"width":viewWidth/2+viewWidth/8});
   
//   SCROLLORAMA FUNCTIONALITY
	var scrollorama = $.scrollorama({
	    blocks:'.scrollblock', enablePin:false
	});
	
	// assign function to add behavior for onBlockChange event
	scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex;
		
		if(i>0) {
			$('#worksBtn').css({"color":"#000"});
			$('#aboutBtn').css({"color":"#aaa"});
			$('#blogBtn').css({"color":"#aaa"});
		}
		
		if(i>1) {
			$('#worksBtn').css({"color":"#aaa"});
			$('#aboutBtn').css({"color":"#000"});
			$('#blogBtn').css({"color":"#aaa"});		
		}
		
		if(i>2) {
			$('#worksBtn').css({"color":"#aaa"});
			$('#aboutBtn').css({"color":"#aaa"});
			$('#blogBtn').css({"color":"#000"});		
		}

	});
	
	
	//scrollorama.animate('#logo',{delay:0, duration: 150, property:'margin-top', end:150});
	scrollorama.animate($(".parallax"),{ delay: 0, duration: 800, property:'margin-top', end: -400 });
    scrollorama.animate($("#column"),{  delay: 250, duration: 850, property:'opacity', start: 0 });
	//scrollorama.animate($("#hugeF"),{ delay: 800, duration: 500, property:'opacity', end: 100 });
	
	scrollorama.animate($("#parallax1"),{ delay: 0, duration: 500, property:'opacity', start: 0.7, end: 0 });
	//scrollorama.animate($("#parallax3"),{ delay: 50, duration: 500, property:'top', start: 0, end: -100 });
	//scrollorama.animate($("#parallax4"),{ delay: 40, duration: 800, property:'top', start: 0, end: 100, easing:'easeOutBack' });
	scrollorama.animate($("#works"),{ delay: 300, duration: viewHeight/2, property:'opacity', start: 0 });
	
	
	//scrollorama.animate($("#crown"),{ delay: 140, duration: 1200, property:'top', end: -160 });
	//scrollorama.animate($("#statement"),{ delay: 50, duration: 1200, property:'top', end: 60 });
	scrollorama.animate($("#classy"),{ delay: 400, duration: 1200, property:'top', end: -80 });
	scrollorama.animate($("#classy"),{ delay: 400, duration: 1200, property:'left', end: 90 });
	//scrollorama.animate($("#hugeF"),{ delay: 550, duration: 1200, property:'bottom', start: 40});
	scrollorama.animate($("#textureBG"),{duration: 3800, property:'top', end: -300});
	scrollorama.animate($("#textureBG"),{duration: 3800, property:'padding-bottom', end: 300});
//	scrollorama.animate($("#about"),{duration: 1000, property:'margin-bottom', end: -600 });
//	scrollorama.animate($("#blog"),{ delay: 1000, duration: 800, property:'top', end: -400});
//	scrollorama.animate($("#blog"),{ delay: 3000, duration: 700, property:'top', end: -700 });
//	scrollorama.animate('#parallax1',{duration: 400, property:'top', start: 350, end:-100 });
//	scrollorama.animate('#parallax1',{duration: 200, delay: 200, property:'opacity', end:0 });
//	scrollorama.animate('#parallax2',{duration: 400, property:'top', start: 500, end:-100 });
//	scrollorama.animate($("#agathaProjects"),{ duration: 280, delay: viewHeight*2+40, property:'margin-top', end:440, easing:'easeOutBack'});
//	scrollorama.animate($("#lacosteProjects"),{ duration: 220, delay: viewHeight*2+920, property:'margin-top', end:440, easing:'easeOutBack'})
	
	// Scrolling functionality
	$('#worksBtn').click(function(){
	
	$('html, body').animate({scrollTop: 580}, 600);
	//$(this).css({"background-color":"red"});
	
	return false;
	
	});
	
	$('#aboutBtn').click(function(){
	
	$('html, body').animate({scrollTop: 2800}, 600);
	
	return false;
	
	});
	
	$('#blogBtn').click(function(){
	
	$('html, body').animate({scrollTop: 4300}, 600);
	
	return false;
	
	});
	
	
	//HOVER BEHAVIOR
//	$("#agatha .projects img").hover(function(){
//		$(this).attr('src', 'img/thumbClient/test/thumb01.png');
//		}, function(){
//		$(this).attr('src', 'img/thumbClient/test/thumb01-bw.png');
//	});

	$("#agatha").hover(function(){
		$('#agatha .vjs-default-skin div.vjs-big-play-button').css("opacity", "1"); 
		}, function(){
		$('#agatha .vjs-default-skin div.vjs-big-play-button').css("opacity", "0.7");
	});
	
	$("#passionata").hover(function(){
		$('#passionata .vjs-default-skin div.vjs-big-play-button').css("opacity", "1"); 
		}, function(){
		$('#passionata .vjs-default-skin div.vjs-big-play-button').css("opacity", "0.7");
	});
	
	$("#lacoste").hover(function(){
		$('#lacoste .vjs-default-skin div.vjs-big-play-button').css("opacity", "1"); 
		}, function(){
		$('#lacoste .vjs-default-skin div.vjs-big-play-button').css("opacity", "0.7");
	});
	
	$("#sephora").hover(function(){
		$('#sephora .vjs-default-skin div.vjs-big-play-button').css("opacity", "1"); 
		}, function(){
		$('#sephora .vjs-default-skin div.vjs-big-play-button').css("opacity", "0.7");
	});

	
	
//	$("#passionata .projects").hover(function(){
//		
//		 myPlayer.play();
//		}, function(){
//		myPlayer.pause();
//	});
});

