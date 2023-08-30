export function handleScrollForSection(sectionId: string, setShowSection: React.Dispatch<React.SetStateAction<boolean>>): void {
    const section = document.getElementById(sectionId);
    if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight * 0.7) {
            setShowSection(true);
        } else {
            setShowSection(false);
        }
    }
}

export function addScrollListener(listener: EventListenerOrEventListenerObject): void {
    window.addEventListener("scroll", listener);
}

export function removeScrollListener(listener: EventListenerOrEventListenerObject): void {
    window.removeEventListener("scroll", listener);
}
