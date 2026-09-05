/*
  ============================================================
  STRUCTURE DU SITE — c'est le SEUL fichier à modifier plus tard
  ============================================================

  Chaque dossier est un objet :
  {
    nom: "Nom affiché",
    dossiers: [ ...sous-dossiers... ],   // optionnel
    fichiers: [ { nom: "...", url: "...", pictos: ["decl","conj"] } ]  // optionnel
  }

  Le champ "pictos" est optionnel : il affiche un ou plusieurs petits
  pictogrammes colorés devant le nom du fichier. Valeurs possibles :
    "decl"  → pictogramme bleu (déclinaisons)
    "conj"  → pictogramme rouge (conjugaisons)
    "voc"   → pictogramme vert (vocabulaire)
    "exp"   → pictogramme violet, guillemets (expression française)
    "vers"  → pictogramme or → drapeau (version, latin vers français)
    "theme" → pictogramme drapeau → or (thème, français vers latin)
    "mix"   → pictogramme multicolore (varié)

  Pour ajouter un nouvel exercice : copiez-collez une ligne existante
  dans "fichiers" et changez son contenu (nom, url, pictos).
  Pas besoin de toucher à index.html.

  Pour ajouter un nouveau dossier (ex: "Devoirs maison 2026"),
  copiez-collez un bloc {...} entier ci-dessous.
*/

const STRUCTURE = [
  {
    nom: "Exercices",
    fichiers: [
      { nom: "Exercice 1 — Identification des modèles de déclinaison et de conjugaison (chronométré)", url: "exercice-1-identification-modeles.html", pictos: ["decl","conj"] },
      { nom: "Identifier les modèles — déclinaisons et conjugaisons", url: "identifier-modeles-decl-conjOK.html", pictos: ["decl","conj"] }
    ]
  }
];
