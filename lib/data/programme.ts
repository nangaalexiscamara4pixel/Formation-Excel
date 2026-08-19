export type LessonTable = {
  headers: string[];
  rows: string[][];
};

export type Formula = {
  name: string;
  syntax: string;
  description: string;
  example?: LessonTable;
  result: string;
  note?: string;
};

export type Lesson = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: LessonTable;
  formulas?: Formula[];
  note?: string;
};

export type ModuleContent = {
  number: number;
  title: string;
  lessons: Lesson[];
  exercice: string;
};

export type Download = {
  label: string;
  href: string;
  hint: string;
};

export type Niveau = {
  id: 1 | 2 | 3;
  slug: string;
  title: string;
  subtitle: string;
  objectif: string;
  modules: ModuleContent[];
  downloads: Download[];
};

export const niveaux: Niveau[] = [
  {
    id: 1,
    slug: "niveau-1",
    title: "Niveau 1 — Débutant",
    subtitle: "Les fondamentaux",
    objectif:
      "Être totalement autonome pour créer, mettre en forme et calculer dans un tableau Excel simple, sans aucune base préalable.",
    downloads: [
      {
        label: "Classeur pratique — Niveau 1",
        href: "/downloads/classeur-pratique-niveau-1.xlsx",
        hint: "Exercices guidés et cas pratiques du niveau débutant",
      },
      {
        label: "Fiche d'évaluation — Niveau 1",
        href: "/downloads/fiche-evaluation-niveau-1.xlsx",
        hint: "Évaluation notée de fin de niveau (seuil 70%)",
      },
    ],
    modules: [
      {
        number: 1,
        title: "Prise en main d'Excel",
        exercice:
          "Créer un classeur, renommer des feuilles, saisir un tableau simple de dépenses personnelles.",
        lessons: [
          {
            title: "1.1 — Comprendre l'interface Excel",
            paragraphs: [
              "Un classeur Excel est comme un classeur physique : il contient plusieurs feuilles (comme des pages), et chaque feuille est une grille composée de cellules. Chaque cellule est identifiée par une lettre (la colonne) et un chiffre (la ligne) — par exemple la cellule « B3 » se trouve à l'intersection de la colonne B et de la ligne 3.",
            ],
            bullets: [
              "Le Ruban (en haut) regroupe les commandes par onglets : Accueil, Insertion, Mise en page, Formules, Données, Révision, Affichage.",
              "La barre de formule (juste sous le ruban) affiche le contenu réel de la cellule sélectionnée, même si elle affiche un résultat calculé.",
              "Les onglets de feuilles (en bas) permettent de naviguer entre plusieurs feuilles d'un même classeur.",
              "La cellule active est encadrée en surbrillance ; on y saisit du texte, des nombres ou des formules.",
            ],
          },
          {
            title: "1.2 — Navigation efficace au clavier",
            paragraphs: [
              "Se déplacer à la souris est lent. Voici les raccourcis indispensables à connaître en priorité :",
            ],
            table: {
              headers: ["Raccourci", "Action"],
              rows: [
                ["Flèches directionnelles", "Se déplacer d'une cellule à la fois"],
                ["Tab / Entrée", "Valider et passer à la cellule suivante (droite / bas)"],
                ["Ctrl + Flèche", "Sauter jusqu'à la fin d'une zone de données remplie"],
                ["Ctrl + Origine (Home)", "Revenir à la cellule A1"],
                ["Ctrl + Fin (End)", "Aller à la dernière cellule utilisée de la feuille"],
                ["F2", "Modifier le contenu de la cellule sélectionnée"],
              ],
            },
          },
          {
            title: "1.3 — Enregistrement et formats de fichiers",
            bullets: [
              ".xlsx — le format Excel moderne (depuis 2007), conserve toutes les mises en forme, formules et graphiques.",
              ".xls — l'ancien format (avant 2007), à éviter sauf compatibilité avec de très vieux logiciels.",
              ".csv — un format texte brut où les valeurs sont séparées par des virgules ou point-virgules ; aucune mise en forme n'est conservée, mais c'est le format universel pour échanger des données entre logiciels.",
            ],
            note: "Ctrl + S pour enregistrer, F12 pour « Enregistrer sous » et choisir un autre format ou emplacement.",
          },
        ],
      },
      {
        number: 2,
        title: "Saisie et mise en forme",
        exercice:
          "Mettre en forme un tableau de suivi de stock avec styles et formats professionnels.",
        lessons: [
          {
            title: "2.1 — Les types de données",
            paragraphs: [
              "Excel reconnaît automatiquement le type de donnée saisi et l'aligne différemment par défaut : le texte s'aligne à gauche, les nombres et dates s'alignent à droite.",
            ],
            table: {
              headers: ["Type", "Exemple de saisie", "Alignement par défaut"],
              rows: [
                ["Texte", "Jean Dupont", "Gauche"],
                ["Nombre", "1250", "Droite"],
                ["Date", "15/08/2026", "Droite"],
                ["Pourcentage", "12%", "Droite"],
                ["Devise", "1 250,00 €", "Droite"],
              ],
            },
          },
          {
            title: "2.2 — La poignée de recopie (séries automatiques)",
            paragraphs: [
              "En cliquant sur le petit carré en bas à droite d'une cellule (la poignée de recopie) et en glissant, Excel peut prolonger automatiquement une série logique.",
            ],
            table: {
              headers: ["Cellule de départ", "Résultat après recopie sur 5 cellules"],
              rows: [
                ["Janvier", "Janvier, Février, Mars, Avril, Mai"],
                ["Lundi", "Lundi, Mardi, Mercredi, Jeudi, Vendredi"],
                ["1", "1, 2, 3, 4, 5"],
                ["01/09/2026", "01/09/2026, 02/09/2026, 03/09/2026, 04/09/2026, 05/09/2026"],
              ],
            },
          },
          {
            title: "2.3 — Mise en forme des cellules",
            bullets: [
              "Police, taille, gras, italique, couleur du texte (onglet Accueil > groupe Police).",
              "Couleur de remplissage et bordures des cellules (utile pour délimiter visuellement un tableau).",
              "Format des nombres : Standard, Nombre, Monétaire, Pourcentage, Date — accessible via Accueil > groupe Nombre, ou Ctrl+1 pour toutes les options.",
            ],
            table: {
              headers: ["Catégorie", "Montant (brut)", "Montant (mis en forme)"],
              rows: [
                ["Loyer", "750", "750,00 €"],
                ["Courses", "320.5", "320,50 €"],
                ["Transport", "85", "85,00 €"],
              ],
            },
          },
        ],
      },
      {
        number: 3,
        title: "Formules et opérations de base",
        exercice: "Construire un budget mensuel avec totaux automatiques par catégorie.",
        lessons: [
          {
            title: "3.1 — Références relatives et absolues",
            paragraphs: [
              "C'est LA notion charnière du niveau débutant : sans elle, aucune formule ne se recopie correctement.",
            ],
            bullets: [
              "Référence relative (ex. B2) : change automatiquement quand on recopie la formule vers d'autres cellules.",
              "Référence absolue (ex. $B$2) : reste fixe, peu importe où l'on recopie la formule. Le symbole $ « verrouille » la ligne et/ou la colonne.",
            ],
            formulas: [
              {
                name: "Calcul de TVA avec taux fixe",
                syntax: "=B3*$B$1",
                description:
                  "Calcul de TVA à 20% sur plusieurs produits, avec un taux de TVA fixe en B1.",
                example: {
                  headers: ["", "A", "B"],
                  rows: [
                    ["1", "Taux de TVA", "20%"],
                    ["2", "Produit", "Prix HT"],
                    ["3", "Chaise", "50"],
                    ["4", "Table", "200"],
                  ],
                },
                result: "C3 = 10 (50 × 20%) ; recopiée en C4, la formule devient =B4*$B$1 → C4 = 40 (200 × 20%)",
                note: "Le $ devant B1 empêche la référence de bouger pendant la recopie, alors que B3 devient B4 automatiquement.",
              },
            ],
          },
          {
            title: "3.2 — Les fonctions de calcul essentielles",
            paragraphs: [
              "Ce sont les premières fonctions à enseigner, car elles sont utilisées dans quasiment tous les tableaux.",
            ],
            formulas: [
              {
                name: "SOMME",
                syntax: "=SOMME(plage)",
                description: "Additionne toutes les valeurs numériques d'une plage de cellules.",
                example: {
                  headers: ["Dépense", "Montant"],
                  rows: [
                    ["Loyer", "750"],
                    ["Courses", "320"],
                    ["Transport", "85"],
                    ["Total", "=SOMME(B2:B4)"],
                  ],
                },
                result: "1155 (750 + 320 + 85)",
                note: "La plage B2:B4 signifie « de la cellule B2 à la cellule B4 incluses ».",
              },
              {
                name: "MOYENNE",
                syntax: "=MOYENNE(plage)",
                description:
                  "Calcule la moyenne arithmétique des valeurs d'une plage (somme divisée par leur nombre).",
                example: {
                  headers: ["Élève", "Note"],
                  rows: [
                    ["Amina", "14"],
                    ["Karim", "16"],
                    ["Sofia", "12"],
                    ["Moyenne", "=MOYENNE(B2:B4)"],
                  ],
                },
                result: "14 ((14+16+12)/3)",
              },
              {
                name: "MIN et MAX",
                syntax: "=MIN(plage) / =MAX(plage)",
                description:
                  "MIN renvoie la plus petite valeur d'une plage, MAX renvoie la plus grande.",
                example: {
                  headers: ["Produit", "Prix"],
                  rows: [
                    ["Produit A", "45"],
                    ["Produit B", "12"],
                    ["Produit C", "78"],
                    ["Minimum", "=MIN(B2:B4)"],
                    ["Maximum", "=MAX(B2:B4)"],
                  ],
                },
                result: "Minimum = 12, Maximum = 78",
              },
              {
                name: "NB et NBVAL",
                syntax: "=NB(plage) / =NBVAL(plage)",
                description:
                  "NB compte uniquement les cellules contenant une valeur numérique. NBVAL compte toutes les cellules non vides, y compris le texte.",
                example: {
                  headers: ["Nom", "Note"],
                  rows: [
                    ["Amina", "14"],
                    ["Karim", "(absent)"],
                    ["Sofia", "12"],
                    ["=NB(B2:B4)", "=NBVAL(B2:B4)"],
                  ],
                },
                result: "NB = 2 (seulement 14 et 12), NBVAL = 3 (14, « absent » et 12 sont tous non vides)",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        title: "Mise en page et impression",
        exercice: "Préparer un tableau de facture prêt à imprimer sur une seule page A4.",
        lessons: [
          {
            title: "4.1 — Préparer un tableau pour l'impression",
            bullets: [
              "Zone d'impression : sélectionner la plage à imprimer puis Mise en page > Zone d'impression > Définir.",
              "En-têtes et pieds de page : Insertion > En-tête et pied de page, pour ajouter numéro de page, date, titre du document.",
              "Orientation : Portrait (vertical) pour un tableau étroit, Paysage (horizontal) pour un tableau large avec beaucoup de colonnes.",
              "Ajuster à une page : Mise en page > Mise à l'échelle > Ajuster à 1 page en largeur — évite qu'un tableau soit coupé sur plusieurs feuilles.",
              "Aperçu avant impression : Ctrl + P pour vérifier le rendu avant d'imprimer réellement.",
            ],
            note: "Un tableau de facture de 10 colonnes tiendra mieux en orientation Paysage avec l'option « Ajuster à 1 page » activée.",
          },
        ],
      },
      {
        number: 5,
        title: "Gestion de données simples",
        exercice: "Trier et filtrer une base de 200 clients pour isoler des segments précis.",
        lessons: [
          {
            title: "5.1 — Trier des données",
            paragraphs: [
              "Le tri réorganise les lignes selon une ou plusieurs colonnes. Données > Trier, ou clic droit sur l'en-tête de colonne > Trier.",
            ],
            table: {
              headers: ["Client", "Ville", "Montant"],
              rows: [
                ["Le Duff", "Lyon", "320"],
                ["Amara", "Paris", "150"],
                ["Kone", "Lyon", "480"],
              ],
            },
            note: "Après un tri multicritère (Ville croissant, puis Montant décroissant) : Lyon/Kone/480, Lyon/Le Duff/320, Paris/Amara/150.",
          },
          {
            title: "5.2 — Filtrer des données",
            paragraphs: [
              "Le filtre automatique (Données > Filtrer, ou Ctrl+Maj+L) ajoute des flèches déroulantes sur chaque en-tête de colonne, permettant d'afficher uniquement les lignes qui répondent à un critère (ex. afficher seulement les clients de Lyon).",
            ],
          },
          {
            title: "5.3 — Figer les volets",
            paragraphs: [
              "Quand un tableau est long, les en-têtes disparaissent au défilement. Affichage > Figer les volets > Figer la ligne d'en-tête permet de garder les titres de colonnes toujours visibles.",
            ],
          },
          {
            title: "5.4 — Les tableaux Excel (Ctrl+T)",
            bullets: [
              "Mise en forme automatique avec bandes de couleur alternées.",
              "Filtres automatiques déjà activés sur chaque colonne.",
              "Les formules et la mise en forme s'étendent automatiquement quand on ajoute une nouvelle ligne en bas du tableau.",
              "Possibilité de nommer des colonnes et d'y faire référence par leur nom dans les formules (ex. =Tableau1[Montant]).",
            ],
          },
        ],
      },
      {
        number: 6,
        title: "Évaluation Niveau 1",
        exercice:
          "Cas pratique : créer de A à Z un tableau de gestion de dépenses avec mise en forme et totaux.",
        lessons: [
          {
            title: "Évaluation de fin de niveau",
            paragraphs: [
              "Ce module ne comporte pas de nouvelle notion : il s'agit d'une évaluation qui mobilise l'ensemble des acquis des modules 1 à 5.",
            ],
            bullets: [
              "QCM de 20 questions couvrant l'interface, la mise en forme, les formules SOMME/MOYENNE/MIN/MAX/NB/NBVAL et le tri/filtre.",
              "Cas pratique noté : à partir d'un jeu de données brut de dépenses personnelles fourni, l'apprenant doit créer un tableau mis en forme, calculer les totaux et moyennes, trier les données par catégorie, et préparer le document pour impression.",
            ],
            note: "Seuil de réussite recommandé : 70% pour valider le passage au Niveau 2.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "niveau-2",
    title: "Niveau 2 — Intermédiaire",
    subtitle: "Autonomie professionnelle",
    objectif:
      "Traiter, croiser et présenter des données comme un(e) professionnel(le) — c'est le niveau attendu dans la majorité des postes de bureau.",
    downloads: [
      {
        label: "Classeur pratique — Niveau 2",
        href: "/downloads/classeur-pratique-niveau-2.xlsx",
        hint: "Exercices guidés et cas pratiques du niveau intermédiaire",
      },
      {
        label: "Fiche d'évaluation — Niveau 2",
        href: "/downloads/fiche-evaluation-niveau-2.xlsx",
        hint: "Évaluation notée de fin de niveau (seuil 70%)",
      },
    ],
    modules: [
      {
        number: 7,
        title: "Fonctions logiques",
        exercice:
          "Créer un système de notation automatique (Admis/Recalé/Rattrapage) selon des seuils.",
        lessons: [
          {
            title: "Fonctions logiques",
            paragraphs: [
              "Les fonctions logiques permettent à Excel de « prendre des décisions » selon des conditions. Ce sont les fonctions les plus utilisées en entreprise après les calculs de base.",
            ],
            formulas: [
              {
                name: "SI",
                syntax: "=SI(test_logique ; valeur_si_vrai ; valeur_si_faux)",
                description:
                  "Teste une condition et renvoie une valeur si elle est vraie, une autre si elle est fausse.",
                example: {
                  headers: ["Note", "Résultat"],
                  rows: [["12", '=SI(A2>=10;"Admis";"Recalé")']],
                },
                result: '"Admis" (car 12 est supérieur ou égal à 10)',
              },
              {
                name: "SI imbriqués",
                syntax: "=SI(cond1;val1;SI(cond2;val2;SI(cond3;val3;val_finale)))",
                description:
                  "On emboîte plusieurs SI les uns dans les autres pour tester plusieurs conditions successives, du cas le plus précis au cas par défaut.",
                example: {
                  headers: ["Note", "Mention"],
                  rows: [
                    [
                      "17",
                      '=SI(A2>=16;"Félicitations";SI(A2>=14;"Bien";SI(A2>=12;"Assez Bien";SI(A2>=10;"Passable";"Insuffisant"))))',
                    ],
                  ],
                },
                result: '"Félicitations" (car 17 ≥ 16)',
                note: "On teste toujours de la condition la plus « haute » vers la plus « basse », sinon la première condition vraie rencontrée coupe court aux suivantes.",
              },
              {
                name: "ET",
                syntax: "=ET(condition1;condition2;...)",
                description:
                  "Renvoie VRAI seulement si TOUTES les conditions sont vraies en même temps.",
                example: {
                  headers: ["Ancienneté (ans)", "Note (/20)", "Prime accordée"],
                  rows: [["3", "15", '=SI(ET(A2>=2;B2>=14);"Oui";"Non")']],
                },
                result: '"Oui" (3 ≥ 2 ET 15 ≥ 14 : les deux conditions sont vraies)',
              },
              {
                name: "OU",
                syntax: "=OU(condition1;condition2;...)",
                description:
                  "Renvoie VRAI si au moins une des conditions est vraie (contrairement à ET qui exige que toutes le soient).",
                example: {
                  headers: ["Ancienneté (ans)", "Note (/20)", "Éligible formation"],
                  rows: [["6", "10", '=SI(OU(A2>=5;B2>=16);"Oui";"Non")']],
                },
                result: '"Oui" (l\'ancienneté seule suffit : 6 ≥ 5, même si la note est faible)',
              },
              {
                name: "SI.CONDITIONS",
                syntax: "=SI.CONDITIONS(cond1;val1;cond2;val2;...;VRAI;val_finale)",
                description:
                  "Alternative plus lisible aux SI imbriqués : on liste des paires (condition ; résultat) à la suite, en terminant souvent par VRAI pour couvrir tous les cas restants.",
                example: {
                  headers: ["Chiffre d'affaires (€)", "Catégorie"],
                  rows: [
                    [
                      "35000",
                      '=SI.CONDITIONS(A2<15000;"Bronze";A2<30000;"Argent";A2<50000;"Or";VRAI;"Platine")',
                    ],
                  ],
                },
                result: '"Or" (35 000 est entre 30 000 et 50 000)',
                note: "Disponible depuis Excel 2019 / Microsoft 365. Elle remplace avantageusement des SI imbriqués trop longs.",
              },
              {
                name: "SIERREUR",
                syntax: "=SIERREUR(formule ; valeur_si_erreur)",
                description:
                  "Exécute la formule normalement, mais si elle renvoie une erreur (comme #DIV/0!), affiche à la place le message choisi.",
                example: {
                  headers: ["Total points", "Nombre de copies", "Moyenne"],
                  rows: [["0", "0", '=SIERREUR(A2/B2;"Erreur : division par zéro")']],
                },
                result: '"Erreur : division par zéro" (au lieu d\'afficher #DIV/0!)',
              },
              {
                name: "ESTVIDE",
                syntax: "=ESTVIDE(cellule)",
                description:
                  "Renvoie VRAI si la cellule est vide, FAUX sinon. Utile pour vérifier qu'une information obligatoire a bien été saisie.",
                example: {
                  headers: ["Email", "Email fourni ?"],
                  rows: [["(cellule vide)", '=SI(ESTVIDE(A2);"Non";"Oui")']],
                },
                result: '"Non" (la cellule Email est vide)',
              },
            ],
          },
        ],
      },
      {
        number: 8,
        title: "Fonctions de recherche",
        exercice:
          "Construire un catalogue produits avec recherche automatique de prix et disponibilité.",
        lessons: [
          {
            title: "Fonctions de recherche",
            paragraphs: [
              "Ces fonctions permettent d'aller chercher automatiquement une information dans un autre tableau, au lieu de la recopier à la main — la base de tout tableau de bord ou catalogue dynamique.",
            ],
            formulas: [
              {
                name: "RECHERCHEV",
                syntax: "=RECHERCHEV(valeur_cherchée ; plage_tableau ; n°_colonne ; FAUX)",
                description:
                  "Cherche une valeur dans la première colonne d'un tableau, puis renvoie la valeur trouvée sur la même ligne, dans la colonne indiquée. FAUX impose une correspondance exacte.",
                example: {
                  headers: ["Référence", "Produit", "Prix (€)"],
                  rows: [
                    ["REF001", "Ordinateur portable", "650"],
                    ["REF002", "Souris sans fil", "18"],
                  ],
                },
                result: '=RECHERCHEV("REF002";A2:C3;2;FAUX) renvoie "Souris sans fil" ; avec 3 au lieu de 2, on obtiendrait 18',
                note: "La colonne contenant la valeur cherchée doit toujours être la première colonne de la plage.",
              },
              {
                name: "INDEX + EQUIV",
                syntax: "=INDEX(plage_résultat ; EQUIV(valeur_cherchée ; plage_recherche ; 0))",
                description:
                  "EQUIV trouve la position d'une valeur dans une plage, puis INDEX va chercher la valeur à cette position dans une autre plage. Avantage : la colonne de recherche n'a pas besoin d'être la première.",
                example: {
                  headers: ["Référence", "Stock"],
                  rows: [
                    ["REF001", "12"],
                    ["REF002", "55"],
                  ],
                },
                result: '=INDEX(B2:B3;EQUIV("REF002";A2:A3;0)) renvoie 55',
                note: "Le dernier argument 0 dans EQUIV impose une correspondance exacte, comme le FAUX de RECHERCHEV.",
              },
              {
                name: "RECHERCHEH",
                syntax: "=RECHERCHEH(valeur_cherchée ; plage_tableau ; n°_ligne ; FAUX)",
                description:
                  "Équivalent horizontal de RECHERCHEV : cherche dans la première ligne et redescend sur une colonne.",
                example: {
                  headers: ["Indicateur", "T1", "T2", "T3", "T4"],
                  rows: [["Tarif (€)", "620", "640", "650", "665"]],
                },
                result: '=RECHERCHEH("T3";A1:E2;2;FAUX) renvoie 650',
              },
            ],
            bullets: [
              "RECHERCHEX (XLOOKUP) : version moderne qui remplace RECHERCHEV, RECHERCHEH et INDEX/EQUIV — =RECHERCHEX(valeur_cherchée ; plage_recherche ; plage_résultat). Disponible uniquement sur Excel 2021, Microsoft 365 et Excel en ligne.",
              "Références multi-feuilles : =RECHERCHEV(A2;Catalogue!A:D;2;FAUX). Si le nom de la feuille contient un espace, on l'entoure d'apostrophes : =RECHERCHEV(A2;'Ex2a Catalogue'!A:D;2;FAUX).",
            ],
          },
        ],
      },
      {
        number: 9,
        title: "Fonctions texte, date et statistiques",
        exercice:
          "Nettoyer et restructurer une base de données clients brute (noms, dates, doublons).",
        lessons: [
          {
            title: "Fonctions texte",
            paragraphs: [
              "Ces fonctions permettent de nettoyer, reformater et analyser des données brutes — l'étape indispensable avant toute analyse sérieuse.",
            ],
            formulas: [
              {
                name: "GAUCHE",
                syntax: "=GAUCHE(texte ; nombre_de_caractères)",
                description: "Extrait un nombre donné de caractères en partant du début (à gauche) d'un texte.",
                example: { headers: ["Code", "Pays"], rows: [["FRPARIS", "=GAUCHE(A2;2)"]] },
                result: '"FR"',
              },
              {
                name: "DROITE",
                syntax: "=DROITE(texte ; nombre_de_caractères)",
                description:
                  "Extrait un nombre donné de caractères en partant de la fin (à droite), souvent combinée à NBCAR quand la longueur est variable.",
                example: { headers: ["Code", "Ville"], rows: [["FRPARIS", "=DROITE(A2;NBCAR(A2)-2)"]] },
                result: '"PARIS"',
                note: "NBCAR(A2)-2 calcule automatiquement « tout ce qui reste après les 2 premiers caractères », quelle que soit la longueur du mot.",
              },
              {
                name: "STXT",
                syntax: "=STXT(texte ; position_départ ; nombre_de_caractères)",
                description: "Extrait des caractères depuis n'importe quelle position dans le texte.",
                example: {
                  headers: ["Nom complet", "Prénom"],
                  rows: [["DURAND marie", '=STXT(A2;TROUVE(" ";A2)+1;50)']],
                },
                result: '"marie"',
                note: 'TROUVE(" ";A2) repère la position de l\'espace ; on démarre juste après.',
              },
              {
                name: "CONCATENER (ou CONCAT)",
                syntax: "=CONCATENER(texte1 ; texte2 ; ...) ou =texte1&texte2",
                description: "Assemble plusieurs textes (ou cellules) en une seule chaîne.",
                example: {
                  headers: ["Prénom", "Nom", "Nom complet"],
                  rows: [["Marie", "DURAND", '=CONCATENER(A2;" ";B2)']],
                },
                result: '"Marie DURAND"',
              },
              {
                name: "MAJUSCULE / NOMPROPRE",
                syntax: "=MAJUSCULE(texte)  /  =NOMPROPRE(texte)",
                description:
                  "MAJUSCULE met tout le texte en majuscules. NOMPROPRE met en majuscule uniquement la première lettre de chaque mot.",
                example: {
                  headers: ["Texte brut", "MAJUSCULE", "NOMPROPRE"],
                  rows: [["marie durand", "=MAJUSCULE(A2)", "=NOMPROPRE(A2)"]],
                },
                result: 'MAJUSCULE → "MARIE DURAND" · NOMPROPRE → "Marie Durand"',
              },
            ],
          },
          {
            title: "Fonctions date",
            formulas: [
              {
                name: "DATEDIF",
                syntax: '=DATEDIF(date_début ; date_fin ; "Y")',
                description:
                  'Calcule la différence entre deux dates. Le 3e argument précise l\'unité : "Y" années, "M" mois, "D" jours.',
                example: {
                  headers: ["Date de naissance", "Date de référence", "Âge"],
                  rows: [["12/03/1990", "15/09/2026", '=DATEDIF(A2;B2;"Y")']],
                },
                result: "36 ans",
                note: "DATEDIF fonctionne très bien mais n'apparaît pas dans l'aide officielle des formules Excel.",
              },
              {
                name: "ANNEE / MOIS / JOUR",
                syntax: "=ANNEE(date)  =MOIS(date)  =JOUR(date)",
                description:
                  "Extraient respectivement l'année, le mois et le jour d'une date. Pratiques pour regrouper ou filtrer par période.",
                example: {
                  headers: ["Date", "Année", "Mois", "Jour"],
                  rows: [["14/02/2026", "=ANNEE(A2)", "=MOIS(A2)", "=JOUR(A2)"]],
                },
                result: "Année = 2026, Mois = 2, Jour = 14",
              },
            ],
          },
          {
            title: "Fonctions statistiques conditionnelles",
            formulas: [
              {
                name: "NB.SI",
                syntax: "=NB.SI(plage ; critère)",
                description:
                  "Compte le nombre de cellules d'une plage qui respectent un critère donné (contrairement à NB, qui compte toutes les valeurs numériques sans condition).",
                example: { headers: ["Région"], rows: [["Paris"], ["Lyon"], ["Paris"]] },
                result: '=NB.SI(A2:A4;"Paris") renvoie 2',
              },
              {
                name: "SOMME.SI",
                syntax: "=SOMME.SI(plage_critère ; critère ; plage_somme)",
                description:
                  "Additionne uniquement les valeurs d'une plage qui correspondent à un critère (contrairement à SOMME, qui additionne tout sans condition).",
                example: {
                  headers: ["Région", "Montant (€)"],
                  rows: [
                    ["Paris", "1200"],
                    ["Lyon", "950"],
                    ["Paris", "1800"],
                  ],
                },
                result: '=SOMME.SI(A2:A4;"Paris";B2:B4) renvoie 3000',
              },
              {
                name: "MOYENNE.SI",
                syntax: "=MOYENNE.SI(plage_critère ; critère ; plage_moyenne)",
                description: "Calcule la moyenne des valeurs d'une plage qui correspondent à un critère donné.",
                example: {
                  headers: ["Région", "Montant (€)"],
                  rows: [
                    ["Paris", "1200"],
                    ["Lyon", "950"],
                    ["Paris", "1800"],
                  ],
                },
                result: '=MOYENNE.SI(A2:A4;"Paris";B2:B4) renvoie 1500',
              },
            ],
          },
        ],
      },
      {
        number: 10,
        title: "Mise en forme conditionnelle avancée",
        exercice:
          "Créer un tableau de bord visuel d'indicateurs de performance (KPI) avec code couleur automatique.",
        lessons: [
          {
            title: "Mise en forme conditionnelle avancée",
            paragraphs: [
              "Contrairement aux modules précédents, ici on ne tape pas une formule dans une cellule : on définit une règle qui change automatiquement l'apparence des cellules selon leur contenu. Accessible via Accueil > Mise en forme conditionnelle.",
            ],
            bullets: [
              "Échelle de couleurs : colore chaque cellule d'un dégradé (rouge → jaune → vert) selon sa valeur relative — utile pour repérer d'un coup d'œil les meilleures et moins bonnes performances d'un tableau de KPI.",
              "Barres de données : affiche une barre colorée dans la cellule, proportionnelle à la valeur, comme un mini-graphique intégré.",
              "Jeux d'icônes : ajoute une icône (flèche, feu tricolore, étoile...) devant la valeur selon des seuils définis.",
            ],
            formulas: [
              {
                name: "Règle personnalisée par formule",
                syntax: "=$B2<$C2",
                description:
                  "La plus puissante des options : on écrit sa propre formule logique (qui doit renvoyer VRAI ou FAUX), appliquée à chaque cellule où elle est vraie.",
                result:
                  "Appliquée à la plage A2:C10, cette règle met en rouge toute la ligne dès que la valeur de la colonne B (Stock) est inférieure à celle de la colonne C (Seuil d'alerte).",
                note: "Le symbole $ devant B et C uniquement (pas devant le numéro de ligne) permet à la règle de s'adapter à chaque ligne tout en gardant les mêmes colonnes de référence.",
              },
            ],
          },
        ],
      },
      {
        number: 11,
        title: "Tableaux croisés dynamiques (niveau 1)",
        exercice:
          "Analyser des ventes annuelles par région et par produit via un TCD interactif.",
        lessons: [
          {
            title: "Tableaux croisés dynamiques (TCD)",
            paragraphs: [
              "Un TCD n'est pas une formule : c'est un outil interactif qui résume automatiquement de grandes quantités de données sans écrire une seule formule. On sélectionne les données puis Insertion > Tableau croisé dynamique.",
            ],
            bullets: [
              "Lignes / Colonnes : les champs qu'on y place deviennent les catégories du résumé (ex. Région en lignes, Produit en colonnes).",
              "Valeurs : le champ numérique à résumer (ex. Somme de Montant), avec le type de calcul au choix (somme, moyenne, nombre...).",
              "Regroupements : un clic droit sur une date dans un TCD permet de la regrouper automatiquement par mois, trimestre ou année.",
              "Segments (slicers) : Analyse de TCD > Insérer un segment — des boutons de filtre visuels et interactifs, très appréciés en présentation.",
            ],
            note: "L'avantage principal du TCD par rapport aux formules SOMME.SI.ENS ou NB.SI.ENS : on obtient le même résultat en quelques clics, sans écrire de formule, et on peut réorganiser le résumé en glissant simplement les champs.",
          },
        ],
      },
      {
        number: 12,
        title: "Graphiques et visualisation",
        exercice: "Construire un rapport visuel one-page pour une présentation de direction.",
        lessons: [
          {
            title: "Graphiques et visualisation",
            bullets: [
              "Graphique simple (courbes, barres, secteurs...) : Insertion > Graphiques recommandés, pour visualiser l'évolution ou la répartition d'une seule série de données.",
              "Graphique combiné : associe deux types de graphique sur un même visuel (ex. barres pour le CA et courbe pour un taux de croissance), avec un axe secondaire.",
              "Graphique croisé dynamique : identique à un graphique classique, mais connecté à un TCD — il se met à jour automatiquement et hérite de ses filtres et segments.",
              "Mise en forme professionnelle : titres clairs, axes légendés, couleurs sobres et cohérentes, suppression des éléments inutiles pour un rendu prêt à présenter.",
            ],
            note: "Le bon réflexe pour choisir un graphique : une courbe pour une évolution dans le temps, des barres pour comparer des catégories, un secteur pour une répartition en pourcentage d'un tout.",
          },
        ],
      },
      {
        number: 13,
        title: "Évaluation Niveau 2",
        exercice:
          "Cas pratique : rapport de ventes trimestriel complet avec TCD et graphique dynamique.",
        lessons: [
          {
            title: "Évaluation de fin de niveau",
            paragraphs: [
              "Étude de cas intégrant recherche, logique et tableaux croisés dynamiques, mobilisant l'ensemble des acquis des modules 7 à 12.",
            ],
            note: "Seuil de réussite recommandé : 70% pour valider le passage au Niveau 3.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "niveau-3",
    title: "Niveau 3 — Avancé",
    subtitle: "Analyse approfondie",
    objectif:
      "Maîtriser les tableaux croisés dynamiques avancés et les fonctions matricielles pour produire des analyses fiables sur de gros volumes de données.",
    downloads: [
      {
        label: "Classeur pratique — Niveau 3",
        href: "/downloads/classeur-pratique-niveau-3.xlsx",
        hint: "Exercices guidés et cas pratiques du niveau avancé",
      },
      {
        label: "Fiche d'évaluation — Niveau 3",
        href: "/downloads/fiche-evaluation-niveau-3.xlsx",
        hint: "Évaluation finale notée (seuil 70%)",
      },
    ],
    modules: [
      {
        number: 14,
        title: "TCD et graphiques avancés",
        exercice:
          "Construire un tableau de bord commercial multi-critères avec segments liés.",
        lessons: [
          {
            title: "Champ calculé",
            paragraphs: [
              "Un champ calculé ajoute une nouvelle colonne de calcul directement dans le TCD, à partir d'autres champs déjà présents, sans toucher aux données sources.",
            ],
            formulas: [
              {
                name: "Champ calculé",
                syntax: "Analyse de TCD > Champs, éléments et ensembles > Champ calculé → Marge = CA - Coût",
                description: "Se comporte ensuite comme n'importe quel autre champ : il peut être sommé, moyenné, filtré.",
                example: {
                  headers: ["Vendeur", "CA (€)", "Coût (€)", "Marge (champ calculé)"],
                  rows: [["Nadia B.", "42 000", "26 000", "= CA - Coût"]],
                },
                result: "16 000 € (42 000 − 26 000), calculé automatiquement pour chaque ligne et sous-total du TCD",
                note: "Le champ calculé est une formule appliquée à l'échelle du TCD entier ; il se recalcule tout seul si les données sources changent.",
              },
            ],
          },
          {
            title: "Élément calculé",
            paragraphs: [
              "Alors que le champ calculé crée une nouvelle colonne, l'élément calculé crée une nouvelle valeur à l'intérieur d'un champ existant, en combinant d'autres valeurs de ce même champ.",
            ],
            formulas: [
              {
                name: "Élément calculé",
                syntax: 'Analyse de TCD > Champs, éléments et ensembles > Élément calculé → "Zone Sud" = Sud + Est',
                description: "Exemple typique : regrouper deux régions en une zone commerciale, sans modifier les données sources.",
                example: {
                  headers: ["Région", "CA (€)"],
                  rows: [
                    ["Sud", "18 000"],
                    ["Est", "12 000"],
                    ["Zone Sud (élément calculé)", "= Sud + Est"],
                  ],
                },
                result: "30 000 € (18 000 + 12 000), affiché comme une ligne supplémentaire dans le TCD",
              },
            ],
          },
          {
            title: "Regroupement par dates et par tranches",
            paragraphs: [
              "Plutôt que d'afficher chaque date individuellement, on regroupe automatiquement les dates par période : clic droit sur une date du TCD > Grouper > cocher Mois (ou Trimestre, Année).",
              "Le même principe s'applique aux nombres : au lieu d'afficher chaque montant individuellement, on les regroupe en tranches définies par des bornes (clic droit sur une valeur > Grouper).",
            ],
            table: {
              headers: ["Avant regroupement", "Après regroupement par mois"],
              rows: [["01/01/2026, 02/01/2026, ... (30 lignes)", "Janvier, Février, Mars (3 lignes)"]],
            },
            note: "On peut cocher plusieurs niveaux à la fois (Mois ET Année) pour garder une hiérarchie dans le rapport.",
          },
          {
            title: "Mise en forme de rapport & TCD multi-sources",
            paragraphs: [
              "La mise en forme de rapport regroupe plusieurs réglages pour obtenir un rendu professionnel : styles de TCD (couleurs prédéfinies), disposition en plan ou tabulaire, affichage des sous-totaux.",
              "Un TCD multi-sources combine plusieurs tableaux liés par un champ commun (par exemple une table Ventes et une table Clients reliées par le nom du Vendeur), via Données > Relations ou Power Pivot.",
            ],
            note: "Alternative plus simple sans relation formelle : ajouter une colonne RECHERCHEV multi-feuilles dans la table Ventes pour ramener l'information de la table Clients avant de construire un TCD classique.",
          },
        ],
      },
      {
        number: 15,
        title: "Fonctions avancées et matricielles",
        exercice:
          "Automatiser un tableau de reporting qui se met à jour seul selon des critères multiples.",
        lessons: [
          {
            title: "Fonctions multicritères",
            paragraphs: [
              "Ces formules gèrent plusieurs critères à la fois, contrairement à NB.SI/SOMME.SI/MOYENNE.SI (Niveau 2) qui n'en gèrent qu'un seul.",
            ],
            formulas: [
              {
                name: "SOMME.SI.ENS",
                syntax: "=SOMME.SI.ENS(plage_somme ; plage_critère1 ; critère1 ; plage_critère2 ; critère2 ; ...)",
                description:
                  "Additionne les valeurs qui respectent plusieurs critères. La plage à additionner se place en premier (contrairement à SOMME.SI).",
                example: {
                  headers: ["Région", "Produit", "Montant (€)"],
                  rows: [
                    ["Nord", "Produit A", "400"],
                    ["Sud", "Produit A", "600"],
                    ["Nord", "Produit A", "850"],
                  ],
                },
                result: '=SOMME.SI.ENS(C2:C4;A2:A4;"Nord";B2:B4;"Produit A") renvoie 1250 (400+850)',
              },
              {
                name: "NB.SI.ENS",
                syntax: "=NB.SI.ENS(plage_critère1 ; critère1 ; plage_critère2 ; critère2 ; ...)",
                description: "Compte les cellules qui respectent plusieurs critères en même temps.",
                example: {
                  headers: ["Région", "Produit"],
                  rows: [
                    ["Nord", "Produit A"],
                    ["Sud", "Produit A"],
                    ["Nord", "Produit A"],
                  ],
                },
                result: '=NB.SI.ENS(A2:A4;"Nord";B2:B4;"Produit A") renvoie 2',
              },
              {
                name: "INDEX/EQUIV multicritère (clé concaténée)",
                syntax:
                  '1) Clé : =Région&"|"&Produit&"|"&Trimestre   2) =INDEX(plage_résultat;EQUIV(clé_recherchée;plage_clé;0))',
                description:
                  "Pour chercher sur plusieurs critères à la fois sans formule matricielle complexe, on crée une colonne « Clé » qui concatène les critères, puis on cherche sur cette clé unique.",
                example: {
                  headers: ["Région", "Produit", "Trimestre", "Montant", "Clé"],
                  rows: [["Sud", "Produit B", "T2", "671", '=Sud&"|"&Produit B&"|"&T2']],
                },
                result: 'Clé = "Sud|Produit B|T2" ; EQUIV la retrouve et INDEX renvoie 671',
                note: "Cette méthode évite d'avoir à saisir une formule matricielle avec Ctrl+Maj+Entrée : elle fonctionne comme une formule normale, plus simple à maintenir.",
              },
            ],
          },
          {
            title: "Fonctions matricielles dynamiques",
            paragraphs: [
              "Ces quatre fonctions sont apparues avec Excel 365 et Excel 2021 : elles renvoient plusieurs résultats à la fois, qui « débordent » automatiquement sur les cellules voisines.",
            ],
            formulas: [
              {
                name: "UNIQUE",
                syntax: "=UNIQUE(plage)",
                description: "Extrait automatiquement la liste des valeurs distinctes d'une plage, sans TCD ni filtre.",
                example: {
                  headers: ["Produits vendus (avec doublons)"],
                  rows: [["Produit A"], ["Produit B"], ["Produit A"], ["Produit C"], ["Produit B"]],
                },
                result: '=UNIQUE(A2:A6) renvoie "Produit A", "Produit B", "Produit C"',
              },
              {
                name: "TRIER",
                syntax: "=TRIER(plage ; [n°_colonne] ; [ordre])",
                description: "Trie automatiquement une plage, sans passer par le bouton Trier du ruban.",
                example: {
                  headers: ["Produits (désordonnés)"],
                  rows: [["Produit C"], ["Produit A"], ["Produit B"]],
                },
                result: '=TRIER(A2:A4) renvoie "Produit A", "Produit B", "Produit C"',
              },
              {
                name: "FILTRE",
                syntax: "=FILTRE(plage ; condition)",
                description: "Extrait uniquement les lignes qui respectent une condition, directement utilisable dans une formule.",
                example: {
                  headers: ["Produit"],
                  rows: [["Produit A"], ["Produit B"], ["Produit A"]],
                },
                result: '=FILTRE(A2:A4;A2:A4="Produit A") renvoie uniquement les deux "Produit A"',
              },
              {
                name: "SEQUENCE",
                syntax: "=SEQUENCE(lignes ; [colonnes] ; [début] ; [pas])",
                description:
                  "Génère automatiquement une série de nombres, sans les taper un par un ni utiliser la poignée de recopie.",
                result: "=SEQUENCE(12) renvoie automatiquement 1, 2, 3 … 12 sur 12 cellules",
              },
            ],
            note: "Ces 4 fonctions nécessitent Excel 365, Excel 2021 ou plus récent. Sur une version antérieure, mieux vaut s'en tenir aux techniques classiques (TCD, INDEX/EQUIV, tri manuel).",
          },
        ],
      },
      {
        number: 16,
        title: "Évaluation finale + Certification",
        exercice:
          "Évaluation finale : QCM et étude de cas transversale mobilisant les niveaux 1, 2 et 3, suivie de la délivrance du certificat.",
        lessons: [
          {
            title: "Modalités d'évaluation et certification",
            bullets: [
              "Chaque niveau comprend un QCM de validation des connaissances avec un seuil de réussite de 70%.",
              "Un certificat global est délivré après validation des 3 niveaux, à valoriser directement sur un CV ou un profil LinkedIn.",
            ],
            note: "Ce module clôture le parcours complet : Niveau 1 (6 modules) → Niveau 2 (7 modules) → Niveau 3 (3 modules), soit 16 modules au total.",
          },
        ],
      },
    ],
  },
];

export const recapitulatif = [
  { niveau: "1 — Débutant", modules: 6, competence: "Créer et calculer un tableau simple" },
  { niveau: "2 — Intermédiaire", modules: 7, competence: "Analyser des données avec TCD et recherches" },
  { niveau: "3 — Avancé", modules: 3, competence: "TCD avancés et fonctions matricielles" },
];

export const programmeDownload = {
  label: "Programme complet de la formation",
  href: "/downloads/programme-formation-excel.docx",
  hint: "Sommaire général, pédagogie et modalités d'évaluation (.docx)",
};
