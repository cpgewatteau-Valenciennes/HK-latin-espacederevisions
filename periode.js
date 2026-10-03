// Période actuellement en cours : changez seulement cette valeur (P1, P2, P3…) pour passer à la période suivante.
const PERIODE_EN_COURS = "P1";

// Contenu des dossiers de premier niveau (Grammaire, Vocabulaire, Version, Thème…).
// Le dossier doré « Période en cours » est rempli AUTOMATIQUEMENT avec les exercices
// dont l'étiquette periode est égale à PERIODE_EN_COURS : chaque exercice n'est donc écrit
// qu'UNE SEULE fois, dans son bon dossier, et apparaît tout seul aussi dans « Période en cours ».
// Un dossier peut contenir des "dossiers" (sous-dossiers) et/ou des "fichiers".
// Un fichier : { nom: "Titre affiché", url: "chemin/vers/exercice.html", pictos: ["conj"], periode: "P1" }
// pictos possibles : pas, decl, conj, voc, exp, vers, theme, mix
//   pas = empreintes de sandales (Premiers pas)

const PERIODE = [
  {
    nom: "Grammaire",
    dossiers: [
      {
        nom: "Premiers pas",
        fichiers: [
          { nom: "PP 01 — Cas, fonctions, modèles", url: "revision-latin.html", pictos: ["pas"], periode: "P1" }
        ]
      },
      {
        nom: "Conjugaison",
        fichiers: []
      },
      {
        nom: "Déclinaisons",
        fichiers: []
      }
    ]
  },
  { nom: "Vocabulaire", fichiers: [] },
  { nom: "Version", fichiers: [] },
  { nom: "Thème", fichiers: [] }
];
