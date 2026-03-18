describe('Check Product', () => {
  

    it('WhiteList Scenario 1', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno1.phoneNumber);
      cy.checkProduct(data.products);      
    })
  })
})