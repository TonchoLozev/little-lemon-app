const seededRandom = (seed: number): (() => number) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s: number = seed % m;
    return (): number => {
        return (s = (s * a) % m) / m;
    };
};

const START_HOUR = 17;
const END_HOUR = 23;
const PROBABILITY_THRESHOLD = 0.5;

export const fetchAPI = (date: Date): string[] => {
    const result: string[] = [];
    const random = seededRandom(date.getDate());

    for (let i = START_HOUR; i <= END_HOUR; i++) {
        if (random() < PROBABILITY_THRESHOLD) {
            result.push(`${i}:00`);
        }
        if (random() < PROBABILITY_THRESHOLD) {
            result.push(`${i}:30`);
        }
    }
    return result;
};

export const submitAPI = (formData: FormData): boolean => {
    console.log('Form submitted:', formData);
    return true;
};
