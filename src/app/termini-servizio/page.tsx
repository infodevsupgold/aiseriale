import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termini e Condizioni — AI Seriale",
};

export default function TerminiServizio() {
  return (
    <LegalPage title="Termini e Condizioni di Servizio">
      <p>
        <strong>Ultimo aggiornamento:</strong> 25 marzo 2025
      </p>

      <p>
        I presenti Termini e Condizioni di Servizio (di seguito
        &quot;Termini&quot;) regolano l&apos;utilizzo del sito web aiseriale.it
        e dei servizi formativi offerti da Serial S.r.l., con sede legale in Via
        Gualtiero Serafino 20, Roma (RM), C.F. e P.IVA 18246331005 (di seguito
        &quot;Società&quot;).
      </p>

      <p>
        Utilizzando il Sito o acquistando i nostri servizi, accetti integralmente
        i presenti Termini.
      </p>

      <h2>1. Definizioni</h2>
      <ul>
        <li>
          <strong>&quot;Sito&quot;</strong>: il sito web aiseriale.it e tutte le
          sue pagine.
        </li>
        <li>
          <strong>&quot;Servizi&quot;</strong>: i percorsi di formazione
          sull&apos;intelligenza artificiale offerti dalla Società.
        </li>
        <li>
          <strong>&quot;Utente&quot;</strong>: qualsiasi persona che accede al
          Sito o usufruisce dei Servizi.
        </li>
      </ul>

      <h2>2. Servizi offerti</h2>
      <p>
        La Società offre percorsi di formazione sull&apos;intelligenza
        artificiale articolati su più livelli. I contenuti, la durata e i prezzi
        dei corsi sono descritti nella sezione dedicata del Sito e possono
        essere modificati in qualsiasi momento.
      </p>

      <h2>3. Iscrizione e accesso</h2>
      <ul>
        <li>
          L&apos;iscrizione ai corsi avviene previa compilazione del form di
          contatto e successiva conferma da parte della Società.
        </li>
        <li>
          L&apos;accesso ai contenuti del corso è personale e non trasferibile.
        </li>
        <li>
          L&apos;Utente si impegna a fornire informazioni veritiere e accurate.
        </li>
      </ul>

      <h2>4. Prezzi e pagamenti</h2>
      <ul>
        <li>I prezzi indicati sul Sito sono da intendersi IVA inclusa, salvo diversa indicazione.</li>
        <li>
          Il pagamento può avvenire in un&apos;unica soluzione o a rate, secondo
          le modalità indicate al momento dell&apos;acquisto.
        </li>
        <li>
          La Società si riserva il diritto di modificare i prezzi in qualsiasi
          momento. Le modifiche non si applicano agli ordini già confermati.
        </li>
      </ul>

      <h2>5. Diritto di recesso</h2>
      <p>
        Ai sensi del D.Lgs. 206/2005 (Codice del Consumo), l&apos;Utente
        consumatore ha diritto di recedere dal contratto entro{" "}
        <strong>14 giorni</strong> dalla data di acquisto, senza dover fornire
        alcuna motivazione.
      </p>
      <p>
        Per esercitare il diritto di recesso, è sufficiente inviare una
        comunicazione a{" "}
        <a href="mailto:info@aiseriale.it">info@aiseriale.it</a> indicando la
        volontà di recedere. Il rimborso verrà effettuato entro 14 giorni dalla
        ricezione della comunicazione, con lo stesso mezzo di pagamento
        utilizzato per l&apos;acquisto.
      </p>

      <h2>6. Proprietà intellettuale</h2>
      <p>
        Tutti i contenuti del Sito e dei corsi (testi, video, immagini,
        materiali didattici, codice sorgente, marchi) sono di proprietà
        esclusiva della Società o dei rispettivi titolari e sono protetti dalle
        leggi sul diritto d&apos;autore e sulla proprietà intellettuale.
      </p>
      <p>
        È vietata qualsiasi riproduzione, distribuzione, modifica o utilizzo
        commerciale dei contenuti senza autorizzazione scritta della Società.
      </p>

      <h2>7. Limitazioni di responsabilità</h2>
      <ul>
        <li>
          I contenuti formativi sono forniti a scopo educativo e informativo. La
          Società non garantisce risultati specifici derivanti dalla
          partecipazione ai corsi.
        </li>
        <li>
          La Società non è responsabile per eventuali interruzioni del servizio
          dovute a cause tecniche o di forza maggiore.
        </li>
        <li>
          La Società non è responsabile per l&apos;uso che l&apos;Utente fa
          delle competenze acquisite durante il corso.
        </li>
      </ul>

      <h2>8. Comportamento dell&apos;Utente</h2>
      <p>L&apos;Utente si impegna a:</p>
      <ul>
        <li>Utilizzare il Sito e i Servizi in modo lecito e corretto.</li>
        <li>
          Non condividere le proprie credenziali di accesso con terzi.
        </li>
        <li>
          Non riprodurre, registrare o distribuire i contenuti del corso.
        </li>
        <li>
          Rispettare gli altri partecipanti nelle interazioni all&apos;interno
          della community.
        </li>
      </ul>

      <h2>9. Modifiche ai Termini</h2>
      <p>
        La Società si riserva il diritto di modificare i presenti Termini in
        qualsiasi momento. Le modifiche saranno pubblicate su questa pagina e
        saranno efficaci dalla data di pubblicazione.
      </p>

      <h2>10. Legge applicabile e foro competente</h2>
      <p>
        I presenti Termini sono regolati dalla legge italiana. Per qualsiasi
        controversia derivante dall&apos;interpretazione o esecuzione dei
        presenti Termini, sarà competente il Foro di Roma, salvo il foro del
        consumatore ove previsto dalla legge.
      </p>

      <h2>11. Contatti</h2>
      <p>
        Per qualsiasi domanda relativa ai presenti Termini, contattaci
        all&apos;indirizzo{" "}
        <a href="mailto:info@aiseriale.it">info@aiseriale.it</a>.
      </p>
    </LegalPage>
  );
}
