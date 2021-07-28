  // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
  const poems = [{
          author: "Cece",
          poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
          image: "sunflower.jpeg",
      },
      {
          author: "Anvit",
          poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
          image: "pizza.jpeg",
      },
      {
          author: "Ernie",
          poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
          image: "bee.jpeg",
      },
      {
          author: "preethi",
          poem: `I wandered lonely as a cloud That floats on high o'er vales and hills, When all at once I saw a crowd, A host, of golden daffodils;`,
          image: "./yellow.jpeg",
      }, ,
      {
          author: "Matt",
          poem: "Rub a dub dub",
          image: "bee.jpeg",
      },
      {
          author: "Charles M.Schulz",
          poem: "Life is like a ten speed bicycle. Most of us have gears we never use",
          image: "bicycle.jpeg",
      },
      {
          author: "Sean",
          poem: "O Captain! My Captain! our fearful trip is done \n The ship has weather'd every rack, the prize we sought is won \n The port is near, the bells I hear, the people all exulting,",
          image: "deadpoetssociety.jpeg",
      },

      // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
  ];

  let displayPoems = (array) => {
      let html = "";
      let poemDiv = document.getElementById("poems");

      poemArray = array.forEach((poem) => {
          html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
      });

      poemDiv.innerHTML = html;
  };

  displayPoems(poems);