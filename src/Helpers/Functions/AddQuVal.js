export const AddQuVal = (data) => {

    const errors = [];

    if (!data.question) {
        errors.question = "سوال مورد نظر را وارد کنید.";
    } else {
        delete errors.question;
    }

    return errors;

}