import { RingLoader } from "react-spinners";

interface LoadingProps {
    isLoading: boolean
}

export default function Loading({isLoading}: LoadingProps) {
    return(
        <div className="grid place-content-center">
            <RingLoader 
                color='#202020'
                loading={isLoading}
                size={200}
                aria-label='Loading'
                className="d-block"
            />
        </div>
    )
}