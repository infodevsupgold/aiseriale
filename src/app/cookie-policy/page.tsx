import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — AI Seriale",
};

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy">
      <p>
        <strong>Ultimo aggiornamento:</strong> 25 marzo 2025
      </p>

      <p>
        La presente Cookie Policy spiega cosa sono i cookie, come vengono
        utilizzati sul sito aiseriale.it (di seguito &quot;Sito&quot;) gestito
        da Serial S.r.l., con sede legale in Via Gualtiero Serafino 20, Roma
        (RM), C.F. e P.IVA 18246331005, e come l&apos;Utente può gestire le
        proprie preferenze.
      </p>

      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che vengono memorizzati sul
        dispositivo dell&apos;Utente (computer, tablet, smartphone) quando
        visita un sito web. I cookie servono a migliorare l&apos;esperienza di
        navigazione e a fornire informazioni al proprietario del sito.
      </p>

      <h2>2. Tipologie di cookie utilizzati</h2>

      <h3>2.1 Cookie tecnici (necessari)</h3>
      <p>
        Sono cookie essenziali per il corretto funzionamento del Sito. Non
        richiedono il consenso dell&apos;Utente e non possono essere
        disattivati.
      </p>
      <ul>
        <li>Cookie di sessione per la navigazione</li>
        <li>Cookie per le preferenze dell&apos;Utente</li>
        <li>Cookie di sicurezza</li>
      </ul>

      <h3>2.2 Cookie analitici</h3>
      <p>
        Utilizziamo cookie analitici per raccogliere informazioni aggregate
        sull&apos;utilizzo del Sito (numero di visitatori, pagine più visitate,
        tempo di permanenza). Questi dati ci aiutano a migliorare il Sito e i
        nostri servizi.
      </p>
      <ul>
        <li>
          <strong>Vercel Analytics</strong>: per monitorare le prestazioni del
          Sito.
        </li>
      </ul>

      <h3>2.3 Cookie di profilazione / marketing</h3>
      <p>
        Al momento il Sito non utilizza cookie di profilazione o marketing di
        terze parti. Qualora venissero introdotti in futuro, questa policy verrà
        aggiornata e verrà richiesto il preventivo consenso dell&apos;Utente.
      </p>

      <h2>3. Cookie di terze parti</h2>
      <p>
        Il Sito potrebbe contenere collegamenti o integrazioni con servizi di
        terze parti che potrebbero impostare propri cookie. La Società non ha
        controllo su questi cookie. Si consiglia di consultare le informative
        privacy dei rispettivi servizi:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong>:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy Vercel
          </a>
        </li>
        <li>
          <strong>Resend</strong>:{" "}
          <a
            href="https://resend.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy Resend
          </a>
        </li>
      </ul>

      <h2>4. Durata dei cookie</h2>
      <ul>
        <li>
          <strong>Cookie di sessione:</strong> vengono eliminati automaticamente
          alla chiusura del browser.
        </li>
        <li>
          <strong>Cookie persistenti:</strong> rimangono memorizzati sul
          dispositivo per un periodo di tempo prestabilito o fino a quando
          l&apos;Utente non li elimina manualmente.
        </li>
      </ul>

      <h2>5. Come gestire i cookie</h2>
      <p>
        L&apos;Utente può gestire le preferenze sui cookie in diversi modi:
      </p>

      <h3>5.1 Impostazioni del browser</h3>
      <p>
        Ogni browser permette di gestire i cookie attraverso le proprie
        impostazioni. Ecco i link alle guide dei principali browser:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h3>5.2 Disattivazione dei cookie</h3>
      <p>
        La disattivazione dei cookie tecnici potrebbe compromettere il corretto
        funzionamento del Sito. La disattivazione dei cookie analitici non
        influisce sulla navigazione.
      </p>

      <h2>6. Aggiornamenti</h2>
      <p>
        La presente Cookie Policy può essere aggiornata periodicamente. Le
        modifiche verranno pubblicate su questa pagina con la data di
        aggiornamento.
      </p>

      <h2>7. Contatti</h2>
      <p>
        Per qualsiasi domanda relativa ai cookie utilizzati dal Sito,
        contattaci all&apos;indirizzo{" "}
        <a href="mailto:info@aiseriale.it">info@aiseriale.it</a>.
      </p>
    </LegalPage>
  );
}
