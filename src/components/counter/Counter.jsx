import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Counter({targer}){
    const [ count, setCount ] = useState(0)
    const { ref, inView } = useInView({
        triggerOnce:true,
        threshold:0.1
    })

    useEffect(()=>{
        if(inView){
            let start = 0
            const target = parseInt(targer)
            const duration = 2000
            const intervalTime = duration / target

            const interval = setInterval(()=>{
                start += 1 
                setCount(start)
                if(start === target){
                    clearInterval(interval)
                }
            }, intervalTime)

            return ()=>clearInterval(interval)
        }
    },[inView])

    return(
        <>
            <span ref={ref} >{count}</span>
        </>
    )
}