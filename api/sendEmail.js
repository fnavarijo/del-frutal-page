import mailchimp from '@mailchimp/mailchimp_transactional';

const CUSTOM_API_KEY = 'CUSTOM_API_KEY';
let mailchimpApi = null;

const baseMessageProperties = {
  headers: [{ 'Reply-To': 'noresponder@icasa.gt' }],
  important: false,
  track_opens: false,
  track_clicks: false,
  auto_text: false,
  auto_html: false,
  inline_css: false,
  url_strip_qs: false,
  preserve_recipients: false,
  view_content_link: false,
  tracking_domain: false,
  signing_domain: false,
  return_path_domain: false,
};

const baseMessageContact = {
  from_email: 'noresponder@icasa.gt',
  from_name: 'Correo de edt',
  to: [
    { email: 'jcsaravia@divika.com', name: 'Juan Saravia', type: 'to' },
    { email: 'jcdivika@gmail.com', name: 'Juan Divika', type: 'to' },
  ],
  subject: 'Comunícate con nosotros',
};

function buildHTMLContactInformation({
  name,
  country,
  phone,
  email,
  message,
  receiveNotifications,
}) {
  return `
    Nombre: ${name}<br>
    País: ${country}<br>
    Teléfono: ${phone}<br>
    Email: ${email}<br>
    Mensaje: ${message}<br>
    Recibir Notificaciones: ${receiveNotifications || 'no'}<br>
  `;
}

export function initEmailConfiguration(mandrillApiKey) {
  if (!mandrillApiKey) {
    console.error('[EMAIL]: Empty or incorrect api key');
  }
  console.info('[EMAIL]: Configuring email client');
  mailchimpApi = mailchimp(mandrillApiKey || CUSTOM_API_KEY);
}

export async function sendEmail(bodyInformation) {
  const html = buildHTMLContactInformation(bodyInformation);
  const message = { ...baseMessageProperties, ...baseMessageContact, html };

  const response = await mailchimpApi.messages.send({
    message,
    async: false,
    ip_pool: 'Main Pool',
    send_at: '',
  });
  return response;
}
