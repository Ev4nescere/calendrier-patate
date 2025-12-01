document.addEventListener('DOMContentLoaded', () => {
    console.log('Calendrier chargé !');
    //REGARDE PAS LA ! J'héberge via github donc j'ai pas le choix de mettre tout coté client :(
    const messages = {
        1: "Coucou Patate !! On est le premier jour de décembre heheheh. Ça me fait penser au changement de saison dans Stardew Valley... Bon, aucun rapport, mais c'est pour te dire que ce calendrier que tu t'apprêtes à ouvrir jusqu'à Noël a été fait de mes mains, rien que pour toi ! Ce seront surtout des petits messages (rien de fou), même si je n'avais pas mille idées, j'y ai mis tout mon coeur :] J'espère que tu l'ouvriras chaque jour !!! Fun fact, la pyramide des cadeaux est censée imiter la forme d'un sapin (si tout va bien, ce devrait être toi qui l'as dessiné !) Tu pourras ouvrir ta case chaque soir à minuit si je sais bien coder, voili voilou pour les règles, ton message du jour c'est : Orlane déjà j'adore ton prénom et tu le sais ensuite, je suis tellement heureux que nos destins se soient croisés. J'espère sincèrement que ce calendrier te donnera le sourire !! Je t'aime fort n'hésite pas à me dire quand tu ouvres ta case, tes réactions me feront chaud au coeur ! :]",
        2: "Je sais pas à quel moment de la journée tu ouvrira ce cadeau, mais sache que tu me manques énormément, <br> Si tu ouvre ce msg et que je dors, j'aurais tout fait avant de dormir pour essayer de rêver de toi <br> Si on se parle pas à cet instant précis, tu me manques énormément et j'attends un de tes messages qui me donnera le sourire automatiquement<br>Si on parle par message à ce moment là, tu me manques tout malgré ça, car j'adorerais entendre ta voix<br>Et si tu ouvre ce message pendant qu'on est en vocal, sache que tu me manques tout de même car je rêve d'être à tes côtés physiquement... ❣️",
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

    const cadeauxDiv = document.querySelector('.cadeaux');
    
    for (let i = 1; i <= 25; i++) {
        const cadeau = document.createElement('div');
        cadeau.className = `cadeau`;
        
        cadeau.textContent = i;
        cadeauxDiv.appendChild(cadeau);

        cadeau.addEventListener('click', () => {
            if (cadeau.classList.contains('opened')) return;

            const now = new Date();
            //const mois = now.getMonth(); 
            //const jour = now.getDate();
            const mois = 11;
            const jour = 15;
            if (mois < 11 || (mois === 11 && jour < i)) {
                 console.log("probleme, mois :", mois);
                console.log("probleme, jour :", jour);
                 showModal("EH !! Toi !!! Tu triches !!!! Pas de bagarre si tu continues, attends le " + i + " décembre !");
                 return;
            }

            const msg = messages[i] || `Mdrr l'abruti que je suis a oublié de mettre le contenu de ce cadeau, vien me bagarrer si ce message spawn pr le Cadeau #${id}`;
            cadeau.classList.add('opened');
            showModal(msg);
        });
    }

    const spanDate = document.getElementById('date-du-jour');
    if (spanDate) {
        const aujourdhui = new Date();
        spanDate.textContent = aujourdhui.toLocaleDateString('fr-FR', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    }

    function showModal(text) {
        const existing = document.getElementById('modal-msg');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.id = 'modal-msg';
        overlay.className = 'modal-overlay';

        const modal = document.createElement('div');
        modal.className = 'modal';

        const p = document.createElement('p');
        p.innerHTML = text;

        const btn = document.createElement('button');
        btn.className = 'modal-close';
        btn.textContent = 'Fermer';
        btn.addEventListener('click', () => overlay.remove());

        modal.appendChild(p);
        modal.appendChild(btn);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => { 
            if (e.target === overlay) overlay.remove(); 
        });
    }
});





