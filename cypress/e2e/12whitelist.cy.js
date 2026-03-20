describe('Check Condition Whitelist', () => {
  const expectedOptions = [
  { val: '3', regex: /เครื่องราคาพิเศษ เซ็นสัญญา \(Best Buy\)|Handset special price \(Sign Contract\)/ },
  { val: '2', regex: /เครื่องพร้อมแพ็กเกจ เซ็นสัญญา \(Hot Deal\)|Handset with Hot Deal package \(Sign Contract\)/ },
  { val: '1', regex: /เครื่องเปล่าราคาปกติ|Handset regular price/}
  ];

    it('WhiteList Scenario 1', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno1.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(data.sno1.promotionCount);       
    })
  })

  it('WhiteList Scenario 3', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno3.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(data.sno3.promotionCount);      
    })
  })

  it('WhiteList Scenario 4', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno4.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(data.sno4.promotionCount);      
    })
  })

  it('WhiteList Scenario 5', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno5.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(data.sno5.promotionCount);      
    })
  })

  it('WhiteList Scenario 6', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno6.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(data.sno6.promotionCount);      
    })
  })
  
  it('WhiteList Scenario 7', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno7.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(data.sno7.promotionCount);      
    })
  })

  it('WhiteList Scenario 8', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno8.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(data.sno8.promotionCount);      
    })
  })

  it('WhiteList Scenario 9', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno9.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(data.sno9.promotionCount);      
    })
  })

  it('WhiteList Scenario 10', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno10.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(data.sno10.promotionCount);      
    })
  })

  it('WhiteList Scenario 11', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno11.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(data.sno11.promotionCount);      
    })
  })

  it('WhiteList Scenario 12', () => {
    // ดึงข้อมูลจากไฟล์ resource.json
    cy.fixture('resource').then((data) => {         
    // เรียกใช้คำสั่งพิเศษที่สร้างไว้ ส่งค่าที่อยู่ใน data.auth เข้าไปที่ command
      cy.login(data.auth.username, data.auth.password);
      cy.loginPhoneNumber(data.model, data.sno12.phoneNumber);
      cy.selectDevice();
      cy.checkPromotion(data.sno12.promotionCount);      
    })
  })


  
})
