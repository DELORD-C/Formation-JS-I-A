# HTML / CSS

## Les balises HTML

### Titres & paragraphes

Les titre en HTML sont représentés par les balises `h1`, `h2`, `h3`, `h4`, `h5` et `h6`.
Sur chaque page une et une seule balise `h1` doit être présente, celle-ci définiera le titre principal de votre page. Les autres titres doivent respécter leur hierarchie.

```html
<h1>Titre</h1>
<h2>Titre</h2>
```

#### Paragraphe
```html
<p>Texte</p>
```

### Mise en forme de texte

#### Gras
```html
<b>Texte</b>
<strong>Texte</strong>
```
#### Italic
```html
<i>Texte</i>
```
#### Souligné
```html
<u>Texte</u>
```
#### Préformaté
```html
<pre>Texte</pre>
```

### Liens

#### Lien vers une page
```html
<a href="page.html">Texte du lien</a>
```

#### Lien vers un fichier
```html
<a href="images/image.jpg">Texte du lien</a>
```

#### Lien de messagerie
```html
<a href="mailto: exemple@gmail.com">Texte du lien</a>
```
> Il est possible d'ajouter un sujet et même un corps de message sur un lien de messagerie en ajoutant des paramètres après le mail :
```html
<a href="mailto: exemple@gmail.com?subject=Chocolat gratuit&body=Rendez vous sur http://chocolatgratuit/ pour du chocolat gratuit !">Texte du lien</a>
```

### Images & légendes

#### Image
```html
<img src="images/image.jpg">
```

#### Légende
```html
<figcaption>Tomates cerises farcies</figcaption>
```
### Listes

#### Liste non ordonnée
```html
<ul>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
</ul>
```

#### Liste ordonnée
```html
<ol>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
</ol>
```

#### Liste menu
```html
<menu>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
</menu>
```

#### Liste avec description
```html
<dl>
    <dt>Element 1</dt>
    <dd>- Le premier élément</dd>
    <dt>Element 2</dt>
    <dd>- Le deuxième élément</dd>
    <dt>Element 3</dt>
    <dd>- Le troisième élément</dd>
</dl>
```

### Tableaux

```html
<table>
        <!-- thead pour Table Head : la partie "head" du tableau -->
        <thead>
            <!-- tr pour Table Row : sert à définir une ligne -->
            <tr>
                <!-- th pour Table Heading : un titre du tableau -->
                <th>Ingrédient</th>
                <th>Quantité</th>
            </tr>
        </thead>
        <!-- tbody pour Table Body : le corps du tableau -->
        <tbody>
            <tr>
                <!-- td pour Table Data : Une cellule du tableau -->
                <td>Tomates Cerises</td>
                <td>500g</td>
            </tr>
            <tr>
                <td>Huile d'olive</td>
                <td>2 cuillères</td>
            </tr>
            <tr>
                <td>Herbes de Provence</td>
                <td>1 pincée</td>
            </tr>
        </tbody>
    </table>
```

> Il est possible de fusionner des colonnes, des lignes ou des cellules grâce aux attributs `colspan` et `rowspan`
```html
<th colspan="2">Commentaires</th>
<td rowspan="2">500g</td>
```

### Formulaires
```html
<form method="post" action="index.html"></form>
```
> L'attribut `method` permet de définir si on utilise la méthode `POST`, ou `GET`
> L'attribut `action` permet de définir la page sur laquelle le formulaire renvoie après soumission

Une fois notre formulaire créé, il faut lui ajouter des champs en créant des éléments `input`/`placeholder`/`select` à l'intérieur de celui-ci.



```html
<form>
    <label for="nom">Nom</label>
    <input type="text" name="nom" placeholder="Nom" id="nom" required>
</form>
```
> L'élément `label` sert à créer un texte descriptif pour notre champs, il peut avoir un attribut `for` qui permet de le relier à un champs avec son `id`.
> Notre champ (élement `input`), doit impérativement avoir un attribut `name`, sans lui, sa valeur ne sera pas envoyée. Il doit aussi avoir un attribut `type` qui permet de définir sont type.
> Notre champ peut aussi avoir un attribut `placeholder` qui permet de définir un texte de description qui se trouvera dans notre champ si celui-ci est vide.

Exemples de champs :
```html
<input type="email" name="email" placeholder="Email" id="email" required>
<textarea name="message" placeholder="Message" id="message" required></textarea>
```

Pour terminer, un formulaire doit avoir un champ `submit` qui servira de bouton d'envoi.
```html
<input type="submit" value="Envoyer">
```
> L'attribut `value` d'un champ input détermine le texte du bouton

### Médias (sons, vidéos)

#### Audio
```html
<audio controls src="sample.mp3">
    Votre navigateur ne supporte pas ce média audio.
</audio>
```

#### Vidéo
```html
<video controls width="300">
    <source src="sample.mp4" type="video/mp4">
    Votre navigateur ne supporte pas ce média vidéo.
</video>
```

## CSS

### Sélecteurs CSS

#### Cibler une balise
```css
h2 {
    color: red;
}
```
> La règle ci-dessus appliquera une couleur rouge à tous les titres `h2`

#### Cibler un id
Il faut d'abord définir un id sur un élement
```html
<p id='cible'>Texte</p>
```
> Un id DOIT être unique.

```css
#cible {
    text-decoration: underline;
}
```
> La règle ci-dessus soulignera l'élément ayant l'id `cible`


#### Cibler une classe
Il faut d'abord définir une classe sur un élement
```html
<p class='cible'>Texte</p>
```
> La même classe peut être appliqué sur plusieurs éléments

```css
.cible {
    font-weight: bold;
}
```
> La règle ci-dessus mettra en gras tous les éléments ayant la classe `cible`

#### Cibler un enfant
```css
h2 p {
    font-weight: bold;
}
```
> La règle ci-dessus mettra en gras tous les éléments `<p>` ayant pour parent un `<h2>`

#### Cibler un enfant direct
```css
h2 > p {
    font-weight: bold;
}
```
> La règle ci-dessus mettra en gras tous les éléments `<p>` ayant pour parent direct un `<h2>`

#### Cibler un voisin
```css
h2 ~ p {
    font-weight: bold;
}
```
> La règle ci-dessus mettra en gras tous les éléments `<p>` ayant pour voisin un `<h2>`

#### Cibler un voisin direct
```css
h2 + p {
    font-weight: bold;
}
```
> La règle ci-dessus mettra en gras tous les éléments `<p>` ayant pour voisin direct un `<h2>`

### Pseudo-classes

#### Target
```css
a:hover {
    font-weight: bold;
}
```
> La règle ci-dessus mettra en gras tous les éléments `<a>` sur lesquels l'utilisateur passe sa souris

#### Active
```css
input:active {
    border: 1px solid green;
}
```
> La règle ci-dessus fera apparaitre une bordure verte sur le champ input où l'utilisateur à positionné son curseur

#### Visited
```css
a:visited {
    color: brown;
}
```
> La règle ci-dessus mettra en marron les élément `<a>` qui ont déjà été visités par l'utilisateur


### Architecture

Il existe 2 bonnes pratiques pour organiser ses fichiers css 

#### Hierarchiser
Placer les selecteurs les plus généraux en haut du fichier (les selecteurs de balise, *, etc...) et les sélécteurs les plus précis en bas du fichier (id, enfants etc...)

#### Catégoriser
Créer des sections grâce aux commentaires css pour compartimenter votre code selon son application

Exemple 
```css
/* HEADER */
header {
    background: black;
}
/* FIN HEADER */
```

### Media Queries
Les media queries permettent de définir des règles css s'appliquant dans certaines conditions d'affichage, par exemple une largeur maximale en pixels.

```css
@media screen and (max-width: 776px) and (min-width: 500px) {
    #tomate {
        max-width: 100%;
    }
}
```
La règle ci dessus s'appliquera seulement en affichage de navigation (pas en impression), sur une résolution allant de 500px minimum jusqu'à 776px maximum. L'élément ayant l'id `tomate` verra sa taille limité à 100% de celle de son parent.

### Animations

#### Transitions
Il est possible de rendre les changements de propriété progressif, par exemple au survol de la souris, un bouton peut grossir progressivement, pour cela il suffit d'utiliser la propriété `transition`

```css
button {
    width: 80px;
    transition: 0.3s;
}

button:hover {
    width: 100px;
}
```

#### Keyframes
Il est possible de définir une animation avec un état de départ, un état final, et des états intermédiaires optionnels
```css
@keyframes padding-anim {
    0% {
        padding: 0px;
    }
    50% {
        
    }
    100% {
        padding: 20px;
    }
}
```

Il suffit ensuite d'appliquer l'animation à un élément
```css
#anim-btn {
    animation: padding-anim 1s infinite alternate;
}
```

### Priorité des sélecteurs

Dans l'ordre de priorité nous avons :
1. Selecteur de balise (ex: `body`)
2. Selecteur de classe (ex: `.body`)
3. Selecteur d'id (ex: `#body`)

Pour deux niveaux identiques, c'est le degrés de spécificité qui donne la priorité :

`body .classe > #id` sera plus important que body `#id`

Enfin, pour deux sélécteurs identiques, tout attribut définit écrasera le précedent.


### Règles spécifiques

#### Position
> L'attribut position permet de définir dans quel référenciel se positionne un élément

##### Relative
> Position par défaut, mais la définir permet de créer une référence pour les enfants.

##### Absolute
> Positionnement par rapport au plus proche parent ayant une position définie.

##### Fixed
> Pareil que absolue sauf que c'est par rapport à la fenètre (pas affecté par le scroll)

#### Display
> L'attribut display permet de définir le comportement de placement d'un élément et de ses enfants

##### Block
> Méthode d'affichage par défaut, affichage l'un au dessus de l'autre.

##### Grid
> Permet de créer une grille à l'interieur de l'élément concerné grâce aux attributs `grid-template-columns` et `grid-template-rows`

##### Flex
> Permet de créer un affichage adaptatifs en fonction du nombre d'éléments, des centrages et positionnements équitables des enfants etc.


## Accessibilité

### Norme WCAG
Une note attribuée aux site en fonction de leur accessibilité



| Niveau | Objectif | Faisabilité | Exemple |
| -------- | -------- | -------- | -------- |
| A | Atteindre un niveau d'accessibilité minimal. | Critères de succès essentiels pouvant raisonnablement s'appliquer à toutes les ressources web. | La couleur n'est pas le seul moyen visuel de véhiculer l'information. |
| AA | Améliorer le niveau d'accessibilité. | Critères de succès supplémentaires pouvant raisonnablement s'appliquer à toutes les ressources web. | Les textes de petite taille ont un ratio de contraste au moins égal à 4.5 |
| AAA | Atteindre un niveau supérieur d'accessibilité. | Critères de succès ne s'appliquant pas à toutes les ressources web. | Les textes de petite taille ont un ratio de contraste au moins égal à 7 |

### Points importants de l'accessibilité

#### Contenus perceptibles
- Alternatives textuelles aux contenus non textuels (balises alt sur les images, balise title sur les iframe etc...)
- Contenu pouvant être mis en forme de différentes manières sans perte d'information ou de structure (ex: pouvoir zoomer sur la page)
- Permettre aux utilisateurs d'entendre et de voir plus facilement (séparation avant-plan et arrière-plan, contraste, etc...)

#### Contenus utilisables
- Fonctionnalités utilisables au clavier
- Garantir un temps suffisant pour comprendre et utiliser le contenu
- Ne pas mettre en forme le contenu d'une manière connue comme entraînant des dommages (epilepsie etc...)
- Optimiser la naviguation et la recherche du contenu

#### Contenus compréhensibles
- Textes lisibles et compréhensibles
- Comportement prévisibles
- Aider à réctifier les erreurs (ex: messages sur formulaire érroné, etc...)

#### Contenus robustes
- optimiser la compatibilité avec les agents utilisateurs actuels et futurs, y compris les technologies d'assistance.


## Référencement SEO

SEO : Search Engine Optimisation
=> Optimisation des Moteurs de Recherches


Les points importants en SEO :
- Balise Meta title (une seule par page)
- Balise h1 (une seule par page)
- Balise h2, h3... Respecter la hierarchie des titres
- Maillage Interne (liens vers d'autres pages de votre site)
- Maillage Externe (liens vers d'autres sites)
- Balise Meta description
- attributs alt sur les images (et plus généralements tous les points importants de l'accessibilité)
- Les liens doivent avoir du texte
- Pertinance du contenu
- Site responsive
- Site performant

## Projets

### Description
En solo ou par groupe de 2 à 3 personnes, créer un site internet comportant au minimum autant de page que de personnes dans le groupe.

Votre site devra respecter certaines consignes :
- Un menu de navigation doit être présent sur toutes les pages
- On doit pouvoir accéder à chacune des pages par le biais de liens
- Ajouter un formulaire sur au moins une des pages


### Etapes

- (optionnel) Créer un prototype sur Figma / Adobe XD / Paint etc.. ou au format papier
- Créer la structure HTML
- Appliquer le style CSS
- Tester son site dans différents navigateurs
- Appliquer des correctifs

### Bonus

- Créer et appliquer des animations / objets JavaScript
- Rendre votre site compatible pour toutes les résolutions d'écran (PC, Tablette, Mobile)
- Intégrer une vidéo Youtube
- Obtenir les notes maximales dans toutes les catégories de l'outil Lighthouse