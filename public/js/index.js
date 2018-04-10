$('document').ready(() => {

  // handle get requests from the /dictionary-api route
  $.getJSON('/dictionary-api', data => {
    const items = data.map(item => (
      `<li>
        <h3>${item.term}</h3>
        <p>${item.definition}</p>
      </li>`
    ));

    $('<ul/>', {
      'class': 'dictionary-list',
      html: items
    }).appendTo('.dict-container');
  });
});