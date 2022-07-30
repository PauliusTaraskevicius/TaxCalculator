import React from "react";

const Description = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen mt-6">
        <div className="rounded-xl border p-5 shadow-xl w-10/12 bg-white ">
          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold">
              <h2>Atlyginimo skaičiuoklė</h2>
            </div>
            <div className="text-xl text-neutral-600">
              Atlyginimo skaičiuoklė - tai internetinė programa, skirta algos
              sumai po mokesčių (į rankas / neto) arba sumai prieš mokesčius
              (ant popieriaus / bruto) apskaičiuoti. Įvedus sumą ant popieriaus,
              apskaičiuojama suma į rankas. Įvedus sumą į rankas, apskaičiuojama
              suma ant popieriaus. Skaičiuoklė taip pat suskaičiuoja darbo
              vietos kainą (darbdavio išlaidas), esant nurodytoms darbo
              užmokesčio sumoms bei parodo, kokia bus atlyginimo suma prieš ir
              kokia po mokesčių.
              <br />
              <br />
              Atlyginimo skaičiuoklė apskaičiuoja pajamų mokesčio ir socialinio
              draudimo įmokų sumas. Skaičiuoklėje pateikiamos nuorodos į
              Valstybinio socialinio fondo valdybos (Sodrai) bei Valstybinei
              mokesčių inspekcijos puslapius, kuriuose nurodytos sąskaitos
              apskaičiuotų mokesčių sumokėjimui.
            </div>
          </div>

          <div className="mt-12 mb-6">
            <div className="mb-3 text-xl font-bold">
              <h2>Atlyginimo į rankas/ant popieriaus skaičiavimas</h2>
            </div>
            <div className="text-xl text-neutral-600">
              Skaičiuoklėje įvedamas vienas iš trijų laukų. Kitų dviejų laukų
              reikšmės apskaičiuojamos automatiškai.
              <ul className="list-disc pl-8 pt-4">
                <li className="pb-3">
                  <strong>Atlyginimas ant popieriaus</strong> - darbo sutartyje
                  nurodyta arba priskaičiuota alga neatėmus mokesčių.
                </li>
                <li className="pb-3">
                  <strong>Atlyginimas ant popieriaus</strong> - darbo sutartyje
                  nurodyta arba priskaičiuota alga neatėmus mokesčių.
                </li>
                <li className="pb-3">
                  <strong>Darbo vietos kaina</strong> - darbdavio išlaidų suma,
                  kurią darbdavys turi išleisti tam, kad galėtų išmokėti
                  atlyginimo į rankas lauke nurodytą sumą.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 mb-6">
            <div className="mb-3 text-xl font-bold">
              <h2>Skaičiuoklės nustatymai</h2>
            </div>
            <div className="text-xl text-neutral-600">
              Skaičiuoklėje nurodomi skaičiavimo parametrai, kurių reikšmės
              priklauso nuo darbuotojo ir darbdavio.
              <ul className="list-disc pl-8 pt-4">
                <li className="pb-3">
                  <strong>Neapmokestinamas pajamų dydis</strong> - taikomas tuo
                  atveju, jeigu darbuotojas darbdaviui pateikia prašymą jį
                  taikyti. Nepateikus prašymo, reikalinga rinktis reikšmę
                  "Netaikomas". Riboto darbingumo atveju atlyginimo
                  skaičiuoklėje nurodomas darbingumo lygis.
                </li>
                <li className="pb-3">
                  <strong>Papildomas pensijos kaupimas</strong> - nurodoma, ar
                  darbuotojas kaupia papildomai pensijos daliai, ar nekaupia, ar
                  kaupia palaipsniui.
                </li>
                <li className="pb-3">
                  <strong>Sutarties tipas</strong> - nurodoma, ar sutartis
                  terminuota, ar neterminuota (be nustatytos galiojimo pabaigos
                  datos).
                </li>
                <li className="pb-3">
                  <strong>Darbdavio tipas</strong> - uždarųjų akcinių bendrovių,
                  mažųjų bendrijų bei kitų privačių darbdavių atveju nurodomas,
                  kad tai privatus darbdavys.
                </li>
                <li className="pb-3">
                  <strong>Darbdavio grupės</strong> - dauguma darbdavio
                  priklauso I grupei, todėl skaičiuoklėje paprastai bus
                  parenkama ši grupė. Kitoms grupėms darbdavys priskiriamas
                  jeigu yra įvykę nelaimingų atsitikimų.
                </li>
                <li className="pb-3">
                  <strong>Metai</strong> - parenkami metai, kurių atlyginimas
                  yra skaičiuojamas. Kiekvienais metais mokesčių tarifai ir
                  skaičiavimo tvarka skiriasi.
                </li>
              </ul>
              Atlyginimo skaičiuoklė neatsižvelgia į papildomas socialinio
              draudimo įmokas, kurias reikalinga sumokėti, jeigu darbuotojui
              mokamas atlyginimas yra mažesnis nei minimali mėnesinio alga ir
              darbuotojas nedirba kitoje darbovietėje ar nėra draustas kitu
              būdu.
            </div>
          </div>

          <div className="mt-12 mb-6">
            <div className="mb-3 text-xl font-bold">
              <h2>NPD (neapmokestinamojo pajamų dydžio) skaičiavimas</h2>
            </div>
            <div className="text-xl text-neutral-600">
              Atlyginimo skaičiuoklė taip pat apskaičiuoja taikomą NPD
              (neapmokestinamąjį pajamų dydį). NPD taikomas ir dalis pajamų
              neapmokestinama tik tuo atveju, jeigu darbuotojas pateikia prašymą
              darbdaviui jį taikyti. Prašymą galima pateikti tik vienoje
              darbovietėje. Skaičiuojant atlyginimą taikoma NPD suma priklauso
              nuo darbuotojo darbingumo lygio.
              <br />
              <br />
              Jeigu darbuotojo darbingumas - 0-25 proc., tuomet taikomas
              neapmokestinamasis pajamų dydis yra fiksuota suma, kuri 2022
              metais lygi 740 EUR per mėnesį. Jeigu darbingumo lygis - 30-55
              proc, tuomet taikoma NPD suma 2022 metais yra 690 EUR per mėnesį.
              Kitais atvejais taikoma NPD suma apskaičiuojama pagal formulę: NPD
              = 460 – 0,26 x (mėnesio pajamos, t.y. 730). Formulėje pajamos yra
              su darbo santykiais susijusios pajamos, t.y. atlyginimas. 730 EUR
              yra minimalioji mėnesinės alga, galiojusi einamųjų kalendorinių
              metų sausio 1 dieną.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
