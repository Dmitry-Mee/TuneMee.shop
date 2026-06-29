(function () {
    "use strict";

    /* ==================== HERO SLIDER ==================== */

    var heroSlides = document.querySelectorAll(".hero__slide");
    var heroDots = document.querySelectorAll(".hero__dot");
    var heroLabels = document.querySelectorAll(".hero__slide-label");
    var currentSlide = 0;
    var slideInterval = null;

    function goToSlide(index) {
        heroSlides[currentSlide].classList.remove("active");
        heroDots[currentSlide].classList.remove("active");
        heroLabels[currentSlide].classList.remove("active");
        currentSlide = index;
        heroSlides[currentSlide].classList.add("active");
        heroDots[currentSlide].classList.add("active");
        heroLabels[currentSlide].classList.add("active");
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % heroSlides.length);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetSlider() {
        clearInterval(slideInterval);
        startSlider();
    }

    if (heroSlides.length > 0) {
        heroDots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                goToSlide(parseInt(this.getAttribute("data-index"), 10));
                resetSlider();
            });
        });
        startSlider();
    }

    /* ==================== SCROLL ANIMATIONS (объявляем ПЕРВЫМИ) ==================== */

    var cardObserver = null;

    if ("IntersectionObserver" in window) {
        cardObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: "0px 0px -20px 0px" });

        // Статичные элементы — наблюдаем сразу
        document.querySelectorAll(
            ".delivery-card, .about__feature, .faq-item, .region-badge"
        ).forEach(function (el) {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            cardObserver.observe(el);
        });
    }

    /* ==================== ДАННЫЕ КАТАЛОГА ==================== */

    var PRODUCTS = [
        // BMW
        {
            id: "DP-BMW-B48", brand: "BMW", type: "Даунпайп",
            title: "Downpipe BMW B48 (G-серия)",
            compat: "BMW 1/2/3/4/5/6/7 серий с двигателем B48, кузова G-серии",
            engine: "B48", img: "images/dp-bmw-b48.jpg",
            prices: { base: 45000, hs: 55000, cat6_120: 115000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+Heatshield +CAT евро6 200cell 120мм" }
        },
        {
            id: "DP-BMW-B46D", brand: "BMW", type: "Даунпайп",
            title: "Downpipe BMW B46D (G-серия)",
            compat: "BMW с двигателем B46D, кузова G-серии",
            engine: "B46D", img: "images/dp-bmw-b48.jpg",
            prices: { base: 50000, hs: 60000, cat5_113: 105000, cat6_120: 120000 },
            catLabel: { hs: "+Heatshield", cat5_113: "+CAT евро5+ 300cell 113мм", cat6_120: "+CAT евро6 200cell 120мм" }
        },
        {
            id: "DP-BMW-B58", brand: "BMW", type: "Даунпайп",
            title: "Downpipe BMW B58 (G-серия)",
            compat: "BMW 3/4/5/6/7/8 серий с двигателем B58, кузова G-серии",
            engine: "B58", img: "images/dp-bmw-b58.jpg",
            prices: { base: 50000, hs: 65000, cat5_113: 110000, cat6_120: 125000 },
            catLabel: { hs: "+Heatshield", cat5_113: "+CAT евро5+ 300cell 113мм", cat6_120: "+CAT евро6 200cell 120мм" }
        },
        {
            id: "DP-BMW-B58-OPF", brand: "BMW", type: "Даунпайп",
            title: "Downpipe BMW B58 OPF v-band (G-серия)",
            compat: "BMW с двигателем B58 и фильтром частиц OPF, кузова G-серии",
            engine: "B58 OPF", img: "images/dp-bmw-b58.jpg",
            prices: { base: 55000, hs: 70000, cat5_113: 115000, cat6_120: 130000 },
            catLabel: { hs: "+Heatshield", cat5_113: "+CAT евро5+ 300cell 113мм", cat6_120: "+CAT евро6 200cell 120мм" }
        },
        {
            id: "DP-BMW-M3M4", brand: "BMW", type: "Даунпайп",
            title: "Downpipe BMW M3/M4 (G80–G83) / M2 (G87)",
            compat: "BMW M3 G80/G81, M4 G82/G83, M2 G87, двигатель S58",
            engine: "S58", img: "images/dp-bmw-m3m4-m2.jpg",
            prices: { base: 70000, hs: 94000, cat6_120: 214000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" }
        },
        {
            id: "DP-BMW-M5F90", brand: "BMW", type: "Даунпайп",
            title: "Downpipe BMW M5 F90 / M8 F92 non OPF",
            compat: "BMW M5 F90, M8 F91/F92/F93, двигатель S63, без OPF",
            engine: "S63", img: "images/dp-bmw-m5f90.jpg",
            prices: { base: 55000, hs: 70000, cat6_130: 210000 },
            catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "MP-BMW-M5F90", brand: "BMW", type: "Мидпайп",
            title: "Midpipe BMW M5 F90 / M8 F92 non OPF",
            compat: "BMW M5 F90, M8 F91/F92/F93, двигатель S63, без OPF",
            engine: "S63", img: "images/dp-bmw-m5f90.jpg",
            prices: { base: 75000, hs: 85000 },
            catLabel: { hs: "+Heatshield" }
        },
        {
            id: "KIT-BMW-M5F90", brand: "BMW", type: "Комплект DP+MP",
            title: "Downpipe × Midpipe BMW M5 F90 / M8 F92 non OPF",
            compat: "BMW M5 F90, M8 F91/F92/F93, двигатель S63, без OPF",
            engine: "S63", img: "images/dp-bmw-m5f90.jpg",
            prices: { base: 125000, hs: 150000, cat6_130: 290000 },
            catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "DP-BMW-M5G90", brand: "BMW", type: "Даунпайп",
            title: "Downpipe BMW M5 (G90)",
            compat: "BMW M5 G90, двигатель S68",
            engine: "S68", img: "images/dp-bmw-m5g90.jpg",
            prices: { base: 95000, hs: 120000, cat6_130: 260000 },
            catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "MP-BMW-M5G90", brand: "BMW", type: "Мидпайп",
            title: "Midpipe BMW M5 (G90)",
            compat: "BMW M5 G90, двигатель S68",
            engine: "S68", img: "images/dp-bmw-m5g90.jpg",
            prices: { base: 60000, hs: 65000 },
            catLabel: { hs: "+Heatshield" }
        },
        {
            id: "KIT-BMW-M5G90", brand: "BMW", type: "Комплект DP+MP",
            title: "Downpipe × Midpipe BMW M5 (G90)",
            compat: "BMW M5 G90, двигатель S68",
            engine: "S68", img: "images/dp-bmw-m5g90.jpg",
            prices: { base: 150000, hs: 180000, cat6_130: 320000 },
            catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "DP-BMW-X3MF97", brand: "BMW", type: "Даунпайп",
            title: "Downpipe BMW X3M F97 / X4M F98 / LCI",
            compat: "BMW X3M F97, X4M F98 и после рестайлинга LCI, двигатель S58",
            engine: "S58", img: "images/dp-bmw-x3m-x4m.jpg",
            prices: { base: 70000, hs: 94000, cat6_120: 214000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" }
        },
        {
            id: "DP-BMW-X5MF95", brand: "BMW", type: "Даунпайп",
            title: "Downpipe BMW X5M F95 / X6M F96",
            compat: "BMW X5M F95, X6M F96, двигатель S63",
            engine: "S63", img: "images/dp-bmw-xm-x5m-x6m.jpg",
            prices: { base: 55000, hs: 70000, cat6_130: 210000 },
            catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "MP-BMW-X5MF95", brand: "BMW", type: "Мидпайп",
            title: "Midpipe BMW X5M F95 / X6M F96",
            compat: "BMW X5M F95, X6M F96, двигатель S63",
            engine: "S63", img: "images/dp-bmw-xm-x5m-x6m.jpg",
            prices: { base: 75000, hs: 85000 },
            catLabel: { hs: "+Heatshield" }
        },
        {
            id: "KIT-BMW-X5MF95", brand: "BMW", type: "Комплект DP+MP",
            title: "Downpipe × Midpipe BMW X5M F95 / X6M F96",
            compat: "BMW X5M F95, X6M F96, двигатель S63",
            engine: "S63", img: "images/dp-bmw-xm-x5m-x6m.jpg",
            prices: { base: 125000, hs: 150000, cat6_130: 290000 },
            catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "DP-BMW-XM-LCI", brand: "BMW", type: "Даунпайп",
            title: "Downpipe BMW XM / X5M–X6M LCI / X7 G07",
            compat: "BMW XM, X5M/X6M F95-96 LCI, X7 G07, двигатель S68",
            engine: "S68", img: "images/dp-bmw-xm-x5m-x6m.jpg",
            prices: { base: 95000, hs: 120000, cat6_130: 260000 },
            catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "MP-BMW-XM-LCI", brand: "BMW", type: "Мидпайп",
            title: "Midpipe BMW XM / X5M–X6M LCI / X7 G07",
            compat: "BMW XM, X5M/X6M F95-96 LCI, X7 G07, двигатель S68",
            engine: "S68", img: "images/dp-bmw-xm-x5m-x6m.jpg",
            prices: { base: 60000, hs: 65000 },
            catLabel: { hs: "+Heatshield" }
        },
        {
            id: "KIT-BMW-XM-LCI", brand: "BMW", type: "Комплект DP+MP",
            title: "Downpipe × Midpipe BMW XM / X5M–X6M LCI / X7 G07",
            compat: "BMW XM, X5M/X6M F95-96 LCI, X7 G07, двигатель S68",
            engine: "S68", img: "images/dp-bmw-xm-x5m-x6m.jpg",
            prices: { base: 150000, hs: 180000, cat6_130: 320000 },
            catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        // PORSCHE
        {
            id: "DP-POR-911T-992", brand: "Porsche", type: "Даунпайп",
            title: "Downpipe Porsche 911 Turbo / Turbo S (992)",
            compat: "Porsche 911 Turbo, Turbo S, поколение 992, двигатель 3.8T",
            engine: "3.8T", img: "images/dp-porsche-911-turbo.jpg",
            prices: { base: 100000, hs: 125000, cat6_130: 260000 },
            catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "DP-POR-911C-992", brand: "Porsche", type: "Даунпайп",
            title: "Downpipe Porsche 911 Carrera / Carrera 4S (992)",
            compat: "Porsche 911 Carrera, Carrera 4S, поколение 992, двигатель 3.0T",
            engine: "3.0T", img: "images/dp-porsche-911-turbo.jpg",
            prices: { base: 100000, hs: 125000, cat6_130: 260000 },
            catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "EX-POR-911-992-TI", brand: "Porsche", type: "Полная система",
            title: "Exhaust System Porsche 911 (992) Titanium",
            compat: "Porsche 911, поколение 992, полная система из титана",
            engine: "", img: "images/dp-porsche-911-turbo.jpg",
            prices: { base: 450000, hs: 485000, cat6_130: 620000 },
            catLabel: { hs: "+Heatshield", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "DP-POR-CAY-E3", brand: "Porsche", type: "Даунпайп",
            title: "Downpipe Porsche Cayenne E3 (3.0 / 2.9S / 4.0 Turbo/GTS)",
            compat: "Porsche Cayenne E3: 3.0 TFSI, Cayenne S 2.9 TFSI, Cayenne Turbo/GTS 4.0 TFSI",
            engine: "3.0 / 2.9 / 4.0 TFSI", img: "images/dp-porsche-cayenne.jpg",
            prices: { base: 70000, hs: 80000, cat6_120: 140000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" }
        },
        {
            id: "DP-POR-PAN-T971", brand: "Porsche", type: "Даунпайп",
            title: "Downpipe Porsche Panamera Turbo / GTS (971/976)",
            compat: "Porsche Panamera Turbo, GTS, поколения 971 и 976, двигатель 4.0 TFSI",
            engine: "4.0 TFSI", img: "images/dp-mp-porsche-panamera.jpg",
            prices: { base: 70000, hs: 85000, cat6_120: 205000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" }
        },
        {
            id: "MP-POR-PAN-T971", brand: "Porsche", type: "Мидпайп",
            title: "Midpipe Porsche Panamera Turbo (971) 4.0 TFSI",
            compat: "Porsche Panamera Turbo, поколение 971, двигатель 4.0 TFSI",
            engine: "4.0 TFSI", img: "images/dp-mp-porsche-panamera.jpg",
            prices: { base: 125000, hs: 130000 },
            catLabel: { hs: "+Heatshield" }
        },
        {
            id: "KIT-POR-PAN-T971", brand: "Porsche", type: "Комплект DP+MP",
            title: "Downpipe × Midpipe Porsche Panamera Turbo (971)",
            compat: "Porsche Panamera Turbo, поколение 971, двигатель 4.0 TFSI",
            engine: "4.0 TFSI", img: "images/dp-mp-porsche-panamera.jpg",
            prices: { base: 195000, hs: 215000, cat6_120: 335000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" }
        },
        // LAMBORGHINI
        {
            id: "DP-LAM-URUS", brand: "Lamborghini", type: "Даунпайп",
            title: "Downpipe Lamborghini Urus (I поколение)",
            compat: "Lamborghini Urus первое поколение, двигатель 4.0 biturbo",
            engine: "4.0T", img: "images/dp-lamborghini-urus.jpg",
            prices: { base: 130000, hs: 150000, cat6_120: 270000, cat6_130: 285000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        // AUDI
        {
            id: "DP-AUD-RS6C8", brand: "Audi", type: "Даунпайп",
            title: "Downpipe Audi RS6 / RS7 (C8) / A8 / S8 (D5)",
            compat: "Audi RS6 C8, RS7 C8, A8 D5, S8 D5, двигатель 4.0 TFSI",
            engine: "4.0 TFSI", img: "images/dp-audi-rs6-rs7.jpg",
            prices: { base: 130000, hs: 150000, cat6_120: 270000, cat6_130: 285000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "MP-AUD-RS6C8", brand: "Audi", type: "Мидпайп",
            title: "Midpipe Audi RS6 / RS7 (C8)",
            compat: "Audi RS6 C8, RS7 C8, двигатель 4.0 TFSI",
            engine: "4.0 TFSI", img: "images/mp-audi-rs6-rs7.jpg",
            prices: { base: 80000, hs: 95000 },
            catLabel: { hs: "+Heatshield" }
        },
        {
            id: "DP-AUD-RSQ8", brand: "Audi", type: "Даунпайп",
            title: "Downpipe Audi RSQ8 (I) / SQ7 (4M) / SQ8 (I)",
            compat: "Audi RSQ8 I, SQ7 4M, SQ8 I, двигатель 4.0 TFSI",
            engine: "4.0 TFSI", img: "images/dp-audi-rsq8.jpg",
            prices: { base: 130000, hs: 150000, cat6_120: 270000, cat6_130: 285000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм", cat6_130: "+CAT евро6 200cell 130мм" }
        },
        {
            id: "DP-AUD-RS4B9", brand: "Audi", type: "Даунпайп",
            title: "Downpipe Audi RS4 B9 / RS5 F5 (OPF и non OPF)",
            compat: "Audi RS4 B9, RS5 F5 с OPF и без, двигатель 2.9 TFSI",
            engine: "2.9 TFSI", img: "images/dp-audi-rs4-rs5.jpg",
            prices: { base: 80000, hs: 100000, cat6_120: 220000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" }
        },
        {
            id: "DP-AUD-S4S5", brand: "Audi", type: "Даунпайп",
            title: "Downpipe Audi S4 / S5 (B9)",
            compat: "Audi S4 B9, S5 B9, двигатель 3.0 TFSI",
            engine: "3.0 TFSI", img: "images/dp-audi-s4-s5.jpg",
            prices: { base: 75000, hs: 90000 },
            catLabel: { hs: "+Heatshield" }
        },
        {
            id: "DP-AUD-RS3", brand: "Audi", type: "Даунпайп",
            title: "Downpipe Audi RS3 (8V.2 / 8Y) / RSQ3 (F3) / TT RS (8S)",
            compat: "Audi RS3 8V.2, RS3 8Y, RSQ3 F3, TT RS III 8S, двигатель 2.5 TFSI",
            engine: "2.5 TFSI", img: "images/dp-audi-rs3-rsq3.jpg",
            prices: { base: 85000, hs: 105000, cat5_100: 185000 },
            catLabel: { hs: "+Heatshield", cat5_100: "+CAT евро5 300cell 100мм (2шт)" }
        },
        {
            id: "TP-AUD-A6C7", brand: "Audi", type: "Тестпайп",
            title: "Testpipe Audi A6 / A7 (C7) 3.0 TFSI с пламегасителем",
            compat: "Audi A6 C7, A7 C7, двигатель 3.0 TFSI",
            engine: "3.0 TFSI", img: "images/tp-audi-a6-a7.jpg",
            prices: { base: 50000 },
            catLabel: {}
        },
        // TOYOTA
        {
            id: "DP-TOY-SUPRA-A90", brand: "Toyota", type: "Даунпайп",
            title: "Downpipe Toyota GR Supra A90 (BMW B58)",
            compat: "Toyota GR Supra A90, двигатель BMW B58",
            engine: "B58", img: "images/dp-bmw-b58.jpg",
            prices: { base: 55000, hs: 70000, cat6_120: 130000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" }
        },
        {
            id: "DP-TOY-GRY", brand: "Toyota", type: "Даунпайп",
            title: "Downpipe Toyota GR Yaris / GR Corolla 1.6 gen 2",
            compat: "Toyota GR Yaris, GR Corolla, двигатель G16E-GTS 1.6T второе поколение",
            engine: "G16E 1.6T", img: "images/dp-bmw-b58.jpg",
            prices: { base: 60000, hs: 70000, cat6_120: 130000 },
            catLabel: { hs: "+Heatshield", cat6_120: "+CAT евро6 200cell 120мм" }
        },
        {
            id: "MP-TOY-GRY-AKR", brand: "Toyota", type: "Мидпайп",
            title: "Midpipe Toyota GR Yaris 1.6 gen 2 (под Akrapovic)",
            compat: "Toyota GR Yaris, двигатель G16E-GTS 1.6T, под выхлоп Akrapovic",
            engine: "G16E 1.6T", img: "images/dp-bmw-b58.jpg",
            prices: { base: 75000, cat6_120: 135000 },
            catLabel: { cat6_120: "+CAT евро6 200cell 120мм" }
        }
    ];

    /* ==================== ТАБЛИЦА ГЛУШИТЕЛЕЙ ==================== */

    var MUFFLER_IMAGES

    var ROUND_PRICES = {
        "100": { steel_flow: 6300, steel_chamber: 8300, steel_res: null, steel_res_cam: null, titan_flow: null, titan_chamber: null },
        "110": { steel_flow: 7400, steel_chamber: 9400, steel_res: 7770, steel_res_cam: 9870, titan_flow: 14800, titan_chamber: 18800 },
        "120": { steel_flow: 7400, steel_chamber: 9400, steel_res: 7770, steel_res_cam: 9870, titan_flow: 14800, titan_chamber: 18800 },
        "150": { steel_flow: 10000, steel_chamber: 12000, steel_res: 10500, steel_res_cam: 12600, titan_flow: 20000, titan_chamber: 24000 },
        "170": { steel_flow: 11300, steel_chamber: 13400, steel_res: 11865, steel_res_cam: 14070, titan_flow: 22600, titan_chamber: 26800 }
    };

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
        "II": {
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

    var LENGTH_SURCHARGE = {
        round: { base: 200, step: 700 },
        CC: { base: 250, step: 700 },
        "0I": { base: 250, step: 700 },
        II: { base: 250, step: 800 },
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

    var NO_PIPE_88_TYPES = ["II", "F", "T14", "OFFIIcam", "OFFII2cam"];
    var NO_RES_TYPES = ["U", "F", "L", "2F", "T", "2L", "2U", "T14", "OFFIIcam", "OFFII2cam"];
    var NO_CHAMBER_TYPES = ["OFFIIcam", "OFFII2cam"];

    /* ==================== УТИЛИТЫ ==================== */

    function fmt(n) { return Math.round(n).toLocaleString("ru-RU") + " ₽"; }
    function q(sel) { return document.querySelector(sel); }
    function qq(sel) { return document.querySelectorAll(sel); }

    /* ==================== HEADER ==================== */

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

    function renderProducts(brand) {
        var filtered = brand === "all"
            ? PRODUCTS
            : PRODUCTS.filter(function (p) { return p.brand === brand; });

        productsGrid.innerHTML = "";

        filtered.forEach(function (p) {
            var firstKey = Object.keys(p.prices)[0];
            var minPrice = p.prices[firstKey];

            var imgHtml = p.img
                ? '<div class="product-card__img-wrap">' +
                '<img src="' + p.img + '" alt="' + p.title +
                '" loading="lazy" class="product-card__img" /></div>'
                : "";

            var card = document.createElement("div");
            card.className = "product-card";
            card.setAttribute("data-id", p.id);
            card.innerHTML =
                imgHtml +
                '<div class="product-card__body">' +
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
                '</div>' +
                '</div>';

            card.addEventListener("click", function () { openProductModal(p); });
            productsGrid.appendChild(card);
        });

        // Анимация для карточек после рендера
        if (cardObserver) {
            qq(".product-card").forEach(function (el) {
                el.style.opacity = "0";
                el.style.transform = "translateY(20px)";
                el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                cardObserver.observe(el);
            });
        }
    }

    renderProducts("all");

    document.getElementById("filterTabs").addEventListener("click", function (e) {
        var tab = e.target.closest(".filter-tab");
        if (!tab) return;
        qq(".filter-tab").forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        renderProducts(tab.getAttribute("data-brand"));
    });

    /* ==================== PRODUCT MODAL ==================== */

    var productModal = document.getElementById("productModal");
    var productModalContent = document.getElementById("productModalContent");

    function openProductModal(p) {
        var rows = Object.keys(p.prices).map(function (key) {
            var label = key === "base"
                ? "Стандарт (без кат.)"
                : (p.catLabel[key] || key);
            return "<tr><td>" + label + "</td><td><span class='price-accent'>" +
                fmt(p.prices[key]) + "</span></td></tr>";
        }).join("");

        var imgHtml = p.img
            ? '<img src="' + p.img + '" alt="' + p.title + '" class="pm__img" />'
            : "";

        productModalContent.innerHTML =
            imgHtml +
            '<span class="pm__brand">' + p.brand + " — " + p.type + "</span>" +
            '<h2 class="pm__title">' + p.title + "</h2>" +
            '<p class="pm__compat">Совместимость: ' + p.compat + "</p>" +
            '<table class="pm__table">' +
            '<thead><tr><th>Комплектация</th><th>Цена</th></tr></thead>' +
            "<tbody>" + rows + "</tbody>" +
            "</table>" +
            '<div class="pm__note">Цены без НДС. Уточните совместимость по VIN. Доставка СДЭК оплачивается отдельно.</div>' +
            '<div class="pm__btns">' +
            '<button class="btn btn--primary pm-order-btn"' +
            ' data-title="' + encodeURIComponent(p.title) + '"' +
            ' data-compat="' + encodeURIComponent(p.compat) + '">' +
            'Заказать в Telegram' +
            '</button>' +
            '<button class="btn btn--outline pm-close-btn">Закрыть</button>' +
            "</div>";

        productModalContent.querySelector(".pm-order-btn")
            .addEventListener("click", function () {
                var title = decodeURIComponent(this.getAttribute("data-title"));
                var compat = decodeURIComponent(this.getAttribute("data-compat"));
                var msg = "Здравствуйте! Интересует: " + title +
                    "\n\nСовместимость: " + compat +
                    "\n\nПрошу уточнить наличие, сроки и доступность.";
                window.open(
                    "https://t.me/Dmitry_Mee?text=" + encodeURIComponent(msg),
                    "_blank", "noopener,noreferrer"
                );
            });

        productModalContent.querySelector(".pm-close-btn")
            .addEventListener("click", closeProductModal);

        productModal.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeProductModal() {
        productModal.classList.remove("open");
        document.body.style.overflow = "";
    }

    document.getElementById("productModalClose")
        .addEventListener("click", closeProductModal);
    productModal.addEventListener("click", function (e) {
        if (e.target === productModal) closeProductModal();
    });

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
    var mufflerPreviewImg = null;

    // Превью изображения
    var configControls = document.querySelector(".muffler-config__controls");
    var previewWrap = document.createElement("div");
    previewWrap.className = "muffler-preview";
    previewWrap.innerHTML =
        '<img src="images/muffler-round.jpg" alt="Глушитель"' +
        ' class="muffler-preview__img" id="mufflerPreviewImg" />';
    configControls.insertBefore(previewWrap, configControls.firstChild);
    mufflerPreviewImg = document.getElementById("mufflerPreviewImg");

    // Карта изображений глушителей
    var MUFFLER_IMAGES = {
        // Круглый
        round: "images/muffler-round.jpg",
        round_chamber: "images/muffler-round-chamber.jpg",

        // Овальные прямоточные
        CC: "images/muffler-oval-cc.jpg",
        "0I": "images/muffler-oval-0i.jpg",
        II: "images/muffler-oval-ii.jpg",
        COFF: "images/muffler-oval-coff.jpg",
        OFFOFF: "images/muffler-oval-offoff.jpg",
        U: "images/muffler-oval-u.jpg",
        h: "images/muffler-oval-h-ctrl.jpg",
        F: "images/muffler-oval-f.jpg",
        L: "images/muffler-oval-l.jpg",
        X: "images/muffler-oval-x.jpg",
        Y: "images/muffler-oval-y.jpg",
        T: "images/muffler-oval-t.jpg",
        "2F": "images/muffler-oval-2f.jpg",
        "2L": "images/muffler-oval-2l.jpg",
        "2U": "images/muffler-oval-2u.jpg",
        T14: "images/muffler-oval-t14.jpg",
        OFFIIcam: "images/muffler-oval-offcam.jpg",
        OFFII2cam: "images/muffler-oval-off2cam.jpg",

        // Овальные камерные (только те, что реально есть)
        CC_chamber: "images/muffler-oval-cc-chamber.jpg",
        II_chamber: "images/muffler-oval-ii-chamber.jpg",
        COFF_chamber: "images/muffler-oval-coff-chamber.jpg",
        OFFOFF_chamber: "images/muffler-oval-offoff-chamber.jpg",
        U_chamber: "images/muffler-oval-u-chamber.jpg",
        Y_chamber: "images/muffler-oval-y-chamber.jpg",
        T_chamber: "images/muffler-oval-t-chamber.jpg"
    };

    // Обновление меток ползунка
    function updateLengthMarks(minLen) {
        var marksEl = document.querySelector(".length-marks");
        if (!marksEl) return;
        var maxLen = 600;
        var range = maxLen - minLen;
        var marks = [
            minLen,
            minLen + Math.round(range * 0.25 / 50) * 50,
            minLen + Math.round(range * 0.50 / 50) * 50,
            minLen + Math.round(range * 0.75 / 50) * 50,
            maxLen
        ];
        marks = marks.filter(function (v, i, a) { return a.indexOf(v) === i; });
        marksEl.innerHTML = marks.map(function (m) {
            return "<span>" + m + "</span>";
        }).join("");
    }

    // Обновление min/max ползунка
    function updateSliderMin() {
        var typeKey = currentShape === "round" ? "round" : ovalTypeEl.value;
        var surcharge = LENGTH_SURCHARGE[typeKey] || { base: 250, step: 700 };
        var minLen = surcharge.base;

        sliderEl.min = minLen;
        sliderEl.max = 600;

        var curVal = parseInt(sliderEl.value, 10);
        if (isNaN(curVal) || curVal < minLen) {
            sliderEl.value = minLen;
        }
        lengthValEl.textContent = sliderEl.value;
        updateLengthMarks(minLen);
    }

    // Блокировка трубы 88.9
    function updatePipeOptions() {
        var pipe88 = pipeEl.querySelector('option[value="88.9"]');
        if (!pipe88) return;
        var shouldDisable = currentShape === "oval" &&
            NO_PIPE_88_TYPES.indexOf(ovalTypeEl.value) !== -1;

        pipe88.disabled = shouldDisable;
        pipe88.textContent = shouldDisable
            ? "88.9 мм (недоступно для этого типа)"
            : "88.9 мм";

        if (shouldDisable && pipeEl.value === "88.9") {
            pipeEl.value = "76.1";
        }
    }

    // Блокировка материалов
    function updateMaterialOptions() {
        var type = ovalTypeEl.value;
        var isOval = currentShape === "oval";

        var noRes = isOval && NO_RES_TYPES.indexOf(type) !== -1;
        ["steel_res", "steel_res_cam"].forEach(function (val) {
            var opt = materialEl.querySelector('option[value="' + val + '"]');
            if (!opt) return;
            opt.disabled = noRes;
            if (noRes && materialEl.value === val) {
                materialEl.value = "steel_flow";
            }
        });

        var noChamber = isOval && NO_CHAMBER_TYPES.indexOf(type) !== -1;
        ["steel_chamber", "titan_chamber"].forEach(function (val) {
            var opt = materialEl.querySelector('option[value="' + val + '"]');
            if (!opt) return;
            opt.disabled = noChamber;
            if (noChamber && materialEl.value === val) {
                materialEl.value = "steel_flow";
            }
        });
    }

    // Обновление превью с fallback
    function updateMufflerPreview() {
        var mat = materialEl.value;
        var baseKey = currentShape === "round" ? "round" : ovalTypeEl.value;

        // Камерный материал?
        var isChamber = (mat === "steel_chamber" || mat === "titan_chamber");

        // Ключ для поиска
        var imageKey = isChamber ? baseKey + "_chamber" : baseKey;

        // Поиск изображения
        var src = MUFFLER_IMAGES[imageKey];

        // Fallback: нет камерного → берём прямоточный
        if (!src && isChamber) {
            src = MUFFLER_IMAGES[baseKey];
        }

        // Финальный fallback
        if (!src) {
            src = "images/muffler-round.jpg";
        }

        // Обновление с анимацией
        if (mufflerPreviewImg && mufflerPreviewImg.getAttribute("src") !== src) {
            mufflerPreviewImg.style.opacity = "0";
            setTimeout(function () {
                mufflerPreviewImg.src = src;
                mufflerPreviewImg.style.opacity = "1";
            }, 200);
        }
    }

    // Обновление размеров овала
    function updateOvalSizes() {
        var type = ovalTypeEl.value;
        if (!type || !OVAL_PRICES[type]) {
            var firstType = Object.keys(OVAL_PRICES)[0];
            ovalTypeEl.value = firstType;
            type = firstType;
        }
        var prices = OVAL_PRICES[type] || {};
        var sizes = Object.keys(prices);
        var prevVal = ovalSizeEl.value;

        ovalSizeEl.innerHTML = "";

        if (sizes.length === 0) {
            var emptyOpt = document.createElement("option");
            emptyOpt.value = "";
            emptyOpt.textContent = "Нет доступных размеров";
            ovalSizeEl.appendChild(emptyOpt);
            return;
        }

        // Сортировка размеров
        var sizeOrder = ["110x172", "130x190", "120x265", "150x300"];
        sizes.sort(function (a, b) {
            var indexA = sizeOrder.indexOf(a);
            var indexB = sizeOrder.indexOf(b);
            if (indexA === -1) indexA = 999;
            if (indexB === -1) indexB = 999;
            return indexA - indexB;
        });

        sizes.forEach(function (s) {
            var opt = document.createElement("option");
            opt.value = s;
            opt.textContent = s.replace("x", "×") + " мм";
            ovalSizeEl.appendChild(opt);
        });

        // Дефолт: 120x265 если доступен
        if (sizes.indexOf("120x265") !== -1) {
            ovalSizeEl.value = "120x265";
        } else if (sizes.indexOf(prevVal) !== -1) {
            ovalSizeEl.value = prevVal;
        } else {
            ovalSizeEl.value = sizes[0];
        }
    }

    // Метки материала
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

    // Основной расчёт
    function calcMuffler() {
        var mat = materialEl.value;
        var length = parseInt(sliderEl.value, 10);
        if (isNaN(length)) length = parseInt(sliderEl.min, 10) || 200;

        lengthValEl.textContent = length;
        bLen.textContent = length + " мм";
        bPipe.textContent = pipeEl.value + " мм";

        var basePrice = 0;
        var typeKey = "round";
        var isTitanium = mat.indexOf("titan") !== -1;

        if (currentShape === "round") {
            var size = roundSizeEl.value;
            var row = ROUND_PRICES[size];
            basePrice = (row && row[mat] !== undefined && row[mat] !== null)
                ? row[mat] : 0;
            typeKey = "round";
            bShape.textContent = "Круглый";
            bSize.textContent = size + " мм (диаметр)";
        } else {
            var ovalType = ovalTypeEl.value;
            var ovalSize = ovalSizeEl.value;
            var oData = OVAL_PRICES[ovalType];
            var oRow = oData ? oData[ovalSize] : null;
            basePrice = (oRow && oRow[mat] !== undefined && oRow[mat] !== null)
                ? oRow[mat] : 0;
            typeKey = ovalType;
            bShape.textContent = "Овальный " + ovalType;
            bSize.textContent = (ovalSize || "—").replace("x", "×") + " мм";
        }

        if (!basePrice) {
            mufflerPriceEl.classList.add("flash");
            setTimeout(function () {
                mufflerPriceEl.textContent = "Уточнить";
                mufflerPriceEl.classList.remove("flash");
            }, 120);
            return;
        }

        var surcharge = LENGTH_SURCHARGE[typeKey] || { base: 200, step: 700 };
        var extraSteps = Math.max(0, (length - surcharge.base) / 50);

        // Для титана шаг удваивается
        var stepValue = isTitanium ? surcharge.step * 2 : surcharge.step;
        var total = basePrice + extraSteps * stepValue;
        var matLabels = getMaterialLabel(mat);

        bMat.textContent = matLabels[0];
        bExec.textContent = matLabels[1];

        mufflerPriceEl.classList.add("flash");
        setTimeout(function () {
            mufflerPriceEl.textContent = fmt(total);
            mufflerPriceEl.classList.remove("flash");
        }, 120);
    }

    // Слушатели
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
        updateSliderMin();
        updatePipeOptions();
        updateMaterialOptions();
        updateMufflerPreview();
        calcMuffler();
    });

    ovalTypeEl.addEventListener("change", function () {
        updateOvalSizes();
        updateSliderMin();
        updatePipeOptions();
        updateMaterialOptions();
        updateMufflerPreview();
        calcMuffler();
    });

    [roundSizeEl, ovalSizeEl, pipeEl].forEach(function (el) {
        el.addEventListener("change", calcMuffler);
    });

    // Материал — обновляет и превью и расчёт
    materialEl.addEventListener("change", function () {
        updateMufflerPreview();
        calcMuffler();
    });

    sliderEl.addEventListener("input", function () {
        lengthValEl.textContent = sliderEl.value;
        calcMuffler();
    });

    // Кнопка заказа
    document.getElementById("mufflerOrderBtn").addEventListener("click", function () {
        var mat = materialEl.value;
        var matLabels = getMaterialLabel(mat);
        var length = sliderEl.value;
        var pipe = pipeEl.value;
        var shape = currentShape === "round"
            ? "Круглый " + roundSizeEl.value + " мм"
            : "Овальный " + ovalTypeEl.value + " " +
            (ovalSizeEl.value || "").replace("x", "×") + " мм";
        var priceText = mufflerPriceEl.textContent;
        var coatingSel = document.getElementById("coating");
        var coating = coatingSel.options[coatingSel.selectedIndex].text;

        var msg =
            "Здравствуйте! Хочу заказать глушитель be Solve System.\n\n" +
            "📦 Форма: " + shape + "\n" +
            "🔩 Материал: " + matLabels[0] + "\n" +
            "⚙️ Исполнение: " + matLabels[1] + "\n" +
            "📏 Длина: " + length + " мм\n" +
            "🔧 Диаметр трубы: " + pipe + " мм\n" +
            "✨ Покрытие: " + coating + "\n" +
            "💰 Стоимость: " + priceText + "\n\n" +
            "Прошу подтвердить наличие и сроки.";

        window.open(
            "https://t.me/TuneMeeShop?text=" + encodeURIComponent(msg),
            "_blank", "noopener,noreferrer"
        );
    });

    // Инициализация
    updateOvalSizes();        // дефолт: 120x265
    updateSliderMin();        // min=200 для круглого
    updatePipeOptions();      // все трубы доступны
    updateMaterialOptions();  // все материалы доступны
    materialEl.value = "steel_flow"; // Нержавейка Прямоточный
    updateMufflerPreview();   // показываем превью
    calcMuffler();

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

    document.getElementById("callbackModalClose")
        .addEventListener("click", closeCallback);
    callbackModal.addEventListener("click", function (e) {
        if (e.target === callbackModal) closeCallback();
    });

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

        document.getElementById("cbName").style.borderColor = "";
        document.getElementById("cbContact").style.borderColor = "";

        if (!name || !contact) {
            if (!name) document.getElementById("cbName").style.borderColor = "#ff4d6d";
            if (!contact) document.getElementById("cbContact").style.borderColor = "#ff4d6d";
            return;
        }

        var msg =
            "Заявка на обратный звонок — TuneMee\n\n" +
            "👤 Имя: " + name + "\n" +
            "📞 Контакт: " + contact +
            (car ? "\n🚗 Автомобиль: " + car : "");

        window.open(
            "https://t.me/Dmitry_Mee?text=" + encodeURIComponent(msg),
            "_blank", "noopener,noreferrer"
        );
        callbackForm.reset();
        closeCallback();
    });

})();
