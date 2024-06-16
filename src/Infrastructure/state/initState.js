let state = {
  auth: {},
  temp_user: {
    user: Boolean,
    phone: null,
    plan: null,
    fname: null,
    lname: null,
    code_meli: null,
    number: null,
    address: null,
    post_code: null,
    service: null,
    job_type: null,
    company_name: null,
    code_company: null,
    code_rahgiri: null,
    manage_name: null,
    manage_family: null,
    manage_code: null,
    sec_name: null,
    sec_family: null,
    sec_code: null,
    imge_Meli: null,
    image_newspaper: null,
    last_changeImage: null,
  },
  registering: {
    phone_number: null,
    confirm_code: null
  },
  product_data: {
    data: null
  },
  image_Price: {},
  charts : {
    day : null,
    month : null
  }
}

export default state


