// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/System2')
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('loginPhoneNumber', (model, phonenumber) => {
  cy.title().should('include', 'HUAWEI Mate 80 Pro')
  cy.get('#PhoneNumber').type(phonenumber)
  cy.get('#btnRequestOTP').click()
  cy.get('input[id="digit-1"]').type('2')
  cy.get('input[id="digit-2"]').type('3')
  cy.get('input[id="digit-3"]').type('4')
  cy.get('input[id="digit-4"]').type('5')
})

Cypress.Commands.add('selectDevice', () => {
  cy.get('.option-selector > :nth-child(1)', { timeout: 5000 }).click()
  cy.get(':nth-child(1) > .btn-color-option > .color-option', { timeout: 5000 }).click()
  cy.get('#option-selector-storage > :nth-child(1)', { timeout: 5000 }).click()
})

Cypress.Commands.add('checkPromotion', (promotionCount) => {
  cy.log(promotionCount)
  //const expectedOptions = [
  //{ val: '3', regex: /เครื่องราคาพิเศษ เซ็นสัญญา \(Best Buy\)|Handset special price \(Sign Contract\)/ },
  //{ val: '2', regex: /เครื่องพร้อมแพ็กเกจ เซ็นสัญญา \(Hot Deal\)|Handset with Hot Deal package \(Sign Contract\)/ },
  //{ val: '1', regex: /เครื่องเปล่าราคาปกติ|Handset regular price/}
  //];

  cy.get('.option-selector-campaign', { timeout: 5000 })
      .should('have.length', promotionCount) // เช็คจำนวนให้ตรงกับ Array ที่เราตั้งไว้
//      .each(($el, index) => {
//          const actualValue = $el.find('input').val();
//          const actualText = $el.text().trim();
//          cy.log(`Checked : Value=${actualValue}, Text=${actualText}`);
    // ดึงค่าที่คาดหวังจาก Array ตาม index ที่วนลูปอยู่ขณะนั้น
//          const expected = expectedOptions[index];
//          cy.log(`Checked : ${expected}`);
    // ตรวจสอบ Value
          //expect(actualValue).to.eq(expected.val);
    // ตรวจสอบ Text ด้วย Regex (รองรับ 2 ภาษา)
          //expect(actualText).to.match(expected.regex);
    // พิมพ์ log ออกมาดูผล (Optional)
})        
      
Cypress.Commands.add('checkProduct', (product) => {
  // 1. วนลูปตามรุ่น (Products)
      cy.log(product)
      product.model.forEach((product) => {
        
        // 2. วนลูปตามสีของรุ่นนั้นๆ (Colors)
        product.color.forEach((color) => {
          
          // 3. วนลูปตามความจุของรุ่นนั้นๆ (Storage)
          product.storage.forEach((capacity) => {
            
          // 1. เลือกรุ่น (Model)
            // สมมติว่าเป็นปุ่มที่มีข้อความชื่อรุ่น
            cy.contains('.option-selector-model', product.model).click().should('have.class', 'active');

            // 2. เลือกสี (Color)
            // ค้นหาปุ่มสีที่ตรงกับข้อมูลในไฟล์
            cy.contains('.color-option', color).click();

            // 3. เลือกความจุ (Storage)
            cy.contains('.option-storage', capacity).click();

            // 4. Assertion: ตรวจสอบว่า "สรุปรายการที่เลือก" แสดงข้อมูลถูกต้อง
            // เช่น หน้าเว็บอาจจะโชว์ "คุณเลือก: Huawei Mate 80 Pro+ สีฟ้า 16/1TB"
            cy.log(`${product.model} สี${color} ความจุ${capacity}`);
            

            // (Optional) รีเซ็ตการเลือก หรือ Refresh หน้าถ้า UI ไม่ยอมให้เปลี่ยนข้ามรุ่น
            // cy.reload()
              
          });
        });
      });
 
})