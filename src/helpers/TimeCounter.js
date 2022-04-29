export const timeFormatter = (_timestamp) => {
    const end = new Date(_timestamp * 1000).getTime();
    const current = new Date().getTime();
    const distance = end - current;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days , hours, minutes, seconds };
}

export const upcomingCounter = (_timestamp) => {
    const start = new Date(_timestamp * 1000).getTime();
    const current = new Date().getTime();
    const distance = start - current;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days , hours, minutes, seconds };
}
