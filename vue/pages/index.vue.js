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
					thumbnail: 'images/portfolio-6.jpg',
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
                <li style="background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);">
                    <div class="overlay-gradient"></div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-md-pull-3 slider-text">
                                <div class="slider-text-inner">
                                    <h1>Découvrir tout mes projets</h1>
                                    <h2>Voir tout mes projets et les projets où j'ai apporté une aide précieuse.</h2>
                                    <p><a class="btn btn-primary btn-learn" href="projects.html"></i><span>En apprendre plus</span></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li style="background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);">
                        <div class="overlay-gradient"></div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3 col-md-push-3 slider-text">
                                    <div class="slider-text-inner">
                                        <h1>Qui suis-je</h1>
                                        <h2>Découvrez ici tout mon parcour, mes compétences, ...</h2>
                                        <p><a class="btn btn-primary btn-learn" href="index.html#about-me"></i><span>En apprendre plus</span></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li style="background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);">
                        <div class="overlay-gradient"></div>
                        <div class="container-fluids">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3 slider-text">
                                    <div class="slider-text-inner text-center">
                                        <h1>Me contacter</h1>
                                        <h2>Vous pouvez me contacter sur cette page</h2>
                                        <p><a class="btn btn-primary btn-learn" href="contact.html"></i><span>En apprendre plus</span></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>  	
                </ul>
            </div>
        </aside>

        <div id="fh5co-about">
            <div id="about-me">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 text-center heading-section">
                    </div>
                </div>
                <div class="col-md-8 col-md-offset-2 text-center">
                    <div class="about-desc">
                        <h3>Loïc Tisseyre</h3>
                        <p>Etudiant en informatique.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5">
                        <p><img src="images/me.png" alt="Photo Loïc Tisseyre" class="img-responsive"></p>
                    </div>
                    <div class="col-md-6 fh5co-project-detail">
                        <h2 class="fh5co-project-title">Présentation</h2>
                        <p>Actuellement étudiant dans l'école Epitech Montpellier.</br>J'ai obtenu un BAC S, avec spécialité Science de l'ingénieur, et Mathématique. </br>J'ai découvert la programmation durant le lycée grace a des tutoriels sur Internet , mais également durant mes cours de Science de l'ingénieur.</br>J'ai alors décidé d'intégrer l'école Epitech afin d'en faire mon métier.</p>
                        <h2 class="fh5co-project-title">Centre d'interet</h2>
                        <p>Passionné d'aviation, j'ai eu l'occasion de passer mon Brevet d'initiation aéronautique puis, mon Brevet de pilote ULM. </br>J'ai également fait beaucoup de sport, tel que le tennis, le taekwondo et plus récemment de l'escalade où j'ai pris beaucoup de plaisir. Désormais je fais de la musculation mais également  du sport en extérieur course à pied, vélo, randonnée.</p>
                        <h2 class="fh5co-project-title">Compétences</h2>
                        <p>Depuis que je fais de la programmation j'ai pu expérimenté plusieurs languages, notemment le C, le Python, le Java, le HTML/CSS, le C# et enfin le JS.</br>Etant en plein apprentissage pour l'instant les languages que je métrise le plus sont le C, le Python et le HTML/CSS.</br>J'ai un niveau B2 en anglais et un niveau A2 en espagnol.</p>
                    </div>
                    <div id="fh5co-work" class="fh5co-light-grey">
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <div class="services">
                                    <span class="icon">
                                        <a href="https://github.com/LunnosMp4" target="_blank"><i class="icon-github"></i></a>
                                    </span>
                                    <div class="desc">
                                        <h3><a href="https://github.com/LunnosMp4" target="_blank">Mon Github</a></h3>
                                        <p>Voici mon <b><a href="https://github.com/LunnosMp4" target="_blank">Github</a></b>, vous y retrouverez tout les projets présent sur ce site mais également d'autre projets non présenté ici !</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="services">
                                    <span class="icon">
                                        <a href="ressources/CV Tisseyre Loïc.pdf" target="_blank"><i class="icon-document"></i></a>
                                    </span>
                                    <div class="desc">
                                        <h3><a href="#" target="_blank">Mon CV</a></h3>
                                        <p>Voici mon <b><a href="ressources/CV Tisseyre Loïc.pdf" target="_blank">CV</a></b> pour en apprendre plus sur moi, mon parcours, mes compétences.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="services">
                                    <span class="icon">
                                        <a href="https://www.linkedin.com/in/loïc-tisseyre-71a38522a/" target="_blank"><i class="icon-linkedin2"></i></a>
                                    </span>
                                    <div class="desc">
                                        <h3><a href="https://www.linkedin.com/in/loïc-tisseyre-71a38522a/" target="_blank">Mon Linkedin</a></h3>
                                        <p>Vous trouverez ici mon <b><a href="https://www.linkedin.com/in/loïc-tisseyre-71a38522a/" target="_blank">Linkedin</a></b>, pour connaitre mon parcours en détails.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="fh5co-work" class="fh5co-light-grey">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                    <div>
                        <a href="projects.html"><h2>Mes projets</h2></a>
                    </div>
                    <p>Découvrez ci-dessous mes plus gros projets ainsi que d'autres grands projets auquels j'ai pu participé</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 text-center" v-for="project in projects.slice(0, 3)">
                    <a :href="project.link" class="work" :style="{backgroundImage: 'url(' + project.thumbnail + ')'}">
                        <div class="desc">
                            <h3>{{ project.name }}</h3>
                            <span>{{ project.description }}</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-md-12 text-center">
                <a class="btn btn-more" href="projects.html"></i><span>En voir plus</span></a>
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