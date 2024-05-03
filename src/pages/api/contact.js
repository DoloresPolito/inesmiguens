import { mailOptions, transporter } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Nombre",
  email: "Email",
  message: "Mensaje",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html>
    <html lang="es">
    <head>
      <title></title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <style type="text/css">
        body, table, td, a {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        table {
          border-collapse: collapse !important;
        }
        body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          background-color: #ffffff; /* Fondo blanco */
          color: #000000; /* Texto negro */
        }
        .form-container {
          margin-bottom: 24px;
          padding: 20px;
          border: 1px solid #ccc;
        }
        .form-heading {
          font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          font-weight: 400;
          text-align: left;
          line-height: 20px;
          font-size: 18px;
          margin: 0 0 8px;
          padding: 0;
        }
        .form-answer {
          font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          font-weight: 300;
          text-align: left;
          line-height: 20px;
          font-size: 16px;
          margin: 0 0 24px;
          padding: 0;
        }
        div[style*="margin: 16px 0;"] {
          margin: 0 !important;
        }
      </style>
    </head>
    <body style="margin: 0 !important; padding: 0 !important;">
      <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"></div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td align="center" style="padding: 10px 15px 30px 15px;" class="section-padding">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px;" class="responsive-table">
              <tr>
                <td>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="padding: 0 0 0 0; font-size: 16px; line-height: 25px;">
                              <h2>Hola, Inés Miguens!</h2>
                              <div class="form-container">${htmlData}</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>`,
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: "Nuevo mensaje web de " + data.email,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};
export default handler;
