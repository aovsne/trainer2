var $abt = $(".way1")
$abt.waypoint(function(){
	$abt.addClass('setume animated flipInY')
}, {offset : '80%'})

var intro = $(".intro")
intro.waypoint(function(){
	intro.addClass("left animated slideInLeft")
}, {offset: '90%'})

var intro1 = $(".intro1")
intro1.waypoint(function(){
	intro1.addClass('right animated slideInRight')
}, {offset: '90%'})

var service = $(".service")
service.waypoint(function(){
	service.addClass('katsu animated flipInY')
}, {offset: '80%'})

var ichi = $(".ichi")
ichi.waypoint(function(){
	ichi.addClass("chik animated fadeInLeft")
}, {offset: '90%'})

var ni = $(".ni")
ni.waypoint(function(){
	ni.addClass("nyi animated fadeInRight")
}, {offset: '90%'})

var san = $(".san")
san.waypoint(function(){
	san.addClass("sum animated fadeInLeft")
}, {offset: '90%'})