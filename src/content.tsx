import type { ReactNode } from 'react'

export type Lang = 'en' | 'tr'

export const APP_STORE_URL = '#app-store-link-coming-soon' // TODO: replace with the real App Store URL
export const EMAIL = 'vocaleaf.app@gmail.com'
export const EULA = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
const REFUND = 'https://reportaproblem.apple.com'

type Section = { h: string; body: ReactNode }
type Page = { title: string; intro?: string; sections: Section[] }

const mail = <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
const refund = <a href={REFUND}>reportaproblem.apple.com</a>

export const ui = {
  en: {
    tagline: 'Learn a word a day from your Lock Screen.',
    home: 'Home', privacy: 'Privacy Policy', support: 'Support', terms: 'Terms',
    appStore: 'Download on the App Store (coming soon)',
    switchTo: 'Türkçe', switchLabel: 'Switch language to Turkish',
    footer: 'Vocaleaf',
    htmlLang: 'en',
  },
  tr: {
    tagline: 'Kilit ekranından günde bir kelime öğren.',
    home: 'Ana sayfa', privacy: 'Gizlilik Politikası', support: 'Destek', terms: 'Koşullar',
    appStore: "App Store'dan indir (yakında)",
    switchTo: 'English', switchLabel: 'Dili İngilizce yap',
    footer: 'Vocaleaf',
    htmlLang: 'tr',
  },
}

export const pages: Record<Lang, { privacy: Page; support: Page; terms: Page }> = {
  en: {
    privacy: {
      title: 'Privacy Policy',
      intro: 'Effective date: 24 October 2026',
      sections: [
        { h: 'Summary', body: <p>Vocaleaf has no account and no sign-up, no ads and no tracking. It collects anonymous usage analytics to improve the app, which you can turn off in Settings.</p> },
        { h: 'Usage analytics (optional)', body: <>
          <p>To understand how the app is used, Vocaleaf sends anonymous usage events (for example: onboarding steps, words viewed, quizzes and games played, paywall views and purchases) with your app settings, app version and basic device information (model, iOS version, language). We use Google Firebase Analytics and Mixpanel for this. Events are tied to a random install ID created by Firebase Authentication, not to your name, email or Apple ID. Firebase may estimate an approximate (country/region) location from the IP address; Mixpanel's IP-based location is turned off.</p>
          <p>We do not use the advertising identifier (IDFA), do not track you across other companies' apps or websites, and do not sell or share data for advertising. You can stop analytics at any time with Settings › Share anonymous usage data.</p></> },
        { h: 'Data stored on your device and in iCloud', body: <p>Your learning progress, saved words and settings are stored on your device. If you are signed into iCloud, they sync through your own private iCloud storage (Apple CloudKit and iCloud key-value storage), which the developer cannot read.</p> },
        { h: 'Report a problem (optional)', body: <>
          <p>Reporting is optional and only happens when you start it. It sends the word, the field you reported, an optional note, the app and content version, and your language settings to the developer's CloudKit public database. It contains no personal identifiers; Apple attaches an anonymous per-app user ID.</p>
          <p>If iCloud is not available, you can send the report by email instead. This shares your email address with the developer.</p></> },
        { h: 'Purchases', body: <p>Purchases are handled by Apple. Subscription status is managed through RevenueCat using the same anonymous install ID and your purchase history. No name or email is used.</p> },
        { h: 'Notifications', body: <p>Notifications are local reminders scheduled on your device.</p> },
        { h: 'Pronunciation and word games', body: <p>Word pronunciation uses your device's built-in speech. Word games may use your device's built-in spelling dictionary, on the device.</p> },
        { h: 'Children', body: <p>Vocaleaf is not directed at children under 13, and we do not knowingly collect data from them.</p> },
        { h: 'Contact and data deletion', body: <>
          <p>Contact: {mail}</p>
          <p>To delete your data, delete the app and its iCloud data (Settings › Apple Account › iCloud › Manage Storage). Reports you sent and analytics linked to your install ID can be deleted on request by email.</p></> },
      ],
    },
    support: {
      title: 'Support',
      intro: 'Need help? Email us and we will get back to you.',
      sections: [
        { h: 'Contact', body: <p>{mail}</p> },
        { h: 'How do I restore purchases?', body: <p>In the app, open Settings and tap Restore.</p> },
        { h: 'How do I cancel my subscription?', body: <p>Open Settings › Apple Account › Subscriptions on your iPhone, choose Vocaleaf and cancel.</p> },
        { h: 'How does the free trial work?', body: <p>The yearly plan includes a 3-day free trial. Cancel at least 24 hours before the trial ends to avoid being charged.</p> },
        { h: 'How do I add the Lock Screen widget?', body: <ol><li>Touch and hold the Lock Screen, then tap Customize.</li><li>Choose Lock Screen and tap the widget area.</li><li>Select Vocaleaf and pick a widget.</li></ol> },
        { h: 'How do I report a word mistake?', body: <p>Open the word in the app and use "Report a problem". You can add a note. If iCloud is unavailable, you can send the report by email instead.</p> },
        { h: 'Refunds', body: <p>Refunds are handled by Apple: {refund}.</p> },
      ],
    },
    terms: {
      title: 'Terms of Use',
      sections: [
        { h: 'End User License Agreement', body: <p>Vocaleaf is licensed under Apple's standard End User License Agreement: <a href={EULA}>Apple Standard EULA</a>.</p> },
        { h: 'Questions', body: <p>Contact: {mail}</p> },
      ],
    },
  },
  tr: {
    privacy: {
      title: 'Gizlilik Politikası',
      intro: 'Yürürlük tarihi: 24 Ekim 2026',
      sections: [
        { h: 'Özet', body: <p>Vocaleaf'te hesap veya kayıt, reklam ve izleme yoktur. Uygulamayı geliştirmek için anonim kullanım verisi toplar; bunu Ayarlar'dan kapatabilirsiniz.</p> },
        { h: 'Kullanım analitiği (isteğe bağlı)', body: <>
          <p>Uygulamanın nasıl kullanıldığını anlamak için Vocaleaf anonim kullanım olayları gönderir (örneğin kurulum adımları, görüntülenen kelimeler, oynanan quiz ve oyunlar, ödeme ekranı görüntülemeleri ve satın alımlar); bunlarla birlikte uygulama ayarlarınızı, uygulama sürümünü ve temel cihaz bilgilerini (model, iOS sürümü, dil) iletir. Bunun için Google Firebase Analytics ve Mixpanel kullanırız. Olaylar, Firebase Authentication'ın oluşturduğu rastgele bir kurulum kimliğine bağlıdır; adınıza, e-postanıza veya Apple kimliğinize bağlı değildir. Firebase, IP adresinden yaklaşık konum (ülke/bölge) tahmin edebilir; Mixpanel'in IP tabanlı konumu kapalıdır.</p>
          <p>Reklam kimliğini (IDFA) kullanmayız, sizi başka şirketlerin uygulama ve sitelerinde izlemeyiz, verileri reklam amacıyla satmaz veya paylaşmayız. Analitiği istediğiniz zaman Ayarlar › Anonim kullanım verisi paylaş ile kapatabilirsiniz.</p></> },
        { h: 'Cihazda ve iCloud\'da saklanan veriler', body: <p>Öğrenme ilerlemeniz, kaydettiğiniz kelimeler ve ayarlarınız cihazınızda saklanır. iCloud'da oturum açtıysanız, bunlar kendi özel iCloud depolamanız (Apple CloudKit ve iCloud anahtar-değer depolaması) üzerinden eşitlenir; geliştirici bu veriyi okuyamaz.</p> },
        { h: 'Sorun bildir (isteğe bağlı)', body: <>
          <p>Bildirim isteğe bağlıdır ve yalnızca siz başlattığınızda yapılır. Kelimeyi, bildirdiğiniz alanı, isteğe bağlı notunuzu, uygulama ve içerik sürümünü ve dil ayarlarınızı geliştiricinin CloudKit genel veritabanına gönderir. Kişisel tanımlayıcı içermez; Apple uygulamaya özel anonim bir kullanıcı kimliği ekler.</p>
          <p>iCloud kullanılamıyorsa bildirimi e-posta ile gönderebilirsiniz. Bu durumda e-posta adresiniz geliştirici ile paylaşılır.</p></> },
        { h: 'Satın alımlar', body: <p>Satın alımları Apple yönetir. Abonelik durumu, aynı anonim kurulum kimliği ve satın alma geçmişi ile RevenueCat üzerinden yönetilir. Ad veya e-posta kullanılmaz.</p> },
        { h: 'Bildirimler', body: <p>Bildirimler, cihazınızda planlanan yerel hatırlatmalardır.</p> },
        { h: 'Telaffuz ve kelime oyunları', body: <p>Kelime telaffuzu cihazınızın yerleşik konuşma özelliğini kullanır. Kelime oyunları, cihazınızın yerleşik yazım denetimi sözlüğünü cihaz üzerinde kullanabilir.</p> },
        { h: 'Çocuklar', body: <p>Vocaleaf 13 yaşın altındaki çocuklara yönelik değildir ve onlardan bilerek veri toplamayız.</p> },
        { h: 'İletişim ve veri silme', body: <>
          <p>İletişim: {mail}</p>
          <p>Verilerinizi silmek için uygulamayı ve iCloud verilerini silin (Ayarlar › Apple Hesabı › iCloud › Depolamayı Yönet). Gönderdiğiniz bildirimler ve kurulum kimliğinize bağlı analitik veriler, e-posta ile talep üzerine silinebilir.</p></> },
      ],
    },
    support: {
      title: 'Destek',
      intro: 'Yardıma mı ihtiyacınız var? Bize e-posta gönderin, dönüş yapalım.',
      sections: [
        { h: 'İletişim', body: <p>{mail}</p> },
        { h: 'Satın alımları nasıl geri yüklerim?', body: <p>Uygulamada Ayarlar\'ı açın ve Geri Yükle\'ye dokunun.</p> },
        { h: 'Aboneliği nasıl iptal ederim?', body: <p>iPhone\'da Ayarlar › Apple Hesabı › Abonelikler\'i açın, Vocaleaf\'i seçin ve iptal edin.</p> },
        { h: 'Ücretsiz deneme nasıl işler?', body: <p>Yıllık plan 3 günlük ücretsiz deneme içerir. Ücretlendirilmemek için denemenin bitmesinden en az 24 saat önce iptal edin.</p> },
        { h: 'Kilit ekranı widget\'ını nasıl eklerim?', body: <ol><li>Kilit ekranına dokunup basılı tutun, ardından Özelleştir\'e dokunun.</li><li>Kilit Ekranı\'nı seçin ve widget alanına dokunun.</li><li>Vocaleaf\'i seçin ve bir widget belirleyin.</li></ol> },
        { h: 'Kelime hatasını nasıl bildiririm?', body: <p>Kelimeyi uygulamada açın ve "Sorun bildir"i kullanın. Not ekleyebilirsiniz. iCloud kullanılamıyorsa bildirimi e-posta ile gönderebilirsiniz.</p> },
        { h: 'İadeler', body: <p>İadeleri Apple yönetir: {refund}.</p> },
      ],
    },
    terms: {
      title: 'Kullanım Koşulları',
      sections: [
        { h: 'Son Kullanıcı Lisans Sözleşmesi', body: <p>Vocaleaf, Apple'ın standart Son Kullanıcı Lisans Sözleşmesi kapsamında lisanslanır: <a href={EULA}>Apple Standart EULA</a>.</p> },
        { h: 'Sorular', body: <p>İletişim: {mail}</p> },
      ],
    },
  },
}
