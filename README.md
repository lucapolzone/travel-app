# Travel App

È una web application sviluppata con Vue.js e Vite che consente di gestire e visualizzare le tappe di un viaggio. Gli utenti possono aggiungere nuove tappe, modificare quelle esistenti e visualizzare una mappa con le località salvate.

## Tecnologie utilizzate

- Vue.js
- Vite
- Bootstrap
- TomTom Maps SDK

## Requisiti

Per eseguire questo progetto è necessario avere installato:

- **Node.js** (versione 14 o superiore)
- **npm** (incluso con Node.js)

## Inizializzazione

1. **Clona il repository e naviga nella cartella del progetto:**

   ```
   cd travel-app
   ```

2. **Installa le dipendenze:**

   ```
   npm install
   ```

3. **Per avviare il progetto in modalità di sviluppo, esegui:**

   ```
   npm run dev
   ```

   Questo comando avvierà il server di sviluppo e aprirà l'applicazione nel browser.

## Struttura del progetto

- `src/`

  - `components/` - Componenti Vue: `AppLocations`, `AppCalendar`, e `AppMap`.

  - `pages/` - Pagine principali dell'app: `Home.vue`, `NewLocation.vue` e `EditLocation.vue`.

  - `db/` `storage.js` - file per la gestione e il salvataggio dei dati relativi alle tappe di viaggio.

  - `router.js` - File che gestisce la configurazione delle rotte dell'applicazione.

## Funzionalità

- **Aggiunta di una tappa:**

  - Sotto le card del calendario, cliccando sull’icona `+` , puoi aggiungere una nuova tappa al tuo viaggio. Ti verrà richiesto di inserire un nome e una descrizione per la nuova tappa.

  - Il progetto utilizza `localStorage` per la persistenza dei dati. Le tappe aggiunte dagli utenti vengono salvate localmente nel browser, permettendo di mantenere le informazioni anche dopo la chiusura del browser o il riavvio dell'applicazione.

  - Una volta aggiunta almeno una tappa alla tua giornata di viaggio, la card relativa nel calendario diventerà “attiva”.

- **Visualizzazione delle tappe:**

  - Le tappe aggiunte sono visualizzabili sia nel carosello in cima alla pagina, dove puoi scorrere rapidamente le giornate del tuo viaggio, sia cliccando sulla card attiva corrispondente alla data specifica nel calendario.

- **Modifica ed eliminazione di una tappa:**

  - Le tappe sono modificabili sia nel carosello in cima alla pagina, sia nelle card del calendario. È possibile modificare nome e descrizione delle tappe o semplicemente cancellarle.

- **Visualizzazione su Mappa:**
  - Sotto il calendario c'è una mappa interattiva. Le tappe che hai aggiunto vengono "pinnate" sulla mappa, mostrando visivamente le località che fanno parte del tuo viaggio.

## Deploy

Il progetto è pubblicato su Vercel e può essere visualizzato al seguente link: https://travel-kny6m5mnd-lucapolzs-projects.vercel.app/
