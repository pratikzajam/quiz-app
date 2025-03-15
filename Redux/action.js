import axios from 'axios';
import { useDispatch } from 'react-redux';




let getQuizData = (payload) => {

    return { type: "getQuizData", payload }

}

let Submit = (payload) => {
    return { type: "Submit", payload }
}




let Skip = () => {
    return { type: "Skip" }
}




let FetchQuizData = () => {



    return async (dispatch) => {
        try {

            let req = await axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz")


            dispatch(getQuizData(req.data))

        } catch (error) {
            dispatch(getQuizData({ error: error.message }));
        }

    }



}

export  {FetchQuizData,Submit,Skip}