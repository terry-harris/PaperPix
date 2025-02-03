window.addEventListener('load', function() {
    let images = document.querySelectorAll('img');
    
    console.log('Found images:', images.length); // Log the number of images found
    
    images.forEach((img, index) => {
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'image-checkbox';
      checkbox.dataset.index = index; // Assign dataset index
      
      checkbox.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1000;
        background: white;
        border: 2px solid black;
        cursor: pointer;
      `;
      
      checkbox.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent other click handlers from interfering
      });
  
      img.parentElement.style.position = 'relative';
      img.parentElement.appendChild(checkbox);
      
      console.log('Checkbox added for image:', img.src); // Log each image URL with a checkbox
    });
  
    document.querySelectorAll('.image-checkbox').forEach((checkbox) => {
      checkbox.addEventListener('change', function() {
        console.log('Checkbox state changed:', checkbox.checked);
      });
    });
  });
  