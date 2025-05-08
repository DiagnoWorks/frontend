import React from "react";

const useMediaQuery = (query: string) => {
    const [value, setValue] = React.useState<boolean>(() => matchMedia(query).matches);

    React.useEffect(() => {
        const result = matchMedia(query);

        const onChange = (e: MediaQueryListEvent) => {
            setValue(e.matches);
        };

        if (result.addEventListener) {
            result.addEventListener("change", onChange);
        } else {    
            result.addListener(onChange);
        }

        setValue(result.matches);

        return () => {
            if (result.removeEventListener) {
                result.removeEventListener("change", onChange);
            } else {
                result.removeListener(onChange);
            }
        };
    }, [query]);

    return value;
};

export default useMediaQuery;
