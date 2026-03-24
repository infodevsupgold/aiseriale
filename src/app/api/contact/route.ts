import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { nome, cognome, email, telefono, ruolo, livello, messaggio } = body;

    if (!nome || !cognome || !email) {
      return NextResponse.json(
        { error: "Nome, cognome e email sono obbligatori." },
        { status: 400 }
      );
    }

    // Email di notifica a info@aiseriale.it
    await resend.emails.send({
      from: "AI Seriale <noreply@aiseriale.it>",
      to: "info@aiseriale.it",
      subject: `Nuova richiesta consulenza — ${nome} ${cognome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6c63ff;">Nuova richiesta di consulenza</h2>
          <hr style="border: 1px solid #eee;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Nome</td>
              <td style="padding: 8px 0; color: #555;">${nome} ${cognome}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Email</td>
              <td style="padding: 8px 0; color: #555;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Telefono</td>
              <td style="padding: 8px 0; color: #555;">${telefono || "Non fornito"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Ruolo</td>
              <td style="padding: 8px 0; color: #555;">${ruolo || "Non specificato"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Livello di interesse</td>
              <td style="padding: 8px 0; color: #555;">${livello || "Non specificato"}</td>
            </tr>
          </table>
          ${
            messaggio
              ? `<h3 style="color: #333; margin-top: 20px;">Messaggio</h3><p style="color: #555; background: #f9f9f9; padding: 16px; border-radius: 8px;">${messaggio}</p>`
              : ""
          }
          <hr style="border: 1px solid #eee; margin-top: 24px;" />
          <p style="color: #999; font-size: 12px;">Inviato dal form di contatto di aiseriale.it</p>
        </div>
      `,
    });

    // Email di conferma al richiedente
    await resend.emails.send({
      from: "AI Seriale <noreply@aiseriale.it>",
      to: email,
      subject: "Abbiamo ricevuto la tua richiesta — AI Seriale",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6c63ff;">Ciao ${nome}!</h2>
          <p style="color: #555; line-height: 1.6;">
            Grazie per il tuo interesse nel percorso di formazione AI Seriale.
          </p>
          <p style="color: #555; line-height: 1.6;">
            Abbiamo ricevuto la tua richiesta e un nostro consulente ti contatterà
            entro <strong>24 ore</strong> per fissare una consulenza gratuita e
            personalizzata.
          </p>
          <p style="color: #555; line-height: 1.6;">
            Nel frattempo, se hai domande puoi rispondere direttamente a questa email
            o scriverci a <a href="mailto:info@aiseriale.it" style="color: #6c63ff;">info@aiseriale.it</a>.
          </p>
          <p style="color: #555; line-height: 1.6;">A presto!</p>
          <p style="color: #555;"><strong>Il team di AI Seriale</strong><br/>Serial S.r.l.</p>
        </div>
      `,
      replyTo: "info@aiseriale.it",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore invio email:", error);
    return NextResponse.json(
      { error: "Errore nell'invio della richiesta. Riprova più tardi." },
      { status: 500 }
    );
  }
}
