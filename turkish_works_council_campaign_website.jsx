export default function YeterArtikWebsite() {
  const goals = [
    "Sendika ile güçlü iletişim ve dayanışma",
    "Hukuksuz işten çıkarmalara karşı net duruş",
    "Toplu iş sözleşmesi ve maaş artışı mücadelesi",
    "Yıllık izin günlerinin artırılması",
    "Weihnachtsgeld, Urlaubsgeld ve 13. maaş hakkı",
    "Şeffaf, ulaşılabilir ve çalışan odaklı temsil"
  ];

  const candidates = [
    "Ozan Şimşek", "İsmail Erkam Köseoğlu", "Mahmut Esat Ata", "Selen Elif Ayar",
    "Samiha Hande Toprak", "Selin Taş", "Yusuf Koç", "Mahmut İsmail Hasırcı",
    "Ahmet Berkan Yılmaz", "Petek Zorluer", "Çağrı Berkay Demirci", "Şükrü Gürsel Hatunoğlu",
    "Seda Özbozdağlı", "Bekir Kartal", "Furkan Aydoğan", "Ercan Orkan Çelik",
    "Okan Çelik", "Emin Ata Becer", "Özgür Berkay Dağlı", "Melike Utku",
    "Doğancan Yaralı", "Engin Cansu"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-red-700">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/20 via-black to-black"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block border border-red-600 text-red-500 px-4 py-2 rounded-full text-sm tracking-widest uppercase mb-6">
              Liste 1 • Solidarity Action Movement
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tight">
              YETER
              <br />
              <span className="text-red-600">ARTIK!</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Turkish Market çalışanları için güçlü, şeffaf ve mücadeleci bir Works Council temsilini birlikte kuruyoruz.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#hedefler"
                className="bg-red-600 hover:bg-red-500 transition px-8 py-4 rounded-2xl font-bold text-lg"
              >
                Hedeflerimiz
              </a>

              <a
                href="#adaylar"
                className="border border-white hover:border-red-500 hover:text-red-500 transition px-8 py-4 rounded-2xl font-bold text-lg"
              >
                Adaylarımız
              </a>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Neden Biz?</h2>

            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                Alman İş Hukuku ve Almanca konusunda yetkin, eğitimli ve deneyimli bir ekibiz.
              </p>

              <p>
                Uzun yıllardır ver.di üyesi olarak çalışan hakları için dayanışma içinde mücadele ediyoruz.
              </p>

              <p>
                Mevcut WoCo üyelerinden bağımsız, taze ve şeffaf bir yönetim anlayışı sunuyoruz.
              </p>

              <p>
                Tamamı operasyonun içinde çalışan “Rep” pozisyonundaki ekip arkadaşlarımızdan oluşuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Election Info */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Oy Kullanma</h3>
            <p className="text-lg text-gray-300">27 Mayıs 2026</p>
            <p className="text-gray-400">21:00 – 01:00</p>
            <div className="mt-4 border-t border-zinc-700 pt-4">
              <p className="text-lg text-gray-300">28 Mayıs 2026</p>
              <p className="text-gray-400">10:00 – 18:00</p>
            </div>
          </div>

          <div className="bg-red-700 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-black mb-4">BİRLİKTE GÜÇLÜYÜZ!</h3>
            <p className="text-lg leading-relaxed">
              Sesini duyurmak, haklarını korumak ve daha güçlü bir temsil oluşturmak için Liste 1’e oy ver!
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-red-500 mb-4">İletişim</h3>
            <p className="text-gray-300 mb-2">solidarityactionmovement@gmail.com</p>
            <p className="text-gray-400 leading-relaxed">
              Election Board ofisi:
              <br />
              4. kat, speed gate yanı,
              <br />
              Oda 401
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section id="hedefler" className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">
              Hedeflerimiz
            </p>
            <h2 className="text-5xl font-black mb-6">
              Çalışan Hakları İçin
              <span className="text-red-600"> Mücadele</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Daha adil maaşlar, daha güçlü haklar ve daha şeffaf bir temsil için kararlılıkla çalışacağız.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 hover:border-red-600 transition rounded-3xl p-8"
              >
                <div className="text-5xl font-black text-red-600 mb-6">
                  0{index + 1}
                </div>
                <p className="text-xl font-semibold text-white leading-relaxed">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">
              Sık Sorulan Sorular
            </p>
            <h2 className="text-5xl font-black">Sorularınıza Açık Cevaplar</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Alman İş Hukuku konusunda yetkin misiniz?",
                a: "Ekibimiz farklı alanlarda eğitim almış uzmanlardan oluşmakta olup gerektiğinde deneyimli sendika danışmanları ve hukuki mekanizmalardan destek alabilecek yetkinliğe sahiptir."
              },
              {
                q: "ver.di ile ilişkiniz nedir?",
                a: "Hepimiz uzun yıllardır ver.di üyesiyiz ve sendikayla işbirliğimizi dayanışma içinde sürdüreceğiz."
              },
              {
                q: "Neden yalnızca Turkish Market çalışanlarından oluşuyorsunuz?",
                a: "Birbirini tanıyan ve ortak çalışma kültürüne sahip uyumlu bir ekibin dayanışmayı çok daha güçlü sürdüreceğine inanıyoruz."
              },
              {
                q: "Önceliğiniz ne olacak?",
                a: "Hukuksuz işten çıkarmalara karşı sert bir duruş sergilemek, maaş artışı, ek izin günleri ve çalışan hakları için mücadele etmek."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold text-red-500 mb-4">
                  {item.q}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidates */}
      <section id="adaylar" className="bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm mb-4 text-red-100">
                Liste 1
              </p>
              <h2 className="text-5xl font-black mb-6">Adaylarımız</h2>
            </div>

            <div className="max-w-2xl text-xl text-red-100 leading-relaxed">
              Güçlü iletişim kültürüne sahip, yıllardır birlikte çalışan ve çalışan haklarını savunmaya kararlı bir ekip.
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {candidates.map((candidate, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur border border-white/10 rounded-2xl px-5 py-4 text-lg font-semibold"
              >
                {index + 1}. {candidate}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="text-red-600 text-7xl md:text-9xl font-black tracking-tight mb-8">
            YETER ARTIK!
          </div>

          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-10">
            Haklarımız için birlikte hareket etme zamanı.
            <br />
            Liste 1’e oy ver, sesini duyur.
          </p>

          <div className="inline-flex items-center gap-4 bg-red-700 px-10 py-5 rounded-3xl text-2xl font-black shadow-2xl">
            LİSTE 1’E OY VER!
          </div>
        </div>
      </section>
    </div>
  );
}
