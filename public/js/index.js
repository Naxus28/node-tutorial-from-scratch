$('document').ready(() => {

  // on button press
  $('button').on('click', e => {
    let val = $('input[name="userId"]').val();

    // call the api
    $.getJSON(`/users/${val}`, (json, textStatus) => {
      let html = json.data ? createUserHtml(json.data) : '<p>User not found :/';
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

      html+= `<p>${key.charAt(0).toUpperCase() + key.substring(1, key.length)}: ${val}</p>`;
    }

    return html;
  }

  // formats strings
  let formatString = (string, splitOn) => string.split(splitOn).join(' ');
});