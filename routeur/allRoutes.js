import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["client", "admin"],),
    new Route("/editPassword", "Changement de mot de pase", "/pages/auth/editPassword.html", ["client", "admin"], "/js/auth/editPassword.js"),
    new Route("/Covoiturages", "Covoiturages", "/pages/Covoiturages.html", ["client"], "/js/covoit/formulaire.js"),
    new Route("/Contactes", "Contactes", "/pages/Contactes.html", ["client"]),
    new Route("/Vuecovoiturages", "Vuecovoiturages", "/pages/Vuecovoiturages.html", ["client"]),
    
]
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";