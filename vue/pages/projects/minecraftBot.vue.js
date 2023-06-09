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
				<li style="background-image: url(/images/minecraft-bg.jpg);">
					<div class="overlay-gradient"></div>
		   			<div class="row">
			   			<div class="col-md-6 col-md-offset-3 slider-text slider-text-bg">
			   				<div class="slider-text-inner text-center">
								<h1> <font face='Minecraft'>Bot Minecraft</h1>
								<h2> <font face='Minecraft'>Une Intelligence Artificielle sur le jeu video Minecraft.</h2>
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
					<video controls autoplay style="width: 100%; min-width: 100px;">
						<source src="/videos/minecraft_1.mp4"
								type="video/mp4">
						Désolé votre navigateur ne prend pas en charge les vidéos.
					</video>
					</a>
				</div>
				<div class="col-md-4 fh5co-project-detail">
					<h2 class="fh5co-project-title"><font face='Minecraft'>Bot Minecraft</h2>
					<span class="fh5co-project-sub"><font face='Minecraft'>Projet Personnel</span>
					<p><font face='Minecraft'>Le but de ce projet est de creer un robot dans le jeu-video Minecraft. Ainsi, ce dernier est capable d'effectuer des action tel un vrai joueur en partant d'action simple comme se deplacer jusqu'a par exemple le fait de rechercher et recuperer un certain type de blocs a la demande.</p>
					<div class="fh5co-project-service">
						<h3><font face='Minecraft'>Cote Technique</h3>
						<ul>
							<p><font face='Minecraft'>Ce programme a ete fait en JavaScript, plus precisement en node js, il a ete rendu possible grace a l'utilisation d'une API haut niveau nomme mineflayer, disponible <a href="https://github.com/PrismarineJS/mineflayer" target="_blank">ici</a>.</p>
						</ul>
						<br/>
						<a class="github-button" href="https://github.com/LunnosMp4/Minecraft-Bot/subscription" data-icon="octicon-eye" data-size="large" aria-label="Watch LunnosMp4/Minecraft-Bot on GitHub">Watch</a>
						<a class="github-button" href="https://github.com/LunnosMp4/Minecraft-Bot/archive/HEAD.zip" data-icon="octicon-download" data-size="large" aria-label="Download LunnosMp4/Minecraft-Bot on GitHub">Download</a>
						<a class="github-button" href="https://github.com/LunnosMp4/Minecraft-Bot" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star LunnosMp4/Minecraft-Bot on GitHub">Star</a>
					</div>
				</div>
			</div>
		</div>
		<div id="fh5co-work">
			<div class="row">
				<div class="col-md-8 col-md-push-4">
					<video controls style="width: 100%; min-width: 100px;">
						<source src="/videos/minecraft_2.mp4"
								type="video/mp4">
						Désolé votre navigateur ne prend pas en charge les vidéos.
					</video>
				</div>
				<div class="col-md-4 fh5co-project-detail col-md-pull-8">
					<h2 class="fh5co-project-title"><font face='Minecraft'>Toute les actions possibles..</h2>
					<p><font face='Minecraft'>Comme vous avez pu le voir sur la video ci-dessus, le Bot reagi a des commandes ecrites dans le chat textuel du jeu. Ainsi lorsqu'une personne va ecrire la commande 'follow' par exemple le Bot va le suivre. Il existe donc plusieurs commande que vous retrouverez en ecrivant la commande 'help'. Si vous souhaitez vous renseigner un peu plus techniquement sur ce projet, je vous invite directement a aller voir le projet sur <a href="https://github.com/LunnosMp4/Minecraft-Bot" >Github</a>.</p>	
				</div>
			</div>
		</div>
		<div id="fh5co-work">
			<div class="row">	
				<div class="col-md-8 col-md-push-4">
					<video controls style="width: 100%; min-width: 100px;">
						<source src="/videos/prismarine.mp4"
								type="video/mp4">
						Désolé votre navigateur ne prend pas en charge les vidéos.
					</video>
					<img src="/images/minecraft-bg.jpg" alt="Minecraft" class="img-responsive" width="80%">
				</div>
				<div class="col-md-4 fh5co-project-detail col-md-pull-8">
					<h2 class="fh5co-project-title"><font face='Minecraft'>Observez depuis un navigateur</h2>
					<p><font face='Minecraft'>Le projet comporte egalement, une partie Web accesssible durant l'execution du Bot sur l'adresse suivante: <a href="http://localhost:3002/">http://localhost:3002/</a></br>Ce site web, comme vous pouvez le voir sur la video a droite, permet de visualiser l'environment du Jeu ou le Bot est connecte en Troisieme directement depuis un site Internet. Vous pouvez egalement visualiser l'environment depuis la vue du Bot sur l'adresse suivante : <a href="http://localhost:3001">http://localhost:3001/</a></p>	
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