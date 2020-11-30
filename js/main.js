
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
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');

//2nd_ getting id of div with class box-1...n to be triggered fro changing its class css display property: from none to block and vice-a-versa
var box1 = document.getElementById('box-1');
var box2 = document.getElementById('box-2');
var box3 = document.getElementById('box-3');
var box4 = document.getElementById('box-4');
var box5 = document.getElementById('box-5');
var box6 = document.getElementById('box-6');
var box7 = document.getElementById('box-7');
var box8 = document.getElementById('box-8');

// swap
function swap1() {
    box1.style.display ='none';
    box2.style.display ='block';
    box2.className = 'box-2 animated flipInY';
}

function swap2() {
    box3.style.display ='none';
    box4.style.display ='block';
    box4.className = 'box-2 animated flipInY';
}


function swap3() {
    box5.style.display ='none';
    box6.style.display ='block';
    box6.className = 'box-2 animated flipInY';
}


function swap4() {
    box7.style.display ='none';
    box8.style.display ='block';
    box8.className = 'box-2 animated flipInY';
}



//unSwap
function unSwap1() {
  box2.style.display ='none';
  box1.style.display ='block';
  box1.className = 'box-1 animated flipInY';
}

function unSwap2() {
  box4.style.display ='none';
  box3.style.display ='block';
  box3.className = 'box-1 animated flipInY';
}

function unSwap3() {
  box6.style.display ='none';
  box5.style.display ='block';
  box5.className = 'box-1 animated flipInY';
}

function unSwap4() {
  box8.style.display ='none';
  box7.style.display ='block';
  box7.className = 'box-1 animated flipInY';
}

// event listeners clicking on buttons
btn1.addEventListener('click', swap1);
btn2.addEventListener('click', unSwap1);
btn3.addEventListener('click', swap2);
btn4.addEventListener('click', unSwap2);
btn5.addEventListener('click', swap3);
btn6.addEventListener('click', unSwap3);
btn7.addEventListener('click', swap4);
btn8.addEventListener('click', unSwap4);

// console.log(contServ1, serviceMod);

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
