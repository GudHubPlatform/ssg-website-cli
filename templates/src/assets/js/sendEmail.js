export async function sendEmail(form) {
    const name = form.querySelector('input[name="name"]').value || '';
    const company = form.querySelector('input[name="company"]').value || '';
    const email = form.querySelector('input[name="email"]').value;
    const phone = form.querySelector('input[name="phone"]').value || '';
    const message = form.querySelector('textarea[name="message"]').value || '';


    const template = {
        to: 'atlasiko',
        from: 'webmaster',
        subject: `GUDHUB Website template`,
        html: "<!DOCTYPE html>" +
            "<html>" +
            "<head>" +
            '<title>Atlasiko Inc</title>' +
            "</head>" +
            "<body>" +
            "<ul>" +
            "<li><strong>" +
            "Atlasiko Inc</strong>" +
            "</li>" +
            "<li> <strong>" +
            "Name: </strong>" + name +
            "</li>" +
            "<li> <strong>" +
            "Company: </strong>" + company +
            "</li>" +
            "<li> <strong>" +
            "Phone: </strong>" + phone +
            "</li>" +
            "<li> <strong>" +
            "Email: </strong>" + email +
            "</li>" +
            "<li> <strong>" +
            "Message: </strong>" + message +
            "</li>" +
            "<li> <strong>" +
            "Url: </strong>" + window.location.pathname +
            "</li>" +
            "</ul>" +
            "</body>" +
            "</html>"
    };

    const response = await fetch('https://gudhub.com/api/services/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(template),
    });

    console.log('response', response);

}
