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
				<li style="background-image: url(/images/dump1090.png);">
					<div class="overlay-gradient"></div>
		   			<div class="row">
			   			<div class="col-md-6 col-md-offset-3 slider-text slider-text-bg">
			   				<div class="slider-text-inner text-center">
								<h1 class="color-black">Dump1090 Modern Interface</h1>
								<h2 class="color-black">Une interface propre et moderne pour Dump 1090.</h2>
			   				</div>
			   			</div>
			   		</div>
			   	</li>		   	
			  	</ul>
		  	</div>
		</aside>		
		<div id="fh5co-work">
			<div class="row">
				<div class="col-md-8">
					<img src="https://zupimages.net/up/22/31/xu1i.png" alt="Dump1090" style="width: 90%; min-width: 100px;" class="img-responsive">
				</div>
				<div class="col-md-4 fh5co-project-detail">
					<h2 class="fh5co-project-title">Une Interface pour Dump1090</h2>
					<span class="fh5co-project-sub">Afficher des avions sur une carte</span>
					<p>Passionné par l'aviation j'ai fais cette interface pour afficher les avions qui passent au dessus de chez moi, j'ai utilisé le projet Dump1090 pour recuperer les informations des avions et les afficher sur une map.</p>
					<div class="fh5co-project-service">
						<h3>Cote Technique</h3>
						<ul>
							<p>Le projet est en Vanilla JS et utilise l'API de OpenStreetMap ainsi que Leaflet pour afficher la map. Pour recuperer les informations des avions j'ai utilisé une antenne ADS-B connecté à un Raspberry Pi qui utilise Dump1090 afin de traiter les donnés de l'antenne.</p>
						</ul>
						<br/>
						<a class="github-button" href="https://github.com/LunnosMp4/MouliBot/subscription" data-icon="octicon-eye" data-size="large" aria-label="Watch LunnosMp4/Minecraft-Bot on GitHub">Watch</a>
						<a class="github-button" href="https://github.com/LunnosMp4/MouliBot/archive/HEAD.zip" data-icon="octicon-download" data-size="large" aria-label="Download LunnosMp4/Minecraft-Bot on GitHub">Download</a>
						<a class="github-button" href="https://github.com/LunnosMp4/MouliBot" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star LunnosMp4/Minecraft-Bot on GitHub">Star</a>
					</div>
				</div>
			</div>
		</div>
		<div id="fh5co-work">
			<div class="row">
				<div class="col-md-8 col-md-push-4">
					<img src="https://zupimages.net/up/22/31/w2fw.png" style="width: 90%; min-width: 100px;" class="img-responsive"/>
				</div>
				<div class="col-md-4 fh5co-project-detail col-md-pull-8">
					<h2 class="fh5co-project-title">Qu'en ai-je appris ?</h2>
					<p>Ce projet m'a beaucoup apporté notemment sur l'utilisation de mon Raspberry Pi, il s'agissait d'un de mes premiers projets avec ce dernier, j'ai également appris sur le fonctionnement des antennes ADS-B et sur le traitement des données sur ces dernières.</p>
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
