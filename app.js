#!/usr/bin/env node
const fs            = require('fs');
const slash         = require('slash');
const afs           = require('./afs.js');
const readXlsxFile  = require('read-excel-file/node');


/* komut satırının başlatıldığı dizini alalım */
const cliDizin = process.env.PWD;

/* bu uygulamanın yüklü olduğu dizin */
let appDizin = __dirname;
if(process.env.OS == "Windows_NT"){appDizin = slash(dir);}

let txtName           = process.argv[2];
let txtYol            = cliDizin + "/" + txtName;
let sutunArasiIsaret  = process.argv[3];
let secilenStunlar    = process.argv.splice(4,process.argv.length - 4);

/* dosya okumalarını asenkron yapacağız */
async function asenkronAkis(){

  let genelText = "";
  await readXlsxFile(txtName).then((rows) => {

    rows.forEach((item, ix) => {

      let altText = "";
      secilenStunlar.forEach((itemSutun, i) => {

        altText += secilenStunlar.length - 1 != i ? item[itemSutun - 1] + sutunArasiIsaret : item[itemSutun - 1];
        //console.log("satır  " + itemSutun, item[itemSutun - 1]);
      });

      genelText += rows.length - 1 != ix ? altText + "\n" : altText;

    });


    //console.log(genelText);

  });


  /* önemli not: her defasında altına ekleyerek gidiyor. */
  await afs.createFile('sonuc.txt', genelText);


}

asenkronAkis();
