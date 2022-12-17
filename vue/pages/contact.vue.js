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
                <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                    <h2>Contactez moi</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-md-push-1">
                    <h3>Mon addresse</h3>
                    <ul class="contact-info">
                        <li><i class="icon-location4"></i><a href="https://www.google.fr/maps/place/Rue+des+Gabares,+34000+Montpellier/@43.6060478,3.8950268,17z/data=!4m5!3m4!1s0x12b6af9cae955a51:0x6cc0ddd7893c6a1e!8m2!3d43.605135!4d3.895987" >Rue des Gabares, <br> Montpellier, <br> 34000</a></li>
                        <li class="cursor-active"><i class="icon-phone3"></i>+33 7 69 12 <span onclick="this.innerHTML='90 23'">XX XX</span></li>
                        <li><i class="icon-location3"></i>contact@loic-tisseyre.com</li>
                    </ul>
                </div>
                <div class="col-md-7 col-md-push-1">
                    <form target="_blank" action="https://formsubmit.co/contact@loic-tisseyre.com" method="POST">
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col">
                                    <input type="hidden" name="_subject" value="Nouveau message !">
                                    <input type="text" name="name" class="form-control" placeholder="Nom" required>
                                </div>
                            <div class="col">
                                <input type="email" name="email" class="form-control" placeholder="Adresse Email" required>
                                <input type="hidden" name="_next" value="https://loic-tisseyre.com/contact-success.html">
                                <input type="hidden" name="_autoresponse" value="Bonjour, ceci est un message automatique. Merci d'avoir envoyé un message avec mon formulaire. Je vous recontacterais d'ici peu. Cordialement, Loïc Tisseyre.">
                            </div>
                        </div>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Votre Message" class="form-control" name="message" rows="5" required></textarea>
                        </div>
                    <button type="submit" class="btn btn-primary btn-modify"><span>Envoyer</span></button>
                    </form>
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