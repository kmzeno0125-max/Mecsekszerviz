import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-dark-bg min-h-screen">
      <div className="bg-dark-section py-16 sm:py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/20 border border-primary/40 text-primary font-headline font-bold text-xs uppercase tracking-widest px-3 py-1 rounded mb-5">
            Jogi információk
          </span>
          <h1
            className="font-headline font-bold text-white uppercase tracking-wide mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
          >
            Adatvédelmi tájékoztató
          </h1>
          <p className="font-body text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            A Mecsek Gyorsszerviz weboldalának adatkezelési és jogi tájékoztatója.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12">

          <SectionTitle>Jogi nyilatkozat, szerzői jogok</SectionTitle>
          <P>
            A <Link href="https://www.mecsekszerviz.hu">www.mecsekszerviz.hu</Link> honlap tulajdonosa Varga Roland Tamás ev.
          </P>
          <P>
            A honlap látogatásával a látogató elfogadja a honlap tulajdonosa által meghatározott feltételeket. A honlap tulajdonosa megtesz minden ésszerű erőfeszítést annak érdekében, hogy a honlapon közölt információk naprakészek, a valóságnak megfelelőek és pontosak legyenek, az esetleges pontatlan adatközlésből eredő károkért azonban nem felel.
          </P>
          <P>
            A honlap olyan linkeket tartalmazhat, amelyek más internetes oldalakra vezetnek. Ezen oldalak tartalmáért a tulajdonos semmilyen felelősséget nem vállal. A tulajdonos fenntartja ugyanakkor magának a jogot arra, hogy a honlapra külső felhasználók által feltett külső linkeket ellenőrizze, szükség esetén törölje.
          </P>
          <P>
            A <Link href="https://www.mecsekszerviz.hu">www.mecsekszerviz.hu</Link> honlapon található tartalom – ideértve többek között az oldal felépítését, kivitelezését, az oldalon található szövegeket, képeket, fényképeket, grafikákat, illusztrációkat, hang- és videó anyagokat – Varga Roland Tamás, valamint a honlapot készítő és szerkesztő AssistMedia közös szellemi alkotása. A honlap tartalma, illetve bármilyen alkotóeleme – a szabad felhasználás eseteit kivéve – csak a szerzői jogról szóló 1999. évi LXXVI. törvény rendelkezéseinek megfelelően, Varga Roland Tamásnak előzetes írásos engedélyével használható fel. Ha egy konkrét elemben (pl. szöveg, grafika, kép, fénykép) más forrás van feltüntetve, a felhasználáshoz a szerző hozzájárulása szükséges.
          </P>

          <SectionTitle>Adatvédelmi szabályzat</SectionTitle>
          <P>
            Ezen internetes oldal üzemeltetőjeként tájékoztatjuk, hogy adatainak védelmét, valamint a magánszféra védelmét rendkívül fontosnak tartjuk. Ezért az alábbiakban ismertetjük, hogy az Önről rendelkezésre bocsátott adatokat hogyan kezeljük.
          </P>
          <P>
            Amennyiben az internetes oldalainkon személyes adatok (név, cím stb.) bevitelére van lehetőség, ezen adatokat a felhasználó mindig önként adhatja meg. Internetes oldalainkat anélkül használhatja, hogy mi tudnánk az Ön személyéről vagy bármilyen személyes adatot rögzítenénk. Amennyiben szolgáltatások igénybevételére vagy szerződés végrehajtásához személyes adatokat közöl, már nem tekintjük Önt névtelennek. A megfelelő adatok megadásával Ön kifejezett hozzájárulását adja ezen adatok átviteléhez és eltárolásához. Amennyiben műszakilag lehetséges és indokolt, szolgáltatásaink név megadása nélkül, vagy álnév használatával is elérhetők.
          </P>

          <SubSection number="1">Fogalmak</SubSection>
          <P>
            Információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (továbbiakban Infotv.) rendelkezik az adatkezeléssel kapcsolatos szabályokról. A törvény értelmében:
          </P>
          <DefinitionList items={definitions} />

          <SubSection number="2">Személyes adatok használata</SubSection>
          <P>
            Az Ön által közölt személyes adatokat kizárólag egy szolgáltatás vagy szerződés teljesítéséhez szükséges mértékben kerül felhasználásra. Amennyiben kifejezett hozzájárulásáról nyilatkozott, akkor a részünkre átadott adatokat marketing célokra is használjuk.
          </P>

          <h4 className="font-headline font-bold text-white text-base uppercase tracking-wide mt-8 mb-3">
            Átadás harmadik fél számára
          </h4>
          <P>A személyes adatokat nem adjuk át harmadik fél számára.</P>

          <h4 className="font-headline font-bold text-white text-base uppercase tracking-wide mt-8 mb-3">
            Felvilágosítás a tárolt adatokról
          </h4>
          <P>
            Önnek bármikor jogában áll igény esetén felvilágosítást kérnie az Önről tárolt adatokról. Kérés esetén a megfelelő tájékoztatást elektronikus formában is közöljük.
          </P>
          <P>Igény esetén az Önről tárolt adatokat haladéktalanul töröljük vagy visszavonjuk.</P>
          <P>Ilyen tárgyú kérések esetén az alábbi elérhetőségekhez forduljon:</P>

          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-5 my-6">
            <p className="font-body text-white/90 text-sm font-semibold mb-1">7633 Pécs, Páfrány utca 8.</p>
            <p className="font-body text-sm">
              <a href="mailto:info@mecsekszerviz.hu" className="text-primary hover:text-primary-dark transition-colors">
                info@mecsekszerviz.hu
              </a>
            </p>
          </div>

          <SubSection number="3">Google Analytics használata</SubSection>
          <P>
            A Szolgáltató igénybe veszi a Google Analytics szoftvert, amely segíti a honlap látogatottsági és egyéb webanalitikai adatainak független auditálását. A Google Analytics cookie-kat használ, a honlap használatának elemzése céljából. A cookie által generált, a honlap használatára vonatkozó információkat (beleértve a felhasználó IP-címét) a Google Inc. egyesült államokbeli szervereire továbbítja, és ott tárolja.
          </P>
          <P>
            A Google Inc. a gyűjtött információkat a honlap felhasználó által történő használatának értékelésére, a honlapon végrehajtott tevékenységekről szóló riportoknak a Szolgáltató részére történő összeállítására, valamint a honlapokon végrehajtott tevékenységekkel és az internethasználattal kapcsolatos egyéb szolgáltatások nyújtására használja.
          </P>
          <P>
            A Google Inc. átadhatja ezeket az információkat harmadik felek részére, amennyiben ezt törvény írja elő, vagy az adott harmadik felek a Google Inc. megbízásából feldolgozzák az információkat. A Google Inc. nem társítja a felhasználó IP címét a Google Inc. birtokában lévő egyéb adatokkal.
          </P>
          <P>
            A Google Inc. Adatvédelmi Központja a{' '}
            <Link href="http://www.google.com/intl/hu/privacy/">http://www.google.com/intl/hu/privacy/</Link>{' '}
            oldalon érhető el, ahol a Google Inc. adatkezeléséről és a cookie-k letiltásáról további hasznos információk találhatóak.
          </P>

          <h4 className="font-headline font-bold text-white text-base uppercase tracking-wide mt-8 mb-3">
            Egyéb tudnivalók
          </h4>
          <P>
            Folyamatosan azon dolgozunk, hogy személyes adatai számára technikai és szervezeti szempontból is az elérhető legjobb védelmet biztosítsuk. Ennek ellenére nem tudjuk garantálni a teljeskörű adatvédelmet. Bizalmas adatok átvitelére a postai adatátvitelt javasoljuk.
          </P>

          <SubSection number="4">Cookie-szabályzat</SubSection>

          <h4 className="font-headline font-bold text-white text-base uppercase tracking-wide mt-8 mb-3">
            Mik azok a cookie-k?
          </h4>
          <P>
            A cookie-k kis szövegfájlok, amelyeket számítógépe, táblagépe vagy okostelefonja tárol. NEM veszélyesek a számítógépére vagy az Ön biztonságára nézve, és a közhiedelemmel ellentétben semmi közük a „trójai" jellegű vírusokhoz. Egy honlap meglátogatásakor a cookie-k megjegyzik, hogyan használta a honlapot, így, ha később visszatér az oldalra, jobb felhasználói élményben lehet része.
          </P>
          <P>
            Ha tájékozódni szeretne a cookie-król, az interneten nagyon sok információt találhat.
          </P>

          <h4 className="font-headline font-bold text-white text-base uppercase tracking-wide mt-8 mb-3">
            Hogyan módosíthatom a cookie-kkal kapcsolatos beállításaimat?
          </h4>
          <P>
            Ha nem szeretne cookie-kat fogadni, módosíthatja böngészője beállításait úgy, hogy értesítést kapjon a cookie-k érkezésekor, vagy akár teljesen le is tilthatja őket. A már a készülékén lévő cookie-kat is lehetősége van törölni.
          </P>

          <h4 className="font-headline font-bold text-white text-base uppercase tracking-wide mt-8 mb-3">
            Így használjuk fel a cookie-kat
          </h4>
          <P>
            A Google Inc. (Google) webanalitikai szolgáltatását, a Google Analyticset vesszük igénybe, amely cookie-k segítségével elemzi honlapunk forgalmát, hogy rendszerünk jobb felhasználói élményt nyújthasson Önnek.
          </P>
          <P>
            Honlapunkon úgynevezett „felhasználói azonosítót" használunk. Ön ezzel a felhasználói azonosítóval szerepel a Google Analyticsben. A Google az Ön internetes tevékenységét és a felhasználói azonosítót egy profilhoz rendeli. A Google Analytics anonim módon követi az Ön tevékenységét különböző eszközökön (táblagép, PC, okostelefon stb.).
          </P>
          <P>
            A honlapunk használatával kapcsolatos, cookie-kban rögzített adatokat (beleértve az Ön IP-címét) a Google-nak továbbítjuk, aki az Egyesült Államokban lévő kiszolgálóin tárolja őket. A Google ezen információk segítségével elemzi, hogyan használja Ön a honlapunkat; jelentéseket készít nekünk a honlapunkon zajló forgalomról; valamint a honlapon zajló forgalommal és az internethasználattal kapcsolatos egyéb szolgáltatásokat nyújt.
          </P>
          <P>
            A Google harmadik félnek is továbbadhatja ezeket az adatokat, amennyiben erre törvény kötelezi, vagy ha ezeket az adatokat harmadik fél elemzi a Google megbízásából. A Google nem társítja az Ön IP-címét az általa tárolt egyéb adatokhoz.
          </P>
          <P>
            A Google csak a felhasználói azonosítót kapja meg, a fent említett profilban szereplő információkhoz vagy az Ön egyéb személyes adataihoz nem férhet hozzá. A létrehozott profil összegzett verziójához mi is hozzáférést kapunk. A felhasználói azonosítóhoz tartozó profilhoz soha nem társítunk az Ön személyének azonosítására alkalmas adatokat.
          </P>
          <P>
            A felhasználói azonosítóval történő nyomkövetés leállítását bármikor kérheti a következő címre küldött e-mailben:{' '}
            <a href="mailto:info@mecsekszerviz.hu" className="text-primary hover:text-primary-dark transition-colors">
              info@mecsekszerviz.hu
            </a>
          </P>
          <P>
            A cookie-k fogadását böngészője beállításaiban is letilthatja, de kérjük, vegye figyelembe, hogy így esetleg nem tudja majd honlapunk minden szolgáltatását igénybe venni. A honlap használatával hozzájárul ahhoz, hogy a Google a fentiekben vázolt módon és célból az Ön adatait feldolgozza.
          </P>
          <P>
            A cookie-król bővebben itt olvashat:{' '}
            <Link href="http://www.aboutcookies.org">http://www.aboutcookies.org</Link>
          </P>

          <h4 className="font-headline font-bold text-white text-base uppercase tracking-wide mt-8 mb-3">
            Felhasználói beleegyezés
          </h4>
          <P>
            A honlap használatával elfogadja, hogy készülékére cookie-fájlokat küldjünk. Ha úgy dönt, hogy elutasítja a cookie-k fogadását, nem tudjuk garantálni, hogy a felhasználói élmény teljes lesz.
          </P>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-headline font-bold text-primary text-xl uppercase tracking-wide mt-10 mb-4 first:mt-0">
      {children}
    </h3>
  );
}

function SubSection({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <h3 className="font-headline font-bold text-white text-lg uppercase tracking-wide mt-10 mb-4">
      {number}. {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-white/75 text-sm leading-relaxed mb-4">
      {children}
    </p>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-primary-dark transition-colors underline underline-offset-2"
    >
      {children}
    </a>
  );
}

const definitions = [
  { num: '1.1', term: 'érintett', desc: 'bármely meghatározott, személyes adat alapján azonosított vagy – közvetlenül vagy közvetve – azonosítható természetes személy' },
  { num: '1.2', term: 'személyes adat', desc: 'az érintettel kapcsolatba hozható adat – különösen az érintett neve, azonosító jele, valamint egy vagy több fizikai, fiziológiai, mentális, gazdasági, kulturális vagy szociális azonosságára jellemző ismeret –, valamint az adatból levonható, az érintettre vonatkozó következtetés' },
  { num: '1.3', term: 'hozzájárulás', desc: 'az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok – teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez' },
  { num: '1.4', term: 'tiltakozás', desc: 'az érintett nyilatkozata, amellyel személyes adatainak kezelését kifogásolja, és az adatkezelés megszüntetését, illetve a kezelt adatok törlését kéri' },
  { num: '1.5', term: 'adatkezelő', desc: 'az a természetes vagy jogi személy, illetve jogi személyiséggel nem rendelkező szervezet, aki vagy amely önállóan vagy másokkal együtt az adatok kezelésének célját meghatározza, az adatkezelésre (beleértve a felhasznált eszközt) vonatkozó döntéseket meghozza és végrehajtja, vagy az általa megbízott adatfeldolgozóval végrehajtatja' },
  { num: '1.6', term: 'adatkezelés', desc: 'az alkalmazott eljárástól függetlenül az adatokon végzett bármely művelet vagy a műveletek összessége, így különösen gyűjtése, felvétele, rögzítése, rendszerezése, tárolása, megváltoztatása, felhasználása, lekérdezése, továbbítása, nyilvánosságra hozatala, összehangolása vagy összekapcsolása, zárolása, törlése és megsemmisítése, valamint az adatok további felhasználásának megakadályozása, fénykép-, hang- vagy képfelvétel készítése, valamint a személy azonosítására alkalmas fizikai jellemzők rögzítése' },
  { num: '1.7', term: 'adattovábbítás', desc: 'az adat meghatározott harmadik személy számára történő hozzáférhetővé tétele' },
  { num: '1.8', term: 'nyilvánosságra hozatal', desc: 'az adat bárki számára történő hozzáférhetővé tétele' },
  { num: '1.9', term: 'adattörlés', desc: 'az adatok felismerhetetlenné tétele oly módon, hogy a helyreállításuk többé nem lehetséges' },
  { num: '1.10', term: 'adatmegjelölés', desc: 'az adat azonosító jelzéssel ellátása annak megkülönböztetése céljából' },
  { num: '1.11', term: 'adatzárolás', desc: 'az adat azonosító jelzéssel ellátása további kezelésének végleges vagy meghatározott időre történő korlátozása céljából' },
  { num: '1.12', term: 'adatmegsemmisítés', desc: 'az adatokat tartalmazó adathordozó teljes fizikai megsemmisítése' },
  { num: '1.13', term: 'adatfeldolgozás', desc: 'az adatkezelési műveletekhez kapcsolódó technikai feladatok elvégzése, függetlenül a műveletek végrehajtásához alkalmazott módszertől és eszköztől, valamint az alkalmazás helyétől, feltéve, hogy a technikai feladatot az adatokon végzik' },
  { num: '1.14', term: 'adatfeldolgozó', desc: 'az a természetes vagy jogi személy, illetve jogi személyiséggel nem rendelkező szervezet, aki vagy amely az adatkezelővel kötött szerződése alapján – beleértve a jogszabály rendelkezése alapján történő szerződéskötést is – adatok feldolgozását végzi' },
];

function DefinitionList({ items }: { items: typeof definitions }) {
  return (
    <dl className="space-y-4 my-6 pl-4 border-l-2 border-primary/30">
      {items.map((item) => (
        <div key={item.num}>
          <dt className="font-body text-white/90 text-sm font-semibold">
            {item.num} {item.term}:
          </dt>
          <dd className="font-body text-white/65 text-sm leading-relaxed mt-0.5 pl-4">
            {item.desc}
          </dd>
        </div>
      ))}
    </dl>
  );
}
