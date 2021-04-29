# [PROJE_ADI] Web Sitesi

[PROJE_ADI] için tasarlanmış web sitesinin HTML dönüşümü projesidir.

## Başlarken

Proje geliştirilirken HTML, CSS ve JavaScript harici olarak bazı teknolojiler kullanılmıştır. Geliştirme için en azından bu araçlar/teknolojilerin kullanımı hakkında bilginiz olması beklenir.

### Araçlar / Teknolojiler

- Node.js
- NPM / Yarn Paket Yöneticisi
- Gulp.js
- Bootstrap
- jQuery
- SASS CSS Preprocessor

## Özellikler

- Sass dosyaları CSS'e dönüştürülür. Dönüştürme sonrası `autoprefixer` ile `package.json` dosyası içerisinde belirtilmiş, tarayıcı listesine göre stil değerlerine ön ek eklenir. Tek dosyada birleştirilip küçültülür.
- JavaScript dosyaları tek dosyada birleştirilip küçültülür. Güncel _ES6_ yazımını destekler, `Babel` ile _ES5_ yazımına çevrilir.
- Görseller formatlarına uygun şekilde optimize edilir.
- `Browser-sync` ile canlı sunucu oluşturulup, dosya değişikliklerine göre sayfa yenilemeleri otomatik yapılır.
- Çıktı dosyalarını zip olarak arşivleyebilirsiniz.

## Kurulum Talimatları

### Projeyi indirin

Projeyi, _git_ üzerinden klonlayabilir ya da [bu linkten]([GITHUB_REPO]/archive/master.zip) indirebilirsiniz.

```bash
git clone [GITHUB_REPO].git
```

### Node.js

Geliştirmeye başlamadan önce sisteminizde `Node.js` yüklü olduğundan emin olunuz. Eğer sisteminizde yüklü değilse [nodejs.org](https://nodejs.org) adresinden işletim sisteminize uygun sürümü indirip kurunuz.

> **UYARI!**
>
> Mevcut sisteminizde daha önceden Gulp.js'yi global olarak kurduysanız, lütfen `npm rm --global gulp` komutu ile sisteminizden kaldırın.
>
> Detaylı bilgi için [bu makaleyi](https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467) okuyabilirsiniz.

### Gulp.js CLI'yi yükleyin

Komutu çalıştırarak Gulp.js CLI'yi yükleyin.

```
npm install --global gulp-cli
```

### Bağımlılıkları yükleyin

Proje geliştirilirken _Yarn paket yöneticisi_ kullanılmıştır. Kullanmak istediğiniz paket yöneticisine uygun aşağıdaki kurulum komutlarını çalıştırın.

```
# Yarn Paket Yöneticisi için;
yarn install

# NPM Paket Yöneticisi için;
npm install
```

### Geliştirmeye başlayın

Belirtilen talimatları uyguladıktan sonra aşağıdaki komutu çalıştırarak geliştirmeye başlayabilirsiniz.

```
# Yarn Paket Yöneticisi için;
yarn dev

# NPM Paket Yöneticisi için;
npm run dev
```

**Happy coding 😎**

---

## Demo

Projeyi [buradan]([DEMO_ADRES]) inceleyebilirsiniz.

## Hata ve Yeni Özellik İstekleri

Geliştirme aşamasında herhangi bir hata mı aldınız? Yeni bir özellik eklemenmesini mi istiyorsunuz? O halde Github üzerinde [yeni bir istek başlığı]([GITHUB_REPO]/issues/new) oluşturunuz.

## Telif Hakkı & Lisans

Telif hakları [Grafix Kreatif Yazılım Atölyesi](http://grafix.com.tr) ve [Tanju Yıldız](https://tanjuyildiz.com)'a aittir. Proje kodları [MIT lisansı]([GITHUB_REPO]/blob/master/LICENSE) altında sunulmuştur.
