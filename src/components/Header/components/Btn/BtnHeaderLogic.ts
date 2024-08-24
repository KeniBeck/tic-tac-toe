import { useNavigate } from "react-router-dom";



export const useBtnHeader = () => {
    const navigate= useNavigate()
    return {
        navigate
    }
}