export const timeFormatter = (_timestamp) => {
    const expire = new Date(_timestamp * 1000).getTime();
    const current = new Date().getTime();
    const distance = expire - current;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days , hours, minutes, seconds };
}