document.addEventListener('DOMContentLoaded', () => {
    console.log('client.js loaded');
    const app = document.getElementById('app');
    if (!app) return;

    const cadeauxDiv = document.querySelector('.cadeaux');
    for (let i = 1; i <= 25; i++) {
        const cadeau = document.createElement('div');
        cadeau.className = `cadeau`;
        cadeau.id = `c${i}`;
        cadeau.textContent = i;
        cadeauxDiv.appendChild(cadeau);

        cadeau.addEventListener('click', () => {
            fetch(`/api/cadeau/${i}`)
                .then(resp => {
                    if (!resp.ok) throw new Error('Réponse serveur non OK');
                    return resp.json();
                })
                .then(data => {
                    showModal(data.msg);
                    if (data.valide) {
                        cadeau.classList.add('opened');
                    }
                })
                .catch(err => {
                    console.error('Erreur fetch cadeau:', err);
                    showModal('Erreur lors de la récupération du message.');
                });
        });
    }

    const spanDate = document.getElementById('date-du-jour');
    
    if (spanDate) {
        const aujourdhui = new Date();
        spanDate.textContent = aujourdhui.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
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
        p.textContent = text;

        const btn = document.createElement('button');
        btn.className = 'modal-close';
        btn.textContent = 'Fermer';
        btn.addEventListener('click', () => overlay.remove());

        modal.appendChild(p);
        modal.appendChild(btn);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    }
});
