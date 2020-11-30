
// Gent Jusufi

// ==============
// ==============    SCROLL TO TOP Button + menuList show/hide
// When the user scrolls down 80px from the top of the document, show the button
// ==============
// ==============
var goTop = document.getElementById("goTop");
var navScroll = document.getElementById('navScroll');
var menuList = document.getElementById('navScrollMenu');
var navMain = document.getElementById('nav-bar');



// //while scrolling the function will be triggered
window.onscroll = function() {
	scrollFunction()
};
//
//function to display the goTop button and menuList
function scrollFunction() {
    if ((document.body.scrollTop > 80
				|| document.documentElement.scrollTop > 80) // after 80px scroll
				// && (document.documentElement.clientWidth > 900
				// || document.body.clientWidth > 900) -- GJ, handeled below @media responsivnes
			) {

						  goTop.style.display = "block";
							goTop.className = 'animated bounceIn';
							navScroll.style.display ='block';
							navScroll.className = 'navScrollMenu animated bounceInDown'
							navMain.style.display ='none';

    } else {
		        goTop.style.display = "none";
						navScroll.style.display ='none';
						navMain.style.display ='block';
    }
};

// When the user clicks on the button, scroll to the top of the document
function GoTopFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
};


//Function to drop down the menu list from navScroll id
function menuListShow (){
	menuList.style.display ='block';
}

function menuListHide (){
	menuList.style.display ='none';
}


//Click listener to button for applying the scrollTopFunction
goTop.addEventListener('click',GoTopFunction);
navScroll.addEventListener('mouseover', menuListShow);
navScroll.addEventListener('mouseout', menuListHide);

// console.log(navScrollMenu)

// ==============
// ============== End of Scroll to Top button


// =========================================================
// =========
// =========			 @MEDIA Navigation responsivness drop down
// =========
// =========

// responsivness of menubar wrap
var menu = document.getElementById('menu');
var hamIcn = document.getElementById('hamIcn');
var navClose = document.getElementById('navClose');


function menuDrop() {
	menu.className = 'menuIcn animated bounceInDown';
}

function menuRoll() {
	menu.className = 'menu'
}


	if (document.documentElement.clientWidth < 900
				||
			document.body.clientWidth < 900
			){
		hamIcn.addEventListener('mouseover', menuDrop);
		navClose.addEventListener('click', menuRoll);
		hamIcn.style.display ='block';
	}

	// ==============
	// ============== END of @MEDIA










// ========================================================
// ==============
// ==============        SERVICES  SECTION
// ==============
// ==============
//1st_ getting btn1 ID from i icon to be clicked - act as button in footer

var btn11 = document.getElementById("btn11");
var btn12 = document.getElementById("btn12");
var card1 = document.getElementById("card1");
var card12 = document.getElementById("card12");

var btn21 = document.getElementById("btn21");
var btn22 = document.getElementById("btn22");
var card2 = document.getElementById("card2");
var card22 = document.getElementById("card22");


var btn31 = document.getElementById("btn31");
var btn32 = document.getElementById("btn32");
var card3 = document.getElementById("card3");
var card32 = document.getElementById("card32");


var btn41 = document.getElementById("btn41");
var btn42 = document.getElementById("btn42");
var card4 = document.getElementById("card4");
var card42 = document.getElementById("card42");




function openCard1(){
  card1.className ="none";
  card12.className ="card-services animated fadeIn";
}

function closeCard1(){
  card12.className ="none";
  card1.className ="card-services animated fadeIn";
}


function openCard2(){
  card2.className ="none";
  card21.className ="card-services animated fadeIn";
}

function closeCard2(){
  card21.className ="none";
  card2.className ="card-services animated fadeIn";
}


function openCard3(){
  card3.className ="none";
  card31.className ="card-services animated fadeIn";
}

function closeCard3(){
  card31.className ="none";
  card3.className ="card-services animated fadeIn";
}


function openCard4(){
  card4.className ="none";
  card41.className ="card-services animated fadeIn";
}

function closeCard4(){
  card41.className ="none";
  card4.className ="card-services animated fadeIn";
}




btn11.addEventListener("click", openCard1);
btn12.addEventListener("click", closeCard1);

btn21.addEventListener("click", openCard2);
btn22.addEventListener("click", closeCard2);

btn31.addEventListener("click", openCard3);
btn32.addEventListener("click", closeCard3);

btn41.addEventListener("click", openCard4);
btn42.addEventListener("click", closeCard4);



// ==============
// ============== END OF SERVICES  SECTION








// =================================================
// ==============
// ==============			 ABOUT | EXPERIENCE SECTION
// ==============
// ==============


// Get id of the class exppopup
var popup = document.getElementById('popup');
// Get id of the class experience
var btnExp = document.getElementById('btnExp');
// removing and adding class to profile picture for effect
var ExpOff_effect = document.getElementById('ExpOff_effect');


function aboutExperience (){
	popup.style.display = 'block';
	btnExp.style.background ='#32c4f6';
	btnExp.style.color ='#ecf0f1'
	popup.className = 'exppopup animated flipInX';
	ExpOff_effect.className = ' ';
		}

function aboutExpOff(){
	popup.style.display = 'none';
	btnExp.style.background ='none';
	btnExp.style.color ='#2c3e50';
	ExpOff_effect.className = 'animated bounceIn';
}

// On Click (listen event)
btnExp.addEventListener('click', aboutExperience);
popup.addEventListener('click', aboutExpOff);


// console.log(popup);

// ==============
// ============== END of  == ABOUT | EXPERIENCE SECTION




// ==========================================
// ==============
// ============== CONTACT section; animation of send button.
// ==============
// ==============
var sendBtn = document.getElementById('sendBtn');

function send(){
	sendBtn.className = 'animated zoomOutRight row-send';
}

sendBtn.addEventListener('click', send);



//SHow Map function
var iframeGoogle = document.getElementById ('iframeGoogle');
var showMapBtn = document.getElementById('showMapBtn');
var hideMapBtn = document.getElementById('hideMapBtn');

function showMap() {
	iframeGoogle.style.display = 'block';
	showMapBtn.style.display ='none';
	hideMapBtn.style.display='block';
}

function hideMap(){
	iframeGoogle.style.display ='none';
	showMapBtn.style.display ='block';
	hideMapBtn.style.display ='none';
}

showMapBtn.addEventListener('click', showMap)
hideMapBtn.addEventListener('click', hideMap)


// =========
// ============== END of CONTACT section

















// scroll animate css
//
// var $window           = $(window),
//       win_height_padded = $window.height() * 1.1,
//       isTouch           = Modernizr.touch;
//
//
//
//   $window.on('scroll', revealOnScroll);
//
//
//   function revealOnScroll() {
//     var scrolled = $window.scrollTop();
//     $(".revealOnScroll:not(.animated)").each(function () {
//       var $this     = $(this),
//           offsetTop = $this.offset().top;
//
//       if (scrolled + win_height_padded > offsetTop) {
//         if ($this.data('timeout')) {
//           window.setTimeout(function(){
//             $this.addClass('animated ' + $this.data('animation'));
//           }, parseInt($this.data('timeout'),10));
//         } else {
//           $this.addClass('animated ' + $this.data('animation'));
//         }
//       }
//     });
