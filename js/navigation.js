	$(function() {
			$('#nav > div').hover(
			function () {				
				var $this = $(this);
				$this.find('img').stop().animate({
					'width'     :'199px',
					'height'    :'199px',
					'top'       :'-10px',
					'left'      :'-72px',
					'opacity'   :'1.0'
				},500,'easeOutBack',function(){
					$(this).parent().find('ul').fadeIn(700);
				});

				$this.find('a:first,h2').addClass('active');
			},
			function () {
				var $this = $(this);
				$this.find('ul').fadeOut(500);
				$this.find('img').stop().animate({
					'width'     :'52px',
					'height'    :'52px',
					'top'       :'0px',
					'left'      :'0px',
					'opacity'   :'0.1'
				},5000,'easeOutBack');

				$this.find('a:first,h2').removeClass('active');
			}
		);
		});
        
        function sendMail() {
            var link = "mailto:mixeratumergosum@gmail.com"                    
                     + "&subject=" + escape(document.getElementById('mySubject').value)
                     + "&body=" + escape(document.getElementById('myText').value)
            ;

            window.location.href = link;
        }      
		
		$('img').bind('contextmenu', function(e) {
			return false;
		}); 

        function showModal(name){		
			document.getElementById("modal"+name).style.display="block";
			document.getElementById('cover').style.display="block";
		}
		
		function closeModals(){		
			var elems = document.getElementsByTagName('*'), i;
			for (i in elems) {
				if((' ' + elems[i].className + ' ').indexOf('modal')
						> -1) {
					elems[i].style.display="none";
				}
			}		
			document.getElementById('cover').style.display="none";
		} 

        function sendMail() {
            var link = "mailto:mixeratumergosum@gmail.com"                    
                     + "&subject=" + escape(document.getElementById('mySubject').value)
                     + "&body=" + escape(document.getElementById('myText').value)
            ;

            window.location.href = link;
        }     