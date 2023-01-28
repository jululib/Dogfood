import { useEffect, useState } from "react"

// задаем состояние с введенным значением и задержкой
const useDebounce = (value, delay) =>{
    const[debounceValue, setDebounceValue] = useState(value);
// в функции происходит рендер измененного состояния с задержкой

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value);
        }, delay)

        return () => clearTimeout(timeout)
    }, [value, delay]);
// возвращаем значение полученное с задержкой
    return debounceValue;
}

export default useDebounce;
