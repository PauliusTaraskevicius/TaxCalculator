import { contractType, employerSodra, NPD } from "./data";

// NPD iR GPM
function checkNPD(salary) {
  const check =  salary <= 1704 && salary >=730 ? 540 - 0.34 * (salary - 730) : (salary < 730 ? 540 : 400 - 0.18 * (salary - 642))
  return check
}

function calculateNPD(salary) {
  const standardNPD = salary >= 2865 ? (((salary - 0) * 20) / 100).toFixed(2) : ((salary - checkNPD(salary)) * 20 / 100).toFixed(2)

  const notApplicable = ((salary * 20) / 100).toFixed(2);

  const individualNPD25 = (
    salary <= NPD.individualUpTo25NPD
      ? +0
      : ((salary - NPD.individualUpTo25NPD) * 20) / 100
  ).toFixed(2);

  const individualNPD55 = (
    salary <= NPD.individualUpTo25NPD
      ? +0
      : ((salary - NPD.individualUpTo55NPD) * 20) / 100
  ).toFixed(2);
  return {
    standardNPD,
    notApplicable,
    individualNPD25,
    individualNPD55,
  };
}

// DARBUOTOJO SODRA
function calculateSodra(salary) {
  const notAccumulating = (salary * employerSodra.doNotAccumulate) / 100;
  const accumulatingConstantly =
    (salary * employerSodra.collectsConstantly) / 100;
  const accumulatingAdditional =
    (salary * employerSodra.collectsAdditional) / 100;

  return {
    notAccumulating,
    accumulatingConstantly,
    accumulatingAdditional,
  };
}

export { calculateNPD, calculateSodra, checkNPD };
