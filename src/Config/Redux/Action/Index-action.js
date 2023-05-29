import axios from "axios";


export const getApi = () => (dispatch) => {
return(
        axios.get("http://localhost:3004/posts")
            .then((result => {           
                    dispatch({ type: 'SET_DATA1', value: result.data[0] });
                    dispatch({ type: 'SET_DATA2', value: result.data[1] });
            }))
)
}

