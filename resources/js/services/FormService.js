export default class FormService {
  static submit(path, method, data) {
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
    form.insertAdjacentHTML('beforeend', window.serverData.csrfToken);

    for (const key in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = data[key];

        form.appendChild(hiddenField);
      }
    }

    document.body.appendChild(form);
    form.submit();
  }

  static getValidateStatus(name) {
    for (const key in window.serverData.validationErrors) if (key === name) return 'error';
    return '';
  }

  static getValidateError(name) {
    for (const key in window.serverData.validationErrors) {
      if (key === name && window.serverData.validationErrors[key].length) {
        return window.serverData.validationErrors[key][0];
      }
    }
    return null;
  }
}
