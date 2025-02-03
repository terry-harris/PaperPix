document.getElementById('createList').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: collectImages
      }, (results) => {
        if (results && results[0]) {
          let imageUrls = results[0].result;
          console.log('Collected Image URLs:', imageUrls); // Log collected URLs
          let emailContent = `URL: ${tabs[0].url}\n\nImages:\n${imageUrls.join('\n')}`;
          displayImageList(emailContent);
        } else {
          console.error('No results returned from collectImages function.');
        }
      });
    });
  });
  
  function collectImages() {
    let selectedImages = [];
    document.querySelectorAll('.image-checkbox:checked').forEach((checkbox) => {
      let index = checkbox.dataset.index;
      let img = document.querySelectorAll('img')[index];
      selectedImages.push(img.src);
    });
    console.log('Selected Images:', selectedImages); // Log selected images
    return selectedImages;
  }
  
  function displayImageList(content) {
    console.log('Displaying image list:', content); // Log the content to be displayed
    let newWindow = window.open("", "Image List", "width=600,height=400");
    newWindow.document.write(`<pre>${content}</pre>`);
  }
  