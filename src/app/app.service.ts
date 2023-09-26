import { Injectable } from "@angular/core";

export class Sale {
  Année: string;

  trimestre: string;

  type: string;

  Sous_type: string;

  index: number;

  inflation: number;
}

const sales: Sale[] = [
  {
    Année: "2013",
    trimestre: "2ème trimestre 2013",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2013",
    trimestre: "2ème trimestre 2013",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2013",
    trimestre: "3ème trimestre 2013",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2013",
    trimestre: "3ème trimestre 2013",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2013",
    trimestre: "4ème trimestre 2013",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2013",
    trimestre: "4ème trimestre 2013",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2014",
    trimestre: "1er trimestre 2014",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2014",
    trimestre: "1er trimestre 2014",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2014",
    trimestre: "2ème trimestre 2014",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2014",
    trimestre: "2ème trimestre 2014",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2014",
    trimestre: "3ème trimestre 2014",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2014",
    trimestre: "3ème trimestre 2014",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2014",
    trimestre: "4ème trimestre 2014",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2014",
    trimestre: "4ème trimestre 2014",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2015",
    trimestre: "1er trimestre 2015",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2015",
    trimestre: "1er trimestre 2015",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2015",
    trimestre: "2ème trimestre 2015",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2015",
    trimestre: "2ème trimestre 2015",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2015",
    trimestre: "3ème trimestre 2015",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2005",
    trimestre: "4ème trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 69.74669381002893,
    inflation: null
  },
  {
    Année: "2015",
    trimestre: "4ème trimestre 2015",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2015",
    trimestre: "4ème trimestre 2015",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2016",
    trimestre: "1er trimestre 2016",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2016",
    trimestre: "1er trimestre 2016",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2016",
    trimestre: "2ème trimestre 2016",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2016",
    trimestre: "2ème trimestre 2016",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2016",
    trimestre: "3ème trimestre 2016",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2016",
    trimestre: "3ème trimestre 2016",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2016",
    trimestre: "4ème trimestre 2016",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2016",
    trimestre: "4ème trimestre 2016",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2017",
    trimestre: "1er trimestre 2017",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2017",
    trimestre: "1er trimestre 2017",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2017",
    trimestre: "2ème trimestre 2017",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2017",
    trimestre: "2ème trimestre 2017",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2017",
    trimestre: "3ème trimestre 2017",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2017",
    trimestre: "3ème trimestre 2017",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2017",
    trimestre: "4ème trimestre 2017",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2017",
    trimestre: "4ème trimestre 2017",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2018",
    trimestre: "1er trimestre 2018",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2018",
    trimestre: "1er trimestre 2018",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2018",
    trimestre: "2ème trimestre 2018",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2018",
    trimestre: "2ème trimestre 2018",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2018",
    trimestre: "3ème trimestre 2018",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2018",
    trimestre: "3ème trimestre 2018",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2018",
    trimestre: "4ème trimestre 2018",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2018",
    trimestre: "4ème trimestre 2018",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2019",
    trimestre: "1er trimestre 2019",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2019",
    trimestre: "1er trimestre 2019",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2019",
    trimestre: "2ème trimestre 2019",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2019",
    trimestre: "2ème trimestre 2019",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2019",
    trimestre: "3ème trimestre 2019",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2019",
    trimestre: "3ème trimestre 2019",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2019",
    trimestre: "4ème trimestre 2019",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2019",
    trimestre: "4ème trimestre 2019",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2020",
    trimestre: "1er trimestre 2020",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2020",
    trimestre: "1er trimestre 2020",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2020",
    trimestre: "2ème trimestre 2020",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2020",
    trimestre: "2ème trimestre 2020",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2020",
    trimestre: "3ème trimestre 2020",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2020",
    trimestre: "3ème trimestre 2020",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2020",
    trimestre: "4ème trimestre 2020",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2020",
    trimestre: "4ème trimestre 2020",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2021",
    trimestre: "1er trimestre 2021",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2021",
    trimestre: "1er trimestre 2021",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2021",
    trimestre: "2ème trimestre 2021",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2021",
    trimestre: "2ème trimestre 2021",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2021",
    trimestre: "3ème trimestre 2021",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2021",
    trimestre: "3ème trimestre 2021",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2021",
    trimestre: "4ème trimestre 2021",
    type: "Achat de nouveaux logements",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2021",
    trimestre: "4ème trimestre 2021",
    type: "Achat de logements existants",
    Sous_type: null,
    index: 0.0,
    inflation: 0.0
  },
  {
    Année: "2005",
    trimestre: "1er trimestre 2005",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 79.73539794272905,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "1er trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 66.26894009546288,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "1er trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 62.50037834513313,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "1er trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 73.31882944209632,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "2ème trimestre 2005",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 79.91167959831543,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "2ème trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 68.47965171608085,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "2ème trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 64.09747880465557,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "2ème trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 75.1118357829026,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "3ème trimestre 2005",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 80.1039868589551,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "3ème trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 71.90171432639067,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "3ème trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 66.75356519102282,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "3ème trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 78.80052251464157,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "4ème trimestre 2005",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 80.75302386361402,
    inflation: null
  },
  {
    Année: "2005",
    trimestre: "4ème trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 73.41944503431658,
    inflation: null
  },
  {
    Année: "2009",
    trimestre: "3ème trimestre 2009",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 89.40685059239982,
    inflation: -0.005348546978070967
  },
  {
    Année: "2005",
    trimestre: "4ème trimestre 2005",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 79.55590523911955,
    inflation: null
  },
  {
    Année: "2006",
    trimestre: "1er trimestre 2006",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 82.16327710830504,
    inflation: 0.03044920108531768
  },
  {
    Année: "2006",
    trimestre: "1er trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 75.25577256411387,
    inflation: 0.13561153167238116
  },
  {
    Année: "2006",
    trimestre: "1er trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 70.96344643418406,
    inflation: 0.13540826972785758
  },
  {
    Année: "2006",
    trimestre: "1er trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 79.98694355944814,
    inflation: 0.09094681636479174
  },
  {
    Année: "2006",
    trimestre: "2ème trimestre 2006",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 83.95814487427543,
    inflation: 0.05063671914168233
  },
  {
    Année: "2006",
    trimestre: "2ème trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 77.46307848200948,
    inflation: 0.1311838851513767
  },
  {
    Année: "2006",
    trimestre: "2ème trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 72.52298669846226,
    inflation: 0.13144835102616748
  },
  {
    Année: "2006",
    trimestre: "2ème trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 83.00617513123508,
    inflation: 0.10510113707178803
  },
  {
    Année: "2006",
    trimestre: "3ème trimestre 2006",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 84.7754507319941,
    inflation: 0.05831749524857477
  },
  {
    Année: "2006",
    trimestre: "3ème trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 80.01584197637865,
    inflation: 0.11285026686783439
  },
  {
    Année: "2006",
    trimestre: "3ème trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 75.9561079339553,
    inflation: 0.13785844571145178
  },
  {
    Année: "2006",
    trimestre: "3ème trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 85.82552369268898,
    inflation: 0.08914917000381717
  },
  {
    Année: "2006",
    trimestre: "4ème trimestre 2006",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 85.26423168611996,
    inflation: 0.05586425878150436
  },
  {
    Année: "2006",
    trimestre: "4ème trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 81.04158448259591,
    inflation: 0.10381635879591178
  },
  {
    Année: "2006",
    trimestre: "4ème trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 76.52514545498656,
    inflation: 0.09718670914237593
  },
  {
    Année: "2006",
    trimestre: "4ème trimestre 2006",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 85.24861708558036,
    inflation: 0.07155611930189654
  },
  {
    Année: "2007",
    trimestre: "1er trimestre 2007",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 87.02704824198375,
    inflation: 0.05919641115662211
  },
  {
    Année: "2007",
    trimestre: "1er trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 83.13324797436215,
    inflation: 0.10467602871975168
  },
  {
    Année: "2007",
    trimestre: "1er trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 77.68802147874501,
    inflation: 0.09476111128280307
  },
  {
    Année: "2007",
    trimestre: "1er trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 87.99229418556949,
    inflation: 0.10008321695867273
  },
  {
    Année: "2007",
    trimestre: "2ème trimestre 2007",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 87.94050773002225,
    inflation: 0.04743271616720768
  },
  {
    Année: "2007",
    trimestre: "2ème trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 85.29044577997384,
    inflation: 0.10104642690881738
  },
  {
    Année: "2007",
    trimestre: "2ème trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 79.91183907060716,
    inflation: 0.10188290235296615
  },
  {
    Année: "2007",
    trimestre: "2ème trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 88.58575614665847,
    inflation: 0.0672188666277167
  },
  {
    Année: "2007",
    trimestre: "3ème trimestre 2007",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 88.19691741087514,
    inflation: 0.04035916824196595
  },
  {
    Année: "2007",
    trimestre: "3ème trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 87.52975561335916,
    inflation: 0.09390532488802239
  },
  {
    Année: "2007",
    trimestre: "3ème trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 80.55143499235952,
    inflation: 0.06049976997768125
  },
  {
    Année: "2007",
    trimestre: "3ème trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 92.09461735739382,
    inflation: 0.0730446304895529
  },
  {
    Année: "2007",
    trimestre: "4ème trimestre 2007",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 88.01262295276211,
    inflation: 0.032233812611596635
  },
  {
    Année: "2007",
    trimestre: "4ème trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 87.88394661619105,
    inflation: 0.08443026104782758
  },
  {
    Année: "2007",
    trimestre: "4ème trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 81.92263292419031,
    inflation: 0.07053220790516046
  },
  {
    Année: "2007",
    trimestre: "4ème trimestre 2007",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 92.04345920541466,
    inflation: 0.07970618588466971
  },
  {
    Année: "2008",
    trimestre: "1er trimestre 2008",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 88.91005683574728,
    inflation: 0.02163704999539595
  },
  {
    Année: "2008",
    trimestre: "1er trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 88.5325278637765,
    inflation: 0.06494729871590543
  },
  {
    Année: "2008",
    trimestre: "1er trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 82.04917831729418,
    inflation: 0.0561367988981718
  },
  {
    Année: "2008",
    trimestre: "1er trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 94.5332544966114,
    inflation: 0.07433560372056558
  },
  {
    Année: "2008",
    trimestre: "2ème trimestre 2008",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 90.07191320211206,
    inflation: 0.02423690205011364
  },
  {
    Année: "2008",
    trimestre: "2ème trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 90.45007828818478,
    inflation: 0.060494847471209034
  },
  {
    Année: "2008",
    trimestre: "2ème trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 82.38916440230898,
    inflation: 0.031000729810672256
  },
  {
    Année: "2008",
    trimestre: "2ème trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 94.8101850521353,
    inflation: 0.07026444403964849
  },
  {
    Année: "2008",
    trimestre: "3ème trimestre 2008",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 89.88761874399903,
    inflation: 0.019169619333151644
  },
  {
    Année: "2008",
    trimestre: "3ème trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 92.75659854424657,
    inflation: 0.05971504083680634
  },
  {
    Année: "2008",
    trimestre: "3ème trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 84.21282602711717,
    inflation: 0.045454075834961305
  },
  {
    Année: "2008",
    trimestre: "3ème trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 95.21832491747494,
    inflation: 0.033918459620271735
  },
  {
    Année: "2008",
    trimestre: "4ème trimestre 2008",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 91.02543670278382,
    inflation: 0.03423160961398386
  },
  {
    Année: "2008",
    trimestre: "4ème trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 91.3997350571607,
    inflation: 0.04000489937398788
  },
  {
    Année: "2008",
    trimestre: "4ème trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 83.97697085424187,
    inflation: 0.025076561344806958
  },
  {
    Année: "2008",
    trimestre: "4ème trimestre 2008",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 93.43062143494963,
    inflation: 0.015070731168840723
  },
  {
    Année: "2009",
    trimestre: "1er trimestre 2009",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 89.8555675338924,
    inflation: 0.010634462869502537
  },
  {
    Année: "2009",
    trimestre: "1er trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 90.07786306518351,
    inflation: 0.017454999181597985
  },
  {
    Année: "2009",
    trimestre: "1er trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 83.13986204504457,
    inflation: 0.013293048755864234
  },
  {
    Année: "2009",
    trimestre: "1er trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 92.33384272531758,
    inflation: -0.023266011341783077
  },
  {
    Année: "2009",
    trimestre: "2ème trimestre 2009",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 88.74178798268757,
    inflation: -0.014767369451116563
  },
  {
    Année: "2009",
    trimestre: "2ème trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 89.23582932278654,
    inflation: -0.01342452088907542
  },
  {
    Année: "2009",
    trimestre: "2ème trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 83.04291584425829,
    inflation: 0.007934920164465176
  },
  {
    Année: "2009",
    trimestre: "2ème trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 90.94205996358464,
    inflation: -0.04079862397086986
  },
  {
    Année: "2013",
    trimestre: "1er trimestre 2013",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 95.22025711387349,
    inflation: 0.008953565743155867
  },
  {
    Année: "2009",
    trimestre: "3ème trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 91.87106727930315,
    inflation: -0.0095468277065055
  },
  {
    Année: "2009",
    trimestre: "3ème trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 85.01860808974399,
    inflation: 0.009568400689550005
  },
  {
    Année: "2009",
    trimestre: "3ème trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 94.32523953781543,
    inflation: -0.009379343529027029
  },
  {
    Année: "2009",
    trimestre: "4ème trimestre 2009",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 88.02864855781539,
    inflation: -0.03292253521126787
  },
  {
    Année: "2009",
    trimestre: "4ème trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 91.68179880189349,
    inflation: 0.003086045540027005
  },
  {
    Année: "2009",
    trimestre: "4ème trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 84.74025602952389,
    inflation: 0.009089220145923615
  },
  {
    Année: "2009",
    trimestre: "4ème trimestre 2009",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 91.36425913427593,
    inflation: -0.022116542402668138
  },
  {
    Année: "2010",
    trimestre: "1er trimestre 2010",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 88.46133989425469,
    inflation: -0.015516318887105363
  },
  {
    Année: "2010",
    trimestre: "1er trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 92.44044872331266,
    inflation: 0.02622826050413174
  },
  {
    Année: "2010",
    trimestre: "1er trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 86.1299654172811,
    inflation: 0.035964738197623136
  },
  {
    Année: "2010",
    trimestre: "1er trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 93.82162314447508,
    inflation: 0.016113056440025808
  },
  {
    Année: "2010",
    trimestre: "2ème trimestre 2010",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 88.82992881048077,
    inflation: 9.932279909707908e-4
  },
  {
    Année: "2010",
    trimestre: "2ème trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 93.41569598738567,
    inflation: 0.046840677072430115
  },
  {
    Année: "2010",
    trimestre: "2ème trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 86.90208204598817,
    inflation: 0.046471949623824615
  },
  {
    Année: "2010",
    trimestre: "2ème trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 95.29528980702291,
    inflation: 0.047868168427033675
  },
  {
    Année: "2010",
    trimestre: "3ème trimestre 2010",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 88.98217205853123,
    inflation: -0.004749955188609323
  },
  {
    Année: "2010",
    trimestre: "3ème trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 96.24737160620347,
    inflation: 0.04763528340860179
  },
  {
    Année: "2010",
    trimestre: "3ème trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 88.70622263806861,
    inflation: 0.04337420514379686
  },
  {
    Année: "2010",
    trimestre: "3ème trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 96.7203342382497,
    inflation: 0.025391875092711125
  },
  {
    Année: "2010",
    trimestre: "4ème trimestre 2010",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 89.69531148335932,
    inflation: 0.018933187693428
  },
  {
    Année: "2010",
    trimestre: "4ème trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 96.29932049283256,
    inflation: 0.05036464981360833
  },
  {
    Année: "2010",
    trimestre: "4ème trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 89.34667777526563,
    inflation: 0.05435930880521345
  },
  {
    Année: "2010",
    trimestre: "4ème trimestre 2010",
    type: "Achat de logements existants",
    Sous_type: "Achat de villas",
    index: 98.55399579151685,
    inflation: 0.07869309865112939
  },
  {
    Année: "2011",
    trimestre: "1er trimestre 2011",
    type: "Achat de nouveaux logements",
    Sous_type: "Achat de nouveaux logements",
    index: 91.61037128722951,
    inflation: 0.0355978260869565
  },
  {
    Année: "2011",
    trimestre: "1er trimestre 2011",
    type: "Achat de logements existants",
    Sous_type: "Achat de maisons",
    index: 96.75592346417413,
    inflation: 0.04668383592314984
  },
  {
    Année: "2011",
    trimestre: "1er trimestre 2011",
    type: "Achat de logements existants",
    Sous_type: "Achat d’appartements",
    index: 89.65772153243127,
    inflation: 0.04095852236859665
  }
];

@Injectable()
export class Service {
  getSales() {
    return sales;
  }
}
