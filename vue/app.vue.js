import navigation from './navBar.vue.js'
import credit from './credit.vue.js'

import index from './pages/index.vue.js'
import projects from './pages/projects.vue.js'
import contact from './pages/contact.vue.js'
import contactSuccess from './pages/contactSuccess.vue.js'
import error from './pages/error.vue.js'

import runner from './pages/projects/runner.vue.js'
import sicarius from './pages/projects/sicarius.vue.js'
import moulibot from './pages/projects/moulibot.vue.js'
import minecraftbot from './pages/projects/minecraftBot.vue.js'

const page = Vue.createApp({})
page.component('navigation', navigation)
page.component('credit', credit)
page.component('index', index)
page.component('projects', projects)
page.component('contact', contact)
page.component('contactSuccess', contactSuccess)
page.component('runner', runner)
page.component('sicarius', sicarius)
page.component('moulibot', moulibot)
page.component('minecraftbot', minecraftbot)
page.component('error', error)
page.component('error', projects)
page.mount('#page')

Vue.createApp({
    data() {
        return {
        }
    },
    template: `
        <link href="https://fonts.googleapis.com/css?family=Oxygen:300,400" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet">

        <link rel="stylesheet" href="https://cdn.loic-tisseyre.com/css/animate.min.css">
        <link rel="stylesheet" href="https://cdn.loic-tisseyre.com/css/icomoon.min.css">
        <link rel="stylesheet" href="https://cdn.loic-tisseyre.com/css/bootstrap.css">
        <link rel="stylesheet" href="https://cdn.loic-tisseyre.com/css/magnific-popup.min.css">
        <link rel="stylesheet" href="https://cdn.loic-tisseyre.com/css/flexslider.css">
    `
}).mount('#css')