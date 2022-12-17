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
			   	<li style="background-image: url(/images/expanded.png);">
			   		<div class="overlay-gradient"></div>
		   			<div class="row">
			   			<div class="col-md-6 col-md-offset-3 slider-text slider-text-bg">
			   				<div class="slider-text-inner text-center">
			   					<h1>Runner</h1>
									<h2>Voici ici un projet réalisé dans le cadre de ma scolarité à Epitech en CSFML.</h2>
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
						<source src="/videos/runner.mp4"
								type="video/mp4">
						Désolé votre navigateur ne prend pas en charge les vidéos.
					</video>
					</a>
				</div>
				<div class="col-md-4 fh5co-project-detail">
					<h2 class="fh5co-project-title">My Runner</h2>
					<span class="fh5co-project-sub">Project Epitech</span>
					<p>Dans ce jeu, vous incarnez un renard. </br>Votre but est d'atteindre 1000 points tout en esquivant les buches qui bloqueront votre chemin. </p>
					<div class="fh5co-project-service">
						<h3>Coté Technique</h3>
						<ul>
							<li>Un jeu réalisé en CSFML...</li>
							<p>Ce jeu à été fais en language C avec le CSFML, sans support en partant de rien. Le but du projet était d'apprendre à faire un Parallax. Le Parallax est le défilement du fond pour ainsi donner une impression de vitesse. J'ai pris beaucoup de plaisir à faire ce projet malgrès les difficultés rencontrés et j'ai beaucoup appris.</p>
						</ul>
						<br/>
						<p><a class="btn btn-primary btn" href="/ressources/runner.zip" download="runner.zip"></i><span>Téléchargement</span></a></p>
					</div>
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