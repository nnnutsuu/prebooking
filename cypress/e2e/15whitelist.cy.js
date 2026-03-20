const data = require('../fixtures/resource.json') // โหลดไฟล์แบบ Synchronous เพื่อใช้ในลูป it
const whitelist = data.whitelist15

describe('Check Condition Whitelist', () => {
  before(() => {
    cy.fixture('resource').as('data')
  })

  const login = () => {
    cy.session('user-session', () => {
      cy.visit('/System2')
      cy.get('#username').type(data.auth.username)
      cy.get('#password').type(data.auth.password)
      cy.get('button[type="submit"]').click()
      //cy.getCookie('session_id').should('exist');
      //cy.title().should('include', 'HUAWEI Mate 80 Pro')
    }) 
 
  }


  //const data = require('../fixtures/resource.json') // โหลดไฟล์แบบ Synchronous เพื่อใช้ในลูป it
  //const whitelist = data.whitelist15

  Object.keys(whitelist).forEach((snoKey) => {
    const details = whitelist[snoKey]

    it(`Test ${snoKey}: ตรวจสอบเบอร์ ${details.phoneNumber}: แสดง ${details.promotionCount} โปรโมชั่น`, () => {
      login()
      cy.visit('/System2')
      cy.loginPhoneNumber(data.model, details.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(details.promotionCount);       
    })
  })

 

  
})
