export default {
    data() {
        return {
        }
    },
    template: `
        <div class="container-wrap">
            <footer id="fh5co-footer" role="contentinfo">
                <div class="row">
                    <div class="col-md-4 col-md-push-1">
                        <h4>A propos de ce site</h4>
                        <p>Ce Site Web a été fait par moi, vous pouvez retrouver le code source sur mon Github disponible dans la section <a href="/index.html#about-me">Qui suis-je</a> !</br></br>Si vous remarquez des bugs / problèmes n'hésitez pas à me contacter sur mon mail.</p>
                    </div>
                    <div class="col-md-3 col-md-push-4">
                        <h4>Information de contact</h4>
                        <ul class="fh5co-footer-links">
                            <li><a href="https://www.google.fr/maps/place/Rue+des+Gabares,+34000+Montpellier/@43.6060478,3.8950268,17z/data=!4m5!3m4!1s0x12b6af9cae955a51:0x6cc0ddd7893c6a1e!8m2!3d43.605135!4d3.895987">Rue des Gabares, <br>Montpellier, <br> 34000</a></li>
                                <li class="cursor-active">+33 7 69 12 <span onclick="this.innerHTML='90 23'">XX XX</span></li>
                                <li>contact@loic-tisseyre.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row copyright">
                        <div class="col-md-12 text-center">
                            <p>
                                <small class="block">&copy; 2022. All Rights Reserved.</small> 
                                <small class="block">Designed by Loïc Tisseyre</small>
                                <span style="opacity:0;" id="count"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    `
}