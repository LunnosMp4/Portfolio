export default {
    data() {
        return {
        }
    },
    template: `
    <div class="container-wrap">
		<aside id="fh5co-hero">
			<div class="flexslider">
				<ul class="slides">
			   	<li style="background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);">
			   		<div class="overlay-gradient"></div>
			   		<div class="container-fluids">
			   			<div class="row">
				   			<div class="col-md-6 col-md-offset-3 slider-text slider-text-bg">
				   				<div class="slider-text-inner text-center">
				   					<h1>Contactez moi</h1>
									<h2>Merci de me contacter via le formulaire ci dessous ou bien directement via mon adresse email renseigné sur la page.</h2>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>		   	
			  	</ul>
		  	</div>
		</aside>		
		<div id="fh5co-contact">
			<div class="row">
				<div class="col-md-3 col-md-push-1">
					<h3>Mon addresse</h3>
					<ul class="contact-info">
						<li><i class="icon-location4"></i><a href="https://www.google.fr/maps/place/Rue+des+Gabares,+34000+Montpellier/@43.6060478,3.8950268,17z/data=!4m5!3m4!1s0x12b6af9cae955a51:0x6cc0ddd7893c6a1e!8m2!3d43.605135!4d3.895987" >58 rue des Gabares, <br> Bat A, Montpellier, <br> 34000</a></li>
						<li class="cursor-active"><i class="icon-phone3"></i>+33 7 69 12 <span onclick="this.innerHTML='90 23'">XX XX</span></li>
						<li><i class="icon-location3"></i>contact@loic-tisseyre.com</li>
					</ul>
				</div>
				<div class="col-md-7 col-md-push-1">
                   <h2>Formulaire envoyé !</h2>
				   <p>Vous recevrez un email de confirmation d'ici quelques minutes.</p>
				   <p>Si vous ne voyez aucun mail pensez à regarder vos Spams.</p>
                  </div>
			</div>
		</div>
	</div>
    `,
    mounted() {
        const $$ = (s, o = document) => o.querySelectorAll(s);

        $$('.btn, .icon, .js-gotop').forEach(el => el.addEventListener('mousemove', function(e) {
            const pos = this.getBoundingClientRect();
            const mx = e.clientX - pos.left - pos.width/2; 
            const my = e.clientY - pos.top - pos.height/2;
            
            this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.3 +'px)';
            this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
            this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
        }));

        $$('.btn, .icon, .js-gotop').forEach(el => el.addEventListener('mouseleave', function() {
            this.style.transform = 'translate3d(0px, 0px, 0px)';
            this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
            this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
        }));
    }
}