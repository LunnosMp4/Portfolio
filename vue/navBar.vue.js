export default {
    data() {
        return {
            currentURL: "",
            projects: [
                {
                    name: "Sicarius",
                    link: '/projets/sicarius.html'
                },
                {
                    name: "Runner",
                    link: '/projets/runner.html'
                },
                {
                    name: "Sky Weather",
                    link: '/projets/sky-weather.html'
                },
                {
                    name: "Minecraft Bot",
                    link: '/projets/minecraft-bot.html'
                },
                {
                    name: "Moulibot",
                    link: '/projets/moulibot.html'
                },
            ]
        }
    },
    template: `
    <nav class="fh5co-nav" role="navigation">
        <div class="container-wrap">
            <div class="top-menu">
                <div class="row">
                    <div class="col-xs-2">
                    <div id="fh5co-logo"><a href="/index.html">Portfolio</a></div>
                </div>
                <div class="col-xs-10 text-right menu-1">
                    <ul class="cursor-active">
                        <li v-bind:class="{ active: currentURL.includes('index.html') }"><a href="/index.html">Accueil</a></li>
                        
                        <li v-bind:class="{ active: currentURL.includes('projects.html') || projects.some(project => currentURL.includes(project.link)) }" class="has-dropdown">
                            <a href="/projects.html">Projets</a>
                            <ul class="dropdown">
                                <li v-for="project in projects"><a v-bind:href="project.link">{{ project.name }}</a></li>
                            </ul>
                        </li>
                        <li v-bind:class="{ active: currentURL.includes('contact.html') || currentURL.includes('contact-success.html') }"><a href="/contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    `,
    created() {
        this.currentURL = window.location.href;
    },
    methods: {
        lowPerformance() {
            if (localStorage.getItem("lowPerformance") !== "true")
                localStorage.setItem("lowPerformance", true);
            else
                localStorage.setItem("lowPerformance", false);
            
            window.location.reload();
        },
        darkMode() {
            if (localStorage.getItem("darkMode") !== "true")
                localStorage.setItem("darkMode", true);
            else
                localStorage.setItem("darkMode", false);
            
            window.location.reload();
        }
    }
}
