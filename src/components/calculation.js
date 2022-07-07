import { contractType, employerSodra, NPD } from "./data";

// NPD iR GPM
export function standardNPD(salary) {
  salary <= +1704 ? (NPD.standardNPD = 540) : (NPD.standardNPD = 400);

  const result =
    salary >= 2865
      ? +0
      : NPD.standardNPD === 540
      ? NPD.standardNPD - 0.34 * (salary - 730)
      : NPD.standardNPD - 0.18 * (salary - 642);
  return result;
}

export function calculateNPD(salary) {
  const notApplicable = (salary * 20) / 100;
  const individualNPD25 =
    salary <= NPD.individualUpTo25NPD
      ? +0
      : ((salary - NPD.individualUpTo25NPD) * 20) / 100;
  const individualNPD55 =
    salary <= NPD.individualUpTo25NPD
      ? +0
      : ((salary - NPD.individualUpTo55NPD) * 20) / 100;

  return {
    notApplicable,
    individualNPD25,
    individualNPD55,
  };
}

export function GPM(salary) {
  const GPM =
    salary >= +2865
      ? ((salary - 0) * 20) / 100
      : ((salary - standardNPD(salary)) * 20) / 100;
  return GPM;
}

// DARBUOTOJO SODRA
export function calculateSodra(salary) {
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

// DARBDAVYS
