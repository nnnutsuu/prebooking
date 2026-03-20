describe('Check Product', () => {
  

    it('Check Product', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno1.phoneNumber);
      //cy.checkProduct(data.products);  
      data.product.forEach((product) => {
        
        // 2. วนลูปตามสีของรุ่นนั้นๆ (Colors)
        data.product.color.forEach((color) => {
          
          // 3. วนลูปตามความจุของรุ่นนั้นๆ (Storage)
          data.product.storage.forEach((capacity) => {
            
          // 1. เลือกรุ่น (Model)
            // สมมติว่าเป็นปุ่มที่มีข้อความชื่อรุ่น
            cy.contains('.option-selector-model', product.model).click().should('have.class', 'active');

            // 2. เลือกสี (Color)
            // ค้นหาปุ่มสีที่ตรงกับข้อมูลในไฟล์
            cy.contains('.color-option', color).click();

            // 3. เลือกความจุ (Storage)
            cy.contains('.option-storage', capacity).click();
            })
          })
        })
    })
  })
})
