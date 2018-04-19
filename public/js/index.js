$('document').ready(() => {

  // on button press
  $('button').on('click', e => {
    let val = $('input[name="userId"]').val();

    // call the api
    $.getJSON(`/users/${val}`, (json, textStatus) => {
      let html = json.data ? createUserHtml(json.data) : '<p>User not found :/</p>';
      $('.results').html(html);
    });
  });


  // creates the html
  let createUserHtml = (user) => {
    let html = '<h3>USER</h3>';

    for (key in user) {
      let val = user[key];

      if (isNaN(key) && key.includes('_')) {
        key = formatString(key, '_');
      }

      html+= `<p>${capitalize(key)}: ${val}</p>`;
    }

    return html;
  }

  // capitalize string
  let capitalize = (string) => string.charAt(0).toUpperCase() + string.substring(1, string.length)

  // format strings
  let formatString = (string, delimiter) => string.split(delimiter).join(' ');
});