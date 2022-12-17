export default {
    data() {
        return {
			projects: [
				{
					name: 'Sicarius',
					description: 'Première Game Jam',
					thumbnail: '/images/sicarius2.png',
					link: '/projets/sicarius.html'
				},
				{
					name: 'Runner',
					description: 'Projet CSFML',
					thumbnail: '/images/runner1.png',
					link: '/projets/runner.html'
				},
				{
					name: 'Sky Weather',
					description: 'Site Météo',
					thumbnail: '/images/sky2.png',
					link: '/projets/sky-weather.html'
				},
				{
					name: 'Minecraft Bot',
					description: 'Un Bot sur le Jeu Vidéo Minecraft',
					thumbnail: '/images/pato.png',
					link: '/projets/minecraft-bot.html'
				},
				{
					name: 'MouliBot',
					description: 'Un Bot Discord pour Epitech',
					thumbnail: '/images/discordlogo.jpg',
					link: '/projets/moulibot.html'
				},
				{
					name: 'Pas de Projet',
					description: 'Arrive bientôt',
					thumbnail: '/images/portfolio-6.jpg',
					link: '404.html'
				}
			]
        }
    },
    template: `
    <div class="container-wrap">
		<aside id="fh5co-hero">
			<div class="flexslider">
				<ul class="slides">
			   	<li style="background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);">
			   		<div class="overlay-gradient"></div>
		   			<div class="row">
			   			<div class="col-md-6 col-md-offset-3 slider-text slider-text-bg">
			   				<div class="slider-text-inner text-center">
			   					<h1>Mes Projets</h1>
									<h2>Tout mes projets sans distinction</h2>
			   				</div>
			   			</div>
			   		</div>
			   	</li>		   	
			  	</ul>
		  	</div>
		</aside>		
		<div id="fh5co-work">
			<div class="row">
				<div class="col-md-4 text-center" v-for="project in projects">
					<a :href="project.link" class="work" :style="{backgroundImage: 'url(' + project.thumbnail + ')'}">
						<div class="desc">
							<h3>{{project.name}}</h3>
							<span>{{project.description}}</span>
						</div>
					</a>
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
