import React from "react";

import { useState, useMemo } from "react";
import { contractType, employerSodra, NPD } from "./data";

const TaxForm = () => {

  const [salary, setSalary] = useState(0);
  const [handSalary, setHandSalary] = useState(0);
  const [workSpacePrice, setWorkSpacePrice] = useState(0);

  return (
    <>
      <div className="w-5/6 mx-auto bg-white p-16 border-2 shadow-xl mt-6">
        <form>
          <div className="fields grid gap-6 mb-6 lg:grid-cols-3">
            <div>
              <label
                for="salary"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ant popieriaus
              </label>
              <input
                type="number"
                id="salary"
                className="form-control py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ant popieriaus"
                value={ salary } 
                onChange={(e) => setSalary(parseInt(e.target.value))}
              />
            </div>
            <div>
              <label
                for="salary_to_hand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Į rankas
              </label>
              <input
                type="number"
                id="salary_to_hand"
                className="py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Į rankas"
                value={handSalary}
                onChange={(e) => setHandSalary(parseInt(e.target.value))}
              />
            </div>

            <div>
              <label
                for="work_space_price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Darbo vietos kaina
              </label>
              <input
                type="number"
                id="work_space_price"
                className="py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0.00"
                value={workSpacePrice}
                onChange={(e) => setWorkSpacePrice(parseInt(e.target.value))}
              />
            </div>
            <div>
              <label
                for="npd"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Neapmokestinamas pajamų dydis
              </label>
              <select
                id="npd"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="standard" selected>Taikomas standartinis</option>
                <option value="notApplicable">Netaikomas</option>
                <option value="capacity25">0 - 25% darbingumas</option>
                <option value="capacity55">30 - 55% darbingumas</option>
              </select>
            </div>
            <div>
              <label
                for="pension"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Papildomas pensijos kaupimas
              </label>
              <select
                id="pension"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="no-collect" selected>Nekaupia</option>
                <option value="collect">Kaupia palaipsniui</option>
                <option value="collect3">Kaupia 3%</option>
              </select>
            </div>
            <div>
              <label
                for="contractType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Sutarties tipas
              </label>
              <select
                id="contractType"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="indefinite" selected>Neterminuota</option>
                <option value="timed">Terminuota</option>
              </select>
            </div>

            <div>
              <label
                for="employerType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Darbdavio tipas
              </label>
              <select
                id="employerType"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="private" selected>Privatus</option>
                <option value="budget">Biudžetinė įstaiga</option>
                <option value="lithuania">Lietuvos bankas</option>
                <option value="politics">Politinė partija</option>
                <option value="proff">Profesinė sąjunga</option>
                <option value="religious">Religinės bendruomenės</option>
              </select>
            </div>

            <div>
              <label
                for="employerGroup"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Darbdavio grupė
              </label>
              <select
                id="employerGroup"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1" selected>I grupė</option>
                <option value="2">II grupė</option>
                <option value="3">III grupė</option>
                <option value="4">IV grupė</option>
              </select>
            </div>

            <div>
              <label
                for="years"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Metai
              </label>
              <select
                id="years"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="2022" selected>2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>

            <div>
              <p>
                Atlyginimo skaičiuoklė suderinta su teisės aktų pakeitimais,
                įsigaliojusiais nuo 2022 m. sausio 1 d. (atnaujinta pagal
                2022-05-17 d. įstatymo paketimus)
              </p>
            </div>
          </div>
        </form>
      </div>

      <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800 border-2 shadow-xl mb-8">
        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-4">
            Atlyginimas neatskaičius mokesčių (ant popieriaus):
          </td>
          <td className="px-4 py-4">0.00</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-4">
            Gyventojų pajamų mokestis (tarifas 20%, pritaikytas NPD 0.00):
          </td>
          <td className="px-4 py-4">0.00</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-4">
            Darbuotojo soc.draudimo įmoka (tarifas 19.5%):
          </td>
          <td className="px-4 py-4">0.00</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200 font-bold">
          <td className="px-4 py-4">
            Mokėtinas atlyginimas atskaičius mokesčius (į rankas):
          </td>
          <td className="px-4 py-4">0.00</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-4">
            Darbdavio soc.draudimo įmoka (tarifas 1.77%):
          </td>
          <td className="px-4 py-4">0.00</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-4">
            Darbo vietos kaina (darbdavio išlaidos):
          </td>
          <td className="px-4 py-4">0.00</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200 font-bold">
          <td className="px-4 py-4">
            Sodrai mokėtina suma, įmokos kodas 252 (
            <a
              className="text-blue-600/100"
              target="_blank"
              rel="noreferrer"
              href="https://www.sodra.lt/surenkamosios-saskaitos"
            >
              Sodros sąskaitos
            </a>
            ):
          </td>
          <td className="px-4 py-4">0.00</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200 font-bold">
          <td className="px-4 py-4">
            Mokesčių inspekcijai mokėtina suma, įmokos kodas 1411(
            <a
              className="text-blue-600/100"
              target="_blank"
              rel="noreferrer"
              href="https://www.vmi.lt/evmi/"
            >
              VMI sąskaitos
            </a>
            ):
          </td>
          <td className="px-4 py-4">0.00</td>
        </tr>
      </table>
    </>
  );
};

export default TaxForm;
