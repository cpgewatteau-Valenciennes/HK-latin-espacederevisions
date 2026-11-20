// Période actuellement en cours : changez seulement cette valeur (P1, P2, P3…) pour passer à la période suivante.
const PERIODE_EN_COURS = "P1";

// Contenu des dossiers de premier niveau (Grammaire, Vocabulaire, Version, Thème…).
// Le dossier doré « Période en cours » est rempli AUTOMATIQUEMENT avec les exercices
// dont l'étiquette periode est égale à PERIODE_EN_COURS : chaque exercice n'est donc écrit
// qu'UNE SEULE fois, dans son bon dossier, et apparaît tout seul aussi dans « Période en cours »
// (à plat, sans sous-dossier : le fichier reste aussi dans son dossier d'origine, ex. « Premiers pas »).
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
          { nom: "PP 01 — Cas, fonctions, modèles", url: "revision-latin.html", pictos: ["pas"], periode: "P1" },
          { nom: "PP 02 — Identifier les modèles de déclinaison et de conjugaison", url: "PP02-identifier-modeles.html", pictos: ["pas"], periode: "P1" },
          { nom: "PP 03 — Présent de l'indicatif", url: "latin-revisions-v2.html", pictos: ["pas"], periode: "P1" },
          { nom: "PP04 noms modèles radicaux", url: "PP04-noms-modeles-radicaux.html", pictos: ["pas", "decl"], periode: "P1" },
          { nom: "PP05 verbes modèles radicaux", url: "PP05-verbes-modeles-radicaux.html", pictos: ["pas", "conj"], periode: "P1" }
        ]
      },
      {
        nom: "Conjugaison",
        fichiers: [
          { nom: "Conj 01 — ESSE : infinitif présent, indicatif présent, imparfait et parfait", url: "conj01.html", pictos: ["conj"], periode: "P1" },
          { nom: "Conj 02 — Radicaux du présent et du parfait", url: "conj02.html", pictos: ["conj"], periode: "P1" },
          { nom: "Conj 03 — Aimer, venir, éternuer : indicatif présent, imparfait et parfait", url: "conj03.html", pictos: ["conj"], periode: "P1" },
          { nom: "Conj 04 — Revoir le parfait de l’indicatif", url: "conj04.html", pictos: ["conj"], periode: "P1" }
        ]
      },
      {
        nom: "Déclinaisons",
        fichiers: [
          { nom: "Décl 01 — Les 2 premières déclinaisons, forme par forme", url: "exercice-declinaisons-1-2.html", pictos: ["decl"], periode: "P1" }
        ]
      }
    ]
  },
  {
    nom: "Vocabulaire",
    dossiers: [
      {
        nom: "Liste du CB1",
        fichiers: [
          { nom: "Voc 01 — Flashcards : la liste du CB1", url: "Voc01listeCB1.html", pictos: ["voc"], periode: "P1" },
          { nom: "Voc 02 — Associer : la liste du CB1", url: "Voc02listeCB1associer.html", pictos: ["voc"], periode: "P1" },
          { nom: "Voc 02 — Quelques catégories", url: "Voc02listeCBdivers.html", pictos: ["voc"], periode: "P1" },
          { nom: "Voc 03 — Intrus et mise en ordre : la liste du CB1", url: "Voc03listeCB1intrusordre.html", pictos: ["voc"], periode: "P1" }
        ]
      }
    ]
  },
  { nom: "Version", fichiers: [] },
  { nom: "Thème", fichiers: [] }
];
