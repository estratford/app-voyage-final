//Définir ce que le mock prend ici (même éléments que dans le dossier mock.)

export interface Forfait {
    id: string,
    destination: string;
    villeDepart: string;
    hotel: {
        nom: string;
        coordonnees: string;
        nombreEtoiles: number;
        nombreChambres: number;
        caracteristiques: string[];
    },
    dateDepart: string;
    dateRetour: string;
    prix: number;
    rabais: number;
    vedette: boolean
}