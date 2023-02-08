import axios from 'axios';

const getQuestions = async () => {
    const response = await axios.get("https://api.vip4care.ir/addService/getServices")
    return response.data;
}

export { getQuestions };