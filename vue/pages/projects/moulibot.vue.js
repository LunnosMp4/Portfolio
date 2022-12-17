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
				<li style="background-image: url(/images/backgrounddiscord.png);">
					<div class="overlay-gradient"></div>
		   			<div class="row">
			   			<div class="col-md-6 col-md-offset-3 slider-text slider-text-bg">
			   				<div class="slider-text-inner text-center">
								<h1>MouliBot</h1>
								<h2>Un bot sur la plateforme Discord pour améliorer le quotidien de vie des étudiants d'Epitech.</h2>
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
					<video controls autoplay style="width: 95%; min-width: 100px;">
						<source src="/videos/discordexample.mp4"
								type="video/mp4">
						Desole votre navigateur ne prend pas en charge les videos.
					</video>
					</a>
				</div>
				<div class="col-md-4 fh5co-project-detail">
					<h2 class="fh5co-project-title">Un Bot Discord Epitech</h2>
					<span class="fh5co-project-sub">Un Bot Discord pour les étudiants à Epitech</span>
					<p>Ce projet a pour but de simplifier la vie des étudiants à Epitech en envoyant un message avec les notes des Projets Epitech directement sur la plateforme Discord.</p>
					<div class="fh5co-project-service">
						<h3>Cote Technique</h3>
						<ul>
							<p>Ce Bot a été fait en Javascript en utilisant discord.js, toutes les données sont récuperé depuis l'API api.epitest.me, malheureusement cette API n'est pas documenté donc j'ai du rechercher les informations par moi meme. Ainsi vous trouverez tout le fonctionnement du Bot sur le projet sur <a href="https://github.com/LunnosMp4/MouliBot">Github</a>.</p>
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
					<img src="/images/database.jpg" style="width: 90%; min-width: 100px;" alt="Minecraft"/>
				</div>
				<div class="col-md-4 fh5co-project-detail col-md-pull-8">
					<h2 class="fh5co-project-title">Token et Base de donnée</h2>
					<p>Pour ce projet, j'ai du affronter un probleme jamais rencontré auparavant, en effet chaque utilisateur a un Token (clé) et donc ce token est associé à cette personne et non à une autre. L'API utilise ce Token pour acceder aux notes de cet utilisateur. Pour résoudre ce problème j'ai donc créé une base de donnée contenant d'un coté l'utilisateur avec son id Discord et de l'autre son Token, ainsi lorsque l'utilisateur entre une commande on récupere directement son Token qui y est associé.</p>	
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