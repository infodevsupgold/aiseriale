import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Seriale",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        <strong>Ultimo aggiornamento:</strong> 20 novembre 2026
      </p>

      <p>
        La presente informativa sulla privacy descrive come Master Mind Service
        and Consulting S.r.l.s. (di seguito &quot;noi&quot;, &quot;nostro&quot;
        o &quot;Società&quot;), con sede legale in Via Beata Vergine delle
        Grazie 8/C, Montegridolfo (RN), C.F. e P.IVA 04653420408, raccoglie,
        utilizza e protegge i dati personali degli
        utenti del sito web aiseriale.it (di seguito &quot;Sito&quot;), in
        conformità al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003
        come modificato dal D.Lgs. 101/2018.
      </p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        Il Titolare del trattamento è Master Mind Service and Consulting
        S.r.l.s., Via Beata Vergine delle Grazie 8/C, Montegridolfo (RN), C.F. e
        P.IVA 04653420408.
        <br />
        Email di contatto:{" "}
        <a href="mailto:info@aiseriale.it">info@aiseriale.it</a>
      </p>

      <h2>2. Dati personali raccolti</h2>
      <p>Raccogliamo le seguenti categorie di dati personali:</p>

      <h3>2.1 Dati forniti volontariamente</h3>
      <ul>
        <li>Nome e cognome</li>
        <li>Indirizzo email</li>
        <li>Numero di telefono (opzionale)</li>
        <li>Ruolo professionale</li>
        <li>Eventuali informazioni aggiuntive inserite nel form di contatto</li>
      </ul>

      <h3>2.2 Dati raccolti automaticamente</h3>
      <ul>
        <li>Indirizzo IP</li>
        <li>Tipo di browser e sistema operativo</li>
        <li>Pagine visitate e tempo di permanenza</li>
        <li>Dati di navigazione e cookie (vedi Cookie Policy)</li>
      </ul>

      <h2>3. Finalità del trattamento</h2>
      <p>I dati personali vengono trattati per le seguenti finalità:</p>
      <ul>
        <li>
          <strong>Rispondere alle richieste di contatto:</strong> per gestire le
          richieste di consulenza inviate tramite il form del Sito.
        </li>
        <li>
          <strong>Erogazione del servizio:</strong> per fornire informazioni sui
          percorsi formativi e gestire le iscrizioni.
        </li>
        <li>
          <strong>Comunicazioni commerciali:</strong> previo consenso, per
          inviare newsletter e aggiornamenti sui nostri corsi.
        </li>
        <li>
          <strong>Adempimenti legali:</strong> per ottemperare a obblighi di
          legge, regolamenti o normative europee.
        </li>
        <li>
          <strong>Miglioramento del servizio:</strong> per analizzare l&apos;uso
          del Sito e migliorare l&apos;esperienza utente.
        </li>
      </ul>

      <h2>4. Base giuridica del trattamento</h2>
      <ul>
        <li>
          <strong>Consenso</strong> (art. 6, par. 1, lett. a GDPR) per le
          comunicazioni commerciali.
        </li>
        <li>
          <strong>Esecuzione contrattuale</strong> (art. 6, par. 1, lett. b
          GDPR) per l&apos;erogazione dei servizi richiesti.
        </li>
        <li>
          <strong>Obbligo legale</strong> (art. 6, par. 1, lett. c GDPR) per
          adempimenti fiscali e normativi.
        </li>
        <li>
          <strong>Legittimo interesse</strong> (art. 6, par. 1, lett. f GDPR)
          per il miglioramento dei servizi.
        </li>
      </ul>

      <h2>5. Conservazione dei dati</h2>
      <p>
        I dati personali sono conservati per il tempo strettamente necessario
        alle finalità per cui sono stati raccolti e comunque per non più di 24
        mesi dalla raccolta, salvo obblighi di legge che ne richiedano una
        conservazione più lunga.
      </p>

      <h2>6. Condivisione dei dati</h2>
      <p>
        I dati personali non vengono venduti a terzi. Possono essere condivisi
        con:
      </p>
      <ul>
        <li>
          Fornitori di servizi tecnologici (hosting, email, analytics) che
          agiscono come responsabili del trattamento.
        </li>
        <li>Autorità competenti, quando richiesto dalla legge.</li>
      </ul>

      <h2>7. Trasferimento dei dati</h2>
      <p>
        Alcuni dei nostri fornitori di servizi possono avere sede al di fuori
        dello Spazio Economico Europeo (SEE). In tal caso, il trasferimento
        avviene nel rispetto delle garanzie previste dal GDPR (clausole
        contrattuali tipo, decisioni di adeguatezza).
      </p>

      <h2>8. Diritti dell&apos;interessato</h2>
      <p>
        Ai sensi degli artt. 15-22 del GDPR, hai il diritto di:
      </p>
      <ul>
        <li>Accedere ai tuoi dati personali</li>
        <li>Richiederne la rettifica o la cancellazione</li>
        <li>Limitare o opporti al trattamento</li>
        <li>Richiedere la portabilità dei dati</li>
        <li>Revocare il consenso in qualsiasi momento</li>
        <li>
          Proporre reclamo al Garante per la Protezione dei Dati Personali
          (www.garanteprivacy.it)
        </li>
      </ul>
      <p>
        Per esercitare i tuoi diritti, scrivi a{" "}
        <a href="mailto:info@aiseriale.it">info@aiseriale.it</a>.
      </p>

      <h2>9. Sicurezza</h2>
      <p>
        Adottiamo misure tecniche e organizzative adeguate per proteggere i dati
        personali da accessi non autorizzati, perdita, distruzione o
        divulgazione.
      </p>

      <h2>10. Modifiche alla Privacy Policy</h2>
      <p>
        Ci riserviamo il diritto di aggiornare questa informativa. Le modifiche
        saranno pubblicate su questa pagina con la data di aggiornamento.
      </p>
    </LegalPage>
  );
}
