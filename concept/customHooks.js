
import copy from 'copt-to-clipbaord'

// useCopyToClipboard
const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (text) =>{
        if(typeof text === 'string' || typeof text === 'number') {
            copy(text.toString());
            setIsCopied(true);
        }else {
            setIsCopied(false);
            console.error(
                `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
              );
        }
    }
    return [isCopied, handleCopy];
}

// useInput

const useInput = (initalValue) => {
    let [val, setValue] = useState(initalValue);

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return [value, onChange]
}

// useDebounce

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay])

    return [debounceValue]
}

// useWindowResize

const useWindowResize = () => {
    const [width, setWidth] = useState(Window.innerWidth);
    const [height, setHeight] = useState(Window.innerHeight);

    const listener = () => {
        setWidth(Window.innerWidth);
        setHeight(Window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', listener);
        return () => {
            window.removeEventListener('resize', listener);
        };
    }, [width,height]);

    return { width, height }
}

