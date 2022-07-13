import { contractType, employerSodra, NPD } from "./data";

// NPD iR GPM
function standardNPD(salary) {
  salary <= +1704 ? (NPD.standardNPD = 540) : (NPD.standardNPD = 400);

  const result =
    salary >= 2865
      ? +0
      : NPD.standardNPD === 540
      ? NPD.standardNPD - 0.34 * (salary - 730)
      : NPD.standardNPD - 0.18 * (salary - 642);
  return result;
}

function calculateNPD(salary) {
  const GPM = (
    salary >= +2865
      ? ((salary - 0) * 20) / 100
      : ((salary - standardNPD(salary)) * 20) / 100
  ).toFixed(2);

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
    GPM,
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

// Į rankas
function calculateSalary(salary) {
  const result =
    (salary - calculateSodra(salary).notAccumulating - calculateNPD(salary).GPM).toFixed(2);
  return result;
}

export { standardNPD, calculateNPD, calculateSodra, calculateSalary };
