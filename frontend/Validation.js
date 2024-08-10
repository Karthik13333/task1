export const Emailvalidate=(email)=>{
    const mail=/^[^\s@]+@[^\s@]+$/;
    return mail.test(email)
}
export const Passwordvalidate=(password)=>{
    const pass=/^(?=.?[A-Z])/;
    return pass.test(password)
}














