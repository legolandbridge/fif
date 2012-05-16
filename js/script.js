//sniff browser dimension
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
 
//JQUERY
$(document).ready(function() {

	//COVER PAGE PLACEMENT
	$('#cover').css({"height":viewHeight+viewHeight/8}); //bit longer than the viewport
		
	var logoHeight = viewHeight/2-196; // half of the viewport minus half of the logo height
	$('#logo').css({"top":logoHeight});
	//document.body.style.cursor = 's-resize';
	
	//placing parallax elements based on viewport
	var p1w = $('#parallax1').width();
	$('#parallax1').css({"top":viewHeight-viewHeight/3, "right":"10%"});
	var p2w = $('#parallax2').width();
	$('#parallax2').css({"top":0, "left":"40%"});
	var p3w = $('#parallax3').width();
	var p3h = $('#parallax3').height();
	$('#parallax3').css({"top":viewHeight/3-viewHeight/12, "right":"12%"});
	var p4w = $('#parallax4').width();
	$('#parallax4').css({"top":viewHeight/8, "left":"20%"});
	var p5w = $('#parallax5').width();
	$('#parallax5').css({"top":viewHeight/10, "right":"40%"});

	$('.lineBreak').css({"width":viewWidth/2+viewWidth/8}); //blog separation line
   
	// invoke Scrollorama plugin
	var scrollorama = $.scrollorama({
	    blocks:'.scrollblock', enablePin:false
	});
	
	//all the parallax and timing stuff
	//scrollorama.animate('#logo',{delay:0, duration: 150, property:'margin-top', end:150});
	//scrollorama.animate($(".parallax"),{ delay: 0, duration: 800, property:'margin-top', end: -400 });
	//scrollorama.animate($("#parallax1"),{ delay: 0, duration: 500, property:'opacity', start: 0.7, end: 0 });
	
	scrollorama.animate($("#column"),{  delay: 250, duration: 850, property:'opacity', start: 0 });
	scrollorama.animate($("#works"),{ delay: 300, duration: viewHeight/2, property:'opacity', start: 0 });
	scrollorama.animate($("#cover"),{ delay: 100, duration: viewHeight, property:'top', end: -200 });
	
	//scrollorama.animate($("#classy"),{ delay: 400, duration: 1200, property:'top', end: -80 });
	//scrollorama.animate($("#classy"),{ delay: 400, duration: 1200, property:'left', end: 90 });
	//scrollorama.animate($("#hugeF"),{ delay: 550, duration: 1200, property:'bottom', start: 40});
	scrollorama.animate($("#textureBG"),{duration: 3800, property:'top', end: -300});
	scrollorama.animate($("#textureBG"),{duration: 3800, property:'padding-bottom', end: 300});

	
	// Scrolling Navigation from section to section
	$('#worksBtn').click(function(){
		$('html, body').animate({scrollTop: viewHeight}, 600);
		return false;
	});
	
	$('#aboutBtn').click(function(){	
		$('html, body').animate({scrollTop: viewHeight+2150}, 600); //values bit arbitrary
		return false;	
	});
	
	$('#blogBtn').click(function(){
		$('html, body').animate({scrollTop: viewHeight+3600}, 600);
		return false;
	});

	// dynamic menu style based on which scrollblock
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
	
	// On Video player hover

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

	
});

