export const AddAnVal = (data) => {

    const errors = [];

    if (!data.answer) {
        errors.answer = "لطفا هیچ فیلدی را خالی نگذارید";
    } else {
        delete errors.answer;
    }

    return errors;

}