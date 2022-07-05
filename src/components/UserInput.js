import React from "react";

const UserInput = () => {
  return (
  <>
      <div className="w-5/6 mx-auto bg-white p-16 border-2 shadow-xl mt-6">
        <form>
          <div className="fields grid gap-6 mb-6 lg:grid-cols-3">
              <div>
                  <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ant popieriaus</label>
                  <input type="text" id="first_name" className="py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.00" required/>
              </div>
              <div>
                  <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Į rankas</label>
                  <input type="text" id="last_name" className="py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.00" required/>
              </div>
              
              <div>
                  <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Darbo vietos kaina</label>
                  <input type="text" id="company" className="py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.00" required/>
              </div>  
              <div>
                  <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Neapmokestinamas pajamų dydis</label>
                  <select id="small" className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Pasirinkite tipą</option>
                    <option value="standard">Taikomas standartinis</option>
                    <option value="capacity25">0 - 25% darbingumas</option>
                    <option value="capacity55">30 - 55% darbingumas</option>
                  </select>
              </div>
              <div>
                  <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Papildomas pensijos kaupimas</label>
                  <select id="small" className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Pasirinkite tipą</option>
                    <option value="no-collect">Nekaupia</option>
                    <option value="collect">Kaupia palaipsniui</option>
                    <option value="collect3">Kaupia 3%</option>
                  </select>
              </div>
              <div>
                  <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sutarties tipas</label>
                  <select id="small" className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Pasirinkite tipą</option>
                    <option value="timed">Terminuota</option>
                    <option value="indefinite">Neterminuota</option>
                  </select>
              </div>

              <div>
                  <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Darbdavio tipas</label>
                  <select id="small" className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Pasirinkite tipą</option>
                    <option value="private">Privatus</option>
                    <option value="budget">Biudžetinė įstaiga</option>
                    <option value="lithuania">Lietuvos bankas</option>
                    <option value="politics">Politinė partija</option>
                    <option value="proff">Profesinė sąjunga</option>
                    <option value="religious">Religinės bendruomenės</option>
                  </select>
              </div>

              <div>
                  <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Darbdavio grupė</label>
                  <select id="small" className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Pasirinkite tipą</option>
                    <option value="1">I grupė</option>
                    <option value="2">II grupė</option>
                    <option value="3">III grupė</option>
                    <option value="4">IV grupė</option>
                  </select>
              </div>

              <div>
                  <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Metai</label>
                  <select id="small" className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Pasirinkite tipą</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                  </select>
              </div>
              
            <div>
              <p>
              Atlyginimo skaičiuoklė suderinta su teisės aktų pakeitimais, įsigaliojusiais nuo 2022 m. sausio 1 d. (atnaujinta pagal 2022-05-17 d. įstatymo paketimus)
              </p>
            </div>
          </div>
        </form>
      </div>
  </>
  );
};

export default UserInput;
