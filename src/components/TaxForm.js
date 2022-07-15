import React from "react";

import { useState, useEffect } from "react";
import { contractType, employerSodra, NPD } from "./data";
import { standardNPD, calculateNPD, GPM, calculateSodra, calculateSalary } from "./calculation";
  // console.log(calculateNPD(540).GPM)
  // GPM sutvarkyt
  // Neleidzia fieldu option pasirinkti (galima idel calculations.js formuliu)
  // REACT-SELECT
const TaxForm = () => {

  const [salary, setSalary] = useState(0);
  const [handSalary, setHandSalary] = useState(0.00);
  const [workSpacePrice, setWorkSpacePrice] = useState(0.00);

  const [gpm, setGPM] = useState('0.00');
  const [pension, setPension] = useState('0.00')

  const [contract, setContract] = useState('')
  const [employerType, setEmployerType] = useState('')
  const [selectGroup, setSelectGroup] = useState('')

  const changeContractHandler = (event) => {
    setContract(event.target.value);
  };

  const changeEmployerTypeHandler = (event) => {
    setEmployerType(event.target.value)
  }

  const changeGroupHandler = (event) => {
    setSelectGroup(event.target.value)
  }

  const checkNPD = (salary) => {
    const check = salary <= 1704 && salary >=730 ? 540 - 0.34 * (salary - 730) : (salary < 730 ? 540 : 400 - 0.18 * (salary - 642))
    return check
  }

  let type = '0.00'

  // ***********NETERMINUOTA***********

  if(contract === "Neterminuota" && employerType === "Privatus" && selectGroup === "I grupė") {
    type = contractType.indefiniteContract.calculategroup1(salary).employer
  } else if (contract === "Neterminuota" && employerType === "Privatus" && selectGroup === "II grupė") {
    type = contractType.indefiniteContract.calculategroup2(salary).employer
  } else if (contract === "Neterminuota" && employerType === "Privatus" && selectGroup === "III grupė") {
    type = contractType.indefiniteContract.calculategroup3(salary).employer
  } else if (contract === "Neterminuota" && employerType === "Privatus" && selectGroup === "IV grupė") {
    type = contractType.indefiniteContract.calculateGroup4(salary).employer
  }

  if(contract === "Neterminuota" && employerType === "budgetInstitutions" && selectGroup === "I grupė") {
    type = contractType.indefiniteContract.calculategroup1(salary).budgetInst
  } else if (contract === "Neterminuota" && employerType === "budgetInstitutions" && selectGroup === "II grupė") {
    type = contractType.indefiniteContract.calculategroup2(salary).budgetInst
  } else if (contract === "Neterminuota" && employerType === "budgetInstitutions" && selectGroup === "III grupė") {
    type = contractType.indefiniteContract.calculategroup3(salary).budgetInst
  } else if (contract === "Neterminuota" && employerType === "budgetInstitutions" && selectGroup === "IV grupė") {
    type = contractType.indefiniteContract.calculateGroup4(salary).budgetInst
  }

  if(contract === "Neterminuota" && employerType === "other" && selectGroup === "I grupė") {
    type = contractType.indefiniteContract.calculategroup1(salary).other
  } else if (contract === "Neterminuota" && employerType === "other" && selectGroup === "II grupė") {
    type = contractType.indefiniteContract. calculategroup2(salary).other
  } else if (contract === "Neterminuota" && employerType === "other" && selectGroup === "III grupė") {
    type = contractType.indefiniteContract. calculategroup3(salary).other
  } else if (contract === "Neterminuota" && employerType === "other" && selectGroup === "IV grupė") {
    type = contractType.indefiniteContract.calculateGroup4(salary).other
  }

  // ***********TERMINUOTA***********

  if(contract === "Terminuota" && employerType === "Privatus" && selectGroup === "I grupė") {
    type = contractType.timedContract.calculategroup1(salary).employer
  } else if (contract === "Terminuota" && employerType === "Privatus" && selectGroup === "II grupė") {
    type = contractType.timedContract.calculategroup2(salary).employer
  } else if (contract === "Terminuota" && employerType === "Privatus" && selectGroup === "III grupė") {
    type = contractType.timedContract.calculategroup3(salary).employer
  } else if (contract === "Terminuota" && employerType === "Privatus" && selectGroup === "IV grupė") {
    type = contractType.timedContract.calculategroup4(salary).budgetInst
  }

  if(contract === "Terminuota" && employerType === "budgetInstitutions" && selectGroup === "I grupė") {
    type = contractType.timedContract.calculategroup1(salary).budgetInst
  } else if (contract === "Terminuota" && employerType === "budgetInstitutions" && selectGroup === "II grupė") {
    type = contractType.timedContract.calculategroup2(salary).budgetInst
  } else if (contract === "Terminuota" && employerType === "budgetInstitutions" && selectGroup === "III grupė") {
    type = contractType.timedContract.calculategroup3(salary).budgetInst
  } else if (contract === "Terminuota" && employerType === "budgetInstitutions" && selectGroup === "IV grupė") {
    type = contractType.timedContract.calculategroup4(salary).budgetInst
  }

  if(contract === "Terminuota" && employerType === "other" && selectGroup === "I grupė") {
    type = contractType.timedContract.calculategroup1(salary).other
  } else if (contract === "Terminuota" && employerType === "other" && selectGroup === "II grupė") {
    type = contractType.timedContract. calculategroup2(salary).other
  } else if (contract === "Terminuota" && employerType === "other" && selectGroup === "III grupė") {
    type = contractType.timedContract. calculategroup3(salary).other
  } else if (contract === "Terminuota" && employerType === "other" && selectGroup === "IV grupė") {
    type = contractType.timedContract.calculategroup4(salary).other
  }


  return (
    <>
      <div className="w-5/6 mx-auto bg-white p-16 border-2 shadow-xl mt-6">
        <form>
          <div className="fields grid gap-6 mb-6 lg:grid-cols-3">
            <div>
              <label
                htmlFor="salary"
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
                value={salary} 
                onChange={(e) => setSalary(parseInt(e.target.value))}
              />
            </div>
            <div>
              <label
                htmlFor="salary_to_hand"
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
                htmlFor="work_space_price"
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
                htmlFor="npd"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Neapmokestinamas pajamų dydis
              </label>
              <select
                id="npd"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setGPM(e.target.value)}
              >

          
                <option value={salary >= 2865 ? (((salary - 0) * 20) / 100).toFixed(2) : ((salary - checkNPD(salary)) * 20 / 100).toFixed(2)}>Taikomas standartinis</option>
                <option value={calculateNPD(salary).notApplicable}>Netaikomas</option>
                <option value={calculateNPD(salary).individualNPD25}>0 - 25% darbingumas</option>
                <option value={calculateNPD(salary).individualNPD55}>30 - 55% darbingumas</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="pension"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Papildomas pensijos kaupimas
              </label>
              <select
                id="pension"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={pension} onChange={(e) => setPension(e.target.value)}
              >
                <option value={calculateSodra(salary).notAccumulating}>Nekaupia</option>
                <option value={calculateSodra(salary).accumulatingConstantly}>Kaupia palaipsniui</option>
                <option value={calculateSodra(salary).accumulatingAdditional}>Kaupia 3%</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="contractType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Sutarties tipas
              </label>
              <select
                id="contractType"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={changeContractHandler}
              >
                <option>Neterminuota</option>
                <option>Terminuota</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="employerType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Darbdavio tipas
              </label>
              <select
                id="employerType"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               
                onChange={changeEmployerTypeHandler}
              >
                <option>Privatus</option>
                <option value='budgetInstitutions'>Biudžetinė Įstaiga</option>
                <option value='budgetInstitutions'>Lietuvos bankas</option>
                <option value='other'>Politinė partija</option>
                <option value='other'>Profesinė sąjunga</option>
                <option value='other'>Religinės bendruomenės</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="employerGroup"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Darbdavio grupė
              </label>
              <select
                id="employerGroup"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={changeGroupHandler}
              >
                <option>I grupė</option>
                <option>II grupė</option>
                <option>III grupė</option>
                <option>IV grupė</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="years"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Metai
              </label>
              <select
                id="years"
                className="block py-4 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="2022">2022</option>

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

      {/* *************************RESULTS************************* */}

      <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800 border-2 shadow-xl mb-8">
        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-4">
            Atlyginimas neatskaičius mokesčių (ant popieriaus):
          </td>
          <td className="px-4 py-4">{salary.toFixed(2)}</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-4">
            Gyventojų pajamų mokestis (tarifas 20%, pritaikytas NPD 0.00):
          </td>
          <td className="px-4 py-4">{gpm < 0 ? 0 : gpm}</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-4">
            Darbuotojo soc.draudimo įmoka (tarifas 19.5%):
          </td>
          <td className="px-4 py-4">{pension}</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200 font-bold">
          <td className="px-4 py-4">
            Mokėtinas atlyginimas atskaičius mokesčius (į rankas):
          </td>
          <td className="px-4 py-4">{(salary - pension - gpm).toFixed(2)}</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-4">
            Darbdavio soc.draudimo įmoka (tarifas 1.77%):
          </td>
          <td className="px-4 py-4">{+type}</td>
        </tr>

        <tr className="bg-gray-100 border-b border-gray-200">
          <td className="px-4 py-4">
            Darbo vietos kaina (darbdavio išlaidos):
          </td>
          <td className="px-4 py-4">{salary + +type}</td>
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
          <td className="px-4 py-4">{(+pension + +type).toFixed(2)}</td>
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
          <td className="px-4 py-4">{gpm}</td>
        </tr>
      </table>
    </>
  );
};

export default TaxForm;
