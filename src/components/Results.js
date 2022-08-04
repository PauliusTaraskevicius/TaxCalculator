import React from "react";

import { checkNPD } from "./calculation";

const Results = (props) => {
  return (
    <div>
    <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800 border-2 shadow-xl mt-6">
      <tr className="bg-gray-100 border-b border-gray-200">
        <td className="px-4 py-4">
          Atlyginimas neatskaičius mokesčių (ant popieriaus):
        </td>
        <td className="px-4 py-4 text-right">
          {+props.salary ? (+props.salary).toFixed(2) : "0.00"}
        </td>
      </tr>

      <tr className="bg-gray-100 border-b border-gray-200">
        <td className="px-4 py-4">
          Gyventojų pajamų mokestis (tarifas 20%, pritaikytas NPD{" "}
          {+props.salary <= 539 ? +props.salary + ".00" : checkNPD(props.salary)}):
        </td>
        <td className="px-4 py-4 text-right">
          {+props.gpmType < 0 ? "0.00" : props.salary ? (+props.gpmType).toFixed(2) : "0.00"}
        </td>
      </tr>
      <tr className="bg-gray-100 border-b border-gray-200">
        <td className="px-4 py-4">
          Darbuotojo soc.draudimo įmoka (tarifas 19.5%):
        </td>
        <td className="px-4 py-4 text-right">
          {+props.pensionType ? (+props.pensionType).toFixed(2) : "0.00"}
        </td>
      </tr>

      <tr className="bg-gray-100 border-b border-gray-200 font-bold">
        <td className="px-4 py-4">
          Mokėtinas atlyginimas atskaičius mokesčius (į rankas):
        </td>
        <td className="px-4 py-4 text-right">
          {props.salary <= 540
            ? (+props.salary - +props.pensionType).toFixed(2)
            : +props.salary
            ? (+props.salary - +props.pensionType - +props.gpmType).toFixed(2)
            : "0.00"}
        </td>
      </tr>

      <tr className="bg-gray-100 border-b border-gray-200">
        <td className="px-4 py-4">
          Darbdavio soc.draudimo įmoka (tarifas 1.77%):
        </td>
        <td className="px-4 py-4 text-right">
          {+props.type ? (+props.type).toFixed(2) : "0.00"}
        </td>
      </tr>

      <tr className="bg-gray-100 border-b border-gray-200">
        <td className="px-4 py-4">Darbo vietos kaina (darbdavio išlaidos):</td>
        <td className="px-4 py-4 text-right">
          {+props.salary ? (+props.salary + +props.type).toFixed(2) : "0.00"}
        </td>
      </tr>

      <tr className="bg-gray-100 border-b border-gray-200 font-bold">
        <td className="px-4 py-4">
          Sodrai mokėtina suma, įmokos kodas 252 (
          <a
            className="text-blue-600/100 hover:underline hover:text-blue-800"
            target="_blank"
            rel="noreferrer"
            href="https://www.sodra.lt/surenkamosios-saskaitos"
          >
            Sodros sąskaitos
          </a>
          ):
        </td>
        <td className="px-4 py-4 text-right">
          {+props.salary ? (+props.pensionType + +props.type).toFixed(2) : "0.00"}
        </td>
      </tr>

      <tr className="bg-gray-100 border-b border-gray-200 font-bold">
        <td className="px-4 py-4">
          Mokesčių inspekcijai mokėtina suma, įmokos kodas 1411(
          <a
            className="text-blue-600/100 hover:underline hover:text-blue-800"
            target="_blank"
            rel="noreferrer"
            href="https://www.vmi.lt/evmi/"
          >
            VMI sąskaitos
          </a>
          ):
        </td>
        <td className="px-4 py-4 text-right">
          {+props.gpmType < 0 ? "0.00" : +props.salary ? (+props.gpmType).toFixed(2) : "0.00"}
        </td>
      </tr>
    </table>
  </div>
  )
};

export default Results;
