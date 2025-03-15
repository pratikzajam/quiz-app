const initialState = {
    quizData: [],
    marks: 0,
    IndexCount: 0
};

const quizReducer = (state = initialState, action) => {
    if (action.type == "getQuizData") {

        return { ...state, quizData: action.payload };

    }

    if (action.type == "Submit") {

        let IndexCount = state.IndexCount

        if (state.quizData.data[IndexCount].correctOptionIndex == action.payload) {

            return { ...state, marks: state.marks + 1, IndexCount: state.IndexCount + 1 };

        } else if(state.quizData.data[IndexCount].correctOptionIndex != action.payload) {

            return { ...state, marks: state.marks, IndexCount: state.IndexCount + 1 };
         }
        
    }


    if(action.type=="Skip"){

        return { ...state, IndexCount: state.IndexCount + 1 };


    }





};

export default quizReducer;