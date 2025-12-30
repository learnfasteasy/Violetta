// Oyun verileri - 14 Konu, 140 Soru
const topics = [
    // KONU 1: Fiilimsiler (10 soru)
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
            },
            {
                question: '"Okuyan çocuk başarılı olur." cümlesinde "okuyan" hangi fiilimsidir?',
                options: ["İsim-fiil", "Sıfat-fiil", "Zarf-fiil", "Fiil"],
                correct: 1,
                explanation: 'Doğru! "Okuyan" çocuğun özelliğini anlatır, sıfat-fiildir.'
            },
            {
                question: '"Sessizce odaya girdi." cümlesinde "sessizce" hangi fiilimsidir?',
                options: ["İsim-fiil", "Sıfat-fiil", "Zarf-fiil", "Fiil değildir"],
                correct: 2,
                explanation: 'Doğru! "Sessizce" nasıl girdiğini anlatır, zarf-fiildir.'
            },
            {
                question: '"Gülmek sağlığa iyi gelir." cümlesinde "gülmek" cümlede ne görevindedir?',
                options: ["Özne", "Yüklem", "Nesne", "Zarf tamlayıcısı"],
                correct: 0,
                explanation: 'Doğru! "Ne iyi gelir?" sorusuna "Gülmek" cevabı özne olduğunu gösterir.'
            },
            {
                question: 'Hangisi zarf-fiil eki değildir?',
                options: ["-arak/-erek", "-ıp/-ip/-up/-üp", "-madan/-meden", "-mak/-mek"],
                correct: 3,
                explanation: 'Doğru! "-mak/-mek" isim-fiil ekidir, zarf-fiil eki değil.'
            },
            {
                question: '"Düşünmeden konuşma!" cümlesinde "düşünmeden" hangi fiilimsidir?',
                options: ["İsim-fiil", "Sıfat-fiil", "Zarf-fiil", "Mastar"],
                correct: 2,
                explanation: 'Doğru! "Düşünmeden" nasıl konuşmaması gerektiğini anlatır, zarf-fiildir.'
            }
        ]
    },
    // KONU 2: Cümlenin Öğeleri (10 soru)
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
            },
            {
                question: '"Sabah erkenden kalktım." cümlesinde "sabah erkenden" hangi öğedir?',
                options: ["Özne", "Zaman tamlayıcısı", "Yer tamlayıcısı", "Nesne"],
                correct: 1,
                explanation: 'Doğru! "Ne zaman kalktı?" sorusuna cevap verir, zaman tamlayıcısıdır.'
            },
            {
                question: '"Kitabı hızlıca okudum." cümlesinde "hızlıca" hangi öğedir?',
                options: ["Nesne", "Zarf tamlayıcısı", "Belirtili nesne", "Yer tamlayıcısı"],
                correct: 1,
                explanation: 'Doğru! "Nasıl okudum?" sorusuna cevap verir, zarf tamlayıcısıdır.'
            },
            {
                question: 'Bir cümlede olmak zorunda OLAN öğe hangisidir?',
                options: ["Özne", "Yüklem", "Nesne", "Tamlayıcı"],
                correct: 1,
                explanation: 'Doğru! Yüklem olmadan cümle olmaz. Diğerleri olmayabilir.'
            },
            {
                question: '"Ödevimi yaptım." cümlesinde nesne var mıdır?',
                options: ["Evet, ödevimi", "Hayır, nesne yok", "Ödev nesne değil", "Belirsiz"],
                correct: 0,
                explanation: 'Doğru! "Neyi yaptım?" sorusuna "Ödevimi" cevabı gelir, belirtili nesnedir.'
            },
            {
                question: '"Eve koşarak geldim." cümlesinde kaç tane öğe vardır?',
                options: ["2", "3", "4", "5"],
                correct: 1,
                explanation: 'Doğru! Yüklem (geldim), yer tamlayıcısı (eve), zarf tamlayıcısı (koşarak) = 3 öğe.'
            }
        ]
    },
    // KONU 3: Fiil Çatısı (10 soru)
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
            },
            {
                question: '"Kapı açıldı." cümlesi hangi çatıdadır?',
                options: ["Etken", "Edilgen", "Dönüşlü", "Geçişli"],
                correct: 1,
                explanation: 'Doğru! Kim açtı belli değil, edilgen çatıdır.'
            },
            {
                question: '"Kendimi çok yordum." cümlesi hangi çatıdadır?',
                options: ["Etken", "Edilgen", "Dönüşlü", "İşteş"],
                correct: 2,
                explanation: 'Doğru! Eylemi kendine yapıyor (-In eki), dönüşlü çatıdır.'
            },
            {
                question: '"Ali ile Veli dövüştüler." cümlesi hangi çatıdadır?',
                options: ["Etken", "Edilgen", "Dönüşlü", "İşteş"],
                correct: 3,
                explanation: 'Doğru! Eylemi birlikte yapıyorlar (-Iş eki), işteş çatıdır.'
            },
            {
                question: 'Edilgen çatı hangi eklerle yapılır?',
                options: ["-Il, -In", "-Il, -In, -n", "-mA, -mAk", "-DIr, -t"],
                correct: 1,
                explanation: 'Doğru! Edilgen çatı -Il, -In, -n ekleriyle yapılır.'
            },
            {
                question: '"Kitap okunuyor." cümlesinde çatı nedir?',
                options: ["Etken", "Edilgen", "Dönüşlü", "İşteş"],
                correct: 1,
                explanation: 'Doğru! Kim okuyor belli değil, -n eki var, edilgen çatıdır.'
            }
        ]
    },
    // KONU 4: Sözcükte Anlam (10 soru)
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
            },
            {
                question: '"Atom" kelimesi hangi anlam türündedir?',
                options: ["Gerçek anlam", "Mecaz anlam", "Terim anlam", "Sesteş"],
                correct: 2,
                explanation: 'Doğru! Bilim dilinde özel anlam taşır, terim anlamdır.'
            },
            {
                question: '"Gönlü kırık" ifadesinde "kırık" hangi anlamdadır?',
                options: ["Gerçek anlam", "Mecaz anlam", "Terim anlam", "Sesteş"],
                correct: 1,
                explanation: 'Doğru! Gönül kırılmaz, üzgün anlamına gelir, mecaz anlamdır.'
            },
            {
                question: '"Baş" kelimesinin kaç anlamı vardır?',
                options: ["1", "2-3", "5-10", "20+"],
                correct: 3,
                explanation: 'Doğru! Baş kelimesi çok anlamlıdır: vücut başı, lider, kafa, üst kısım vb.'
            },
            {
                question: 'Güzel - Hoş kelimeleri hangi ilişkidedir?',
                options: ["Eş anlamlı", "Yakın anlamlı", "Zıt anlamlı", "Sesteş"],
                correct: 1,
                explanation: 'Doğru! Tam aynı değil ama yakın anlam taşırlar.'
            },
            {
                question: '"Köprüden önce at yapmayın." sözündeki "at" hangi anlam türündedir?',
                options: ["Gerçek anlam", "Mecaz anlam", "Terim anlam", "Sesteş"],
                correct: 1,
                explanation: 'Doğru! Hayvan atından bahsetmiyor, "plan" anlamında mecazdır.'
            }
        ]
    },
    // KONU 5: Cümlede Anlam (10 soru)
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
            },
            {
                question: '"Fakir ama mutluydu." cümlesinde hangi anlam ilişkisi vardır?',
                options: ["Sebep-sonuç", "Amaç-sonuç", "Zıtlık", "Benzerlik"],
                correct: 2,
                explanation: 'Doğru! "Ama" bağlacı zıtlık bildirir, fakir ve mutlu zıt kavramlardır.'
            },
            {
                question: '"Hem güzel hem akıllı." cümlesinde hangi anlam ilişkisi vardır?',
                options: ["Sıralama", "Zıtlık", "Sebep-sonuç", "Benzerlik"],
                correct: 0,
                explanation: 'Doğru! "Hem...hem" iki özelliği sıralar, sıralama ilişkisi vardır.'
            },
            {
                question: '"Çok çalıştı, bu yüzden başarılı oldu." hangi ilişki?',
                options: ["Sebep-sonuç", "Amaç-sonuç", "Koşul-sonuç", "Zıtlık"],
                correct: 0,
                explanation: 'Doğru! İki olay da olmuş, "bu yüzden" sebep-sonuç bildirir.'
            },
            {
                question: '"Zengin olsa da cimridir." cümlesinde hangi ilişki?',
                options: ["Sebep-sonuç", "Zıtlık (karşıtlık)", "Benzerlik", "Sıralama"],
                correct: 1,
                explanation: 'Doğru! "Olsa da" zıtlık bildirir, zengin ama cimri çelişkisi var.'
            },
            {
                question: 'Öznel anlam içeren ifade hangisidir?',
                options: ["Dünya yuvarlaktır", "Bu film çok güzeldi", "Su 100 derecede kaynar", "Türkiye Asya\'dadır"],
                correct: 1,
                explanation: 'Doğru! "Bu film çok güzeldi" kişisel görüştür, öznel anlamdır.'
            }
        ]
    },
    // KONU 6: Deyimler ve Atasözü (10 soru)
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
            },
            {
                question: '"Ak akçe kara gün içindir" nedir?',
                options: ["Deyim", "Atasözü", "İkileme", "Terim"],
                correct: 1,
                explanation: 'Doğru! Tam cümle, öğüt veriyor, atasözüdür.'
            },
            {
                question: '"Ayağını denk almak" deyiminin anlamı nedir?',
                options: ["Koşmak", "Dikkatli olmak", "Düşmek", "Yürümek"],
                correct: 1,
                explanation: 'Doğru! "Ayağını denk al" dikkatli ol, sakın demektir.'
            },
            {
                question: '"Kulaktan dolma" ne demektir?',
                options: ["İyi duymak", "Başkasından duyma", "Kulak ağrısı", "Müzik dinlemek"],
                correct: 1,
                explanation: 'Doğru! Bilgiyi başkasından duyarak öğrenmek anlamındadır.'
            },
            {
                question: '"Ağaç yaşken eğilir" atasözünün anlamı nedir?',
                options: ["Ağaç dikmek", "Çocukları küçükken eğitmek", "Spor yapmak", "Bahçecilik"],
                correct: 1,
                explanation: 'Doğru! Çocukları küçükken eğitmek gerekir anlamındadır.'
            },
            {
                question: 'Hangisi atasözüdür?',
                options: ["Gözü dönmek", "Ayağına taş değmesin", "Güneş balçıkla sıvanmaz", "Başına kakamak"],
                correct: 2,
                explanation: 'Doğru! "Güneş balçıkla sıvanmaz" tam cümle ve öğüt veren atasözüdür.'
            }
        ]
    },
    // KONU 7: Cümle Çeşitleri (10 soru)
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
            },
            {
                question: '"Gel!" hangi cümle türüdür?',
                options: ["Ünlem cümlesi", "Emir cümlesi", "Soru cümlesi", "Haber cümlesi"],
                correct: 1,
                explanation: 'Doğru! Emir kipi var, emir cümlesidir.'
            },
            {
                question: '"Okudum, yazdım, çalıştım." hangi cümle türüdür?',
                options: ["Basit cümle", "Birleşik cümle", "Sıralı cümle", "Bağlı cümle"],
                correct: 2,
                explanation: 'Doğru! Virgüllerle ayrılmış 3 yüklem var, sıralı cümledir.'
            },
            {
                question: '"Yağmur yağdığı için çıkmadım." hangi cümle türüdür?',
                options: ["Basit cümle", "Birleşik cümle", "Sıralı cümle", "Bağlı cümle"],
                correct: 3,
                explanation: 'Doğru! İki yüklem bağlaçla bağlı, bağlı cümledir.'
            },
            {
                question: '"Ne güzel hava!" hangi cümle türüdür?',
                options: ["Haber cümlesi", "Soru cümlesi", "Emir cümlesi", "Ünlem cümlesi"],
                correct: 3,
                explanation: 'Doğru! Duygu ve heyecan var, ünlem cümlesidir.'
            },
            {
                question: '"Burası okul." cümlesinde yüklem hangisidir?',
                options: ["Burası", "Okul", "Burası okul", "Yüklem yok"],
                correct: 1,
                explanation: 'Doğru! "Okul" isim yüklemdir. "Ne?" sorusuna cevap verir.'
            }
        ]
    },
    // KONU 8: Yazım Kuralları (10 soru)
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
            },
            {
                question: '"Türkçe" mi "türkçe" mi yazmalıyız?',
                options: ["Türkçe", "türkçe", "Her ikisi doğru", "TÜRKÇE"],
                correct: 1,
                explanation: 'Doğru! Dil adları küçük harfle başlar: türkçe, ingilizce, arapça'
            },
            {
                question: '"Geldi mi?" sorusunda "mı" neden ayrı?',
                options: ["Soru eki", "Bağlaç", "Edat", "İsim"],
                correct: 0,
                explanation: 'Doğru! Soru eki olduğu için ayrı yazılır.'
            },
            {
                question: '"Gelecek yıl" mı "Gelecek-yıl" mı?',
                options: ["Gelecek yıl (ayrı)", "Gelecek-yıl (tire)", "Gelecekyıl (bitişik)", "Hepsi doğru"],
                correct: 0,
                explanation: 'Doğru! Zaman belirten kelimeler ayrı yazılır: gelecek yıl, bu gün.'
            },
            {
                question: '"Büyükşehir" mi "Büyük şehir" mi?',
                options: ["Büyükşehir (bitişik)", "Büyük şehir (ayrı)", "Büyük-şehir (tire)", "Fark etmez"],
                correct: 0,
                explanation: 'Doğru! Kalıplaşmış birleşik kelimeler bitişik yazılır: büyükşehir, başkent.'
            },
            {
                question: '"Bunun ki" mi "Bunun-ki" mi "Bununki" mi?',
                options: ["Bunun ki (ayrı)", "Bunun-ki (tire)", "Bunki (bitişik)", "Bunun-ki (bitişik)"],
                correct: 0,
                explanation: 'Doğru! "ki" iyelik eki olarak kullanılınca ayrı yazılır: benimki, seninki.'
            }
        ]
    },
    // KONU 9: Paragraf (10 soru)
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
            },
            {
                question: 'Paragrafın "Gelişme" bölümü ne işe yarar?',
                options: ["Konuya giriş yapar", "Detayları anlatır", "Sonuç verir", "Öğüt verir"],
                correct: 1,
                explanation: 'Doğru! Gelişme bölümünde olayın detayları, örnekler anlatılır.'
            },
            {
                question: 'Öyküleme tekniğinin özelliği nedir?',
                options: ["Bilgi verir", "Olay anlatır", "Resim çizer", "Fikir savunur"],
                correct: 1,
                explanation: 'Doğru! Öyküleme bir olay anlatır, içinde hareket vardır.'
            },
            {
                question: 'Betimleme tekniğinde ne yapılır?',
                options: ["Bilgi verilir", "Olay anlatılır", "Kelimelerle resim çizilir", "Tartışılır"],
                correct: 2,
                explanation: 'Doğru! Betimleme kelimelerle resim çizer, okurken gözünde canlanır.'
            },
            {
                question: 'Tartışma tekniğinde yazar ne yapar?',
                options: ["Bilgi verir", "Olay anlatır", "Kendi fikrini ispatlar", "Resim çizer"],
                correct: 2,
                explanation: 'Doğru! Tartışma tekniğinde yazar kendi fikrini kanıtlarla savunur.'
            },
            {
                question: 'Ana düşünce genelde nerede bulunur?',
                options: ["İlk cümlede", "Son cümlede", "Ortada", "Her yerde olabilir"],
                correct: 3,
                explanation: 'Doğru! Ana düşünce paragrafın başında, ortasında veya sonunda olabilir.'
            }
        ]
    },
    // KONU 10: Sözel Muhakeme (10 soru)
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
            },
            {
                question: '"A, B\'den pahalıdır. B, C\'den ucuzdur." En ucuz hangisi?',
                options: ["A", "B", "C", "Bilgi yetersiz"],
                correct: 2,
                explanation: 'Doğru! A > B > C fiyat sıralaması var. En ucuz C.'
            },
            {
                question: 'Çubuk grafiğinde hangi eksen miktarı gösterir?',
                options: ["X ekseni (yatay)", "Y ekseni (dikey)", "Her ikisi", "Hiçbiri"],
                correct: 1,
                explanation: 'Doğru! Y ekseni (dikey) genelde miktarı gösterir.'
            },
            {
                question: '"Ayşe Ali\'den hızlı koşar. Mehmet Ayşe\'den yavaş koşar." En hızlı kim?',
                options: ["Ayşe", "Ali", "Mehmet", "Bilgi yetersiz"],
                correct: 0,
                explanation: 'Doğru! Ayşe > Ali ve Ayşe > Mehmet. En hızlı Ayşe.'
            },
            {
                question: 'Tablo okurken ilk bakılması gereken yer neresidir?',
                options: ["Başlık", "Sayılar", "Renkler", "Alt not"],
                correct: 0,
                explanation: 'Doğru! Tablonun başlığı ne hakkında olduğunu söyler, önce ona bakılır.'
            },
            {
                question: '"100 öğrenciden 60\'ı kız" ifadesi yüzde kaçtır?',
                options: ["%50", "%60", "%70", "%40"],
                correct: 1,
                explanation: 'Doğru! 60/100 = %60 kız öğrenci var.'
            }
        ]
    },
    // KONU 11: Noktalama İşaretleri (10 soru)
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
            },
            {
                question: 'Üç nokta (...) ne zaman kullanılır?',
                options: ["Cümle bitince", "Söz yarıda kesilince", "Soru sorulunca", "Ünlem yapılınca"],
                correct: 1,
                explanation: 'Doğru! Üç nokta cümlenin tamamlanmadığını veya düşüncenin devam ettiğini gösterir.'
            },
            {
                question: 'Tırnak işareti (" ") ne zaman kullanılır?',
                options: ["Cümle sonunda", "Doğrudan söz aktarılırken", "Her zaman", "Hiçbir zaman"],
                correct: 1,
                explanation: 'Doğru! Birinin sözünü aynen aktarırken tırnak kullanılır.'
            },
            {
                question: 'Kısa çizgi (-) ne işe yarar?',
                options: ["Kelime bölmek", "Cümle bitirmek", "Soru sormak", "Ünlem yapmak"],
                correct: 0,
                explanation: 'Doğru! Satır sonunda kelime sığmazsa kısa çizgiyle böleriz.'
            },
            {
                question: 'Uzun tire (—) ne zaman kullanılır?',
                options: ["Cümle sonu", "Konuşma çizgisi olarak", "Soru işareti yerine", "Virgül yerine"],
                correct: 1,
                explanation: 'Doğru! Diyaloglarda konuşanı göstermek için uzun tire kullanılır.'
            },
            {
                question: 'Parantez ( ) ne işe yarar?',
                options: ["Cümle bitirmek", "Açıklama eklemek", "Soru sormak", "Vurgulama yapmak"],
                correct: 1,
                explanation: 'Doğru! Parantez içine cümle dışında ek bilgi, açıklama konur.'
            }
        ]
    },
    // KONU 12: Anlatım Bozuklukları (10 soru)
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
            },
            {
                question: '"Tekrar yeniden söyledi." cümlesindeki hata nedir?',
                options: ["Gereksiz sözcük", "Yanlış anlam", "Mantık hatası", "Doğru cümle"],
                correct: 0,
                explanation: 'Doğru! "Tekrar" ve "yeniden" aynı anlamda, biri gereksiz!'
            },
            {
                question: '"Onun sesini yükseltti." cümlesi neden yanlış?',
                options: ["Ses yükselmez, çıkar", "Doğru cümle", "Özne yok", "Virgül eksik"],
                correct: 0,
                explanation: 'Doğru! "Sesini yükseltti" değil, "sesini yükseltti" veya "sesi yükseldi" olmalı.'
            },
            {
                question: '"Mutlaka kesin gelecek." cümlesindeki sorun nedir?',
                options: ["Gereksiz sözcük", "Yanlış anlam", "Mantık hatası", "Doğru cümle"],
                correct: 0,
                explanation: 'Doğru! "Mutlaka" ve "kesin" aynı anlama gelir, biri gereksiz.'
            },
            {
                question: '"İhtimal belki gelir." cümlesinde ne hata var?',
                options: ["Gereksiz sözcük", "Yanlış anlam", "Mantık hatası", "Doğru cümle"],
                correct: 0,
                explanation: 'Doğru! "İhtimal" ve "belki" aynı anlama gelir, laf kalabalığı!'
            },
            {
                question: '"Her adam kişi geldi." cümlesindeki hata nedir?',
                options: ["Gereksiz sözcük", "Yanlış anlam", "Mantık hatası", "Doğru cümle"],
                correct: 0,
                explanation: 'Doğru! "Adam" ve "kişi" aynı anlamda, biri gereksiz!'
            }
        ]
    },
    // KONU 13: Söz Sanatları (10 soru)
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
            },
            {
                question: '"Rüzgar ağaçlarla dans ediyordu." hangi söz sanatıdır?',
                options: ["Benzetme", "Kişileştirme", "Abartma", "Karşıtlık"],
                correct: 1,
                explanation: 'Doğru! Rüzgar dans edemez, insan özelliği verilmiş, kişileştirme!'
            },
            {
                question: '"Açlıktan öleceğim." hangi söz sanatıdır?',
                options: ["Benzetme", "Kişileştirme", "Abartma", "Karşıtlık"],
                correct: 2,
                explanation: 'Doğru! Açlıktan hemen ölünmez ama aşırı abartma var, mübalağadır.'
            },
            {
                question: '"Kar gibi temiz bir kalp." hangi söz sanatıdır?',
                options: ["Benzetme", "Kişileştirme", "Abartma", "Konuşturma"],
                correct: 0,
                explanation: 'Doğru! "Gibi" var, kalp kara benzetiliyor, benzetmedir.'
            },
            {
                question: '"Zengin ama mutsuz." cümlesinde hangi sanat vardır?',
                options: ["Benzetme", "Kişileştirme", "Karşıtlık", "Abartma"],
                correct: 2,
                explanation: 'Doğru! Zengin ve mutsuz çelişir, karşıtlık (tezat) var.'
            },
            {
                question: 'Ağaç "Kesilmeyin!" diye bağırdı. Hangi sanat?',
                options: ["Kişileştirme", "Benzetme", "Konuşturma", "Abartma"],
                correct: 2,
                explanation: 'Doğru! Ağaç konuşuyor ve tırnak içinde, bu konuşturmadır (intak).'
            }
        ]
    },
    // KONU 14: Metin Türleri (10 soru)
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
            },
            {
                question: 'Bilimsel kanıtlarla fikir savunan metin türü nedir?',
                options: ["Deneme", "Makale", "Hikaye", "Şiir"],
                correct: 1,
                explanation: 'Doğru! Makale bilimsel, kanıt kullanır ve ciddidir.'
            },
            {
                question: 'Uzun, çok karakterli olay metni nedir?',
                options: ["Hikaye", "Roman", "Masal", "Fabl"],
                correct: 1,
                explanation: 'Doğru! Roman hikayenin uzun versiyonudur, çok karakter ve olay vardır.'
            },
            {
                question: '"Gençliğimde şöyleydi..." diye başlayan metin türü nedir?',
                options: ["Günlük", "Anı (Hatıra)", "Biyografi", "Otobiyografi"],
                correct: 1,
                explanation: 'Doğru! Anı (hatıra) geçmiş olayları zaman sonra anlatır.'
            },
            {
                question: 'Devler, periler, sihir olan metin türü nedir?',
                options: ["Hikaye", "Roman", "Masal", "Makale"],
                correct: 2,
                explanation: 'Doğru! Masal hayal ürünü, sihirli olaylar içerir.'
            },
            {
                question: 'Gazetedeki günlük yazı türü nedir?',
                options: ["Makale", "Fıkra (köşe yazısı)", "Deneme", "Hikaye"],
                correct: 1,
                explanation: 'Doğru! Fıkra gazetelerdeki günlük kısa yazılardır (gülmece değil!).'
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
    const rate = completedTopicsCount > 0 ? Math.round((totalScore / (completedTopicsCount * 1000)) * 100) : 0;
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

    document.getElementById('questionNumber').textContent = (currentQuestion + 1) + '/10';
    document.getElementById('currentScore').textContent = score;
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('questionText').textContent = question.question;

    const progress = ((currentQuestion + 1) / 10) * 100;
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
    if (currentQuestion < 10) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    totalScore += score;
    if (score >= 600) {
        completedTopicsCount++;
    }
    localStorage.setItem('totalScore', totalScore);
    localStorage.setItem('completedTopics', completedTopicsCount);

    document.querySelector('.game-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');

    const percentage = (correctAnswers / 10) * 100;
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
    document.getElementById('totalQuestions').textContent = '10';
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
