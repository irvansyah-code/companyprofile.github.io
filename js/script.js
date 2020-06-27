$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
		// console.log('ok');

	// layanan
	if( wScroll > $('.layanan').offset().top - 450 ) {
		$('.layanan .collayanan1').each(function(i) {
			setTimeout(function(){
				$('.layanan .collayanan1').eq(i).addClass('tampil');
			}, 300 * (i+1));
		});

		
	}


	if( wScroll > $('.layanan').offset().top - 450 ) {
		$('.layanan .collayanan2').each(function(i) {
			setTimeout(function(){
				$('.layanan .collayanan2').eq(i).addClass('tampil');
			}, 300 * (i+1));
		});

		
	}

	// partner
	if( wScroll > $('.outpartner').offset().top - 500 ) {
		$('.outpartner').each(function(i) {
			setTimeout(function(){
				$('.outpartner').eq(i).addClass('tampil');
			}, 300 * (i+1));
		});

		
	}


	// footer --> jumbotron2
	if( wScroll > $('.footer').offset().top - 650 ) {
		$('.footer .jumbotron2').each(function(i) {
			setTimeout(function(){
				$('.footer .jumbotron2').eq(i).addClass('tampil');
			}, 300 * (i+1));
		});

		
	}




});

// visi misi

$("document").ready(function(){
			$(".flip1").click(function(){
				$(".pesan1").slideToggle("slow");
			});
		});

$("document").ready(function(){
			$(".flip2").click(function(){
				$(".pesan2").slideToggle("slow");
			});
		});
$("document").ready(function(){
			$(".flip3").click(function(){
				$(".pesan3").slideToggle("slow");
			});
		});

// akhir visimisi