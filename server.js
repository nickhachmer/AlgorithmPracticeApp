const fs = require('fs');
const Papa = require('papaparse');
const express = require('express');
const app = express();
const port = 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const csvFilePath = 'src/assets/AlgoPractice.csv';

app.get('/api/algo', (req, res) => {
  let fileData = fs.readFileSync(csvFilePath, 'utf-8');
  Papa.parse(fileData, {
    header: true,
    complete: (results) => {
      let data = results.data
        .filter(x => x && x.number != '')
        .map(x => {
          return {
            number: parseInt(x.number),
            difficulty: x.difficulty,
            name: x.name,
            link: x.link,
            geeksforGeeks: x.geeksforgeeks,
            tags: x.tags,
            algorithms: x.algorithms,
            description: x.description,
          }
        });
      res.json(data);
      
      console.log('Complete', data.length, 'records.');
    }
  }) 
});

app.post('/api/algo', (req, res) => {
  let csv = Papa.unparse(req.body);
  fs.writeFileSync(csvFilePath, csv);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});