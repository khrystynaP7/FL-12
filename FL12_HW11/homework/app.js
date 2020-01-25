const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

const icons = {
  'opened': 'folder_open',
  'closed': 'folder',
  'files': 'insert_drive_file'
}

rootNode.insertAdjacentHTML('afterbegin', `<ul>
  <li><div class="full folder"><i class="material-icons folder_container">${icons.closed}</i>
  <span>${structure[0].title}</span></div>
    <ul class="children">
      <li><div class="full"><i class="material-icons file_container">${icons.files}</i>
      <span>${structure[0].children[0].title}</span></div></li>
      <li><div class="full folder"><i class="material-icons folder_container">${icons.closed}</i>
      <span>${structure[0].children[1].title}</span></div>
        <ul class="children">
          <li><div class="full"><i class="material-icons file_container">${icons.files}</i>
          <span>${structure[0].children[1].children[0].title}</span></div></li>
          <li><div class="full folder"><i class="material-icons folder_container">${icons.closed}</i>
          <span>${structure[0].children[1].children[1].title}</span></div>
            <ul class="children">
              <li><div class="empty"><i>Folder is empty</i></div></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li><div class="full folder"><i class="material-icons folder_container">${icons.closed}</i>
  <span>${structure[1].title}</span></div>
    <ul class="children">
      <li><div class="full folder"><i class="material-icons folder_container">${icons.closed}</i>
      <span>${structure[1].children[0].title}</span></div>
        <ul class="children">
          <li><div class="empty"><i>Folder is empty</i></div></li>
        </ul>
      </li>
    </ul>
  </li>
  </ul>`);

let folders = document.querySelectorAll('.folder');
folders.forEach(function(el) {
  el.addEventListener('click', function(){
    this.parentElement.querySelector('.children').classList.toggle('active');
    if(this.firstChild.innerHTML === `${icons.closed}`){
      this.firstChild.innerHTML = `${icons.opened}`;
    }else{
      this.firstChild.innerHTML = `${icons.closed}`;
    }
  });
});
