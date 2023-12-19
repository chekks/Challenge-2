document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');
  
    // Load JSON data from the file
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Create a parent container for the categories
        const parentContainer = document.createElement('div');
        parentContainer.classList.add('parent-container');
  
        // Loop through the categories and create individual containers
        data.categories.forEach(category => {
          const categoryContainer = document.createElement('div');
          categoryContainer.classList.add('category-container');
  
          // Move the category name outside the category-container
          const categoryName = document.createElement('div');
          categoryName.classList.add('category-name');
          categoryName.textContent = category.name.toUpperCase();
          parentContainer.appendChild(categoryName);
  
          // Add the title 'By Country' inside the category-container
          const categoryTitle = document.createElement('div');
          categoryTitle.classList.add('category-title');
          categoryTitle.textContent = 'By Country';
          categoryContainer.appendChild(categoryTitle);
  
          const countriesContainer = document.createElement('div'); // Container for countries
          countriesContainer.classList.add('countries-container');
  
          category.countries.forEach(country => {
            const countryElement = document.createElement('div');
            countryElement.classList.add('country');
  
            // Apply background color conditionally based on the category
            countryElement.style.backgroundColor = category.backgroundColor;
  
            const countryTime = document.createElement('div');
            countryTime.classList.add('country-time');
            countryTime.style.backgroundColor = category.timeColor;
            countryTime.textContent = `${country.time}`;
  
            const countryName = document.createElement('div');
            countryName.classList.add('country-name');
            countryName.style.color = category.textColor;
            countryName.textContent = country.name;
  
            countryElement.appendChild(countryTime);
            countryElement.appendChild(countryName);
            countriesContainer.appendChild(countryElement);
          });
  
          categoryContainer.appendChild(countriesContainer);
          parentContainer.appendChild(categoryContainer);
        });
  
        // Append the parent container to the app
        app.appendChild(parentContainer);
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  