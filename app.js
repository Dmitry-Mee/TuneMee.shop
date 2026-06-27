(function () {
  "use strict";

  /* ==================== ДАННЫЕ КАТАЛОГА ==================== */

  var PRODUCTS = [
    // BMW
    { id: "DP-BMW-B48", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW B48 (G-серия)", compat: "BMW 1/2/3/4/5/6/7 серий с двигателем B48, кузова G-серии", engine: "B48", prices: { base: 45000, hs: 55000, cat6_120: 115000 }, catLabel: { hs: "+Heatshield", cat6_120: "+Heatshield +CAT евро6 200cell 120мм" } },
    { id: "DP-BMW-B46D", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW B46D (G-серия)", compat: "BMW с двигателем B46D, кузова G-серии", engine: "B46D", prices: { base: 50000, hs: 60000, cat5_113: 105000, cat6_120: 120000 }, catLabel: { hs: "+Heatshield", cat5_113: "+CAT евро5+ 300cell 113мм", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "DP-BMW-B58", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW B58 (G-серия)", compat: "BMW 3/4/5/6/7/8 серий с двигателем B58, кузова G-серии", engine: "B58", prices: { base: 50000, hs: 65000, cat5_113: 110000, cat6_120: 125000 }, catLabel: { hs: "+Heatshield", cat5_113: "+CAT евро5+ 300cell 113мм", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "DP-BMW-B58-OPF", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW B58 OPF v-band (G-серия)", compat: "BMW с двигателем B58 и фильтром частиц OPF, кузова G-серии", engine: "B58 OPF", prices: { base: 55000, hs: 70000, cat5_113: 115000, cat6_120: 130000 }, catLabel: { hs: "+Heatshield", cat5_113: "+CAT евро5+ 300cell 113мм", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "DP-BMW-M3M4", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW M3/M4 (G80–G83)", compat: "BMW M3 G80/G81, M4 G82/G83, двигатель S58", engine: "S58", prices: { base: 70000, hs: 94000, cat6_120: 214000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "DP-BMW-M2G87", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW M2 (G87) S58", compat: "BMW M2 G87, двигатель S58", engine: "S58", prices: { base: 70000, hs: 94000, cat6_120: 214000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "DP-BMW-M5F90", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW M5 F90 / M8 F92 non OPF", compat: "BMW M5 F90, M8 F91/F92/F93, двигатель S63, без OPF", engine: "S63", prices: { base: 55000, hs: 70000, cat6_130: 210000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "MP-BMW-M5F90", brand: "BMW", type: "Мидпайп", title: "Midpipe BMW M5 F90 / M8 F92 non OPF", compat: "BMW M5 F90, M8 F91/F92/F93, двигатель S63, без OPF", engine: "S63", prices: { base: 75000, hs: 85000 }, catLabel: { hs: "+Heatshield" } },
    { id: "KIT-BMW-M5F90", brand: "BMW", type: "Комплект DP+MP", title: "Downpipe × Midpipe BMW M5 F90 / M8 F92 non OPF", compat: "BMW M5 F90, M8 F91/F92/F93, двигатель S63, без OPF", engine: "S63", prices: { base: 125000, hs: 150000, cat6_130: 290000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "DP-BMW-M5G90", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW M5 (G90)", compat: "BMW M5 G90, двигатель S68", engine: "S68", prices: { base: 95000, hs: 120000, cat6_130: 260000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "MP-BMW-M5G90", brand: "BMW", type: "Мидпайп", title: "Midpipe BMW M5 (G90)", compat: "BMW M5 G90, двигатель S68", engine: "S68", prices: { base: 60000, hs: 65000 }, catLabel: { hs: "+Heatshield" } },
    { id: "KIT-BMW-M5G90", brand: "BMW", type: "Комплект DP+MP", title: "Downpipe × Midpipe BMW M5 (G90)", compat: "BMW M5 G90, двигатель S68", engine: "S68", prices: { base: 150000, hs: 180000, cat6_130: 320000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "DP-BMW-X3MF97", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW X3M F97 / X4M F98", compat: "BMW X3M F97, X4M F98, двигатель S58", engine: "S58", prices: { base: 73000, hs: 97000 }, catLabel: { hs: "+Heatshield" } },
    { id: "DP-BMW-X3M-LCI", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW X3M / X4M F97/F98 Restyling LCI", compat: "BMW X3M F97, X4M F98 после рестайлинга (LCI), двигатель S58", engine: "S58", prices: { base: 70000, hs: 94000, cat6_120: 214000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "DP-BMW-X5MF95", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW X5M F95 / X6M F96", compat: "BMW X5M F95, X6M F96, двигатель S63", engine: "S63", prices: { base: 55000, hs: 70000, cat6_130: 210000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "MP-BMW-X5MF95", brand: "BMW", type: "Мидпайп", title: "Midpipe BMW X5M F95 / X6M F96", compat: "BMW X5M F95, X6M F96, двигатель S63", engine: "S63", prices: { base: 75000, hs: 85000 }, catLabel: { hs: "+Heatshield" } },
    { id: "KIT-BMW-X5MF95", brand: "BMW", type: "Комплект DP+MP", title: "Downpipe × Midpipe BMW X5M F95 / X6M F96", compat: "BMW X5M F95, X6M F96, двигатель S63", engine: "S63", prices: { base: 125000, hs: 150000, cat6_130: 290000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "DP-BMW-XM-LCI", brand: "BMW", type: "Даунпайп", title: "Downpipe BMW XM / X5M–X6M LCI / X7 G07", compat: "BMW XM, X5M/X6M F95-96 LCI, X7 G07, двигатель S68", engine: "S68", prices: { base: 95000, hs: 120000, cat6_130: 260000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "MP-BMW-XM-LCI", brand: "BMW", type: "Мидпайп", title: "Midpipe BMW XM / X5M–X6M LCI / X7 G07", compat: "BMW XM, X5M/X6M F95-96 LCI, X7 G07, двигатель S68", engine: "S68", prices: { base: 60000, hs: 65000 }, catLabel: { hs: "+Heatshield" } },
    { id: "KIT-BMW-XM-LCI", brand: "BMW", type: "Комплект DP+MP", title: "Downpipe × Midpipe BMW XM / X5M–X6M LCI / X7 G07", compat: "BMW XM, X5M/X6M F95-96 LCI, X7 G07, двигатель S68", engine: "S68", prices: { base: 150000, hs: 180000, cat6_130: 320000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    // PORSCHE
    { id: "DP-POR-911T-992", brand: "Porsche", type: "Даунпайп", title: "Downpipe Porsche 911 Turbo / Turbo S (992)", compat: "Porsche 911 Turbo, Turbo S, поколение 992, двигатель 3.8T", engine: "3.8T", prices: { base: 100000, hs: 125000, cat6_130: 260000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "DP-POR-911C-992", brand: "Porsche", type: "Даунпайп", title: "Downpipe Porsche 911 Carrera / Carrera 4S (992)", compat: "Porsche 911 Carrera, Carrera 4S, поколение 992, двигатель 3.0T", engine: "3.0T", prices: { base: 100000, hs: 125000, cat6_130: 260000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "EX-POR-911-992-TI", brand: "Porsche", type: "Полная система", title: "Exhaust System Porsche 911 (992) Titanium", compat: "Porsche 911, поколение 992, полная система из титана", engine: "", prices: { base: 450000, hs: 485000, cat6_130: 620000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "COL-POR-911T-992", brand: "Porsche", type: "Коллектор", title: "Коллектор Porsche 911 Turbo / Turbo S (992)", compat: "Porsche 911 Turbo, Turbo S, поколение 992", engine: "3.8T", prices: { hs: 355000 }, catLabel: { hs: "Стандарт" } },
    { id: "DP-POR-CAY-E3-30", brand: "Porsche", type: "Даунпайп", title: "Downpipe Porsche Cayenne E3 3.0 TFSI", compat: "Porsche Cayenne E3, двигатель 3.0 TFSI", engine: "3.0 TFSI", prices: { base: 70000, hs: 80000, cat6_120: 140000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "DP-POR-CAY-E3-40T", brand: "Porsche", type: "Даунпайп", title: "Downpipe Porsche Cayenne E3 Turbo / GTS 4.0 TFSI", compat: "Porsche Cayenne E3 Turbo, GTS, двигатель 4.0 TFSI", engine: "4.0 TFSI", prices: { base: 130000, hs: 150000, cat6_120: 270000, cat6_130: 285000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "DP-POR-CAY-E3-29S", brand: "Porsche", type: "Даунпайп", title: "Downpipe Porsche Cayenne E3 S / Coupe S 2.9 TFSI", compat: "Porsche Cayenne E3 S, Coupe S, двигатель 2.9 TFSI", engine: "2.9 TFSI", prices: { base: 120000, hs: 140000, cat6_120: 260000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "DP-POR-PAN-T971", brand: "Porsche", type: "Даунпайп", title: "Downpipe Porsche Panamera Turbo / GTS (971/976) TFSI", compat: "Porsche Panamera Turbo, GTS, поколения 971 и 976", engine: "4.0 TFSI", prices: { base: 70000, hs: 85000, cat6_120: 205000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "MP-POR-PAN-T971", brand: "Porsche", type: "Мидпайп", title: "Midpipe Porsche Panamera Turbo (971) 4.0 TFSI", compat: "Porsche Panamera Turbo, поколение 971, двигатель 4.0 TFSI", engine: "4.0 TFSI", prices: { base: 125000, hs: 130000 }, catLabel: { hs: "+Heatshield" } },
    { id: "KIT-POR-PAN-T971", brand: "Porsche", type: "Комплект DP+MP", title: "Downpipe × Midpipe Porsche Panamera Turbo (971) 4.0 TFSI", compat: "Porsche Panamera Turbo, поколение 971, двигатель 4.0 TFSI", engine: "4.0 TFSI", prices: { base: 195000, hs: 215000, cat6_120: 335000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" } },
    // LAMBORGHINI
    { id: "DP-LAM-URUS", brand: "Lamborghini", type: "Даунпайп", title: "Downpipe Lamborghini Urus (I поколение)", compat: "Lamborghini Urus, первое поколение, двигатель 4.0 biturbo", engine: "4.0T", prices: { base: 130000, hs: 150000, cat6_120: 270000, cat6_130: 285000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм", cat6_130: "+CAT евро6 200cell 130мм" } },
    // AUDI
    { id: "DP-AUD-RS6C8", brand: "Audi", type: "Даунпайп", title: "Downpipe Audi RS6 / RS7 (C8) / A8 / S8 (D5)", compat: "Audi RS6 C8, RS7 C8, A8 D5, S8 D5, двигатель 4.0 TFSI", engine: "4.0 TFSI", prices: { base: 130000, hs: 150000, cat6_120: 270000, cat6_130: 285000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "DP-AUD-Q7", brand: "Audi", type: "Даунпайп", title: "Downpipe Audi Q7 (4M) / Q8 (I)", compat: "Audi Q7 4M, Q8 первое поколение, двигатель 3.0 TFSI", engine: "3.0 TFSI", prices: { base: 70000, hs: 80000, cat6_130: 140000 }, catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "DP-AUD-RSQ8", brand: "Audi", type: "Даунпайп", title: "Downpipe Audi RSQ8 (I) / SQ7 (4M) / SQ8 (I)", compat: "Audi RSQ8 I, SQ7 4M, SQ8 I, двигатель 4.0 TFSI", engine: "4.0 TFSI", prices: { base: 130000, hs: 150000, cat6_120: 270000, cat6_130: 285000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм", cat6_130: "+CAT евро6 200cell 130мм" } },
    { id: "DP-AUD-RS4B9-OPF", brand: "Audi", type: "Даунпайп", title: "Downpipe Audi RS4 B9 / RS5 F5 OPF", compat: "Audi RS4 B9, RS5 F5 с фильтром частиц OPF, двигатель 2.9 TFSI", engine: "2.9 TFSI", prices: { base: 90000, hs: 110000, cat6_120: 230000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "DP-AUD-RS4B9-NOPF", brand: "Audi", type: "Даунпайп", title: "Downpipe Audi RS4 B9 / RS5 F5 non OPF", compat: "Audi RS4 B9, RS5 F5 без фильтра частиц, двигатель 2.9 TFSI", engine: "2.9 TFSI", prices: { base: 80000, hs: 100000, cat6_120: 220000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "DP-AUD-RS3-8V", brand: "Audi", type: "Даунпайп", title: "Downpipe Audi RS3 (8V.2) / (8Y)", compat: "Audi RS3 8V.2 и 8Y, двигатель 2.5 TFSI", engine: "2.5 TFSI", prices: { base: 85000, hs: 105000, cat5_100: 185000 }, catLabel: { hs: "+Heatshield", cat5_100: "+CAT евро5 300cell 100мм (2 катализатора)" } },
    { id: "DP-AUD-RSQ3-F3", brand: "Audi", type: "Даунпайп", title: "Downpipe Audi RSQ3 (F3)", compat: "Audi RSQ3 F3, двигатель 2.5 TFSI", engine: "2.5 TFSI", prices: { base: 85000, hs: 105000, cat5_100: 185000 }, catLabel: { hs: "+Heatshield", cat5_100: "+CAT евро5 300cell 100мм (2 катализатора)" } },
    { id: "DP-AUD-TTRS-8S", brand: "Audi", type: "Даунпайп", title: "Downpipe Audi TT RS III (8S)", compat: "Audi TT RS третьего поколения 8S, двигатель 2.5 TFSI", engine: "2.5 TFSI", prices: { base: 85000, hs: 105000, cat5_100: 185000 }, catLabel: { hs: "+Heatshield", cat5_100: "+CAT евро5 300cell 100мм (2 катализатора)" } },
    { id: "TP-AUD-A6C7", brand: "Audi", type: "Тестпайп", title: "Testpipe Audi A6 / A7 (C7) с пламегасителем", compat: "Audi A6 C7, A7 C7", engine: "", prices: { base: 50000 }, catLabel: {} },
    // TOYOTA
    { id: "DP-TOY-SUPRA-A90", brand: "Toyota", type: "Даунпайп", title: "Downpipe Toyota Supra A90 (BMW B58)", compat: "Toyota GR Supra A90, двигатель BMW B58", engine: "B58", prices: { base: 55000, hs: 70000, cat6_120: 130000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "DP-TOY-GRY", brand: "Toyota", type: "Даунпайп", title: "Downpipe Toyota GR Yaris / Corolla 1.6 gen 2", compat: "Toyota GR Yaris, GR Corolla, двигатель G16E-GTS 1.6T, второе поколение", engine: "G16E 1.6T", prices: { base: 60000, hs: 70000, cat6_120: 130000 }, catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" } },
    { id: "MP-TOY-GRY-AKR", brand: "Toyota", type: "Мидпайп", title: "Midpipe Toyota GR Yaris 1.6 gen 2 (под Akrapovic)", compat: "Toyota GR Yaris, двигатель G16E-GTS 1.6T, под выхлоп Akrapovic", engine: "G16E 1.6T", prices: { base: 75000, cat6_120: 135000 }, catLabel: { cat6_120: "+CAT евро6 200cell 120мм" } }
  ];

  /* ==================== ТАБЛИЦА ЦЕН ГЛУШИТЕЛЕЙ ==================== */

  // Круглый глушитель (базовая длина 200мм, +700 каждые 50мм)
  var ROUND_PRICES = {
    "100": { steel_flow: 6300, steel_chamber: 8300, steel_res: null, steel_res_cam: null, titan_flow: null, titan_chamber: null },
    "110": { steel_flow: 7400, steel_chamber: 9400, steel_res: 7770, steel_res_cam: 9870, titan_flow: 14800, titan_chamber: 18800 },
    "120": { steel_flow: 7400, steel_chamber: 9400, steel_res: 7770, steel_res_cam: 9870, titan_flow: 14800, titan_chamber: 18800 },
    "150": { steel_flow: 10000, steel_chamber: 12000, steel_res: 10500, steel_res_cam: 12600, titan_flow: 20000, titan_chamber: 24000 },
    "170": { steel_flow: 11300, steel_chamber: 13400, steel_res: 11865, steel_res_cam: 14070, titan_flow: 22600, titan_chamber: 26800 }
  };

  // Овальный глушитель — цены по типу, размеру, материалу/исполнению
  // Базовая длина 250мм если не указано иное, надбавка +700 или +800 за 50мм
  var OVAL_PRICES = {
    "CC": {
      "110x172": { steel_flow: 10700, steel_chamber: 12900, titan_flow: 21400, titan_chamber: 25800, steel_res: 11235, steel_res_cam: 13545 },
      "130x190": { steel_flow: 16100, steel_chamber: 18100, titan_flow: 32200, titan_chamber: 36200, steel_res: 16905, steel_res_cam: 19005 },
      "120x265": { steel_flow: 18100, steel_chamber: 20100, titan_flow: 36200, titan_chamber: 40200, steel_res: 19005, steel_res_cam: 21105 },
      "150x300": { steel_flow: 18100, steel_chamber: 20100, titan_flow: 36200, titan_chamber: 40200, steel_res: 19005, steel_res_cam: 21105 }
    },
    "0I": {
      "130x190": { steel_flow: 16100, steel_chamber: 18100, titan_flow: 32200, titan_chamber: 36200, steel_res: 16905, steel_res_cam: 19005 },
      "120x265": { steel_flow: 18100, steel_chamber: 20100, titan_flow: 36200, titan_chamber: 40200, steel_res: 19005, steel_res_cam: 21105 },
      "150x300": { steel_flow: 18100, steel_chamber: 20100, titan_flow: 36200, titan_chamber: 40200, steel_res: 19005, steel_res_cam: 21105 }
    },
    "H": {
      "130x190": { steel_flow: 23300, steel_chamber: 26100, titan_flow: 46600, titan_chamber: 52200, steel_res: 24465, steel_res_cam: 27405 },
      "120x265": { steel_flow: 25400, steel_chamber: 28300, titan_flow: 50800, titan_chamber: 56600, steel_res: 26670, steel_res_cam: 29715 },
      "150x300": { steel_flow: 25400, steel_chamber: 28300, titan_flow: 50800, titan_chamber: 56600, steel_res: 26670, steel_res_cam: 29715 }
    },
    "COFF": {
      "130x190": { steel_flow: 16100, steel_chamber: 18100, titan_flow: 32200, titan_chamber: 36200, steel_res: 16905, steel_res_cam: 19005 },
      "120x265": { steel_flow: 18100, steel_chamber: 20100, titan_flow: 36200, titan_chamber: 40200, steel_res: 19005, steel_res_cam: 21105 },
      "150x300": { steel_flow: 18100, steel_chamber: 20100, titan_flow: 36200, titan_chamber: 40200, steel_res: 19005, steel_res_cam: 21105 }
    },
    "OFFOFF": {
      "130x190": { steel_flow: 16100, steel_chamber: 18100, titan_flow: 32200, titan_chamber: 36200, steel_res: 16905, steel_res_cam: 19005 },
      "120x265": { steel_flow: 18100, steel_chamber: 20100, titan_flow: 36200, titan_chamber: 40200, steel_res: 19005, steel_res_cam: 21105 },
      "150x300": { steel_flow: 18100, steel_chamber: 20100, titan_flow: 36200, titan_chamber: 40200, steel_res: 19005, steel_res_cam: 21105 }
    },
    "U": {
      "130x190": { steel_flow: 23600, steel_chamber: 20900, titan_flow: 47200, titan_chamber: 41800, steel_res: null, steel_res_cam: null },
      "120x265": { steel_flow: 25700, steel_chamber: 23000, titan_flow: 51400, titan_chamber: 46000, steel_res: null, steel_res_cam: null },
      "150x300": { steel_flow: 25700, steel_chamber: 23000, titan_flow: 51400, titan_chamber: 46000, steel_res: null, steel_res_cam: null }
    },
    "h": {
      "130x190": { steel_flow: 26300, steel_chamber: 21000, titan_flow: 52600, titan_chamber: 42000, steel_res: 27615, steel_res_cam: 22050 },
      "120x265": { steel_flow: 27300, steel_chamber: 24300, titan_flow: 54600, titan_chamber: 48600, steel_res: 28665, steel_res_cam: 25515 },
      "150x300": { steel_flow: 27300, steel_chamber: 24300, titan_flow: 54600, titan_chamber: 48600, steel_res: 28665, steel_res_cam: 25515 }
    },
    "F": {
      "130x190": { steel_flow: 26100, steel_chamber: 27000, titan_flow: 52200, titan_chamber: 54000, steel_res: null, steel_res_cam: null },
      "120x265": { steel_flow: 29100, steel_chamber: 30300, titan_flow: 58200, titan_chamber: 60600, steel_res: null, steel_res_cam: null },
      "150x300": { steel_flow: 29100, steel_chamber: 30300, titan_flow: 58200, titan_chamber: 60600, steel_res: null, steel_res_cam: null }
    },
    "L": {
      "130x190": { steel_flow: 27300, steel_chamber: 25000, titan_flow: 54600, titan_chamber: 50000, steel_res: null, steel_res_cam: null },
      "120x265": { steel_flow: 28300, steel_chamber: 26000, titan_flow: 56600, titan_chamber: 52000, steel_res: null, steel_res_cam: null },
      "150x300": { steel_flow: 28300, steel_chamber: 26000, titan_flow: 56600, titan_chamber: 52000, steel_res: null, steel_res_cam: null }
    },
    "X": {
      "130x190": { steel_flow: 26600, steel_chamber: 28000, titan_flow: 53200, titan_chamber: 56000, steel_res: 27930, steel_res_cam: 29400 },
      "120x265": { steel_flow: 29500, steel_chamber: 30500, titan_flow: 59000, titan_chamber: 61000, steel_res: 30975, steel_res_cam: 32025 },
      "150x300": { steel_flow: 29500, steel_chamber: 30500, titan_flow: 59000, titan_chamber: 61000, steel_res: 30975, steel_res_cam: 32025 }
    },
    "Y": {
      "130x190": { steel_flow: 24100, steel_chamber: 21000, titan_flow: 48200, titan_chamber: 42000, steel_res: 25305, steel_res_cam: 22050 },
      "120x265": { steel_flow: 27100, steel_chamber: 24300, titan_flow: 54200, titan_chamber: 48600, steel_res: 28455, steel_res_cam: 25515 },
      "150x300": { steel_flow: 27100, steel_chamber: 24300, titan_flow: 54200, titan_chamber: 48600, steel_res: 28455, steel_res_cam: 25515 }
    },
    "T": {
      "110x172": { steel_flow: 25100, steel_chamber: 24500, titan_flow: 50200, titan_chamber: 49000, steel_res: null, steel_res_cam: null },
      "130x190": { steel_flow: 27300, steel_chamber: 25000, titan_flow: 54600, titan_chamber: 50000, steel_res: null, steel_res_cam: null },
      "120x265": { steel_flow: 28300, steel_chamber: 26000, titan_flow: 56600, titan_chamber: 52000, steel_res: null, steel_res_cam: null },
      "150x300": { steel_flow: 28300, steel_chamber: 26000, titan_flow: 56600, titan_chamber: 52000, steel_res: null, steel_res_cam: null }
    },
    "2F": {
      "120x265": { steel_flow: 41000, steel_chamber: 44000, titan_flow: 82000, titan_chamber: 88000, steel_res: null, steel_res_cam: null },
      "150x300": { steel_flow: 41000, steel_chamber: 44000, titan_flow: 82000, titan_chamber: 88000, steel_res: null, steel_res_cam: null }
    },
    "2L": {
      "110x172": { steel_flow: 34300, steel_chamber: 36300, titan_flow: 68600, titan_chamber: 72600, steel_res: null, steel_res_cam: null },
      "130x190": { steel_flow: 36500, steel_chamber: 37900, titan_flow: 73000, titan_chamber: 75800, steel_res: null, steel_res_cam: null },
      "120x265": { steel_flow: 38000, steel_chamber: 39400, titan_flow: 76000, titan_chamber: 78800, steel_res: null, steel_res_cam: null },
      "150x300": { steel_flow: 38000, steel_chamber: 39400, titan_flow: 76000, titan_chamber: 78800, steel_res: null, steel_res_cam: null }
    },
    "2U": {
      "130x190": { steel_flow: 25600, steel_chamber: 27900, titan_flow: 51200, titan_chamber: 55800, steel_res: null, steel_res_cam: null },
      "120x265": { steel_flow: 27700, steel_chamber: 29000, titan_flow: 55400, titan_chamber: 58000, steel_res: null, steel_res_cam: null },
      "150x300": { steel_flow: 27700, steel_chamber: 29000, titan_flow: 55400, titan_chamber: 58000, steel_res: null, steel_res_cam: null }
    },
    "T14": {
      "130x190": { steel_flow: 30100, steel_chamber: 32100, titan_flow: 60200, titan_chamber: 64200, steel_res: null, steel_res_cam: null },
      "120x265": { steel_flow: 32000, steel_chamber: 34000, titan_flow: 64000, titan_chamber: 68000, steel_res: null, steel_res_cam: null },
      "150x300": { steel_flow: 32000, steel_chamber: 34000, titan_flow: 64000, titan_chamber: 68000, steel_res: null, steel_res_cam: null }
    },
    "OFFIIcam": {
      "150x300": { steel_flow: 25000, steel_chamber: null, titan_flow: 50000, titan_chamber: null, steel_res: null, steel_res_cam: null },
      "120x265": { steel_flow: 25000, steel_chamber: null, titan_flow: 50000, titan_chamber: null, steel_res: null, steel_res_cam: null },
      "130x190": { steel_flow: 23800, steel_chamber: null, titan_flow: 47600, titan_chamber: null, steel_res: null, steel_res_cam: null }
    },
    "OFFII2cam": {
      "150x300": { steel_flow: 25500, steel_chamber: null, titan_flow: 51000, titan_chamber: null, steel_res: null, steel_res_cam: null },
      "120x265": { steel_flow: 25500, steel_chamber: null, titan_flow: 51000, titan_chamber: null, steel_res: null, steel_res_cam: null },
      "130x190": { steel_flow: 24300, steel_chamber: null, titan_flow: 48600, titan_chamber: null, steel_res: null, steel_res_cam: null }
    }
  };

  // Надбавки за длину сверх базовой
  var LENGTH_SURCHARGE = {
    round: { base: 200, step: 700 },
    CC: { base: 250, step: 700 },
    "0I": { base: 250, step: 700 },
    H: { base: 250, step: 800 },
    COFF: { base: 250, step: 700 },
    OFFOFF: { base: 250, step: 700 },
    U: { base: 250, step: 800 },
    h: { base: 250, step: 700 },
    F: { base: 250, step: 800 },
    L: { base: 250, step: 700 },
    X: { base: 300, step: 800 },
    Y: { base: 250, step: 800 },
    T: { base: 250, step: 700 },
    "2F": { base: 400, step: 800 },
    "2L": { base: 350, step: 700 },
    "2U": { base: 350, step: 800 },
    T14: { base: 300, step: 800 },
    OFFIIcam: { base: 250, step: 800 },
    OFFII2cam: { base: 350, step: 800 }
  };

  /* ==================== УТИЛИТЫ ==================== */

  function fmt(n) {
    return n.toLocaleString("ru-RU") + " ₽";
  }

  function q(sel) { return document.querySelector(sel); }
  function qq(sel) { return document.querySelectorAll(sel); }

  /* ==================== HEADER SCROLL ==================== */

  var header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("header--scrolled", window.scrollY > 40);
  });

  /* ==================== BURGER ==================== */

  var burger = document.getElementById("burger");
  var mobileNav = document.getElementById("mobileNav");

  burger.addEventListener("click", function () {
    var isOpen = mobileNav.classList.contains("open");
    mobileNav.classList.toggle("open");
    burger.classList.toggle("open");
    document.body.style.overflow = isOpen ? "" : "hidden";
  });

  mobileNav.querySelectorAll(".mobile-nav__link").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("open");
      burger.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  /* ==================== КАТАЛОГ ==================== */

  var productsGrid = document.getElementById("productsGrid");
  var currentBrand = "all";

  function renderProducts(brand) {
    var filtered = brand === "all" ? PRODUCTS : PRODUCTS.filter(function (p) { return p.brand === brand; });
    productsGrid.innerHTML = "";
    filtered.forEach(function (p) {
      var firstKey = Object.keys(p.prices)[0];
      var minPrice = p.prices[firstKey];
      var card = document.createElement("div");
      card.className = "product-card";
      card.setAttribute("data-id", p.id);
      card.innerHTML =
        '<div class="product-card__header">' +
          '<span class="product-card__brand">' + p.brand + '</span>' +
          '<span class="product-card__type">' + p.type + '</span>' +
        '</div>' +
        '<h3 class="product-card__title">' + p.title + '</h3>' +
        '<p class="product-card__compat">' + p.compat + '</p>' +
        '<div class="product-card__prices">' +
          '<div class="product-card__price-row">' +
            '<span class="product-card__price-label">от</span>' +
            '<span class="product-card__price-val">' + fmt(minPrice) + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="product-card__footer">' +
          '<span class="product-card__detail">Все варианты →</span>' +
          '<button class="btn btn--primary product-card__order">Заказать</button>' +
        '</div>';
      card.addEventListener("click", function () { openProductModal(p); });
      productsGrid.appendChild(card);
    });
  }

  renderProducts("all");

  document.getElementById("filterTabs").addEventListener("click", function (e) {
    var tab = e.target.closest(".filter-tab");
    if (!tab) return;
    qq(".filter-tab").forEach(function (t) { t.classList.remove("active"); });
    tab.classList.add("active");
    currentBrand = tab.getAttribute("data-brand");
    renderProducts(currentBrand);
  });

  /* ==================== PRODUCT MODAL ==================== */

  var productModal = document.getElementById("productModal");
  var productModalContent = document.getElementById("productModalContent");

  function openProductModal(p) {
    var rows = Object.keys(p.prices).map(function (key) {
      var label = key === "base" ? "Стандарт (без кат.)" : (p.catLabel[key] || key);
      return '<tr><td>' + label + '</td><td class="price-accent">' + fmt(p.prices[key]) + '</td></tr>';
    }).join("");

    productModalContent.innerHTML =
      '<span class="pm__brand">' + p.brand + ' — ' + p.type + '</span>' +
      '<h2 class="pm__title">' + p.title + '</h2>' +
      '<p class="pm__compat">Совместимость: ' + p.compat + '</p>' +
      '<table class="pm__table">' +
        '<thead><tr><th>Комплектация</th><th>Цена</th></tr></thead>' +
        '<tbody>' + rows + '</tbody>' +
      '</table>' +
      '<div class="pm__note">* Цены указаны без НДС (наличный расчёт). Уточните совместимость по VIN перед заказом. Доставка СДЭК оплачивается при получении.</div>' +
      '<div class="pm__btns">' +
        '<button class="btn btn--primary pm-order-btn" data-title="' + encodeURIComponent(p.title) + '" data-compat="' + encodeURIComponent(p.compat) + '">Заказать в Telegram</button>' +
        '<button class="btn btn--outline pm-close-btn">Закрыть</button>' +
      '</div>';

    productModalContent.querySelector(".pm-order-btn").addEventListener("click", function () {
      var title = decodeURIComponent(this.getAttribute("data-title"));
      var compat = decodeURIComponent(this.getAttribute("data-compat"));
      var msg = "Здравствуйте! Интересует: " + title + "\n\nСовместимость: " + compat + "\n\nПрошу уточнить наличие, сроки и детали заказа.";
      window.open("https://t.me/Dmitry_Mee?text=" + encodeURIComponent(msg), "_blank", "noopener,noreferrer");
    });

    productModalContent.querySelector(".pm-close-btn").addEventListener("click", closeProductModal);

    productModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeProductModal() {
    productModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.getElementById("productModalClose").addEventListener("click", closeProductModal);
  productModal.addEventListener("click", function (e) { if (e.target === productModal) closeProductModal(); });

  /* ==================== КОНФИГУРАТОР ГЛУШИТЕЛЕЙ ==================== */

  var shapeGrid = document.getElementById("shapeGrid");
  var roundSizeGroup = document.getElementById("roundSizeGroup");
  var ovalTypeGroup = document.getElementById("ovalTypeGroup");
  var ovalSizeGroup = document.getElementById("ovalSizeGroup");
  var roundSizeEl = document.getElementById("roundSize");
  var ovalTypeEl = document.getElementById("ovalType");
  var ovalSizeEl = document.getElementById("ovalSize");
  var materialEl = document.getElementById("mufflerMaterial");
  var pipeEl = document.getElementById("pipeDia");
  var sliderEl = document.getElementById("lengthSlider");
  var lengthValEl = document.getElementById("lengthVal");
  var mufflerPriceEl = document.getElementById("mufflerPrice");
  var bShape = document.getElementById("b-shape");
  var bSize = document.getElementById("b-size");
  var bMat = document.getElementById("b-mat");
  var bExec = document.getElementById("b-exec");
  var bLen = document.getElementById("b-len");
  var bPipe = document.getElementById("b-pipe");

  var currentShape = "round";

  shapeGrid.addEventListener("click", function (e) {
    var btn = e.target.closest(".shape-btn");
    if (!btn) return;
    qq(".shape-btn").forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    currentShape = btn.getAttribute("data-shape");
    if (currentShape === "round") {
      roundSizeGroup.classList.remove("hidden");
      ovalTypeGroup.classList.add("hidden");
      ovalSizeGroup.classList.add("hidden");
    } else {
      roundSizeGroup.classList.add("hidden");
      ovalTypeGroup.classList.remove("hidden");
      ovalSizeGroup.classList.remove("hidden");
    }
    updateOvalSizes();
    calcMuffler();
  });

  ovalTypeEl.addEventListener("change", function () {
    updateOvalSizes();
    calcMuffler();
  });

  function updateOvalSizes() {
    var type = ovalTypeEl.value;
    var prices = OVAL_PRICES[type] || {};
    var sizes = Object.keys(prices);
    ovalSizeEl.innerHTML = "";
    sizes.forEach(function (s) {
      var opt = document.createElement("option");
      opt.value = s;
      opt.textContent = s.replace("x", "×") + " мм";
      ovalSizeEl.appendChild(opt);
    });
  }

  function getMaterialLabel(val) {
    var map = {
      steel_flow: ["Нержавейка", "Прямоточный"],
      steel_chamber: ["Нержавейка", "Камерный"],
      steel_res: ["Нержавейка", "Резонатор"],
      steel_res_cam: ["Нержавейка", "Резонатор камерный"],
      titan_flow: ["Титан", "Прямоточный"],
      titan_chamber: ["Титан", "Камерный"]
    };
    return map[val] || ["—", "—"];
  }

  function calcMuffler() {
    var mat = materialEl.value;
    var length = parseInt(sliderEl.value, 10);
    var basePrice = 0;
    var typeKey = "round";

    if (currentShape === "round") {
      var size = roundSizeEl.value;
      var row = ROUND_PRICES[size];
      basePrice = row ? (row[mat] || 0) : 0;
      typeKey = "round";
      bSize.textContent = size + " мм (диаметр)";
      bShape.textContent = "Круглый";
    } else {
      var ovalType = ovalTypeEl.value;
      var ovalSize = ovalSizeEl.value;
      var oRow = OVAL_PRICES[ovalType] ? OVAL_PRICES[ovalType][ovalSize] : null;
      basePrice = oRow ? (oRow[mat] || 0) : 0;
      typeKey = ovalType;
      bShape.textContent = "Овальный " + ovalType;
      bSize.textContent = (ovalSize || "—").replace("x", "×") + " мм";
    }

    var surcharge = LENGTH_SURCHARGE[typeKey] || { base: 250, step: 700 };
    var extraSteps = Math.max(0, (length - surcharge.base) / 50);
    var total = basePrice + extraSteps * surcharge.step;

    var matLabels = getMaterialLabel(mat);
    bMat.textContent = matLabels[0];
    bExec.textContent = matLabels[1];
    bLen.textContent = length + " мм";
    bPipe.textContent = pipeEl.value + " мм";
    lengthValEl.textContent = length;

    if (total <= 0) {
      mufflerPriceEl.textContent = "Уточнить";
    } else {
      mufflerPriceEl.classList.add("flash");
      setTimeout(function () {
        mufflerPriceEl.textContent = fmt(total);
        mufflerPriceEl.classList.remove("flash");
      }, 120);
    }

    return { total: total, mat: mat, length: length, matLabels: matLabels };
  }

  [roundSizeEl, ovalSizeEl, materialEl, pipeEl].forEach(function (el) {
    el.addEventListener("change", calcMuffler);
  });

  sliderEl.addEventListener("input", function () {
    lengthValEl.textContent = sliderEl.value;
    calcMuffler();
  });

  updateOvalSizes();
  calcMuffler();

  document.getElementById("mufflerOrderBtn").addEventListener("click", function () {
    var mat = materialEl.value;
    var matLabels = getMaterialLabel(mat);
    var length = sliderEl.value;
    var pipe = pipeEl.value;
    var shape = currentShape === "round"
      ? "Круглый " + roundSizeEl.value + "мм"
      : "Овальный " + ovalTypeEl.value + " " + (ovalSizeEl.value || "").replace("x", "×") + "мм";
    var priceText = mufflerPriceEl.textContent;
    var coating = q("#coating").options[q("#coating").selectedIndex].text;

    var msg =
      "Здравствуйте! Хочу заказать глушитель be Solve System.\n\n" +
      "📦 Форма: " + shape + "\n" +
      "🔩 Материал: " + matLabels[0] + "\n" +
      "⚙️ Исполнение: " + matLabels[1] + "\n" +
      "📏 Длина: " + length + " мм\n" +
      "🔧 Диаметр трубы: " + pipe + " мм\n" +
      "✨ Покрытие: " + coating + "\n" +
      "💰 Расчётная стоимость: " + priceText + "\n\n" +
      "Прошу подтвердить наличие и сроки.";

    window.open("https://t.me/Dmitry_Mee?text=" + encodeURIComponent(msg), "_blank", "noopener,noreferrer");
  });

  /* ==================== FAQ ==================== */

  qq(".faq-item").forEach(function (item) {
    item.querySelector(".faq-item__q").addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      qq(".faq-item").forEach(function (i) {
        i.classList.remove("open");
        i.querySelector(".faq-item__q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        this.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ==================== CALLBACK MODAL ==================== */

  var callbackModal = document.getElementById("callbackModal");
  var callbackForm = document.getElementById("callbackForm");

  function openCallback() {
    callbackModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCallback() {
    callbackModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  ["callbackBtn", "callbackBtnMobile", "callbackBtnCta"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", function () {
        if (mobileNav.classList.contains("open")) {
          mobileNav.classList.remove("open");
          burger.classList.remove("open");
        }
        openCallback();
      });
    }
  });

  document.getElementById("callbackModalClose").addEventListener("click", closeCallback);
  callbackModal.addEventListener("click", function (e) { if (e.target === callbackModal) closeCallback(); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeCallback();
      closeProductModal();
    }
  });

  callbackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("cbName").value.trim();
    var contact = document.getElementById("cbContact").value.trim();
    var car = document.getElementById("cbCar").value.trim();

    if (!name || !contact) {
      if (!name) document.getElementById("cbName").style.borderColor = "#ff4d6d";
      if (!contact) document.getElementById("cbContact").style.borderColor = "#ff4d6d";
      return;
    }

    document.getElementById("cbName").style.borderColor = "";
    document.getElementById("cbContact").style.borderColor = "";

    var msg =
      "Заявка на обратный звонок — TuneMee / be Solve System\n\n" +
      "👤 Имя: " + name + "\n" +
      "📞 Контакт: " + contact +
      (car ? "\n🚗 Автомобиль: " + car : "");

    window.open("https://t.me/Dmitry_Mee?text=" + encodeURIComponent(msg), "_blank", "noopener,noreferrer");
    callbackForm.reset();
    closeCallback();
  });

  /* ==================== SCROLL ANIMATIONS ==================== */

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

  qq(".delivery-card, .about__feature, .faq-item, .brand-badge, .region-badge").forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });

})();