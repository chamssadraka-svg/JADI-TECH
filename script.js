function verifierOuverture() {
    const maintenant = new Date();
    
    const jour = maintenant.getDay(); 

    const heure = maintenant.getHours();
    const minutes = maintenant.getMinutes();
    const heureActuelleEnMinutes = (heure * 60) + minutes;

    const heureOuverture1 = (8 * 60) + 0;  
    const heureFermeture1 = (12 * 60) + 0;
    const heureOuverture2 = (15 * 60) + 0;
    const heureFermeture2 = (18 * 60) + 0; 

    const baliseStatus = document.getElementById("status-magasin");

    if (jour === 0 || heureActuelleEnMinutes < heureOuverture1 || heureFermeture1 <= heureActuelleEnMinutes < heureOuverture2 || heureActuelleEnMinutes >= heureFermeture2) {
        baliseStatus.textContent = "fermé";
        baliseStatus.style.color = "red";
    } else {
        baliseStatus.textContent = "ouvert";
        baliseStatus.style.color = "green";
    }
}

verifierOuverture();

setInterval(verifierOuverture(), 1000);
