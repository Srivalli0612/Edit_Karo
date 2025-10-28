const filterButtons = document.querySelectorAll('.filters button');
    const items = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.filters button.active').classList.remove('active');
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        items.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.classList.remove('hide');
          } else {
            item.classList.add('hide');
          }
        });
      });
    });
