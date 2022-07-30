import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-12">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-white">
              <h3 className="font-bold">Sprendimas</h3>
              <a target="_blank" rel="noreferrer" href="https://www.addad.lt">
                <p className="p-1 no-underline hover:underline hover:text-blue-800">
                  Addad.lt
                </p>
              </a>
              <p className="p-1">
                2022 © Kaip-uzsidirbti.lt - visos teisės saugomos. Griežtai
                draudžiama kopijuoti tinklapyje pateikta informaciją be raštiško
                sutikimo.
              </p>
              <p className="p-1 ">
                Domina reklama mūsų tinklapyje? -{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.kaip-uzsidirbti.lt/reklama/"
                >
                  <strong className="no-underline hover:underline hover:text-blue-800">
                    Susisiekite!
                  </strong>
                </a>
              </p>
            </div>

            <div className="flex-1 px-2">
              <h3 className="uppercase text-white font-bold md:mb-6">
                Informacija
              </h3>
              <ul className="list-reset mb-6 text-white">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.kaip-uzsidirbti.lt/apie-mus/"
                    className="no-underline hover:underline  hover:text-blue-800"
                  >
                    Apie Mus
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.kaip-uzsidirbti.lt/susisiekite/"
                    className="no-underline hover:underline hover:text-blue-800"
                  >
                    Susisiekite
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.kaip-uzsidirbti.lt/reklama/"
                    className="no-underline hover:underline hover:text-blue-800"
                  >
                    Reklama
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.kaip-uzsidirbti.lt/privatumo-politika/"
                    className="no-underline hover:underline hover:text-blue-800"
                  >
                    Privatumo Politika
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.kaip-uzsidirbti.lt/slapuku-politika/"
                    className="no-underline hover:underline hover:text-blue-800"
                  >
                    Slapukų politika
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 px-2">
              <h3 className="uppercase text-white font-bold md:mb-6">Social</h3>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://www.facebook.com/kaipuzsidirbti/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="facebook icow-8 h-8"
                      src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-facebook-social-media-justicon-flat-justicon.png"
                      alt="..."
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 px-2">
              <h3 className="uppercase text-white  font-bold md:mb-6">
                Atsakomybės apribojimas
              </h3>
              <ul className="list-reset mb-6 text-white">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <p>
                    Mūsų tinklapis (kaip-uzsidirbti.lt) nėra sertifikuotas
                    finansinis patarėjas, skolintojas ar finansinė institucija.
                  </p>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <p>
                    Jūs suprantate, kad tik jūs esate atsakingi už savo
                    veiksmus, o informacija tinklalapyje yra tik mūsų asmeninė
                    nuomonė. Mes neskatiname jūsų pirkti ar naudotis mūsų
                    aprašomais patarimais bei nerekomenduojame investuoti
                    nepasitarus su profesionalais bei neprisiimame jokios
                    atsakomybės už jūsų prekybos ir investavimo rezultatus.
                  </p>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <p>
                    Įsitinkinkite, kad suprantate riziką ir valdykite savo
                    finansus atsakingai!{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
