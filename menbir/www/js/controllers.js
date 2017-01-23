angular.module('app.controllers', [])

    .filter('yurejikBaYok', function() {
        return function(input) {
            return input ? 'button button-positive button-small button-outline icon ion-ios-heart-outline' : 'button button-positive button-small button-outline icon ion-heart';
            // classYurejik = 'button button-positive button-small button-outline icon ion-ios-heart-outline';
            // for(var i=0; i<userBaza.yaraya.length; i++){
            //     if(infoKeyT === userBaza.yaraya[i])
            //     {
            //         classYurejik = 'button button-positive button-small button-outline icon ion-heart';
            //         // console.log('Tapmadym yurek1:',userBaza.yaraya[i],' iii:',i);
            //     }
            //     // console.log('Tapmadym yurek2:',userBaza.yaraya[i],' iii:',i);
            //     // console.log('Tapmadym yurek4:',infoKeyT,' iii:',i);
            // }
            // return classYurejik;
            // console.log('Tapmadym yurek:',input);
        }
    })

    .factory('globalPeremenFac', function(){
        var idTawar = '';
        var katUraBaza = '';
        var yarayamyNew = '';
        var userID = {};
        var diliTmRu = 'RU';
        var userBaza = [];
        var bazanyUyt = [];
        return {
            updateHP: function(newIdTawar, newKatUra2, newKatUra3, newKatUra4, yarayamy) {
                idTawar = newIdTawar;
                yarayamyNew = yarayamy;
                if(newKatUra4===undefined || newKatUra4==='' || newKatUra4===null){
                    switch (newKatUra2) {
                        case 'Awtoulaglar':
                            katUraBaza = "traawt";
                            break;
                        case 'Matorlar we Mototehnikalar':
                            katUraBaza = "tramoto";
                            break;
                        case 'Gruzowikler we Spestehnikalar':
                            katUraBaza = "tragruz";
                            break;
                        case 'Suw Transportlary':
                            katUraBaza = "trasuw";
                            break;
                        case 'Zapçastlar we Bezegler':
                            katUraBaza = "trazapcast";
                            break;

                        case 'Öý we Daça':
                            katUraBaza = "emloydac";
                            break;
                        case 'Mellek':
                            katUraBaza = "emlmellek";
                            break;

                        case 'Iş gözleýän':
                            katUraBaza = "ishishgoz";
                            break;
                        case 'Işgär Gözleýäň':
                            katUraBaza = "ishishgargoz";
                            break;

                        case 'Toý':
                            katUraBaza = "hyztoy";
                            break;
                        case 'Maşyn/Ulaglar':
                            katUraBaza = "hyzmasyn";
                            break;
                        case 'Tikin Maşyn':
                            katUraBaza = "hyztikin";
                            break;
                        case 'Tehnika':
                            katUraBaza = "hyztehnika";
                            break;
                        case 'Gurluşyk':
                            katUraBaza = "hyzgurlus";
                            break;
                        case 'Jaý/Öý Remont':
                            katUraBaza = "hyzjay";
                            break;

                        case 'Halylar we Keçeler':
                            katUraBaza = "oyhojhaly";
                            break;
                        case 'Mebeller':
                            katUraBaza = "oyhojmellek";
                            break;
                        case 'Posuda we Harytlar':
                            katUraBaza = "oyhojposuda";
                            break;
                        case 'Gurluşyk Harytlary':
                            katUraBaza = "oyhojgurlus";
                            break;

                        case 'Guýma':
                            katUraBaza = "harytguyma";
                            break;
                        case 'Demirden':
                            katUraBaza = "harytdemir";
                            break;
                        case 'Agaçdan':
                            katUraBaza = "harytagac";
                            break;
                        case 'Gurluşyk üçin':
                            katUraBaza = "harytgurlus";
                            break;
                        case 'Oba Hojalyk üçin':
                            katUraBaza = "harytobahoj";
                            break;

                        case 'Gelin/Gyzlar üçin':
                            katUraBaza = "egingelin";
                            break;
                        case 'Erkekler üçin':
                            katUraBaza = "eginerkek";
                            break;
                        case 'Çagalar üçin':
                            katUraBaza = "egincaga";
                            break;

                        case 'Telefon':
                            katUraBaza = "tehnikatelefon";
                            break;
                        case 'Notebook':
                            katUraBaza = "tehnikanote";
                            break;
                        case 'Kompýuter we Printer':
                            katUraBaza = "tehnikakomp";
                            break;
                        case 'Audio we Wideo':
                            katUraBaza = "tehnikaaudio";
                            break;
                        case 'Öý üçin':
                            katUraBaza = "tehnikaoyu";
                            break;
                        case 'Aş hana üçin/Gaz jaý':
                            katUraBaza = "tehnikaasu";
                            break;
                        case 'Howa we Klimat Enjamlary':
                            katUraBaza = "tehnikahowa";
                            break;
                        case 'Fotoapparatla we Dürbiler':
                            katUraBaza = "tehnikafoto";
                            break;
                        case 'Kompýuter üçin Harytlar':
                            katUraBaza = "tehnikakompoyun";
                            break;

                        case 'Bag-Bakja':
                            katUraBaza = "maldarbagbag";
                            break;
                        case 'Nahallar we Şitiller':
                            katUraBaza = "maldarbagnahal";
                            break;
                        case 'Iri Haýwanlar':
                            katUraBaza = "maldarbagiri";
                            break;
                        case 'Uşak Haýwanlar':
                            katUraBaza = "maldarbagusak";
                            break;

                        case 'Welosiped':
                            katUraBaza = "guymenwelos";
                            break;
                        case 'Bilet we Dynç Alyş':
                            katUraBaza = "guymenbilet";
                            break;
                        case 'Muzikantlar üçin':
                            katUraBaza = "guymenmuzik";
                            break;
                        case 'Sport':
                            katUraBaza = "guymensport";
                            break;
                        case 'Oýunlar we Programmalar':
                            katUraBaza = "guymenoyun";
                            break;
                    }
                }
                if(newKatUra4!=undefined || newKatUra4!='' || newKatUra4!=null){
                    if(newKatUra2==='Kwartira') {
                        switch (newKatUra3) {
                            case 'Satlyk':
                                katUraBaza = "emlkwartirasatlyk";
                                break;
                            case 'Hakyna bermek':
                                katUraBaza = "emlkwartirahakyna";
                                break;
                            case 'Satyn aljak':
                                katUraBaza = "emlkwartirasatyna";
                                break;
                            case 'Hakyna tutjak':
                                katUraBaza = "emlkwartirahakynaal";
                                break;
                        }
                    }
                    if(newKatUra2==='Garaž we Maşyn goýara ýer') {
                        switch (newKatUra3) {
                            case 'Satlyk':
                                katUraBaza = "emlgarazsatlyk";
                                break;
                            case 'Hakyna bermek':
                                katUraBaza = "emlgarazhakyna";
                                break;
                            case 'Satyn aljak':
                                katUraBaza = "emlgarazsatynal";
                                break;
                            case 'Hakyna tutjak':
                                katUraBaza = "emlgarazhakynaal";
                                break;
                        }
                    }
                    if(newKatUra2==='Täjirçilik emlägi') {
                        switch (newKatUra3) {
                            case 'Satlyk':
                                katUraBaza = "emltajirsatlyk";
                                break;
                            case 'Hakyna bermek':
                                katUraBaza = "emltajirhakyna";
                                break;
                            case 'Satyn aljak':
                                katUraBaza = "emltajirsatynal";
                                break;
                            case 'Hakyna tutjak':
                                katUraBaza = "emltajirhakynaal";
                                break;
                        }
                    }
                }
            },
            updateDiliTmRu: function (newDiliTmRu) {
                diliTmRu = newDiliTmRu;
            },
            updateUserBaza: function (newserBaza) {
                userBaza = newserBaza;
            },
            updateUserID: function (newUserID) {
                userID = newUserID;
            },
            updateBazanyUyt: function (newBazanyUyt) {
                bazanyUyt = newBazanyUyt;
            },
            getIdTawar: function() {
                return idTawar;
            },
            getKatUraBaza: function() {
                return katUraBaza;
            },
            getKatDiliTmRu: function() {
                return diliTmRu;
            },
            getKatUserBaza: function() {
                return userBaza;
            },
            getYarayamy: function() {
                return yarayamyNew;
            },
            getUserID: function() {
                return userID;
            },
            getBazanyUyt: function() {
                return bazanyUyt;
            }
        }
    })

    .controller('homeCtrl', ['$scope', '$stateParams', '$http', 'globalPeremenFac', '$resource', 'welayatFilter', 'katalogFilter', 'facHaysyBazadanZagruzkaEtmeli', '$cookieStore', 'nomerBazaName', '$location', '$mdDialog','ertdayBD', function ($scope, $stateParams, $http, globalPeremenFac, $resource, welayatFilter, katalogFilter, facHaysyBazadanZagruzkaEtmeli, $cookieStore, nomerBazaName, $location, $mdDialog, ertdayBD) {

        //DILI TM RU
        $scope.diliTmRuSayla = globalPeremenFac.getKatDiliTmRu();
        $scope.diliTmRu =      globalPeremenFac.getKatDiliTmRu();
        $scope.jogapDiliTmRuSayla = function (j) {
            globalPeremenFac.updateDiliTmRu(j);
            $scope.diliTmRu = globalPeremenFac.getKatDiliTmRu();
        };


        //Wagta ya baha gora sortirowka Assakdaky tegelek knopkanky
        $scope.sortWagtKnop = 'access_time';
        $scope.sortBahaKnop = 'attach_money';
        $scope.haysy='';
        $scope.sortGora = undefined;
        $scope.reverse = false;
        $scope.sort = function (nameF) {
            if(nameF === 'bahasy'){
                $scope.haysy='b';
            }
            if(nameF === 'wagty'){
                $scope.haysy='w';
            }
            if($scope.sortGora === nameF){
                if($scope.haysy === 'b' && $scope.sortBahaKnop === 'arrow_upward'){
                    $scope.sortBahaKnop = 'arrow_downward';
                    $scope.sortWagtKnop = 'access_time';
                }
                else if($scope.haysy === 'w' && $scope.sortWagtKnop === 'arrow_upward'){
                    $scope.sortWagtKnop = 'arrow_downward';
                    $scope.sortBahaKnop = 'attach_money';
                }
                else if($scope.haysy === 'b' && $scope.sortBahaKnop === 'arrow_downward'){
                    $scope.sortBahaKnop = 'arrow_upward';
                }
                else if($scope.haysy === 'w' && $scope.sortWagtKnop === 'arrow_downward'){
                    $scope.sortWagtKnop = 'arrow_upward';
                }
                $scope.reverse = !$scope.reverse;
            }
            else{
                $scope.sortGora = nameF;
                $scope.reverse = false;
                if($scope.haysy === 'b'){
                    $scope.sortBahaKnop = 'arrow_downward';
                    $scope.sortWagtKnop = 'access_time';
                }
                if($scope.haysy === 'w'){
                    $scope.sortWagtKnop = 'arrow_downward';
                    $scope.sortBahaKnop = 'attach_money';
                }
            }
        }
        //Welayata Ya Etraba Yada Dayhana gora sortirowka ucin
        $scope.welJogap = welayatFilter.welayatJogap();
        $scope.etrJogap = welayatFilter.etrapJogap();
        $scope.dayJogap = welayatFilter.dayhanJogap();
        //Kataloga gora Filter etmek ucin
        $scope.katFilHome = katalogFilter.KatalogJogap();

        //Glawny stranitsadan id sinu alyp sol sahypa ugratya
        $scope.maglumatUgratmak = function(idName, katUra2, katUra3, katUra4, yarayamy) {/*newKategoriH*/
            // console.log('Ugratmaly Maglumat', idName, katUra2, katUra3, katUra4, yarayamy);
            globalPeremenFac.updateHP(idName, katUra2, katUra3, katUra4, yarayamy);/*$scope.idUser);*/
            // $scope.idUser = '';
        };
        //Puly ululugyna gora sort etmek
        // $scope.maxPrice = katalogFilter.maxPriceFacJogap();
        // $scope.minPrice = katalogFilter.minPriceFacJogap();
        // $scope.priceMin = function (location) {
        //     console.log($scope.minPrice, "MIN<=0",$scope.minPrice<=0, 'null', $scope.minPrice===null, 'undefined', $scope.minPrice===undefined);
        //     if($scope.minPrice<=0 || $scope.minPrice===null || $scope.minPrice===undefined){
        //         $scope.minPrice=0
        //     }
        //     return location.bahasy >= $scope.minPrice;
        // };
        // $scope.priceMax = function (location) {
        //     console.log($scope.maxPrice, "MAX<=0",$scope.maxPrice<=0, 'null', $scope.maxPrice===null, 'undefined', $scope.maxPrice===undefined);
        //     if($scope.maxPrice<=0 || $scope.maxPrice===null || $scope.maxPrice===undefined){
        //         $scope.maxPrice=100000000000;
        //     }
        //     return location.bahasy <= $scope.maxPrice;
        // };

        //Pul saylanda sona gora bahasyny uytgetmeli
        $scope.pulSaylaHomePage = 'TMM';
        $scope.pulSaylaHomePageTMM=true;
        $scope.pulSaylaHomePageTMT=false;
        $scope.pulSaylaHomePageUSA=false;
        $scope.jogapPulBelligi = function (j) {
            if(j==='TMM'){
                $scope.pulSaylaHomePageTMM=true;
                $scope.pulSaylaHomePageTMT=false;
                $scope.pulSaylaHomePageUSA=false;
            }
            if(j==='TMT'){
                $scope.pulSaylaHomePageTMM=false;
                $scope.pulSaylaHomePageTMT=true;
                $scope.pulSaylaHomePageUSA=false;
            }
            if(j==='USA'){
                $scope.pulSaylaHomePageTMM=false;
                $scope.pulSaylaHomePageTMT=false;
                $scope.pulSaylaHomePageUSA=true;
            }
            // console.log(j);
        };


        //Bahasyny znagyna gora uytgetmeli
        $scope.bahasyUyt = function (jBaha, jZnak) {
            if(jZnak==='TMM (Köne)'){
                return jBaha/5000;
            }
            if(jZnak==='TMT (Täze)'){
                return jBaha;
            }
            if(jZnak==='$'){
                return jBaha*3.5;
            }
        };

        //Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie
        $scope.userBazaCook = $cookieStore.get('loginUserBaza');

        $scope.yarayaTawUser = [];
        //wagtlayyn bazan ady
        $scope.yarayaTawUserBN = [];

///////////////////////////////////////////ELAYAT WE DAYHAN KATALOG////////////////////////////////////////
        $scope.welayatlar = [{wariant: "Aşgabat", wariantRU: "Ашхабад"},
            {wariant: "Ahal", wariantRU: "Ахал"},
            {wariant: "Mary", wariantRU: "Мары"},
            {wariant: "Lebap", wariantRU: "Лебап"},
            {wariant: "Daşoguz", wariantRU: "Дашогуз"},
            {wariant: "Balkan", wariantRU: "Балкан"}];
        $scope.etraplar = ertdayBD.ugratertaplar();
        $scope.dayhan = ertdayBD.ugratdayhanlar();
        if(!$scope.etraplar) {
            $http.get("http://a0109349.xsph.ru/gaytaretraplar").then(function (newItem) {
                // console.log('Etraplar45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.etraplar = newItem.data;
                ertdayBD.yattutertaplar(newItem.data)
            })
        }
        if(!$scope.dayhan) {
            $http.get("http://a0109349.xsph.ru/gaytardayhanlar").then(function (newItem) {
                // console.log('Dayhanlae45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.dayhan = newItem.data;
                ertdayBD.yattutdayhanlar(newItem.data)
            })
        }


        $scope.katUra1Rus = [{wariant: "Transport",wariantRU: "Транспорт", value: "Transport", surat: "1transport"},
            {wariant: "Emlak",wariantRU: "Недвижимость", value: "Emlak", surat: "1emlak"},
            {wariant: "Iş",wariantRU: "Работа", value: "Iş", surat: "1is"},
            {wariant: "Hyzmat",wariantRU: "Услуги", value: "Hyzmat", surat: "1hyzmat"},
            {wariant: "Öý-Hojalyk üçin", wariantRU: "Для Дома и Дачи", value: "Öý-Hojalyk üçin", surat: "1oyuç"},
            {wariant: "Harytlar", wariantRU: "Изделия", value: "Harytlar", surat: "1haryt"},
            {wariant: "Egin Eşikler we Bujiteria", wariantRU: "Одежды и Бижутерия", value: "Egin Eşikler we Bujiteria", surat: "1egin"},
            {wariant: "Tehnika", wariantRU: "Техника", value: "Tehnika", surat: "1tehnika"},
            {wariant: "Maldarçylyk we Bagbançylyk", wariantRU: "Животноводство и Садовничество", value: "Maldarçylyk we Bagbançylyk", surat: "1maldar"},
            {wariant: "Güýmenje we Dynç Alyş", wariantRU: "Хобби и Отдых", value: "Güýmenje we Dynç Alyş", surat: "1hobbi"}];
        {
            $scope.katUra2Rus = [{wariant: "Awtoulaglar", wariantRU: "Автомобили", haysykat: "Transport", surat: "2transportawt"},
                {wariant: "Matorlar we Mototehnikalar", wariantRU: "Мотоциклы и Мототехника", haysykat: "Transport", surat: "2transportmot"},
                {wariant: "Gruzowikler we Spestehnikalar", wariantRU: "Грузовики и Спецтехника", haysykat: "Transport", surat: "2transportgru"},
                {wariant: "Suw Transportlary", wariantRU: "Водный Транспорт", haysykat: "Transport", surat: "2transportsuw"},
                {wariant: "Zapçastlar we Bezegler", wariantRU: "Запчасти и Аксессуары", haysykat: "Transport", surat: "2transportzap"},

                {wariant: "Kwartira", wariantRU: "Квартиры", haysykat: "Emlak", surat: ""},
                {wariant: "Öý we Daça", wariantRU: "Дома, Дачи, Коттеджи", haysykat: "Emlak", surat: ""},
                {wariant: "Mellek", wariantRU: "Земельные Участки", haysykat: "Emlak", surat: ""},
                {wariant: "Garaž we Maşyn goýara ýer", wariantRU: "Гаражи и Машиноместа", haysykat: "Emlak", surat: ""},
                {wariant: "Täjirçilik emlägi", wariantRU: "Коммерческая Недвижимость", haysykat: "Emlak", surat: ""},

                {wariant: "Iş gözleýän", wariantRU: "Ищу Работу", haysykat: "Iş", surat: ""},
                {wariant: "Işgär Gözleýäň", wariantRU: "Ищу Работник", haysykat: "Iş", surat: ""},

                {wariant: "Toý", wariantRU: "Свадьба", haysykat: "Hyzmat", surat: ""},
                {wariant: "Maşyn/Ulaglar", wariantRU: "Ремонт Транспорта", haysykat: "Hyzmat", surat: ""},
                {wariant: "Tikin Maşyn", wariantRU: "Ремонт Швейные Машины", haysykat: "Hyzmat", surat: ""},
                {wariant: "Tehnika", wariantRU: "Ремонт Техники", haysykat: "Hyzmat", surat: ""},
                {wariant: "Gurluşyk", wariantRU: "Ремонт и Строительство", haysykat: "Hyzmat", surat: ""},
                {wariant: "Jaý/Öý Remont", wariantRU: "Ремонт Домов", haysykat: "Hyzmat", surat: ""},

                {wariant: "Halylar we Keçeler", wariantRU: "Коверы и Кошмы", haysykat: "Öý-Hojalyk üçin", surat: ""},
                {wariant: "Mebeller", wariantRU: "Мебель и Интерьер", haysykat: "Öý-Hojalyk üçin", surat: ""},
                {wariant: "Posuda we Harytlar", wariantRU: "Посуда и Товары", haysykat: "Öý-Hojalyk üçin", surat: ""},
                {wariant: "Gurluşyk Harytlary", wariantRU: "Ремонт и Строительство", haysykat: "Öý-Hojalyk üçin", surat: ""},

                {wariant: "Guýma", wariantRU: "Разливной", haysykat: "Harytlar", surat: ""},
                {wariant: "Demirden", wariantRU: "Из Железа", haysykat: "Harytlar", surat: ""},
                {wariant: "Agaçdan", wariantRU: "Из Дерево", haysykat: "Harytlar", surat: ""},
                {wariant: "Gurluşyk üçin", wariantRU: "Для Строительства", haysykat: "Harytlar", surat: ""},
                {wariant: "Oba Hojalyk üçin", wariantRU: "Бытовые", haysykat: "Harytlar", surat: ""},

                {wariant: "Gelin/Gyzlar üçin", wariantRU: "Для Невест/Девушек", haysykat: "Egin Eşikler we Bujiteria", surat: ""},
                {wariant: "Erkekler üçin", wariantRU: "Для Мужщин", haysykat: "Egin Eşikler we Bujiteria", surat: ""},
                {wariant: "Çagalar üçin", wariantRU: "Для Детей", haysykat: "Egin Eşikler we Bujiteria", surat: ""},

                {wariant: "Telefon", wariantRU: "Телефоны", haysykat: "Tehnika", surat: ""},
                {wariant: "Notebook", wariantRU: "Ноутбуки", haysykat: "Tehnika", surat: ""},
                {wariant: "Kompýuter we Printer", wariantRU: "Компьютеры и Принтеры", haysykat: "Tehnika", surat: ""},
                {wariant: "Audio we Wideo", wariantRU: "Аудио и Видео", haysykat: "Tehnika", surat: ""},
                {wariant: "Öý üçin", wariantRU: "Для Дома", haysykat: "Tehnika", surat: ""},
                {wariant: "Aş hana üçin/Gaz jaý", wariantRU: "Для Кухни", haysykat: "Tehnika", surat: ""},
                {wariant: "Howa we Klimat Enjamlary", wariantRU: "Климатическое Оборудование", haysykat: "Tehnika", surat: ""},
                {wariant: "Fotoapparatla we Dürbiler", wariantRU: "Фотоаппараты и Телескопы", haysykat: "Tehnika", surat: ""},
                {wariant: "Kompýuter üçin Harytlar", wariantRU: "Товары для Компьютера", haysykat: "Tehnika", surat: ""},

                {wariant: "Bag-Bakja", wariantRU: "Бахча", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},
                {wariant: "Nahallar we Şitiller", wariantRU: "Саженец и Рассада", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},
                {wariant: "Iri Haýwanlar", wariantRU: "Большие Животные", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},
                {wariant: "Uşak Haýwanlar", wariantRU: "Маленький Животные", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},

                {wariant: "Welosiped", wariantRU: "Велосипеды", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Bilet we Dynç Alyş", wariantRU: "Билеты и Путешествия", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Muzikantlar üçin", wariantRU: "Музыкальные Инструменты", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Sport", wariantRU: "Спорт и Отдых", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Oýunlar we Programmalar", wariantRU: "Игры и Программы", haysykat: "Güýmenje we Dynç Alyş", surat: ""}
            ];
            {
                $scope.katUra3Rus = [{wariant: "Sürülen", wariantRU: "С пробегом", haysykat: "Awtoulaglar", surat: ""},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Awtoulaglar", surat: ""},

                    {wariant: "Kwadrotsikl", wariantRU: "Квадроциклы", haysykat: "Matorlar we Mototehnikalar", surat: ""},
                    {wariant: "Maped we Skuter", wariantRU: "Мопеды и Скутеры", haysykat: "Matorlar we Mototehnikalar", surat: ""},
                    {wariant: "Matorlar", wariantRU: "Мотоциклы", haysykat: "Matorlar we Mototehnikalar", surat: ""},
                    {wariant: "Murawey", wariantRU: "Муравей", haysykat: "Matorlar we Mototehnikalar", surat: ""},

                    {wariant: "Awtobus", wariantRU: "Автобусы", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Kran", wariantRU: "Краны", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Kamaz", wariantRU: "Камаз", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Buldozer", wariantRU: "Бульдозеры", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Gruzowik", wariantRU: "Грузовики", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Komunalny Tehnika", wariantRU: "Коммунальная Техника", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Yeňil transport", wariantRU: "Лёгкий Транспорт", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Ýük ýükleýji maşynlar", wariantRU: "Погрузчики", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Teleşge", wariantRU: "Прицепы", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Traktor", wariantRU: "Трактор", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Oba-Hojalyk tehnikasy", wariantRU: "Сельхозтехника", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Gurluşuk tehnikasy", wariantRU: "Строительная Техника", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Tirkeg Çekijiler", wariantRU: "Тягачи", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Ekskawator", valwariantRUue: "Экскаваторы", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},

                    {wariant: "Kürekli gaýyk", wariantRU: "Каяки и Каноэ", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Gidrotsikl", wariantRU: "Гидроциклы", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Kater we Ýahta", wariantRU: "Катера и Яхты", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Matorly Lodka/Gaýyk", wariantRU: "Моторные Лодки", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Çişirilýän Lodka/Gaýyk", wariantRU: "Надувные Лодки", haysykat: "Suw Transportlary", surat: ""},

                    {wariant: "Zapçastlar", wariantRU: "Запчасти", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Bezegler", wariantRU: "Аксессуары", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "GPS-nawigator/Ugrukdurujy", wariantRU: "GPS-Навигаторы", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Ýag we Himiýa", wariantRU: "Масло и Автохимия", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Bagajnik we Kürçek", wariantRU: "Багажники и Фаркопы", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Audio we Wideotehnika", wariantRU: "Аудио- и Видеотехника", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Instrumentlar", wariantRU: "Инструменты", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Teleşga", wariantRU: "Прицепы", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Ogurluga garşy abzal", wariantRU: "Противоугонные Устройства", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Týuning/Özgerdiş", wariantRU: "Тюнинг", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Tekerler we Diskler", wariantRU: "Шины, Диски и Колёса", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Şlem, Aýakgap we egin eşikler", wariantRU: "Экипировка", haysykat: "Zapçastlar we Bezegler", surat: ""},

                    ////////////

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Kwartira"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Kwartira"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Kwartira"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Kwartira"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Öý we Daça"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Öý we Daça"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Öý we Daça"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Öý we Daça"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Mellek"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Mellek"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Mellek"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Mellek"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Garaž we Maşyn goýara ýer"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Täjirçilik emlägi"},

                    //////////

                    {wariant: "Internet we Telefon Ulgamy",wariantRU: "IT, Интернет, Телеком", haysykat: "Iş gözleýän"},
                    {wariant: "Awto ulag telekeçiligi",wariantRU: "Автомобильный Бизнес", haysykat: "Iş gözleýän"},
                    {wariant: "Bank",wariantRU: "Банки, Инвестиции", haysykat: "Iş gözleýän"},
                    {wariant: "Administrator",wariantRU: "Административная Работа", haysykat: "Iş gözleýän"},
                    {wariant: "Tejribesiz, Student",wariantRU: "Без Опыта, Студенты", haysykat: "Iş gözleýän"},
                    {wariant: "Hasapçylyk, Maliýe",wariantRU: "Бухгалтерия, Финансы", haysykat: "Iş gözleýän"},
                    {wariant: "Döwlet Işgäri",wariantRU: "Госслужба", haysykat: "Iş gözleýän"},
                    {wariant: "Öý işgäri",wariantRU: "Домашний Персонал", haysykat: "Iş gözleýän"},
                    {wariant: "Marketing, Reklama",wariantRU: "Маркетинг, Реклама, PR", haysykat: "Iş gözleýän"},
                    {wariant: "Medisina",wariantRU: "Медицина, Фармацевтика", haysykat: "Iş gözleýän"},
                    {wariant: "Ylym, Bilim",wariantRU: "Образование, Наука", haysykat: "Iş gözleýän"},
                    {wariant: "Goragçy, Howupsuzlyk",wariantRU: "Охрана, Безопасность", haysykat: "Iş gözleýän"},
                    {wariant: "Söwdegär",wariantRU: "Продажи", haysykat: "Iş gözleýän"},
                    {wariant: "Önümçilik",wariantRU: "Производство, Сырьё, с/х", haysykat: "Iş gözleýän"},
                    {wariant: "Ätiýaçlandyryş",wariantRU: "Страхование", haysykat: "Iş gözleýän"},
                    {wariant: "Gurluşyk",wariantRU: "Строительство", haysykat: "Iş gözleýän"},
                    {wariant: "Transport",wariantRU: "Транспорт, Логистика", haysykat: "Iş gözleýän"},
                    {wariant: "Turizm",wariantRU: "Туризм, Ррестораны", haysykat: "Iş gözleýän"},
                    {wariant: "Restoran",wariantRU: "Ресторанный", haysykat: "Iş gözleýän"},
                    {wariant: "Dolandyryjy",wariantRU: "Управление Персоналом", haysykat: "Iş gözleýän"},
                    {wariant: "Gözellik salony",wariantRU: "Салоны Красоты", haysykat: "Iş gözleýän"},
                    {wariant: "Başga Görnüşi...",wariantRU: "Другие...", haysykat: "Iş gözleýän"},

                    {wariant: "Internet we Telefon Ulgamy",wariantRU: "IT, Интернет, Телеком", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Awto ulag telekeçiligi",wariantRU: "Автомобильный Бизнес", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Bank",wariantRU: "Банки, Инвестиции", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Administrator",wariantRU: "Административная Работа", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Tejribesiz, Student",wariantRU: "Без Опыта, Студенты", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Hasapçylyk, Maliýe",wariantRU: "Бухгалтерия, Финансы", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Döwlet Işgäri",wariantRU: "Госслужба", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Öý işgäri",wariantRU: "Домашний Персонал", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Marketing, Reklama",wariantRU: "Маркетинг, Реклама, PR", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Medisina",wariantRU: "Медицина, Фармацевтика", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Ylym, Bilim",wariantRU: "Образование, Наука", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Goragçy, Howupsuzlyk",wariantRU: "Охрана, Безопасность", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Söwdegär",wariantRU: "Продажи", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Önümçilik",wariantRU: "Производство, Сырьё, с/х", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Ätiýaçlandyryş",wariantRU: "Страхование", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Gurluşyk",wariantRU: "Строительство", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Transport",wariantRU: "Транспорт, Логистика", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Turizm",wariantRU: "Туризм, Ррестораны", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Restoran",wariantRU: "Ресторанный", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Dolandyryjy",wariantRU: "Управление Персоналом", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Gözellik salony",wariantRU: "Салоны Красоты", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Başga Görnüşi...",wariantRU: "Другие...", haysykat: "Işgär Gözleýäň"},

                    //////

                    {wariant: "Wideoçy",wariantRU: "Видеосъёмка", haysykat: "Toý"},
                    {wariant: "Suratçy",wariantRU: "Фотосъёмка", haysykat: "Toý"},
                    {wariant: "Toý Mekany",wariantRU: "Ресторан для Свадьбы", haysykat: "Toý"},
                    {wariant: "Stol Bezegleri",wariantRU: "Украшение Столов", haysykat: "Toý"},
                    {wariant: "Öý/Jaý Bezegleri",wariantRU: "Украшение Домов", haysykat: "Toý"},
                    {wariant: "Fatalar we Kürteler",wariantRU: "Свадебное Платье we Курте", haysykat: "Toý"},
                    {wariant: "Kastýum we Milli eşikler",wariantRU: "Костюмы и ноц. Одежды", haysykat: "Toý"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Toý"},

                    {wariant: "Remont",wariantRU: "Ремонт", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Krasga",wariantRU: "Краска", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Zapçastlaryny Çalyşmak",wariantRU: "Поменять Запчасти", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Teker Bejermek",wariantRU: "Ремонт Шины", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Maşyn/Ulaglar"},

                    {wariant: "Remont",wariantRU: "Ремонт", haysykat: "Tikin Maşyn"},
                    {wariant: "Ýag Çalyşmak",wariantRU: "Поменять Масло", haysykat: "Tikin Maşyn"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Tikin Maşyn"},

                    {wariant: "Telefon Remont",wariantRU: "Телефон Ремонт", haysykat: "Tehnika"},
                    {wariant: "Kompýuter Remont",wariantRU: "Компьютер Ремонт", haysykat: "Tehnika"},
                    {wariant: "Holodilnik",wariantRU: "Холодильник Ремонт", haysykat: "Tehnika"},
                    {wariant: "Konsaner",wariantRU: "Кондиционеры Ремонт", haysykat: "Tehnika"},
                    {wariant: "Telewizor",wariantRU: "Телевизор Ремонт", haysykat: "Tehnika"},
                    {wariant: "Tehnika Gurnamak",wariantRU: "Установка Техники", haysykat: "Tehnika"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Tehnika"},

                    {wariant: "Uly plan",wariantRU: "Большой План", haysykat: "Gurluşyk"},
                    {wariant: "Kiçi plan",wariantRU: "Маленький План", haysykat: "Gurluşyk"},
                    {wariant: "Nawes",wariantRU: "Навес", haysykat: "Gurluşyk"},
                    {wariant: "Jaýyň üsti/Kryşasy",wariantRU: "Крыша", haysykat: "Gurluşyk"},
                    {wariant: "Patalok",wariantRU: "Паталок", haysykat: "Gurluşyk"},
                    {wariant: "Betonlamak (Öýüň töweregine)",wariantRU: "Вылить Бетон(?)", haysykat: "Gurluşyk"},
                    {wariant: "Howuz Guýmak",wariantRU: "Построить Водосборник", haysykat: "Gurluşyk"},
                    {wariant: "Guýy Gazmak",wariantRU: "Копать Колодец", haysykat: "Gurluşyk"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk"},

                    {wariant: "Komnat Remonty",wariantRU: "Ремонт Комнат", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Kwartira Remonty",wariantRU: "Ремонт Квартир", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Öý/Jaý Remonty",wariantRU: "Ремонт Домов", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Jaý/Öý Remont"},

                    //////////

                    {wariant: "Türkmen Haly", wariantRU: "Туркменские Коверы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Eýran Haly", wariantRU: "Иранские Коверы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Keçe", wariantRU: "Кошмы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Palas", wariantRU: "Палас", haysykat: "Halylar we Keçeler"},

                    {wariant: "Kompýuter üçin Stolar we Otygyçlar", wariantRU: "Компьютерные Столы и Кресла", haysykat: "Mebeller"},
                    {wariant: "Krowat", wariantRU: "Кровати", haysykat: "Mebeller"},
                    {wariant: "Diwan", wariantRU: "Диваны", haysykat: "Mebeller"},
                    {wariant: "Otyrgyç", wariantRU: "Кресла", haysykat: "Mebeller"},
                    {wariant: "Kuhniýa Mebelleri", wariantRU: "Кухонные Гарнитуры", haysykat: "Mebeller"},
                    {wariant: "Çyra/ Ýagtyldyş Enjamlary", wariantRU: "Освещение", haysykat: "Mebeller"},
                    {wariant: "Tumboçka", wariantRU: "Подставки и Тумбы", haysykat: "Mebeller"},
                    {wariant: "Parta we Otugyç", wariantRU: "Столы и Стулья", haysykat: "Mebeller"},
                    {wariant: "Şkaf we Çekmeli Şkaf", wariantRU: "Шкафы и Комоды", haysykat: "Mebeller"},
                    {wariant: "Serwant", wariantRU: "Сервант", haysykat: "Mebeller"},
                    {wariant: "Sandyk", wariantRU: "Сундук", haysykat: "Mebeller"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Mebeller"},

                    {wariant: "Pasudalar/Gap Gaçlar", wariantRU: "Посуды", haysykat: "Posuda we Harytlar"},
                    {wariant: "Kuhniýa üçin Harytlar", wariantRU: "Товары для Кухни", haysykat: "Posuda we Harytlar"},

                    {wariant: "Gapylar", wariantRU: "Двери", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Instrumentlar/Abzallar", wariantRU: "Инструменты", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Okno we Balkon", wariantRU: "Окна и Балконы", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk Harytlary"},

                    ///////////

                    {wariant: "Gazanlar", wariantRU: "Казаны", haysykat: "Guýma"},
                    {wariant: "Çäýnekler", wariantRU: "Чайники", haysykat: "Guýma"},
                    {wariant: "Käse", wariantRU: "Чашки", haysykat: "Guýma"},
                    {wariant: "Küýze", wariantRU: "Ваза", haysykat: "Guýma"},
                    {wariant: "Kafel", wariantRU: "Кафель", haysykat: "Guýma"},
                    {wariant: "Çemçe", wariantRU: "Лошка", haysykat: "Guýma"},
                    {wariant: "Okora/Tarelka", wariantRU: "Тарелка", haysykat: "Guýma"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Guýma"},

                    {wariant: "Ojak", wariantRU: "Оджак", haysykat: "Demirden"},
                    {wariant: "Zabor", wariantRU: "Забор", haysykat: "Demirden"},
                    {wariant: "Peç", wariantRU: "Печь", haysykat: "Demirden"},
                    {wariant: "Reşotka", wariantRU: "Решетка", haysykat: "Demirden"},
                    {wariant: "Galtak", wariantRU: "Тачка", haysykat: "Demirden"},
                    {wariant: "Nawes", wariantRU: "Навес", haysykat: "Demirden"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Demirden"},

                    {wariant: "Tapjan", wariantRU: "Тапчан", haysykat: "Agaçdan"},
                    {wariant: "Şkaf", wariantRU: "Шкаф", haysykat: "Agaçdan"},
                    {wariant: "Tumoçgalar", wariantRU: "Тумбочки", haysykat: "Agaçdan"},
                    {wariant: "Sandyk", wariantRU: "Сундук", haysykat: "Agaçdan"},
                    {wariant: "Çemçe", wariantRU: "Лошка", haysykat: "Agaçdan"},
                    {wariant: "Gap Gaçlar", wariantRU: "Посуда", haysykat: "Agaçdan"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Agaçdan"},

                    {wariant: "Sement", wariantRU: "Семент", haysykat: "Gurluşyk üçin"},
                    {wariant: "Şipr", wariantRU: "Шипр и Кровля", haysykat: "Gurluşyk üçin"},
                    {wariant: "Agaç", wariantRU: "Дерево", haysykat: "Gurluşyk üçin"},
                    {wariant: "Çagyl", wariantRU: "Чагыл", haysykat: "Gurluşyk üçin"},
                    {wariant: "Kerpiç", wariantRU: "Керпич", haysykat: "Gurluşyk üçin"},
                    {wariant: "Panel", wariantRU: "Панель", haysykat: "Gurluşyk üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk üçin"},

                    {wariant: "Pil", wariantRU: "Пил", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Orak", wariantRU: "Орак", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Dyrmyk", wariantRU: "Дырмык", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Lapata", wariantRU: "Лапата", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Kätmen", wariantRU: "Катмен", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Gyrkylyk", wariantRU: "Гыркылык", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Oba Hojalyk üçin"},

                    ////////////

                    {wariant: "Ýakalar", wariantRU: "Яка", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Köýnekler", wariantRU: "Рубашка", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Žempirler", wariantRU: "Джемпер", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Paltolar", wariantRU: "Пальто", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Balaklar", wariantRU: "Балак", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Sagat", wariantRU: "Часы", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Ýüzük", wariantRU: "Кольцо", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Bilezik", wariantRU: "Брослет", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Gulak Halka", wariantRU: "Серьги", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Monjuk", wariantRU: "Ожерелье", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Zynjyr", wariantRU: "Цепи", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Şaý Sepler", wariantRU: "Шай Сеп", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gelin/Gyzlar üçin"},

                    {wariant: "Maýkalar", wariantRU: "Майки", haysykat: "Erkekler üçin"},
                    {wariant: "Jalbarlar", wariantRU: "Брюки", haysykat: "Erkekler üçin"},
                    {wariant: "Jynsylar", wariantRU: "Джинсы", haysykat: "Erkekler üçin"},
                    {wariant: "Köýnekler", wariantRU: "Рубаха", haysykat: "Erkekler üçin"},
                    {wariant: "Žempirler", wariantRU: "Джемпер", haysykat: "Erkekler üçin"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки", haysykat: "Erkekler üçin"},
                    {wariant: "Paltolar", wariantRU: "Пальто", haysykat: "Erkekler üçin"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь", haysykat: "Erkekler üçin"},
                    {wariant: "Sagat", wariantRU: "Часы", haysykat: "Erkekler üçin"},
                    {wariant: "Zynjyr", wariantRU: "Цепи", haysykat: "Erkekler üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Erkekler üçin"},

                    {wariant: "Egin Eşikler", wariantRU: "Одежды", haysykat: "Çagalar üçin"},
                    {wariant: "Oýunjaklar", wariantRU: "Игрушка", haysykat: "Çagalar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Çagalar üçin"},

                    ////////////////

                    {wariant: "Ulanylan", wariantRU: "Использованный", haysykat: "Telefon"},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Telefon"},
                    {wariant: "Ratsiýa(Rasiýa)", wariantRU: "Рации", haysykat: "Telefon"},
                    {wariant: "Domaşny/Öý Telefony", wariantRU: "Домашный Телефон", haysykat: "Telefon"},
                    {wariant: "Bezegler", wariantRU: "Аксессуары", haysykat: "Telefon"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Telefon"},

                    {wariant: "Ulanylan", wariantRU: "Использованный", haysykat: "Notebook"},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Notebook"},
                    {wariant: "Monitor/Ekran", wariantRU: "Монитор", haysykat: "Notebook"},
                    {wariant: "Batareýa", wariantRU: "Батарея", haysykat: "Notebook"},
                    {wariant: "Zarýat Beriji", wariantRU: "Зарядник", haysykat: "Notebook"},

                    {wariant: "Monitor/Ekran", wariantRU: "Монитор", haysykat: "Kompýuter we Printer"},
                    {wariant: "Korpusy", wariantRU: "Корпус", haysykat: "Kompýuter we Printer"},
                    {wariant: "Zapçastlary...", wariantRU: "Запчасти...", haysykat: "Kompýuter we Printer"},
                    {wariant: "Printer", wariantRU: "Принтер", haysykat: "Kompýuter we Printer"},

                    {wariant: "MP3 pleer", wariantRU: "MP3-плееры", haysykat: "Audio we Wideo"},
                    {wariant: "Kolonkalar we Akustika", wariantRU: "Колонки и Акустика", haysykat: "Audio we Wideo"},
                    {wariant: "DVD, Wideo we Blu-ray Okaýjylar", wariantRU: "DVD, Видео и Blu-ray Плееры", haysykat: "Audio we Wideo"},
                    {wariant: "Wideo Kamera", wariantRU: "Видеокамеры", haysykat: "Audio we Wideo"},
                    {wariant: "Kabeller we Adapterlar", wariantRU: "Кабели и Адаптеры", haysykat: "Audio we Wideo"},
                    {wariant: "Mikrafon", wariantRU: "Микрофоны", haysykat: "Audio we Wideo"},
                    {wariant: "Muzykalny Sentr, Magnitafon", wariantRU: "Музыкальные Центры, Магнитолы", haysykat: "Audio we Wideo"},
                    {wariant: "Nauşnikler", wariantRU: "Наушники", haysykat: "Audio we Wideo"},

                    {wariant: "Pylesos", wariantRU: "Пылесосы", haysykat: "Öý üçin"},
                    {wariant: "Kir maşyn", wariantRU: "Стиральные Машины", haysykat: "Öý üçin"},
                    {wariant: "Ütük", wariantRU: "Утюги", haysykat: "Öý üçin"},
                    {wariant: "Tikin maşyn", wariantRU: "Швейные Машины", haysykat: "Öý üçin"},

                    {wariant: "Mikrawalnowka", wariantRU: "Микроволновые Печи", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Plita", wariantRU: "Плита", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Haladilnik we Doňduryjy", wariantRU: "Холодильники и Морозильные Камеры", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Mikser", wariantRU: "Миксер", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Gap gaç ýuwujy maşyn", wariantRU: "Посудомоечные Машины", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Ownuk uşak tehnikalar", wariantRU: "Мелкая Кухонная Техника", haysykat: "Aş hana üçin/Gaz jaý"},

                    {wariant: "Wentilýator", wariantRU: "Вентиляторы", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Kandisoner", wariantRU: "Кондиционеры", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Ýyladyjy", wariantRU: "Обогреватели", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Howa Arassalaýjy", wariantRU: "Очистители Воздуха", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Termometr", wariantRU: "Термометры и Метеостанции", haysykat: "Howa we Klimat Enjamlary"},

                    {wariant: "Plýonkaly Fotoapparatla", wariantRU: "Плёночные Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Sifrawoý Fotoapparatla", wariantRU: "Цифравые Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Profesionalnyý Fotoapparatla", wariantRU: "Профециональные Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Obýektiwler", wariantRU: "Объективы", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Dürbuler we Teleskoplar", wariantRU: "Бинокли и Телескопы", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Dürli Enjamlar", wariantRU: "Оборудование и Аксессуары", haysykat: "Fotoapparatla we Dürbiler"},

                    {wariant: "Web-Kamera", wariantRU: "Веб-камеры", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Josýstik we Rol", wariantRU: "Джойстики и Рули", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Klawiatura we Myşka/Syçanjyk", wariantRU: "Клавиатуры и Мыши", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Internet üçin", wariantRU: "Сетевое оборудование", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Žoski disler we Fleşka", wariantRU: "Жёсткие Диски и Флэшки", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Kompýuter üçin Harytlar"},

                    ////////////

                    {wariant: "Üzüm", wariantRU: "Виноград", haysykat: "Bag-Bakja"},
                    {wariant: "Alma", wariantRU: "Яблоко", haysykat: "Bag-Bakja"},
                    {wariant: "Erik", wariantRU: "Абрикос", haysykat: "Bag-Bakja"},
                    {wariant: "Almyrt", wariantRU: "Груша", haysykat: "Bag-Bakja"},
                    {wariant: "Şetdaly", wariantRU: "Персик", haysykat: "Bag-Bakja"},
                    {wariant: "Limon", wariantRU: "Лимон", haysykat: "Bag-Bakja"},
                    {wariant: "Pamidor", wariantRU: "Памидор", haysykat: "Bag-Bakja"},
                    {wariant: "Hyýar", wariantRU: "Огурец", haysykat: "Bag-Bakja"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Bag-Bakja"},

                    {wariant: "Ýolka", wariantRU: "Ёлка", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Arça", wariantRU: "Арча", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Şitiller", wariantRU: "Рассады", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Baglar", wariantRU: "Сады", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Güller", wariantRU: "Цветы", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Nahallar we Şitiller"},

                    {wariant: "Sygyr", wariantRU: "Корова", haysykat: "Iri Haýwanlar"},
                    {wariant: "Öküz", wariantRU: "Бык", haysykat: "Iri Haýwanlar"},
                    {wariant: "Göle", wariantRU: "Теленок", haysykat: "Iri Haýwanlar"},
                    {wariant: "At", wariantRU: "Конь", haysykat: "Iri Haýwanlar"},
                    {wariant: "Düýe", wariantRU: "Верблюд", haysykat: "Iri Haýwanlar"},
                    {wariant: "Köşek", wariantRU: "Верблюжонок", haysykat: "Iri Haýwanlar"},

                    {wariant: "Goýun", wariantRU: "Баран", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Geçi", wariantRU: "Козел", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Towuk", wariantRU: "Курица", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Jüýje", wariantRU: "Цыпленок", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Towşan", wariantRU: "Кролик", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Induk", wariantRU: "Индюк", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Gaz", wariantRU: "Гусь", haysykat: "Uşak Haýwanlar"},
                    {wariant: "It", wariantRU: "Собака", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Kepderi", wariantRU: "Голубь", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Baýyrlyk üçin", wariantRU: "Горные", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Uşak Haýwanlar"},

                    ///////////////

                    {wariant: "Ýol üçin", wariantRU: "Дорожные", haysykat: "Welosiped"},
                    {wariant: "Çagalar üçin", wariantRU: "Детские", haysykat: "Welosiped"},
                    {wariant: "Zapjastlar we Bezegler", wariantRU: "Запчасти и Аксессуары", haysykat: "Welosiped"},

                    {wariant: "Daşary Ýurt üçin", wariantRU: "Путешествия", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Sirk üçin", wariantRU: "Цирк", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Konsert üçin", wariantRU: "Концерты", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Teatr we Kino üçin", wariantRU: "Театр и Кино", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Bilet we Dynç Alyş"},

                    {wariant: "Gitara", wariantRU: "Гитара", haysykat: "Muzikantlar üçin"},
                    {wariant: "Dutar", wariantRU: "Дутар", haysykat: "Muzikantlar üçin"},
                    {wariant: "Gyjak", wariantRU: "Гыджак", haysykat: "Muzikantlar üçin"},
                    {wariant: "Deprek", wariantRU: "Барабан и Ударные", haysykat: "Muzikantlar üçin"},
                    {wariant: "Tüýdik", wariantRU: "Духовые", haysykat: "Muzikantlar üçin"},
                    {wariant: "Pionina", wariantRU: "Пианино и Другие Клавишные", haysykat: "Muzikantlar üçin"},
                    {wariant: "Akardion", wariantRU: "Аккордеоны", haysykat: "Muzikantlar üçin"},
                    {wariant: "Skripka", wariantRU: "Скрипки и Другие Смычковые", haysykat: "Muzikantlar üçin"},
                    {wariant: "Studia we Konsert üçin", wariantRU: "Для Студии и Концертов", haysykat: "Muzikantlar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Muzikantlar üçin"},

                    {wariant: "Tennis üçin", wariantRU: "Теннис", haysykat: "Sport"},
                    {wariant: "Boks üçin", wariantRU: "Бокс", haysykat: "Sport"},
                    {wariant: "Trenirowka üçin", wariantRU: "Фитнес и Тренажёры", haysykat: "Sport"},
                    {wariant: "Skeýbordlar we Tekerçekler", wariantRU: "Ролики и Скейтбординг", haysykat: "Sport"},
                    {wariant: "Stol oýunlary", wariantRU: "Настольные Игры", haysykat: "Sport"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Sport"},

                    {wariant: "PlayStation üçin oýunlar", wariantRU: "Игры для PlayStation", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Kompýuter Oýunlary", wariantRU: "Компьютерные Игры", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Programmalar", wariantRU: "Программы", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Oýunlar we Programmalar"}
                ];

            }
        }
        $scope.bahasynameRus = [
            {wariant:"Bahasy",wariantRU:"Цена"},
            {wariant:"Tölegi",wariantRU:"Оплата"},
            {wariant:"Biriniň Bahasy",wariantRU:"Цена за одного"},
            {wariant:"Bir kg-yň Bahasy",wariantRU:"Цена за 1 кг"},
            {wariant:"Bir Tonnaň Bahasy",wariantRU:"Цена за один тонн"},
            {wariant:"Garaşylýan Aýlyk",wariantRU:"Ожидаемая зарплата"},
            {wariant:"Bir Düýbiň Bahasy",wariantRU:"Цена за 1 коренной"},
            {wariant:"Bir Haltaň Bahasy",wariantRU:"Цена за один мешек"},
            {wariant:"Ýüz Düýbiň Bahasy",wariantRU:"Цена за 100 коренной"},
            {wariant:"Müň Kerpiç Bahasy",wariantRU:"Цена за тысяч кирпичей"},
            {wariant:"Müň Şitileň Bahasy",wariantRU:"Цена за тыс. рассад"}]

        // $scope.userBaza = $cookieStore.get('loginUserBaza');
        console.log('COOKIE',$scope.userBazaCook);
        //Yarayanlan Spisegi Massiwde
        $scope.yarayaMass = [];
        //wagtlayyn cookie ucin
        $scope.yarayaMassUser = [];
        $scope.yarayaMassUserBN = [];
        //YARAYA Mana yaraya knopkasyny basmaly
        $scope.usersSQL = $resource('http://a0109349.xsph.ru/useryar');
        $scope.manaYaraya = function (infoYaraya, infoKeyT, obUmumySQL, ev) {
            if($scope.userBazaCook) {

                facHaysyBazadanZagruzkaEtmeli.haysyKatKabuletmak2(obUmumySQL);
                var haysyBaza2 = facHaysyBazadanZagruzkaEtmeli.haysyKatUgratmak2();
                console.log('Haysy baza HOME:', haysyBaza2)
                console.log('Haysy baza HOME2:', obUmumySQL)
                //Baza File yazmak ucin bir setire duzup ugratya
                $scope.yarayaMasList = '';
                //Eger on yaraya diyip bellemedik bolsa
                if ($scope.userBazaCook.yarayaMasArray) {
                    $scope.yarayaMassUser = $scope.userBazaCook.yarayaMasArray;
                    $scope.yarayaMassUserBN = $scope.userBazaCook.yarayaMasArrayBN;
                }
                //Bazadan gelen spisekd
                $scope.yarayanBarYok = 'Yok';
                if ($scope.userBazaCook.yarayaMasArray) {
                    for (var tea = 0; tea < $scope.yarayaMassUser.length; tea++) {
                        // console.log('Baryny aylanmaly:', $scope.yarayaMassUser[tea],'+++')
                        if (infoKeyT === $scope.yarayaMassUser[tea]) {
                            $scope.yarayanBarYok = 'Bar';
                            break;
                        }
                    }
                }

                //ON BAZADA YOK
                if ($scope.yarayanBarYok === 'Yok') {
                    $scope.yarayaMassUser.push(infoKeyT);
                    $scope.yarayaMassUserBN.push(haysyBaza2);
                    if ($scope.yarayaMassUser) {
                        for (var ar = 0; ar < $scope.yarayaMassUser.length; ar++) {
                            if ($scope.yarayaMasList === '') {
                                $scope.yarayaMasList = $scope.yarayaMassUser[ar] + '+' + $scope.yarayaMassUserBN[ar]
                            }
                            else {
                                $scope.yarayaMasList = $scope.yarayaMasList + '+' + $scope.yarayaMassUser[ar] + '+' + $scope.yarayaMassUserBN[ar]
                            }
                        }
                    }
                    //Uzyn spisek edip gosýa
                    $scope.userBazaCook.yarayaMasArrayList = $scope.yarayaMasList;
                    //Uzyn massiw edip gosya
                    $scope.userBazaCook.yarayaMasArray = $scope.yarayaMassUser;
                    $scope.userBazaCook.yarayaMasArrayBN = $scope.yarayaMassUserBN;
                    //Severe Ugratya
                    new $scope.usersSQL($scope.userBazaCook).$save().then(function (newItem) {
                        console.log('STAR Baza1:');
                        $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                        if ($scope.userBazaCook && $scope.userBazaCook.yarayaMasArray) {
                            for (var t = 0; t < $scope.news.length; t++) {
                                if ($scope.news[t].idSQL === infoKeyT || $scope.news[t].keyT === infoKeyT) {
                                    $scope.news[t].yaraya = true;
                                }
                            }
                        }
                    });
                }
                //ON BAZADA BAR
                if ($scope.yarayanBarYok === 'Bar') {
                    var index = $scope.yarayaMassUser.indexOf(infoKeyT);
                    $scope.yarayaMassUser.splice(index, 1);
                    var index = $scope.yarayaMassUserBN.indexOf(haysyBaza2);
                    $scope.yarayaMassUserBN.splice(index, 1);
                    if ($scope.yarayaMassUser) {
                        for (var ar = 0; ar < $scope.yarayaMassUser.length; ar++) {
                            if ($scope.yarayaMasList === '') {
                                $scope.yarayaMasList = $scope.yarayaMassUser[ar] + '+' + $scope.yarayaMassUserBN[ar]
                            }
                            else {
                                $scope.yarayaMasList = $scope.yarayaMasList + '+' + $scope.yarayaMassUser[ar] + '+' + $scope.yarayaMassUserBN[ar]
                            }
                        }
                    }
                    //Uzyn spisek edip gosýa
                    $scope.userBazaCook.yarayaMasArrayList = $scope.yarayaMasList;
                    //Uzyn massiw edip gosya
                    $scope.userBazaCook.yarayaMasArray = $scope.yarayaMassUser;
                    $scope.userBazaCook.yarayaMasArrayBN = $scope.yarayaMassUserBN;
                    //Severe Ugratya
                    new $scope.usersSQL($scope.userBazaCook).$save().then(function (newItem) {
                        console.log('STAR Baza2:');
                        $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                        if ($scope.userBazaCook && $scope.userBazaCook.yarayaMasArray) {
                            for (var t = 0; t < $scope.news.length; t++) {
                                if ($scope.news[t].idSQL === infoKeyT || $scope.news[t].keyT === infoKeyT) {
                                    $scope.news[t].yaraya = 'false';
                                }
                            }
                        }
                    });
                }

            }else{
                console.log('Girmansin')
                // $location.path('/page4');
                // $scope.showConfirm = function(ev) {
                    // Appending dialog to document.body to cover sidenav in docs app
                    var confirm = $mdDialog.confirm()
                        .title('Öz adyňyzdan giriň')
                        .textContent('Göwnüňize ýarany bellemek üçin öz adyňyzdan giriň ýa-da registrasiýa boluň. Girmelimi?')
                        // .ariaLabel('Lucky day')
                        .targetEvent(ev)
                        .ok('Hawa')
                        .cancel('Ýok');
                    $mdDialog.show(confirm).then(function() {
                        console.log('Hawa');
                        $location.path('/page4');
                    }, function() {
                        console.log('Yok');
                    });
                // };
            }
            // console.log('--------------------------')
        };

        // KNOPKA GOSMAK ////// KNOPKA GOSMAK ////// KNOPKA GOSMAK ////// KNOPKA GOSMAK ////
        $scope.knopkagosmak = function (ev) {
            var confirm = $mdDialog.confirm()
                .title('Öz adyňyzdan giriň')
                .textContent('Täze tawar goşmak üçin öz adyňyzdan giriň ýa-da registrasiýa boluň. Girmelimi?')
                // .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Hawa')
                .cancel('Ýok');
            $mdDialog.show(confirm).then(function() {
                console.log('Hawa');
                $location.path('/page4');
            }, function() {
                console.log('Yok');
            });
        }

        //Skacat etmeli bazasyny bilmek ucin
        var haysyBaza = facHaysyBazadanZagruzkaEtmeli.haysyKatUgratmak();
        console.log('Haysy baza', haysyBaza)
        $scope.news = [];
        //Jemi Maxsa yetse gorkezmeli dal
        $scope.noMoreItemsAvailable = false;
        //Bazadan skacat etmeli sany
        var naceTawarBaza = 0;
        $scope.loadMore = function() {
            $http({
                method: "POST",
                url: "http://a0109349.xsph.ru/tawarpo" + haysyBaza + "/" + naceTawarBaza,
                data : $scope.updateSQL
            }).then(function (newDATA) {
                // angular.forEach(newDATA.data, function (newsArticle) {
                //     $scope.news.push(newsArticle);
                // });
                naceTawarBaza = naceTawarBaza + 10;
                if ( naceTawarBaza > 100 ) {
                    $scope.noMoreItemsAvailable = true;
                }
                $scope.newsTIME = newDATA.data;
                if($scope.userBazaCook && $scope.userBazaCook.yarayaMasArray) {
                    for (var t = 0; t < $scope.newsTIME.length; t++) {
                        for (var tr = 0; tr < $scope.userBazaCook.yarayaMasArray.length; tr++) {
                            if ($scope.newsTIME[t].idSQL === $scope.userBazaCook.yarayaMasArray[tr] || $scope.newsTIME[t].keyT === $scope.userBazaCook.yarayaMasArray[tr]) {
                                $scope.newsTIME[t].yaraya = true;
                            }
                        }
                    }
                }
                $scope.news = $scope.newsTIME;
                // console.log('BAZA YARAYA2', $scope.news)
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        };


        //KURS DOLLAR
        $scope.consDollar = '';
        $http.get("http://a0109349.xsph.ru/kursdol").then(function (newItem) {
            // console.log('Dollar: ', newItem.data[0].nace)
            $scope.consDollar = newItem.data[0].nace;
        })
        //Puly ululugyna gora sort etmek
        $scope.maxPrice = 9999999999;
        if(katalogFilter.maxPriceFacJogap()!=undefined){
            $scope.maxPrice = katalogFilter.maxPriceFacJogap();
        }
        $scope.minPrice = 0;
        if(katalogFilter.minPriceFacJogap()!=undefined){
            $scope.minPrice = katalogFilter.minPriceFacJogap();
        }
        //Pul belligini uytgedenimizde
        $scope.pulBelligi = katalogFilter.PulJogap();
        $scope.updateSQL = {};
        if($scope.pulBelligi==='TMM (Köne)'){
            $scope.updateSQL.PulMax = $scope.maxPrice/5000;
            $scope.updateSQL.PulMin = $scope.minPrice/5000;
        }
        if($scope.pulBelligi==='TMT (Täze)'){
            $scope.updateSQL.PulMax = $scope.maxPrice;
            $scope.updateSQL.PulMin = $scope.minPrice;
        }
        if($scope.pulBelligi==='$'){
            $scope.updateSQL.PulMax = $scope.maxPrice*$scope.consDollar;
            $scope.updateSQL.PulMin = $scope.minPrice*$scope.consDollar;
        }

        $scope.updateSQL.welayat = welayatFilter.welayatJogap();
        $scope.updateSQL.etrap = welayatFilter.etrapJogap();
        $scope.updateSQL.dayh = welayatFilter.dayhanJogap();
        if($scope.updateSQL.dayh===undefined){
            $scope.updateSQL.dayh = '';
        }
        $scope.updateSQL.tolemeli = 'yok';
        $http({
            method: "POST",
            url: "http://a0109349.xsph.ru/tawarpo" + haysyBaza + "/10",
            data : $scope.updateSQL
        }).then(function (newDATA) {
            // angular.forEach(newDATA.data, function (newsArticle) {
            //     $scope.news.push(newsArticle);
            // });
            // console.log('DBA', $scope.userBazaCook)
            $scope.newsTIME = newDATA.data;
            if($scope.userBazaCook && $scope.userBazaCook.yarayaMasArray) {
                for (var t = 0; t < $scope.newsTIME.length; t++) {
                    // console.log('DAS BA', $scope.news[t])
                    for (var tr = 0; tr < $scope.userBazaCook.yarayaMasArray.length; tr++) {
                        // console.log('DAS BA', $scope.userBazaCook.yarayaMasArray)
                        if ($scope.newsTIME[t].idSQL === $scope.userBazaCook.yarayaMasArray[tr] || $scope.newsTIME[t].keyT === $scope.userBazaCook.yarayaMasArray[tr]) {
                            $scope.newsTIME[t].yaraya = true;
                        }
                    }
                }
            }
            $scope.news = $scope.newsTIME;
        });



        //// ADMIN \\\|||/// ADMIN \\\|||/// ADMIN \\\|||/// ADMIN \\\|||/// ADMIN \\\|||/// ADMIN \\\|||/// ADMIN \\\|||/// ADMIN \\\|||//////////////
        //Admin tarapyndan podwerzdat edilmedikler
        $scope.yoklarygor = function () {
            $http({
                method: "POST",
                url: "http://a0109349.xsph.ru/tawarpo" + haysyBaza + "/10",
                data : $scope.updateSQL
            }).then(function (newDATA) {
                $scope.newsTIME = newDATA.data;
                if($scope.userBazaCook && $scope.userBazaCook.yarayaMasArray) {
                    for (var t = 0; t < $scope.newsTIME.length; t++) {
                        for (var tr = 0; tr < $scope.userBazaCook.yarayaMasArray.length; tr++) {
                            if ($scope.newsTIME[t].idSQL === $scope.userBazaCook.yarayaMasArray[tr] || $scope.newsTIME[t].keyT === $scope.userBazaCook.yarayaMasArray[tr]) {
                                $scope.newsTIME[t].yaraya = true;
                            }
                        }
                    }
                }
                $scope.news = $scope.newsTIME;
            });
            if($scope.updateSQL.tolemeli==="hawa"){
                $scope.updateSQL.tolemeli = 'yok';
            }
            else if($scope.updateSQL.tolemeli==="yok") {
                $scope.updateSQL.tolemeli = 'hawa';
            }
        };


        $scope.tolenenBelle = function (infoKeyT, obUmumySQL, tolemeli) {
            $scope.ugUcinBaza = {};
            console.log('|||||||||wwwwwwwwwwwwwwww||||||||||');
            //1URAWEN
            facHaysyBazadanZagruzkaEtmeli.haysyKatKabuletmak1Ura(obUmumySQL);
            var haysyBaza1Ura = facHaysyBazadanZagruzkaEtmeli.haysyKatUgratmak1Ura();
            //2URAWEN
            facHaysyBazadanZagruzkaEtmeli.haysyKatKabuletmak2Ura(obUmumySQL);
            var haysyBaza2Ura = facHaysyBazadanZagruzkaEtmeli.haysyKatUgratmak2Ura();
            if(obUmumySQL.katUra4) {
                //3URAWEN
                facHaysyBazadanZagruzkaEtmeli.haysyKatKabuletmak3Ura(obUmumySQL);
                var haysyBaza3Ura = facHaysyBazadanZagruzkaEtmeli.haysyKatUgratmak3Ura();
            }
            //Saylan URL gora haysy bazadan bilya
            //1 URAW
            nomerBazaName.haysyBazaNameYat1Ura(haysyBaza1Ura);
            var bazaName1Uar = nomerBazaName.haysyBazaNameUgr1Ura();
            //2 URAW
            nomerBazaName.haysyBazaNameYat2Ura(haysyBaza2Ura);
            var bazaName2Uar = nomerBazaName.haysyBazaNameUgr2Ura();
            if(obUmumySQL.katUra4) {
                //3 URAW
                nomerBazaName.haysyBazaNameYat3Ura(haysyBaza3Ura);
                var bazaName3Uar = nomerBazaName.haysyBazaNameUgr3Ura();
                console.log('UnomerB3', haysyBaza3Ura);
            }

            $scope.ugUcinBaza.bazaName1 = bazaName1Uar;
            $scope.ugUcinBaza.bazaName2 = bazaName2Uar;
            $scope.ugUcinBaza.bazaName3 = bazaName3Uar;
            $scope.ugUcinBaza.keyT = infoKeyT;
            $scope.ugUcinBaza.tolemeli = tolemeli;
            $http({method: "POST", url: "http://a0109349.xsph.ru/toletawar1", data : $scope.ugUcinBaza}).then(function (newItem) {
                console.log('1POZDYM ', $scope.ugUcinBaza)
            });
            if(bazaName2Uar === 'umumy_eml_kwa' || bazaName2Uar === 'umumy_eml_gar'
                || bazaName2Uar === 'umumy_eml_taj') {
                // console.log('P2DD', bazaName2Uar);
                $http({method: "POST",url: "http://a0109349.xsph.ru/toletawar2d",data: $scope.ugUcinBaza}).then(function (newItem) {
                            console.log('2DDPOZDYM ', $scope.ugUcinBaza)
                });
            }
            else{
                // console.log('P2', bazaName2Uar);
                $http({method: "POST",url: "http://a0109349.xsph.ru/toletawar2",data: $scope.ugUcinBaza}).then(function (newItem) {
                    console.log('2POZDYM ', $scope.ugUcinBaza)
                });
            }
            if(obUmumySQL.katUra4) {
                // console.log('P3', bazaName3Uar);
                if(bazaName2Uar === 'umumy_eml_kwa' || bazaName2Uar === 'umumy_eml_gar'
                    || bazaName2Uar === 'umumy_eml_taj'){
                    // console.log('B2');
                    $http({method: "POST", url: "http://a0109349.xsph.ru/toletawar3", data : $scope.ugUcinBaza}).then(function (newItem) {
                        console.log('3POZDYM ', $scope.ugUcinBaza)
                    });
                }
            }

            $http({method: "POST", url: "http://a0109349.xsph.ru/toletawar", data : $scope.ugUcinBaza}).then(function (newItem) {
                console.log('POZDYM1:', $scope.ugUcinBaza)
                // console.log('POZDYM2:', newItem.data)
            })
        }


    }])

    .factory('ertdayBD',function (){
        var etrap = '';
        var dayhan = '';
        return {
            yattutertaplar: function (jogapEtr) {
                etrap = jogapEtr;
            },
            yattutdayhanlar: function (jogapDay) {
                dayhan = jogapDay;
            },
            ugratertaplar: function () {
                return etrap;
            },
            ugratdayhanlar: function () {
                return dayhan;
            }
        }
    })

    .controller('menuCtrl', ['$scope', '$stateParams', 'globalPeremenFac', '$cookieStore', function ($scope, $stateParams, globalPeremenFac, $cookieStore) {
        //DILI TM RU
        $scope.diliTmRu = globalPeremenFac.getKatDiliTmRu();
        console.log('diliTmRu', $scope.diliTmRu)
        //Bazadan gelen Userin dannylary
        $scope.userBaza2 = globalPeremenFac.getKatUserBaza();
        //Userin Cookie si
        $scope.userBaza = $cookieStore.get('loginUserBaza');
        // console.log('MENU ucin bazadan:', $scope.userBaza);
        // console.log('COOKIE:', $scope.userBaza);
    }])

    .controller('loginCtrl', ['$scope', '$stateParams', '$http', '$location', 'globalPeremenFac', '$cookieStore', function ($scope, $stateParams, $http, $location, globalPeremenFac, $cookieStore) {

        //Userin dannylary bazdan gelen
        $scope.userBaza=[];

        //Yanys bolsa gorkezmelimi ya yok
        $scope.loginYanys = false;
        $scope.parolYanys = false;
        $scope.ugratmak = function (fInfo) {
            var request = $http({
                method : 'POST',
                url: 'http://a0109349.xsph.ru/userlog',
                data : fInfo
            });
            request.then(function(response){
                $scope.loginBamy = response.data;
                if($scope.loginBamy==='Yok' || $scope.loginBamy==='Y'){
                    console.log("Login Yok:");
                    $scope.loginYanys = true;
                    $scope.parolYanys = false;
                }
                else{
                    //Userin dannylary bazdan gelen
                    $scope.userBaza = response.data[0];
                    $scope.parolBamy = response.data[0].pass;
                    $scope.loginYanys = false;
                    if($scope.parolBamy === fInfo.pass){
                        console.log("Parol Dowry:");
                        $scope.parolYanys = false;
                        $http({
                            method : 'POST',
                            url: 'http://a0109349.xsph.ru/useryarup',
                            data : $scope.userBaza
                        }).then(function(response2){
                            if(response2.data!=='') {
                                // $scope.userBaza.yarayaMasArray = response2.data.split('+');
                                $scope.timePere = response2.data.split('+');
                                $scope.userBaza.yarayaMasArray = [];
                                $scope.userBaza.yarayaMasArrayBN = [];
                                for(var vp=0; vp<$scope.timePere.length; vp=vp+2) {
                                    $scope.userBaza.yarayaMasArray.push($scope.timePere[vp]);
                                    $scope.userBaza.yarayaMasArrayBN.push($scope.timePere[vp + 1]);
                                }
                            }
                            // $cookieStore.put('loginUserBaza',$scope.userBaza);
                        });
                        $http({
                            method : 'POST',
                            url: 'http://a0109349.xsph.ru/usertawup',
                            data : $scope.userBaza
                        }).then(function(response3){
                            if(response3.data!=='') {
                                $scope.timePere = response3.data.split('+');
                                $scope.userBaza.yarayaTawArray = [];
                                $scope.userBaza.yarayaTawArrayBN = [];
                                for(var vp=0; vp<$scope.timePere.length; vp=vp+2) {
                                    $scope.userBaza.yarayaTawArray.push($scope.timePere[vp]);
                                    $scope.userBaza.yarayaTawArrayBN.push($scope.timePere[vp + 1]);
                                }
                            }
                            console.log("loginUserBaza:",$scope.userBaza);
                            $cookieStore.put('loginUserBaza', $scope.userBaza);
                            // $location.path("/menu.gosmak");
                            $location.path('/menu.home');

                        });

                    }else{
                        console.log("Parol Yalnys:");
                        $scope.parolYanys = true;
                    }
                }
            }, function(error){
                console.log("Yalnys baza dan", error)
            });
        }

    }])

    .controller('registrasiACtrl', ['$scope', '$stateParams', '$http', '$location', function ($scope, $stateParams, $http, $location) {

        $scope.loginTazele = false;
        $scope.ugratmak = function (fInfo) {
            var request = $http({
                method : 'POST',
                url: 'http://a0109349.xsph.ru/user',
                data : fInfo
            });
            request.then(function(response){
                //Öň bazada badymy?
                $scope.loginBamy = response.data[0];
                if($scope.loginBamy=='Bar' || $scope.loginBamy=='B'){
                    console.log("Login Bar");
                    $scope.loginTazele = true;
                }
                if($scope.loginBamy=='Yok' || $scope.loginBamy=='Y'){
                    console.log("Login Yok");
                    $scope.loginTazele = false;
                    $location.path('/page4');
                }
            }, function(error){
                console.log("Yalnys baza dan", error)
            });

        }


    }])

    .controller('registrasiA2Ctrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


    }])

    .controller('bolumlerCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


    }])

    .controller('bLMlerBLMiCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


    }])

    .controller('welaAtlarCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


    }])

    .controller('etraplarMaryWelaAtyCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


    }])

    .controller('daHanBirleIklerCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


    }])

    .controller('bildiriCtrl', ['$scope', '$stateParams','globalPeremenFac', '$http', '$resource','ertdayBD', function ($scope, $stateParams, globalPeremenFac, $http, $resource, ertdayBD) {

        //Dili
        $scope.diliTmRu = globalPeremenFac.getKatDiliTmRu();
        console.log('DILI BILDIR:',$scope.diliTmRu);
        var idTawar = globalPeremenFac.getIdTawar();

        var skacBazaName =  globalPeremenFac.getKatUraBaza();
        $scope.yarayamy =  globalPeremenFac.getYarayamy();
        console.log('skacBazaName', skacBazaName)
        //Maglumat gorkezenden haysyny acmalydygy
        $scope.magAdy = "viewsMag/" + skacBazaName + ".html";
        //Baza
        var requestUrl = 'http://a0109349.xsph.ru/tawar' + skacBazaName + '/' + idTawar;
        var request = $http({method : 'GET',url: requestUrl});
        request.then(function(response){
            // console.log('Bzadan gelen zat',response.data[0]);
            $scope.otdelnySQL = response.data;
            $scope.fInfo = {};
            $scope.fInfo.yaraya = response.data[0].userID
            // console.log('skacBazaName22', $scope.fInfo)
            // console.log('skacBazaName333', $scope.otdelnySQL)
            $http({
                method : 'POST',
                url: 'http://a0109349.xsph.ru/userinfo',
                data : $scope.fInfo
            }).then(function(response) {
                // console.log('otdelnySQL',response.data[0])
                $scope.otdelniUser = response.data[0]
            });
            globalPeremenFac.updateUserID(response.data[0].userID)
        });

        //KURS DOLLAR
        $scope.consDollar = '';
        $http.get("http://a0109349.xsph.ru/kursdol").then(function (newItem) {
            // console.log('Dollar: ', newItem.data[0].nace)
            $scope.consDollar = newItem.data[0].nace;
        })
        //Puly uytgedende sona gora bahasy
        $scope.bahasyUyt = function (jBaha, jZnak) {
            if(jZnak==='TMM (Köne)'){
                return jBaha/5000;
            }
            if(jZnak==='TMT (Täze)'){
                return jBaha;
            }
            if(jZnak==='$'){
                return jBaha*$scope.consDollar;
            }
        }


        // $scope.userIDCLI = function (j) {
        //     console.log('$scope.userIDCLI', j)
        // }

///////////////////////////////////////////ELAYAT WE DAYHAN KATALOG////////////////////////////////////////
        $scope.welayatlar = [{wariant: "Aşgabat", wariantRU: "Ашхабад"},
            {wariant: "Ahal", wariantRU: "Ахал"},
            {wariant: "Mary", wariantRU: "Мары"},
            {wariant: "Lebap", wariantRU: "Лебап"},
            {wariant: "Daşoguz", wariantRU: "Дашогуз"},
            {wariant: "Balkan", wariantRU: "Балкан"}];
        $scope.etraplar = ertdayBD.ugratertaplar();
        $scope.dayhan = ertdayBD.ugratdayhanlar();
        if(!$scope.etraplar) {
            $http.get("http://a0109349.xsph.ru/gaytaretraplar").then(function (newItem) {
                // console.log('Etraplar45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.etraplar = newItem.data;
                ertdayBD.yattutertaplar(newItem.data)
            })
        }
        if(!$scope.dayhan) {
            $http.get("http://a0109349.xsph.ru/gaytardayhanlar").then(function (newItem) {
                // console.log('Dayhanlae45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.dayhan = newItem.data;
                ertdayBD.yattutdayhanlar(newItem.data)
            })
        }

        //KATALOGLAR
        $scope.katUra1Rus = [{wariant: "Transport",wariantRU: "Транспорт", value: "Transport"},
            {wariant: "Emlak",wariantRU: "Недвижимость", value: "Emlak"},
            {wariant: "Iş",wariantRU: "Работа", value: "Iş"},
            {wariant: "Hyzmat",wariantRU: "Услуги", value: "Hyzmat"},
            {wariant: "Öý-Hojalyk üçin", wariantRU: "Для Дома и Дачи", value: "Öý-Hojalyk üçin"},
            {wariant: "Harytlar", wariantRU: "Изделия", value: "Harytlar"},
            {wariant: "Egin Eşikler we Bujiteria", wariantRU: "Одежды и Бижутерия", value: "Egin Eşikler we Bujiteria"},
            {wariant: "Tehnika", wariantRU: "Техника", value: "Tehnika"},
            {wariant: "Maldarçylyk we Bagbançylyk", wariantRU: "Животноводство и Садовничество", value: "Maldarçylyk we Bagbançylyk"},
            {wariant: "Güýmenje we Dynç Alyş", wariantRU: "Хобби и Отдых", value: "Güýmenje we Dynç Alyş"}];
        {
            $scope.katUra2Rus = [{wariant: "Awtoulaglar", wariantRU: "Автомобили", haysykat: "Transport"},
                {wariant: "Matorlar we Mototehnikalar", wariantRU: "Мотоциклы и Мототехника", haysykat: "Transport"},
                {wariant: "Gruzowikler we Spestehnikalar", wariantRU: "Грузовики и Спецтехника", haysykat: "Transport"},
                {wariant: "Suw Transportlary", wariantRU: "Водный Транспорт", haysykat: "Transport"},
                {wariant: "Zapçastlar we Bezegler", wariantRU: "Запчасти и Аксессуары", haysykat: "Transport"},

                {wariant: "Kwartira", wariantRU: "Квартиры", haysykat: "Emlak"},
                {wariant: "Öý we Daça", wariantRU: "Дома, Дачи, Коттеджи", haysykat: "Emlak"},
                {wariant: "Mellek", wariantRU: "Земельные Участки", haysykat: "Emlak"},
                {wariant: "Garaž we Maşyn goýara ýer", wariantRU: "Гаражи и Машиноместа", haysykat: "Emlak"},
                {wariant: "Täjirçilik emlägi", wariantRU: "Коммерческая Недвижимость", haysykat: "Emlak"},

                {wariant: "Iş gözleýän", wariantRU: "Ищу Работу", haysykat: "Iş"},
                {wariant: "Işgär Gözleýäň", wariantRU: "Ищу Работник", haysykat: "Iş"},

                {wariant: "Toý", wariantRU: "Свадьба", haysykat: "Hyzmat"},
                {wariant: "Maşyn/Ulaglar", wariantRU: "Ремонт Транспорта", haysykat: "Hyzmat"},
                {wariant: "Tikin Maşyn", wariantRU: "Ремонт Швейные Машины", haysykat: "Hyzmat"},
                {wariant: "Tehnika", wariantRU: "Ремонт Техники", haysykat: "Hyzmat"},
                {wariant: "Gurluşyk", wariantRU: "Ремонт и Строительство", haysykat: "Hyzmat"},
                {wariant: "Jaý/Öý Remont", wariantRU: "Ремонт Домов", haysykat: "Hyzmat"},

                {wariant: "Halylar we Keçeler", wariantRU: "Коверы и Кошмы", haysykat: "Öý-Hojalyk üçin"},
                {wariant: "Mebeller", wariantRU: "Мебель и Интерьер", haysykat: "Öý-Hojalyk üçin"},
                {wariant: "Posuda we Harytlar", wariantRU: "Посуда и Товары", haysykat: "Öý-Hojalyk üçin"},
                {wariant: "Gurluşyk Harytlary", wariantRU: "Ремонт и Строительство", haysykat: "Öý-Hojalyk üçin"},

                {wariant: "Guýma", wariantRU: "Разливной", haysykat: "Harytlar"},
                {wariant: "Demirden", wariantRU: "Из Железа", haysykat: "Harytlar"},
                {wariant: "Agaçdan", wariantRU: "Из Дерево", haysykat: "Harytlar"},
                {wariant: "Gurluşyk üçin", wariantRU: "Для Строительства", haysykat: "Harytlar"},
                {wariant: "Oba Hojalyk üçin", wariantRU: "Бытовые", haysykat: "Harytlar"},

                {wariant: "Gelin/Gyzlar üçin", wariantRU: "Для Невест/Девушек", haysykat: "Egin Eşikler we Bujiteria"},
                {wariant: "Erkekler üçin", wariantRU: "Для Мужщин", haysykat: "Egin Eşikler we Bujiteria"},
                {wariant: "Çagalar üçin", wariantRU: "Для Детей", haysykat: "Egin Eşikler we Bujiteria"},

                {wariant: "Telefon", wariantRU: "Телефоны", haysykat: "Tehnika"},
                {wariant: "Notebook", wariantRU: "Ноутбуки", haysykat: "Tehnika"},
                {wariant: "Kompýuter we Printer", wariantRU: "Компьютеры и Принтеры", haysykat: "Tehnika"},
                {wariant: "Audio we Wideo", wariantRU: "Аудио и Видео", haysykat: "Tehnika"},
                {wariant: "Öý üçin", wariantRU: "Для Дома", haysykat: "Tehnika"},
                {wariant: "Aş hana üçin/Gaz jaý", wariantRU: "Для Кухни", haysykat: "Tehnika"},
                {wariant: "Howa we Klimat Enjamlary", wariantRU: "Климатическое Оборудование", haysykat: "Tehnika"},
                {wariant: "Fotoapparatla we Dürbiler", wariantRU: "Фотоаппараты и Телескопы", haysykat: "Tehnika"},
                {wariant: "Kompýuter üçin Harytlar", wariantRU: "Товары для Компьютера", haysykat: "Tehnika"},

                {wariant: "Bag-Bakja", wariantRU: "Бахча", haysykat: "Maldarçylyk we Bagbançylyk"},
                {wariant: "Nahallar we Şitiller", wariantRU: "Саженец и Рассада", haysykat: "Maldarçylyk we Bagbançylyk"},
                {wariant: "Iri Haýwanlar", wariantRU: "Большие Животные", haysykat: "Maldarçylyk we Bagbançylyk"},
                {wariant: "Uşak Haýwanlar", wariantRU: "Маленький Животные", haysykat: "Maldarçylyk we Bagbançylyk"},

                {wariant: "Welosiped", wariantRU: "Велосипеды", haysykat: "Güýmenje we Dynç Alyş"},
                {wariant: "Bilet we Dynç Alyş", wariantRU: "Билеты и Путешествия", haysykat: "Güýmenje we Dynç Alyş"},
                {wariant: "Muzikantlar üçin", wariantRU: "Музыкальные Инструменты", haysykat: "Güýmenje we Dynç Alyş"},
                {wariant: "Sport", wariantRU: "Спорт и Отдых", haysykat: "Güýmenje we Dynç Alyş"},
                {wariant: "Oýunlar we Programmalar", wariantRU: "Игры и Программы", haysykat: "Güýmenje we Dynç Alyş"}
            ];
            {
                $scope.katUra3Rus = [{wariant: "Sürülen", wariantRU: "С пробегом", haysykat: "Awtoulaglar"},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Awtoulaglar"},

                    {wariant: "Kwadrotsikl", wariantRU: "Квадроциклы", haysykat: "Matorlar we Mototehnikalar"},
                    {wariant: "Maped we Skuter", wariantRU: "Мопеды и Скутеры", haysykat: "Matorlar we Mototehnikalar"},
                    {wariant: "Matorlar", wariantRU: "Мотоциклы", haysykat: "Matorlar we Mototehnikalar"},
                    {wariant: "Murawey", wariantRU: "Муравей", haysykat: "Matorlar we Mototehnikalar"},

                    {wariant: "Awtobus", wariantRU: "Автобусы", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Kran", wariantRU: "Краны", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Kamaz", wariantRU: "Камаз", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Buldozer", wariantRU: "Бульдозеры", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Gruzowik", wariantRU: "Грузовики", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Komunalny Tehnika", wariantRU: "Коммунальная Техника", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Yeňil transport", wariantRU: "Лёгкий Транспорт", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Ýük ýükleýji maşynlar", wariantRU: "Погрузчики", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Teleşge", wariantRU: "Прицепы", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Traktor", wariantRU: "Трактор", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Oba-Hojalyk tehnikasy", wariantRU: "Сельхозтехника", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Gurluşuk tehnikasy", wariantRU: "Строительная Техника", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Tirkeg Çekijiler", wariantRU: "Тягачи", haysykat: "Gruzowikler we Spestehnikalar"},
                    {wariant: "Ekskawator", valwariantRUue: "Экскаваторы", haysykat: "Gruzowikler we Spestehnikalar"},

                    {wariant: "Kürekli gaýyk", wariantRU: "Каяки и Каноэ", haysykat: "Suw Transportlary"},
                    {wariant: "Gidrotsikl", wariantRU: "Гидроциклы", haysykat: "Suw Transportlary"},
                    {wariant: "Kater we Ýahta", wariantRU: "Катера и Яхты", haysykat: "Suw Transportlary"},
                    {wariant: "Matorly Lodka/Gaýyk", wariantRU: "Моторные Лодки", haysykat: "Suw Transportlary"},
                    {wariant: "Çişirilýän Lodka/Gaýyk", wariantRU: "Надувные Лодки", haysykat: "Suw Transportlary"},

                    {wariant: "Zapçastlar", wariantRU: "Запчасти", haysykat: "Zapçastlar we Bezegler"},
                    {wariant: "Bezegler", wariantRU: "Аксессуары", haysykat: "Zapçastlar we Bezegler"},
                    {wariant: "GPS-nawigator/Ugrukdurujy", wariantRU: "GPS-Навигаторы", haysykat: "Zapçastlar we Bezegler"},
                    {wariant: "Ýag we Himiýa", wariantRU: "Масло и Автохимия", haysykat: "Zapçastlar we Bezegler"},
                    {wariant: "Bagajnik we Kürçek", wariantRU: "Багажники и Фаркопы", haysykat: "Zapçastlar we Bezegler"},
                    {wariant: "Audio we Wideotehnika", wariantRU: "Аудио- и Видеотехника", haysykat: "Zapçastlar we Bezegler"},
                    {wariant: "Instrumentlar", wariantRU: "Инструменты", haysykat: "Zapçastlar we Bezegler"},
                    {wariant: "Teleşga", wariantRU: "Прицепы", haysykat: "Zapçastlar we Bezegler"},
                    {wariant: "Ogurluga garşy abzal", wariantRU: "Противоугонные Устройства", haysykat: "Zapçastlar we Bezegler"},
                    {wariant: "Týuning/Özgerdiş", wariantRU: "Тюнинг", haysykat: "Zapçastlar we Bezegler"},
                    {wariant: "Tekerler we Diskler", wariantRU: "Шины, Диски и Колёса", haysykat: "Zapçastlar we Bezegler"},
                    {wariant: "Şlem, Aýakgap we egin eşikler", wariantRU: "Экипировка", haysykat: "Zapçastlar we Bezegler"},

                    ////////////

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Kwartira"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Kwartira"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Kwartira"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Kwartira"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Öý we Daça"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Öý we Daça"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Öý we Daça"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Öý we Daça"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Mellek"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Mellek"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Mellek"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Mellek"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Garaž we Maşyn goýara ýer"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Täjirçilik emlägi"},

                    //////////

                    {wariant: "Internet we Telefon Ulgamy",wariantRU: "IT, Интернет, Телеком", haysykat: "Iş gözleýän"},
                    {wariant: "Awto ulag telekeçiligi",wariantRU: "Автомобильный Бизнес", haysykat: "Iş gözleýän"},
                    {wariant: "Bank",wariantRU: "Банки, Инвестиции", haysykat: "Iş gözleýän"},
                    {wariant: "Administrator",wariantRU: "Административная Работа", haysykat: "Iş gözleýän"},
                    {wariant: "Tejribesiz, Student",wariantRU: "Без Опыта, Студенты", haysykat: "Iş gözleýän"},
                    {wariant: "Hasapçylyk, Maliýe",wariantRU: "Бухгалтерия, Финансы", haysykat: "Iş gözleýän"},
                    {wariant: "Döwlet Işgäri",wariantRU: "Госслужба", haysykat: "Iş gözleýän"},
                    {wariant: "Öý işgäri",wariantRU: "Домашний Персонал", haysykat: "Iş gözleýän"},
                    {wariant: "Marketing, Reklama",wariantRU: "Маркетинг, Реклама, PR", haysykat: "Iş gözleýän"},
                    {wariant: "Medisina",wariantRU: "Медицина, Фармацевтика", haysykat: "Iş gözleýän"},
                    {wariant: "Ylym, Bilim",wariantRU: "Образование, Наука", haysykat: "Iş gözleýän"},
                    {wariant: "Goragçy, Howupsuzlyk",wariantRU: "Охрана, Безопасность", haysykat: "Iş gözleýän"},
                    {wariant: "Söwdegär",wariantRU: "Продажи", haysykat: "Iş gözleýän"},
                    {wariant: "Önümçilik",wariantRU: "Производство, Сырьё, с/х", haysykat: "Iş gözleýän"},
                    {wariant: "Ätiýaçlandyryş",wariantRU: "Страхование", haysykat: "Iş gözleýän"},
                    {wariant: "Gurluşyk",wariantRU: "Строительство", haysykat: "Iş gözleýän"},
                    {wariant: "Transport",wariantRU: "Транспорт, Логистика", haysykat: "Iş gözleýän"},
                    {wariant: "Turizm",wariantRU: "Туризм, Ррестораны", haysykat: "Iş gözleýän"},
                    {wariant: "Restoran",wariantRU: "Ресторанный", haysykat: "Iş gözleýän"},
                    {wariant: "Dolandyryjy",wariantRU: "Управление Персоналом", haysykat: "Iş gözleýän"},
                    {wariant: "Gözellik salony",wariantRU: "Салоны Красоты", haysykat: "Iş gözleýän"},
                    {wariant: "Başga Görnüşi...",wariantRU: "Другие...", haysykat: "Iş gözleýän"},

                    {wariant: "Internet we Telefon Ulgamy",wariantRU: "IT, Интернет, Телеком", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Awto ulag telekeçiligi",wariantRU: "Автомобильный Бизнес", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Bank",wariantRU: "Банки, Инвестиции", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Administrator",wariantRU: "Административная Работа", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Tejribesiz, Student",wariantRU: "Без Опыта, Студенты", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Hasapçylyk, Maliýe",wariantRU: "Бухгалтерия, Финансы", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Döwlet Işgäri",wariantRU: "Госслужба", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Öý işgäri",wariantRU: "Домашний Персонал", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Marketing, Reklama",wariantRU: "Маркетинг, Реклама, PR", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Medisina",wariantRU: "Медицина, Фармацевтика", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Ylym, Bilim",wariantRU: "Образование, Наука", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Goragçy, Howupsuzlyk",wariantRU: "Охрана, Безопасность", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Söwdegär",wariantRU: "Продажи", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Önümçilik",wariantRU: "Производство, Сырьё, с/х", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Ätiýaçlandyryş",wariantRU: "Страхование", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Gurluşyk",wariantRU: "Строительство", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Transport",wariantRU: "Транспорт, Логистика", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Turizm",wariantRU: "Туризм, Ррестораны", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Restoran",wariantRU: "Ресторанный", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Dolandyryjy",wariantRU: "Управление Персоналом", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Gözellik salony",wariantRU: "Салоны Красоты", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Başga Görnüşi...",wariantRU: "Другие...", haysykat: "Işgär Gözleýäň"},

                    //////

                    {wariant: "Wideoçy",wariantRU: "Видеосъёмка", haysykat: "Toý"},
                    {wariant: "Suratçy",wariantRU: "Фотосъёмка", haysykat: "Toý"},
                    {wariant: "Toý Mekany",wariantRU: "Ресторан для Свадьбы", haysykat: "Toý"},
                    {wariant: "Stol Bezegleri",wariantRU: "Украшение Столов", haysykat: "Toý"},
                    {wariant: "Öý/Jaý Bezegleri",wariantRU: "Украшение Домов", haysykat: "Toý"},
                    {wariant: "Fatalar we Kürteler",wariantRU: "Свадебное Платье we Курте", haysykat: "Toý"},
                    {wariant: "Kastýum we Milli eşikler",wariantRU: "Костюмы и ноц. Одежды", haysykat: "Toý"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Toý"},

                    {wariant: "Remont",wariantRU: "Ремонт", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Krasga",wariantRU: "Краска", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Zapçastlaryny Çalyşmak",wariantRU: "Поменять Запчасти", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Teker Bejermek",wariantRU: "Ремонт Шины", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Maşyn/Ulaglar"},

                    {wariant: "Remont",wariantRU: "Ремонт", haysykat: "Tikin Maşyn"},
                    {wariant: "Ýag Çalyşmak",wariantRU: "Поменять Масло", haysykat: "Tikin Maşyn"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Tikin Maşyn"},

                    {wariant: "Telefon Remont",wariantRU: "Телефон Ремонт", haysykat: "Tehnika"},
                    {wariant: "Kompýuter Remont",wariantRU: "Компьютер Ремонт", haysykat: "Tehnika"},
                    {wariant: "Holodilnik",wariantRU: "Холодильник Ремонт", haysykat: "Tehnika"},
                    {wariant: "Konsaner",wariantRU: "Кондиционеры Ремонт", haysykat: "Tehnika"},
                    {wariant: "Telewizor",wariantRU: "Телевизор Ремонт", haysykat: "Tehnika"},
                    {wariant: "Tehnika Gurnamak",wariantRU: "Установка Техники", haysykat: "Tehnika"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Tehnika"},

                    {wariant: "Uly plan",wariantRU: "Большой План", haysykat: "Gurluşyk"},
                    {wariant: "Kiçi plan",wariantRU: "Маленький План", haysykat: "Gurluşyk"},
                    {wariant: "Nawes",wariantRU: "Навес", haysykat: "Gurluşyk"},
                    {wariant: "Jaýyň üsti/Kryşasy",wariantRU: "Крыша", haysykat: "Gurluşyk"},
                    {wariant: "Patalok",wariantRU: "Паталок", haysykat: "Gurluşyk"},
                    {wariant: "Betonlamak (Öýüň töweregine)",wariantRU: "Вылить Бетон(?)", haysykat: "Gurluşyk"},
                    {wariant: "Howuz Guýmak",wariantRU: "Построить Водосборник", haysykat: "Gurluşyk"},
                    {wariant: "Guýy Gazmak",wariantRU: "Копать Колодец", haysykat: "Gurluşyk"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk"},

                    {wariant: "Komnat Remonty",wariantRU: "Ремонт Комнат", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Kwartira Remonty",wariantRU: "Ремонт Квартир", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Öý/Jaý Remonty",wariantRU: "Ремонт Домов", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Jaý/Öý Remont"},

                    //////////

                    {wariant: "Türkmen Haly", wariantRU: "Туркменские Коверы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Eýran Haly", wariantRU: "Иранские Коверы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Keçe", wariantRU: "Кошмы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Palas", wariantRU: "Палас", haysykat: "Halylar we Keçeler"},

                    {wariant: "Kompýuter üçin Stolar we Otygyçlar", wariantRU: "Компьютерные Столы и Кресла", haysykat: "Mebeller"},
                    {wariant: "Krowat", wariantRU: "Кровати", haysykat: "Mebeller"},
                    {wariant: "Diwan", wariantRU: "Диваны", haysykat: "Mebeller"},
                    {wariant: "Otyrgyç", wariantRU: "Кресла", haysykat: "Mebeller"},
                    {wariant: "Kuhniýa Mebelleri", wariantRU: "Кухонные Гарнитуры", haysykat: "Mebeller"},
                    {wariant: "Çyra/ Ýagtyldyş Enjamlary", wariantRU: "Освещение", haysykat: "Mebeller"},
                    {wariant: "Tumboçka", wariantRU: "Подставки и Тумбы", haysykat: "Mebeller"},
                    {wariant: "Parta we Otugyç", wariantRU: "Столы и Стулья", haysykat: "Mebeller"},
                    {wariant: "Şkaf we Çekmeli Şkaf", wariantRU: "Шкафы и Комоды", haysykat: "Mebeller"},
                    {wariant: "Serwant", wariantRU: "Сервант", haysykat: "Mebeller"},
                    {wariant: "Sandyk", wariantRU: "Сундук", haysykat: "Mebeller"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Mebeller"},

                    {wariant: "Pasudalar/Gap Gaçlar", wariantRU: "Посуды", haysykat: "Posuda we Harytlar"},
                    {wariant: "Kuhniýa üçin Harytlar", wariantRU: "Товары для Кухни", haysykat: "Posuda we Harytlar"},

                    {wariant: "Gapylar", wariantRU: "Двери", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Instrumentlar/Abzallar", wariantRU: "Инструменты", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Okno we Balkon", wariantRU: "Окна и Балконы", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk Harytlary"},

                    ///////////

                    {wariant: "Gazanlar", wariantRU: "Казаны", haysykat: "Guýma"},
                    {wariant: "Çäýnekler", wariantRU: "Чайники", haysykat: "Guýma"},
                    {wariant: "Käse", wariantRU: "Чашки", haysykat: "Guýma"},
                    {wariant: "Küýze", wariantRU: "Ваза", haysykat: "Guýma"},
                    {wariant: "Kafel", wariantRU: "Кафель", haysykat: "Guýma"},
                    {wariant: "Çemçe", wariantRU: "Лошка", haysykat: "Guýma"},
                    {wariant: "Okora/Tarelka", wariantRU: "Тарелка", haysykat: "Guýma"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Guýma"},

                    {wariant: "Ojak", wariantRU: "Оджак", haysykat: "Demirden"},
                    {wariant: "Zabor", wariantRU: "Забор", haysykat: "Demirden"},
                    {wariant: "Peç", wariantRU: "Печь", haysykat: "Demirden"},
                    {wariant: "Reşotka", wariantRU: "Решетка", haysykat: "Demirden"},
                    {wariant: "Galtak", wariantRU: "Тачка", haysykat: "Demirden"},
                    {wariant: "Nawes", wariantRU: "Навес", haysykat: "Demirden"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Demirden"},

                    {wariant: "Tapjan", wariantRU: "Тапчан", haysykat: "Agaçdan"},
                    {wariant: "Şkaf", wariantRU: "Шкаф", haysykat: "Agaçdan"},
                    {wariant: "Tumoçgalar", wariantRU: "Тумбочки", haysykat: "Agaçdan"},
                    {wariant: "Sandyk", wariantRU: "Сундук", haysykat: "Agaçdan"},
                    {wariant: "Çemçe", wariantRU: "Лошка", haysykat: "Agaçdan"},
                    {wariant: "Gap Gaçlar", wariantRU: "Посуда", haysykat: "Agaçdan"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Agaçdan"},

                    {wariant: "Sement", wariantRU: "Семент", haysykat: "Gurluşyk üçin"},
                    {wariant: "Şipr", wariantRU: "Шипр и Кровля", haysykat: "Gurluşyk üçin"},
                    {wariant: "Agaç", wariantRU: "Дерево", haysykat: "Gurluşyk üçin"},
                    {wariant: "Çagyl", wariantRU: "Чагыл", haysykat: "Gurluşyk üçin"},
                    {wariant: "Kerpiç", wariantRU: "Керпич", haysykat: "Gurluşyk üçin"},
                    {wariant: "Panel", wariantRU: "Панель", haysykat: "Gurluşyk üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk üçin"},

                    {wariant: "Pil", wariantRU: "Пил", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Orak", wariantRU: "Орак", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Dyrmyk", wariantRU: "Дырмык", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Lapata", wariantRU: "Лапата", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Kätmen", wariantRU: "Катмен", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Gyrkylyk", wariantRU: "Гыркылык", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Oba Hojalyk üçin"},

                    ////////////

                    {wariant: "Ýakalar", wariantRU: "Яка", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Köýnekler", wariantRU: "Рубашка", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Žempirler", wariantRU: "Джемпер", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Paltolar", wariantRU: "Пальто", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Balaklar", wariantRU: "Балак", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Sagat", wariantRU: "Часы", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Ýüzük", wariantRU: "Кольцо", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Bilezik", wariantRU: "Брослет", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Gulak Halka", wariantRU: "Серьги", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Monjuk", wariantRU: "Ожерелье", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Zynjyr", wariantRU: "Цепи", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Şaý Sepler", wariantRU: "Шай Сеп", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gelin/Gyzlar üçin"},

                    {wariant: "Maýkalar", wariantRU: "Майки", haysykat: "Erkekler üçin"},
                    {wariant: "Jalbarlar", wariantRU: "Брюки", haysykat: "Erkekler üçin"},
                    {wariant: "Jynsylar", wariantRU: "Джинсы", haysykat: "Erkekler üçin"},
                    {wariant: "Köýnekler", wariantRU: "Рубаха", haysykat: "Erkekler üçin"},
                    {wariant: "Žempirler", wariantRU: "Джемпер", haysykat: "Erkekler üçin"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки", haysykat: "Erkekler üçin"},
                    {wariant: "Paltolar", wariantRU: "Пальто", haysykat: "Erkekler üçin"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь", haysykat: "Erkekler üçin"},
                    {wariant: "Sagat", wariantRU: "Часы", haysykat: "Erkekler üçin"},
                    {wariant: "Zynjyr", wariantRU: "Цепи", haysykat: "Erkekler üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Erkekler üçin"},

                    {wariant: "Egin Eşikler", wariantRU: "Одежды", haysykat: "Çagalar üçin"},
                    {wariant: "Oýunjaklar", wariantRU: "Игрушка", haysykat: "Çagalar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Çagalar üçin"},

                    ////////////////

                    {wariant: "Ulanylan", wariantRU: "Использованный", haysykat: "Telefon"},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Telefon"},
                    {wariant: "Ratsiýa(Rasiýa)", wariantRU: "Рации", haysykat: "Telefon"},
                    {wariant: "Domaşny/Öý Telefony", wariantRU: "Домашный Телефон", haysykat: "Telefon"},
                    {wariant: "Bezegler", wariantRU: "Аксессуары", haysykat: "Telefon"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Telefon"},

                    {wariant: "Ulanylan", wariantRU: "Использованный", haysykat: "Notebook"},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Notebook"},
                    {wariant: "Monitor/Ekran", wariantRU: "Монитор", haysykat: "Notebook"},
                    {wariant: "Batareýa", wariantRU: "Батарея", haysykat: "Notebook"},
                    {wariant: "Zarýat Beriji", wariantRU: "Зарядник", haysykat: "Notebook"},

                    {wariant: "Monitor/Ekran", wariantRU: "Монитор", haysykat: "Kompýuter we Printer"},
                    {wariant: "Korpusy", wariantRU: "Корпус", haysykat: "Kompýuter we Printer"},
                    {wariant: "Zapçastlary...", wariantRU: "Запчасти...", haysykat: "Kompýuter we Printer"},
                    {wariant: "Printer", wariantRU: "Принтер", haysykat: "Kompýuter we Printer"},

                    {wariant: "MP3 pleer", wariantRU: "MP3-плееры", haysykat: "Audio we Wideo"},
                    {wariant: "Kolonkalar we Akustika", wariantRU: "Колонки и Акустика", haysykat: "Audio we Wideo"},
                    {wariant: "DVD, Wideo we Blu-ray Okaýjylar", wariantRU: "DVD, Видео и Blu-ray Плееры", haysykat: "Audio we Wideo"},
                    {wariant: "Wideo Kamera", wariantRU: "Видеокамеры", haysykat: "Audio we Wideo"},
                    {wariant: "Kabeller we Adapterlar", wariantRU: "Кабели и Адаптеры", haysykat: "Audio we Wideo"},
                    {wariant: "Mikrafon", wariantRU: "Микрофоны", haysykat: "Audio we Wideo"},
                    {wariant: "Muzykalny Sentr, Magnitafon", wariantRU: "Музыкальные Центры, Магнитолы", haysykat: "Audio we Wideo"},
                    {wariant: "Nauşnikler", wariantRU: "Наушники", haysykat: "Audio we Wideo"},

                    {wariant: "Pylesos", wariantRU: "Пылесосы", haysykat: "Öý üçin"},
                    {wariant: "Kir maşyn", wariantRU: "Стиральные Машины", haysykat: "Öý üçin"},
                    {wariant: "Ütük", wariantRU: "Утюги", haysykat: "Öý üçin"},
                    {wariant: "Tikin maşyn", wariantRU: "Швейные Машины", haysykat: "Öý üçin"},

                    {wariant: "Mikrawalnowka", wariantRU: "Микроволновые Печи", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Plita", wariantRU: "Плита", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Haladilnik we Doňduryjy", wariantRU: "Холодильники и Морозильные Камеры", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Mikser", wariantRU: "Миксер", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Gap gaç ýuwujy maşyn", wariantRU: "Посудомоечные Машины", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Ownuk uşak tehnikalar", wariantRU: "Мелкая Кухонная Техника", haysykat: "Aş hana üçin/Gaz jaý"},

                    {wariant: "Wentilýator", wariantRU: "Вентиляторы", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Kandisoner", wariantRU: "Кондиционеры", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Ýyladyjy", wariantRU: "Обогреватели", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Howa Arassalaýjy", wariantRU: "Очистители Воздуха", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Termometr", wariantRU: "Термометры и Метеостанции", haysykat: "Howa we Klimat Enjamlary"},

                    {wariant: "Plýonkaly Fotoapparatla", wariantRU: "Плёночные Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Sifrawoý Fotoapparatla", wariantRU: "Цифравые Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Profesionalnyý Fotoapparatla", wariantRU: "Профециональные Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Obýektiwler", wariantRU: "Объективы", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Dürbuler we Teleskoplar", wariantRU: "Бинокли и Телескопы", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Dürli Enjamlar", wariantRU: "Оборудование и Аксессуары", haysykat: "Fotoapparatla we Dürbiler"},

                    {wariant: "Web-Kamera", wariantRU: "Веб-камеры", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Josýstik we Rol", wariantRU: "Джойстики и Рули", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Klawiatura we Myşka/Syçanjyk", wariantRU: "Клавиатуры и Мыши", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Internet üçin", wariantRU: "Сетевое оборудование", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Žoski disler we Fleşka", wariantRU: "Жёсткие Диски и Флэшки", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Kompýuter üçin Harytlar"},

                    ////////////

                    {wariant: "Üzüm", wariantRU: "Виноград", haysykat: "Bag-Bakja"},
                    {wariant: "Alma", wariantRU: "Яблоко", haysykat: "Bag-Bakja"},
                    {wariant: "Erik", wariantRU: "Абрикос", haysykat: "Bag-Bakja"},
                    {wariant: "Almyrt", wariantRU: "Груша", haysykat: "Bag-Bakja"},
                    {wariant: "Şetdaly", wariantRU: "Персик", haysykat: "Bag-Bakja"},
                    {wariant: "Limon", wariantRU: "Лимон", haysykat: "Bag-Bakja"},
                    {wariant: "Pamidor", wariantRU: "Памидор", haysykat: "Bag-Bakja"},
                    {wariant: "Hyýar", wariantRU: "Огурец", haysykat: "Bag-Bakja"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Bag-Bakja"},

                    {wariant: "Ýolka", wariantRU: "Ёлка", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Arça", wariantRU: "Арча", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Şitiller", wariantRU: "Рассады", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Baglar", wariantRU: "Сады", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Güller", wariantRU: "Цветы", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Nahallar we Şitiller"},

                    {wariant: "Sygyr", wariantRU: "Корова", haysykat: "Iri Haýwanlar"},
                    {wariant: "Öküz", wariantRU: "Бык", haysykat: "Iri Haýwanlar"},
                    {wariant: "Göle", wariantRU: "Теленок", haysykat: "Iri Haýwanlar"},
                    {wariant: "At", wariantRU: "Конь", haysykat: "Iri Haýwanlar"},
                    {wariant: "Düýe", wariantRU: "Верблюд", haysykat: "Iri Haýwanlar"},
                    {wariant: "Köşek", wariantRU: "Верблюжонок", haysykat: "Iri Haýwanlar"},

                    {wariant: "Goýun", wariantRU: "Баран", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Geçi", wariantRU: "Козел", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Towuk", wariantRU: "Курица", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Jüýje", wariantRU: "Цыпленок", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Towşan", wariantRU: "Кролик", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Induk", wariantRU: "Индюк", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Gaz", wariantRU: "Гусь", haysykat: "Uşak Haýwanlar"},
                    {wariant: "It", wariantRU: "Собака", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Kepderi", wariantRU: "Голубь", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Baýyrlyk üçin", wariantRU: "Горные", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Uşak Haýwanlar"},

                    ///////////////

                    {wariant: "Ýol üçin", wariantRU: "Дорожные", haysykat: "Welosiped"},
                    {wariant: "Çagalar üçin", wariantRU: "Детские", haysykat: "Welosiped"},
                    {wariant: "Zapjastlar we Bezegler", wariantRU: "Запчасти и Аксессуары", haysykat: "Welosiped"},

                    {wariant: "Daşary Ýurt üçin", wariantRU: "Путешествия", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Sirk üçin", wariantRU: "Цирк", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Konsert üçin", wariantRU: "Концерты", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Teatr we Kino üçin", wariantRU: "Театр и Кино", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Bilet we Dynç Alyş"},

                    {wariant: "Gitara", wariantRU: "Гитара", haysykat: "Muzikantlar üçin"},
                    {wariant: "Dutar", wariantRU: "Дутар", haysykat: "Muzikantlar üçin"},
                    {wariant: "Gyjak", wariantRU: "Гыджак", haysykat: "Muzikantlar üçin"},
                    {wariant: "Deprek", wariantRU: "Барабан и Ударные", haysykat: "Muzikantlar üçin"},
                    {wariant: "Tüýdik", wariantRU: "Духовые", haysykat: "Muzikantlar üçin"},
                    {wariant: "Pionina", wariantRU: "Пианино и Другие Клавишные", haysykat: "Muzikantlar üçin"},
                    {wariant: "Akardion", wariantRU: "Аккордеоны", haysykat: "Muzikantlar üçin"},
                    {wariant: "Skripka", wariantRU: "Скрипки и Другие Смычковые", haysykat: "Muzikantlar üçin"},
                    {wariant: "Studia we Konsert üçin", wariantRU: "Для Студии и Концертов", haysykat: "Muzikantlar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Muzikantlar üçin"},

                    {wariant: "Tennis üçin", wariantRU: "Теннис", haysykat: "Sport"},
                    {wariant: "Boks üçin", wariantRU: "Бокс", haysykat: "Sport"},
                    {wariant: "Trenirowka üçin", wariantRU: "Фитнес и Тренажёры", haysykat: "Sport"},
                    {wariant: "Skeýbordlar we Tekerçekler", wariantRU: "Ролики и Скейтбординг", haysykat: "Sport"},
                    {wariant: "Stol oýunlary", wariantRU: "Настольные Игры", haysykat: "Sport"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Sport"},

                    {wariant: "PlayStation üçin oýunlar", wariantRU: "Игры для PlayStation", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Kompýuter Oýunlary", wariantRU: "Компьютерные Игры", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Programmalar", wariantRU: "Программы", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Oýunlar we Programmalar"}
                ];
            }
        }
        //Maglumatlan rusçasy
        $scope.renkCSS = [{wariant: "Ak", wariantRU: "Белый", warcss: "#fffcfa; border-radius:5px 5px 5px 5px;"},
            {wariant: "Goňras", wariantRU: "Бежевый", warcss: "#f1ddba; border-radius:5px 5px 5px 5px;"},
            {wariant: "Gülgüne", wariantRU: "Розовый", warcss: "#ffcada; border-radius:5px 5px 5px 5px;"},
            {wariant: "Sary", wariantRU: "Жёлтый", warcss: "#ffeb78; border-radius:5px 5px 5px 5px;"},
            {wariant: "Goýy Goň", wariantRU: "Серо-Бежевый", warcss: "#ada75b; border-radius:5px 5px 5px 5px;"},
            {wariant: "Altyn", wariantRU: "Золотой", warcss: "#feca49; border-radius:5px 5px 5px 5px;"},
            {wariant: "Narynç", wariantRU: "Оранжевый", warcss: "#ff7906; border-radius:5px 5px 5px 5px;"},
            {wariant: "Bürünç", wariantRU: "Бронзовый", warcss: "#bd5937; border-radius:5px 5px 5px 5px;"},
            {wariant: "Goňur", wariantRU: "Коричневый", warcss: "#974b00; border-radius:5px 5px 5px 5px;"},
            {wariant: "Wişnýa", wariantRU: "Вишневый", warcss: "#911e42; border-radius:5px 5px 5px 5px;"},
            {wariant: "Açyk Gyr", wariantRU: "Малиновый", warcss: "#b62d3f; border-radius:5px 5px 5px 5px;"},
            {wariant: "Goýy Gyr", wariantRU: "Пурпурный", warcss: "#c400aa; border-radius:5px 5px 5px 5px;"},
            {wariant: "Gyzyl", wariantRU: "Красный", warcss: "#fe0002; border-radius:5px 5px 5px 5px;"},
            {wariant: "Ýaşyl", wariantRU: "Зелёный", warcss: "#28b26f; border-radius:5px 5px 5px 5px;"},
            {wariant: "Gök", wariantRU: "Синий", warcss: "#3144b6; border-radius:5px 5px 5px 5px;"},
            {wariant: "Benewşe", wariantRU: "Фиолетовый", warcss: "#5a009d; border-radius:5px 5px 5px 5px;"},
            {wariant: "Mawy", wariantRU: "Голубой", warcss: "#78c5f3; border-radius:15px 5px 5px 5px 5px;"},
            {wariant: "Çal", wariantRU: "Серый", warcss: "rgb(186, 186, 186); border-radius:5px 5px 5px 5px;"},
            {wariant: "Kümüş", wariantRU: "Серебряный", warcss: "#a1a1a1; border-radius:5px 5px 5px 5px;"},
            {wariant: "Safari", wariantRU: "Сафари", warcss: "#877f74; border-radius:5px 5px 5px 5px;"},
            {wariant: "Gara", wariantRU: "Чёрный", warcss: "#000000; border-radius:5px 5px 5px 5px;"}];
        $scope.kakylanRU = [{wariant: "Kakylan", wariantRU: "Битый"},
            {wariant: "Kakylmadyk", wariantRU: "Не битый"}];
        $scope.kuzowRU = [{wariant: "Sedan", wariantRU: "Седан"},
            {wariant: "Heçbek", wariantRU: "Хетчбэк"},
            {wariant: "Uniwersal", wariantRU: "Универсал"},
            {wariant: "JEEP/ Wnedarožnik", wariantRU: "Внедорожник"},
            {wariant: "Kabriolet", wariantRU: "Кабриолет"},
            {wariant: "Kupe", wariantRU: "Купе"},
            {wariant: "Limuzin", wariantRU: "Лимузин"},
            {wariant: "Miniwen", wariantRU: "Минивэн"},
            {wariant: "Pikap", wariantRU: "Пикап"},
            {wariant: "Furgon", wariantRU: "Фургон"},
            {wariant: "Mikroawtobus", wariantRU: "Микроавтобус"}];
        $scope.dwiGornusiRU = [{wariant: "Benzin", wariantRU: "Бензин"},
            {wariant: "Gaz/Benzin", wariantRU: "Газ/Бензин"},
            {wariant: "Dizel", wariantRU: "Дизель"},
            {wariant: "Elektro", wariantRU: "Электро"},
            {wariant: "Gaz", wariantRU: "Газ"}];
        $scope.karPeredaRU = [{wariant: "Mehanika/Ruçnoý", wariantRU: "Механика"},
            {wariant: "Awtomat", wariantRU: "Автомат"}];
        $scope.cekijiligRU = [{wariant: "Öňi", wariantRU: "Передний"},
            {wariant: "Yzy", wariantRU: "Задний"},
            {wariant: "Öňi/Yzy", wariantRU: "Полный"}];
        $scope.tekOsRU = [{wariant: "Tomusky", wariantRU: "Всесезонные"},
            {wariant: "Gyşky", wariantRU: "Зимние нешиповонные"},
            {wariant: "Gyşky/Çüýli", wariantRU: "Зимние шиповонные"},
            {wariant: "Ähli pasyl", wariantRU: "Летние"}];
        $scope.cekijiligRU = [{wariant: "Öňki", wariantRU: "Передняя"},
            {wariant: "Yzky", wariantRU: "Задняя"},
            {wariant: "Öňki/Yzky", wariantRU: "Любая"}];
        $scope.gornusiRU = [{wariant: "Çyra", wariantRU: "Автосвет"},
            {wariant: "Asma(Podweska)", wariantRU: "Подвеска"},
            {wariant: "Gulşitel", wariantRU: "Топливная и выхлопная системы"},
            {wariant: "Akkumulýatorlar", wariantRU: "Аккумуляторы"},
            {wariant: "Rol Dolandyryşy", wariantRU: "Рулевое управление"},
            {wariant: "Tormoz Ulgamy", wariantRU: "Тормозная система"},
            {wariant: "Dwigatel(Hereketlendiriji)", wariantRU: "Двигатель"},
            {wariant: "Salon", wariantRU: "Салон"},
            {wariant: "Transmissiýa we Priwod(Herekede getiriji)", wariantRU: "Трансмиссия и перевод"},
            {wariant: "Sowadyş Sistemasy", wariantRU: "Система охлаждения"},
            {wariant: "Elektrik Enjamlary(Abzallary)", wariantRU: "Эдектрооборудование"},
            {wariant: "Kuzowy", wariantRU: "Кузов"},
            {wariant: "Aýna", wariantRU: "Стекла"}];
        $scope.gargorRU = [{wariant: "Beton-dan", wariantRU: "Бетонный"},
            {wariant: "Demir-den", wariantRU: "Металлический"},
            {wariant: "Kerpiç-den", wariantRU: "Кирпичный"}];
        $scope.stenmatRU = [{wariant: "Kerpiç", wariantRU: "Из Керпича"},
            {wariant: "Panel", wariantRU: "Из Панели"},
            {wariant: "Beton", wariantRU: "Из Бетона"},
            {wariant: "Agaçdan", wariantRU: "Из Дерево"},
            {wariant: "Başga", wariantRU: "Другое"}];
        $scope.jaygornusRU = [{wariant: "Jaý", wariantRU: "Дом"},
            {wariant: "Daça", wariantRU: "Дача"},
            {wariant: "Kottej", wariantRU: "Коттедж"}];
        $scope.ishWagtyRU = [{wariant: "Gün Aşa", wariantRU: "Через день"},
            {wariant: "Her Gün", wariantRU: "Каждый день"},
            {wariant: "Bäş Günlik", wariantRU: "На 5 дней"},
            {wariant: "Hepdelik", wariantRU: "На неделю"},
            {wariant: "Ýigrimi Günlik", wariantRU: "На 20 дней"}];
        $scope.ishGrafikRU = [{wariant: "Uzak Günlik", wariantRU: "Полный день"},
            {wariant: "Ýarym Günlik", wariantRU: "Неполный день"},
            {wariant: "Sagatlyk", wariantRU: "Часовой"}];
        $scope.ishBilimRU = [{wariant: "Ýokary Bilim", wariantRU: "Высшее"},
            {wariant: "Gutarylmadyk Ýokary", wariantRU: "Незаконченный высшее"},
            {wariant: "Ýokary Orta Bilim", wariantRU: "Средее специальное"},
            {wariant: "Orta Bilim", wariantRU: "Средее"}];




    }])

    //keyT boyunca bazan adyny almaly
    .factory('nomerBazaName', function () {
        var umumyDB = '';
        var umumyDB1Ura = '';
        var umumyDB2Ura = '';
        var umumyDB3Ura = '';
        return {
            haysyBazaNameYat: function(j) {
                if(j!==undefined){
                    switch (j) {
                        case 'traawt':
                            umumyDB = "umumy_tra_awt";
                            break;
                        case 'tramoto':
                            umumyDB = "umumy_tra_moto";
                            break;
                        case 'tragruz':
                            umumyDB = "umumy_tra_gruz";
                            break;
                        case 'trasuw':
                            umumyDB = "umumy_tra_suw";
                            break;
                        case 'trazapcast':
                            umumyDB = "umumy_tra_zap";
                            break;


                        case 'emlkwartirasatlyk':
                            umumyDB = "umumy_eml_kwa_satj";
                            break;
                        case 'emlkwartirahakyna':
                            umumyDB = "umumy_eml_kwa_hakb";
                            break;
                        case 'emlkwartirasatyna':
                            umumyDB = "umumy_eml_kwa_sata";
                            break;
                        case 'emlkwartirahakynaal':
                            umumyDB = "umumy_eml_kwa_haka";
                            break;
                        case 'emloydac':
                            umumyDB = "umumy_eml_oyd";
                            break;
                        case 'emlmellek':
                            umumyDB = "umumy_eml_mel";
                            break;
                        case 'emlgarazsatlyk':
                            umumyDB = "umumy_eml_gar_satj";
                            break;
                        case 'emlgarazhakyna':
                            umumyDB = "umumy_eml_gar_hakb";
                            break;
                        case 'emlgarazsatynal':
                            umumyDB = "umumy_eml_gar_sata";
                            break;
                        case 'emlgarazhakynaal':
                            umumyDB = "umumy_eml_gar_haka";
                            break;
                        case 'emltajirsatlyk':
                            umumyDB = "umumy_eml_taj_satj";
                            break;
                        case 'emltajirhakyna':
                            umumyDB = "umumy_eml_taj_hakb";
                            break;
                        case 'emltajirsatynal':
                            umumyDB = "umumy_eml_taj_sata";
                            break;
                        case 'emltajirhakynaal':
                            umumyDB = "umumy_eml_taj_haka";
                            break;


                        case 'ishishgoz':
                            umumyDB = "umumy_ish_isgoz";
                            break;
                        case 'ishishgargoz':
                            umumyDB = "umumy_ish_isgar";
                            break;


                        case 'hyztoy':
                            umumyDB = "umumy_hyz_toy";
                            break;
                        case 'hyzmasyn':
                            umumyDB = "umumy_hyz_mas";
                            break;
                        case 'hyztikin':
                            umumyDB = "umumy_hyz_tik";
                            break;
                        case 'hyztehnika':
                            umumyDB = "umumy_hyz_teh";
                            break;
                        case 'hyzgurlus':
                            umumyDB = "umumy_hyz_gur";
                            break;
                        case 'hyzjay':
                            umumyDB = "umumy_hyz_jay";
                            break;


                        case 'oyhojhaly':
                            umumyDB = "umumy_oyh_hal";
                            break;
                        case 'oyhojmellek':
                            umumyDB = "umumy_oyh_meb";
                            break;
                        case 'oyhojposuda':
                            umumyDB = "umumy_oyh_pas";
                            break;
                        case 'oyhojgurlus':
                            umumyDB = "umumy_oyh_gur";
                            break;


                        case 'harytguyma':
                            umumyDB = "umumy_har_guy";
                            break;
                        case 'harytdemir':
                            umumyDB = "umumy_har_dem";
                            break;
                        case 'harytagac':
                            umumyDB = "umumy_har_aga";
                            break;
                        case 'harytgurlus':
                            umumyDB = "umumy_har_gur";
                            break;
                        case 'harytobahoj':
                            umumyDB = "umumy_har_oba";
                            break;


                        case 'egingelin':
                            umumyDB = "umumy_egin_gel";
                            break;
                        case 'eginerkek':
                            umumyDB = "umumy_egin_erk";
                            break;
                        case 'egincaga':
                            umumyDB = "umumy_egin_cag";
                            break;


                        case 'tehnikatelefon':
                            umumyDB = "umumy_teh_tel";
                            break;
                        case 'tehnikanote':
                            umumyDB = "umumy_teh_note";
                            break;
                        case 'tehnikakomp':
                            umumyDB = "umumy_teh_komp";
                            break;
                        case 'tehnikaaudio':
                            umumyDB = "umumy_teh_aud";
                            break;
                        case 'tehnikaoyu':
                            umumyDB = "umumy_teh_oyu";
                            break;
                        case 'tehnikaasu':
                            umumyDB = "umumy_teh_asu";
                            break;
                        case 'tehnikahowa':
                            umumyDB = "umumy_teh_howa";
                            break;
                        case 'tehnikafoto':
                            umumyDB = "umumy_teh_foto";
                            break;
                        case 'tehnikakompoyun':
                            umumyDB = "umumy_teh_komoy";
                            break;


                        case 'maldarbagbag':
                            umumyDB = "umumy_mal_bag";
                            break;
                        case 'maldarbagnahal':
                            umumyDB = "umumy_mal_nah";
                            break;
                        case 'maldarbagiri':
                            umumyDB = "umumy_mal_iri";
                            break;
                        case 'maldarbagusak':
                            umumyDB = "umumy_mal_usa";
                            break;


                        case 'guymenwelos':
                            umumyDB = "umumy_guy_wel";
                            break;
                        case 'guymenbilet':
                            umumyDB = "umumy_guy_bil";
                            break;
                        case 'guymenmuzik':
                            umumyDB = "umumy_guy_muz";
                            break;
                        case 'guymensport':
                            umumyDB = "umumy_guy_spo";
                            break;
                        case 'guymenoyun':
                            umumyDB = "umumy_guy_oyu";
                            break;
                    }
                }
            },
            haysyBazaNameUgr: function() {
                return umumyDB;
            },

            haysyBazaNameYat1Ura: function(j) {
                // console.log('haysyBazaNameY1',j);
                if(j!==undefined){
                    switch (j) {
                        case 'tra':
                            umumyDB1Ura = "umumy_tra";
                            break;
                        case 'eml':
                            umumyDB1Ura = "umumy_eml";
                            break;
                        case 'ish':
                            umumyDB1Ura = "umumy_ish";
                            break;
                        case 'hyz':
                            umumyDB1Ura = "umumy_hyz";
                            break;
                        case 'oyhoj':
                            umumyDB1Ura = "umumy_oyh";
                            break;
                        case 'haryt':
                            umumyDB1Ura = "umumy_har";
                            break;
                        case 'egin':
                            umumyDB1Ura = "umumy_egin";
                            break;
                        case 'tehnika':
                            umumyDB1Ura = "umumy_teh";
                            break;
                        case 'maldarbag':
                            umumyDB1Ura = "umumy_mal";
                            break;
                        case 'guymen':
                            umumyDB1Ura = "umumy_guy";
                            break;
                    }
                }
            },
            haysyBazaNameUgr1Ura: function() {
                // console.log('hayBNY1');
                return umumyDB1Ura;
            },
            haysyBazaNameYat2Ura: function(j) {
                // console.log('haysyBazaNameY2',j);
                if(j!==undefined){
                    switch (j) {
                        case 'traawt':
                            umumyDB2Ura = "umumy_tra_awt";
                            break;
                        case 'tramoto':
                            umumyDB2Ura = "umumy_tra_moto";
                            break;
                        case 'tragruz':
                            umumyDB2Ura = "umumy_tra_gruz";
                            break;
                        case 'trasuw':
                            umumyDB2Ura = "umumy_tra_suw";
                            break;
                        case 'trazapcast':
                            umumyDB2Ura = "umumy_tra_zap";
                            break;


                        case 'emlkwartira':
                            umumyDB2Ura = "umumy_eml_kwa";
                            break;
                        case 'emloydac':
                            umumyDB2Ura = "umumy_eml_oyd";
                            break;
                        case 'emlmellek':
                            umumyDB2Ura = "umumy_eml_mel";
                            break;
                        case 'emlgaraz':
                            umumyDB2Ura = "umumy_eml_gar";
                            break;
                        case 'emltajir':
                            umumyDB2Ura = "umumy_eml_taj";
                            break;


                        case 'ishishgoz':
                            umumyDB2Ura = "umumy_ish_isgoz";
                            break;
                        case 'ishishgargoz':
                            umumyDB2Ura = "umumy_ish_isgar";
                            break;


                        case 'hyztoy':
                            umumyDB2Ura = "umumy_hyz_toy";
                            break;
                        case 'hyzmasyn':
                            umumyDB2Ura = "umumy_hyz_mas";
                            break;
                        case 'hyztikin':
                            umumyDB2Ura = "umumy_hyz_tik";
                            break;
                        case 'hyztehnika':
                            umumyDB2Ura = "umumy_hyz_teh";
                            break;
                        case 'hyzgurlus':
                            umumyDB2Ura = "umumy_hyz_gur";
                            break;
                        case 'hyzjay':
                            umumyDB2Ura = "umumy_hyz_jay";
                            break;


                        case 'oyhojhaly':
                            umumyDB2Ura = "umumy_oyh_hal";
                            break;
                        case 'oyhojmellek':
                            umumyDB2Ura = "umumy_oyh_meb";
                            break;
                        case 'oyhojposuda':
                            umumyDB2Ura = "umumy_oyh_pas";
                            break;
                        case 'oyhojgurlus':
                            umumyDB2Ura = "umumy_oyh_gur";
                            break;


                        case 'harytguyma':
                            umumyDB2Ura = "umumy_har_guy";
                            break;
                        case 'harytdemir':
                            umumyDB2Ura = "umumy_har_dem";
                            break;
                        case 'harytagac':
                            umumyDB2Ura = "umumy_har_aga";
                            break;
                        case 'harytgurlus':
                            umumyDB2Ura = "umumy_har_gur";
                            break;
                        case 'harytobahoj':
                            umumyDB2Ura = "umumy_har_oba";
                            break;


                        case 'egingelin':
                            umumyDB2Ura = "umumy_egin_gel";
                            break;
                        case 'eginerkek':
                            umumyDB2Ura = "umumy_egin_erk";
                            break;
                        case 'egincaga':
                            umumyDB2Ura = "umumy_egin_cag";
                            break;


                        case 'tehnikatelefon':
                            umumyDB2Ura = "umumy_teh_tel";
                            break;
                        case 'tehnikanote':
                            umumyDB2Ura = "umumy_teh_note";
                            break;
                        case 'tehnikakomp':
                            umumyDB2Ura = "umumy_teh_komp";
                            break;
                        case 'tehnikaaudio':
                            umumyDB2Ura = "umumy_teh_aud";
                            break;
                        case 'tehnikaoyu':
                            umumyDB2Ura = "umumy_teh_oyu";
                            break;
                        case 'tehnikaasu':
                            umumyDB2Ura = "umumy_teh_asu";
                            break;
                        case 'tehnikahowa':
                            umumyDB2Ura = "umumy_teh_howa";
                            break;
                        case 'tehnikafoto':
                            umumyDB2Ura = "umumy_teh_foto";
                            break;
                        case 'tehnikakompoyun':
                            umumyDB2Ura = "umumy_teh_komoy";
                            break;


                        case 'maldarbagbag':
                            umumyDB2Ura = "umumy_mal_bag";
                            break;
                        case 'maldarbagnahal':
                            umumyDB2Ura = "umumy_mal_nah";
                            break;
                        case 'maldarbagiri':
                            umumyDB2Ura = "umumy_mal_iri";
                            break;
                        case 'maldarbagusak':
                            umumyDB2Ura = "umumy_mal_usa";
                            break;


                        case 'guymenwelos':
                            umumyDB2Ura = "umumy_guy_wel";
                            break;
                        case 'guymenbilet':
                            umumyDB2Ura = "umumy_guy_bil";
                            break;
                        case 'guymenmuzik':
                            umumyDB2Ura = "umumy_guy_muz";
                            break;
                        case 'guymensport':
                            umumyDB2Ura = "umumy_guy_spo";
                            break;
                        case 'guymenoyun':
                            umumyDB2Ura = "umumy_guy_oyu";
                            break;
                    }
                }
            },
            haysyBazaNameUgr2Ura: function() {
                // console.log('hayBNY2');
                return umumyDB2Ura;
            },
            haysyBazaNameYat3Ura: function(j) {
                if(j!==undefined){
                    switch (j) {
                        case 'emlkwartirasatlyk':
                            umumyDB3Ura = "umumy_eml_kwa_satj";
                            break;
                        case 'emlkwartirahakyna':
                            umumyDB3Ura = "umumy_eml_kwa_hakb";
                            break;
                        case 'emlkwartirasatyna':
                            umumyDB3Ura = "umumy_eml_kwa_sata";
                            break;
                        case 'emlkwartirahakynaal':
                            umumyDB3Ura = "umumy_eml_kwa_haka";
                            break;

                        case 'emlgarazsatlyk':
                            umumyDB3Ura = "umumy_eml_gar_satj";
                            break;
                        case 'emlgarazhakyna':
                            umumyDB3Ura = "umumy_eml_gar_hakb";
                            break;
                        case 'emlgarazsatynal':
                            umumyDB3Ura = "umumy_eml_gar_sata";
                            break;
                        case 'emlgarazhakynaal':
                            umumyDB3Ura = "umumy_eml_gar_haka";
                            break;

                        case 'emltajirsatlyk':
                            umumyDB3Ura = "umumy_eml_taj_satj";
                            break;
                        case 'emltajirhakyna':
                            umumyDB3Ura = "umumy_eml_taj_hakb";
                            break;
                        case 'emltajirsatynal':
                            umumyDB3Ura = "umumy_eml_taj_sata";
                            break;
                        case 'emltajirhakynaal':
                            umumyDB3Ura = "umumy_eml_taj_haka";
                            break;

                    }
                }
            },
            haysyBazaNameUgr3Ura: function() {
                return umumyDB3Ura;
            }
        }
    })

    .controller('meWakansiAlamCtrl', ['$scope', '$stateParams', '$cookieStore', '$http', 'globalPeremenFac', '$resource', 'nomerBazaName', 'facHaysyBazadanZagruzkaEtmeli', 'ertdayBD', '$mdDialog', function ($scope, $stateParams, $cookieStore, $http, globalPeremenFac, $resource, nomerBazaName, facHaysyBazadanZagruzkaEtmeli, ertdayBD, $mdDialog) {
        //DILI TM RU
        $scope.diliTmRu = globalPeremenFac.getKatDiliTmRu();

        //Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie
        $scope.userBazaCook = $cookieStore.get('loginUserBaza');
        // console.log('COOCKIE MEN TAW:', $scope.userBazaCook);
        //Maglumatlar Tawaryn maglumatlary. Ekrana cykarya
        $scope.menTawarlam = [];
        if($scope.userBazaCook) {
            // var e = 8;
            if ($scope.userBazaCook.yarayaTawArray) {
                for (var e = 0; e < $scope.userBazaCook.yarayaTawArrayBN.length; e++) {
                    $scope.ugUcin = {};
                    nomerBazaName.haysyBazaNameYat($scope.userBazaCook.yarayaTawArrayBN[e]);
                    var bazaName = nomerBazaName.haysyBazaNameUgr();
                    var keyT = $scope.userBazaCook.yarayaTawArray[e];
                    $scope.ugUcin.bazaName = bazaName;
                    $scope.ugUcin.keyT = keyT;
                    // console.log('C0', $scope.userBazaCook.yarayaTawArrayBN[e]);
                    // console.log('C1', $scope.ugUcin);
                    $http({
                        method: "POST",
                        url: "http://a0109349.xsph.ru/tawarforman",
                        data: $scope.ugUcin
                    }).then(function (newItem) {
                        // console.log('C2', newItem.data[0]);
                        $scope.menTawarlam.push(newItem.data[0]);
                        // console.log('Taz Umen:',$scope.menTawarlam)
                        // $scope.userBazaCook.maglumatArray = $scope.menTawarlam;
                    })
                }
                // console.log('3Maglumat')
            }
        }

        //Glawny stranitsadan id sinu alyp sol sahypa ugratya
        $scope.maglumatUgratmak = function(idName, katUra2, katUra3, katUra4, yarayamy) {/*newKategoriH*/
            // console.log('Ugratmaly Maglumat', idName, katUra2, katUra3, katUra4, yarayamy);
            globalPeremenFac.updateHP(idName, katUra2, katUra3, katUra4, yarayamy);/*$scope.idUser);*/
            // $scope.idUser = '';
        };

///////////////////////////////////////////ELAYAT WE DAYHAN KATALOG////////////////////////////////////////
        $scope.welayatlar = [{wariant: "Aşgabat", wariantRU: "Ашхабад"},
            {wariant: "Ahal", wariantRU: "Ахал"},
            {wariant: "Mary", wariantRU: "Мары"},
            {wariant: "Lebap", wariantRU: "Лебап"},
            {wariant: "Daşoguz", wariantRU: "Дашогуз"},
            {wariant: "Balkan", wariantRU: "Балкан"}];
        $scope.etraplar = ertdayBD.ugratertaplar();
        $scope.dayhan = ertdayBD.ugratdayhanlar();
        if(!$scope.etraplar) {
            $http.get("http://a0109349.xsph.ru/gaytaretraplar").then(function (newItem) {
                console.log('Etraplar45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.etraplar = newItem.data;
                ertdayBD.yattutertaplar(newItem.data)
            })
        }
        if(!$scope.dayhan) {
            $http.get("http://a0109349.xsph.ru/gaytardayhanlar").then(function (newItem) {
                console.log('Dayhanlae45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.dayhan = newItem.data;
                ertdayBD.yattutdayhanlar(newItem.data)
            })
        }

        $scope.katUra1Rus = [{wariant: "Transport",wariantRU: "Транспорт", value: "Transport", surat: "1transport"},
            {wariant: "Emlak",wariantRU: "Недвижимость", value: "Emlak", surat: "1emlak"},
            {wariant: "Iş",wariantRU: "Работа", value: "Iş", surat: "1is"},
            {wariant: "Hyzmat",wariantRU: "Услуги", value: "Hyzmat", surat: "1hyzmat"},
            {wariant: "Öý-Hojalyk üçin", wariantRU: "Для Дома и Дачи", value: "Öý-Hojalyk üçin", surat: "1oyuç"},
            {wariant: "Harytlar", wariantRU: "Изделия", value: "Harytlar", surat: "1haryt"},
            {wariant: "Egin Eşikler we Bujiteria", wariantRU: "Одежды и Бижутерия", value: "Egin Eşikler we Bujiteria", surat: "1egin"},
            {wariant: "Tehnika", wariantRU: "Техника", value: "Tehnika", surat: "1tehnika"},
            {wariant: "Maldarçylyk we Bagbançylyk", wariantRU: "Животноводство и Садовничество", value: "Maldarçylyk we Bagbançylyk", surat: "1maldar"},
            {wariant: "Güýmenje we Dynç Alyş", wariantRU: "Хобби и Отдых", value: "Güýmenje we Dynç Alyş", surat: "1hobbi"}];
        {
            $scope.katUra2Rus = [{wariant: "Awtoulaglar", wariantRU: "Автомобили", haysykat: "Transport", surat: "2transportawt"},
                {wariant: "Matorlar we Mototehnikalar", wariantRU: "Мотоциклы и Мототехника", haysykat: "Transport", surat: "2transportmot"},
                {wariant: "Gruzowikler we Spestehnikalar", wariantRU: "Грузовики и Спецтехника", haysykat: "Transport", surat: "2transportgru"},
                {wariant: "Suw Transportlary", wariantRU: "Водный Транспорт", haysykat: "Transport", surat: "2transportsuw"},
                {wariant: "Zapçastlar we Bezegler", wariantRU: "Запчасти и Аксессуары", haysykat: "Transport", surat: "2transportzap"},

                {wariant: "Kwartira", wariantRU: "Квартиры", haysykat: "Emlak", surat: ""},
                {wariant: "Öý we Daça", wariantRU: "Дома, Дачи, Коттеджи", haysykat: "Emlak", surat: ""},
                {wariant: "Mellek", wariantRU: "Земельные Участки", haysykat: "Emlak", surat: ""},
                {wariant: "Garaž we Maşyn goýara ýer", wariantRU: "Гаражи и Машиноместа", haysykat: "Emlak", surat: ""},
                {wariant: "Täjirçilik emlägi", wariantRU: "Коммерческая Недвижимость", haysykat: "Emlak", surat: ""},

                {wariant: "Iş gözleýän", wariantRU: "Ищу Работу", haysykat: "Iş", surat: ""},
                {wariant: "Işgär Gözleýäň", wariantRU: "Ищу Работник", haysykat: "Iş", surat: ""},

                {wariant: "Toý", wariantRU: "Свадьба", haysykat: "Hyzmat", surat: ""},
                {wariant: "Maşyn/Ulaglar", wariantRU: "Ремонт Транспорта", haysykat: "Hyzmat", surat: ""},
                {wariant: "Tikin Maşyn", wariantRU: "Ремонт Швейные Машины", haysykat: "Hyzmat", surat: ""},
                {wariant: "Tehnika", wariantRU: "Ремонт Техники", haysykat: "Hyzmat", surat: ""},
                {wariant: "Gurluşyk", wariantRU: "Ремонт и Строительство", haysykat: "Hyzmat", surat: ""},
                {wariant: "Jaý/Öý Remont", wariantRU: "Ремонт Домов", haysykat: "Hyzmat", surat: ""},

                {wariant: "Halylar we Keçeler", wariantRU: "Коверы и Кошмы", haysykat: "Öý-Hojalyk üçin", surat: ""},
                {wariant: "Mebeller", wariantRU: "Мебель и Интерьер", haysykat: "Öý-Hojalyk üçin", surat: ""},
                {wariant: "Posuda we Harytlar", wariantRU: "Посуда и Товары", haysykat: "Öý-Hojalyk üçin", surat: ""},
                {wariant: "Gurluşyk Harytlary", wariantRU: "Ремонт и Строительство", haysykat: "Öý-Hojalyk üçin", surat: ""},

                {wariant: "Guýma", wariantRU: "Разливной", haysykat: "Harytlar", surat: ""},
                {wariant: "Demirden", wariantRU: "Из Железа", haysykat: "Harytlar", surat: ""},
                {wariant: "Agaçdan", wariantRU: "Из Дерево", haysykat: "Harytlar", surat: ""},
                {wariant: "Gurluşyk üçin", wariantRU: "Для Строительства", haysykat: "Harytlar", surat: ""},
                {wariant: "Oba Hojalyk üçin", wariantRU: "Бытовые", haysykat: "Harytlar", surat: ""},

                {wariant: "Gelin/Gyzlar üçin", wariantRU: "Для Невест/Девушек", haysykat: "Egin Eşikler we Bujiteria", surat: ""},
                {wariant: "Erkekler üçin", wariantRU: "Для Мужщин", haysykat: "Egin Eşikler we Bujiteria", surat: ""},
                {wariant: "Çagalar üçin", wariantRU: "Для Детей", haysykat: "Egin Eşikler we Bujiteria", surat: ""},

                {wariant: "Telefon", wariantRU: "Телефоны", haysykat: "Tehnika", surat: ""},
                {wariant: "Notebook", wariantRU: "Ноутбуки", haysykat: "Tehnika", surat: ""},
                {wariant: "Kompýuter we Printer", wariantRU: "Компьютеры и Принтеры", haysykat: "Tehnika", surat: ""},
                {wariant: "Audio we Wideo", wariantRU: "Аудио и Видео", haysykat: "Tehnika", surat: ""},
                {wariant: "Öý üçin", wariantRU: "Для Дома", haysykat: "Tehnika", surat: ""},
                {wariant: "Aş hana üçin/Gaz jaý", wariantRU: "Для Кухни", haysykat: "Tehnika", surat: ""},
                {wariant: "Howa we Klimat Enjamlary", wariantRU: "Климатическое Оборудование", haysykat: "Tehnika", surat: ""},
                {wariant: "Fotoapparatla we Dürbiler", wariantRU: "Фотоаппараты и Телескопы", haysykat: "Tehnika", surat: ""},
                {wariant: "Kompýuter üçin Harytlar", wariantRU: "Товары для Компьютера", haysykat: "Tehnika", surat: ""},

                {wariant: "Bag-Bakja", wariantRU: "Бахча", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},
                {wariant: "Nahallar we Şitiller", wariantRU: "Саженец и Рассада", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},
                {wariant: "Iri Haýwanlar", wariantRU: "Большие Животные", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},
                {wariant: "Uşak Haýwanlar", wariantRU: "Маленький Животные", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},

                {wariant: "Welosiped", wariantRU: "Велосипеды", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Bilet we Dynç Alyş", wariantRU: "Билеты и Путешествия", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Muzikantlar üçin", wariantRU: "Музыкальные Инструменты", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Sport", wariantRU: "Спорт и Отдых", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Oýunlar we Programmalar", wariantRU: "Игры и Программы", haysykat: "Güýmenje we Dynç Alyş", surat: ""}
            ];
            {
                $scope.katUra3Rus = [{wariant: "Sürülen", wariantRU: "С пробегом", haysykat: "Awtoulaglar", surat: ""},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Awtoulaglar", surat: ""},

                    {wariant: "Kwadrotsikl", wariantRU: "Квадроциклы", haysykat: "Matorlar we Mototehnikalar", surat: ""},
                    {wariant: "Maped we Skuter", wariantRU: "Мопеды и Скутеры", haysykat: "Matorlar we Mototehnikalar", surat: ""},
                    {wariant: "Matorlar", wariantRU: "Мотоциклы", haysykat: "Matorlar we Mototehnikalar", surat: ""},
                    {wariant: "Murawey", wariantRU: "Муравей", haysykat: "Matorlar we Mototehnikalar", surat: ""},

                    {wariant: "Awtobus", wariantRU: "Автобусы", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Kran", wariantRU: "Краны", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Kamaz", wariantRU: "Камаз", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Buldozer", wariantRU: "Бульдозеры", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Gruzowik", wariantRU: "Грузовики", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Komunalny Tehnika", wariantRU: "Коммунальная Техника", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Yeňil transport", wariantRU: "Лёгкий Транспорт", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Ýük ýükleýji maşynlar", wariantRU: "Погрузчики", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Teleşge", wariantRU: "Прицепы", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Traktor", wariantRU: "Трактор", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Oba-Hojalyk tehnikasy", wariantRU: "Сельхозтехника", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Gurluşuk tehnikasy", wariantRU: "Строительная Техника", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Tirkeg Çekijiler", wariantRU: "Тягачи", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Ekskawator", valwariantRUue: "Экскаваторы", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},

                    {wariant: "Kürekli gaýyk", wariantRU: "Каяки и Каноэ", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Gidrotsikl", wariantRU: "Гидроциклы", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Kater we Ýahta", wariantRU: "Катера и Яхты", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Matorly Lodka/Gaýyk", wariantRU: "Моторные Лодки", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Çişirilýän Lodka/Gaýyk", wariantRU: "Надувные Лодки", haysykat: "Suw Transportlary", surat: ""},

                    {wariant: "Zapçastlar", wariantRU: "Запчасти", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Bezegler", wariantRU: "Аксессуары", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "GPS-nawigator/Ugrukdurujy", wariantRU: "GPS-Навигаторы", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Ýag we Himiýa", wariantRU: "Масло и Автохимия", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Bagajnik we Kürçek", wariantRU: "Багажники и Фаркопы", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Audio we Wideotehnika", wariantRU: "Аудио- и Видеотехника", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Instrumentlar", wariantRU: "Инструменты", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Teleşga", wariantRU: "Прицепы", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Ogurluga garşy abzal", wariantRU: "Противоугонные Устройства", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Týuning/Özgerdiş", wariantRU: "Тюнинг", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Tekerler we Diskler", wariantRU: "Шины, Диски и Колёса", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Şlem, Aýakgap we egin eşikler", wariantRU: "Экипировка", haysykat: "Zapçastlar we Bezegler", surat: ""},

                    ////////////

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Kwartira"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Kwartira"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Kwartira"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Kwartira"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Öý we Daça"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Öý we Daça"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Öý we Daça"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Öý we Daça"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Mellek"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Mellek"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Mellek"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Mellek"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Garaž we Maşyn goýara ýer"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Täjirçilik emlägi"},

                    //////////

                    {wariant: "Internet we Telefon Ulgamy",wariantRU: "IT, Интернет, Телеком", haysykat: "Iş gözleýän"},
                    {wariant: "Awto ulag telekeçiligi",wariantRU: "Автомобильный Бизнес", haysykat: "Iş gözleýän"},
                    {wariant: "Bank",wariantRU: "Банки, Инвестиции", haysykat: "Iş gözleýän"},
                    {wariant: "Administrator",wariantRU: "Административная Работа", haysykat: "Iş gözleýän"},
                    {wariant: "Tejribesiz, Student",wariantRU: "Без Опыта, Студенты", haysykat: "Iş gözleýän"},
                    {wariant: "Hasapçylyk, Maliýe",wariantRU: "Бухгалтерия, Финансы", haysykat: "Iş gözleýän"},
                    {wariant: "Döwlet Işgäri",wariantRU: "Госслужба", haysykat: "Iş gözleýän"},
                    {wariant: "Öý işgäri",wariantRU: "Домашний Персонал", haysykat: "Iş gözleýän"},
                    {wariant: "Marketing, Reklama",wariantRU: "Маркетинг, Реклама, PR", haysykat: "Iş gözleýän"},
                    {wariant: "Medisina",wariantRU: "Медицина, Фармацевтика", haysykat: "Iş gözleýän"},
                    {wariant: "Ylym, Bilim",wariantRU: "Образование, Наука", haysykat: "Iş gözleýän"},
                    {wariant: "Goragçy, Howupsuzlyk",wariantRU: "Охрана, Безопасность", haysykat: "Iş gözleýän"},
                    {wariant: "Söwdegär",wariantRU: "Продажи", haysykat: "Iş gözleýän"},
                    {wariant: "Önümçilik",wariantRU: "Производство, Сырьё, с/х", haysykat: "Iş gözleýän"},
                    {wariant: "Ätiýaçlandyryş",wariantRU: "Страхование", haysykat: "Iş gözleýän"},
                    {wariant: "Gurluşyk",wariantRU: "Строительство", haysykat: "Iş gözleýän"},
                    {wariant: "Transport",wariantRU: "Транспорт, Логистика", haysykat: "Iş gözleýän"},
                    {wariant: "Turizm",wariantRU: "Туризм, Ррестораны", haysykat: "Iş gözleýän"},
                    {wariant: "Restoran",wariantRU: "Ресторанный", haysykat: "Iş gözleýän"},
                    {wariant: "Dolandyryjy",wariantRU: "Управление Персоналом", haysykat: "Iş gözleýän"},
                    {wariant: "Gözellik salony",wariantRU: "Салоны Красоты", haysykat: "Iş gözleýän"},
                    {wariant: "Başga Görnüşi...",wariantRU: "Другие...", haysykat: "Iş gözleýän"},

                    {wariant: "Internet we Telefon Ulgamy",wariantRU: "IT, Интернет, Телеком", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Awto ulag telekeçiligi",wariantRU: "Автомобильный Бизнес", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Bank",wariantRU: "Банки, Инвестиции", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Administrator",wariantRU: "Административная Работа", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Tejribesiz, Student",wariantRU: "Без Опыта, Студенты", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Hasapçylyk, Maliýe",wariantRU: "Бухгалтерия, Финансы", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Döwlet Işgäri",wariantRU: "Госслужба", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Öý işgäri",wariantRU: "Домашний Персонал", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Marketing, Reklama",wariantRU: "Маркетинг, Реклама, PR", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Medisina",wariantRU: "Медицина, Фармацевтика", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Ylym, Bilim",wariantRU: "Образование, Наука", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Goragçy, Howupsuzlyk",wariantRU: "Охрана, Безопасность", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Söwdegär",wariantRU: "Продажи", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Önümçilik",wariantRU: "Производство, Сырьё, с/х", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Ätiýaçlandyryş",wariantRU: "Страхование", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Gurluşyk",wariantRU: "Строительство", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Transport",wariantRU: "Транспорт, Логистика", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Turizm",wariantRU: "Туризм, Ррестораны", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Restoran",wariantRU: "Ресторанный", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Dolandyryjy",wariantRU: "Управление Персоналом", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Gözellik salony",wariantRU: "Салоны Красоты", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Başga Görnüşi...",wariantRU: "Другие...", haysykat: "Işgär Gözleýäň"},

                    //////

                    {wariant: "Wideoçy",wariantRU: "Видеосъёмка", haysykat: "Toý"},
                    {wariant: "Suratçy",wariantRU: "Фотосъёмка", haysykat: "Toý"},
                    {wariant: "Toý Mekany",wariantRU: "Ресторан для Свадьбы", haysykat: "Toý"},
                    {wariant: "Stol Bezegleri",wariantRU: "Украшение Столов", haysykat: "Toý"},
                    {wariant: "Öý/Jaý Bezegleri",wariantRU: "Украшение Домов", haysykat: "Toý"},
                    {wariant: "Fatalar we Kürteler",wariantRU: "Свадебное Платье we Курте", haysykat: "Toý"},
                    {wariant: "Kastýum we Milli eşikler",wariantRU: "Костюмы и ноц. Одежды", haysykat: "Toý"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Toý"},

                    {wariant: "Remont",wariantRU: "Ремонт", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Krasga",wariantRU: "Краска", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Zapçastlaryny Çalyşmak",wariantRU: "Поменять Запчасти", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Teker Bejermek",wariantRU: "Ремонт Шины", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Maşyn/Ulaglar"},

                    {wariant: "Remont",wariantRU: "Ремонт", haysykat: "Tikin Maşyn"},
                    {wariant: "Ýag Çalyşmak",wariantRU: "Поменять Масло", haysykat: "Tikin Maşyn"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Tikin Maşyn"},

                    {wariant: "Telefon Remont",wariantRU: "Телефон Ремонт", haysykat: "Tehnika"},
                    {wariant: "Kompýuter Remont",wariantRU: "Компьютер Ремонт", haysykat: "Tehnika"},
                    {wariant: "Holodilnik",wariantRU: "Холодильник Ремонт", haysykat: "Tehnika"},
                    {wariant: "Konsaner",wariantRU: "Кондиционеры Ремонт", haysykat: "Tehnika"},
                    {wariant: "Telewizor",wariantRU: "Телевизор Ремонт", haysykat: "Tehnika"},
                    {wariant: "Tehnika Gurnamak",wariantRU: "Установка Техники", haysykat: "Tehnika"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Tehnika"},

                    {wariant: "Uly plan",wariantRU: "Большой План", haysykat: "Gurluşyk"},
                    {wariant: "Kiçi plan",wariantRU: "Маленький План", haysykat: "Gurluşyk"},
                    {wariant: "Nawes",wariantRU: "Навес", haysykat: "Gurluşyk"},
                    {wariant: "Jaýyň üsti/Kryşasy",wariantRU: "Крыша", haysykat: "Gurluşyk"},
                    {wariant: "Patalok",wariantRU: "Паталок", haysykat: "Gurluşyk"},
                    {wariant: "Betonlamak (Öýüň töweregine)",wariantRU: "Вылить Бетон(?)", haysykat: "Gurluşyk"},
                    {wariant: "Howuz Guýmak",wariantRU: "Построить Водосборник", haysykat: "Gurluşyk"},
                    {wariant: "Guýy Gazmak",wariantRU: "Копать Колодец", haysykat: "Gurluşyk"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk"},

                    {wariant: "Komnat Remonty",wariantRU: "Ремонт Комнат", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Kwartira Remonty",wariantRU: "Ремонт Квартир", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Öý/Jaý Remonty",wariantRU: "Ремонт Домов", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Jaý/Öý Remont"},

                    //////////

                    {wariant: "Türkmen Haly", wariantRU: "Туркменские Коверы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Eýran Haly", wariantRU: "Иранские Коверы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Keçe", wariantRU: "Кошмы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Palas", wariantRU: "Палас", haysykat: "Halylar we Keçeler"},

                    {wariant: "Kompýuter üçin Stolar we Otygyçlar", wariantRU: "Компьютерные Столы и Кресла", haysykat: "Mebeller"},
                    {wariant: "Krowat", wariantRU: "Кровати", haysykat: "Mebeller"},
                    {wariant: "Diwan", wariantRU: "Диваны", haysykat: "Mebeller"},
                    {wariant: "Otyrgyç", wariantRU: "Кресла", haysykat: "Mebeller"},
                    {wariant: "Kuhniýa Mebelleri", wariantRU: "Кухонные Гарнитуры", haysykat: "Mebeller"},
                    {wariant: "Çyra/ Ýagtyldyş Enjamlary", wariantRU: "Освещение", haysykat: "Mebeller"},
                    {wariant: "Tumboçka", wariantRU: "Подставки и Тумбы", haysykat: "Mebeller"},
                    {wariant: "Parta we Otugyç", wariantRU: "Столы и Стулья", haysykat: "Mebeller"},
                    {wariant: "Şkaf we Çekmeli Şkaf", wariantRU: "Шкафы и Комоды", haysykat: "Mebeller"},
                    {wariant: "Serwant", wariantRU: "Сервант", haysykat: "Mebeller"},
                    {wariant: "Sandyk", wariantRU: "Сундук", haysykat: "Mebeller"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Mebeller"},

                    {wariant: "Pasudalar/Gap Gaçlar", wariantRU: "Посуды", haysykat: "Posuda we Harytlar"},
                    {wariant: "Kuhniýa üçin Harytlar", wariantRU: "Товары для Кухни", haysykat: "Posuda we Harytlar"},

                    {wariant: "Gapylar", wariantRU: "Двери", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Instrumentlar/Abzallar", wariantRU: "Инструменты", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Okno we Balkon", wariantRU: "Окна и Балконы", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk Harytlary"},

                    ///////////

                    {wariant: "Gazanlar", wariantRU: "Казаны", haysykat: "Guýma"},
                    {wariant: "Çäýnekler", wariantRU: "Чайники", haysykat: "Guýma"},
                    {wariant: "Käse", wariantRU: "Чашки", haysykat: "Guýma"},
                    {wariant: "Küýze", wariantRU: "Ваза", haysykat: "Guýma"},
                    {wariant: "Kafel", wariantRU: "Кафель", haysykat: "Guýma"},
                    {wariant: "Çemçe", wariantRU: "Лошка", haysykat: "Guýma"},
                    {wariant: "Okora/Tarelka", wariantRU: "Тарелка", haysykat: "Guýma"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Guýma"},

                    {wariant: "Ojak", wariantRU: "Оджак", haysykat: "Demirden"},
                    {wariant: "Zabor", wariantRU: "Забор", haysykat: "Demirden"},
                    {wariant: "Peç", wariantRU: "Печь", haysykat: "Demirden"},
                    {wariant: "Reşotka", wariantRU: "Решетка", haysykat: "Demirden"},
                    {wariant: "Galtak", wariantRU: "Тачка", haysykat: "Demirden"},
                    {wariant: "Nawes", wariantRU: "Навес", haysykat: "Demirden"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Demirden"},

                    {wariant: "Tapjan", wariantRU: "Тапчан", haysykat: "Agaçdan"},
                    {wariant: "Şkaf", wariantRU: "Шкаф", haysykat: "Agaçdan"},
                    {wariant: "Tumoçgalar", wariantRU: "Тумбочки", haysykat: "Agaçdan"},
                    {wariant: "Sandyk", wariantRU: "Сундук", haysykat: "Agaçdan"},
                    {wariant: "Çemçe", wariantRU: "Лошка", haysykat: "Agaçdan"},
                    {wariant: "Gap Gaçlar", wariantRU: "Посуда", haysykat: "Agaçdan"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Agaçdan"},

                    {wariant: "Sement", wariantRU: "Семент", haysykat: "Gurluşyk üçin"},
                    {wariant: "Şipr", wariantRU: "Шипр и Кровля", haysykat: "Gurluşyk üçin"},
                    {wariant: "Agaç", wariantRU: "Дерево", haysykat: "Gurluşyk üçin"},
                    {wariant: "Çagyl", wariantRU: "Чагыл", haysykat: "Gurluşyk üçin"},
                    {wariant: "Kerpiç", wariantRU: "Керпич", haysykat: "Gurluşyk üçin"},
                    {wariant: "Panel", wariantRU: "Панель", haysykat: "Gurluşyk üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk üçin"},

                    {wariant: "Pil", wariantRU: "Пил", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Orak", wariantRU: "Орак", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Dyrmyk", wariantRU: "Дырмык", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Lapata", wariantRU: "Лапата", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Kätmen", wariantRU: "Катмен", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Gyrkylyk", wariantRU: "Гыркылык", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Oba Hojalyk üçin"},

                    ////////////

                    {wariant: "Ýakalar", wariantRU: "Яка", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Köýnekler", wariantRU: "Рубашка", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Žempirler", wariantRU: "Джемпер", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Paltolar", wariantRU: "Пальто", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Balaklar", wariantRU: "Балак", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Sagat", wariantRU: "Часы", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Ýüzük", wariantRU: "Кольцо", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Bilezik", wariantRU: "Брослет", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Gulak Halka", wariantRU: "Серьги", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Monjuk", wariantRU: "Ожерелье", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Zynjyr", wariantRU: "Цепи", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Şaý Sepler", wariantRU: "Шай Сеп", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gelin/Gyzlar üçin"},

                    {wariant: "Maýkalar", wariantRU: "Майки", haysykat: "Erkekler üçin"},
                    {wariant: "Jalbarlar", wariantRU: "Брюки", haysykat: "Erkekler üçin"},
                    {wariant: "Jynsylar", wariantRU: "Джинсы", haysykat: "Erkekler üçin"},
                    {wariant: "Köýnekler", wariantRU: "Рубаха", haysykat: "Erkekler üçin"},
                    {wariant: "Žempirler", wariantRU: "Джемпер", haysykat: "Erkekler üçin"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки", haysykat: "Erkekler üçin"},
                    {wariant: "Paltolar", wariantRU: "Пальто", haysykat: "Erkekler üçin"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь", haysykat: "Erkekler üçin"},
                    {wariant: "Sagat", wariantRU: "Часы", haysykat: "Erkekler üçin"},
                    {wariant: "Zynjyr", wariantRU: "Цепи", haysykat: "Erkekler üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Erkekler üçin"},

                    {wariant: "Egin Eşikler", wariantRU: "Одежды", haysykat: "Çagalar üçin"},
                    {wariant: "Oýunjaklar", wariantRU: "Игрушка", haysykat: "Çagalar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Çagalar üçin"},

                    ////////////////

                    {wariant: "Ulanylan", wariantRU: "Использованный", haysykat: "Telefon"},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Telefon"},
                    {wariant: "Ratsiýa(Rasiýa)", wariantRU: "Рации", haysykat: "Telefon"},
                    {wariant: "Domaşny/Öý Telefony", wariantRU: "Домашный Телефон", haysykat: "Telefon"},
                    {wariant: "Bezegler", wariantRU: "Аксессуары", haysykat: "Telefon"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Telefon"},

                    {wariant: "Ulanylan", wariantRU: "Использованный", haysykat: "Notebook"},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Notebook"},
                    {wariant: "Monitor/Ekran", wariantRU: "Монитор", haysykat: "Notebook"},
                    {wariant: "Batareýa", wariantRU: "Батарея", haysykat: "Notebook"},
                    {wariant: "Zarýat Beriji", wariantRU: "Зарядник", haysykat: "Notebook"},

                    {wariant: "Monitor/Ekran", wariantRU: "Монитор", haysykat: "Kompýuter we Printer"},
                    {wariant: "Korpusy", wariantRU: "Корпус", haysykat: "Kompýuter we Printer"},
                    {wariant: "Zapçastlary...", wariantRU: "Запчасти...", haysykat: "Kompýuter we Printer"},
                    {wariant: "Printer", wariantRU: "Принтер", haysykat: "Kompýuter we Printer"},

                    {wariant: "MP3 pleer", wariantRU: "MP3-плееры", haysykat: "Audio we Wideo"},
                    {wariant: "Kolonkalar we Akustika", wariantRU: "Колонки и Акустика", haysykat: "Audio we Wideo"},
                    {wariant: "DVD, Wideo we Blu-ray Okaýjylar", wariantRU: "DVD, Видео и Blu-ray Плееры", haysykat: "Audio we Wideo"},
                    {wariant: "Wideo Kamera", wariantRU: "Видеокамеры", haysykat: "Audio we Wideo"},
                    {wariant: "Kabeller we Adapterlar", wariantRU: "Кабели и Адаптеры", haysykat: "Audio we Wideo"},
                    {wariant: "Mikrafon", wariantRU: "Микрофоны", haysykat: "Audio we Wideo"},
                    {wariant: "Muzykalny Sentr, Magnitafon", wariantRU: "Музыкальные Центры, Магнитолы", haysykat: "Audio we Wideo"},
                    {wariant: "Nauşnikler", wariantRU: "Наушники", haysykat: "Audio we Wideo"},

                    {wariant: "Pylesos", wariantRU: "Пылесосы", haysykat: "Öý üçin"},
                    {wariant: "Kir maşyn", wariantRU: "Стиральные Машины", haysykat: "Öý üçin"},
                    {wariant: "Ütük", wariantRU: "Утюги", haysykat: "Öý üçin"},
                    {wariant: "Tikin maşyn", wariantRU: "Швейные Машины", haysykat: "Öý üçin"},

                    {wariant: "Mikrawalnowka", wariantRU: "Микроволновые Печи", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Plita", wariantRU: "Плита", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Haladilnik we Doňduryjy", wariantRU: "Холодильники и Морозильные Камеры", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Mikser", wariantRU: "Миксер", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Gap gaç ýuwujy maşyn", wariantRU: "Посудомоечные Машины", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Ownuk uşak tehnikalar", wariantRU: "Мелкая Кухонная Техника", haysykat: "Aş hana üçin/Gaz jaý"},

                    {wariant: "Wentilýator", wariantRU: "Вентиляторы", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Kandisoner", wariantRU: "Кондиционеры", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Ýyladyjy", wariantRU: "Обогреватели", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Howa Arassalaýjy", wariantRU: "Очистители Воздуха", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Termometr", wariantRU: "Термометры и Метеостанции", haysykat: "Howa we Klimat Enjamlary"},

                    {wariant: "Plýonkaly Fotoapparatla", wariantRU: "Плёночные Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Sifrawoý Fotoapparatla", wariantRU: "Цифравые Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Profesionalnyý Fotoapparatla", wariantRU: "Профециональные Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Obýektiwler", wariantRU: "Объективы", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Dürbuler we Teleskoplar", wariantRU: "Бинокли и Телескопы", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Dürli Enjamlar", wariantRU: "Оборудование и Аксессуары", haysykat: "Fotoapparatla we Dürbiler"},

                    {wariant: "Web-Kamera", wariantRU: "Веб-камеры", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Josýstik we Rol", wariantRU: "Джойстики и Рули", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Klawiatura we Myşka/Syçanjyk", wariantRU: "Клавиатуры и Мыши", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Internet üçin", wariantRU: "Сетевое оборудование", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Žoski disler we Fleşka", wariantRU: "Жёсткие Диски и Флэшки", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Kompýuter üçin Harytlar"},

                    ////////////

                    {wariant: "Üzüm", wariantRU: "Виноград", haysykat: "Bag-Bakja"},
                    {wariant: "Alma", wariantRU: "Яблоко", haysykat: "Bag-Bakja"},
                    {wariant: "Erik", wariantRU: "Абрикос", haysykat: "Bag-Bakja"},
                    {wariant: "Almyrt", wariantRU: "Груша", haysykat: "Bag-Bakja"},
                    {wariant: "Şetdaly", wariantRU: "Персик", haysykat: "Bag-Bakja"},
                    {wariant: "Limon", wariantRU: "Лимон", haysykat: "Bag-Bakja"},
                    {wariant: "Pamidor", wariantRU: "Памидор", haysykat: "Bag-Bakja"},
                    {wariant: "Hyýar", wariantRU: "Огурец", haysykat: "Bag-Bakja"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Bag-Bakja"},

                    {wariant: "Ýolka", wariantRU: "Ёлка", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Arça", wariantRU: "Арча", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Şitiller", wariantRU: "Рассады", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Baglar", wariantRU: "Сады", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Güller", wariantRU: "Цветы", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Nahallar we Şitiller"},

                    {wariant: "Sygyr", wariantRU: "Корова", haysykat: "Iri Haýwanlar"},
                    {wariant: "Öküz", wariantRU: "Бык", haysykat: "Iri Haýwanlar"},
                    {wariant: "Göle", wariantRU: "Теленок", haysykat: "Iri Haýwanlar"},
                    {wariant: "At", wariantRU: "Конь", haysykat: "Iri Haýwanlar"},
                    {wariant: "Düýe", wariantRU: "Верблюд", haysykat: "Iri Haýwanlar"},
                    {wariant: "Köşek", wariantRU: "Верблюжонок", haysykat: "Iri Haýwanlar"},

                    {wariant: "Goýun", wariantRU: "Баран", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Geçi", wariantRU: "Козел", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Towuk", wariantRU: "Курица", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Jüýje", wariantRU: "Цыпленок", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Towşan", wariantRU: "Кролик", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Induk", wariantRU: "Индюк", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Gaz", wariantRU: "Гусь", haysykat: "Uşak Haýwanlar"},
                    {wariant: "It", wariantRU: "Собака", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Kepderi", wariantRU: "Голубь", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Baýyrlyk üçin", wariantRU: "Горные", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Uşak Haýwanlar"},

                    ///////////////

                    {wariant: "Ýol üçin", wariantRU: "Дорожные", haysykat: "Welosiped"},
                    {wariant: "Çagalar üçin", wariantRU: "Детские", haysykat: "Welosiped"},
                    {wariant: "Zapjastlar we Bezegler", wariantRU: "Запчасти и Аксессуары", haysykat: "Welosiped"},

                    {wariant: "Daşary Ýurt üçin", wariantRU: "Путешествия", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Sirk üçin", wariantRU: "Цирк", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Konsert üçin", wariantRU: "Концерты", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Teatr we Kino üçin", wariantRU: "Театр и Кино", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Bilet we Dynç Alyş"},

                    {wariant: "Gitara", wariantRU: "Гитара", haysykat: "Muzikantlar üçin"},
                    {wariant: "Dutar", wariantRU: "Дутар", haysykat: "Muzikantlar üçin"},
                    {wariant: "Gyjak", wariantRU: "Гыджак", haysykat: "Muzikantlar üçin"},
                    {wariant: "Deprek", wariantRU: "Барабан и Ударные", haysykat: "Muzikantlar üçin"},
                    {wariant: "Tüýdik", wariantRU: "Духовые", haysykat: "Muzikantlar üçin"},
                    {wariant: "Pionina", wariantRU: "Пианино и Другие Клавишные", haysykat: "Muzikantlar üçin"},
                    {wariant: "Akardion", wariantRU: "Аккордеоны", haysykat: "Muzikantlar üçin"},
                    {wariant: "Skripka", wariantRU: "Скрипки и Другие Смычковые", haysykat: "Muzikantlar üçin"},
                    {wariant: "Studia we Konsert üçin", wariantRU: "Для Студии и Концертов", haysykat: "Muzikantlar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Muzikantlar üçin"},

                    {wariant: "Tennis üçin", wariantRU: "Теннис", haysykat: "Sport"},
                    {wariant: "Boks üçin", wariantRU: "Бокс", haysykat: "Sport"},
                    {wariant: "Trenirowka üçin", wariantRU: "Фитнес и Тренажёры", haysykat: "Sport"},
                    {wariant: "Skeýbordlar we Tekerçekler", wariantRU: "Ролики и Скейтбординг", haysykat: "Sport"},
                    {wariant: "Stol oýunlary", wariantRU: "Настольные Игры", haysykat: "Sport"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Sport"},

                    {wariant: "PlayStation üçin oýunlar", wariantRU: "Игры для PlayStation", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Kompýuter Oýunlary", wariantRU: "Компьютерные Игры", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Programmalar", wariantRU: "Программы", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Oýunlar we Programmalar"}
                ];

            }
        }
        $scope.bahasynameRus = [
            {wariant:"Bahasy",wariantRU:"Цена"},
            {wariant:"Tölegi",wariantRU:"Оплата"},
            {wariant:"Biriniň Bahasy",wariantRU:"Цена за одного"},
            {wariant:"Bir kg-yň Bahasy",wariantRU:"Цена за 1 кг"},
            {wariant:"Bir Tonnaň Bahasy",wariantRU:"Цена за один тонн"},
            {wariant:"Garaşylýan Aýlyk",wariantRU:"Ожидаемая зарплата"},
            {wariant:"Bir Düýbiň Bahasy",wariantRU:"Цена за 1 коренной"},
            {wariant:"Bir Haltaň Bahasy",wariantRU:"Цена за один мешек"},
            {wariant:"Ýüz Düýbiň Bahasy",wariantRU:"Цена за 100 коренной"},
            {wariant:"Müň Kerpiç Bahasy",wariantRU:"Цена за тысяч кирпичей"},
            {wariant:"Müň Şitileň Bahasy",wariantRU:"Цена за тыс. рассад"}]

        //Bahasyny znagyna gora uytgetmeli
        $scope.bahasyUyt = function (jBaha, jZnak) {
            if(jZnak==='TMM (Köne)'){
                return jBaha/5000;
            }
            if(jZnak==='TMT (Täze)'){
                return jBaha;
            }
            if(jZnak==='$'){
                return jBaha*3.5;
            }
        };

        //Pul saylanda sona gora bahasyny uytgetmeli
        $scope.pulSaylaHomePage = 'TMM';
        $scope.pulSaylaHomePageTMM=true;
        $scope.pulSaylaHomePageTMT=false;
        $scope.pulSaylaHomePageUSA=false;
        $scope.jogapPulBelligi = function (j) {
            console.log('PUL', j)
            if(j==='TMM'){
                $scope.pulSaylaHomePageTMM=true;
                $scope.pulSaylaHomePageTMT=false;
                $scope.pulSaylaHomePageUSA=false;
            }
            if(j==='TMT'){
                $scope.pulSaylaHomePageTMM=false;
                $scope.pulSaylaHomePageTMT=true;
                $scope.pulSaylaHomePageUSA=false;
            }
            if(j==='USA'){
                $scope.pulSaylaHomePageTMM=false;
                $scope.pulSaylaHomePageTMT=false;
                $scope.pulSaylaHomePageUSA=true;
            }
            // console.log(j);
        };

        //wagtlayyn cookie ucin
        $scope.yarayaTawUser = [];
        $scope.yarayaTawUserBN = [];
        //YARAYA Mana yaraya knopkasyny basmaly
        $scope.usersSQL = $resource('http://a0109349.xsph.ru/usertaw');
        $scope.bazadanPozmak = function (infoYaraya, infoKeyT, obUmumySQL, ev) {
            //One cykyp soraya POZMALYMY ya DAL
            var confirm = $mdDialog.confirm()
                .title('Pozmalymy?')
                .textContent('Çyndanam goýan tawaryňyzy pozasyňyz gelýämi?')
                // .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Hawa')
                .cancel('Ýok');
            $mdDialog.show(confirm).then(function() {
                console.log('Hawa');
                 if(obUmumySQL.img1){
                    $http({method : 'POST', url: 'http://a0109349.xsph.ru/suratPoz/'+obUmumySQL.img1});
                    if(obUmumySQL.img2){
                        $http({method : 'POST', url: 'http://a0109349.xsph.ru/suratPoz/'+obUmumySQL.img2});
                        if(obUmumySQL.img3){
                            $http({method : 'POST', url: 'http://a0109349.xsph.ru/suratPoz/'+obUmumySQL.img3});
                            if(obUmumySQL.img4){
                                $http({method : 'POST', url: 'http://a0109349.xsph.ru/suratPoz/'+obUmumySQL.img4});
                                if(obUmumySQL.img5){
                                    $http({method : 'POST', url: 'http://a0109349.xsph.ru/suratPoz/'+obUmumySQL.img5});
                                    if(obUmumySQL.img6){
                                        $http({method : 'POST', url: 'http://a0109349.xsph.ru/suratPoz/'+obUmumySQL.img6});
                                        if(obUmumySQL.img7){
                                            $http({method : 'POST', url: 'http://a0109349.xsph.ru/suratPoz/'+obUmumySQL.img7});
                                            if(obUmumySQL.img8){
                                                $http({method : 'POST', url: 'http://a0109349.xsph.ru/suratPoz/'+obUmumySQL.img8});
                                                if(obUmumySQL.img9){
                                                    $http({method : 'POST', url: 'http://a0109349.xsph.ru/suratPoz/'+obUmumySQL.img9});
                                                    if(obUmumySQL.img10){
                                                        $http({method : 'POST', url: 'http://a0109349.xsph.ru/suratPoz/'+obUmumySQL.img10});
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                facHaysyBazadanZagruzkaEtmeli.haysyKatKabuletmak2(obUmumySQL);
                var haysyBaza2 = facHaysyBazadanZagruzkaEtmeli.haysyKatUgratmak2();
                //Baza File yazmak ucin bir setire duzup ugratya
                $scope.yarayaTawList = '';
                //Eger on yaraya diyip bellemedik bolsa
                if($scope.userBazaCook.yarayaTawArray) {
                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                }
                //Bazadan gelen spisekd

                // console.log('Haysy baza HOME2:',$scope.userBazaCook.yarayaTawArray)
                //ON BAZADA BAR
                if($scope.userBazaCook.yarayaTawArray){
                    var index = $scope.yarayaTawUser.indexOf(infoKeyT);
                    $scope.yarayaTawUser.splice(index,1);
                    var index = $scope.yarayaTawUserBN.indexOf(haysyBaza2);
                    $scope.yarayaTawUserBN.splice(index,1);
                    if($scope.yarayaTawUser) {
                        for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                            if ($scope.yarayaTawList === '') {
                                $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar]
                            }
                            else {
                                $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar]
                            }
                        }
                    }
                    //Uzyn spisek edip gosýa
                    $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                    //Uzyn massiw edip gosya
                    $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                    $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                    //Severe Ugratya
                    console.log('Taza Ugratmaly Baza Yar:',$scope.userBazaCook)
                    new $scope.usersSQL($scope.userBazaCook).$save().then(function (newItem) {
                        $scope.ugUcinBaza = {};
                        // console.log('STAR Baza2:',$scope.userBazaCook);
                        $scope.menTawarlam = [];
                        // var e=0;
                        for (var e = 0; e < $scope.userBazaCook.yarayaTawArrayBN.length; e++) {
                            $scope.ugUcin = {};
                            nomerBazaName.haysyBazaNameYat($scope.userBazaCook.yarayaTawArrayBN[e])
                            var bazaName = nomerBazaName.haysyBazaNameUgr();
                            var keyT = $scope.userBazaCook.yarayaTawArray[e];
                            $scope.ugUcin.bazaName = bazaName;
                            $scope.ugUcin.keyT = keyT;
                        // console.log('C0', bazaName)
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawarforman",
                                data: $scope.ugUcin
                            }).then(function (newItem) {
                                // console.log('C1', newItem.data[0])
                                // console.log('C2', $scope.userBazaCook)
                                $scope.menTawarlam.push(newItem.data[0]);
                                $cookieStore.put('loginUserBaza',$scope.userBazaCook);
                            })
                        }
                        //Saylan katagoriana gora URL bilya
                        //1URAWEN
                        facHaysyBazadanZagruzkaEtmeli.haysyKatKabuletmak1Ura(obUmumySQL);
                        var haysyBaza1Ura = facHaysyBazadanZagruzkaEtmeli.haysyKatUgratmak1Ura();
                        // console.log('E1', haysyBaza1Ura);
                        //2URAWEN
                        facHaysyBazadanZagruzkaEtmeli.haysyKatKabuletmak2Ura(obUmumySQL);
                        var haysyBaza2Ura = facHaysyBazadanZagruzkaEtmeli.haysyKatUgratmak2Ura();
                        // console.log('E2', haysyBaza2Ura);
                        if(obUmumySQL.katUra4) {
                            //3URAWEN
                            facHaysyBazadanZagruzkaEtmeli.haysyKatKabuletmak3Ura(obUmumySQL);
                            var haysyBaza3Ura = facHaysyBazadanZagruzkaEtmeli.haysyKatUgratmak3Ura();
                        }

                        //Saylan URL gora haysy bazadan bilya
                        //1 URAW
                        nomerBazaName.haysyBazaNameYat1Ura(haysyBaza1Ura)
                        var bazaName1Uar = nomerBazaName.haysyBazaNameUgr1Ura();
                        //2 URAW
                        nomerBazaName.haysyBazaNameYat2Ura(haysyBaza2Ura)
                        var bazaName2Uar = nomerBazaName.haysyBazaNameUgr2Ura();
                        if(obUmumySQL.katUra4) {
                            //3 URAW
                            nomerBazaName.haysyBazaNameYat3Ura(haysyBaza3Ura)
                            var bazaName3Uar = nomerBazaName.haysyBazaNameUgr3Ura();
                        }

                        $scope.ugUcinBaza.bazaName1 = bazaName1Uar;
                        $scope.ugUcinBaza.bazaName2 = bazaName2Uar;
                        $scope.ugUcinBaza.bazaName3 = bazaName3Uar;
                        $scope.ugUcinBaza.keyT = infoKeyT;//'685ff66bd9c1a'
                        // console.log('BAOB1', obUmumySQL.katUra1);
                        // console.log('BAOB2', obUmumySQL.katUra2);
                        // console.log('BAOB3', obUmumySQL.katUra3);
                        // console.log('BAOB4', obUmumySQL.katUra4);
                        // console.log('P1', bazaName1Uar);
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarpoz1", data : $scope.ugUcinBaza}).then(function (newItem) {
                            console.log('1POZDYM ', $scope.ugUcinBaza)
                        });
                        if(bazaName2Uar === 'umumy_eml_kwa' || bazaName2Uar === 'umumy_eml_gar'
                            || bazaName2Uar === 'umumy_eml_taj') {
                            // console.log('P2DD', bazaName2Uar);
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawarpoz2d",
                                data: $scope.ugUcinBaza
                            }).then(function (newItem) {
                                console.log('2DDPOZDYM ', $scope.ugUcinBaza)
                            });
                        }
                        else{
                            // console.log('P2', bazaName2Uar);
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawarpoz2",
                                data: $scope.ugUcinBaza
                            }).then(function (newItem) {
                                console.log('2POZDYM ', $scope.ugUcinBaza)
                            });
                        }
                        if(obUmumySQL.katUra4) {
                            // console.log('P3', bazaName3Uar);
                            if(bazaName2Uar === 'umumy_eml_kwa' || bazaName2Uar === 'umumy_eml_gar'
                                || bazaName2Uar === 'umumy_eml_taj'){
                                console.log('B2');
                                $http({method: "POST", url: "http://a0109349.xsph.ru/tawarpoz3", data : $scope.ugUcinBaza}).then(function (newItem) {
                                    console.log('3POZDYM ', $scope.ugUcinBaza)
                                });
                            }
                        }
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarpoz", data : $scope.ugUcinBaza}).then(function (newItem) {
                            console.log('POZDYM', $scope.ugUcinBaza)
                        })
                    });
                }

            }, function() {
                console.log('Yok');
            });
        };

        //Maglumaty uytgetmek ucin
        $scope.bazanyUytgetmek = function (obUmumySQL) {
            globalPeremenFac.updateBazanyUyt(obUmumySQL);
            globalPeremenFac.updateHP(obUmumySQL.keyT, obUmumySQL.katUra2, obUmumySQL.katUra3, obUmumySQL.katUra4, obUmumySQL.yarayamy);
        }
    }])

    .controller('gWnNZeAranHarytlarCtrl', ['$scope', '$stateParams', '$cookieStore', '$http', 'globalPeremenFac', '$resource', 'nomerBazaName', 'facHaysyBazadanZagruzkaEtmeli', 'ertdayBD', function ($scope, $stateParams, $cookieStore, $http, globalPeremenFac, $resource, nomerBazaName, facHaysyBazadanZagruzkaEtmeli, ertdayBD) {

        //DILI TM RU
        $scope.diliTmRu = globalPeremenFac.getKatDiliTmRu();

        //Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie
        $scope.userBazaCook = $cookieStore.get('loginUserBaza');

        // $scope.userBazaCookMagYar = $cookieStore.get('loginUserBazaMagYar');
        // console.log('COOKIE:', $scope.userBazaCook);

        //Glawny stranitsadan id sinu alyp sol sahypa ugratya
        $scope.maglumatUgratmak = function(idName, katUra2, katUra3, katUra4, yarayamy) {/*newKategoriH*/
            // console.log('Ugratmaly Maglumat', idName, katUra2, katUra3, katUra4, yarayamy);
            globalPeremenFac.updateHP(idName, katUra2, katUra3, katUra4, yarayamy);/*$scope.idUser);*/
            // $scope.idUser = '';
        };

///////////////////////////////////////////ELAYAT WE DAYHAN KATALOG////////////////////////////////////////
        $scope.welayatlar = [{wariant: "Aşgabat", wariantRU: "Ашхабад"},
            {wariant: "Ahal", wariantRU: "Ахал"},
            {wariant: "Mary", wariantRU: "Мары"},
            {wariant: "Lebap", wariantRU: "Лебап"},
            {wariant: "Daşoguz", wariantRU: "Дашогуз"},
            {wariant: "Balkan", wariantRU: "Балкан"}];
        $scope.etraplar = ertdayBD.ugratertaplar();
        $scope.dayhan = ertdayBD.ugratdayhanlar();
        if(!$scope.etraplar) {
            $http.get("http://a0109349.xsph.ru/gaytaretraplar").then(function (newItem) {
                console.log('Etraplar45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.etraplar = newItem.data;
                ertdayBD.yattutertaplar(newItem.data)
            })
        }
        if(!$scope.dayhan) {
            $http.get("http://a0109349.xsph.ru/gaytardayhanlar").then(function (newItem) {
                console.log('Dayhanlae45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.dayhan = newItem.data;
                ertdayBD.yattutdayhanlar(newItem.data)
            })
        }

        $scope.katUra1Rus = [{wariant: "Transport",wariantRU: "Транспорт", value: "Transport", surat: "1transport"},
            {wariant: "Emlak",wariantRU: "Недвижимость", value: "Emlak", surat: "1emlak"},
            {wariant: "Iş",wariantRU: "Работа", value: "Iş", surat: "1is"},
            {wariant: "Hyzmat",wariantRU: "Услуги", value: "Hyzmat", surat: "1hyzmat"},
            {wariant: "Öý-Hojalyk üçin", wariantRU: "Для Дома и Дачи", value: "Öý-Hojalyk üçin", surat: "1oyuç"},
            {wariant: "Harytlar", wariantRU: "Изделия", value: "Harytlar", surat: "1haryt"},
            {wariant: "Egin Eşikler we Bujiteria", wariantRU: "Одежды и Бижутерия", value: "Egin Eşikler we Bujiteria", surat: "1egin"},
            {wariant: "Tehnika", wariantRU: "Техника", value: "Tehnika", surat: "1tehnika"},
            {wariant: "Maldarçylyk we Bagbançylyk", wariantRU: "Животноводство и Садовничество", value: "Maldarçylyk we Bagbançylyk", surat: "1maldar"},
            {wariant: "Güýmenje we Dynç Alyş", wariantRU: "Хобби и Отдых", value: "Güýmenje we Dynç Alyş", surat: "1hobbi"}];
        {
            $scope.katUra2Rus = [{wariant: "Awtoulaglar", wariantRU: "Автомобили", haysykat: "Transport", surat: "2transportawt"},
                {wariant: "Matorlar we Mototehnikalar", wariantRU: "Мотоциклы и Мототехника", haysykat: "Transport", surat: "2transportmot"},
                {wariant: "Gruzowikler we Spestehnikalar", wariantRU: "Грузовики и Спецтехника", haysykat: "Transport", surat: "2transportgru"},
                {wariant: "Suw Transportlary", wariantRU: "Водный Транспорт", haysykat: "Transport", surat: "2transportsuw"},
                {wariant: "Zapçastlar we Bezegler", wariantRU: "Запчасти и Аксессуары", haysykat: "Transport", surat: "2transportzap"},

                {wariant: "Kwartira", wariantRU: "Квартиры", haysykat: "Emlak", surat: ""},
                {wariant: "Öý we Daça", wariantRU: "Дома, Дачи, Коттеджи", haysykat: "Emlak", surat: ""},
                {wariant: "Mellek", wariantRU: "Земельные Участки", haysykat: "Emlak", surat: ""},
                {wariant: "Garaž we Maşyn goýara ýer", wariantRU: "Гаражи и Машиноместа", haysykat: "Emlak", surat: ""},
                {wariant: "Täjirçilik emlägi", wariantRU: "Коммерческая Недвижимость", haysykat: "Emlak", surat: ""},

                {wariant: "Iş gözleýän", wariantRU: "Ищу Работу", haysykat: "Iş", surat: ""},
                {wariant: "Işgär Gözleýäň", wariantRU: "Ищу Работник", haysykat: "Iş", surat: ""},

                {wariant: "Toý", wariantRU: "Свадьба", haysykat: "Hyzmat", surat: ""},
                {wariant: "Maşyn/Ulaglar", wariantRU: "Ремонт Транспорта", haysykat: "Hyzmat", surat: ""},
                {wariant: "Tikin Maşyn", wariantRU: "Ремонт Швейные Машины", haysykat: "Hyzmat", surat: ""},
                {wariant: "Tehnika", wariantRU: "Ремонт Техники", haysykat: "Hyzmat", surat: ""},
                {wariant: "Gurluşyk", wariantRU: "Ремонт и Строительство", haysykat: "Hyzmat", surat: ""},
                {wariant: "Jaý/Öý Remont", wariantRU: "Ремонт Домов", haysykat: "Hyzmat", surat: ""},

                {wariant: "Halylar we Keçeler", wariantRU: "Коверы и Кошмы", haysykat: "Öý-Hojalyk üçin", surat: ""},
                {wariant: "Mebeller", wariantRU: "Мебель и Интерьер", haysykat: "Öý-Hojalyk üçin", surat: ""},
                {wariant: "Posuda we Harytlar", wariantRU: "Посуда и Товары", haysykat: "Öý-Hojalyk üçin", surat: ""},
                {wariant: "Gurluşyk Harytlary", wariantRU: "Ремонт и Строительство", haysykat: "Öý-Hojalyk üçin", surat: ""},

                {wariant: "Guýma", wariantRU: "Разливной", haysykat: "Harytlar", surat: ""},
                {wariant: "Demirden", wariantRU: "Из Железа", haysykat: "Harytlar", surat: ""},
                {wariant: "Agaçdan", wariantRU: "Из Дерево", haysykat: "Harytlar", surat: ""},
                {wariant: "Gurluşyk üçin", wariantRU: "Для Строительства", haysykat: "Harytlar", surat: ""},
                {wariant: "Oba Hojalyk üçin", wariantRU: "Бытовые", haysykat: "Harytlar", surat: ""},

                {wariant: "Gelin/Gyzlar üçin", wariantRU: "Для Невест/Девушек", haysykat: "Egin Eşikler we Bujiteria", surat: ""},
                {wariant: "Erkekler üçin", wariantRU: "Для Мужщин", haysykat: "Egin Eşikler we Bujiteria", surat: ""},
                {wariant: "Çagalar üçin", wariantRU: "Для Детей", haysykat: "Egin Eşikler we Bujiteria", surat: ""},

                {wariant: "Telefon", wariantRU: "Телефоны", haysykat: "Tehnika", surat: ""},
                {wariant: "Notebook", wariantRU: "Ноутбуки", haysykat: "Tehnika", surat: ""},
                {wariant: "Kompýuter we Printer", wariantRU: "Компьютеры и Принтеры", haysykat: "Tehnika", surat: ""},
                {wariant: "Audio we Wideo", wariantRU: "Аудио и Видео", haysykat: "Tehnika", surat: ""},
                {wariant: "Öý üçin", wariantRU: "Для Дома", haysykat: "Tehnika", surat: ""},
                {wariant: "Aş hana üçin/Gaz jaý", wariantRU: "Для Кухни", haysykat: "Tehnika", surat: ""},
                {wariant: "Howa we Klimat Enjamlary", wariantRU: "Климатическое Оборудование", haysykat: "Tehnika", surat: ""},
                {wariant: "Fotoapparatla we Dürbiler", wariantRU: "Фотоаппараты и Телескопы", haysykat: "Tehnika", surat: ""},
                {wariant: "Kompýuter üçin Harytlar", wariantRU: "Товары для Компьютера", haysykat: "Tehnika", surat: ""},

                {wariant: "Bag-Bakja", wariantRU: "Бахча", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},
                {wariant: "Nahallar we Şitiller", wariantRU: "Саженец и Рассада", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},
                {wariant: "Iri Haýwanlar", wariantRU: "Большие Животные", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},
                {wariant: "Uşak Haýwanlar", wariantRU: "Маленький Животные", haysykat: "Maldarçylyk we Bagbançylyk", surat: ""},

                {wariant: "Welosiped", wariantRU: "Велосипеды", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Bilet we Dynç Alyş", wariantRU: "Билеты и Путешествия", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Muzikantlar üçin", wariantRU: "Музыкальные Инструменты", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Sport", wariantRU: "Спорт и Отдых", haysykat: "Güýmenje we Dynç Alyş", surat: ""},
                {wariant: "Oýunlar we Programmalar", wariantRU: "Игры и Программы", haysykat: "Güýmenje we Dynç Alyş", surat: ""}
            ];
            {
                $scope.katUra3Rus = [{wariant: "Sürülen", wariantRU: "С пробегом", haysykat: "Awtoulaglar", surat: ""},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Awtoulaglar", surat: ""},

                    {wariant: "Kwadrotsikl", wariantRU: "Квадроциклы", haysykat: "Matorlar we Mototehnikalar", surat: ""},
                    {wariant: "Maped we Skuter", wariantRU: "Мопеды и Скутеры", haysykat: "Matorlar we Mototehnikalar", surat: ""},
                    {wariant: "Matorlar", wariantRU: "Мотоциклы", haysykat: "Matorlar we Mototehnikalar", surat: ""},
                    {wariant: "Murawey", wariantRU: "Муравей", haysykat: "Matorlar we Mototehnikalar", surat: ""},

                    {wariant: "Awtobus", wariantRU: "Автобусы", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Kran", wariantRU: "Краны", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Kamaz", wariantRU: "Камаз", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Buldozer", wariantRU: "Бульдозеры", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Gruzowik", wariantRU: "Грузовики", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Komunalny Tehnika", wariantRU: "Коммунальная Техника", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Yeňil transport", wariantRU: "Лёгкий Транспорт", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Ýük ýükleýji maşynlar", wariantRU: "Погрузчики", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Teleşge", wariantRU: "Прицепы", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Traktor", wariantRU: "Трактор", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Oba-Hojalyk tehnikasy", wariantRU: "Сельхозтехника", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Gurluşuk tehnikasy", wariantRU: "Строительная Техника", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Tirkeg Çekijiler", wariantRU: "Тягачи", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},
                    {wariant: "Ekskawator", valwariantRUue: "Экскаваторы", haysykat: "Gruzowikler we Spestehnikalar", surat: ""},

                    {wariant: "Kürekli gaýyk", wariantRU: "Каяки и Каноэ", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Gidrotsikl", wariantRU: "Гидроциклы", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Kater we Ýahta", wariantRU: "Катера и Яхты", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Matorly Lodka/Gaýyk", wariantRU: "Моторные Лодки", haysykat: "Suw Transportlary", surat: ""},
                    {wariant: "Çişirilýän Lodka/Gaýyk", wariantRU: "Надувные Лодки", haysykat: "Suw Transportlary", surat: ""},

                    {wariant: "Zapçastlar", wariantRU: "Запчасти", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Bezegler", wariantRU: "Аксессуары", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "GPS-nawigator/Ugrukdurujy", wariantRU: "GPS-Навигаторы", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Ýag we Himiýa", wariantRU: "Масло и Автохимия", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Bagajnik we Kürçek", wariantRU: "Багажники и Фаркопы", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Audio we Wideotehnika", wariantRU: "Аудио- и Видеотехника", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Instrumentlar", wariantRU: "Инструменты", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Teleşga", wariantRU: "Прицепы", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Ogurluga garşy abzal", wariantRU: "Противоугонные Устройства", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Týuning/Özgerdiş", wariantRU: "Тюнинг", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Tekerler we Diskler", wariantRU: "Шины, Диски и Колёса", haysykat: "Zapçastlar we Bezegler", surat: ""},
                    {wariant: "Şlem, Aýakgap we egin eşikler", wariantRU: "Экипировка", haysykat: "Zapçastlar we Bezegler", surat: ""},

                    ////////////

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Kwartira"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Kwartira"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Kwartira"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Kwartira"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Öý we Daça"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Öý we Daça"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Öý we Daça"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Öý we Daça"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Mellek"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Mellek"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Mellek"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Mellek"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Garaž we Maşyn goýara ýer"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Garaž we Maşyn goýara ýer"},

                    {wariant: "Satlyk", wariantRU: "Продам", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю", haysykat: "Täjirçilik emlägi"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму", haysykat: "Täjirçilik emlägi"},

                    //////////

                    {wariant: "Internet we Telefon Ulgamy",wariantRU: "IT, Интернет, Телеком", haysykat: "Iş gözleýän"},
                    {wariant: "Awto ulag telekeçiligi",wariantRU: "Автомобильный Бизнес", haysykat: "Iş gözleýän"},
                    {wariant: "Bank",wariantRU: "Банки, Инвестиции", haysykat: "Iş gözleýän"},
                    {wariant: "Administrator",wariantRU: "Административная Работа", haysykat: "Iş gözleýän"},
                    {wariant: "Tejribesiz, Student",wariantRU: "Без Опыта, Студенты", haysykat: "Iş gözleýän"},
                    {wariant: "Hasapçylyk, Maliýe",wariantRU: "Бухгалтерия, Финансы", haysykat: "Iş gözleýän"},
                    {wariant: "Döwlet Işgäri",wariantRU: "Госслужба", haysykat: "Iş gözleýän"},
                    {wariant: "Öý işgäri",wariantRU: "Домашний Персонал", haysykat: "Iş gözleýän"},
                    {wariant: "Marketing, Reklama",wariantRU: "Маркетинг, Реклама, PR", haysykat: "Iş gözleýän"},
                    {wariant: "Medisina",wariantRU: "Медицина, Фармацевтика", haysykat: "Iş gözleýän"},
                    {wariant: "Ylym, Bilim",wariantRU: "Образование, Наука", haysykat: "Iş gözleýän"},
                    {wariant: "Goragçy, Howupsuzlyk",wariantRU: "Охрана, Безопасность", haysykat: "Iş gözleýän"},
                    {wariant: "Söwdegär",wariantRU: "Продажи", haysykat: "Iş gözleýän"},
                    {wariant: "Önümçilik",wariantRU: "Производство, Сырьё, с/х", haysykat: "Iş gözleýän"},
                    {wariant: "Ätiýaçlandyryş",wariantRU: "Страхование", haysykat: "Iş gözleýän"},
                    {wariant: "Gurluşyk",wariantRU: "Строительство", haysykat: "Iş gözleýän"},
                    {wariant: "Transport",wariantRU: "Транспорт, Логистика", haysykat: "Iş gözleýän"},
                    {wariant: "Turizm",wariantRU: "Туризм, Ррестораны", haysykat: "Iş gözleýän"},
                    {wariant: "Restoran",wariantRU: "Ресторанный", haysykat: "Iş gözleýän"},
                    {wariant: "Dolandyryjy",wariantRU: "Управление Персоналом", haysykat: "Iş gözleýän"},
                    {wariant: "Gözellik salony",wariantRU: "Салоны Красоты", haysykat: "Iş gözleýän"},
                    {wariant: "Başga Görnüşi...",wariantRU: "Другие...", haysykat: "Iş gözleýän"},

                    {wariant: "Internet we Telefon Ulgamy",wariantRU: "IT, Интернет, Телеком", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Awto ulag telekeçiligi",wariantRU: "Автомобильный Бизнес", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Bank",wariantRU: "Банки, Инвестиции", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Administrator",wariantRU: "Административная Работа", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Tejribesiz, Student",wariantRU: "Без Опыта, Студенты", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Hasapçylyk, Maliýe",wariantRU: "Бухгалтерия, Финансы", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Döwlet Işgäri",wariantRU: "Госслужба", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Öý işgäri",wariantRU: "Домашний Персонал", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Marketing, Reklama",wariantRU: "Маркетинг, Реклама, PR", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Medisina",wariantRU: "Медицина, Фармацевтика", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Ylym, Bilim",wariantRU: "Образование, Наука", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Goragçy, Howupsuzlyk",wariantRU: "Охрана, Безопасность", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Söwdegär",wariantRU: "Продажи", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Önümçilik",wariantRU: "Производство, Сырьё, с/х", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Ätiýaçlandyryş",wariantRU: "Страхование", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Gurluşyk",wariantRU: "Строительство", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Transport",wariantRU: "Транспорт, Логистика", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Turizm",wariantRU: "Туризм, Ррестораны", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Restoran",wariantRU: "Ресторанный", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Dolandyryjy",wariantRU: "Управление Персоналом", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Gözellik salony",wariantRU: "Салоны Красоты", haysykat: "Işgär Gözleýäň"},
                    {wariant: "Başga Görnüşi...",wariantRU: "Другие...", haysykat: "Işgär Gözleýäň"},

                    //////

                    {wariant: "Wideoçy",wariantRU: "Видеосъёмка", haysykat: "Toý"},
                    {wariant: "Suratçy",wariantRU: "Фотосъёмка", haysykat: "Toý"},
                    {wariant: "Toý Mekany",wariantRU: "Ресторан для Свадьбы", haysykat: "Toý"},
                    {wariant: "Stol Bezegleri",wariantRU: "Украшение Столов", haysykat: "Toý"},
                    {wariant: "Öý/Jaý Bezegleri",wariantRU: "Украшение Домов", haysykat: "Toý"},
                    {wariant: "Fatalar we Kürteler",wariantRU: "Свадебное Платье we Курте", haysykat: "Toý"},
                    {wariant: "Kastýum we Milli eşikler",wariantRU: "Костюмы и ноц. Одежды", haysykat: "Toý"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Toý"},

                    {wariant: "Remont",wariantRU: "Ремонт", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Krasga",wariantRU: "Краска", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Zapçastlaryny Çalyşmak",wariantRU: "Поменять Запчасти", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Teker Bejermek",wariantRU: "Ремонт Шины", haysykat: "Maşyn/Ulaglar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Maşyn/Ulaglar"},

                    {wariant: "Remont",wariantRU: "Ремонт", haysykat: "Tikin Maşyn"},
                    {wariant: "Ýag Çalyşmak",wariantRU: "Поменять Масло", haysykat: "Tikin Maşyn"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Tikin Maşyn"},

                    {wariant: "Telefon Remont",wariantRU: "Телефон Ремонт", haysykat: "Tehnika"},
                    {wariant: "Kompýuter Remont",wariantRU: "Компьютер Ремонт", haysykat: "Tehnika"},
                    {wariant: "Holodilnik",wariantRU: "Холодильник Ремонт", haysykat: "Tehnika"},
                    {wariant: "Konsaner",wariantRU: "Кондиционеры Ремонт", haysykat: "Tehnika"},
                    {wariant: "Telewizor",wariantRU: "Телевизор Ремонт", haysykat: "Tehnika"},
                    {wariant: "Tehnika Gurnamak",wariantRU: "Установка Техники", haysykat: "Tehnika"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Tehnika"},

                    {wariant: "Uly plan",wariantRU: "Большой План", haysykat: "Gurluşyk"},
                    {wariant: "Kiçi plan",wariantRU: "Маленький План", haysykat: "Gurluşyk"},
                    {wariant: "Nawes",wariantRU: "Навес", haysykat: "Gurluşyk"},
                    {wariant: "Jaýyň üsti/Kryşasy",wariantRU: "Крыша", haysykat: "Gurluşyk"},
                    {wariant: "Patalok",wariantRU: "Паталок", haysykat: "Gurluşyk"},
                    {wariant: "Betonlamak (Öýüň töweregine)",wariantRU: "Вылить Бетон(?)", haysykat: "Gurluşyk"},
                    {wariant: "Howuz Guýmak",wariantRU: "Построить Водосборник", haysykat: "Gurluşyk"},
                    {wariant: "Guýy Gazmak",wariantRU: "Копать Колодец", haysykat: "Gurluşyk"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk"},

                    {wariant: "Komnat Remonty",wariantRU: "Ремонт Комнат", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Kwartira Remonty",wariantRU: "Ремонт Квартир", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Öý/Jaý Remonty",wariantRU: "Ремонт Домов", haysykat: "Jaý/Öý Remont"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Jaý/Öý Remont"},

                    //////////

                    {wariant: "Türkmen Haly", wariantRU: "Туркменские Коверы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Eýran Haly", wariantRU: "Иранские Коверы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Keçe", wariantRU: "Кошмы", haysykat: "Halylar we Keçeler"},
                    {wariant: "Palas", wariantRU: "Палас", haysykat: "Halylar we Keçeler"},

                    {wariant: "Kompýuter üçin Stolar we Otygyçlar", wariantRU: "Компьютерные Столы и Кресла", haysykat: "Mebeller"},
                    {wariant: "Krowat", wariantRU: "Кровати", haysykat: "Mebeller"},
                    {wariant: "Diwan", wariantRU: "Диваны", haysykat: "Mebeller"},
                    {wariant: "Otyrgyç", wariantRU: "Кресла", haysykat: "Mebeller"},
                    {wariant: "Kuhniýa Mebelleri", wariantRU: "Кухонные Гарнитуры", haysykat: "Mebeller"},
                    {wariant: "Çyra/ Ýagtyldyş Enjamlary", wariantRU: "Освещение", haysykat: "Mebeller"},
                    {wariant: "Tumboçka", wariantRU: "Подставки и Тумбы", haysykat: "Mebeller"},
                    {wariant: "Parta we Otugyç", wariantRU: "Столы и Стулья", haysykat: "Mebeller"},
                    {wariant: "Şkaf we Çekmeli Şkaf", wariantRU: "Шкафы и Комоды", haysykat: "Mebeller"},
                    {wariant: "Serwant", wariantRU: "Сервант", haysykat: "Mebeller"},
                    {wariant: "Sandyk", wariantRU: "Сундук", haysykat: "Mebeller"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Mebeller"},

                    {wariant: "Pasudalar/Gap Gaçlar", wariantRU: "Посуды", haysykat: "Posuda we Harytlar"},
                    {wariant: "Kuhniýa üçin Harytlar", wariantRU: "Товары для Кухни", haysykat: "Posuda we Harytlar"},

                    {wariant: "Gapylar", wariantRU: "Двери", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Instrumentlar/Abzallar", wariantRU: "Инструменты", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Okno we Balkon", wariantRU: "Окна и Балконы", haysykat: "Gurluşyk Harytlary"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk Harytlary"},

                    ///////////

                    {wariant: "Gazanlar", wariantRU: "Казаны", haysykat: "Guýma"},
                    {wariant: "Çäýnekler", wariantRU: "Чайники", haysykat: "Guýma"},
                    {wariant: "Käse", wariantRU: "Чашки", haysykat: "Guýma"},
                    {wariant: "Küýze", wariantRU: "Ваза", haysykat: "Guýma"},
                    {wariant: "Kafel", wariantRU: "Кафель", haysykat: "Guýma"},
                    {wariant: "Çemçe", wariantRU: "Лошка", haysykat: "Guýma"},
                    {wariant: "Okora/Tarelka", wariantRU: "Тарелка", haysykat: "Guýma"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Guýma"},

                    {wariant: "Ojak", wariantRU: "Оджак", haysykat: "Demirden"},
                    {wariant: "Zabor", wariantRU: "Забор", haysykat: "Demirden"},
                    {wariant: "Peç", wariantRU: "Печь", haysykat: "Demirden"},
                    {wariant: "Reşotka", wariantRU: "Решетка", haysykat: "Demirden"},
                    {wariant: "Galtak", wariantRU: "Тачка", haysykat: "Demirden"},
                    {wariant: "Nawes", wariantRU: "Навес", haysykat: "Demirden"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Demirden"},

                    {wariant: "Tapjan", wariantRU: "Тапчан", haysykat: "Agaçdan"},
                    {wariant: "Şkaf", wariantRU: "Шкаф", haysykat: "Agaçdan"},
                    {wariant: "Tumoçgalar", wariantRU: "Тумбочки", haysykat: "Agaçdan"},
                    {wariant: "Sandyk", wariantRU: "Сундук", haysykat: "Agaçdan"},
                    {wariant: "Çemçe", wariantRU: "Лошка", haysykat: "Agaçdan"},
                    {wariant: "Gap Gaçlar", wariantRU: "Посуда", haysykat: "Agaçdan"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Agaçdan"},

                    {wariant: "Sement", wariantRU: "Семент", haysykat: "Gurluşyk üçin"},
                    {wariant: "Şipr", wariantRU: "Шипр и Кровля", haysykat: "Gurluşyk üçin"},
                    {wariant: "Agaç", wariantRU: "Дерево", haysykat: "Gurluşyk üçin"},
                    {wariant: "Çagyl", wariantRU: "Чагыл", haysykat: "Gurluşyk üçin"},
                    {wariant: "Kerpiç", wariantRU: "Керпич", haysykat: "Gurluşyk üçin"},
                    {wariant: "Panel", wariantRU: "Панель", haysykat: "Gurluşyk üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gurluşyk üçin"},

                    {wariant: "Pil", wariantRU: "Пил", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Orak", wariantRU: "Орак", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Dyrmyk", wariantRU: "Дырмык", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Lapata", wariantRU: "Лапата", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Kätmen", wariantRU: "Катмен", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Gyrkylyk", wariantRU: "Гыркылык", haysykat: "Oba Hojalyk üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Oba Hojalyk üçin"},

                    ////////////

                    {wariant: "Ýakalar", wariantRU: "Яка", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Köýnekler", wariantRU: "Рубашка", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Žempirler", wariantRU: "Джемпер", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Paltolar", wariantRU: "Пальто", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Balaklar", wariantRU: "Балак", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Sagat", wariantRU: "Часы", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Ýüzük", wariantRU: "Кольцо", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Bilezik", wariantRU: "Брослет", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Gulak Halka", wariantRU: "Серьги", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Monjuk", wariantRU: "Ожерелье", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Zynjyr", wariantRU: "Цепи", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Şaý Sepler", wariantRU: "Шай Сеп", haysykat: "Gelin/Gyzlar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Gelin/Gyzlar üçin"},

                    {wariant: "Maýkalar", wariantRU: "Майки", haysykat: "Erkekler üçin"},
                    {wariant: "Jalbarlar", wariantRU: "Брюки", haysykat: "Erkekler üçin"},
                    {wariant: "Jynsylar", wariantRU: "Джинсы", haysykat: "Erkekler üçin"},
                    {wariant: "Köýnekler", wariantRU: "Рубаха", haysykat: "Erkekler üçin"},
                    {wariant: "Žempirler", wariantRU: "Джемпер", haysykat: "Erkekler üçin"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки", haysykat: "Erkekler üçin"},
                    {wariant: "Paltolar", wariantRU: "Пальто", haysykat: "Erkekler üçin"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь", haysykat: "Erkekler üçin"},
                    {wariant: "Sagat", wariantRU: "Часы", haysykat: "Erkekler üçin"},
                    {wariant: "Zynjyr", wariantRU: "Цепи", haysykat: "Erkekler üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Erkekler üçin"},

                    {wariant: "Egin Eşikler", wariantRU: "Одежды", haysykat: "Çagalar üçin"},
                    {wariant: "Oýunjaklar", wariantRU: "Игрушка", haysykat: "Çagalar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Çagalar üçin"},

                    ////////////////

                    {wariant: "Ulanylan", wariantRU: "Использованный", haysykat: "Telefon"},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Telefon"},
                    {wariant: "Ratsiýa(Rasiýa)", wariantRU: "Рации", haysykat: "Telefon"},
                    {wariant: "Domaşny/Öý Telefony", wariantRU: "Домашный Телефон", haysykat: "Telefon"},
                    {wariant: "Bezegler", wariantRU: "Аксессуары", haysykat: "Telefon"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Telefon"},

                    {wariant: "Ulanylan", wariantRU: "Использованный", haysykat: "Notebook"},
                    {wariant: "Täze", wariantRU: "Новый", haysykat: "Notebook"},
                    {wariant: "Monitor/Ekran", wariantRU: "Монитор", haysykat: "Notebook"},
                    {wariant: "Batareýa", wariantRU: "Батарея", haysykat: "Notebook"},
                    {wariant: "Zarýat Beriji", wariantRU: "Зарядник", haysykat: "Notebook"},

                    {wariant: "Monitor/Ekran", wariantRU: "Монитор", haysykat: "Kompýuter we Printer"},
                    {wariant: "Korpusy", wariantRU: "Корпус", haysykat: "Kompýuter we Printer"},
                    {wariant: "Zapçastlary...", wariantRU: "Запчасти...", haysykat: "Kompýuter we Printer"},
                    {wariant: "Printer", wariantRU: "Принтер", haysykat: "Kompýuter we Printer"},

                    {wariant: "MP3 pleer", wariantRU: "MP3-плееры", haysykat: "Audio we Wideo"},
                    {wariant: "Kolonkalar we Akustika", wariantRU: "Колонки и Акустика", haysykat: "Audio we Wideo"},
                    {wariant: "DVD, Wideo we Blu-ray Okaýjylar", wariantRU: "DVD, Видео и Blu-ray Плееры", haysykat: "Audio we Wideo"},
                    {wariant: "Wideo Kamera", wariantRU: "Видеокамеры", haysykat: "Audio we Wideo"},
                    {wariant: "Kabeller we Adapterlar", wariantRU: "Кабели и Адаптеры", haysykat: "Audio we Wideo"},
                    {wariant: "Mikrafon", wariantRU: "Микрофоны", haysykat: "Audio we Wideo"},
                    {wariant: "Muzykalny Sentr, Magnitafon", wariantRU: "Музыкальные Центры, Магнитолы", haysykat: "Audio we Wideo"},
                    {wariant: "Nauşnikler", wariantRU: "Наушники", haysykat: "Audio we Wideo"},

                    {wariant: "Pylesos", wariantRU: "Пылесосы", haysykat: "Öý üçin"},
                    {wariant: "Kir maşyn", wariantRU: "Стиральные Машины", haysykat: "Öý üçin"},
                    {wariant: "Ütük", wariantRU: "Утюги", haysykat: "Öý üçin"},
                    {wariant: "Tikin maşyn", wariantRU: "Швейные Машины", haysykat: "Öý üçin"},

                    {wariant: "Mikrawalnowka", wariantRU: "Микроволновые Печи", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Plita", wariantRU: "Плита", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Haladilnik we Doňduryjy", wariantRU: "Холодильники и Морозильные Камеры", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Mikser", wariantRU: "Миксер", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Gap gaç ýuwujy maşyn", wariantRU: "Посудомоечные Машины", haysykat: "Aş hana üçin/Gaz jaý"},
                    {wariant: "Ownuk uşak tehnikalar", wariantRU: "Мелкая Кухонная Техника", haysykat: "Aş hana üçin/Gaz jaý"},

                    {wariant: "Wentilýator", wariantRU: "Вентиляторы", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Kandisoner", wariantRU: "Кондиционеры", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Ýyladyjy", wariantRU: "Обогреватели", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Howa Arassalaýjy", wariantRU: "Очистители Воздуха", haysykat: "Howa we Klimat Enjamlary"},
                    {wariant: "Termometr", wariantRU: "Термометры и Метеостанции", haysykat: "Howa we Klimat Enjamlary"},

                    {wariant: "Plýonkaly Fotoapparatla", wariantRU: "Плёночные Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Sifrawoý Fotoapparatla", wariantRU: "Цифравые Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Profesionalnyý Fotoapparatla", wariantRU: "Профециональные Фотоаппараты", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Obýektiwler", wariantRU: "Объективы", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Dürbuler we Teleskoplar", wariantRU: "Бинокли и Телескопы", haysykat: "Fotoapparatla we Dürbiler"},
                    {wariant: "Dürli Enjamlar", wariantRU: "Оборудование и Аксессуары", haysykat: "Fotoapparatla we Dürbiler"},

                    {wariant: "Web-Kamera", wariantRU: "Веб-камеры", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Josýstik we Rol", wariantRU: "Джойстики и Рули", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Klawiatura we Myşka/Syçanjyk", wariantRU: "Клавиатуры и Мыши", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Internet üçin", wariantRU: "Сетевое оборудование", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Žoski disler we Fleşka", wariantRU: "Жёсткие Диски и Флэшки", haysykat: "Kompýuter üçin Harytlar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Kompýuter üçin Harytlar"},

                    ////////////

                    {wariant: "Üzüm", wariantRU: "Виноград", haysykat: "Bag-Bakja"},
                    {wariant: "Alma", wariantRU: "Яблоко", haysykat: "Bag-Bakja"},
                    {wariant: "Erik", wariantRU: "Абрикос", haysykat: "Bag-Bakja"},
                    {wariant: "Almyrt", wariantRU: "Груша", haysykat: "Bag-Bakja"},
                    {wariant: "Şetdaly", wariantRU: "Персик", haysykat: "Bag-Bakja"},
                    {wariant: "Limon", wariantRU: "Лимон", haysykat: "Bag-Bakja"},
                    {wariant: "Pamidor", wariantRU: "Памидор", haysykat: "Bag-Bakja"},
                    {wariant: "Hyýar", wariantRU: "Огурец", haysykat: "Bag-Bakja"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Bag-Bakja"},

                    {wariant: "Ýolka", wariantRU: "Ёлка", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Arça", wariantRU: "Арча", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Şitiller", wariantRU: "Рассады", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Baglar", wariantRU: "Сады", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Güller", wariantRU: "Цветы", haysykat: "Nahallar we Şitiller"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Nahallar we Şitiller"},

                    {wariant: "Sygyr", wariantRU: "Корова", haysykat: "Iri Haýwanlar"},
                    {wariant: "Öküz", wariantRU: "Бык", haysykat: "Iri Haýwanlar"},
                    {wariant: "Göle", wariantRU: "Теленок", haysykat: "Iri Haýwanlar"},
                    {wariant: "At", wariantRU: "Конь", haysykat: "Iri Haýwanlar"},
                    {wariant: "Düýe", wariantRU: "Верблюд", haysykat: "Iri Haýwanlar"},
                    {wariant: "Köşek", wariantRU: "Верблюжонок", haysykat: "Iri Haýwanlar"},

                    {wariant: "Goýun", wariantRU: "Баран", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Geçi", wariantRU: "Козел", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Towuk", wariantRU: "Курица", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Jüýje", wariantRU: "Цыпленок", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Towşan", wariantRU: "Кролик", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Induk", wariantRU: "Индюк", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Gaz", wariantRU: "Гусь", haysykat: "Uşak Haýwanlar"},
                    {wariant: "It", wariantRU: "Собака", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Kepderi", wariantRU: "Голубь", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Baýyrlyk üçin", wariantRU: "Горные", haysykat: "Uşak Haýwanlar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Uşak Haýwanlar"},

                    ///////////////

                    {wariant: "Ýol üçin", wariantRU: "Дорожные", haysykat: "Welosiped"},
                    {wariant: "Çagalar üçin", wariantRU: "Детские", haysykat: "Welosiped"},
                    {wariant: "Zapjastlar we Bezegler", wariantRU: "Запчасти и Аксессуары", haysykat: "Welosiped"},

                    {wariant: "Daşary Ýurt üçin", wariantRU: "Путешествия", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Sirk üçin", wariantRU: "Цирк", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Konsert üçin", wariantRU: "Концерты", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Teatr we Kino üçin", wariantRU: "Театр и Кино", haysykat: "Bilet we Dynç Alyş"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Bilet we Dynç Alyş"},

                    {wariant: "Gitara", wariantRU: "Гитара", haysykat: "Muzikantlar üçin"},
                    {wariant: "Dutar", wariantRU: "Дутар", haysykat: "Muzikantlar üçin"},
                    {wariant: "Gyjak", wariantRU: "Гыджак", haysykat: "Muzikantlar üçin"},
                    {wariant: "Deprek", wariantRU: "Барабан и Ударные", haysykat: "Muzikantlar üçin"},
                    {wariant: "Tüýdik", wariantRU: "Духовые", haysykat: "Muzikantlar üçin"},
                    {wariant: "Pionina", wariantRU: "Пианино и Другие Клавишные", haysykat: "Muzikantlar üçin"},
                    {wariant: "Akardion", wariantRU: "Аккордеоны", haysykat: "Muzikantlar üçin"},
                    {wariant: "Skripka", wariantRU: "Скрипки и Другие Смычковые", haysykat: "Muzikantlar üçin"},
                    {wariant: "Studia we Konsert üçin", wariantRU: "Для Студии и Концертов", haysykat: "Muzikantlar üçin"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Muzikantlar üçin"},

                    {wariant: "Tennis üçin", wariantRU: "Теннис", haysykat: "Sport"},
                    {wariant: "Boks üçin", wariantRU: "Бокс", haysykat: "Sport"},
                    {wariant: "Trenirowka üçin", wariantRU: "Фитнес и Тренажёры", haysykat: "Sport"},
                    {wariant: "Skeýbordlar we Tekerçekler", wariantRU: "Ролики и Скейтбординг", haysykat: "Sport"},
                    {wariant: "Stol oýunlary", wariantRU: "Настольные Игры", haysykat: "Sport"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Sport"},

                    {wariant: "PlayStation üçin oýunlar", wariantRU: "Игры для PlayStation", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Kompýuter Oýunlary", wariantRU: "Компьютерные Игры", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Programmalar", wariantRU: "Программы", haysykat: "Oýunlar we Programmalar"},
                    {wariant: "Başga...",wariantRU: "Другое...", haysykat: "Oýunlar we Programmalar"}
                ];

            }
        }
        $scope.bahasynameRus = [
            {wariant:"Bahasy",wariantRU:"Цена"},
            {wariant:"Tölegi",wariantRU:"Оплата"},
            {wariant:"Biriniň Bahasy",wariantRU:"Цена за одного"},
            {wariant:"Bir kg-yň Bahasy",wariantRU:"Цена за 1 кг"},
            {wariant:"Bir Tonnaň Bahasy",wariantRU:"Цена за один тонн"},
            {wariant:"Garaşylýan Aýlyk",wariantRU:"Ожидаемая зарплата"},
            {wariant:"Bir Düýbiň Bahasy",wariantRU:"Цена за 1 коренной"},
            {wariant:"Bir Haltaň Bahasy",wariantRU:"Цена за один мешек"},
            {wariant:"Ýüz Düýbiň Bahasy",wariantRU:"Цена за 100 коренной"},
            {wariant:"Müň Kerpiç Bahasy",wariantRU:"Цена за тысяч кирпичей"},
            {wariant:"Müň Şitileň Bahasy",wariantRU:"Цена за тыс. рассад"}]

        //Maglumatlar Tawaryn maglumatlary. Ekrana cykarya
        $scope.menTawarlam = [];
        // $scope.userBazaCookZAPASNOY = [];
        // $scope.userBazaCookZAPASNOYBN = [];
        console.log('COOKIE', $scope.userBazaCook)
        if($scope.userBazaCook) {
            if ($scope.userBazaCook.yarayaMasArray) {
                for (var e = 0; e < $scope.userBazaCook.yarayaMasArrayBN.length; e++) {
                    $scope.userBazaCookZAPASNOY = [];
                    $scope.userBazaCookZAPASNOYBN = [];
                    $scope.ugUcin = {};
                    nomerBazaName.haysyBazaNameYat($scope.userBazaCook.yarayaMasArrayBN[e])
                    var bazaName = nomerBazaName.haysyBazaNameUgr()
                    var keyT = $scope.userBazaCook.yarayaMasArray[e]
                    $scope.ugUcin.bazaName = bazaName;
                    $scope.ugUcin.keyT = keyT;
                    var sany = 0;
                    $http({
                        method: "POST",
                        url: "http://a0109349.xsph.ru/tawarforman",
                        data: $scope.ugUcin
                    }).then(function (newItem) {
                        $scope.menTawarlam.push(newItem.data[0]);
                        console.log('RE',newItem.data[0].keyT)
                        // console.log('RE2',$scope.menTawarlam)
                        $scope.userBazaCook.maglumatArray = $scope.menTawarlam;
                        if(newItem.data[0].keyT) {
                            for (var sn = 0; sn < $scope.userBazaCook.yarayaMasArrayBN.length; sn++) {
                                if(newItem.data[0].keyT === $scope.userBazaCook.yarayaMasArray[sn]) {
                                    console.log('RE22', $scope.userBazaCook.yarayaMasArray[sn])
                                    $scope.userBazaCookZAPASNOY.push($scope.userBazaCook.yarayaMasArray[sn])
                                    $scope.userBazaCookZAPASNOYBN.push($scope.userBazaCook.yarayaMasArrayBN[sn])
                                }
                            }
                        }
                        sany++;
                        // console.log('RE333', $scope.userBazaCookZAPASNOY)
                    })
                    // console.log('RE44', e ,'|||', $scope.userBazaCook.yarayaMasArray[e])
                }
            }
            // if ($scope.userBazaCook.yarayaMasArray) {
        }

        //Yarayanlan Spisegi Massiwde
        $scope.yarayaMass = [];
        //wagtlayyn cookie ucin
        $scope.yarayaMassUser = [];
        $scope.yarayaMassUserBN = [];
        //YARAYA Mana yaraya knopkasyny basmaly
        $scope.usersSQL = $resource('http://a0109349.xsph.ru/useryar');
        $scope.manaYaraya = function (infoYaraya, infoKeyT, obUmumySQL) {
            console.log('--------------------------');
            console.log('manYar1:', infoKeyT)
            console.log('manYar2:', obUmumySQL)
            facHaysyBazadanZagruzkaEtmeli.haysyKatKabuletmak2(obUmumySQL);
            var haysyBaza2 = facHaysyBazadanZagruzkaEtmeli.haysyKatUgratmak2();
            //Baza File yazmak ucin bir setire duzup ugratya
            $scope.yarayaMasList = '';
            //Eger on yaraya diyip bellemedik bolsa
            if($scope.userBazaCook.yarayaMasArray) {
                $scope.yarayaMassUser = $scope.userBazaCook.yarayaMasArray;
                $scope.yarayaMassUserBN = $scope.userBazaCook.yarayaMasArrayBN;
            }
            //Bazadan gelen spisekd

            if($scope.userBazaCook.yarayaMasArray){
                var index = $scope.yarayaMassUser.indexOf(infoKeyT);
                $scope.yarayaMassUser.splice(index,1);
                var index = $scope.yarayaMassUserBN.indexOf(haysyBaza2);
                $scope.yarayaMassUserBN.splice(index,1);
                if($scope.yarayaMassUser) {
                    for (var ar = 0; ar < $scope.yarayaMassUser.length; ar++) {
                        if ($scope.yarayaMasList === '') {
                            $scope.yarayaMasList = $scope.yarayaMassUser[ar] + '+' + $scope.yarayaMassUserBN[ar]
                        }
                        else {
                            $scope.yarayaMasList = $scope.yarayaMasList + '+' + $scope.yarayaMassUser[ar] + '+' + $scope.yarayaMassUserBN[ar]
                        }
                    }
                }
                console.log('manYar3:', $scope.yarayaMasList)
                //Uzyn spisek edip gosýa
                $scope.userBazaCook.yarayaMasArrayList = $scope.yarayaMasList;
                //Uzyn massiw edip gosya
                $scope.userBazaCook.yarayaMasArray = $scope.yarayaMassUser;
                $scope.userBazaCook.yarayaMasArrayBN = $scope.yarayaMassUserBN;
                //Severe Ugratya
                console.log('manYar4:', $scope.userBazaCook)
                new $scope.usersSQL($scope.userBazaCook).$save().then(function (newItem) {
                    // console.log('STAR Baza2:',$scope.userBazaCook);
                    $scope.menTawarlam = [];
                    console.log('manYar55555')
                    //COOKLIE gosmaly gownune yaranlarspisekden ayranda
                    $cookieStore.put('loginUserBaza',$scope.userBazaCook);
                    for (var e = 0; e < $scope.userBazaCook.yarayaMasArrayBN.length; e++) {
                        $scope.ugUcin = {};
                        nomerBazaName.haysyBazaNameYat($scope.userBazaCook.yarayaMasArrayBN[e])
                        var bazaName = nomerBazaName.haysyBazaNameUgr()
                        var keyT = $scope.userBazaCook.yarayaMasArray[e]
                        $scope.ugUcin.bazaName = bazaName;
                        $scope.ugUcin.keyT = keyT;
                        console.log('manYar5:', $scope.ugUcin)
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawarforman",
                            data: $scope.ugUcin
                        }).then(function (newItem) {
                            $scope.menTawarlam.push(newItem.data[0]);
                            console.log('3MaYar', $scope.userBazaCook)
                        })
                    }
                });
            }
        };
    }])

    .controller('awtoryHemmeSergileriCtrl', ['$scope', '$stateParams', '$cookieStore', '$http', 'globalPeremenFac', '$resource', 'nomerBazaName', 'facHaysyBazadanZagruzkaEtmeli', function ($scope, $stateParams, $cookieStore, $http, globalPeremenFac, $resource, nomerBazaName, facHaysyBazadanZagruzkaEtmeli) {


        //Dili
        $scope.diliTmRu = globalPeremenFac.getKatDiliTmRu();
        //Maglumatlar Tawaryn maglumatlary. Ekrana cykarya
        $scope.menTawarlam = [];
        //COOCKIE derek peremenny
        $scope.bazUg = {}
        //Almaly filen ady USERID
        $scope.bazUg.yaraya = globalPeremenFac.getUserID();
        $http({
            method : 'POST',
            url: 'http://a0109349.xsph.ru/usertawup',
            data : $scope.userBaza
        }).then(function(response){
            if(response.data!=='') {
                console.log('DDDm', response.data)
                $scope.timePere = response.data.split('+');
                $scope.bazUg.yarayaTawArray = [];
                $scope.bazUg.yarayaTawArrayBN = [];
                for(var vp=0; vp<$scope.timePere.length; vp=vp+2) {
                    $scope.bazUg.yarayaTawArray.push($scope.timePere[vp]);
                    $scope.bazUg.yarayaTawArrayBN.push($scope.timePere[vp + 1]);
                }
            }
            //Awtary tawarlaryny bazadan almaly
            if ($scope.bazUg.yarayaTawArray) {
                $scope.menTawarlam = []
                for (var e = 0; e < $scope.bazUg.yarayaTawArrayBN.length; e++) {
                    $scope.ugUcin = {};
                    nomerBazaName.haysyBazaNameYat($scope.bazUg.yarayaTawArrayBN[e])
                    var bazaName = nomerBazaName.haysyBazaNameUgr()
                    var keyT = $scope.bazUg.yarayaTawArray[e]
                    $scope.ugUcin.bazaName = bazaName;
                    $scope.ugUcin.keyT = keyT;
                    $http({
                        method: "POST",
                        url: "http://a0109349.xsph.ru/tawarforman",
                        data: $scope.ugUcin
                    }).then(function (newItem) {
                        $scope.menTawarlam.push(newItem.data[0]);
                        // console.log('Taz Umen:',$scope.menTawarlam)
                        // $scope.userBazaCook.maglumatArray = $scope.menTawarlam;
                    })
                }
                console.log('3Maglumat')
            }
            console.log('DDDmenTawarlam2', $scope.bazUg)
            // $cookieStore.put('loginUserBaza',$scope.userBaza);
        });

        console.log('DDDmenTawarlam1', $scope.bazUg)


        //Glawny stranitsadan id sinu alyp sol sahypa ugratya
        $scope.maglumatUgratmak = function(idName, katUra2, katUra3, katUra4, yarayamy) {/*newKategoriH*/
            // console.log('Ugratmaly Maglumat', idName, katUra2, katUra3, katUra4, yarayamy);
            globalPeremenFac.updateHP(idName, katUra2, katUra3, katUra4, yarayamy);/*$scope.idUser);*/
            // $scope.idUser = '';
        };
    }])

    .controller('gelenHatlarCtrl', ['$scope', '$stateParams', '$cookieStore', '$http', 'globalPeremenFac', '$resource', 'nomerBazaName', 'facHaysyBazadanZagruzkaEtmeli', function ($scope, $stateParams, $cookieStore, $http, globalPeremenFac, $resource, nomerBazaName, facHaysyBazadanZagruzkaEtmeli) {

        //Uytgetmeli maglumatlar. Men wakansialam diyen yerden gelen
        $scope.maglumatlar = globalPeremenFac.getBazanyUyt();
        console.log('$scope.maglumatlar',$scope.maglumatlar)

        //SURAT GOSMAK
        //Suratlaň spisegi
        $scope.iFile=[];
        //Bazadaky suratlary baglaya
        if($scope.maglumatlar.img1){
            $scope.iFile.push($scope.maglumatlar.img1);
            if($scope.maglumatlar.img2){
                $scope.iFile.push($scope.maglumatlar.img2);
                if($scope.maglumatlar.img3){
                    $scope.iFile.push($scope.maglumatlar.img3);
                    if($scope.maglumatlar.img4){
                        $scope.iFile.push($scope.maglumatlar.img4);
                        if($scope.maglumatlar.img5){
                            $scope.iFile.push($scope.maglumatlar.img5);
                            if($scope.maglumatlar.img6){
                                $scope.iFile.push($scope.maglumatlar.img6);
                                if($scope.maglumatlar.img7){
                                    $scope.iFile.push($scope.maglumatlar.img7);
                                    if($scope.maglumatlar.img8){
                                        $scope.iFile.push($scope.maglumatlar.img8);
                                        if($scope.maglumatlar.img9){
                                            $scope.iFile.push($scope.maglumatlar.img9);
                                            if($scope.maglumatlar.img10){
                                                $scope.iFile.push($scope.maglumatlar.img10);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if($scope.iFile.length===10) {
            $scope.maxImgBoldy = true;
        }
        console.log('Baza Sutarlar:', $scope.iFile)
        //Suratlar spisegi mahsimuma barsa knopkany gizlemeli
        $scope.maxImgBoldy = false;
        //Saylanan suratdyn dannylary
        $scope.filesNew = {};
        $scope.imageUpload = function(event){
            var files = event.target.files;
            var file = files[files.length-1];
            $scope.file = file;
            if(file!=undefined){
                $scope.filesNew = file;
            }
            var reader = new FileReader();
            reader.onload = $scope.imageIsLoaded;
            reader.readAsDataURL(file);
        };
        $scope.imageIsLoaded = function(e){
            $scope.$apply(function() {
                $scope.step = e.target.result;
            });
        };
        $scope.isProcessing = false;
        $scope.upload = function(){
            $scope.isProcessing = true;
            var fd = new FormData();
            fd.append('file', $scope.filesNew);
            var request = $http({
                method : 'POST',
                url: 'http://a0109349.xsph.ru/surat',
                data : fd,
                transformRequest:angular.identity,
                headers:{'Content-Type':undefined}
            });
            request.then(function(response){
                $scope.read();
                $scope.isProcessing = false;
                $scope.msg = response.data;
                //Suratlan adyny yugnayas
                // console.log('Suratlan ady',response.data);
                $scope.iFile.push(response.data);
                console.log('Suratlan Spisegi',$scope.iFile);
                if($scope.iFile.length===10) {
                    $scope.maxImgBoldy = true;
                }
                $scope.alert();
            }, function(error){
                $scope.msg = error.data;
                $scope.isProcessing = false;
                $scope.alert();
            });
        };
        $scope.deletImage = function (nameImg) {
            var requestUrl = 'http://a0109349.xsph.ru/suratPoz/'+nameImg;
            //Suraty pozanyňdan soň spisekdenem pozmaly
            var index=$scope.iFile.indexOf(nameImg);
            $scope.iFile.splice(index,1);

            $scope.maxImgBoldy = false;

            var request3 = $http({
                method : 'POST',
                url: requestUrl
            });
        };
        $scope.alert = function(){
            $scope.showMsg = true;
            $timeout(function() {
                $scope.showMsg = false;
            }, 3000);
        };
        $scope.read = function(){
        };
        angular.element(document).ready(function(){
            $scope.read();
        });

        var skacBazaName =  globalPeremenFac.getKatUraBaza();
        $scope.yarayamy =  globalPeremenFac.getYarayamy();
        //Maglumat gorkezenden haysyny acmalydygy
        $scope.magAdy = "viewsEdit/" + skacBazaName + ".html";
        console.log('$scope.magAdy',$scope.magAdy)

        ////////////BEYLEKI BAZALARDAKY YALY ///////////////////////////////////////
        //Son ayyrmaly HOKMAN
        $scope.welayatlar = [{wariant: "Mary", value: "mary"},
            {wariant: "Ahal", value: "ahal"},
            {wariant: "Lebap", value: "lebap"},
            {wariant: "Daşoguz", value: "dasoguz"},
            {wariant: "Balkan", value: "balkan"},
            {wariant: "Aşgabat", value: "asgabat"}];
        $scope.etraplar = [{wariant: "Sakarçage", value: "sakarcage", welay: "mary"},
            {wariant: "Bäherden", value: "baharden", welay: "ahal"},
            {wariant: "Mersia", value: "mersia", welay: "ahal"},
            {wariant: "Tejen", value: "tejen", welay: "ahal"},
            {wariant: "Hario", value: "hario", welay: "ahal"},
            {wariant: "Wekil", value: "wekil", welay: "mary"},
            {wariant: "Tagta Bazar", value: "tagta", welay: "mary"},
            {wariant: "Şatluk", value: "satlyk", welay: "mary"},
            {wariant: "Türkmen", value: "turkmen", welay: "lebap"},
            {wariant: "Rurkmenbasy", value: "rurkmenbasy", welay: "lebap"},
            {wariant: "Reyhan", value: "reyhan", welay: "lebap"},
            {wariant: "Gorkut", value: "Gorkut", welay: "dasoguz"},
            {wariant: "Meria", value: "meria", welay: "dasoguz"}];
        $scope.dayhan = [{wariant: "Agzybir", value: "agzybir", dayhanb: "sakarcage"},
            {wariant: "Kirf", value: "kirf", dayhanb: "sakarcage"}];
        //Welayatlar zatlar GORUNER GORUNMEZ ARASSA
        $scope.jogapWelayat = function () {
            $scope.maglumatlar.etrap = undefined;
            $scope.maglumatlar.dayh = undefined;
        };
        $scope.jogapEtrap = function () {
            $scope.maglumatlar.dayh = undefined;
        };

        //Saherden daslyk
        $scope.aralykshaher = ["1","2","3","4","5","6","7","8","9",
            "10","11","12","13","14","15","16","17","18","19",
            "20","21","22","23","24","25","26","27","28","29",
            "30","31","32","33","34","35","36","37","38","39",
            "40","41","42","43","44","45","46","47","48","49",
            "50","51","52","53","54","55","56","57","58","59",
            "60","61","62","63","64","65","66","67","68","69",
            "70","71","72","73","74","75","76","77","78","79",
            "80","81","82","83","84","85","86","87","88","89",
            "90","91","92","93","94","95","96","97","98","99",
            "100","101","102","103","104","105","106","107","108","109",
            "110","111","112","113","114","115","116","117","118","119",
            "120","121","122","123","124","125","126","127","128","129",
            "130","131","132","133","134","135","136","137","138","139",
            "140","141","142","143","144","145","146","147","148","149"];
        $scope.yyllar = [
            "2001",
            "2005",
            "2008",
            "2011"
        ];
        //OZ GOSANLAM
        $scope.kuzowa_gornusi = [{wariant: "Sedan", value: "Sedan"},
            {wariant: "Heçbek", value: "Heçbek"},
            {wariant: "Uniwersal", value: "Uniwersal"},
            {wariant: "JEEP/ Wnedarožnik", value: "JEEP/ Wnedarožnik"},
            {wariant: "Kabriolet", value: "Kabriolet"},
            {wariant: "Kupe", value: "Kupe"},
            {wariant: "Limuzin", value: "Limuzin"},
            {wariant: "Miniwen", value: "Miniwen"},
            {wariant: "Pikap", value: "Pikap"},
            {wariant: "Furgon", value: "Furgon"},
            {wariant: "Mikroawtobus", value: "Mikroawtobus"}];



        //BAHASYNY uytgetmeli
        //KURS DOLLAR
        $scope.consDollar = '';
        $http.get("http://a0109349.xsph.ru/kursdol").then(function (newItem) {
            // console.log('Dollar: ', newItem.data[0].nace)
            $scope.consDollar = newItem.data[0].nace;
            $scope.maglumatlar.bahasy2=$scope.maglumatlar.bahasy*1000;
            $scope.maglumatlar.bahasy2=$scope.maglumatlar.bahasy2/1000;
            // $scope.bahasy=$scope.bahasy/1000;
            if($scope.maglumatlar === 'TMM (Köne)'){
                $scope.maglumatlar.bahasy2=$scope.maglumatlar.bahasy2*5000;
            }
            else if($scope.maglumatlar === 'TMT (Täze)'){
                $scope.maglumatlar.bahasy2=$scope.maglumatlar.bahasy2;
            }
            else if($scope.maglumatlar === '$'){
                $scope.maglumatlar.bahasy2=$scope.maglumatlar.bahasy2*$scope.consDollar;
            }
            // console.log('KURS', $scope.maglumatlar.bahasy2)
        })



        //SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN
        $scope.ugratmak = function (fInfo) {
            //Suratlaryn adlaryny baza gosara belleyas
            if($scope.iFile){
                fInfo.glawImg = $scope.iFile[0];
                for(var san=0; san<$scope.iFile.length;san++) {
                    if (san == 0) {
                        fInfo.img1 = $scope.iFile[san];
                    }
                    if (san == 1) {
                        fInfo.img2 = $scope.iFile[san];
                    }
                    if (san == 2) {
                        fInfo.img3 = $scope.iFile[san];
                    }
                    if (san == 3) {
                        fInfo.img4 = $scope.iFile[san];
                    }
                    if (san == 4) {
                        fInfo.img5 = $scope.iFile[san];
                    }
                    if (san == 5) {
                        fInfo.img6 = $scope.iFile[san];
                    }
                    if (san == 6) {
                        fInfo.img7 = $scope.iFile[san];
                    }
                    if (san == 7) {
                        fInfo.img8 = $scope.iFile[san];
                    }
                    if (san == 8) {
                        fInfo.img9 = $scope.iFile[san];
                    }
                    if (san == 9) {
                        fInfo.img10 = $scope.iFile[san];
                    }
                }
            }

            //Bahasyny belleninen puluna gora uytgetya
            var kursDol = fInfo.bahasy2;
            if(fInfo.pulBelligi==='TMM (Köne)'){
                kursDol = fInfo.bahasy2/5000;
            }
            else if(fInfo.pulBelligi==='$'){
                kursDol = fInfo.bahasy2*$scope.consDollar;
            }
            fInfo.bahasy = kursDol;
///////////////////////////////////////////////////////////////////////////////////////////
            console.log('IZMENIT:', fInfo)
            if(fInfo.katUra1 == 'Transport') {
                if (fInfo.katUra2 == 'Awtoulaglar') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartraawt/" + fInfo.keyT, data: fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartra/" + fInfo.keyT, data: fInfo})
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data: fInfo}).then(function (newItem) {
                            console.log('Yazaydymay Umumy:', newItem)
                        });
                    });
                }
                if (fInfo.katUra2 == 'Matorlar we Mototehnikalar') {
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartramoto/" + fInfo.keyT,data: fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartra/" + fInfo.keyT, data: fInfo})
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data: fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Mator');
                        });
                    });
                }
                if (fInfo.katUra2 == 'Gruzowikler we Spestehnikalar') {
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartragruz/" + fInfo.keyT, data: fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartra/" + fInfo.keyT, data: fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data: fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Gruz');
                        });
                    });
                }
                if (fInfo.katUra2 == 'Suw Transportlary') {
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartrasuw/" + fInfo.keyT, data: fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartra/" + fInfo.keyT, data: fInfo})
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data: fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Suw');
                        });
                    });
                }
                if (fInfo.katUra2 == 'Zapçastlar we Bezegler') {
                    $http({
                        method: "POST",
                        url: "http://a0109349.xsph.ru/tawartrazapcast/" + fInfo.keyT,
                        data: fInfo
                    }).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartra/" + fInfo.keyT, data: fInfo})
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            console.log('Baza ugratdym Zapçast');
                        });
                    });
                }
            }

            if(fInfo.katUra1 == 'Emlak') {
                if (fInfo.katUra2 == 'Kwartira') {
                    if (fInfo.katUra3 == 'Satlyk') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremlkwartirasatlyk/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremlkwartira/" + fInfo.keyT,
                                data: fInfo
                            })
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo})
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Kwar Sat');
                            });
                        });
                    }
                    if (fInfo.katUra3 == 'Satyn aljak') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremlkwartirasatyna/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremlkwartira/" + fInfo.keyT,
                                data: fInfo
                            })
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo})
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Kwar satA');
                            });
                        });
                    }
                    if (fInfo.katUra3 == 'Hakyna bermek') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremlkwartirahakyna/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremlkwartira/" + fInfo.keyT,
                                data: fInfo
                            })
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo})
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Kwar hak a');
                            });
                        });
                    }
                    if (fInfo.katUra3 == 'Hakyna tutjak') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremlkwartirahakynaal/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremlkwartira/" + fInfo.keyT,
                                data: fInfo
                            })
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo})
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Kwar Hak tut');
                            });
                        });
                    }
                }
                if (fInfo.katUra2 == 'Öý we Daça') {
                    //Severe Ugratya
                    $http({
                        method: "POST",
                        url: "http://a0109349.xsph.ru/tawaremloydac/" + fInfo.keyT,
                        data: fInfo
                    }).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo})
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            console.log('Baza ugratdym OyDaça');
                        });
                    });
                }
                if (fInfo.katUra2 == 'Mellek') {
                    //Severe Ugratya
                    $http({
                        method: "POST",
                        url: "http://a0109349.xsph.ru/tawaremlmellek/" + fInfo.keyT,
                        data: fInfo
                    }).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo});
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            console.log('Baza ugratdym Mellek');
                        });
                    });
                }
                if (fInfo.katUra2 == 'Garaž we Maşyn goýara ýer') {
                    if (fInfo.katUra3 == 'Satlyk') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremlgarazsatlyk/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremlgaraz/" + fInfo.keyT,
                                data: fInfo
                            });
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo});
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Garaz1');
                            });
                        });
                    }
                    if (fInfo.katUra3 == 'Satyn aljak') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremlgarazsatynal/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremlgaraz/" + fInfo.keyT,
                                data: fInfo
                            });
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo});
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Garaz2');
                            });
                        });
                    }
                    if (fInfo.katUra3 == 'Hakyna bermek') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremlgarazhakyna/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremlgaraz/" + fInfo.keyT,
                                data: fInfo
                            });
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo});
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Garaz3');
                            });
                        });
                    }
                    if (fInfo.katUra3 == 'Hakyna tutjak') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremlgarazhakynaal/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremlgaraz/" + fInfo.keyT,
                                data: fInfo
                            });
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo});
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Garaz4');
                            });
                        });
                    }
                }
                if (fInfo.katUra2 == 'Täjirçilik emlägi') {
                    if (fInfo.katUra3 == 'Satlyk') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremltajirsatlyk/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremltajir/" + fInfo.keyT,
                                data: fInfo
                            })
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo})
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Kwar Sat');
                            });
                        });
                    }
                    if (fInfo.katUra3 == 'Satyn aljak') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremltajirsatynal/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremltajir/" + fInfo.keyT,
                                data: fInfo
                            });
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo});
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Tajir2');
                            });
                        });
                    }
                    if (fInfo.katUra3 == 'Hakyna bermek') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremltajirhakyna/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremltajir/" + fInfo.keyT,
                                data: fInfo
                            });
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo});
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Tajir3');
                            });
                        });
                    }
                    if (fInfo.katUra3 == 'Hakyna tutjak') {
                        //Severe Ugratya
                        $http({
                            method: "POST",
                            url: "http://a0109349.xsph.ru/tawaremltajirhakynaal/" + fInfo.keyT,
                            data: fInfo
                        }).then(function (newItem) {
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawaremltajir/" + fInfo.keyT,
                                data: fInfo
                            });
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml/" + fInfo.keyT, data: fInfo});
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT,
                                data: fInfo
                            }).then(function (newItem) {
                                console.log('Baza ugratdym Tajir4');
                            });
                        });
                    }
                }
            }

            if(fInfo.katUra1 == 'Iş') {
                if(fInfo.katUra2 == 'Iş gözleýän') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarishishgoz/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarish/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Is Gozleyan');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Işgär Gözleýäň') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarishishgargoz/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarish/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Isgar Gozleyan');
                        });
                    });
                }
            }

            if(fInfo.katUra1 == 'Hyzmat') {
                if(fInfo.katUra2 == 'Toý') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyztoy/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Hyzmat Toy');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Maşyn/Ulaglar') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyzmasyn/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Hyzmat Masyn');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Tikin Maşyn') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyztikin/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Hyzmat Tikin');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Tehnika') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyztehnika/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Hyzmat Tehnika');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Gurluşyk') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyzgurlus/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Hyzmat Gurlusyk');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Jaý/Öý Remont') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyzjay/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Hyzmat Jay');
                        });
                    });
                }
            }

            if(fInfo.katUra1 == 'Öý-Hojalyk üçin') {
                if(fInfo.katUra2 == 'Halylar we Keçeler') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhojhaly/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhoj/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym OyHojalyk Haly');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Mebeller') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhojmellek/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhoj/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym OyHojalyk Mellek');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Posuda we Harytlar') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhojposuda/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhoj/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym OyHojalyk Posuda');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Gurluşyk Harytlary') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhojgurlus/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhoj/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym OyHojalyk Gurlusyk');
                        });
                    });
                }
            }

            if(fInfo.katUra1 == 'Harytlar') {
                if(fInfo.katUra2 == 'Guýma') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharytguyma/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharyt/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Haryt Guyma');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Demirden') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharytdemir/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharyt/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Haryt Demir');
                            // $scope.formInfo = {};
                        });
                    });
                }
                if(fInfo.katUra2 == 'Agaçdan') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharytagac/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharyt/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Haryt Agaç');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Gurluşyk üçin') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharytgurlus/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharyt/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Haryt Gurlus');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Oba Hojalyk üçin') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharytobahoj/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharyt/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Haryt Oy Uçin');
                        });
                    });
                }
            }

            if(fInfo.katUra1 == 'Egin Eşikler we Bujiteria') {
                if(fInfo.katUra2 == 'Gelin/Gyzlar üçin') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaregingelin/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaregin/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Egin Gelin');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Erkekler üçin') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawareginerkek/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaregin/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Egin Erkek');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Çagalar üçin') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaregincaga/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaregin/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Egin Çaga');
                        });
                    });
                }
            }

            if(fInfo.katUra1 == 'Tehnika') {
                if(fInfo.katUra2 == 'Telefon') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikatelefon/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Tehnika Telefon');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Notebook') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikanote/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Tehnika Note');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Kompýuter we Printer') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikakomp/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Tehnika Komp');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Audio we Wideo') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikaaudio/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Tehnika Audio');
                            // $scope.formInfo = {};
                        });
                    });
                }
                if(fInfo.katUra2 == 'Öý üçin') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikaoyu/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Tehnika Oy uç');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Aş hana üçin/Gaz jaý') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikaasu/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Tehnika As hana');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Howa we Klimat Enjamlary') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikahowa/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Tehnika Howa');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Fotoapparatla we Dürbiler') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikafoto/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Tehnika Foto');
                        });
                    });
                }
                if(fInfo.katUra2 == 'Kompýuter üçin Harytlar') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikakompoyun/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Tehnika Komp oyun');
                        });
                    });
                }
            }

            if(fInfo.katUra1 == 'Maldarçylyk we Bagbançylyk') {
                if(fInfo.katUra2 == 'Bag-Bakja') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbagbag/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbag/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Maldar Bag Bak');
                            // $scope.formInfo = {};
                        });
                    });
                }
                if(fInfo.katUra2 == 'Nahallar we Şitiller') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbagnahal/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbag/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Maldar Nahal');
                            // $scope.formInfo = {};
                        });
                    });
                }
                if(fInfo.katUra2 == 'Iri Haýwanlar') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbagiri/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbag/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Maldar Iri');
                            // $scope.formInfo = {};
                        });
                    });
                }
                if(fInfo.katUra2 == 'Uşak Haýwanlar') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbagusak/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbag/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Maldar Uly');
                            // $scope.formInfo = {};
                        });
                    });
                }
            }

            if(fInfo.katUra1 == 'Güýmenje we Dynç Alyş') {
                if(fInfo.katUra2 == 'Welosiped') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymenwelos/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymen/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Guymen Welik');
                            // $scope.formInfo = {};
                        });
                    });
                }
                if(fInfo.katUra2 == 'Bilet we Dynç Alyş') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymenbilet/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymen/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Guymen Bilet');
                            // $scope.formInfo = {};
                        });
                    });
                }
                if(fInfo.katUra2 == 'Muzikantlar üçin') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymenmuzik/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymen/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Guymen Muzik');
                            // $scope.formInfo = {};
                        });
                    });
                }
                if(fInfo.katUra2 == 'Sport') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymensport/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymen/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Guymen Sport');
                            // $scope.formInfo = {};
                        });
                    });
                }
                if(fInfo.katUra2 == 'Oýunlar we Programmalar') {
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymenoyun/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymen/" + fInfo.keyT, data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar/" + fInfo.keyT, data : fInfo}).then(function (newItem) {
                            console.log('Baza ugratdym Guymen Oyun');
                            // $scope.formInfo = {};
                        });
                    });
                }
            }

        };
    }])

    .controller('sMSCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


    }])

    .controller('ulanmagyDZgNleriCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


    }])

    .controller('habarlaMakInCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


    }])

    .directive('backButton', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', goBack);

                function goBack() {
                    history.back();
                    scope.$apply();
                }
            }
        }
    })

    //Welayatdan ETRAP DAYHAN BOIRLESIGI gelen maglumaty glawna ugtatmak ucin
    .factory('welayatFilter', function () {
        var welHaysy = '';
        var etrHaysy = '';
        var dayhHaysy = undefined;
        var nameSayladymOblast = {};
        return {
            welayatYatturmak: function (jogapWel) {
                welHaysy = jogapWel;
            },
            etrapYatturmak: function (jogapEtr) {
                etrHaysy = jogapEtr;
            },
            dayhanYatturmak: function (jogapDayh) {
                dayhHaysy = jogapDayh;
            },
            nameSayladymYatturmak: function (jogapSaylananOblast) {
                nameSayladymOblast = jogapSaylananOblast;
            },
            welayatJogap: function () {
                return welHaysy;
            },
            etrapJogap: function () {
                return etrHaysy;
            },
            dayhanJogap: function () {
                return dayhHaysy;
            },
            SayladymOblastJogap: function () {
                return nameSayladymOblast;
            }
        }
    })

    .factory('katalogFilter', function () {
        var maxPriceFac = 9999999999;
        var minPriceFac = 0;
        var pulBelligi = 'TMM (Köne)';
        var katalogHaysy = {};
        return {
            katalogYatturmak: function (jogapKatalog) {
                katalogHaysy = jogapKatalog;
            },
            pulYatturmak: function (jogapPul) {
                pulBelligi = jogapPul;
            },
            maxPriceYatturmak: function (jogapKatalog) {
                maxPriceFac = jogapKatalog;
            },
            minPriceYatturmak: function (jogapKatalog) {
                minPriceFac = jogapKatalog;
            },
            KatalogJogap: function () {
                return katalogHaysy;
            },
            PulJogap: function () {
                return pulBelligi;
            },
            maxPriceFacJogap: function () {
                return maxPriceFac;
            },
            minPriceFacJogap: function () {
                return minPriceFac;
            }
        }
    })

    .controller('filterCtrl', ['$scope', '$stateParams', '$http', '$resource','facAutoMark', 'facAutoModel', 'welayatFilter', 'katalogFilter', 'facHaysyBazadanZagruzkaEtmeli','globalPeremenFac','ertdayBD', function ($scope, $stateParams, $http, $resource, facAutoMark, facAutoModel, welayatFilter, katalogFilter, facHaysyBazadanZagruzkaEtmeli, globalPeremenFac, ertdayBD) {

        //Dili
        $scope.diliTmRu = globalPeremenFac.getKatDiliTmRu();

        //KATALOGLAR
        $scope.katalog = [{wariant: "Transport",wariantRU: "Транспорт", value: "Transport", surat: "1transport"},
            {wariant: "Emlak",wariantRU: "Недвижимость", value: "Emlak", surat: "1emlak"},
            {wariant: "Iş",wariantRU: "Работа", value: "Iş", surat: "1is"},
            {wariant: "Hyzmat",wariantRU: "Услуги", value: "Hyzmat", surat: "1hyzmat"},
            {wariant: "Öý-Hojalyk üçin", wariantRU: "Для Дома и Дачи", value: "Öý-Hojalyk üçin", surat: "1oyuç"},
            {wariant: "Harytlar", wariantRU: "Изделия", value: "Harytlar", surat: "1haryt"},
            {wariant: "Egin Eşikler we Bujiteria", wariantRU: "Одежды и Бижутерия", value: "Egin Eşikler we Bujiteria", surat: "1egin"},
            {wariant: "Tehnika", wariantRU: "Техника", value: "Tehnika", surat: "1tehnika"},
            {wariant: "Maldarçylyk we Bagbançylyk", wariantRU: "Животноводство и Садовничество", value: "Maldarçylyk we Bagbançylyk", surat: "1maldar"},
            {wariant: "Güýmenje we Dynç Alyş", wariantRU: "Хобби и Отдых", value: "Güýmenje we Dynç Alyş", surat: "1hobbi"}];
        {
            $scope.kat_transport = [{wariant: "Awtoulaglar", wariantRU: "Автомобили", surat: "2transportawt"},
                {wariant: "Matorlar we Mototehnikalar", wariantRU: "Мотоциклы и Мототехника", surat: "2transportmot"},
                {wariant: "Gruzowikler we Spestehnikalar", wariantRU: "Грузовики и Спецтехника", surat: "2transportgru"},
                {wariant: "Suw Transportlary", wariantRU: "Водный Транспорт", surat: "2transportsuw"},
                {wariant: "Zapçastlar we Bezegler", wariantRU: "Запчасти и Аксессуары", surat: "2transportzap"}];
            {
                $scope.kat_tra_awtoulag = [{wariant: "Sürülen", wariantRU: "С пробегом"},
                    {wariant: "Täze", wariantRU: "Новый"}];

                $scope.kat_tra_mator = [{wariant: "Kwadrotsikl", wariantRU: "Квадроциклы"},
                    {wariant: "Maped we Skuter", wariantRU: "Мопеды и Скутеры"},
                    {wariant: "Matorlar", wariantRU: "Мотоциклы"},
                    {wariant: "Murawey", wariantRU: "Муравей"}];

                $scope.kat_tra_gruzowik = [{wariant: "Awtobus", wariantRU: "Автобусы"},
                    {wariant: "Kran", wariantRU: "Краны"},
                    {wariant: "Kamaz", wariantRU: "Камаз"},
                    {wariant: "Buldozer", wariantRU: "Бульдозеры"},
                    {wariant: "Gruzowik", wariantRU: "Грузовики"},
                    {wariant: "Komunalny Tehnika", wariantRU: "Коммунальная Техника"},
                    {wariant: "Yeňil transport", wariantRU: "Лёгкий Транспорт"},
                    {wariant: "Ýük ýükleýji maşynlar", wariantRU: "Погрузчики"},
                    {wariant: "Teleşge", wariantRU: "Прицепы"},
                    {wariant: "Traktor", wariantRU: "Трактор"},
                    {wariant: "Oba-Hojalyk tehnikasy", wariantRU: "Сельхозтехника"},
                    {wariant: "Gurluşuk tehnikasy", wariantRU: "Строительная Техника"},
                    {wariant: "Tirkeg Çekijiler", wariantRU: "Тягачи"},
                    {wariant: "Ekskawator", valwariantRUue: "Экскаваторы"}];

                $scope.kat_tra_suw = [{wariant: "Kürekli gaýyk", wariantRU: "Каяки и Каноэ"},
                    {wariant: "Gidrotsikl", wariantRU: "Гидроциклы"},
                    {wariant: "Kater we Ýahta", wariantRU: "Катера и Яхты"},
                    {wariant: "Matorly Lodka/Gaýyk", wariantRU: "Моторные Лодки"},
                    {wariant: "Çişirilýän Lodka/Gaýyk", wariantRU: "Надувные Лодки"}];

                $scope.kat_tra_zapcast = [{wariant: "Zapçastlar", wariantRU: "Запчасти"},
                    {wariant: "Bezegler", wariantRU: "Аксессуары"},
                    {wariant: "GPS-nawigator/Ugrukdurujy", wariantRU: "GPS-Навигаторы"},
                    {wariant: "Ýag we Himiýa", wariantRU: "Масло и Автохимия"},
                    {wariant: "Bagajnik we Kürçek", wariantRU: "Багажники и Фаркопы"},
                    {wariant: "Audio we Wideotehnika", wariantRU: "Аудио- и Видеотехника"},
                    {wariant: "Instrumentlar", wariantRU: "Инструменты"},
                    {wariant: "Teleşga", wariantRU: "Прицепы"},
                    {wariant: "Ogurluga garşy abzal", wariantRU: "Противоугонные Устройства"},
                    {wariant: "Týuning/Özgerdiş", wariantRU: "Тюнинг"},
                    {wariant: "Tekerler we Diskler", wariantRU: "Шины, Диски и Колёса"},
                    {wariant: "Şlem, Aýakgap we egin eşikler", wariantRU: "Экипировка"}];
                {
                    $scope.kat_tra_zap_zapcast = [{wariant: "Maşynlar üçin", wariantRU: "Для Автомобилей"},
                        {wariant: "Matorlar üçin", wariantRU: "Для Мототехники"},
                        {wariant: "Ýük maşynlary üçin", wariantRU: "Для Спецтехники"},
                        {wariant: "Suw ulaglary üçin", wariantRU: "Для Водного Транспорта"}];

                    $scope.kat_tra_zap_teker = [{wariant: "Şina we Teker", wariantRU: "Шины и Колёса"},
                        {wariant: "Motor Tekerleri/Şinalary", wariantRU: "Мотошины"},
                        {wariant: "Diskler", wariantRU: "Диски"},
                        {wariant: "Kalpaklar", wariantRU: "Колпаки"}];
                }
            }
            $scope.kat_emlak = [{wariant: "Kwartira", wariantRU: "Квартиры", surat: "2emlkwar"},
                {wariant: "Öý we Daça", wariantRU: "Дома, Дачи, Коттеджи", surat: "2emldaça"},
                {wariant: "Mellek", wariantRU: "Земельные Участки", surat: "2emlmel"},
                {wariant: "Garaž we Maşyn goýara ýer", wariantRU: "Гаражи и Машиноместа", surat: "2emlgaraz"},
                {wariant: "Täjirçilik emlägi", wariantRU: "Коммерческая Недвижимость", surat: "2emltajir"}];
            {
                $scope.kat_eml_wse = [{wariant: "Satlyk", wariantRU: "Продам"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму"}];
                {
                    $scope.kat_eml_sat_kwar = [{wariant: "Gurulan", wariantRU: "Строенный"},
                        {wariant: "Indi gurlulmaly", wariantRU: "Новостройка"}];

                    $scope.kat_eml_hak_kwar = [{wariant: "Uzak wagtlyk", wariantRU: "На Длительный Срок"},
                        {wariant: "Günlük", wariantRU: "Посуточно"}];

                    $scope.kat_eml_gar_wse = [{wariant: "Garaž", wariantRU: "Гараж"},
                        {wariant: "Maşyn goýara ýer", wariantRU: "Машиноместо"}];

                    $scope.kat_eml_taj_wse = [{wariant: "Myhmanhana", wariantRU: "Гостиница", surat: "3emltajirmyhman"},
                        {wariant: "Ofis", wariantRU: "Офисное Помещение", surat: "3emltajirofis"},
                        {wariant: "Naharhana", wariantRU: "Помещение Общественного Питания", surat: "3emltajirnahar"},
                        {wariant: "Önümçilik", wariantRU: "Производственное Помещение", surat: "3emltajironum"},
                        {wariant: "Sklad", wariantRU: "Складское Помещение", surat: "3emltajirsklad"},
                        {wariant: "Alyş satyş ýeri", wariantRU: "Торговое Помещение", surat: "3emltajiralys"}];
                }
            }
            $scope.kat_ish = [{wariant: "Iş gözleýän", wariantRU: "Ищу Работу", surat: "2isgozle"},
                {wariant: "Işgär Gözleýäň", wariantRU: "Ищу Работник", surat: "2isgarg"}];
            {
                $scope.kat_ish_gar_goz = [{wariant: "Internet we Telefon Ulgamy",wariantRU: "IT, Интернет, Телеком"},
                    {wariant: "Awto ulag telekeçiligi",wariantRU: "Автомобильный Бизнес"},
                    {wariant: "Bank",wariantRU: "Банки, Инвестиции"},
                    {wariant: "Administrator",wariantRU: "Административная Работа"},
                    {wariant: "Tejribesiz, Student",wariantRU: "Без Опыта, Студенты"},
                    {wariant: "Hasapçylyk, Maliýe",wariantRU: "Бухгалтерия, Финансы"},
                    {wariant: "Döwlet Işgäri",wariantRU: "Госслужба"},
                    {wariant: "Öý işgäri",wariantRU: "Домашний Персонал"},
                    {wariant: "Marketing, Reklama",wariantRU: "Маркетинг, Реклама, PR"},
                    {wariant: "Medisina",wariantRU: "Медицина, Фармацевтика"},
                    {wariant: "Ylym, Bilim",wariantRU: "Образование, Наука"},
                    {wariant: "Goragçy, Howupsuzlyk",wariantRU: "Охрана, Безопасность"},
                    {wariant: "Söwdegär",wariantRU: "Продажи"},
                    {wariant: "Önümçilik",wariantRU: "Производство, Сырьё, с/х"},
                    {wariant: "Ätiýaçlandyryş",wariantRU: "Страхование"},
                    {wariant: "Gurluşyk",wariantRU: "Строительство"},
                    {wariant: "Transport",wariantRU: "Транспорт, Логистика"},
                    {wariant: "Turizm",wariantRU: "Туризм, Ррестораны"},
                    {wariant: "Restoran",wariantRU: "Ресторанный"},
                    {wariant: "Dolandyryjy",wariantRU: "Управление Персоналом"},
                    {wariant: "Gözellik salony",wariantRU: "Салоны Красоты"},
                    {wariant: "Başga Görnüşi...",wariantRU: "Другие..."}];
            }
            $scope.kat_hyzmat = [{wariant: "Toý", wariantRU: "Свадьба", surat: "2hyzmattoy"},
                {wariant: "Maşyn/Ulaglar", wariantRU: "Ремонт Транспорта", surat: "2hyzmatmasyn"},
                {wariant: "Tikin Maşyn", wariantRU: "Ремонт Швейные Машины", surat: "2hyzmattikinmasyn"},
                {wariant: "Tehnika", wariantRU: "Ремонт Техники", surat: "2hyzmatteh"},
                {wariant: "Gurluşyk", wariantRU: "Ремонт и Строительство", surat: "2hyzmatgur"},
                {wariant: "Jaý/Öý Remont", wariantRU: "Ремонт Домов", surat: "2hyzmatjay"}];
            {
                $scope.kat_hyz_toy = [{wariant: "Wideoçy",wariantRU: "Видеосъёмка"},
                    {wariant: "Suratçy",wariantRU: "Фотосъёмка"},
                    {wariant: "Toý Mekany",wariantRU: "Ресторан для Свадьбы"},
                    {wariant: "Stol Bezegleri",wariantRU: "Украшение Столов"},
                    {wariant: "Öý/Jaý Bezegleri",wariantRU: "Украшение Домов"},
                    {wariant: "Fatalar we Kürteler",wariantRU: "Свадебное Платье we Курте"},
                    {wariant: "Kastýum we Milli eşikler",wariantRU: "Костюмы и ноц. Одежды"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];


                $scope.kat_hyz_masyn = [{wariant: "Remont",wariantRU: "Ремонт"},
                    {wariant: "Krasga",wariantRU: "Краска"},
                    {wariant: "Zapçastlaryny Çalyşmak",wariantRU: "Поменять Запчасти"},
                    {wariant: "Teker Bejermek",wariantRU: "Ремонт Шины"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];


                $scope.kat_hyz_tikin = [{wariant: "Remont",wariantRU: "Ремонт"},
                    {wariant: "Ýag Çalyşmak",wariantRU: "Поменять Масло"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];

                $scope.kat_hyz_tehnika = [{wariant: "Telefon Remont",wariantRU: "Телефон Ремонт"},
                    {wariant: "Kompýuter Remont",wariantRU: "Компьютер Ремонт"},
                    {wariant: "Holodilnik",wariantRU: "Холодильник Ремонт"},
                    {wariant: "Konsaner",wariantRU: "Кондиционеры Ремонт"},
                    {wariant: "Telewizor",wariantRU: "Телевизор Ремонт"},
                    {wariant: "Tehnika Gurnamak",wariantRU: "Установка Техники"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];

                $scope.kat_hyz_gurlusyk = [{wariant: "Uly plan",wariantRU: "Большой План"},
                    {wariant: "Kiçi plan",wariantRU: "Маленький План"},
                    {wariant: "Nawes",wariantRU: "Навес"},
                    {wariant: "Jaýyň üsti/Kryşasy",wariantRU: "Крыша"},
                    {wariant: "Patalok",wariantRU: "Паталок"},
                    {wariant: "Betonlamak (Öýüň töweregine)",wariantRU: "Вылить Бетон(?)"},
                    {wariant: "Howuz Guýmak",wariantRU: "Построить Водосборник"},
                    {wariant: "Guýy Gazmak",wariantRU: "Копать Колодец"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];

                $scope.kat_hyz_jay = [{wariant: "Komnat Remonty",wariantRU: "Ремонт Комнат"},
                    {wariant: "Kwartira Remonty",wariantRU: "Ремонт Квартир"},
                    {wariant: "Öý/Jaý Remonty",wariantRU: "Ремонт Домов"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];
            }
            $scope.kat_oyhojalyk = [{wariant: "Halylar we Keçeler", wariantRU: "Коверы и Кошмы", surat: "2oyuçhaly"},
                {wariant: "Mebeller", wariantRU: "Мебель и Интерьер", surat: "2oyuçmebel"},
                {wariant: "Posuda we Harytlar", wariantRU: "Посуда и Товары", surat: "2oyuçpasu"},
                {wariant: "Gurluşyk Harytlary", wariantRU: "Ремонт и Строительство", surat: "2oyuçgurl"}];
            {
                $scope.kat_oyh_haly = [{wariant: "Türkmen Haly", wariantRU: "Туркменские Коверы"},
                    {wariant: "Eýran Haly", wariantRU: "Иранские Коверы"},
                    {wariant: "Keçe", wariantRU: "Кошмы"},
                    {wariant: "Palas", wariantRU: "Палас"}];

                $scope.kat_oyh_mebel = [{wariant: "Kompýuter üçin Stolar we Otygyçlar", wariantRU: "Компьютерные Столы и Кресла"},
                    {wariant: "Krowat", wariantRU: "Кровати"},
                    {wariant: "Diwan", wariantRU: "Диваны"},
                    {wariant: "Otyrgyç", wariantRU: "Кресла"},
                    {wariant: "Kuhniýa Mebelleri", wariantRU: "Кухонные Гарнитуры"},
                    {wariant: "Çyra/ Ýagtyldyş Enjamlary", wariantRU: "Освещение"},
                    {wariant: "Tumboçka", wariantRU: "Подставки и Тумбы"},
                    {wariant: "Parta we Otugyç", wariantRU: "Столы и Стулья"},
                    {wariant: "Şkaf we Çekmeli Şkaf", wariantRU: "Шкафы и Комоды"},
                    {wariant: "Serwant", wariantRU: "Сервант"},
                    {wariant: "Sandyk", wariantRU: "Сундук"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_oyh_posuda = [{wariant: "Pasudalar/Gap Gaçlar", wariantRU: "Посуды"},
                    {wariant: "Kuhniýa üçin Harytlar", wariantRU: "Товары для Кухни"}];

                $scope.kat_oyh_gurlusyk = [{wariant: "Gapylar", wariantRU: "Двери"},
                    {wariant: "Instrumentlar/Abzallar", wariantRU: "Инструменты"},
                    {wariant: "Okno we Balkon", wariantRU: "Окна и Балконы"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
            $scope.kat_hususy = [{wariant: "Guýma", wariantRU: "Разливной", surat: "2harytguy"},
                {wariant: "Demirden", wariantRU: "Из Железа", surat: "2harytdem"},
                {wariant: "Agaçdan", wariantRU: "Из Дерево", surat: "2harytaga"},
                {wariant: "Gurluşyk üçin", wariantRU: "Для Строительства", surat: "2harytgurlus"},
                {wariant: "Oba Hojalyk üçin", wariantRU: "Бытовые", surat: "2harytoyuçi"}];
            {
                $scope.kat_hus_guyma = [{wariant: "Gazanlar", wariantRU: "Казаны"},
                    {wariant: "Çäýnekler", wariantRU: "Чайники"},
                    {wariant: "Käse", wariantRU: "Чашки"},
                    {wariant: "Küýze", wariantRU: "Ваза"},
                    {wariant: "Kafel", wariantRU: "Кафель"},
                    {wariant: "Çemçe", wariantRU: "Лошка"},
                    {wariant: "Okora/Tarelka", wariantRU: "Тарелка"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_hus_demirden = [{wariant: "Ojak", wariantRU: "Оджак"},
                    {wariant: "Zabor", wariantRU: "Забор"},
                    {wariant: "Peç", wariantRU: "Печь"},
                    {wariant: "Reşotka", wariantRU: "Решетка"},
                    {wariant: "Galtak", wariantRU: "Тачка"},
                    {wariant: "Nawes", wariantRU: "Навес"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_hus_agacdan = [{wariant: "Tapjan", wariantRU: "Тапчан"},
                    {wariant: "Şkaf", wariantRU: "Шкаф"},
                    {wariant: "Tumoçgalar", wariantRU: "Тумбочки"},
                    {wariant: "Sandyk", wariantRU: "Сундук"},
                    {wariant: "Çemçe", wariantRU: "Лошка"},
                    {wariant: "Gap Gaçlar", wariantRU: "Посуда"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_hus_gurlusyk = [{wariant: "Sement", wariantRU: "Семент"},
                    {wariant: "Şipr", wariantRU: "Шипр и Кровля"},
                    {wariant: "Agaç", wariantRU: "Дерево"},
                    {wariant: "Çagyl", wariantRU: "Чагыл"},
                    {wariant: "Kerpiç", wariantRU: "Керпич"},
                    {wariant: "Panel", wariantRU: "Панель"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_hus_obahojalyk = [{wariant: "Pil", wariantRU: "Пил"},
                    {wariant: "Orak", wariantRU: "Орак"},
                    {wariant: "Dyrmyk", wariantRU: "Дырмык"},
                    {wariant: "Lapata", wariantRU: "Лапата"},
                    {wariant: "Kätmen", wariantRU: "Катмен"},
                    {wariant: "Gyrkylyk", wariantRU: "Гыркылык"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
            $scope.kat_eginesik = [{wariant: "Gelin/Gyzlar üçin", wariantRU: "Для Невест/Девушек", surat: ""},
                {wariant: "Erkekler üçin", wariantRU: "Для Мужщин", surat: ""},
                {wariant: "Çagalar üçin", wariantRU: "Для Детей", surat: ""}];
            {
                $scope.kat_egi_gelin = [{wariant: "Ýakalar", wariantRU: "Яка"},
                    {wariant: "Köýnekler", wariantRU: "Рубашка"},
                    {wariant: "Žempirler", wariantRU: "Джемпер"},
                    {wariant: "Paltolar", wariantRU: "Пальто"},
                    {wariant: "Balaklar", wariantRU: "Балак"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки"},
                    {wariant: "Sagat", wariantRU: "Часы"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь"},
                    {wariant: "Ýüzük", wariantRU: "Кольцо"},
                    {wariant: "Bilezik", wariantRU: "Брослет"},
                    {wariant: "Gulak Halka", wariantRU: "Серьги"},
                    {wariant: "Monjuk", wariantRU: "Ожерелье"},
                    {wariant: "Zynjyr", wariantRU: "Цепи"},
                    {wariant: "Şaý Sepler", wariantRU: "Шай Сеп"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_egi_erkek = [{wariant: "Maýkalar", wariantRU: "Майки"},
                    {wariant: "Jalbarlar", wariantRU: "Брюки"},
                    {wariant: "Jynsylar", wariantRU: "Джинсы"},
                    {wariant: "Köýnekler", wariantRU: "Рубаха"},
                    {wariant: "Žempirler", wariantRU: "Джемпер"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки"},
                    {wariant: "Paltolar", wariantRU: "Пальто"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь"},
                    {wariant: "Sagat", wariantRU: "Часы"},
                    {wariant: "Zynjyr", wariantRU: "Цепи"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_egi_caga = [{wariant: "Egin Eşikler", wariantRU: "Одежды"},
                    {wariant: "Oýunjaklar", wariantRU: "Игрушка"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
            $scope.kat_tehnika = [{wariant: "Telefon", wariantRU: "Телефоны", surat: "2tehnikatel"},
                {wariant: "Notebook", wariantRU: "Ноутбуки", surat: "2tehnikatout"},
                {wariant: "Kompýuter we Printer", wariantRU: "Компьютеры и Принтеры", surat: "2tehnikakomppri"},
                {wariant: "Audio we Wideo", wariantRU: "Аудио и Видео", surat: "2tehnikaauwid"},
                {wariant: "Öý üçin", wariantRU: "Для Дома", surat: "2tehnikaoyuçin"},
                {wariant: "Aş hana üçin/Gaz jaý", wariantRU: "Для Кухни", surat: "2tehnikaasgazan"},
                {wariant: "Howa we Klimat Enjamlary", wariantRU: "Климатическое Оборудование", surat: "2tehnikahowa"},
                {wariant: "Fotoapparatla we Dürbiler", wariantRU: "Фотоаппараты и Телескопы", surat: "2tehnikafoto"},
                {wariant: "Kompýuter üçin Harytlar", wariantRU: "Товары для Компьютера", surat: "2tehnikakomuçin"}];
            {
                $scope.kat_teh_telefon = [{wariant: "Ulanylan", wariantRU: "Использованный"},
                    {wariant: "Täze", wariantRU: "Новый"},
                    {wariant: "Ratsiýa(Rasiýa)", wariantRU: "Рации"},
                    {wariant: "Domaşny/Öý Telefony", wariantRU: "Домашный Телефон"},
                    {wariant: "Bezegler", wariantRU: "Аксессуары"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_teh_notebook = [{wariant: "Ulanylan", wariantRU: "Использованный"},
                    {wariant: "Täze", wariantRU: "Новый"},
                    {wariant: "Monitor/Ekran", wariantRU: "Монитор"},
                    {wariant: "Batareýa", wariantRU: "Батарея"},
                    {wariant: "Zarýat Beriji", wariantRU: "Зарядник"}];

                $scope.kat_teh_kompyuter = [{wariant: "Monitor/Ekran", wariantRU: "Монитор"},
                    {wariant: "Korpusy", wariantRU: "Корпус"},
                    {wariant: "Zapçastlary...", wariantRU: "Запчасти..."},
                    {wariant: "Printer", wariantRU: "Принтер"}];

                $scope.kat_teh_audio = [{wariant: "MP3 pleer", wariantRU: "MP3-плееры"},
                    {wariant: "Kolonkalar we Akustika", wariantRU: "Колонки и Акустика"},
                    {wariant: "DVD, Wideo we Blu-ray Okaýjylar", wariantRU: "DVD, Видео и Blu-ray Плееры"},
                    {wariant: "Wideo Kamera", wariantRU: "Видеокамеры"},
                    {wariant: "Kabeller we Adapterlar", wariantRU: "Кабели и Адаптеры"},
                    {wariant: "Mikrafon", wariantRU: "Микрофоны"},
                    {wariant: "Muzykalny Sentr, Magnitafon", wariantRU: "Музыкальные Центры, Магнитолы"},
                    {wariant: "Nauşnikler", wariantRU: "Наушники"}];

                $scope.kat_teh_oy = [{wariant: "Pylesos", wariantRU: "Пылесосы"},
                    {wariant: "Kir maşyn", wariantRU: "Стиральные Машины"},
                    {wariant: "Ütük", wariantRU: "Утюги"},
                    {wariant: "Tikin maşyn", wariantRU: "Швейные Машины"}];

                $scope.kat_teh_ashana = [{wariant: "Mikrawalnowka", wariantRU: "Микроволновые Печи"},
                    {wariant: "Plita", wariantRU: "Плита"},
                    {wariant: "Haladilnik we Doňduryjy", wariantRU: "Холодильники и Морозильные Камеры"},
                    {wariant: "Mikser", wariantRU: "Миксер"},
                    {wariant: "Gap gaç ýuwujy maşyn", wariantRU: "Посудомоечные Машины"},
                    {wariant: "Ownuk uşak tehnikalar", wariantRU: "Мелкая Кухонная Техника"}];

                $scope.kat_teh_howa = [{wariant: "Wentilýator", wariantRU: "Вентиляторы"},
                    {wariant: "Kandisoner", wariantRU: "Кондиционеры"},
                    {wariant: "Ýyladyjy", wariantRU: "Обогреватели"},
                    {wariant: "Howa Arassalaýjy", wariantRU: "Очистители Воздуха"},
                    {wariant: "Termometr", wariantRU: "Термометры и Метеостанции"}];

                $scope.kat_teh_foto = [{wariant: "Plýonkaly Fotoapparatla", wariantRU: "Плёночные Фотоаппараты"},
                    {wariant: "Sifrawoý Fotoapparatla", wariantRU: "Цифравые Фотоаппараты"},
                    {wariant: "Profesionalnyý Fotoapparatla", wariantRU: "Профециональные Фотоаппараты"},
                    {wariant: "Obýektiwler", wariantRU: "Объективы"},
                    {wariant: "Dürbuler we Teleskoplar", wariantRU: "Бинокли и Телескопы"},
                    {wariant: "Dürli Enjamlar", wariantRU: "Оборудование и Аксессуары"}];

                $scope.kat_teh_kompyuterharytlar = [{wariant: "Web-Kamera", wariantRU: "Веб-камеры"},
                    {wariant: "Josýstik we Rol", wariantRU: "Джойстики и Рули"},
                    {wariant: "Klawiatura we Myşka/Syçanjyk", wariantRU: "Клавиатуры и Мыши"},
                    {wariant: "Internet üçin", wariantRU: "Сетевое оборудование"},
                    {wariant: "Žoski disler we Fleşka", wariantRU: "Жёсткие Диски и Флэшки"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
            $scope.kat_maldar = [{wariant: "Bag-Bakja", wariantRU: "Бахча", surat: "2maldarbag"},
                {wariant: "Nahallar we Şitiller", wariantRU: "Саженец и Рассада", surat: "2maldarsitil"},
                {wariant: "Iri Haýwanlar", wariantRU: "Большие Животные", surat: "2maldariri"},
                {wariant: "Uşak Haýwanlar", wariantRU: "Маленький Животные", surat: "2maldarusak"}];
            {
                $scope.kat_mal_bag = [{wariant: "Üzüm", wariantRU: "Виноград"},
                    {wariant: "Alma", wariantRU: "Яблоко"},
                    {wariant: "Erik", wariantRU: "Абрикос"},
                    {wariant: "Almyrt", wariantRU: "Груша"},
                    {wariant: "Şetdaly", wariantRU: "Персик"},
                    {wariant: "Limon", wariantRU: "Лимон"},
                    {wariant: "Pamidor", wariantRU: "Памидор"},
                    {wariant: "Hyýar", wariantRU: "Огурец"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_mal_nahal = [{wariant: "Ýolka", wariantRU: "Ёлка"},
                    {wariant: "Arça", wariantRU: "Арча"},
                    {wariant: "Şitiller", wariantRU: "Рассады"},
                    {wariant: "Baglar", wariantRU: "Сады"},
                    {wariant: "Güller", wariantRU: "Цветы"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_mal_irihaywan = [{wariant: "Sygyr", wariantRU: "Корова"},
                    {wariant: "Öküz", wariantRU: "Бык"},
                    {wariant: "Göle", wariantRU: "Теленок"},
                    {wariant: "At", wariantRU: "Конь"},
                    {wariant: "Düýe", wariantRU: "Верблюд"},
                    {wariant: "Köşek", wariantRU: "Верблюжонок"}];

                $scope.kat_mal_usakhaywan = [{wariant: "Goýun", wariantRU: "Баран"},
                    {wariant: "Geçi", wariantRU: "Козел"},
                    {wariant: "Towuk", wariantRU: "Курица"},
                    {wariant: "Jüýje", wariantRU: "Цыпленок"},
                    {wariant: "Towşan", wariantRU: "Кролик"},
                    {wariant: "Induk", wariantRU: "Индюк"},
                    {wariant: "Gaz", wariantRU: "Гусь"},
                    {wariant: "It", wariantRU: "Собака"},
                    {wariant: "Kepderi", wariantRU: "Голубь"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
            $scope.kat_guymenje = [{wariant: "Welosiped", wariantRU: "Велосипеды", surat: "2hobbiwel"},
                {wariant: "Bilet we Dynç Alyş", wariantRU: "Билеты и Путешествия", surat: "2hobbipute"},
                {wariant: "Muzikantlar üçin", wariantRU: "Музыкальные Инструменты", surat: "2hobbimuz"},
                {wariant: "Sport", wariantRU: "Спорт и Отдых", surat: "2hobbispo"},
                {wariant: "Oýunlar we Programmalar", wariantRU: "Игры и Программы", surat: "2hobbikon"}];
            {
                $scope.kat_guy_wel = [{wariant: "Baýyrlyk üçin", wariantRU: "Горные"},
                    {wariant: "Ýol üçin", wariantRU: "Дорожные"},
                    {wariant: "Çagalar üçin", wariantRU: "Детские"},
                    {wariant: "Zapjastlar we Bezegler", wariantRU: "Запчасти и Аксессуары"}];

                $scope.kat_guy_bil = [{wariant: "Daşary Ýurt üçin", wariantRU: "Путешествия"},
                    {wariant: "Sirk üçin", wariantRU: "Цирк"},
                    {wariant: "Konsert üçin", wariantRU: "Концерты"},
                    {wariant: "Teatr we Kino üçin", wariantRU: "Театр и Кино"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_guy_muz = [{wariant: "Gitara", wariantRU: "Гитара"},
                    {wariant: "Dutar", wariantRU: "Дутар"},
                    {wariant: "Gyjak", wariantRU: "Гыджак"},
                    {wariant: "Deprek", wariantRU: "Барабан и Ударные"},
                    {wariant: "Tüýdik", wariantRU: "Духовые"},
                    {wariant: "Pionina", wariantRU: "Пианино и Другие Клавишные"},
                    {wariant: "Akardion", wariantRU: "Аккордеоны"},
                    {wariant: "Skripka", wariantRU: "Скрипки и Другие Смычковые"},
                    {wariant: "Studia we Konsert üçin", wariantRU: "Для Студии и Концертов"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_guy_sport = [{wariant: "Tennis üçin", wariantRU: "Теннис"},
                    {wariant: "Boks üçin", wariantRU: "Бокс"},
                    {wariant: "Trenirowka üçin", wariantRU: "Фитнес и Тренажёры"},
                    {wariant: "Skeýbordlar we Tekerçekler", wariantRU: "Ролики и Скейтбординг"},
                    {wariant: "Stol oýunlary", wariantRU: "Настольные Игры"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_guy_oyun = [{wariant: "PlayStation", wariantRU: "PlayStation"},
                    {wariant: "PlayStation üçin oýunlar", wariantRU: "Игры для PlayStation"},
                    {wariant: "Kompýuter Oýunlary", wariantRU: "Компьютерные Игры"},
                    {wariant: "Programmalar", wariantRU: "Программы"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
        }

        //OZ GOSANLAM
        $scope.kuzowa_gornusi = [{wariant: "Sedan", wariantRU: "Седан", surat: "Sedan"},
            {wariant: "Heçbek", wariantRU: "Хетчбэк", surat: "Heçbek"},
            {wariant: "Uniwersal", wariantRU: "Универсал", surat: "Uniwersal"},
            {wariant: "JEEP/ Wnedarožnik", wariantRU: "Внедорожник", surat: "JEEP"},
            {wariant: "Kabriolet", wariantRU: "Кабриолет", surat: "Kabriolet"},
            {wariant: "Kupe", wariantRU: "Купе", surat: "Kupe"},
            {wariant: "Limuzin", wariantRU: "Лимузин", surat: "Limuzin"},
            {wariant: "Miniwen", wariantRU: "Минивэн", surat: "Miniwen"},
            {wariant: "Pikap", wariantRU: "Пикап", surat: "Pikap"},
            {wariant: "Furgon", wariantRU: "Фургон", surat: "Furgon"},
            {wariant: "Mikroawtobus", wariantRU: "Микроавтобус", surat: "Mikroawtobus"}];
        //WELAYAT ETRAP DAYHAN
        $scope.welayatlar = [{wariant: "Tutuş", wariantRU: "Все"},
            {wariant: "Aşgabat", wariantRU: "Ашхабад"},
            {wariant: "Ahal", wariantRU: "Ахал"},
            {wariant: "Mary", wariantRU: "Мары"},
            {wariant: "Lebap", wariantRU: "Лебап"},
            {wariant: "Daşoguz", wariantRU: "Дашогуз"},
            {wariant: "Balkan", wariantRU: "Балкан"}];
        $scope.etraplar = ertdayBD.ugratertaplar();
        $scope.dayhan = ertdayBD.ugratdayhanlar();
        if(!$scope.etraplar) {
            $http.get("http://a0109349.xsph.ru/gaytaretraplar").then(function (newItem) {
                console.log('Etraplar45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.etraplar = newItem.data;
                ertdayBD.yattutertaplar(newItem.data)
            })
        }
        if(!$scope.dayhan) {
            $http.get("http://a0109349.xsph.ru/gaytardayhanlar").then(function (newItem) {
                console.log('Dayhanlae45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.dayhan = newItem.data;
                ertdayBD.yattutdayhanlar(newItem.data)
            })
        }

        //Welayatlar zatlar GORUNER GORUNMEZ ARASSA
        $scope.etrapGorunya = welayatFilter.SayladymOblastJogap().etrapGorunya;
        $scope.dayhanGorunya = welayatFilter.SayladymOblastJogap().dayhanGorunya;
        $scope.jogapWelayat = function (j) {
            $scope.dayhanGorunya = false;
            $scope.etrapGorunya = true;
            if(j==='Tutuş'){
                $scope.etrapGorunya = false;
                $scope.welatUgratmak = welayatFilter.welayatYatturmak(undefined);
            }else{
                $scope.welatUgratmak = welayatFilter.welayatYatturmak(j);
            }
            $scope.formFilter.etrap = '';
            welayatFilter.etrapYatturmak('');
            $scope.formFilter.dayh = '';
            welayatFilter.dayhanYatturmak(undefined);
        };
        $scope.jogapEtrap = function (j) {
            $scope.welatUgratmak = welayatFilter.etrapYatturmak(j);
            $scope.dayhanGorunya = true;
            $scope.formFilter.dayh = '';
            welayatFilter.dayhanYatturmak(undefined);
            if(j==='AŞGABAT'){
                $scope.dayhanGorunya = false;
            }
        };
        $scope.jogapDayhan = function (j) {
            $scope.welatUgratmak = welayatFilter.dayhanYatturmak(j);
        };

        //Marka Masyn. Model masyn
        $scope.markaBelledim = katalogFilter.KatalogJogap().markaBelledim;


        // $scope.formInfoKatalog.nameMasynUcin = undefined;
        // $scope.formInfoKatalog.tekerinBolumi = undefined;

        //Katalogy Uytgedende BEYLEKILERI bosataly
        $scope.katUra1Bosat = function () {
            $scope.formFilterKatalog.katUra2 = undefined;
            $scope.formFilterKatalog.katUra3 = undefined;
            $scope.formFilterKatalog.katUra4 = undefined;
            $scope.formFilterKatalog.nameMasynUcin = undefined;
            $scope.formFilterKatalog.tekerinBolumi = undefined;
        }
        $scope.katUra2Bosat = function () {
            $scope.formFilterKatalog.katUra3 = undefined;
            $scope.formFilterKatalog.katUra4 = undefined;
            $scope.formFilterKatalog.nameMasynUcin = undefined;
            $scope.formFilterKatalog.tekerinBolumi = undefined;
        }
        $scope.katUra3Bosat = function () {
            $scope.formFilterKatalog.katUra4 = undefined;
            $scope.formFilterKatalog.nameMasynUcin = undefined;
            $scope.formFilterKatalog.tekerinBolumi = undefined;
        }
        $scope.katUra4Bosat = function () {
        }

        $scope.markalar = facAutoMark.gaytarMarkaler().query();
        $scope.showSelectValue = function(mySelect) {
            mySelect = JSON.parse(mySelect);
            $scope.markaBelledim = true;//Son madelini gorekezya ng-show
            $scope.itemsResource = facAutoModel.gaytarModeller(mySelect);
            $scope.modeller = $scope.itemsResource.query();
        };
        //Awtamobil kakylan ya kykylmadyk
        $scope.surulenTazeMi = undefined;
        $scope.surulenTaze = function (jogap) {
            // jogap = JSON.parse(jogap);
            // $scope.formInfoKatalog.katUra3 = undefined;
            $scope.formFilterKatalog.nameMasynUcin = undefined;
            $scope.formFilterKatalog.tekerinBolumi = undefined;
            $scope.formFilterKatalog.katUra4 = undefined;
            if(jogap==='Sürülen'){
                $scope.surulenTazeMi = true;
            }else{
                $scope.surulenTazeMi = false;
            }
            // $scope.formFilterKatalog.katUra4 = undefined;
        };
        //Zapcastlar Masyn ucin mator
        $scope.masynUcinMi = undefined;
        $scope.masynUcin = function (jogap) {
            // alert(jogap);
            // $scope.formInfoKatalog.katUra4 = undefined;
            $scope.formFilterKatalog.tekerinBolumi = '';
            if(jogap==='Maşynlar üçin'){
                $scope.masynUcinMi = true;
            }else{
                $scope.masynUcinMi = false;
            }
        };
        //Diskler Gorunya
        $scope.dikler = undefined;
        $scope.tekerler = undefined;
        $scope.kalpak = undefined;
        //Matoruň Osi Merkezi
        $scope.OsBamyYok = undefined;
        $scope.OsBamy = function (jogap) {
            $scope.formFilterKatalog.katUra4 = undefined;
            $scope.formFilterKatalog.nameMasynUcin = undefined;
            if(jogap==='Motor Tekerleri/Şinalary'){
                $scope.OsBamyYok = true;
                $scope.tekerler = true;
                $scope.dikler = false;
                $scope.kalpak = false;
            }
            if(jogap==='Diskler'){
                $scope.dikler = true;
                $scope.OsBamyYok = false;
                $scope.tekerler = false;
                $scope.kalpak = false;
            }
            if(jogap==='Şina we Teker'){
                $scope.tekerler = true;
                $scope.dikler = false;
                $scope.OsBamyYok = false;
                $scope.kalpak = false;
            }
            if(jogap==='Kalpaklar'){
                $scope.kalpak = true;
                $scope.dikler = false;
                $scope.OsBamyYok = false;
                $scope.tekerler = false;
            }
            else{
            }
        };
        //Arassalamak ucin spros
        $scope.arassalamak = function () {
            welayatFilter.nameSayladymYatturmak('');
        };
        //Baga katalog saylanda beylekiler saylanan durmaz yaly
        $scope.sbrosWyboraKatUra1 = function () {
            $scope.formFilterKatalog.katUra2 = '';
            $scope.formFilterKatalog.katUra3 = undefined;
            $scope.formFilterKatalog.katUra4 = undefined;
        };
        $scope.sbrosWyboraKatUra2 = function () {
            $scope.formFilterKatalog.katUra3 = undefined;
            $scope.formFilterKatalog.katUra4 = undefined;
        };
        $scope.sbrosWyboraKatUra3 = function () {
            $scope.formFilterKatalog.katUra4 = '';
        };

        //Pul belligini uytgedenimizde
        $scope.pulBelligi = katalogFilter.PulJogap();
        // console.log('Saylanan pul:', katalogFilter.PulJogap())
        $scope.jogapPulBelligi = function (jog) {
            if(jog==='TMM (Köne)'){
                katalogFilter.pulYatturmak(jog);
            }
            if(jog==='TMT (Täze)'){
                katalogFilter.pulYatturmak(jog);
            }
            if(jog==='$'){
                katalogFilter.pulYatturmak(jog);
            }
        }

        //OK basanda Oblastlary we Katalog sohranit etya
        $scope.formFilterOK = function (jWel, jKat) {
            //Etrap we dayhan birlesigik gorunmelimi ya gorunmeli dal
            jWel.etrapGorunya = $scope.etrapGorunya;
            jWel.dayhanGorunya = $scope.dayhanGorunya;
            //Modelleri gorunmelimi yza gavdanda
            jKat.markaBelledim = $scope.markaBelledim;
            //Ulu Kici bahany ugratya
            // console.log('BAZADA BELLENEN KATALOG2:', jKat)
            katalogFilter.maxPriceYatturmak(jWel.bahasyCen);
            katalogFilter.minPriceYatturmak(jWel.bahasyDan);
            //Welayatlary we kataloglary sohranit etmeli tazeden girende sol dursuna durar yaly
            welayatFilter.nameSayladymYatturmak(jWel);
            katalogFilter.katalogYatturmak(jKat);
            //Haysy bazadan Skacat etmelisini biler yaly
            console.log('BAZADA BELLENEN KATALOG:', jKat)
            facHaysyBazadanZagruzkaEtmeli.haysyKatKabuletmak(jKat);

        };
        $scope.formFilter = welayatFilter.SayladymOblastJogap();
        $scope.formFilterKatalog = katalogFilter.KatalogJogap();


    }])

    .factory('facAutoMark', ['$resource', function ($resource) {
        var resulMark = $resource("http://api.auto.ria.com/categories/:categoryId/marks", {categoryId: "1"});
        // return $resource("http://api.auto.ria.com/categories/:categoryId/marks", {categoryId: "1"});
        return {
            gaytarMarkaler: function () {
                // return $resource("http://api.auto.ria.com/categories/:categoryId/marks", {categoryId: "1"});
                return resulMark;
            }
        }
    }])

    .factory('facAutoModel', ['$resource', function ($resource) {
        return {
            gaytarModeller: function(idMarka){
                return $resource("http://api.auto.ria.com/categories/:categoryId/marks/:markId/models", {
                    categoryId: "1",
                    markId: idMarka
                });
            }}
    }])

    .factory('facHaysyBazadanZagruzkaEtmeli', [function () {
        var umumyDB = '';
        var umumyDB2 = '';
        var umumyDB1Ura = '';
        var umumyDB2Ura = '';
        var umumyDB3Ura = '';
        return {
            haysyKatKabuletmak: function(j) {
                if(j.katUra1===undefined || j.katUra1===''){
                    console.log('Hic saylamansyn 1',j.katUra1);
                    umumyDB = '';
                }
                else{
                    if(j.katUra2===undefined || j.katUra2===''){
                        switch (j.katUra1) {
                            case 'Transport':
                                umumyDB = "tra";
                                break;
                            case 'Emlak':
                                umumyDB = "eml";
                                break;
                            case 'Iş':
                                umumyDB = "ish";
                                break;
                            case 'Hyzmat':
                                umumyDB = "hyz";
                                break;
                            case 'Öý-Hojalyk üçin':
                                umumyDB = "oyhoj";
                                break;
                            case 'Harytlar':
                                umumyDB = "haryt";
                                break;
                            case 'Egin Eşikler we Bujiteria':
                                umumyDB = "egin";
                                break;
                            case 'Tehnika':
                                umumyDB = "tehnika";
                                break;
                            case 'Maldarçylyk we Bagbançylyk':
                                umumyDB = "maldarbag";
                                break;
                            case 'Güýmenje we Dynç Alyş':
                                umumyDB = "guymen";
                                break;
                        }
                    }
                    else {
                        if(j.katUra3===undefined || j.katUra3===''){
                            switch (j.katUra2) {
                                case 'Awtoulaglar':
                                    umumyDB = "traawt";
                                    break;
                                case 'Matorlar we Mototehnikalar':
                                    umumyDB = "tramoto";
                                    break;
                                case 'Gruzowikler we Spestehnikalar':
                                    umumyDB = "tragruz";
                                    break;
                                case 'Suw Transportlary':
                                    umumyDB = "trasuw";
                                    break;
                                case 'Zapçastlar we Bezegler':
                                    umumyDB = "trazapcast";
                                    break;

                                case 'Kwartira':
                                    umumyDB = "emlkwartira";
                                    break;
                                case 'Öý we Daça':
                                    umumyDB = "emloydac";
                                    break;
                                case 'Mellek':
                                    umumyDB = "emlmellek";
                                    break;
                                case 'Garaž we Maşyn goýara ýer':
                                    umumyDB = "emlgaraz";
                                    break;
                                case 'Täjirçilik emlägi':
                                    umumyDB = "emltajir";
                                    break;
                                case 'Iş gözleýän':
                                    umumyDB = "ishishgoz";
                                    break;
                                case 'Işgär Gözleýäň':
                                    umumyDB = "ishishgargoz";
                                    break;

                                case 'Toý':
                                    umumyDB = "hyztoy";
                                    break;
                                case 'Maşyn/Ulaglar':
                                    umumyDB = "hyzmasyn";
                                    break;
                                case 'Tikin Maşyn':
                                    umumyDB = "hyztikin";
                                    break;
                                case 'Tehnika':
                                    umumyDB = "hyztehnika";
                                    break;
                                case 'Gurluşyk':
                                    umumyDB = "hyzgurlus";
                                    break;
                                case 'Jaý/Öý Remont':
                                    umumyDB = "hyzjay";
                                    break;

                                case 'Halylar we Keçeler':
                                    umumyDB = "oyhojhaly";
                                    break;
                                case 'Mebeller':
                                    umumyDB = "oyhojmellek";
                                    break;
                                case 'Posuda we Harytlar':
                                    umumyDB = "oyhojposuda";
                                    break;
                                case 'Gurluşyk Harytlary':
                                    umumyDB = "oyhojgurlus";
                                    break;

                                case 'Guýma':
                                    umumyDB = "harytguyma";
                                    break;
                                case 'Demirden':
                                    umumyDB = "harytdemir";
                                    break;
                                case 'Agaçdan':
                                    umumyDB = "harytagac";
                                    break;
                                case 'Gurluşyk üçin':
                                    umumyDB = "harytgurlus";
                                    break;
                                case 'Oba Hojalyk üçin':
                                    umumyDB = "harytobahoj";
                                    break;

                                case 'Gelin/Gyzlar üçin':
                                    umumyDB = "egingelin";
                                    break;
                                case 'Erkekler üçin':
                                    umumyDB = "eginerkek";
                                    break;
                                case 'Çagalar üçin':
                                    umumyDB = "egincaga";
                                    break;

                                case 'Telefon':
                                    umumyDB = "tehnikatelefon";
                                    break;
                                case 'Notebook':
                                    umumyDB = "tehnikanote";
                                    break;
                                case 'Kompýuter we Printer':
                                    umumyDB = "tehnikakomp";
                                    break;
                                case 'Audio we Wideo':
                                    umumyDB = "tehnikaaudio";
                                    break;
                                case 'Öý üçin':
                                    umumyDB = "tehnikaoyu";
                                    break;
                                case 'Aş hana üçin/Gaz jaý':
                                    umumyDB = "tehnikaasu";
                                    break;
                                case 'Howa we Klimat Enjamlary':
                                    umumyDB = "tehnikahowa";
                                    break;
                                case 'Fotoapparatla we Dürbiler':
                                    umumyDB = "tehnikafoto";
                                    break;
                                case 'Kompýuter üçin Harytlar':
                                    umumyDB = "tehnikakompoyun";
                                    break;

                                case 'Bag-Bakja':
                                    umumyDB = "maldarbagbag";
                                    break;
                                case 'Nahallar we Şitiller':
                                    umumyDB = "maldarbagnahal";
                                    break;
                                case 'Iri Haýwanlar':
                                    umumyDB = "maldarbagiri";
                                    break;
                                case 'Uşak Haýwanlar':
                                    umumyDB = "maldarbagusak";
                                    break;

                                case 'Welosiped':
                                    umumyDB = "guymenwelos";
                                    break;
                                case 'Bilet we Dynç Alyş':
                                    umumyDB = "guymenbilet";
                                    break;
                                case 'Muzikantlar üçin':
                                    umumyDB = "guymenmuzik";
                                    break;
                                case 'Sport':
                                    umumyDB = "guymensport";
                                    break;
                                case 'Oýunlar we Programmalar':
                                    umumyDB = "guymenoyun";
                                    break;
                            }
                        }
                        else {
                            if(j.katUra4===undefined || j.katUra4===''){
                                switch (j.katUra2) {
                                    case 'Awtoulaglar':
                                        umumyDB = "traawt";
                                        break;
                                    case 'Matorlar we Mototehnikalar':
                                        umumyDB = "tramoto";
                                        break;
                                    case 'Gruzowikler we Spestehnikalar':
                                        umumyDB = "tragruz";
                                        break;
                                    case 'Suw Transportlary':
                                        umumyDB = "trasuw";
                                        break;
                                    case 'Zapçastlar we Bezegler':
                                        umumyDB = "trazapcast";
                                        break;

                                    case 'Kwartira':
                                        umumyDB = "emlkwartira";
                                        break;
                                    case 'Öý we Daça':
                                        umumyDB = "emloydac";
                                        break;
                                    case 'Mellek':
                                        umumyDB = "emlmellek";
                                        break;
                                    case 'Garaž we Maşyn goýara ýer':
                                        umumyDB = "emlgaraz";
                                        break;
                                    case 'Täjirçilik emlägi':
                                        umumyDB = "emltajir";
                                        break;
                                    case 'Iş gözleýän':
                                        umumyDB = "ishishgoz";
                                        break;
                                    case 'Işgär Gözleýäň':
                                        umumyDB = "ishishgargoz";
                                        break;

                                    case 'Toý':
                                        umumyDB = "hyztoy";
                                        break;
                                    case 'Maşyn/Ulaglar':
                                        umumyDB = "hyzmasyn";
                                        break;
                                    case 'Tikin Maşyn':
                                        umumyDB = "hyztikin";
                                        break;
                                    case 'Tehnika':
                                        umumyDB = "hyztehnika";
                                        break;
                                    case 'Gurluşyk':
                                        umumyDB = "hyzgurlus";
                                        break;
                                    case 'Jaý/Öý Remont':
                                        umumyDB = "hyzjay";
                                        break;

                                    case 'Halylar we Keçeler':
                                        umumyDB = "oyhojhaly";
                                        break;
                                    case 'Mebeller':
                                        umumyDB = "oyhojmellek";
                                        break;
                                    case 'Posuda we Harytlar':
                                        umumyDB = "oyhojposuda";
                                        break;
                                    case 'Gurluşyk Harytlary':
                                        umumyDB = "oyhojgurlus";
                                        break;

                                    case 'Guýma':
                                        umumyDB = "harytguyma";
                                        break;
                                    case 'Demirden':
                                        umumyDB = "harytdemir";
                                        break;
                                    case 'Agaçdan':
                                        umumyDB = "harytagac";
                                        break;
                                    case 'Gurluşyk üçin':
                                        umumyDB = "harytgurlus";
                                        break;
                                    case 'Oba Hojalyk üçin':
                                        umumyDB = "harytobahoj";
                                        break;

                                    case 'Gelin/Gyzlar üçin':
                                        umumyDB = "egingelin";
                                        break;
                                    case 'Erkekler üçin':
                                        umumyDB = "eginerkek";
                                        break;
                                    case 'Çagalar üçin':
                                        umumyDB = "egincaga";
                                        break;

                                    case 'Telefon':
                                        umumyDB = "tehnikatelefon";
                                        break;
                                    case 'Notebook':
                                        umumyDB = "tehnikanote";
                                        break;
                                    case 'Kompýuter we Printer':
                                        umumyDB = "tehnikakomp";
                                        break;
                                    case 'Audio we Wideo':
                                        umumyDB = "tehnikaaudio";
                                        break;
                                    case 'Öý üçin':
                                        umumyDB = "tehnikaoyu";
                                        break;
                                    case 'Aş hana üçin/Gaz jaý':
                                        umumyDB = "tehnikaasu";
                                        break;
                                    case 'Howa we Klimat Enjamlary':
                                        umumyDB = "tehnikahowa";
                                        break;
                                    case 'Fotoapparatla we Dürbiler':
                                        umumyDB = "tehnikafoto";
                                        break;
                                    case 'Kompýuter üçin Harytlar':
                                        umumyDB = "tehnikakompoyun";
                                        break;

                                    case 'Bag-Bakja':
                                        umumyDB = "maldarbagbag";
                                        break;
                                    case 'Nahallar we Şitiller':
                                        umumyDB = "maldarbagnahal";
                                        break;
                                    case 'Iri Haýwanlar':
                                        umumyDB = "maldarbagiri";
                                        break;
                                    case 'Uşak Haýwanlar':
                                        umumyDB = "maldarbagusak";
                                        break;

                                    case 'Welosiped':
                                        umumyDB = "guymenwelos";
                                        break;
                                    case 'Bilet we Dynç Alyş':
                                        umumyDB = "guymenbilet";
                                        break;
                                    case 'Muzikantlar üçin':
                                        umumyDB = "guymenmuzik";
                                        break;
                                    case 'Sport':
                                        umumyDB = "guymensport";
                                        break;
                                    case 'Oýunlar we Programmalar':
                                        umumyDB = "guymenoyun";
                                        break;
                                }
                                if(j.katUra2==='Kwartira') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB = "emlkwartirasatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB = "emlkwartirahakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB = "emlkwartirasatyna";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB = "emlkwartirahakynaal";
                                            break;
                                    }
                                }
                                if(j.katUra2==='Garaž we Maşyn goýara ýer') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB = "emlgarazsatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB = "emlgarazhakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB = "emlgarazsatynal";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB = "emlgarazhakynaal";
                                            break;
                                    }
                                }
                                if(j.katUra2==='Täjirçilik emlägi') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB = "emltajirsatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB = "emltajirhakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB = "emltajirsatynal";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB = "emltajirhakynaal";
                                            break;
                                    }
                                }
                            }
                            else {
                                if(j.katUra2==='Kwartira') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB = "emlkwartirasatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB = "emlkwartirahakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB = "emlkwartirasatyna";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB = "emlkwartirahakynaal";
                                            break;
                                    }
                                }
                                if(j.katUra2==='Garaž we Maşyn goýara ýer') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB = "emlgarazsatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB = "emlgarazhakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB = "emlgarazsatynal";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB = "emlgarazhakynaal";
                                            break;
                                    }
                                }
                                if(j.katUra2==='Täjirçilik emlägi') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB = "emltajirsatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB = "emltajirhakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB = "emltajirsatynal";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB = "emltajirhakynaal";
                                            break;
                                    }
                                }
                            }
                        }
                    }
                }
            },
            haysyKatUgratmak: function() {
                return umumyDB;
            },
            haysyKatKabuletmak2: function(j) {
                if(j.katUra1===undefined || j.katUra1==='' || j.katUra1===null){
                    umumyDB2 = '';
                }
                else{
                    if(j.katUra2===undefined || j.katUra2==='' || j.katUra2===null){
                        switch (j.katUra1) {
                            case 'Transport':
                                umumyDB2 = "tra";
                                break;
                            case 'Emlak':
                                umumyDB2 = "eml";
                                break;
                            case 'Iş':
                                umumyDB2 = "ish";
                                break;
                            case 'Hyzmat':
                                umumyDB2 = "hyz";
                                break;
                            case 'Öý-Hojalyk üçin':
                                umumyDB2 = "oyhoj";
                                break;
                            case 'Harytlar':
                                umumyDB2 = "haryt";
                                break;
                            case 'Egin Eşikler we Bujiteria':
                                umumyDB2 = "egin";
                                break;
                            case 'Tehnika':
                                umumyDB2 = "tehnika";
                                break;
                            case 'Maldarçylyk we Bagbançylyk':
                                umumyDB2 = "maldarbag";
                                break;
                            case 'Güýmenje we Dynç Alyş':
                                umumyDB2 = "guymen";
                                break;
                        }
                    }
                    else {
                        if(j.katUra3===undefined || j.katUra3==='' || j.katUra3===null){
                            switch (j.katUra2) {
                                case 'Awtoulaglar':
                                    umumyDB2 = "traawt";
                                    break;
                                case 'Matorlar we Mototehnikalar':
                                    umumyDB2 = "tramoto";
                                    break;
                                case 'Gruzowikler we Spestehnikalar':
                                    umumyDB2 = "tragruz";
                                    break;
                                case 'Suw Transportlary':
                                    umumyDB2 = "trasuw";
                                    break;
                                case 'Zapçastlar we Bezegler':
                                    umumyDB2 = "trazapcast";
                                    break;

                                case 'Kwartira':
                                    umumyDB2 = "emlkwartira";
                                    break;
                                case 'Öý we Daça':
                                    umumyDB2 = "emloydac";
                                    break;
                                case 'Mellek':
                                    umumyDB2 = "emlmellek";
                                    break;
                                case 'Garaž we Maşyn goýara ýer':
                                    umumyDB2 = "emlgaraz";
                                    break;
                                case 'Täjirçilik emlägi':
                                    umumyDB2 = "emltajir";
                                    break;
                                case 'Iş gözleýän':
                                    umumyDB2 = "ishishgoz";
                                    break;
                                case 'Işgär Gözleýäň':
                                    umumyDB2 = "ishishgargoz";
                                    break;

                                case 'Toý':
                                    umumyDB2 = "hyztoy";
                                    break;
                                case 'Maşyn/Ulaglar':
                                    umumyDB2 = "hyzmasyn";
                                    break;
                                case 'Tikin Maşyn':
                                    umumyDB2 = "hyztikin";
                                    break;
                                case 'Tehnika':
                                    umumyDB2 = "hyztehnika";
                                    break;
                                case 'Gurluşyk':
                                    umumyDB2 = "hyzgurlus";
                                    break;
                                case 'Jaý/Öý Remont':
                                    umumyDB2 = "hyzjay";
                                    break;

                                case 'Halylar we Keçeler':
                                    umumyDB2 = "oyhojhaly";
                                    break;
                                case 'Mebeller':
                                    umumyDB2 = "oyhojmellek";
                                    break;
                                case 'Posuda we Harytlar':
                                    umumyDB2 = "oyhojposuda";
                                    break;
                                case 'Gurluşyk Harytlary':
                                    umumyDB2 = "oyhojgurlus";
                                    break;

                                case 'Guýma':
                                    umumyDB2 = "harytguyma";
                                    break;
                                case 'Demirden':
                                    umumyDB2 = "harytdemir";
                                    break;
                                case 'Agaçdan':
                                    umumyDB2 = "harytagac";
                                    break;
                                case 'Gurluşyk üçin':
                                    umumyDB2 = "harytgurlus";
                                    break;
                                case 'Oba Hojalyk üçin':
                                    umumyDB2 = "harytobahoj";
                                    break;

                                case 'Gelin/Gyzlar üçin':
                                    umumyDB2 = "egingelin";
                                    break;
                                case 'Erkekler üçin':
                                    umumyDB2 = "eginerkek";
                                    break;
                                case 'Çagalar üçin':
                                    umumyDB2 = "egincaga";
                                    break;

                                case 'Telefon':
                                    umumyDB2 = "tehnikatelefon";
                                    break;
                                case 'Notebook':
                                    umumyDB2 = "tehnikanote";
                                    break;
                                case 'Kompýuter we Printer':
                                    umumyDB2 = "tehnikakomp";
                                    break;
                                case 'Audio we Wideo':
                                    umumyDB2 = "tehnikaaudio";
                                    break;
                                case 'Öý üçin':
                                    umumyDB2 = "tehnikaoyu";
                                    break;
                                case 'Aş hana üçin/Gaz jaý':
                                    umumyDB2 = "tehnikaasu";
                                    break;
                                case 'Howa we Klimat Enjamlary':
                                    umumyDB2 = "tehnikahowa";
                                    break;
                                case 'Fotoapparatla we Dürbiler':
                                    umumyDB2 = "tehnikafoto";
                                    break;
                                case 'Kompýuter üçin Harytlar':
                                    umumyDB2 = "tehnikakompoyun";
                                    break;

                                case 'Bag-Bakja':
                                    umumyDB2 = "maldarbagbag";
                                    break;
                                case 'Nahallar we Şitiller':
                                    umumyDB2 = "maldarbagnahal";
                                    break;
                                case 'Iri Haýwanlar':
                                    umumyDB2 = "maldarbagiri";
                                    break;
                                case 'Uşak Haýwanlar':
                                    umumyDB2 = "maldarbagusak";
                                    break;

                                case 'Welosiped':
                                    umumyDB2 = "guymenwelos";
                                    break;
                                case 'Bilet we Dynç Alyş':
                                    umumyDB2 = "guymenbilet";
                                    break;
                                case 'Muzikantlar üçin':
                                    umumyDB2 = "guymenmuzik";
                                    break;
                                case 'Sport':
                                    umumyDB2 = "guymensport";
                                    break;
                                case 'Oýunlar we Programmalar':
                                    umumyDB2 = "guymenoyun";
                                    break;
                            }
                        }
                        else {
                            if(j.katUra4===undefined || j.katUra4==='' || j.katUra4===null){
                                switch (j.katUra2) {
                                    case 'Awtoulaglar':
                                        umumyDB2 = "traawt";
                                        break;
                                    case 'Matorlar we Mototehnikalar':
                                        umumyDB2 = "tramoto";
                                        break;
                                    case 'Gruzowikler we Spestehnikalar':
                                        umumyDB2 = "tragruz";
                                        break;
                                    case 'Suw Transportlary':
                                        umumyDB2 = "trasuw";
                                        break;
                                    case 'Zapçastlar we Bezegler':
                                        umumyDB2 = "trazapcast";
                                        break;

                                    case 'Kwartira':
                                        umumyDB2 = "emlkwartira";
                                        break;
                                    case 'Öý we Daça':
                                        umumyDB2 = "emloydac";
                                        break;
                                    case 'Mellek':
                                        umumyDB2 = "emlmellek";
                                        break;
                                    case 'Garaž we Maşyn goýara ýer':
                                        umumyDB2 = "emlgaraz";
                                        break;
                                    case 'Täjirçilik emlägi':
                                        umumyDB2 = "emltajir";
                                        break;
                                    case 'Iş gözleýän':
                                        umumyDB2 = "ishishgoz";
                                        break;
                                    case 'Işgär Gözleýäň':
                                        umumyDB2 = "ishishgargoz";
                                        break;

                                    case 'Toý':
                                        umumyDB2 = "hyztoy";
                                        break;
                                    case 'Maşyn/Ulaglar':
                                        umumyDB2 = "hyzmasyn";
                                        break;
                                    case 'Tikin Maşyn':
                                        umumyDB2 = "hyztikin";
                                        break;
                                    case 'Tehnika':
                                        umumyDB2 = "hyztehnika";
                                        break;
                                    case 'Gurluşyk':
                                        umumyDB2 = "hyzgurlus";
                                        break;
                                    case 'Jaý/Öý Remont':
                                        umumyDB2 = "hyzjay";
                                        break;

                                    case 'Halylar we Keçeler':
                                        umumyDB2 = "oyhojhaly";
                                        break;
                                    case 'Mebeller':
                                        umumyDB2 = "oyhojmellek";
                                        break;
                                    case 'Posuda we Harytlar':
                                        umumyDB2 = "oyhojposuda";
                                        break;
                                    case 'Gurluşyk Harytlary':
                                        umumyDB2 = "oyhojgurlus";
                                        break;

                                    case 'Guýma':
                                        umumyDB2 = "harytguyma";
                                        break;
                                    case 'Demirden':
                                        umumyDB2 = "harytdemir";
                                        break;
                                    case 'Agaçdan':
                                        umumyDB2 = "harytagac";
                                        break;
                                    case 'Gurluşyk üçin':
                                        umumyDB2 = "harytgurlus";
                                        break;
                                    case 'Oba Hojalyk üçin':
                                        umumyDB2 = "harytobahoj";
                                        break;

                                    case 'Gelin/Gyzlar üçin':
                                        umumyDB2 = "egingelin";
                                        break;
                                    case 'Erkekler üçin':
                                        umumyDB2 = "eginerkek";
                                        break;
                                    case 'Çagalar üçin':
                                        umumyDB2 = "egincaga";
                                        break;

                                    case 'Telefon':
                                        umumyDB2 = "tehnikatelefon";
                                        break;
                                    case 'Notebook':
                                        umumyDB2 = "tehnikanote";
                                        break;
                                    case 'Kompýuter we Printer':
                                        umumyDB2 = "tehnikakomp";
                                        break;
                                    case 'Audio we Wideo':
                                        umumyDB2 = "tehnikaaudio";
                                        break;
                                    case 'Öý üçin':
                                        umumyDB2 = "tehnikaoyu";
                                        break;
                                    case 'Aş hana üçin/Gaz jaý':
                                        umumyDB2 = "tehnikaasu";
                                        break;
                                    case 'Howa we Klimat Enjamlary':
                                        umumyDB2 = "tehnikahowa";
                                        break;
                                    case 'Fotoapparatla we Dürbiler':
                                        umumyDB2 = "tehnikafoto";
                                        break;
                                    case 'Kompýuter üçin Harytlar':
                                        umumyDB2 = "tehnikakompoyun";
                                        break;

                                    case 'Bag-Bakja':
                                        umumyDB2 = "maldarbagbag";
                                        break;
                                    case 'Nahallar we Şitiller':
                                        umumyDB2 = "maldarbagnahal";
                                        break;
                                    case 'Iri Haýwanlar':
                                        umumyDB2 = "maldarbagiri";
                                        break;
                                    case 'Uşak Haýwanlar':
                                        umumyDB2 = "maldarbagusak";
                                        break;

                                    case 'Welosiped':
                                        umumyDB2 = "guymenwelos";
                                        break;
                                    case 'Bilet we Dynç Alyş':
                                        umumyDB2 = "guymenbilet";
                                        break;
                                    case 'Muzikantlar üçin':
                                        umumyDB2 = "guymenmuzik";
                                        break;
                                    case 'Sport':
                                        umumyDB2 = "guymensport";
                                        break;
                                    case 'Oýunlar we Programmalar':
                                        umumyDB2 = "guymenoyun";
                                        break;
                                }
                                if(j.katUra2==='Kwartira') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB2 = "emlkwartirasatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB2 = "emlkwartirahakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB2 = "emlkwartirasatyna";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB2 = "emlkwartirahakynaal";
                                            break;
                                    }
                                }
                                if(j.katUra2==='Garaž we Maşyn goýara ýer') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB2 = "emlgarazsatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB2 = "emlgarazhakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB2 = "emlgarazsatynal";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB2 = "emlgarazhakynaal";
                                            break;
                                    }
                                }
                                if(j.katUra2==='Täjirçilik emlägi') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB2 = "emltajirsatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB2 = "emltajirhakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB2 = "emltajirsatynal";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB2 = "emltajirhakynaal";
                                            break;
                                    }
                                }
                            }
                            else {
                                if(j.katUra2==='Kwartira') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB2 = "emlkwartirasatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB2 = "emlkwartirahakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB2 = "emlkwartirasatyna";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB2 = "emlkwartirahakynaal";
                                            break;
                                    }
                                }
                                if(j.katUra2==='Garaž we Maşyn goýara ýer') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB2 = "emlgarazsatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB2 = "emlgarazhakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB2 = "emlgarazsatynal";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB2 = "emlgarazhakynaal";
                                            break;
                                    }
                                }
                                if(j.katUra2==='Täjirçilik emlägi') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB2 = "emltajirsatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB2 = "emltajirhakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB2 = "emltajirsatynal";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB2 = "emltajirhakynaal";
                                            break;
                                    }
                                }
                            }
                        }
                    }
                }
            },
            haysyKatUgratmak2: function() {
                return umumyDB2;
            },

            haysyKatKabuletmak1Ura: function(j) {
                switch (j.katUra1) {
                    case 'Transport':
                        umumyDB1Ura = "tra";
                        break;
                    case 'Emlak':
                        umumyDB1Ura = "eml";
                        break;
                    case 'Iş':
                        umumyDB1Ura = "ish";
                        break;
                    case 'Hyzmat':
                        umumyDB1Ura = "hyz";
                        break;
                    case 'Öý-Hojalyk üçin':
                        umumyDB1Ura = "oyhoj";
                        break;
                    case 'Harytlar':
                        umumyDB1Ura = "haryt";
                        break;
                    case 'Egin Eşikler we Bujiteria':
                        umumyDB1Ura = "egin";
                        break;
                    case 'Tehnika':
                        umumyDB1Ura = "tehnika";
                        break;
                    case 'Maldarçylyk we Bagbançylyk':
                        umumyDB1Ura = "maldarbag";
                        break;
                    case 'Güýmenje we Dynç Alyş':
                        umumyDB1Ura = "guymen";
                        break;
                }
            },
            haysyKatKabuletmak2Ura: function(j) {
                        switch (j.katUra2) {
                                case 'Awtoulaglar':
                                    umumyDB2Ura = "traawt";
                                    break;
                                case 'Matorlar we Mototehnikalar':
                                    umumyDB2Ura = "tramoto";
                                    break;
                                case 'Gruzowikler we Spestehnikalar':
                                    umumyDB2Ura = "tragruz";
                                    break;
                                case 'Suw Transportlary':
                                    umumyDB2Ura = "trasuw";
                                    break;
                                case 'Zapçastlar we Bezegler':
                                    umumyDB2Ura = "trazapcast";
                                    break;

                                case 'Kwartira':
                                    umumyDB2Ura = "emlkwartira";
                                    break;
                                case 'Öý we Daça':
                                    umumyDB2Ura = "emloydac";
                                    break;
                                case 'Mellek':
                                    umumyDB2Ura = "emlmellek";
                                    break;
                                case 'Garaž we Maşyn goýara ýer':
                                    umumyDB2Ura = "emlgaraz";
                                    break;
                                case 'Täjirçilik emlägi':
                                    umumyDB2Ura = "emltajir";
                                    break;
                                case 'Iş gözleýän':
                                    umumyDB2Ura = "ishishgoz";
                                    break;
                                case 'Işgär Gözleýäň':
                                    umumyDB2Ura = "ishishgargoz";
                                    break;

                                case 'Toý':
                                    umumyDB2Ura = "hyztoy";
                                    break;
                                case 'Maşyn/Ulaglar':
                                    umumyDB2Ura = "hyzmasyn";
                                    break;
                                case 'Tikin Maşyn':
                                    umumyDB2Ura = "hyztikin";
                                    break;
                                case 'Tehnika':
                                    umumyDB2Ura = "hyztehnika";
                                    break;
                                case 'Gurluşyk':
                                    umumyDB2Ura = "hyzgurlus";
                                    break;
                                case 'Jaý/Öý Remont':
                                    umumyDB2Ura = "hyzjay";
                                    break;

                                case 'Halylar we Keçeler':
                                    umumyDB2Ura = "oyhojhaly";
                                    break;
                                case 'Mebeller':
                                    umumyDB2Ura = "oyhojmellek";
                                    break;
                                case 'Posuda we Harytlar':
                                    umumyDB2Ura = "oyhojposuda";
                                    break;
                                case 'Gurluşyk Harytlary':
                                    umumyDB2Ura = "oyhojgurlus";
                                    break;

                                case 'Guýma':
                                    umumyDB2Ura = "harytguyma";
                                    break;
                                case 'Demirden':
                                    umumyDB2Ura = "harytdemir";
                                    break;
                                case 'Agaçdan':
                                    umumyDB2Ura = "harytagac";
                                    break;
                                case 'Gurluşyk üçin':
                                    umumyDB2Ura = "harytgurlus";
                                    break;
                                case 'Oba Hojalyk üçin':
                                    umumyDB2Ura = "harytobahoj";
                                    break;

                                case 'Gelin/Gyzlar üçin':
                                    umumyDB2Ura = "egingelin";
                                    break;
                                case 'Erkekler üçin':
                                    umumyDB2Ura = "eginerkek";
                                    break;
                                case 'Çagalar üçin':
                                    umumyDB2Ura = "egincaga";
                                    break;

                                case 'Telefon':
                                    umumyDB2Ura = "tehnikatelefon";
                                    break;
                                case 'Notebook':
                                    umumyDB2Ura = "tehnikanote";
                                    break;
                                case 'Kompýuter we Printer':
                                    umumyDB2Ura = "tehnikakomp";
                                    break;
                                case 'Audio we Wideo':
                                    umumyDB2Ura = "tehnikaaudio";
                                    break;
                                case 'Öý üçin':
                                    umumyDB2Ura = "tehnikaoyu";
                                    break;
                                case 'Aş hana üçin/Gaz jaý':
                                    umumyDB2Ura = "tehnikaasu";
                                    break;
                                case 'Howa we Klimat Enjamlary':
                                    umumyDB2Ura = "tehnikahowa";
                                    break;
                                case 'Fotoapparatla we Dürbiler':
                                    umumyDB2Ura = "tehnikafoto";
                                    break;
                                case 'Kompýuter üçin Harytlar':
                                    umumyDB2Ura = "tehnikakompoyun";
                                    break;

                                case 'Bag-Bakja':
                                    umumyDB2Ura = "maldarbagbag";
                                    break;
                                case 'Nahallar we Şitiller':
                                    umumyDB2Ura = "maldarbagnahal";
                                    break;
                                case 'Iri Haýwanlar':
                                    umumyDB2Ura = "maldarbagiri";
                                    break;
                                case 'Uşak Haýwanlar':
                                    umumyDB2Ura = "maldarbagusak";
                                    break;

                                case 'Welosiped':
                                    umumyDB2Ura = "guymenwelos";
                                    break;
                                case 'Bilet we Dynç Alyş':
                                    umumyDB2Ura = "guymenbilet";
                                    break;
                                case 'Muzikantlar üçin':
                                    umumyDB2Ura = "guymenmuzik";
                                    break;
                                case 'Sport':
                                    umumyDB2Ura = "guymensport";
                                    break;
                                case 'Oýunlar we Programmalar':
                                    umumyDB2Ura = "guymenoyun";
                                    break;
                            }
            },
            haysyKatKabuletmak3Ura: function(j) {
                                if(j.katUra2==='Kwartira') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB3Ura = "emlkwartirasatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB3Ura = "emlkwartirahakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB3Ura = "emlkwartirasatyna";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB3Ura = "emlkwartirahakynaal";
                                            break;
                                    }
                                }
                                if(j.katUra2==='Garaž we Maşyn goýara ýer') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB3Ura = "emlgarazsatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB3Ura = "emlgarazhakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB3Ura = "emlgarazsatynal";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB3Ura = "emlgarazhakynaal";
                                            break;
                                    }
                                }
                                if(j.katUra2==='Täjirçilik emlägi') {
                                    switch (j.katUra3) {
                                        case 'Satlyk':
                                            umumyDB3Ura = "emltajirsatlyk";
                                            break;
                                        case 'Hakyna bermek':
                                            umumyDB3Ura = "emltajirhakyna";
                                            break;
                                        case 'Satyn aljak':
                                            umumyDB3Ura = "emltajirsatynal";
                                            break;
                                        case 'Hakyna tutjak':
                                            umumyDB3Ura = "emltajirhakynaal";
                                            break;
                                    }
                                }
            },
            haysyKatUgratmak1Ura: function() {
                return umumyDB1Ura;
            },
            haysyKatUgratmak2Ura: function() {
                return umumyDB2Ura;
            },
            haysyKatUgratmak3Ura: function() {
                return umumyDB3Ura;
            }
        }
    }])

    .directive('fileInput', function($parse){
        return{
            restrict : 'A',
            link: function(scope, elem, attrs){
                var belleFile = '';
                elem.bind('change', function(){
                    if(elem[0].files.length==0){
                        $parse(attrs.fileInput).assign(scope, belleFile);
                    }
                    if(elem[0].files.length!=0){
                        belleFile=elem[0].files;
                        $parse(attrs.fileInput).assign(scope, belleFile);
                    }
                    scope.$apply();
                });
            }
        }
    })

    .controller('gosmakCtrl', ['$scope', '$stateParams', '$http', '$resource','facAutoMark', 'facAutoModel','$timeout','globalPeremenFac', '$cookieStore','facHaysyBazadanZagruzkaEtmeli','ertdayBD','$ionicPopup','$location','$mdDialog', function ($scope, $stateParams, $http, $resource, facAutoMark, facAutoModel,$timeout,globalPeremenFac,$cookieStore,facHaysyBazadanZagruzkaEtmeli,ertdayBD,$ionicPopup,$location,$mdDialog) {

        //Dili
        $scope.diliTmRu = globalPeremenFac.getKatDiliTmRu();
        $scope.diliTmRuT = false;

        //SERVERE ugratmak
        $scope.formInfo = {};

        //SURAT GOSMAK
        //Suratlaň spisegi
        //Suratlar spisegi mahsimuma barsa knopkany gizlemeli
        $scope.suratsany = 0;

        $scope.formInfo.img1 = '';
        $scope.formInfo.img2 = '';
        $scope.formInfo.img3 = '';
        $scope.formInfo.img4 = '';
        $scope.formInfo.img5 = '';
        $scope.formInfo.img6 = '';
        $scope.formInfo.img7 = '';
        $scope.formInfo.img8 = '';
        $scope.formInfo.img9 = '';
        $scope.formInfo.img10 = '';

        /*SURAT YUKLE*/  /*SURAT YUKLE*/  /*SURAT YUKLE*/  /*SURAT YUKLE*/  /*SURAT YUKLE*/  /*SURAT YUKLE*/
        $scope.image = null;

        $scope.loadImage = function() {
            var options = {
                title: 'Выберите фотографию',
                buttonLabels: ['Галерея', 'Камера'],
                addCancelButtonWithLabel: 'Отмена',
                androidEnableCancelButton : true,
            };
            $cordovaActionSheet.show(options).then(function(btnIndex) {
                var type = null;
                if (btnIndex === 1) {
                    type = Camera.PictureSourceType.PHOTOLIBRARY;
                } else if (btnIndex === 2) {
                    type = Camera.PictureSourceType.CAMERA;
                }
                if (type !== null) {
                    $scope.selectPicture(type);
                }
            });
        };

        $scope.selectPicture = function(sourceType) {
            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: sourceType,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function(imagePath) {
                    // Grab the file name of the photo in the temporary directory
                    var currentName = imagePath.replace(/^.*[\\\/]/, '');

                    //Create a new name for the photo
                    var d = new Date(),
                        n = d.getTime(),
                        newFileName =  n + ".jpg";

                    // If you are trying to load image from the gallery on Android we need special treatment!
                    if ($cordovaDevice.getPlatform() == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
                        window.FilePath.resolveNativePath(imagePath, function(entry) {
                                window.resolveLocalFileSystemURL(entry, success, fail);
                                function fail(e) {
                                    console.error('Error: ', e);
                                }

                                function success(fileEntry) {
                                    var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
                                    // Only copy because of access rights
                                    $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success){
                                        $scope.image = newFileName;
                                    }, function(error){
                                        $scope.showAlert('Error', error.exception);
                                    });
                                };
                            }
                        );
                    } else {
                        var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                        // Move the file to permanent storage
                        $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function(success){
                            $scope.image = newFileName;
                        }, function(error){
                            $scope.showAlert('Error', error.exception);
                        });
                    }
                },
                function(err){
                    // Not always an error, maybe cancel was pressed...
                })
        };

        $scope.pathForImage = function(image) {
            if (image === null) {
                return '';
            } else {
                return cordova.file.dataDirectory + image;
            }
        };

        $scope.uploadImage = function() {
            // Destination URL
            var url = "http://a0109349.xsph.ru/surat";
            // File for Upload
            var targetPath = $scope.pathForImage($scope.image);
            // File name only
            var filename = $scope.image;
            var options = {
                fileKey: "file",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params : {'fileName': filename}
            };
            $cordovaFileTransfer.upload(url, targetPath, options).then(function(result) {
                $scope.showAlert('Ana Gosdym', 'Suratyn baza ugradyldy');
                // $scope.showAlert('6666', JSON.stringify(result.response));
                if($scope.formInfo.img1){
                    if($scope.formInfo.img2){
                        if($scope.formInfo.img3){
                            if($scope.formInfo.img4){
                                if($scope.formInfo.img5){
                                    if($scope.formInfo.img6){
                                        if($scope.formInfo.img7){
                                            if($scope.formInfo.img8){
                                                if($scope.formInfo.img9){
                                                    if($scope.formInfo.img10){

                                                    }else{
                                                        $scope.formInfo.img10 = result.response;
                                                        $scope.suratsany = $scope.suratsany+1
                                                        $scope.showAlert('10gos', 'Suratyn baza ugradyldy');
                                                    }
                                                }else{
                                                    $scope.formInfo.img9 = result.response;
                                                    $scope.suratsany = $scope.suratsany+1
                                                    $scope.showAlert('9gos', 'Suratyn baza ugradyldy');
                                                }
                                            }else{
                                                $scope.formInfo.img8 = result.response;
                                                $scope.suratsany = $scope.suratsany+1
                                                $scope.showAlert('8gos', 'Suratyn baza ugradyldy');
                                            }
                                        }else{
                                            $scope.formInfo.img7 = result.response;
                                            $scope.suratsany = $scope.suratsany+1
                                            $scope.showAlert('7gos', 'Suratyn baza ugradyldy');
                                        }
                                    }else{
                                        $scope.formInfo.img6 = result.response;
                                        $scope.suratsany = $scope.suratsany+1
                                        $scope.showAlert('6gos', 'Suratyn baza ugradyldy');
                                    }
                                }else{
                                    $scope.formInfo.img5 = result.response;
                                    $scope.suratsany = $scope.suratsany+1
                                    $scope.showAlert('5gos', 'Suratyn baza ugradyldy');
                                }
                            }else{
                                $scope.formInfo.img4 = result.response;
                                $scope.suratsany = $scope.suratsany+1
                                $scope.showAlert('4gos', 'Suratyn baza ugradyldy');
                            }
                        }else{
                            $scope.formInfo.img3 = result.response;
                            $scope.suratsany = $scope.suratsany+1
                            $scope.showAlert('3gos', 'Suratyn baza ugradyldy');
                        }
                    }else{
                        $scope.formInfo.img2 = result.response;
                        $scope.suratsany = $scope.suratsany+1
                        $scope.showAlert('2gos', 'Suratyn baza ugradyldy');
                    }
                }else{
                    $scope.formInfo.img1 = result.response;
                    $scope.suratsany = $scope.suratsany+1
                    $scope.showAlert('1gos', 'Suratyn baza ugradyldy');
                }
                $scope.image = null;
            });
        }

        $scope.deletImage = function (nomerImg) {
            var requestUrl = 'http://a0109349.xsph.ru/suratPoz/'+nomerImg;
            $http({method : 'POST', url: requestUrl});

            $scope.showAlert('Pozmana geldim', nomerImg);
            
            if($scope.formInfo.img1 === nomerImg){
                $scope.suratsany = $scope.suratsany-1
                $scope.formInfo.img1 = '';
                $scope.showAlert('1poz', 'Suratyn baza ugradyldy');
            }
            else if($scope.formInfo.img2 === nomerImg){
                $scope.suratsany = $scope.suratsany-1
                $scope.formInfo.img2 = '';
                $scope.showAlert('2poz', 'Suratyn baza ugradyldy');
            }
            else if($scope.formInfo.img3 === nomerImg){
                $scope.suratsany = $scope.suratsany-1
                $scope.formInfo.img3 = '';
                $scope.showAlert('3poz', 'Suratyn baza ugradyldy');
            }
            else if($scope.formInfo.img4 === nomerImg){
                $scope.suratsany = $scope.suratsany-1
                $scope.formInfo.img4 = '';
                $scope.showAlert('4poz', 'Suratyn baza ugradyldy');
            }
            else if($scope.formInfo.img5 === nomerImg){
                $scope.suratsany = $scope.suratsany-1
                $scope.formInfo.img5 = '';
                $scope.showAlert('5poz', 'Suratyn baza ugradyldy');
            }
            else if($scope.formInfo.img6 === nomerImg){
                $scope.suratsany = $scope.suratsany-1
                $scope.formInfo.img6 = '';
                $scope.showAlert('6poz', 'Suratyn baza ugradyldy');
            }
            else if($scope.formInfo.img7 === nomerImg){
                $scope.suratsany = $scope.suratsany-1
                $scope.formInfo.img7 = '';
                $scope.showAlert('7poz', 'Suratyn baza ugradyldy');
            }
            else if($scope.formInfo.img8 === nomerImg){
                $scope.suratsany = $scope.suratsany-1
                $scope.formInfo.img8 = '';
                $scope.showAlert('8poz', 'Suratyn baza ugradyldy');
            }
            else if($scope.formInfo.img9 === nomerImg){
                $scope.suratsany = $scope.suratsany-1
                $scope.formInfo.img9 = '';
                $scope.showAlert('9poz', 'Suratyn baza ugradyldy');
            }
            else if($scope.formInfo.img10 === nomerImg){
                $scope.suratsany = $scope.suratsany-1
                $scope.formInfo.img10 = '';
                $scope.showAlert('10poz', 'Suratyn baza ugradyldy');
            }
        };




        // $scope.modelName = facAutoModel.gaytarModeller().query();
        // $scope.modelName = $scope.iResource.query();

        //Katalogy Uytgedende BEYLEKILERI bosataly
        $scope.katUra1Bosat = function () {
            $scope.formInfoKatalog.katUra2 = undefined;
            $scope.formInfoKatalog.katUra3 = undefined;
            $scope.formInfoKatalog.katUra4 = undefined;
            $scope.formInfoKatalog.nameMasynUcin = undefined;
            $scope.formInfoKatalog.tekerinBolumi = undefined;
        }
        $scope.katUra2Bosat = function () {
            $scope.formInfoKatalog.katUra3 = '';
            $scope.formInfoKatalog.katUra4 = undefined;
            $scope.formInfoKatalog.nameMasynUcin = undefined;
            $scope.formInfoKatalog.tekerinBolumi = undefined;
        }
        $scope.katUra3Bosat = function () {
            $scope.formInfoKatalog.katUra4 = undefined;
            $scope.formInfoKatalog.nameMasynUcin = undefined;
            $scope.formInfoKatalog.tekerinBolumi = undefined;
        }
        $scope.katUra4Bosat = function () {
        }


        //Marka Masyn. Model masyn
        $scope.markaBelledim = false;
        // $scope.markalar = facAutoMark.query();
        $scope.markalar = facAutoMark.gaytarMarkaler().query();
        $scope.showSelectValue = function(mySelect) {
            mySelect = JSON.parse(mySelect);
            $scope.markaBelledim = true;//Son madelini gorekezya ng-show
            $scope.itemsResource = facAutoModel.gaytarModeller(mySelect);
            $scope.modeller = $scope.itemsResource.query();
            // console.log('ModName ', $scope.modeller.length);
            // console.log("Ine 2: "+ mySelect);
        };
        //Awtamobil kakylan ya kykylmadyk
        $scope.surulenTazeMi = undefined;
        $scope.surulenTaze = function (jogap) {
            // jogap = JSON.parse(jogap);
            $scope.formInfoKatalog.nameMasynUcin = undefined;
            $scope.formInfoKatalog.tekerinBolumi = undefined;
            $scope.formInfoKatalog.katUra4 = undefined;
            console.log('Surulenmay:', jogap)
            if(jogap==='Sürülen'){
                $scope.surulenTazeMi = true;
            }else{
                $scope.surulenTazeMi = false;
            }
        };
        //Zapcastlar Masyn ucin mator
        $scope.masynUcinMi = undefined;
        $scope.masynUcin = function (jogap) {
            // alert(jogap);
            // $scope.formInfoKatalog.katUra4 = undefined;
            $scope.formInfoKatalog.tekerinBolumi = undefined;
            if(jogap==='Maşynlar üçin'){
                $scope.masynUcinMi = true;
            }else{
                $scope.masynUcinMi = false;
            }
        };
        //Diskler Gorunya
        $scope.dikler = undefined;
        $scope.tekerler = undefined;
        $scope.kalpak = undefined;
        //Matoruň Osi Merkezi
        $scope.OsBamyYok = undefined;
        $scope.OsBamy = function (jogap) {
            // $scope.formInfoKatalog.katUra4 = undefined;
            $scope.formInfoKatalog.nameMasynUcin = undefined;
            if(jogap==='Motor Tekerleri/Şinalary'){
                $scope.OsBamyYok = true;
                $scope.tekerler = true;
                $scope.dikler = false;
                $scope.kalpak = false;
            }
            if(jogap==='Diskler'){
                $scope.dikler = true;
                $scope.OsBamyYok = false;
                $scope.tekerler = false;
                $scope.kalpak = false;
            }
            if(jogap==='Şina we Teker'){
                $scope.tekerler = true;
                $scope.dikler = false;
                $scope.OsBamyYok = false;
                $scope.kalpak = false;
            }
            if(jogap==='Kalpaklar'){
                $scope.kalpak = true;
                $scope.dikler = false;
                $scope.OsBamyYok = false;
                $scope.tekerler = false;
            }
            else{
            }
        };

        //Saherden daslyk
        $scope.aralykshaher = ["1","2","3","4","5","6","7","8","9",
            "10","11","12","13","14","15","16","17","18","19",
            "20","21","22","23","24","25","26","27","28","29",
            "30","31","32","33","34","35","36","37","38","39",
            "40","41","42","43","44","45","46","47","48","49",
            "50","51","52","53","54","55","56","57","58","59",
            "60","61","62","63","64","65","66","67","68","69",
            "70","71","72","73","74","75","76","77","78","79",
            "80","81","82","83","84","85","86","87","88","89",
            "90","91","92","93","94","95","96","97","98","99",
            "100","101","102","103","104","105","106","107","108","109",
            "110","111","112","113","114","115","116","117","118","119",
            "120","121","122","123","124","125","126","127","128","129",
            "130","131","132","133","134","135","136","137","138","139",
            "140","141","142","143","144","145","146","147","148","149"];

        $scope.yyllar = [
            "2001",
            "2005",
            "2008",
            "2011"
        ];

        //KATALOGLAR
        $scope.katalog = [{wariant: "Transport",wariantRU: "Транспорт", value: "Transport", surat: "1transport"},
            {wariant: "Emlak",wariantRU: "Недвижимость", value: "Emlak", surat: "1emlak"},
            {wariant: "Iş",wariantRU: "Работа", value: "Iş", surat: "1is"},
            {wariant: "Hyzmat",wariantRU: "Услуги", value: "Hyzmat", surat: "1hyzmat"},
            {wariant: "Öý-Hojalyk üçin", wariantRU: "Для Дома и Дачи", value: "Öý-Hojalyk üçin", surat: "1oyuç"},
            {wariant: "Harytlar", wariantRU: "Изделия", value: "Harytlar", surat: "1haryt"},
            {wariant: "Egin Eşikler we Bujiteria", wariantRU: "Одежды и Бижутерия", value: "Egin Eşikler we Bujiteria", surat: "1egin"},
            {wariant: "Tehnika", wariantRU: "Техника", value: "Tehnika", surat: "1tehnika"},
            {wariant: "Maldarçylyk we Bagbançylyk", wariantRU: "Животноводство и Садовничество", value: "Maldarçylyk we Bagbançylyk", surat: "1maldar"},
            {wariant: "Güýmenje we Dynç Alyş", wariantRU: "Хобби и Отдых", value: "Güýmenje we Dynç Alyş", surat: "1hobbi"}];
        {
            $scope.kat_transport = [{wariant: "Awtoulaglar", wariantRU: "Автомобили", surat: "2transportawt"},
                {wariant: "Matorlar we Mototehnikalar", wariantRU: "Мотоциклы и Мототехника", surat: "2transportmot"},
                {wariant: "Gruzowikler we Spestehnikalar", wariantRU: "Грузовики и Спецтехника", surat: "2transportgru"},
                {wariant: "Suw Transportlary", wariantRU: "Водный Транспорт", surat: "2transportsuw"},
                {wariant: "Zapçastlar we Bezegler", wariantRU: "Запчасти и Аксессуары", surat: "2transportzap"}];
            {
                $scope.kat_tra_awtoulag = [{wariant: "Sürülen", wariantRU: "С пробегом"},
                    {wariant: "Täze", wariantRU: "Новый"}];

                $scope.kat_tra_mator = [{wariant: "Kwadrotsikl", wariantRU: "Квадроциклы"},
                    {wariant: "Maped we Skuter", wariantRU: "Мопеды и Скутеры"},
                    {wariant: "Matorlar", wariantRU: "Мотоциклы"},
                    {wariant: "Murawey", wariantRU: "Муравей"}];

                $scope.kat_tra_gruzowik = [{wariant: "Awtobus", wariantRU: "Автобусы"},
                    {wariant: "Kran", wariantRU: "Краны"},
                    {wariant: "Kamaz", wariantRU: "Камаз"},
                    {wariant: "Buldozer", wariantRU: "Бульдозеры"},
                    {wariant: "Gruzowik", wariantRU: "Грузовики"},
                    {wariant: "Komunalny Tehnika", wariantRU: "Коммунальная Техника"},
                    {wariant: "Yeňil transport", wariantRU: "Лёгкий Транспорт"},
                    {wariant: "Ýük ýükleýji maşynlar", wariantRU: "Погрузчики"},
                    {wariant: "Teleşge", wariantRU: "Прицепы"},
                    {wariant: "Traktor", wariantRU: "Трактор"},
                    {wariant: "Oba-Hojalyk tehnikasy", wariantRU: "Сельхозтехника"},
                    {wariant: "Gurluşuk tehnikasy", wariantRU: "Строительная Техника"},
                    {wariant: "Tirkeg Çekijiler", wariantRU: "Тягачи"},
                    {wariant: "Ekskawator", valwariantRUue: "Экскаваторы"}];

                $scope.kat_tra_suw = [{wariant: "Kürekli gaýyk", wariantRU: "Каяки и Каноэ"},
                    {wariant: "Gidrotsikl", wariantRU: "Гидроциклы"},
                    {wariant: "Kater we Ýahta", wariantRU: "Катера и Яхты"},
                    {wariant: "Matorly Lodka/Gaýyk", wariantRU: "Моторные Лодки"},
                    {wariant: "Çişirilýän Lodka/Gaýyk", wariantRU: "Надувные Лодки"}];

                $scope.kat_tra_zapcast = [{wariant: "Zapçastlar", wariantRU: "Запчасти"},
                    {wariant: "Bezegler", wariantRU: "Аксессуары"},
                    {wariant: "GPS-nawigator/Ugrukdurujy", wariantRU: "GPS-Навигаторы"},
                    {wariant: "Ýag we Himiýa", wariantRU: "Масло и Автохимия"},
                    {wariant: "Bagajnik we Kürçek", wariantRU: "Багажники и Фаркопы"},
                    {wariant: "Audio we Wideotehnika", wariantRU: "Аудио- и Видеотехника"},
                    {wariant: "Instrumentlar", wariantRU: "Инструменты"},
                    {wariant: "Teleşga", wariantRU: "Прицепы"},
                    {wariant: "Ogurluga garşy abzal", wariantRU: "Противоугонные Устройства"},
                    {wariant: "Týuning/Özgerdiş", wariantRU: "Тюнинг"},
                    {wariant: "Tekerler we Diskler", wariantRU: "Шины, Диски и Колёса"},
                    {wariant: "Şlem, Aýakgap we egin eşikler", wariantRU: "Экипировка"}];
                {
                    $scope.kat_tra_zap_zapcast = [{wariant: "Maşynlar üçin", wariantRU: "Для Автомобилей"},
                        {wariant: "Matorlar üçin", wariantRU: "Для Мототехники"},
                        {wariant: "Ýük maşynlary üçin", wariantRU: "Для Спецтехники"},
                        {wariant: "Suw ulaglary üçin", wariantRU: "Для Водного Транспорта"}];

                    $scope.kat_tra_zap_teker = [{wariant: "Şina we Teker", wariantRU: "Шины и Колёса"},
                        {wariant: "Motor Tekerleri/Şinalary", wariantRU: "Мотошины"},
                        {wariant: "Diskler", wariantRU: "Диски"},
                        {wariant: "Kalpaklar", wariantRU: "Колпаки"}];
                }
            }
            $scope.kat_emlak = [{wariant: "Kwartira", wariantRU: "Квартиры", surat: "2emlkwar"},
                {wariant: "Öý we Daça", wariantRU: "Дома, Дачи, Коттеджи", surat: "2emldaça"},
                {wariant: "Mellek", wariantRU: "Земельные Участки", surat: "2emlmel"},
                {wariant: "Garaž we Maşyn goýara ýer", wariantRU: "Гаражи и Машиноместа", surat: "2emlgaraz"},
                {wariant: "Täjirçilik emlägi", wariantRU: "Коммерческая Недвижимость", surat: "2emltajir"}];
            {
                $scope.kat_eml_wse = [{wariant: "Satlyk", wariantRU: "Продам"},
                    {wariant: "Hakyna bermek", wariantRU: "Сдам"},
                    {wariant: "Satyn aljak", wariantRU: "Куплю"},
                    {wariant: "Hakyna tutjak", wariantRU: "Сниму"}];
                {
                    $scope.kat_eml_sat_kwar = [{wariant: "Gurulan", wariantRU: "Строенный"},
                        {wariant: "Indi gurlulmaly", wariantRU: "Новостройка"}];

                    $scope.kat_eml_hak_kwar = [{wariant: "Uzak wagtlyk", wariantRU: "На Длительный Срок"},
                        {wariant: "Günlük", wariantRU: "Посуточно"}];

                    $scope.kat_eml_gar_wse = [{wariant: "Garaž", wariantRU: "Гараж"},
                        {wariant: "Maşyn goýara ýer", wariantRU: "Машиноместо"}];

                    $scope.kat_eml_taj_wse = [{wariant: "Myhmanhana", wariantRU: "Гостиница", surat: "3emltajirmyhman"},
                        {wariant: "Ofis", wariantRU: "Офисное Помещение", surat: "3emltajirofis"},
                        {wariant: "Naharhana", wariantRU: "Помещение Общественного Питания", surat: "3emltajirnahar"},
                        {wariant: "Önümçilik", wariantRU: "Производственное Помещение", surat: "3emltajironum"},
                        {wariant: "Sklad", wariantRU: "Складское Помещение", surat: "3emltajirsklad"},
                        {wariant: "Alyş satyş ýeri", wariantRU: "Торговое Помещение", surat: "3emltajiralys"}];
                }
            }
            $scope.kat_ish = [{wariant: "Iş gözleýän", wariantRU: "Ищу Работу", surat: "2isgozle"},
                {wariant: "Işgär Gözleýäň", wariantRU: "Ищу Работник", surat: "2isgarg"}];
            {
                $scope.kat_ish_gar_goz = [{wariant: "Internet we Telefon Ulgamy",wariantRU: "IT, Интернет, Телеком"},
                    {wariant: "Awto ulag telekeçiligi",wariantRU: "Автомобильный Бизнес"},
                    {wariant: "Bank",wariantRU: "Банки, Инвестиции"},
                    {wariant: "Administrator",wariantRU: "Административная Работа"},
                    {wariant: "Tejribesiz, Student",wariantRU: "Без Опыта, Студенты"},
                    {wariant: "Hasapçylyk, Maliýe",wariantRU: "Бухгалтерия, Финансы"},
                    {wariant: "Döwlet Işgäri",wariantRU: "Госслужба"},
                    {wariant: "Öý işgäri",wariantRU: "Домашний Персонал"},
                    {wariant: "Marketing, Reklama",wariantRU: "Маркетинг, Реклама, PR"},
                    {wariant: "Medisina",wariantRU: "Медицина, Фармацевтика"},
                    {wariant: "Ylym, Bilim",wariantRU: "Образование, Наука"},
                    {wariant: "Goragçy, Howupsuzlyk",wariantRU: "Охрана, Безопасность"},
                    {wariant: "Söwdegär",wariantRU: "Продажи"},
                    {wariant: "Önümçilik",wariantRU: "Производство, Сырьё, с/х"},
                    {wariant: "Ätiýaçlandyryş",wariantRU: "Страхование"},
                    {wariant: "Gurluşyk",wariantRU: "Строительство"},
                    {wariant: "Transport",wariantRU: "Транспорт, Логистика"},
                    {wariant: "Turizm",wariantRU: "Туризм, Ррестораны"},
                    {wariant: "Restoran",wariantRU: "Ресторанный"},
                    {wariant: "Dolandyryjy",wariantRU: "Управление Персоналом"},
                    {wariant: "Gözellik salony",wariantRU: "Салоны Красоты"},
                    {wariant: "Başga Görnüşi...",wariantRU: "Другие..."}];
            }
            $scope.kat_hyzmat = [{wariant: "Toý", wariantRU: "Свадьба", surat: "2hyzmattoy"},
                {wariant: "Maşyn/Ulaglar", wariantRU: "Ремонт Транспорта", surat: "2hyzmatmasyn"},
                {wariant: "Tikin Maşyn", wariantRU: "Ремонт Швейные Машины", surat: "2hyzmattikinmasyn"},
                {wariant: "Tehnika", wariantRU: "Ремонт Техники", surat: "2hyzmatteh"},
                {wariant: "Gurluşyk", wariantRU: "Ремонт и Строительство", surat: "2hyzmatgur"},
                {wariant: "Jaý/Öý Remont", wariantRU: "Ремонт Домов", surat: "2hyzmatjay"}];
            {
                $scope.kat_hyz_toy = [{wariant: "Wideoçy",wariantRU: "Видеосъёмка"},
                    {wariant: "Suratçy",wariantRU: "Фотосъёмка"},
                    {wariant: "Toý Mekany",wariantRU: "Ресторан для Свадьбы"},
                    {wariant: "Stol Bezegleri",wariantRU: "Украшение Столов"},
                    {wariant: "Öý/Jaý Bezegleri",wariantRU: "Украшение Домов"},
                    {wariant: "Fatalar we Kürteler",wariantRU: "Свадебное Платье we Курте"},
                    {wariant: "Kastýum we Milli eşikler",wariantRU: "Костюмы и ноц. Одежды"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];


                $scope.kat_hyz_masyn = [{wariant: "Remont",wariantRU: "Ремонт"},
                    {wariant: "Krasga",wariantRU: "Краска"},
                    {wariant: "Zapçastlaryny Çalyşmak",wariantRU: "Поменять Запчасти"},
                    {wariant: "Teker Bejermek",wariantRU: "Ремонт Шины"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];


                $scope.kat_hyz_tikin = [{wariant: "Remont",wariantRU: "Ремонт"},
                    {wariant: "Ýag Çalyşmak",wariantRU: "Поменять Масло"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];

                $scope.kat_hyz_tehnika = [{wariant: "Telefon Remont",wariantRU: "Телефон Ремонт"},
                    {wariant: "Kompýuter Remont",wariantRU: "Компьютер Ремонт"},
                    {wariant: "Holodilnik",wariantRU: "Холодильник Ремонт"},
                    {wariant: "Konsaner",wariantRU: "Кондиционеры Ремонт"},
                    {wariant: "Telewizor",wariantRU: "Телевизор Ремонт"},
                    {wariant: "Tehnika Gurnamak",wariantRU: "Установка Техники"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];

                $scope.kat_hyz_gurlusyk = [{wariant: "Uly plan",wariantRU: "Большой План"},
                    {wariant: "Kiçi plan",wariantRU: "Маленький План"},
                    {wariant: "Nawes",wariantRU: "Навес"},
                    {wariant: "Jaýyň üsti/Kryşasy",wariantRU: "Крыша"},
                    {wariant: "Patalok",wariantRU: "Паталок"},
                    {wariant: "Betonlamak (Öýüň töweregine)",wariantRU: "Вылить Бетон(?)"},
                    {wariant: "Howuz Guýmak",wariantRU: "Построить Водосборник"},
                    {wariant: "Guýy Gazmak",wariantRU: "Копать Колодец"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];

                $scope.kat_hyz_jay = [{wariant: "Komnat Remonty",wariantRU: "Ремонт Комнат"},
                    {wariant: "Kwartira Remonty",wariantRU: "Ремонт Квартир"},
                    {wariant: "Öý/Jaý Remonty",wariantRU: "Ремонт Домов"},
                    {wariant: "Başga...",wariantRU: "Другое..."}];
            }
            $scope.kat_oyhojalyk = [{wariant: "Halylar we Keçeler", wariantRU: "Коверы и Кошмы", surat: "2oyuçhaly"},
                {wariant: "Mebeller", wariantRU: "Мебель и Интерьер", surat: "2oyuçmebel"},
                {wariant: "Posuda we Harytlar", wariantRU: "Посуда и Товары", surat: "2oyuçpasu"},
                {wariant: "Gurluşyk Harytlary", wariantRU: "Ремонт и Строительство", surat: "2oyuçgurl"}];
            {
                $scope.kat_oyh_haly = [{wariant: "Türkmen Haly", wariantRU: "Туркменские Коверы"},
                    {wariant: "Eýran Haly", wariantRU: "Иранские Коверы"},
                    {wariant: "Keçe", wariantRU: "Кошмы"},
                    {wariant: "Palas", wariantRU: "Палас"}];

                $scope.kat_oyh_mebel = [{wariant: "Kompýuter üçin Stolar we Otygyçlar", wariantRU: "Компьютерные Столы и Кресла"},
                    {wariant: "Krowat", wariantRU: "Кровати"},
                    {wariant: "Diwan", wariantRU: "Диваны"},
                    {wariant: "Otyrgyç", wariantRU: "Кресла"},
                    {wariant: "Kuhniýa Mebelleri", wariantRU: "Кухонные Гарнитуры"},
                    {wariant: "Çyra/ Ýagtyldyş Enjamlary", wariantRU: "Освещение"},
                    {wariant: "Tumboçka", wariantRU: "Подставки и Тумбы"},
                    {wariant: "Parta we Otugyç", wariantRU: "Столы и Стулья"},
                    {wariant: "Şkaf we Çekmeli Şkaf", wariantRU: "Шкафы и Комоды"},
                    {wariant: "Serwant", wariantRU: "Сервант"},
                    {wariant: "Sandyk", wariantRU: "Сундук"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_oyh_posuda = [{wariant: "Pasudalar/Gap Gaçlar", wariantRU: "Посуды"},
                    {wariant: "Kuhniýa üçin Harytlar", wariantRU: "Товары для Кухни"}];

                $scope.kat_oyh_gurlusyk = [{wariant: "Gapylar", wariantRU: "Двери"},
                    {wariant: "Instrumentlar/Abzallar", wariantRU: "Инструменты"},
                    {wariant: "Okno we Balkon", wariantRU: "Окна и Балконы"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
            $scope.kat_hususy = [{wariant: "Guýma", wariantRU: "Разливной", surat: "2harytguy"},
                {wariant: "Demirden", wariantRU: "Из Железа", surat: "2harytdem"},
                {wariant: "Agaçdan", wariantRU: "Из Дерево", surat: "2harytaga"},
                {wariant: "Gurluşyk üçin", wariantRU: "Для Строительства", surat: "2harytgurlus"},
                {wariant: "Oba Hojalyk üçin", wariantRU: "Бытовые", surat: "2harytoyuçi"}];
            {
                $scope.kat_hus_guyma = [{wariant: "Gazanlar", wariantRU: "Казаны"},
                    {wariant: "Çäýnekler", wariantRU: "Чайники"},
                    {wariant: "Käse", wariantRU: "Чашки"},
                    {wariant: "Küýze", wariantRU: "Ваза"},
                    {wariant: "Kafel", wariantRU: "Кафель"},
                    {wariant: "Çemçe", wariantRU: "Лошка"},
                    {wariant: "Okora/Tarelka", wariantRU: "Тарелка"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_hus_demirden = [{wariant: "Ojak", wariantRU: "Оджак"},
                    {wariant: "Zabor", wariantRU: "Забор"},
                    {wariant: "Peç", wariantRU: "Печь"},
                    {wariant: "Reşotka", wariantRU: "Решетка"},
                    {wariant: "Galtak", wariantRU: "Тачка"},
                    {wariant: "Nawes", wariantRU: "Навес"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_hus_agacdan = [{wariant: "Tapjan", wariantRU: "Тапчан"},
                    {wariant: "Şkaf", wariantRU: "Шкаф"},
                    {wariant: "Tumoçgalar", wariantRU: "Тумбочки"},
                    {wariant: "Sandyk", wariantRU: "Сундук"},
                    {wariant: "Çemçe", wariantRU: "Лошка"},
                    {wariant: "Gap Gaçlar", wariantRU: "Посуда"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_hus_gurlusyk = [{wariant: "Sement", wariantRU: "Семент"},
                    {wariant: "Şipr", wariantRU: "Шипр и Кровля"},
                    {wariant: "Agaç", wariantRU: "Дерево"},
                    {wariant: "Çagyl", wariantRU: "Чагыл"},
                    {wariant: "Kerpiç", wariantRU: "Керпич"},
                    {wariant: "Panel", wariantRU: "Панель"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_hus_obahojalyk = [{wariant: "Pil", wariantRU: "Пил"},
                    {wariant: "Orak", wariantRU: "Орак"},
                    {wariant: "Dyrmyk", wariantRU: "Дырмык"},
                    {wariant: "Lapata", wariantRU: "Лапата"},
                    {wariant: "Kätmen", wariantRU: "Катмен"},
                    {wariant: "Gyrkylyk", wariantRU: "Гыркылык"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
            $scope.kat_eginesik = [{wariant: "Gelin/Gyzlar üçin", wariantRU: "Для Невест/Девушек", surat: ""},
                {wariant: "Erkekler üçin", wariantRU: "Для Мужщин", surat: ""},
                {wariant: "Çagalar üçin", wariantRU: "Для Детей", surat: ""}];
            {
                $scope.kat_egi_gelin = [{wariant: "Ýakalar", wariantRU: "Яка"},
                    {wariant: "Köýnekler", wariantRU: "Рубашка"},
                    {wariant: "Žempirler", wariantRU: "Джемпер"},
                    {wariant: "Paltolar", wariantRU: "Пальто"},
                    {wariant: "Balaklar", wariantRU: "Балак"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки"},
                    {wariant: "Sagat", wariantRU: "Часы"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь"},
                    {wariant: "Ýüzük", wariantRU: "Кольцо"},
                    {wariant: "Bilezik", wariantRU: "Брослет"},
                    {wariant: "Gulak Halka", wariantRU: "Серьги"},
                    {wariant: "Monjuk", wariantRU: "Ожерелье"},
                    {wariant: "Zynjyr", wariantRU: "Цепи"},
                    {wariant: "Şaý Sepler", wariantRU: "Шай Сеп"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_egi_erkek = [{wariant: "Maýkalar", wariantRU: "Майки"},
                    {wariant: "Jalbarlar", wariantRU: "Брюки"},
                    {wariant: "Jynsylar", wariantRU: "Джинсы"},
                    {wariant: "Köýnekler", wariantRU: "Рубаха"},
                    {wariant: "Žempirler", wariantRU: "Джемпер"},
                    {wariant: "Kurtgalar", wariantRU: "Куртки"},
                    {wariant: "Paltolar", wariantRU: "Пальто"},
                    {wariant: "Aýak Gap/Köwüş", wariantRU: "Обувь"},
                    {wariant: "Sagat", wariantRU: "Часы"},
                    {wariant: "Zynjyr", wariantRU: "Цепи"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_egi_caga = [{wariant: "Egin Eşikler", wariantRU: "Одежды"},
                    {wariant: "Oýunjaklar", wariantRU: "Игрушка"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
            $scope.kat_tehnika = [{wariant: "Telefon", wariantRU: "Телефоны", surat: "2tehnikatel"},
                {wariant: "Notebook", wariantRU: "Ноутбуки", surat: "2tehnikatout"},
                {wariant: "Kompýuter we Printer", wariantRU: "Компьютеры и Принтеры", surat: "2tehnikakomppri"},
                {wariant: "Audio we Wideo", wariantRU: "Аудио и Видео", surat: "2tehnikaauwid"},
                {wariant: "Öý üçin", wariantRU: "Для Дома", surat: "2tehnikaoyuçin"},
                {wariant: "Aş hana üçin/Gaz jaý", wariantRU: "Для Кухни", surat: "2tehnikaasgazan"},
                {wariant: "Howa we Klimat Enjamlary", wariantRU: "Климатическое Оборудование", surat: "2tehnikahowa"},
                {wariant: "Fotoapparatla we Dürbiler", wariantRU: "Фотоаппараты и Телескопы", surat: "2tehnikafoto"},
                {wariant: "Kompýuter üçin Harytlar", wariantRU: "Товары для Компьютера", surat: "2tehnikakomuçin"}];
            {
                $scope.kat_teh_telefon = [{wariant: "Ulanylan", wariantRU: "Использованный"},
                    {wariant: "Täze", wariantRU: "Новый"},
                    {wariant: "Ratsiýa(Rasiýa)", wariantRU: "Рации"},
                    {wariant: "Domaşny/Öý Telefony", wariantRU: "Домашный Телефон"},
                    {wariant: "Bezegler", wariantRU: "Аксессуары"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_teh_notebook = [{wariant: "Ulanylan", wariantRU: "Использованный"},
                    {wariant: "Täze", wariantRU: "Новый"},
                    {wariant: "Monitor/Ekran", wariantRU: "Монитор"},
                    {wariant: "Batareýa", wariantRU: "Батарея"},
                    {wariant: "Zarýat Beriji", wariantRU: "Зарядник"}];

                $scope.kat_teh_kompyuter = [{wariant: "Monitor/Ekran", wariantRU: "Монитор"},
                    {wariant: "Korpusy", wariantRU: "Корпус"},
                    {wariant: "Zapçastlary...", wariantRU: "Запчасти..."},
                    {wariant: "Printer", wariantRU: "Принтер"}];

                $scope.kat_teh_audio = [{wariant: "MP3 pleer", wariantRU: "MP3-плееры"},
                    {wariant: "Kolonkalar we Akustika", wariantRU: "Колонки и Акустика"},
                    {wariant: "DVD, Wideo we Blu-ray Okaýjylar", wariantRU: "DVD, Видео и Blu-ray Плееры"},
                    {wariant: "Wideo Kamera", wariantRU: "Видеокамеры"},
                    {wariant: "Kabeller we Adapterlar", wariantRU: "Кабели и Адаптеры"},
                    {wariant: "Mikrafon", wariantRU: "Микрофоны"},
                    {wariant: "Muzykalny Sentr, Magnitafon", wariantRU: "Музыкальные Центры, Магнитолы"},
                    {wariant: "Nauşnikler", wariantRU: "Наушники"}];

                $scope.kat_teh_oy = [{wariant: "Pylesos", wariantRU: "Пылесосы"},
                    {wariant: "Kir maşyn", wariantRU: "Стиральные Машины"},
                    {wariant: "Ütük", wariantRU: "Утюги"},
                    {wariant: "Tikin maşyn", wariantRU: "Швейные Машины"}];

                $scope.kat_teh_ashana = [{wariant: "Mikrawalnowka", wariantRU: "Микроволновые Печи"},
                    {wariant: "Plita", wariantRU: "Плита"},
                    {wariant: "Haladilnik we Doňduryjy", wariantRU: "Холодильники и Морозильные Камеры"},
                    {wariant: "Mikser", wariantRU: "Миксер"},
                    {wariant: "Gap gaç ýuwujy maşyn", wariantRU: "Посудомоечные Машины"},
                    {wariant: "Ownuk uşak tehnikalar", wariantRU: "Мелкая Кухонная Техника"}];

                $scope.kat_teh_howa = [{wariant: "Wentilýator", wariantRU: "Вентиляторы"},
                    {wariant: "Kandisoner", wariantRU: "Кондиционеры"},
                    {wariant: "Ýyladyjy", wariantRU: "Обогреватели"},
                    {wariant: "Howa Arassalaýjy", wariantRU: "Очистители Воздуха"},
                    {wariant: "Termometr", wariantRU: "Термометры и Метеостанции"}];

                $scope.kat_teh_foto = [{wariant: "Plýonkaly Fotoapparatla", wariantRU: "Плёночные Фотоаппараты"},
                    {wariant: "Sifrawoý Fotoapparatla", wariantRU: "Цифравые Фотоаппараты"},
                    {wariant: "Profesionalnyý Fotoapparatla", wariantRU: "Профециональные Фотоаппараты"},
                    {wariant: "Obýektiwler", wariantRU: "Объективы"},
                    {wariant: "Dürbuler we Teleskoplar", wariantRU: "Бинокли и Телескопы"},
                    {wariant: "Dürli Enjamlar", wariantRU: "Оборудование и Аксессуары"}];

                $scope.kat_teh_kompyuterharytlar = [{wariant: "Web-Kamera", wariantRU: "Веб-камеры"},
                    {wariant: "Josýstik we Rol", wariantRU: "Джойстики и Рули"},
                    {wariant: "Klawiatura we Myşka/Syçanjyk", wariantRU: "Клавиатуры и Мыши"},
                    {wariant: "Internet üçin", wariantRU: "Сетевое оборудование"},
                    {wariant: "Žoski disler we Fleşka", wariantRU: "Жёсткие Диски и Флэшки"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
            $scope.kat_maldar = [{wariant: "Bag-Bakja", wariantRU: "Бахча", surat: "2maldarbag"},
                {wariant: "Nahallar we Şitiller", wariantRU: "Саженец и Рассада", surat: "2maldarsitil"},
                {wariant: "Iri Haýwanlar", wariantRU: "Большие Животные", surat: "2maldariri"},
                {wariant: "Uşak Haýwanlar", wariantRU: "Маленький Животные", surat: "2maldarusak"}];
            {
                $scope.kat_mal_bag = [{wariant: "Üzüm", wariantRU: "Виноград"},
                    {wariant: "Alma", wariantRU: "Яблоко"},
                    {wariant: "Erik", wariantRU: "Абрикос"},
                    {wariant: "Almyrt", wariantRU: "Груша"},
                    {wariant: "Şetdaly", wariantRU: "Персик"},
                    {wariant: "Limon", wariantRU: "Лимон"},
                    {wariant: "Pamidor", wariantRU: "Памидор"},
                    {wariant: "Hyýar", wariantRU: "Огурец"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_mal_nahal = [{wariant: "Ýolka", wariantRU: "Ёлка"},
                    {wariant: "Arça", wariantRU: "Арча"},
                    {wariant: "Şitiller", wariantRU: "Рассады"},
                    {wariant: "Baglar", wariantRU: "Сады"},
                    {wariant: "Güller", wariantRU: "Цветы"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_mal_irihaywan = [{wariant: "Sygyr", wariantRU: "Корова"},
                    {wariant: "Öküz", wariantRU: "Бык"},
                    {wariant: "Göle", wariantRU: "Теленок"},
                    {wariant: "At", wariantRU: "Конь"},
                    {wariant: "Düýe", wariantRU: "Верблюд"},
                    {wariant: "Köşek", wariantRU: "Верблюжонок"}];

                $scope.kat_mal_usakhaywan = [{wariant: "Goýun", wariantRU: "Баран"},
                    {wariant: "Geçi", wariantRU: "Козел"},
                    {wariant: "Towuk", wariantRU: "Курица"},
                    {wariant: "Jüýje", wariantRU: "Цыпленок"},
                    {wariant: "Towşan", wariantRU: "Кролик"},
                    {wariant: "Induk", wariantRU: "Индюк"},
                    {wariant: "Gaz", wariantRU: "Гусь"},
                    {wariant: "It", wariantRU: "Собака"},
                    {wariant: "Kepderi", wariantRU: "Голубь"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
            $scope.kat_guymenje = [{wariant: "Welosiped", wariantRU: "Велосипеды", surat: "2hobbiwel"},
                {wariant: "Bilet we Dynç Alyş", wariantRU: "Билеты и Путешествия", surat: "2hobbipute"},
                {wariant: "Muzikantlar üçin", wariantRU: "Музыкальные Инструменты", surat: "2hobbimuz"},
                {wariant: "Sport", wariantRU: "Спорт и Отдых", surat: "2hobbispo"},
                {wariant: "Oýunlar we Programmalar", wariantRU: "Игры и Программы", surat: "2hobbikon"}];
            {
                $scope.kat_guy_wel = [{wariant: "Baýyrlyk üçin", wariantRU: "Горные"},
                    {wariant: "Ýol üçin", wariantRU: "Дорожные"},
                    {wariant: "Çagalar üçin", wariantRU: "Детские"},
                    {wariant: "Zapjastlar we Bezegler", wariantRU: "Запчасти и Аксессуары"}];

                $scope.kat_guy_bil = [{wariant: "Daşary Ýurt üçin", wariantRU: "Путешествия"},
                    {wariant: "Sirk üçin", wariantRU: "Цирк"},
                    {wariant: "Konsert üçin", wariantRU: "Концерты"},
                    {wariant: "Teatr we Kino üçin", wariantRU: "Театр и Кино"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_guy_muz = [{wariant: "Gitara", wariantRU: "Гитара"},
                    {wariant: "Dutar", wariantRU: "Дутар"},
                    {wariant: "Gyjak", wariantRU: "Гыджак"},
                    {wariant: "Deprek", wariantRU: "Барабан и Ударные"},
                    {wariant: "Tüýdik", wariantRU: "Духовые"},
                    {wariant: "Pionina", wariantRU: "Пианино и Другие Клавишные"},
                    {wariant: "Akardion", wariantRU: "Аккордеоны"},
                    {wariant: "Skripka", wariantRU: "Скрипки и Другие Смычковые"},
                    {wariant: "Studia we Konsert üçin", wariantRU: "Для Студии и Концертов"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_guy_sport = [{wariant: "Tennis üçin", wariantRU: "Теннис"},
                    {wariant: "Boks üçin", wariantRU: "Бокс"},
                    {wariant: "Trenirowka üçin", wariantRU: "Фитнес и Тренажёры"},
                    {wariant: "Skeýbordlar we Tekerçekler", wariantRU: "Ролики и Скейтбординг"},
                    {wariant: "Stol oýunlary", wariantRU: "Настольные Игры"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];

                $scope.kat_guy_oyun = [{wariant: "PlayStation", wariantRU: "PlayStation"},
                    {wariant: "PlayStation üçin oýunlar", wariantRU: "Игры для PlayStation"},
                    {wariant: "Kompýuter Oýunlary", wariantRU: "Компьютерные Игры"},
                    {wariant: "Programmalar", wariantRU: "Программы"},
                    {wariant: "Başga...", wariantRU: "Другое..."}];
            }
        }

        //OZ GOSANLAM
        $scope.kuzowa_gornusi = [{wariant: "Sedan", wariantRU: "Седан", surat: "Sedan"},
            {wariant: "Heçbek", wariantRU: "Хетчбэк", surat: "Heçbek"},
            {wariant: "Uniwersal", wariantRU: "Универсал", surat: "Uniwersal"},
            {wariant: "JEEP/ Wnedarožnik", wariantRU: "Внедорожник", surat: "JEEP"},
            {wariant: "Kabriolet", wariantRU: "Кабриолет", surat: "Kabriolet"},
            {wariant: "Kupe", wariantRU: "Купе", surat: "Kupe"},
            {wariant: "Limuzin", wariantRU: "Лимузин", surat: "Limuzin"},
            {wariant: "Miniwen", wariantRU: "Минивэн", surat: "Miniwen"},
            {wariant: "Pikap", wariantRU: "Пикап", surat: "Pikap"},
            {wariant: "Furgon", wariantRU: "Фургон", surat: "Furgon"},
            {wariant: "Mikroawtobus", wariantRU: "Микроавтобус", surat: "Mikroawtobus"}];

        //Son ayyrmaly HOKMAN

        $scope.welayatlar = [{wariant: "Aşgabat", wariantRU: "Ашхабад"},
            {wariant: "Ahal", wariantRU: "Ахал"},
            {wariant: "Mary", wariantRU: "Мары"},
            {wariant: "Lebap", wariantRU: "Лебап"},
            {wariant: "Daşoguz", wariantRU: "Дашогуз"},
            {wariant: "Balkan", wariantRU: "Балкан"}];
        $scope.etraplar = ertdayBD.ugratertaplar();
        $scope.dayhan = ertdayBD.ugratdayhanlar();
        if(!$scope.etraplar) {
            $http.get("http://a0109349.xsph.ru/gaytaretraplar").then(function (newItem) {
                console.log('Etraplar45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.etraplar = newItem.data;
                ertdayBD.yattutertaplar(newItem.data)
            })
        }
        if(!$scope.dayhan) {
            $http.get("http://a0109349.xsph.ru/gaytardayhanlar").then(function (newItem) {
                console.log('Dayhanlae45345435: ')
                // console.log('Etraplar: ', newItem.data)
                $scope.dayhan = newItem.data;
                ertdayBD.yattutdayhanlar(newItem.data)
            })
        }
        //Welayatlar zatlar GORUNER GORUNMEZ ARASSA
        $scope.etrapGorunya = false;
        $scope.dayhanGorunya = false;
        $scope.jogapWelayat = function (j) {
            $scope.etrapGorunya = true;
            $scope.dayhanGorunya = false;
            $scope.formInfo.etrap = '';
            $scope.formInfo.dayh = '';
        };
        $scope.jogapEtrap = function (j) {
            $scope.dayhanGorunya = true;
            $scope.formInfo.dayh = '';
            if(j==='AŞGABAT'){
                $scope.dayhanGorunya = false;
            }
        };

        // $scope.modelN = $resource("http://api.auto.ria.com/categories/:categoryId/marks/:markId/models", {
        //     categoryId: "1", markId: 9});
        // console.log('Tole Bahalary0')
        // $scope.kusrlarInter = $resource("http://a0109349.xsph.ru/kursdol").query();
        // console.log('Tole Bahalary111', $scope.kusrlarInter)

        /////EKRANA CYKYA
        $scope.showAlert = function(title, msg) {
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: msg
            });
        };

        $scope.puyt = function (ev) {
            console.log('Yok', $scope.diliTmRu);
            /*.then(function() {
             console.log('Hawa');
             }, function() {
             console.log('Yok');
             });*/
            // $scope.showAlert('Отлично', 'Отправленное объявление добавлень');
            $scope.showAlert('Siziň bildirişiňiz "2000 манат (ТМТ)"-dan geçdi', 'Bildirişiňizi aktiwny etmek isleseňiz şu nomera ' + $scope.kusrlarInter.telefonADMIN + ' bildirişiň ID-sini ýazyp we "' + $scope.kusrlarInter.tole10000 + ' manat (ТМТ)" ugratmaly (Öz ID-zi "Мои Обявлении" bölüminde görüp bilersiňiz!). Goşmaça maglumatlary "Обратная Связь" we "Правила Использование" bölümlerinde');
            $scope.showAlert('Ваше объявление превышает отметку "2000 манат (ТМТ)"', 'Для активации объявление вам надо отправить "'+ $scope.kusrlarInter.tole10000 +' манат (ТМТ)" и сообщение с вашим ID на номер '+ $scope.kusrlarInter.telefonADMIN +' (Ваш ID можете увидет в пункте "Мои Обявлении"). Дополнительую информацию вы можете узнать в пункте "Обратная Связь" и "Правила Использование"');

            // if($scope.diliTmRu==="TM") {
            //     console.log('Yok2');
            //     $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz baza goşuldy');
            //     var confirm = $mdDialog.confirm()
            //         .title('Öz adyňyzdan giriň')
            //         .textContent('Ugradan bildirişiňiz baza goşuldy')
            //         .targetEvent(ev)
            //         .ok('OK')
            //     $mdDialog.show(confirm)
            // }
            // else if($scope.diliTmRu==='RU') {
            //     console.log('Yok3');
            //     $scope.showAlert('Отлично', 'Отправленное объявление добавлень');
            //     var confirm = $mdDialog.confirm()
            //         .title('Öz adyňyzdan giriň')
            //         .textContent('Отправленное объявление добавлень')
            //         // .ariaLabel('Lucky day')
            //         .targetEvent(ev)
            //         .ok('OK')
            //         // .cancel('Ýok');
            //     $mdDialog.show(confirm)
            // }
        }

        //Tolemeli pullarynyn mocberi
        $scope.kusrlarInter = {};
        //KURS DOLLAR
        $scope.consDollar = '';
        $http.get("http://a0109349.xsph.ru/kursdol").then(function (newItem) {
            // console.log('Dollar: ', newItem.data[0].nace)
            $scope.consDollar = newItem.data[0].nace;
            $scope.kusrlarInter = newItem.data[0];
            // console.log('Tole Bahalary222', newItem.data[0])
        })


        //Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie//Cookie
        $scope.userBazaCook = $cookieStore.get('loginUserBaza');
        $scope.yarayaTawUser = [];
        //wagtlayyn bazan ady
        $scope.yarayaTawUserBN = [];

        $scope.formInfoKatalog = {};
        //SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN  SERVERE UGRATMAK UCIN
        $scope.ugratmak = function (fInfo,fInfoKatalog) {
            //Suratlaryn adlaryny baza gosara belleyas
            fInfo.glawImg = '';
            if($scope.formInfo.img1 && !fInfo.glawImg){
                    fInfo.glawImg = $scope.formInfo.img1;
                    if($scope.formInfo.img2 && !fInfo.glawImg){
                        fInfo.glawImg = $scope.formInfo.img2;
                        if($scope.formInfo.img3 && !fInfo.glawImg){
                            fInfo.glawImg = $scope.formInfo.img3;
                            if($scope.formInfo.img4 && !fInfo.glawImg){
                                fInfo.glawImg = $scope.formInfo.img4;
                                if($scope.formInfo.img5 && !fInfo.glawImg){
                                    fInfo.glawImg = $scope.formInfo.img5;
                                    if($scope.formInfo.img6 && !fInfo.glawImg){
                                        fInfo.glawImg = $scope.formInfo.img6;
                                        if($scope.formInfo.img7 && !fInfo.glawImg){
                                            fInfo.glawImg = $scope.formInfo.img7;
                                            if($scope.formInfo.img8 && !fInfo.glawImg){
                                                fInfo.glawImg = $scope.formInfo.img8;
                                                if($scope.formInfo.img9 && !fInfo.glawImg){
                                                    fInfo.glawImg = $scope.formInfo.img9;
                                                    if($scope.formInfo.img10 && !fInfo.glawImg){
                                                        fInfo.glawImg = $scope.formInfo.img10;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
            {
                if($scope.formInfo.img1){
                    fInfo.img1 = $scope.formInfo.img1;
                    $scope.showAlert('1pozBazalar gosulab', 'Suratyn baza ugradyldy');
                }
                else if($scope.formInfo.img2){
                    fInfo.img2 = $scope.formInfo.img2;
                    $scope.showAlert('2pozBazalar gosulab', 'Suratyn baza ugradyldy');
                }
                else if($scope.formInfo.img3){
                    fInfo.img3 = $scope.formInfo.img3;
                    $scope.showAlert('3pozBazalar gosulab', 'Suratyn baza ugradyldy');
                }
                else if($scope.formInfo.img4){
                    fInfo.img4 = $scope.formInfo.img4;
                    $scope.showAlert('4pozBazalar gosulab', 'Suratyn baza ugradyldy');
                }
                else if($scope.formInfo.img5){
                    fInfo.img5 = $scope.formInfo.img5;
                    $scope.showAlert('5pozBazalar gosulab', 'Suratyn baza ugradyldy');
                }
                else if($scope.formInfo.img6){
                    fInfo.img6 = $scope.formInfo.img6;
                    $scope.showAlert('6pozBazalar gosulab', 'Suratyn baza ugradyldy');
                }
                else if($scope.formInfo.img7){
                    fInfo.img7 = $scope.formInfo.img7;
                    $scope.showAlert('7pozBazalar gosulab', 'Suratyn baza ugradyldy');
                }
                else if($scope.formInfo.img8){
                    fInfo.img8 = $scope.formInfo.img8;
                    $scope.showAlert('8pozBazalar gosulab', 'Suratyn baza ugradyldy');
                }
                else if($scope.formInfo.img9){
                    fInfo.img9 = $scope.formInfo.img9;
                    $scope.showAlert('9pozBazalar gosulab', 'Suratyn baza ugradyldy');
                }
                else if($scope.formInfo.img10){
                    fInfo.img10 = $scope.formInfo.img10;
                    $scope.showAlert('10pozBazalar gosulab', 'Suratyn baza ugradyldy');
                }
            }

            //Bahasyny belleninen puluna gora uytgetya
            var kursDol = fInfo.bahasy;
            if(fInfo.pulBelligi==='TMM (Köne)'){
                kursDol = fInfo.bahasy/5000;
            }
            else if(fInfo.pulBelligi==='$'){
                kursDol = fInfo.bahasy*$scope.consDollar;
            }
            fInfo.bahasy = kursDol;
            //Tolemeli puly ba bolsa aydar yaly
            fInfo.tolemeli = 'yok';
            //20-100     //5-25     //100-500=25/1
            //100-200    //25-50    //500-1000=50/2
            //200-2000   //50-500   //1000-10000=1.25/5
            //2000-+++   //500-+++  //10000=2.5/10
            if($scope.diliTmRu==="TM") {
                if ($scope.kusrlarInter.pultoleADMIN) {
                    if (fInfo.bahasy >= 20) {
                        if (fInfo.bahasy >= 100) {
                            if (fInfo.bahasy >= 200) {
                                if (fInfo.bahasy >= 2000) {
                                    $scope.showAlert('Siziň bildirişiňiz "2000 манат (ТМТ)"-dan geçdi', 'Bildirişiňizi aktiwny etmek isleseňiz şu nomera ' + $scope.kusrlarInter.telefonADMIN + ' bildirişiň ID-sini ýazyp we "' + $scope.kusrlarInter.tole10000 + ' manat (ТМТ)" ugratmaly (Öz ID-zi "Мои Обявлении" bölüminde görüp bilersiňiz!). Goşmaça maglumatlary "Обратная Связь" we "Правила Использование" bölüminde');
                                }
                                else if (fInfo.bahasy < 2000) {
                                    $scope.showAlert('Siziň bildirişiňiz "200 манат (ТМТ)"-dan geçdi', 'Bildirişiňizi aktiwny etmek isleseňiz şu nomera ' + $scope.kusrlarInter.telefonADMIN + ' bildirişiň ID-sini ýazyp we "' + $scope.kusrlarInter.tole1000 + ' manat (ТМТ)" ugratmaly (Öz ID-zi "Мои Обявлении" bölüminde görüp bilersiňiz!). Goşmaça maglumatlary "Обратная Связь" we "Правила Использование" bölüminde');
                                }
                            }
                            else if (fInfo.bahasy < 200) {
                                $scope.showAlert('Siziň bildirişiňiz "100 манат (ТМТ)"-dan geçdi', 'Bildirişiňizi aktiwny etmek isleseňiz şu nomera ' + $scope.kusrlarInter.telefonADMIN + ' bildirişiň ID-sini ýazyp we "' + $scope.kusrlarInter.tole500 + ' manat (ТМТ)" ugratmaly (Öz ID-zi "Мои Обявлении" bölüminde görüp bilersiňiz!). Goşmaça maglumatlary "Обратная Связь" we "Правила Использование" bölüminde');
                            }
                        }
                        else if (fInfo.bahasy < 100) {
                            $scope.showAlert('Siziň bildirişiňiz "20 манат (ТМТ)"-dan geçdi', 'Bildirişiňizi aktiwny etmek isleseňiz şu nomera ' + $scope.kusrlarInter.telefonADMIN + ' bildirişiň ID-sini ýazyp we "' + $scope.kusrlarInter.tole20 + ' manat (ТМТ)" ugratmaly (Öz ID-zi "Мои Обявлении" bölüminde görüp bilersiňiz!). Goşmaça maglumatlary "Обратная Связь" we "Правила Использование" bölüminde');
                        }
                        fInfo.tolemeli = 'hawa';
                    }
                }
            }
            if($scope.diliTmRu==="RU"){
                if($scope.kusrlarInter.pultoleADMIN) {
                    if (fInfo.bahasy >= 20) {
                        if (fInfo.bahasy >= 100) {
                            if (fInfo.bahasy >= 200) {
                                if (fInfo.bahasy >= 2000) {
                                    $scope.showAlert('Ваше объявление превышает отметку "2000 манат (ТМТ)"', 'Для активации объявление вам надо отправить "'+ $scope.kusrlarInter.tole10000 +' манат (ТМТ)" и сообщение с вашим ID на номер '+ $scope.kusrlarInter.telefonADMIN +' (Ваш ID можете увидет в пункте "Мои Обявлении"). Дополнительую информацию вы можете узнать в пункте "Обратная Связь" и "Правила Использование"');
                                }
                                else if (fInfo.bahasy < 2000) {
                                    $scope.showAlert('Ваше объявление превышает отметку "200 манат (ТМТ)"', 'Для активации объявление вам надо отправить "'+ $scope.kusrlarInter.tole1000 +' манат (ТМТ)" и сообщение с вашим ID на номер '+ $scope.kusrlarInter.telefonADMIN +' (Ваш ID можете увидет в пункте "Мои Обявлении"). Дополнительную информацию вы можете узнать в пункте "Обратная Связь" и "Правила Использование"');
                                }
                            }
                            else if (fInfo.bahasy < 200) {
                                $scope.showAlert('Ваше объявление превышает отметку "100 манат (ТМТ)"', 'Для активации объявление вам надо отправить "'+ $scope.kusrlarInter.tole500 +' манат (ТМТ)" и сообщение с вашим ID на номер '+ $scope.kusrlarInter.telefonADMIN +' (Ваш ID можете увидет в пункте "Мои Обявлении"). Дополнительную информацию вы можете узнать в пункте "Обратная Связь" и "Правила Использование"');
                            }
                        }
                        else if (fInfo.bahasy < 100) {
                            $scope.showAlert('Ваше объявление превышает отметку "20 манат (ТМТ)"', 'Для активации объявление вам надо отправить "'+ $scope.kusrlarInter.tole20 +' манат (ТМТ)" и сообщение с вашим ID на номер '+ $scope.kusrlarInter.telefonADMIN +' (Ваш ID можете увидет в пункте "Мои Обявлении"). Дополнительную информацию вы можете узнать в пункте "Обратная Связь" и "Правила Использование"');
                        }
                        fInfo.tolemeli = 'hawa';
                    }
                }
            }
            // console.log('BU:', fInfo)
            // console.log('BU2:', fInfoKatalog)
////////////////////////////////////////////////////////////////////////////////////////////
            //Haysy bazadan skacat etmelsini bilmek ucin
            facHaysyBazadanZagruzkaEtmeli.haysyKatKabuletmak2(fInfoKatalog);
            var haysyBaza2 = facHaysyBazadanZagruzkaEtmeli.haysyKatUgratmak2();
            // console.log('haysyBaza2BARLAG:', haysyBaza2)
            // //Baza File yazmak ucin bir setire duzup ugratya
            // $scope.yarayaTawList = '';
            // // $scope.yarayaTawListBazaName = '';
            // //Eger on yaraya diyip bellemedik bolsa
            // if($scope.userBazaCook.yarayaTawArray) {
            //     $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
            //     $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
            // }
            // $scope.yarayaTawUser.push(infoKeyT);
            // $scope.yarayaTawUserBN.push(haysyBaza);
            // if($scope.yarayaTawUser) {
            //     for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
            //         if ($scope.yarayaTawList === '') {
            //             $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
            //         }
            //         else {
            //             $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
            //         }
            //     }
            // }
            // //Uzyn spisek edip gosýa
            // $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
            // //Uzyn massiw edip gosya
            // $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
            // $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
            // $http({
            //     method: "POST",
            //     url: "http://a0109349.xsph.ru/useryar",
            //     data : $scope.userBazaCook
            // }).then(function (newDATA) {
            //     $cookieStore.put('loginUserBaza', $scope.userBazaCook);
            //     // console.log('Hay Baz Bildim:', haysyBaza);
            // });
///////////////////////////////////////////////////////////////////////////////////////////

            if(fInfoKatalog.katUra1 == 'Transport') {
                if(fInfoKatalog.katUra2 == 'Awtoulaglar') {
                    //Marka sifrda sony ada owurmek ucin wagtlayyn peremenny
                    fInfo.bahasyname="Bahasy";
                    var markalarWagtlayynca = '';
                    for (var i = 0; i < $scope.markalar.length; i++) {
                        if ($scope.markalar[i].value == fInfo.marka) {
                            markalarWagtlayynca = $scope.markalar[i].name;
                            break;
                        }
                    }
                    var modlURL = "http://api.auto.ria.com/categories/1/marks/" +fInfo.marka+ "/models";
                    // $scope.modelName = facAutoModel.gaytarModeller(fInfo.marka).query();
                    if(fInfo.modl) {
                        $http({
                            method: "GET",
                            url: modlURL
                        }).then(function (newDATA) {
                            for (var e = 0; e < newDATA.data.length; e++) {
                                if (newDATA.data[e].value == fInfo.modl) {
                                    fInfo.modlAdy = newDATA.data[e].name;
                                    fInfo.markaAdy = markalarWagtlayynca;
                                    fInfo.wagty = new Date();
                                    fInfo.katUra1 = fInfoKatalog.katUra1;
                                    fInfo.katUra2 = fInfoKatalog.katUra2;
                                    fInfo.katUra3 = fInfoKatalog.katUra3;
                                    fInfo.katUra4 = undefined;
                                    fInfo.userID = $scope.userBazaCook.yaraya;
                                    //Severe Ugratya
                                    $http({
                                        method: "POST",
                                        url: "http://a0109349.xsph.ru/tawartraawt",
                                        data: fInfo
                                    }).then(function (newItem) {
                                        fInfo.idSQL = newItem.data;
                                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartra", data: fInfo})
                                        $http({
                                            method: "POST",
                                            url: "http://a0109349.xsph.ru/tawar",
                                            data: fInfo
                                        }).then(function (newItem) {
                                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                            //Baza File yazmak ucin bir setire duzup ugratya
                                            $scope.yarayaTawList = '';
                                            // $scope.yarayaTawListBazaName = '';
                                            //Eger on yaraya diyip bellemedik bolsa
                                            if ($scope.userBazaCook.yarayaTawArray) {
                                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                            }
                                            $scope.yarayaTawUser.push(fInfo.idSQL);
                                            $scope.yarayaTawUserBN.push(haysyBaza2);
                                            if ($scope.yarayaTawUser) {
                                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                                    if ($scope.yarayaTawList === '') {
                                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                                    }
                                                    else {
                                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                                    }
                                                }
                                            }
                                            //Uzyn spisek edip gosýa
                                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                            //Uzyn massiw edip gosya
                                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                            $http({
                                                method: "POST",
                                                url: "http://a0109349.xsph.ru/usertaw",
                                                data: $scope.userBazaCook
                                            }).then(function (newDATA) {
                                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                                console.log('COOKI SON', $scope.userBazaCook);
                                            });
                                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                            //
                                            if($scope.diliTmRu==='TM') {
                                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz goşuldy');
                                            }
                                            if($scope.diliTmRu==='RM') {
                                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень');
                                            }
                                            $scope.formInfo = {};
                                            console.log('Yazaydymay Umumy:', newItem)
                                            $location.path('/menu.home');
                                        });
                                    });
                                    break;
                                }
                            }
                        });
                    }else{
                        fInfo.markaAdy = markalarWagtlayynca;
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = undefined;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartraawt", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawartra", data : fInfo})
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                }
                if(fInfoKatalog.katUra2 == 'Matorlar we Mototehnikalar') {
                    $scope.motoSQL =  $resource('http://a0109349.xsph.ru/tawartramoto/:id',{id:'@id'});
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;

                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartramoto", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartra", data : fInfo})
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem2) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Gruzowikler we Spestehnikalar') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartragruz", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartra", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Suw Transportlary') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartrasuw", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartra", data : fInfo})
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Zapçastlar we Bezegler'){
                    fInfo.bahasyname="Bahasy";
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = undefined;
                    if(fInfoKatalog.nameMasynUcin) {
                        fInfo.nameMasynUcin = fInfoKatalog.nameMasynUcin;
                    }
                    if(fInfoKatalog.tekerinBolumi) {
                        fInfo.tekerinBolumi = fInfoKatalog.tekerinBolumi;
                    }
                    // console.log('Bii2:')
                        fInfo.userID = $scope.userBazaCook.yaraya;
                    // console.log('Bii3:')
                        fInfo.idSQL = '';
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartrazapcast", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            // console.log('Bii4:')
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawartra", data : fInfo})
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                // console.log('Bii5:')
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    // }
                }
            }

            if(fInfoKatalog.katUra1 == 'Emlak') {
                if(fInfoKatalog.katUra2 == 'Kwartira') {
                    fInfo.bahasyname="Bahasy";
                    if (fInfoKatalog.katUra3 == 'Satlyk') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlkwartirasatlyk", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlkwartira", data : fInfo})
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo})
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                    if (fInfoKatalog.katUra3 == 'Satyn aljak') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlkwartirasatyna", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlkwartira", data : fInfo})
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo})
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                    if (fInfoKatalog.katUra3 == 'Hakyna bermek') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlkwartirahakyna", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlkwartira", data : fInfo})
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo})
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                    if (fInfoKatalog.katUra3 == 'Hakyna tutjak') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlkwartirahakynaal", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlkwartira", data : fInfo})
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo})
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                }
                if(fInfoKatalog.katUra2 == 'Öý we Daça') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = fInfoKatalog.katUra4;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremloydac", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo})
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Mellek') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = fInfoKatalog.katUra4;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlmellek", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Garaž we Maşyn goýara ýer') {
                    fInfo.bahasyname="Bahasy";
                    if (fInfoKatalog.katUra3 == 'Satlyk') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlgarazsatlyk", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlgaraz", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                    if (fInfoKatalog.katUra3 == 'Satyn aljak') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlgarazsatynal", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlgaraz", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                    if (fInfoKatalog.katUra3 == 'Hakyna bermek') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlgarazhakyna", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlgaraz", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                    if (fInfoKatalog.katUra3 == 'Hakyna tutjak') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlgarazhakynaal", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremlgaraz", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                }
                if(fInfoKatalog.katUra2 == 'Täjirçilik emlägi') {
                    fInfo.bahasyname="Bahasy";
                    if (fInfoKatalog.katUra3 == 'Satlyk') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremltajirsatlyk", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremltajir", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                    console.log('COOKI SON', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                    if (fInfoKatalog.katUra3 == 'Satyn aljak') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremltajirsatynal", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremltajir", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                    if (fInfoKatalog.katUra3 == 'Hakyna bermek') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremltajirhakyna", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremltajir", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                    if (fInfoKatalog.katUra3 == 'Hakyna tutjak') {
                        fInfo.wagty = new Date();
                        fInfo.katUra1 = fInfoKatalog.katUra1;
                        fInfo.katUra2 = fInfoKatalog.katUra2;
                        fInfo.katUra3 = fInfoKatalog.katUra3;
                        fInfo.katUra4 = fInfoKatalog.katUra4;
                        fInfo.userID = $scope.userBazaCook.yaraya;
                        //Severe Ugratya
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremltajirhakynaal", data : fInfo}).then(function (newItem) {
                            fInfo.idSQL  = newItem.data;
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawaremltajir", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawareml", data : fInfo});
                            $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                //Baza File yazmak ucin bir setire duzup ugratya
                                $scope.yarayaTawList = '';
                                // $scope.yarayaTawListBazaName = '';
                                //Eger on yaraya diyip bellemedik bolsa
                                if($scope.userBazaCook.yarayaTawArray) {
                                    $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                    $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                                }
                                $scope.yarayaTawUser.push(fInfo.idSQL);
                                $scope.yarayaTawUserBN.push(haysyBaza2);
                                if($scope.yarayaTawUser) {
                                    for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                        if ($scope.yarayaTawList === '') {
                                            $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                        else {
                                            $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                        }
                                    }
                                }
                                //Uzyn spisek edip gosýa
                                $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                                //Uzyn massiw edip gosya
                                $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                                $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                                $http({
                                    method: "POST",
                                    url: "http://a0109349.xsph.ru/usertaw",
                                    data : $scope.userBazaCook
                                }).then(function (newDATA) {
                                    $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                                });
                                //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                                if($scope.diliTmRu==='TM') {
                                    $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                                }
                                if($scope.diliTmRu==='RU') {
                                    $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                    console.log(newItem.data)
                                }
                                $scope.formInfo = {};
                                $location.path('/menu.home');
                            });
                        });
                    }
                }
            }

            if(fInfoKatalog.katUra1 == 'Iş') {
                if(fInfoKatalog.katUra2 == 'Iş gözleýän') {
                    fInfo.bahasyname="Garaşylýan Aýlyk";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarishishgoz", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarish", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {

                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Işgär Gözleýäň') {
                    fInfo.bahasyname="Garaşylýan Aýlyk";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarishishgargoz", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarish", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {

                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
            }

            if(fInfoKatalog.katUra1 == 'Hyzmat') {
                if(fInfoKatalog.katUra2 == 'Toý') {
                    fInfo.bahasyname="Bir Ornuň Tölegi";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyztoy", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Maşyn/Ulaglar') {
                    fInfo.bahasyname="Tölegi";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyzmasyn", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Tikin Maşyn') {
                    fInfo.bahasyname="Tölegi";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyztikin", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Tehnika') {
                    fInfo.bahasyname="Tölegi";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyztehnika", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Gurluşyk') {
                    fInfo.bahasyname="Tölegi";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyzgurlus", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Jaý/Öý Remont') {
                    fInfo.bahasyname="Tölegi";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyzjay", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarhyz", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
            }

            if(fInfoKatalog.katUra1 == 'Öý-Hojalyk üçin') {
                fInfo.bahasyname="Bahasy";
                if(fInfoKatalog.katUra2 == 'Halylar we Keçeler') {
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhojhaly", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhoj", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Mebeller') {
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhojmellek", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhoj", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Posuda we Harytlar') {
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhojposuda", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhoj", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Gurluşyk Harytlary') {
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhojgurlus", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaroyhoj", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
            }

            if(fInfoKatalog.katUra1 == 'Harytlar') {
                if(fInfoKatalog.katUra2 == 'Guýma') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharytguyma", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharyt", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Demirden') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharytdemir", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharyt", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Agaçdan') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharytagac", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharyt", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Gurluşyk üçin') {
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    if(fInfoKatalog.katUra3==="Sement"){fInfo.bahasyname="Bir Haltaň Bahasy";}
                    if(fInfoKatalog.katUra3==="Şipr"){fInfo.bahasyname="Biriniň Bahasy";}
                    if(fInfoKatalog.katUra3==="Agaç"){fInfo.bahasyname="Bahasy";}
                    if(fInfoKatalog.katUra3==="Çagyl"){fInfo.bahasyname="Bir Tonnaň Bahasy";}
                    if(fInfoKatalog.katUra3==="Kerpiç"){fInfo.bahasyname="Müň Kerpiç Bahasy";}
                    if(fInfoKatalog.katUra3==="Panel"){fInfo.bahasyname="Bahasy";}
                    if(fInfoKatalog.katUra3==="we Başgalar"){fInfo.bahasyname="Bahasy";}
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharytgurlus", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharyt", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Oba Hojalyk üçin') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharytobahoj", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarharyt", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
            }

            if(fInfoKatalog.katUra1 == 'Egin Eşikler we Bujiteria') {
                if(fInfoKatalog.katUra2 == 'Gelin/Gyzlar üçin') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaregingelin", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaregin", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Erkekler üçin') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawareginerkek", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaregin", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Çagalar üçin') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawaregincaga", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawaregin", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
            }

            if(fInfoKatalog.katUra1 == 'Tehnika') {
                if(fInfoKatalog.katUra2 == 'Telefon') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikatelefon", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Notebook') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikanote", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Kompýuter we Printer') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikakomp", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Audio we Wideo') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikaaudio", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Öý üçin') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikaoyu", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Aş hana üçin/Gaz jaý') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikaasu", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Howa we Klimat Enjamlary') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikahowa", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Fotoapparatla we Dürbiler') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikafoto", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Kompýuter üçin Harytlar') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnikakompoyun", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawartehnika", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
            }

            if(fInfoKatalog.katUra1 == 'Maldarçylyk we Bagbançylyk') {
                if(fInfoKatalog.katUra2 == 'Bag-Bakja') {
                    fInfo.bahasyname="Bir kg-yň Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbagbag", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbag", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Nahallar we Şitiller') {
                    if (fInfoKatalog.katUra3==="Ýolka"){fInfo.bahasyname="Ýüz Düýbiň Bahasy";}
                    if (fInfoKatalog.katUra3==="Arça"){fInfo.bahasyname="Ýüz Düýbiň Bahasy";}
                    if (fInfoKatalog.katUra3==="Şitiller"){fInfo.bahasyname="Müň Şitileň Bahasy";}
                    if (fInfoKatalog.katUra3==="Baglar"){fInfo.bahasyname="Ýüz Nahalyň Bahasy";}
                    if (fInfoKatalog.katUra3==="Güller"){fInfo.bahasyname="Bir Düýbiň Bahasy";}
                    if (fInfoKatalog.katUra3==="we Başgalar"){fInfo.bahasyname="Bahasy";}
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbagnahal", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbag", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Iri Haýwanlar') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbagiri", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbag", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Uşak Haýwanlar') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbagusak", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarmaldarbag", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
            }

            if(fInfoKatalog.katUra1 == 'Güýmenje we Dynç Alyş') {
                if(fInfoKatalog.katUra2 == 'Welosiped') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymenwelos", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymen", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Bilet we Dynç Alyş') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymenbilet", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymen", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Muzikantlar üçin') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymenmuzik", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymen", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Sport') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymensport", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymen", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
                if(fInfoKatalog.katUra2 == 'Oýunlar we Programmalar') {
                    fInfo.bahasyname="Bahasy";
                    fInfo.wagty = new Date();
                    fInfo.katUra1 = fInfoKatalog.katUra1;
                    fInfo.katUra2 = fInfoKatalog.katUra2;
                    fInfo.katUra3 = fInfoKatalog.katUra3;
                    fInfo.katUra4 = undefined;
                    fInfo.userID = $scope.userBazaCook.yaraya;
                    //Severe Ugratya
                    $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymenoyun", data : fInfo}).then(function (newItem) {
                        fInfo.idSQL  = newItem.data;
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawarguymen", data : fInfo});
                        $http({method: "POST", url: "http://a0109349.xsph.ru/tawar", data : fInfo}).then(function (newItem) {
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////
                            //Baza File yazmak ucin bir setire duzup ugratya
                            $scope.yarayaTawList = '';
                            // $scope.yarayaTawListBazaName = '';
                            //Eger on yaraya diyip bellemedik bolsa
                            if($scope.userBazaCook.yarayaTawArray) {
                                $scope.yarayaTawUser = $scope.userBazaCook.yarayaTawArray;
                                $scope.yarayaTawUserBN = $scope.userBazaCook.yarayaTawArrayBN;
                            }
                            $scope.yarayaTawUser.push(fInfo.idSQL);
                            $scope.yarayaTawUserBN.push(haysyBaza2);
                            if($scope.yarayaTawUser) {
                                for (var ar = 0; ar < $scope.yarayaTawUser.length; ar++) {
                                    if ($scope.yarayaTawList === '') {
                                        $scope.yarayaTawList = $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                    else {
                                        $scope.yarayaTawList = $scope.yarayaTawList + '+' + $scope.yarayaTawUser[ar] + '+' + $scope.yarayaTawUserBN[ar];
                                    }
                                }
                            }
                            //Uzyn spisek edip gosýa
                            $scope.userBazaCook.yarayaTawArrayList = $scope.yarayaTawList;
                            //Uzyn massiw edip gosya
                            $scope.userBazaCook.yarayaTawArray = $scope.yarayaTawUser;
                            $scope.userBazaCook.yarayaTawArrayBN = $scope.yarayaTawUserBN;
                            $http({
                                method: "POST",
                                url: "http://a0109349.xsph.ru/usertaw",
                                data : $scope.userBazaCook
                            }).then(function (newDATA) {
                                $cookieStore.put('loginUserBaza', $scope.userBazaCook);
                            });
                            //////////////////////////////////////////////COOOOOOOOOKI///////////////////////////////////////////

                            if($scope.diliTmRu==='TM') {
                                $scope.showAlert('Gülýaly', 'Ugradan bildirişiňiz BAZA goşuldy');
                            }
                            if($scope.diliTmRu==='RU') {
                                $scope.showAlert('Отлично', 'Отправленное объявление добавлень на БАЗУ');
                                console.log(newItem.data)
                            }
                            $scope.formInfo = {};
                            $location.path('/menu.home');
                        });
                    });
                }
            }
        };
    }])

    .controller('UploadController', function ($scope){
        var imageUpload = new ImageUpload();
        $scope.file = {};
        $scope.upload = function() {
            imageUpload.push($scope.file, function(data){
                console.log('File uploaded Successfully', $scope.file, data);
                $scope.uploadUri = data.url;
                $scope.$digest();
            });
        };
    })

    .controller('slideShowCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


    }]);
 