
import {LOGIN_BTN, EMAIL, PASS} from './page/login'

function login(email, password){
    // Input valid email, password
    $(EMAIL).setValue("minh@gail.com")
    $(PASS).setValue("abcxyz@123")
    $(LOGIN_BTN).click()

    // Click on login button
}

module.exports = login()