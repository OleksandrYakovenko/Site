// Сторінки
const pages = [
  {file: '2.html', title: 'Вступ'},
  {file: '3.html', title: 'Додатки для математики'},
  {file: '4.html', title: 'Додатки для фізики'},
  {file: '5.html', title: 'Додатки для програмування'},
  {file: '6.html', title: 'Інші додатки'},
  {file: '7.html', title: 'Онлайн-сервіси та файли'}
];

const list = document.getElementById('page-list');
pages.forEach(p => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = `pages/${p.file}`;
  a.textContent = p.title;
  li.appendChild(a);
  list.appendChild(li);
});

// Галерея
const track = document.getElementById("image-track");
const images = [
  "app1.png","app2.png","app3.png","app4.png","app5.png",
  "app6.png","app7.png","app8.png","app9.png","app10.png"
];

// додаємо картинки двічі для безшовності
const allImages = [...images, ...images];

allImages.forEach(img => {
  const image = document.createElement("img");
  image.src = `images/${img}`;
  track.appendChild(image);
});

document.getElementById('search-form').addEventListener('submit', function(e){
  e.preventDefault();
  const query = document.getElementById('search-input').value.toLowerCase();
  alert('Шукати: ' + query);
});

