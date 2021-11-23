const express = require("express");
const got = require('got');
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    //res.json({ message: "Hello from server!" });

    (async () => {
      try {
          let response = await got("https://shopnicekicks.com/products.json?limit=250", {
              responseType: 'json',
              headers: {
                  'accept': 'application/json',
                  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36'
          }});

          let productArray = response.body.products;
          let apiRespJson = { products: [] };

          let queryVals = [];
          if (req.query.gender) {
            queryVals.push(req.query.gender);
          }
          if (req.query.type) {
            queryVals.push(req.query.type);
          }

          for (let i=0; i<productArray.length; i ++) {
            if (queryVals.length == 2) {
              if (productArray[i].tags.includes(queryVals[0]) && productArray[i].tags.includes(queryVals[1])) {
                apiRespJson.products.push({ 
                  name: productArray[i].title,
                  link: "https://shopnicekicks.com/products/"+productArray[i].handle,
                  brand: productArray[i].vendor,
                  price: productArray[i].variants[0].price,
                  image: productArray[i].images[0].src.split("?")[0],
                  sizes: productArray[i].variants
                  });
                  
              }
            }
            if (queryVals.length == 1) {
              if (productArray[i].tags.includes(queryVals[0])) {
                apiRespJson.products.push({ 
                  name: productArray[i].title,
                  link: "https://shopnicekicks.com/products/"+productArray[i].handle,
                  brand: productArray[i].vendor,
                  price: productArray[i].variants[0].price,
                  image: productArray[i].images[0].src.split("?")[0],
                  sizes: productArray[i].variants
                  });
                  
              }
            }
          }
          res.json(apiRespJson);
      } catch (error) {
          res.json({ message: "Something went wrong" });
      }
    })();
});


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

