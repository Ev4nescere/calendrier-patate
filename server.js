const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const messages = {
1: "Coucou Patate !! On est le premier jour de décembre heheheh. Ça me fait penser au changement de saison dans Stardew Valley... Bon, aucun rapport, mais c'est pour te dire que ce calendrier que tu t'apprêtes à ouvrir jusqu'à Noël a été fait de mes mains, rien que pour toi ! Ce seront surtout des petits messages (rien de fou), même si je n'avais pas mille idées, j'y ai mis tout mon coeur :] J'espère que tu l'ouvriras chaque jour !!! Fun fact, la pyramide des cadeaux est censée imiter la forme d'un sapin (si tout va bien, ce devrait être toi qui l'as dessiné !) Tu pourras ouvrir ta case chaque soir à minuit si je sais bien coder, voili voilou pour les règles, ton message du jour c'est : Orlane déjà j'adore ton prénom et tu le sais ensuite, je suis tellement heureux que nos destins se soient croisés. J'espère sincèrement que ce calendrier te donnera le sourire !! Je t'aime fort n'hésite pas à me dire quand tu ouvres ta case, tes réactions me feront chaud au coeur ! :]",
2: "",
3: "",
4: "",
5: "",
6: "",
7: "",
8: "",
9: "",
10: "",
11: "",
12: "",
13: "",
14: "",
15: "",
16: "",
17: "",
18: "test",
19: "",
20: "",
21: "",
22: "",
23: "",
24: "",
25: ""
};

app.get('/api/cadeau/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id) || id < 1 || id > 25) {
        return res.status(400).json({ error: 'id invalide' });
    }

    const now = new Date();
    // const mois = now.getMonth();
    // const jour = now.getDate();
    const mois = 11;
    const jour = 15;
    if (mois != 11 || (mois === 11 && jour < id)){
        return res.json({ 
            id, 
            msg: "EH !! Toi !!! Tu triche !!!! Pas de bagarre si tu continue, attends le " + id + " décembre !",
            valide: false
        });
    }

    const msg = messages[id] || `Mdrr l'abruti que je suis a oublié de mettre le contenu de ce cadeau, vien me bagarrer si ce message spawn pr le Cadeau #${id}`;
    setTimeout(() => {
        res.json({ id, msg, valide: true });
    }, 120);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
