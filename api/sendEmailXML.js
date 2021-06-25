export function sendEmailXML(path, formData) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        if (this.responseText.includes('1')) {
          console.log('Sending email');
          return resolve('Email sent correctly');
        } else {
          return reject(new Error('An error ocurred with the response'));
        }
      }
    };

    xhttp.open('POST', path, true);
    xhttp.send(formData);
  });
}

export function buildFormData(payload = {}) {
  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) =>
    formData.append(key, value)
  );
  return formData;
}
