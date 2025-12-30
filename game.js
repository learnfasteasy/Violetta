// Oyun verileri - 16 Konu
const topics = [
    // KONU 1: Fiilimsiler
    {
        name: "Fiilimsiler",
        questions: [
            {
                question: '"Koşmak sağlığa faydalıdır." cümlesinde "koşmak" hangi fiilimsi türüdür?',
                options: ["İsim-fiil", "Sıfat-fiil", "Zarf-fiil", "Fiil değildir"],
                correct: 0,
                explanation: 'Doğru! "Koşmak" bir işin adıdır, yani isim-fiildir. Tıpkı "elma" gibi bir isimdir.'
            },
            {
                question: '"Kırılan bardakları topladım." cümlesinde "kırılan" hangi fiilimsi türüdür?',
                options: ["İsim-fiil", "Sıfat-fiil", "Zarf-fiil", "Mastar"],
                correct: 1,
                explanation: 'Doğru! "Kırılan" bardağın özelliğini anlatıyor, yani sıfat-fiildir.'
            },
            {
                question: '"Eve koşarak gittim." cümlesinde "koşarak" hangi fiilimsi türüdür?',
                options: ["İsim-fiil", "Sıfat-fiil", "Zarf-fiil", "Fiil değildir"],
                correct: 2,
                explanation: 'Doğru! "Koşarak" nasıl gittiğini anlatıyor, yani zarf-fiildir.'
            },
            {
                question: 'Fiilimsilerin ortak özelliği nedir?',
                options: ["Fiil kökenlidirler", "Çekimlenmezler", "Kip ve şahıs eki almazlar", "Hepsi doğru"],
                correct: 3,
                explanation: 'Doğru! Fiilimsiler fiil kökenli ama fiil gibi çekimlenmezler.'
            },
            {
                question: 'Hangisi isim-fiil örneğidir?',
                options: ["Yürüyen adam", "Yürümek zordur", "Yürüyerek gitti", "Yürüdü"],
                correct: 1,
                explanation: 'Doğru! "Yürümek" bir işin adıdır, isim-fiildir.'
            }
        ]
    },
    // KONU 2: Cümlenin Öğeleri
    {
        name: "Cümlenin Öğeleri",
        questions: [
            {
                question: '"Ali topu attı." cümlesinde yüklem nedir?',
                options: ["Ali", "Topu", "Attı", "Ali topu"],
                correct: 2,
                explanation: 'Doğru! "Attı" yüklemdir. Cümlenin patronudur, o olmazsa cümle olmaz.'
            },
            {
                question: '"Kedi sosisleri yedi." cümlesinde özne nedir?',
                options: ["Kedi", "Sosisleri", "Yedi", "Kedi sosisleri"],
                correct: 0,
                explanation: 'Doğru! "Kim yedi?" sorusuna "Kedi" cevabı gelir, o özne.'
            },
            {
                question: '"Ali camı kırdı." cümlesinde nesne nedir?',
                options: ["Ali", "Camı", "Kırdı", "Ali camı"],
                correct: 1,
                explanation: 'Doğru! "Neyi kırdı?" sorusuna "Camı" cevabı gelir, o nesne.'
            },
            {
                question: '"Annem pazara gitti." cümlesinde "pazara" hangi öğedir?',
                options: ["Özne", "Nesne", "Yer tamlayıcısı", "Zarf tamlayıcısı"],
                correct: 2,
                explanation: 'Doğru! "Nereye gitti?" sorusuna "Pazara" cevabı gelir, yer tamlayıcısıdır.'
            },
            {
                question: 'Öğeleri bulurken hangi sırayı takip etmeliyiz?',
                options: ["Önce özne, sonra yüklem", "Önce nesne, sonra özne", "Önce yüklem, sonra özne", "Fark etmez"],
                correct: 2,
                explanation: 'Doğru! Altın kural: Önce patronu (yüklem), sonra işçiyi (özne) bul!'
            }
        ]
    },
    // KONU 3: Fiil Çatısı
    {
        name: "Fiil Çatısı",
        questions: [
            {
                question: '"Ali sosisliyi yedi." cümlesi hangi çatıdadır?',
                options: ["Etken", "Edilgen", "Geçişli", "Geçişsiz"],
                correct: 0,
                explanation: 'Doğru! İşi yapan (Ali) belli, bu etken çatıdır.'
            },
            {
                question: '"Sosisli yendi." cümlesi hangi çatıdadır?',
                options: ["Etken", "Edilgen", "Geçişli", "Geçişsiz"],
                correct: 1,
                explanation: 'Doğru! İşi yapan belli değil, fail meçhul. Bu edilgen çatıdır.'
            },
            {
                question: '"Onu sevdim" diyebiliyorsak bu fiil hangi tür?',
                options: ["Etken", "Edilgen", "Geçişli", "Geçişsiz"],
                correct: 2,
                explanation: 'Doğru! Başına "Onu" gelebiliyorsa geçişli fiildir.'
            },
            {
                question: '"Onu uyudum" denilir mi?',
                options: ["Evet, geçişli fiildir", "Hayır, geçişsiz fiildir", "Bazen", "Duruma göre değişir"],
                correct: 1,
                explanation: 'Doğru! "Onu uyudum" saçma, demek ki uyumak geçişsiz fiildir.'
            },
            {
                question: '"Hava çok güzeldi." cümlesinde çatı aranır mı?',
                options: ["Evet", "Hayır", "Bazen", "Duruma göre"],
                correct: 1,
                explanation: 'Doğru! "Güzel" fiil değil isimdir, bu yüzden çatı aranmaz.'
            }
        ]
    },
    // KONU 4: Sözcükte Anlam
    {
        name: "Sözcükte Anlam",
        questions: [
            {
                question: '"Bugün hava çok soğuk." cümlesinde "soğuk" hangi anlamda?',
                options: ["Gerçek anlam", "Mecaz anlam", "Terim anlam", "Sesteş"],
                correct: 0,
                explanation: 'Doğru! Gerçekten hava derecesi düşük, bu gerçek anlamdır.'
            },
            {
                question: '"Bana çok soğuk davrandı." cümlesinde "soğuk" hangi anlamda?',
                options: ["Gerçek anlam", "Mecaz anlam", "Terim anlam", "Sesteş"],
                correct: 1,
                explanation: 'Doğru! Samimiyetsiz davranmak demek, bu mecaz anlamdır.'
            },
            {
                question: 'Cevap - Yanıt kelimeleri hangi ilişkidedir?',
                options: ["Eş anlamlı", "Zıt anlamlı", "Sesteş", "Terim"],
                correct: 0,
                explanation: 'Doğru! Yazılışları farklı ama anlamları aynı, eş anlamlıdırlar.'
            },
            {
                question: 'Siyah - Beyaz kelimeleri hangi ilişkidedir?',
                options: ["Eş anlamlı", "Zıt anlamlı", "Sesteş", "Terim"],
                correct: 1,
                explanation: 'Doğru! Birbirinin tam tersi, zıt anlamlıdırlar.'
            },
            {
                question: '"Yüz lira" ve "Denizde yüz" cümlelerindeki "yüz" kelimeleri hangi ilişkidedir?',
                options: ["Eş anlamlı", "Zıt anlamlı", "Sesteş", "Terim"],
                correct: 2,
                explanation: 'Doğru! Yazılışları aynı ama anlamları alakasız, sesteştirler.'
            }
        ]
    },
    // KONU 5: Cümlede Anlam
    {
        name: "Cümlede Anlam",
        questions: [
            {
                question: '"Türkiye\'nin başkenti Ankara\'dır." hangi anlam türüdür?',
                options: ["Öznel", "Nesnel", "Mecaz", "Terim"],
                correct: 1,
                explanation: 'Doğru! Herkes için aynı, kanıtlanabilir, bu nesnel anlamdır.'
            },
            {
                question: '"En iyi dondurma çikolatalıdır." hangi anlam türüdür?',
                options: ["Öznel", "Nesnel", "Mecaz", "Terim"],
                correct: 0,
                explanation: 'Doğru! Kişiden kişiye değişir, bu öznel anlamdır.'
            },
            {
                question: '"Kar yağdığı için okul tatil edildi." hangi anlam ilişkisi?',
                options: ["Sebep-sonuç", "Amaç-sonuç", "Koşul-sonuç", "Zıtlık"],
                correct: 0,
                explanation: 'Doğru! İki olay da gerçekleşmiş, sebep-sonuç ilişkisi var.'
            },
            {
                question: '"LGS\'yi kazanmak için çalışıyorum." hangi anlam ilişkisi?',
                options: ["Sebep-sonuç", "Amaç-sonuç", "Koşul-sonuç", "Zıtlık"],
                correct: 1,
                explanation: 'Doğru! Hedefe henüz ulaşılmadı, amaç-sonuç ilişkisi var.'
            },
            {
                question: '"Sütünü içersen boyun uzar." hangi anlam ilişkisi?',
                options: ["Sebep-sonuç", "Amaç-sonuç", "Koşul-sonuç", "Zıtlık"],
                correct: 2,
                explanation: 'Doğru! Bir şeyin olması başka şeye bağlı, koşul-sonuç ilişkisi.'
            }
        ]
    },
    // KONU 6: Deyimler ve Atasözü
    {
        name: "Deyimler ve Atasözü",
        questions: [
            {
                question: '"Karnım zil çalıyor" nedir?',
                options: ["Deyim", "Atasözü", "Terim", "İkileme"],
                correct: 0,
                explanation: 'Doğru! Sadece durumu anlatır, deyimdir.'
            },
            {
                question: '"Damlaya damlaya göl olur" nedir?',
                options: ["Deyim", "Atasözü", "Terim", "İkileme"],
                correct: 1,
                explanation: 'Doğru! Öğüt verir, tam cümledir, atasözüdür.'
            },
            {
                question: 'Deyimlerle atasözlerinin farkı nedir?',
                options: ["Deyimler öğüt verir", "Atasözleri durum anlatır", "Deyimler durum, atasözleri öğüt verir", "Fark yok"],
                correct: 2,
                explanation: 'Doğru! Deyimler durumu anlatır, atasözleri öğüt verir.'
            },
            {
                question: 'Atasözleri değiştirilebilir mi?',
                options: ["Evet, istediğimiz gibi", "Hayır, kalıplaşmışlardır", "Bazen", "Duruma göre"],
                correct: 1,
                explanation: 'Doğru! Atasözleri kalıplaşmıştır, değiştirilemez.'
            },
            {
                question: '"Gözden düşmek" ne tür sözdür?',
                options: ["Deyim", "Atasözü", "Terim", "İkileme"],
                correct: 0,
                explanation: 'Doğru! Bir durumu anlatır, deyimdir.'
            }
        ]
    },
    // KONU 7: Cümle Çeşitleri
    {
        name: "Cümle Çeşitleri",
        questions: [
            {
                question: '"Ali topu attı." hangi cümle türüdür?',
                options: ["İsim cümlesi", "Fiil cümlesi", "Devrik cümle", "Bağlı cümle"],
                correct: 1,
                explanation: 'Doğru! Yüklem "attı" fiildir, bu fiil cümlesidir.'
            },
            {
                question: '"Hava çok güzeldi." hangi cümle türüdür?',
                options: ["İsim cümlesi", "Fiil cümlesi", "Devrik cümle", "Bağlı cümle"],
                correct: 0,
                explanation: 'Doğru! Yüklem "güzel" isimdir, bu isim cümlesidir.'
            },
            {
                question: '"Eve geldim." hangi cümle türüdür?',
                options: ["Kurallı cümle", "Devrik cümle", "Birleşik cümle", "Sıralı cümle"],
                correct: 0,
                explanation: 'Doğru! Yüklem sonda, bu kurallı (düz) cümledir.'
            },
            {
                question: '"Geldim eve." hangi cümle türüdür?',
                options: ["Kurallı cümle", "Devrik cümle", "Birleşik cümle", "Sıralı cümle"],
                correct: 1,
                explanation: 'Doğru! Yüklem başta, bu devrik cümledir (Yoda gibi).'
            },
            {
                question: '"Ali koşarak eve geldi." hangi cümle türüdür?',
                options: ["Basit cümle", "Birleşik cümle", "Sıralı cümle", "Bağlı cümle"],
                correct: 1,
                explanation: 'Doğru! Bir yüklem + bir fiilimsi var, birleşik cümledir.'
            }
        ]
    },
    // KONU 8: Yazım Kuralları
    {
        name: "Yazım Kuralları",
        questions: [
            {
                question: '"ali" mi yoksa "Ali" mi yazmalıyız?',
                options: ["ali", "Ali", "ALİ", "Fark etmez"],
                correct: 1,
                explanation: 'Doğru! Özel isimler büyük harfle başlar: Ali'
            },
            {
                question: '"Sen de gel" mi yoksa "Sende gel" mi?',
                options: ["Sen de gel", "Sende gel", "Her ikisi de doğru", "Fark etmez"],
                correct: 0,
                explanation: 'Doğru! Cümleden çıkınca "Sen gel" anlamlı, o yüzden ayrı: "Sen de gel"'
            },
            {
                question: '"Evde kaldım" mı yoksa "Ev de kaldım" mı?',
                options: ["Evde kaldım", "Ev de kaldım", "Her ikisi de doğru", "Fark etmez"],
                correct: 0,
                explanation: 'Doğru! Cümleden çıkınca "Ev kaldım" saçma, o yüzden bitişik: "Evde"'
            },
            {
                question: '"Geldin mi" mi yoksa "Geldinmi" mi?',
                options: ["Geldin mi", "Geldinmi", "Her ikisi de doğru", "Fark etmez"],
                correct: 0,
                explanation: 'Doğru! Soru eki "mı/mi" hep ayrı yazılır: "Geldin mi"'
            },
            {
                question: '"Evdekiler" mi yoksa "Evdeki ler" mi?',
                options: ["Evdekiler", "Evdeki ler", "Ev dekiler", "Fark etmez"],
                correct: 0,
                explanation: 'Doğru! "-ler" gelince "Evdekiler" anlamlı, o yüzden bitişik: "Evdeki"'
            }
        ]
    },
    // YENİ KONU 9: Paragraf
    {
        name: "Paragraf",
        questions: [
            {
                question: 'Paragrafın ana düşüncesi nedir?',
                options: ["En uzun cümle", "Yazarın vermek istediği mesaj", "İlk cümle", "Son cümle"],
                correct: 1,
                explanation: 'Doğru! Ana düşünce, yazarın "Sen ne dedim?" sorusunun cevabıdır.'
            },
            {
                question: 'Yardımcı düşünceler ne işe yarar?',
                options: ["Paragrafı uzatır", "Ana düşünceyi destekler", "Okuru sıkar", "Yazar yorulmasın diye"],
                correct: 1,
                explanation: 'Doğru! Yardımcı düşünceler ana fikri ayakta tutan detaylardır.'
            },
            {
                question: 'Paragrafta "Giriş" bölümü ne işe yarar?',
                options: ["Konuya merhaba demek", "Sonuç vermek", "Detay anlatmak", "Okuru yormak"],
                correct: 0,
                explanation: 'Doğru! Giriş konuya nazikçe "Merhaba, ben şundan bahsedeceğim" demektir.'
            },
            {
                question: 'Hangi anlatım tekniği bilgi verir ve ders kitabı gibidir?',
                options: ["Öyküleme", "Betimleme", "Açıklama", "Tartışma"],
                correct: 2,
                explanation: 'Doğru! Açıklama tekniği bilgi vermeye odaklanır, nesnel ve ders kitabı gibidir.'
            },
            {
                question: 'Paragraf sorularında altın kural nedir?',
                options: ["Kendi fikrini katma", "Her zaman uzun cevap ver", "İlk şık doğrudur", "Hızlı oku"],
                correct: 0,
                explanation: 'Doğru! Yazar "Gökyüzü yeşil" diyorsa, o sorunun cevabı "yeşil"dir. Kendi doğrularını bırak!'
            }
        ]
    },
    // YENİ KONU 10: Sözel Muhakeme
    {
        name: "Sözel Muhakeme",
        questions: [
            {
                question: '"Ali, Veli\'den uzundur. Veli, Can\'dan kısadır." İfadesine göre en uzun kim?',
                options: ["Ali", "Veli", "Can", "Bilgi yetersiz"],
                correct: 0,
                explanation: 'Doğru! Ali > Veli > Can sıralaması var. En uzun Ali.'
            },
            {
                question: 'Sözel muhakeme sorularında ne yapmalıyız?',
                options: ["Hızlı cevap vermek", "İpuçları birleştirmek", "Tahmin etmek", "Atlamak"],
                correct: 1,
                explanation: 'Doğru! Dedektif gibi ipuçlarını birleştirip mantık yürütmeliyiz.'
            },
            {
                question: 'Grafik yorumlama sorularında neye dikkat etmeliyiz?',
                options: ["Sadece büyük rakamlara", "Renklere", "Tüm detaylara, köşedeki notlara bile", "Başlığa"],
                correct: 2,
                explanation: 'Doğru! Grafiklerde köşedeki ufacık notlar bile cevap olabilir, her detay önemli!'
            },
            {
                question: 'Pasta grafiğindeki en büyük dilim neyi gösterir?',
                options: ["En az olan", "En çok olan", "Ortalama", "Fark etmez"],
                correct: 1,
                explanation: 'Doğru! Pasta grafiğinde en büyük dilim, en fazla oranı temsil eder.'
            },
            {
                question: 'İnfografiklerde cevap genelde nerede gizlidir?',
                options: ["Başlıkta", "Ortada", "Küçük detaylarda", "Her yerde eşit"],
                correct: 2,
                explanation: 'Doğru! İnfografiklerde köşelerdeki, kenarlardaki ufak notlar çok önemlidir!'
            }
        ]
    },
    // YENİ KONU 11: Noktalama İşaretleri
    {
        name: "Noktalama İşaretleri",
        questions: [
            {
                question: 'Nokta (.) ne zaman kullanılır?',
                options: ["Cümle ortasında", "Cümle sonunda", "Soru sorulurken", "Bağırırken"],
                correct: 1,
                explanation: 'Doğru! Nokta "Tamam, bitti!" der ve cümleyi bitirir.'
            },
            {
                question: '"Oku, adam ol" ile "Oku adam ol" arasındaki fark nedir?',
                options: ["Fark yok", "Virgül anlam değiştirir", "İkisi de yanlış", "Sadece yazım farkı"],
                correct: 1,
                explanation: 'Doğru! Virgül hayat kurtarır! "Oku, adam ol baban gibi eşek olma" vs "Oku adam ol, baban gibi eşek olma"'
            },
            {
                question: 'İki nokta üst üste (:) ne zaman kullanılır?',
                options: ["Cümle sonunda", "Açıklama yaparken", "Soru sorulurken", "Bağırırken"],
                correct: 1,
                explanation: 'Doğru! İki nokta "Bak şimdi, açıklıyorum!" der. Sonrasında detay gelir.'
            },
            {
                question: 'Ünlem işareti (!) ne ifade eder?',
                options: ["Soru", "Heyecan, şaşkınlık", "Açıklama", "Virgülün yerini tutar"],
                correct: 1,
                explanation: 'Doğru! Ünlem "Hey! Dikkat et!" der. Korku, heyecan, şaşkınlık bildirir.'
            },
            {
                question: 'Noktalı virgül (;) ne işe yarar?',
                options: ["Cümle bitirir", "Virgüllerle ayrılmış grupları ayırır", "Soru sorar", "Ünlem yapar"],
                correct: 1,
                explanation: 'Doğru! Noktalı virgül "Virgül yetmedi, ben geldim" der ve büyük grupları ayırır.'
            }
        ]
    },
    // YENİ KONU 12: Anlatım Bozuklukları
    {
        name: "Anlatım Bozuklukları",
        questions: [
            {
                question: '"Hala henüz gelmedi." cümlesinde ne tür bozukluk var?',
                options: ["Gereksiz sözcük", "Yanlış anlam", "Mantık hatası", "Çelişki"],
                correct: 0,
                explanation: 'Doğru! "Hala" ve "henüz" aynı anlama gelir, biri gereksiz. Laf kalabalığı!'
            },
            {
                question: '"Saçları çok büyümüş." cümlesi neden yanlış?',
                options: ["Boy büyür, saç uzar", "Doğru cümle", "Virgül eksik", "Özne yok"],
                correct: 0,
                explanation: 'Doğru! Saç büyümez, uzar. Boy büyür. Kelime yanlış anlamda kullanılmış.'
            },
            {
                question: '"Bu fiyatlar çok pahalı." cümlesinde hata nedir?',
                options: ["Fiyat yüksek olur, ürün pahalı", "Doğru cümle", "Virgül yanlış", "Nokta eksik"],
                correct: 0,
                explanation: 'Doğru! Fiyat pahalı olmaz, yüksek olur. Ürün pahalı olur.'
            },
            {
                question: '"Eminim bugün belki gelir." cümlesindeki sorun nedir?',
                options: ["Çelişen kelimeler", "Virgül eksik", "Özne yok", "Doğru cümle"],
                correct: 0,
                explanation: 'Doğru! Ya eminsin ya belki! İkisini aynı cümlede kullanma, çelişki var.'
            },
            {
                question: '"Bırakın ders çalışmayı, üniversiteyi bile kazanamaz." neden yanlış?',
                options: ["Mantık ve sıralama hatası", "Noktalama yanlış", "Kelime eksik", "Doğru cümle"],
                correct: 0,
                explanation: 'Doğru! Üniversite kazanmak daha zor. "Bırakın üniversiteyi, ders bile çalışamaz" olmalı.'
            }
        ]
    },
    // YENİ KONU 13: Söz Sanatları
    {
        name: "Söz Sanatları",
        questions: [
            {
                question: '"Güneş bize gülümsüyordu." hangi söz sanatıdır?',
                options: ["Benzetme", "Kişileştirme", "Abartma", "Karşıtlık"],
                correct: 1,
                explanation: 'Doğru! Güneşin ağzı yok ki gülsün. İnsan özelliği verilmiş, kişileştirme!'
            },
            {
                question: '"Aslan gibi askerlerimiz var." hangi söz sanatıdır?',
                options: ["Kişileştirme", "Benzetme", "Konuşturma", "Abartma"],
                correct: 1,
                explanation: 'Doğru! "Gibi" var ve askerler aslana benzetiliyor. Bu benzetmedir.'
            },
            {
                question: 'Karınca ağustos böceğine "Çalışsaydın ya!" dedi. Hangi sanat?',
                options: ["Kişileştirme", "Benzetme", "Konuşturma", "Abartma"],
                correct: 2,
                explanation: 'Doğru! Karınca konuşuyor, tırnak içinde söz var. Bu konuşturmadır (intak).'
            },
            {
                question: '"Ağlanacak halimize gülüyoruz." hangi söz sanatıdır?',
                options: ["Benzetme", "Kişileştirme", "Karşıtlık", "Abartma"],
                correct: 2,
                explanation: 'Doğru! Ağlamak ve gülmek zıt kavramlar. Bu karşıtlıktır (tezat).'
            },
            {
                question: '"Seni dünyalar kadar seviyorum." hangi söz sanatıdır?',
                options: ["Benzetme", "Kişileştirme", "Karşıtlık", "Abartma"],
                correct: 3,
                explanation: 'Doğru! Dünya kadar sevmek mümkün mü? Aşırı büyütme var, bu abartmadır (mübalağa).'
            }
        ]
    },
    // YENİ KONU 14: Metin Türleri
    {
        name: "Metin Türleri",
        questions: [
            {
                question: '"Bir varmış bir yokmuş..." diye başlayan metin türü nedir?',
                options: ["Hikaye", "Masal", "Roman", "Fabl"],
                correct: 1,
                explanation: 'Doğru! "Bir varmış bir yokmuş" masalların klasik başlangıcıdır.'
            },
            {
                question: 'Kahramanları hayvan olan ve sonunda ders veren metin türü nedir?',
                options: ["Masal", "Hikaye", "Fabl", "Roman"],
                correct: 2,
                explanation: 'Doğru! Fabl hayvanları konuşturur ve sonunda öğüt verir. Örn: Kaplumbağa ile Tavşan.'
            },
            {
                question: 'Yazarın kendi fikrini kanıt olmadan özgürce anlattığı tür nedir?',
                options: ["Makale", "Deneme", "Roman", "Hikaye"],
                correct: 1,
                explanation: 'Doğru! Deneme "Bence böyle..." der. Kanıt aramaz, özgür düşünür.'
            },
            {
                question: '"Sevgili günlük, bugün..." diye başlayan metin türü nedir?',
                options: ["Anı", "Günlük", "Biyografi", "Deneme"],
                correct: 1,
                explanation: 'Doğru! Günlük o gün, sıcağı sıcağına yazılır ve tarih atılır.'
            },
            {
                question: 'Başkasının hayat hikayesini anlatan metin türü nedir?',
                options: ["Otobiyografi", "Biyografi", "Anı", "Günlük"],
                correct: 1,
                explanation: 'Doğru! Biyografi = Başkasının hayatı. Otobiyografi = Kendi hayatın.'
            }
        ]
    }
];

let currentTopic = 0;
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let selectedOption = -1;
let totalScore = parseInt(localStorage.getItem('totalScore') || '0');
let completedTopicsCount = parseInt(localStorage.getItem('completedTopics') || '0');

function updateMainScore() {
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('completedTopics').textContent = completedTopicsCount + '/14';
    const rate = completedTopicsCount > 0 ? Math.round((totalScore / (completedTopicsCount * 500)) * 100) : 0;
    document.getElementById('successRate').textContent = rate + '%';
}

function startGame(topicIndex) {
    currentTopic = topicIndex;
    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    selectedOption = -1;

    document.querySelector('.menu-screen').classList.remove('active');
    document.querySelector('.game-screen').classList.add('active');

    loadQuestion();
}

function loadQuestion() {
    const topic = topics[currentTopic];
    const question = topic.questions[currentQuestion];

    document.getElementById('questionNumber').textContent = (currentQuestion + 1) + '/5';
    document.getElementById('currentScore').textContent = score;
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('questionText').textContent = question.question;

    const progress = ((currentQuestion + 1) / 5) * 100;
    document.getElementById('progressBar').style.width = progress + '%';

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('explanation').classList.remove('show');
    document.getElementById('checkBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'none';
    selectedOption = -1;
}

function selectOption(index) {
    document.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) {
            opt.classList.add('selected');
        }
    });
    selectedOption = index;
}

function checkAnswer() {
    if (selectedOption === -1) {
        alert('Lütfen bir seçenek seçin!');
        return;
    }

    const question = topics[currentTopic].questions[currentQuestion];
    const options = document.querySelectorAll('.option');

    options.forEach((opt, i) => {
        if (i === question.correct) {
            opt.classList.add('correct');
        } else if (i === selectedOption) {
            opt.classList.add('incorrect');
        }
        opt.onclick = null;
    });

    if (selectedOption === question.correct) {
        score += 100;
        correctAnswers++;
        document.getElementById('currentScore').textContent = score;
        document.getElementById('correctCount').textContent = correctAnswers;
    }

    document.getElementById('explanation').textContent = question.explanation;
    document.getElementById('explanation').classList.add('show');
    document.getElementById('checkBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < 5) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    totalScore += score;
    if (score >= 300) {
        completedTopicsCount++;
    }
    localStorage.setItem('totalScore', totalScore);
    localStorage.setItem('completedTopics', completedTopicsCount);

    document.querySelector('.game-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');

    const percentage = (correctAnswers / 5) * 100;
    let emoji = '🎉';
    let title = 'Tebrikler!';
    let message = '';

    if (percentage === 100) {
        emoji = '🏆';
        title = 'Mükemmel!';
        message = 'Hepsini doğru bildin! Sen bir şampiyonsun! 🌟';
    } else if (percentage >= 80) {
        emoji = '😄';
        title = 'Harika!';
        message = 'Çok iyi gidiyorsun! Böyle devam! 💪';
    } else if (percentage >= 60) {
        emoji = '😊';
        title = 'İyi!';
        message = 'Fena değil! Biraz daha çalışırsan mükemmel olacak! 📚';
    } else {
        emoji = '😅';
        title = 'Çalışmaya Devam!';
        message = 'Konuyu tekrar gözden geçirmelisin. Sen yaparsın! 💪';
    }

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('totalQuestions').textContent = '5';
    document.getElementById('finalCorrect').textContent = correctAnswers;
    document.getElementById('finalScore').textContent = score;
}

function backToMenu() {
    document.querySelector('.game-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.menu-screen').classList.add('active');
    updateMainScore();
}

// Sayfa yüklendiğinde skorları güncelle
updateMainScore();
