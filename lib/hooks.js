import { useEffect } from "react"

export const useOnClickOutside = (ref, handler) => {
    useEffect(
        () => {
            const listener = event => {
            // Ничего не делаю, если клик по элементу ref или его потомкам
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
    
            handler(event);
            };
    
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);
    
            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        [ref, handler]
    );
}