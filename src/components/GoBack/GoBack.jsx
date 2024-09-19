import { useNavigate } from "react-router-dom"

export default function GoBack(){
const navigate = useNavigate();
 const handleGoBack = ()=>{
    if(window.history.length > 2){
        navigate(-1);

    } else{
        navigate('/movies')
    }

 }

 return (<button onClick={handleGoBack}>Go back</button>)
}