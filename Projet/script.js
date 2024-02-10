/* Fonction permettant de changer les feuilles de style
style_particulier (chaine de caractères) : nom du fichier css de la feuille de style particulière à la page */
function changeCSS(style_particulier) {
    // variable contenant les balises link de la page
	var linkCSS = document.getElementsByTagName("link");
    // variable contenant le dossier dans lequel prendre les feuilles de style
	var dossier = document.getElementById("choixCSS").value;
    // liaison de la feuille de style commune à tout le site
	linkCSS[0].href = dossier + 'style.css';
    // liaison de la feuille de style particulière à la page
    linkCSS[1].href = dossier + style_particulier;
    
}