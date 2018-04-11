$('document').ready(() => {
  
  // utility function that prints the list
  const printDict = (terms) => {
    $('.list-wrapper').empty();

    const items = terms.map(item => (
      `<li>
        <h3>${item.term} <span class="delete"> x</span></h3>
        <p>${item.definition}</p>
      </li>`
    ));

    $('<ul/>', {
      'class': 'dictionary-list',
      html: items
    }).appendTo('.list-wrapper');
  };

  // requests data from the /dictionary-api route
  $.getJSON('/dictionary-api', printDict);

  // handles post requests on form submission
  $('form').on('submit', e => {
    e.preventDefault();
    $.post('/dictionary-api', {
      term: $('#term').val(), 
      definition: $('#definition').val()
    }, printDict);

    $(e.currentTarget)[0].reset(); // resets form
  });

  // handles deleted items
  $('body').on('click', '.delete', e => {
    const target = $(e.target);
    const term = target[0].previousSibling.data;
    target.closest('li').remove();
    $.ajax({
        url: `/dictionary-api/${term}`,
        type: 'DELETE',
        success: printDict
    });
  });
});