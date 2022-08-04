// https://www.mokesciu-sufleris.lt/skaiciuokle-darbo-uzmokestis-2022-01-01.html
export const NPD = {
  standardNPD: 0,
  noNPD: 0,
  individualUpTo25NPD: 870,
  individualUpTo55NPD: 810,
};

export const employerSodra = {
  doNotAccumulate: 19.5,
  collectsConstantly: 22.2,
  collectsAdditional: 22.5,
};

export const contractType = {
  indefiniteContract: {
    group1: {
      employer: 1.77,
      budgetInstitution: 1.45,
      ltBank: 1.45,
      politicalUnion: 1.61,
      proffUnion: 1.61,
      religious: 1.61,
    },

    calculategroup1(salary) {
      const employer = (salary * this.group1.employer /100).toFixed(2)
      const budgetInst = (salary * this.group1.budgetInstitution / 100).toFixed(2)
      const lithuanianBank = (salary * this.group1.ltBank / 100).toFixed(2)
      const other = (salary * this.group1.politicalUnion / 100).toFixed(2)

      return {
        employer,
        budgetInst,
        lithuanianBank,
        other
      }
    },

    group2: {
      employer: 2.1,
      budgetInstitution: 1.78,
      ltBank: 1.78,
      politicalUnion: 1.94,
      proffUnion: 1.94,
      religious: 1.94,
    },

    calculategroup2(salary) {
      const employer = (salary * this.group2.employer /100).toFixed(2)
      const budgetInst = (salary * this.group2.budgetInstitution / 100).toFixed(2)
      const lithuanianBank = (salary * this.group2.ltBank / 100).toFixed(2)
      const other = (salary * this.group2.politicalUnion / 100).toFixed(2)

      return {
        employer,
        budgetInst,
        lithuanianBank,
        other
      }
    },
    group3: {
      employer: 2.33,
      budgetInstitution: 2.01,
      ltBank: 2.01,
      politicalUnion: 2.17,
      proffUnion: 2.17,
      religious: 2.17,
    },

    calculategroup3(salary) {
      const employer = (salary * this.group3.employer /100).toFixed(2)
      const budgetInst = (salary * this.group3.budgetInstitution / 100).toFixed(2)
      const lithuanianBank = (salary * this.group3.ltBank / 100).toFixed(2)
      const other = (salary * this.group3.politicalUnion / 100).toFixed(2)

      return {
        employer,
        budgetInst,
        lithuanianBank,
        other
      }
    },
    group4: {
      employer: 3.03,
      budgetInstitution: 2.71,
      ltBank: 2.71,
      politicalUnion: 2.87,
      proffUnion: 2.87,
      religious: 2.87,
    },

    calculateGroup4(salary) {
      const employer = (salary * this.group4.employer /100).toFixed(2)
      const budgetInst = (salary * this.group4.budgetInstitution / 100).toFixed(2)
      const lithuanianBank = (salary * this.group4.ltBank / 100).toFixed(2)
      const other = (salary * this.group4.politicalUnion / 100).toFixed(2)

      return {
        employer,
        budgetInst,
        lithuanianBank,
        other
      }
    },
  },

  timedContract: {
    group1: {
      employer: 2.49,
      budgetInstitution: 2.17,
      ltBank: 2.17,
      politicalUnion: 2.33,
      proffUnion: 2.33,
      religious: 2.33,
    },

    calculategroup1(salary) {
      const employer = (salary * this.group1.employer / 100).toFixed(2)
      const budgetInst = (salary * this.group1.budgetInstitution / 100).toFixed(2)
      const lithuanianBank = (salary * this.group1.ltBank / 100).toFixed(2)
      const other = (salary * this.group1.politicalUnion / 100).toFixed(2)

      return {
        employer,
        budgetInst,
        lithuanianBank,
        other
      }
    },
    group2: {
      employer: 2.82,
      budgetInstitution: 2.5,
      ltBank: 2.5,
      politicalUnion: 2.66,
      proffUnion: 2.66,
      religious: 2.66,
    },

    calculategroup2(salary) {
      const employer = (salary * this.group2.employer /100).toFixed(2)
      const budgetInst = (salary * this.group2.budgetInstitution / 100).toFixed(2)
      const lithuanianBank = (salary * this.group2.ltBank / 100).toFixed(2)
      const other = (salary * this.group2.politicalUnion / 100).toFixed(2)

      return {
        employer,
        budgetInst,
        lithuanianBank,
        other
      }
    },
    group3: {
      employer: 3.05,
      budgetInstitution: 2.73,
      ltBank: 2.73,
      politicalUnion: 2.89,
      proffUnion: 2.89,
      religious: 2.89,
    },

    calculategroup3(salary) {
      const employer = (salary * this.group3.employer /100).toFixed(2)
      const budgetInst = (salary * this.group3.budgetInstitution / 100).toFixed(2)
      const lithuanianBank = (salary * this.group3.ltBank / 100).toFixed(2)
      const other = (salary * this.group3.politicalUnion / 100).toFixed(2)

      return {
        employer,
        budgetInst,
        lithuanianBank,
        other
      }
    },
    group4: {
      employer: 3.75,
      budgetInstitution: 3.43,
      ltBank: 3.43,
      politicalUnion: 3.59,
      proffUnion: 3.59,
      religious: 3.59,
    },

    calculategroup4(salary) {
      const employer = (salary * this.group4.employer /100).toFixed(2)
      const budgetInst = (salary * this.group4.budgetInstitution / 100).toFixed(2)
      const lithuanianBank = (salary * this.group4.ltBank / 100).toFixed(2)
      const other = (salary * this.group4.politicalUnion / 100).toFixed(2)

      return {
        employer,
        budgetInst,
        lithuanianBank,
        other
      }
    },
  },
};