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

/* varsayılar olarak , */
let sutunArasiIsaret  = ",";
let secilenStunlar    = [];
let groupBy           = 0;
let groupByArr        = [];
let yazDurum          = true;

/* girilen değerlerden ilk üçünü silelim */
process.argv.splice(0,3);



/* dosya okumalarını asenkron yapacağız */
async function asenkronAkis(){

  let genelText = "";

  let tamKomut    = process.argv.join('*');
  let altKomutlar = tamKomut.split("-").filter(item => item.length > 0);
  for await (let komut of altKomutlar) {
    let komutArr  = komut.split('*');


    /* komutlardan gelen ayarları burada düzene sokalım */
    if (komutArr[0] == "a") {
      /* ayraç belrlemek istiyor demektir. */

      sutunArasiIsaret = komutArr[1];
    }else if (komutArr[0] == "s") {
      /* sutun aralıklarını belirlemek istiyor demektir. */

      /* komutun ilk değerini silelim */
      komutArr.splice(0,1);

      secilenStunlar = [...komutArr.filter(item => item.length > 0)];
    }else if (komutArr[0] == "g") {
      /* gruplama yapmak istiyor demektir.*/
      groupBy = komutArr[1];


    }


  }


  console.log("exelName", txtName);
  console.log("sutun arası işaret", sutunArasiIsaret);
  console.log("seçilen sutunlar", secilenStunlar);



  await readXlsxFile(txtName).then((rows) => {

    rows.forEach((item, ix) => {

      let altText = "";
      secilenStunlar.forEach((itemSutun, i) => {

          altText += secilenStunlar.length - 1 != i ? item[itemSutun - 1] + sutunArasiIsaret : item[itemSutun - 1];

        //console.log("satır  " + itemSutun, item[itemSutun - 1]);
      });







      /* gruplandırmaya bakalım */
      if (groupBy) {
        let groupByText = item[groupBy - 1].trim();

        if (groupByArr.indexOf(groupByText) == -1) {
          /* daha önce eklenmemiş ise ekleyelim */
          groupByArr.push(groupByText);
        }else{
          yazDurum = false;
        }
      }


      



      if (yazDurum) {
        genelText += rows.length - 1 != ix ? altText + "\n" : altText;
      }

      yazDurum = true;
    });

    /*
    console.log(groupByArr);
    console.log("adet", groupByArr.length);
    */

    //console.log(genelText);
  });



  /* önemli not: her defasında altına ekleyerek gidiyor. */
  await afs.createFile('sonuc.txt', genelText);


}

asenkronAkis();
