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
			   	<li style="background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);">
			   		<div class="overlay-gradient"></div>
		   			<div class="row">
			   			<div class="col-md-6 col-md-offset-3 slider-text slider-text-bg">
			   				<div class="slider-text-inner text-center">
			   					<h1>SICARIUS</h1>
									<h2>Voici mon tout premier projet réalisé en groupe de six en seulement deux jours</h2>
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
					<a href="/images/sicarius1.png" class="image-popup img-portfolio-detail">
						<img src="/images/sicarius1.png" alt="Sicarius image 1" class="img-responsive">
					</a>
					<a href="/images/sicarius2.png" class="image-popup img-portfolio-detail">
						<img src="/images/sicarius2.png" alt="Sicarius image 2" class="img-responsive">
					</a>
					<a href="/images/sicarius3.png" class="image-popup img-portfolio-detail">
						<img src="/images/sicarius3.png" alt="Sicarius image 3" class="img-responsive">
					</a>
				</div>
				<div class="col-md-4 fh5co-project-detail">
					<h2 class="fh5co-project-title">Sicarius</h2>
					<span class="fh5co-project-sub">Première Game Jam</span>
					<p>Dans ce jeu, vous incarnez un assassin qui doit tuer d'innocents villageois qui sont trop faibles pour vous blesser d'une quelconque manière. Seulement, ils ont laissé des pièges sur la route et ceux-ci vous seront fatal. Vous devrez vous infiltrer dans le château du roi pendant qu'il n'est pas la et esquiver les pièges de ses sujets. Si vous arrivez au bout du château, vous gagnez ! Si vous réussissez, le chaos tombera sur le royaume…  Serez-vous assez fort pour réussir votre quête ?</p>
					<div class="fh5co-project-service">
						<h3>Mes ressentis</h3>
						<ul>
							<li>Une Découverte, une expérience...</li>
							<p>Ce jeu à été fait durant ma première Game Jam. J'ai donc découvert, le moteur de jeu Unity tout en codant le jeu. Ce projet fut donc une épreuve qui m'a poussé moi et mes collègues a découvrir une nouvelle interface ainsi qu'un nouveau language (le C#) durant l'instant de 48h. </br> J'ai donc énormément travaillé sur ce projet meme si nous n'avons pas pu terminer le jeu tels qu'on le souhaité a la base.</p>
						</ul>
						<br/>
						<p><a class="btn btn-primary btn" href="/ressources/Sicarius.zip" download="Sicarius.zip"></i><span>Téléchargement</span></a></p>
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