var gallery_img;


gallery_img = ['https://theotheriran.com/wp-content/uploads/2014/06/kelardasht.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Kelardasht.jpg/640px-Kelardasht.jpg', 'https://media.licdn.com/dms/image/C5612AQFhkEn3rgnUjg/article-cover_image-shrink_600_2000/0/1638432209987?e=2147483647&v=beta&t=Zp8R-ZM9aJ74RybZ0QcU4Ox383wGdC0AIDaMczPIImw'];
let element_gallery = document.getElementById('gallery');
let new_img = document.createElement('img');
new_img.setAttribute("src", 'https://theotheriran.com/wp-content/uploads/2014/06/kelardasht.jpg');

element_gallery.appendChild(new_img);


document.getElementById('previous').addEventListener('click', (event) => {
  let element_gallery2 = document.getElementById('gallery');
  element_gallery2.replaceChildren();
  gallery_img.unshift(gallery_img.pop());
  let new_img2 = document.createElement('img');
  new_img2.setAttribute("src", gallery_img.slice(-1)[0]);

  element_gallery2.appendChild(new_img2);

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_gallery3 = document.getElementById('gallery');
  element_gallery3.replaceChildren();
  gallery_img.unshift(gallery_img.pop());
  let new_img3 = document.createElement('img');
  new_img3.setAttribute("src", gallery_img.slice(-1)[0]);

  element_gallery3.appendChild(new_img3);

});