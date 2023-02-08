export const FormsValidate = (data, type) => {

    const errors = [];

    if (type === "login") {

        if (!data.phoneNumber) {
            errors.phoneNumber = "شماره تلفن خود را وارد کنید!"
        } else {
            delete errors.phoneNumber;
        }
        
    }

    if (type === "forgetpass") {
        
        if (!data.phoneNumber) {
            errors.phoneNumber = "شماره تلفن خود را وارد کنید!"
        } else {
            delete errors.phoneNumber;
        }

    }

    if (type === "signup") {

        // if (!data.name.trim()) {
        //     errors.name = "نام خود را وارد کنید!";
        // } else {
        //     delete errors.name;
        // }

        // if (!data.lastname.trim()) {
        //     errors.lastname = "نام خانوادگی خود را وارد کنید!";
        // } else {
        //     delete errors.lastname;
        // }

        if (!data.phonenumber.trim()) {
            errors.phonenumber = "تلفن همراه خود را وارد کنید!";
        } else {
            delete errors.phonenumber;
        }

        if (!data.discordid.trim()) {
            errors.discordid = "آی دی دیسکورد خود را وارد کنید!";
        } else {
            delete errors.discordid;
        }
        
        // if (!data.steamid.trim()) {
        //     errors.steamid = "آی دی استیم خود را وارد کنید!";
        // } else {
        //     delete errors.steamid;
        // }

        // if (!data.password) {
        //     errors.password = "!رمز عبور خود را وارد کنید";
        // } else if (data.password.length < 6) {
        //     errors.password = "!رمز عبور شما باید حداقل شش حرف باشد";
        // } else {
        //     delete errors.password;
        // }

        // if (!data.confirmPassword) {
        //     errors.confirmPassword = "!رمز عبور خود را تایید کنید"
        // } else if (data.confirmPassword !== data.password) {
        //     errors.confirmPassword = "!رمز های عبور با هم تطابق ندارند"
        // } else {
        //     delete errors.confirmPassword;
        // }

    }

    return errors;

}