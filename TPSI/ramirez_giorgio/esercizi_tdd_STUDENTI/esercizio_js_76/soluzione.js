export class Orario {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    toSeconds() {
        return (this.hours * 3600) + (this.minutes * 60) + this.seconds;
    }
    calculateDifference(otherTime) {
        const totalSeconds1 = this.toSeconds();
        const totalSeconds2 = otherTime.toSeconds();
        const diffInSeconds = Math.abs(totalSeconds1 - totalSeconds2);
        const hours = Math.floor(diffInSeconds / 3600);
        const minutes = Math.floor((diffInSeconds % 3600) / 60);
        const seconds = diffInSeconds % 60;

        return {
            diffInMs: diffInSeconds * 1000,
            diffInSeconds: diffInSeconds,
            diffInMinutes: diffInSeconds / 60,
            diffInHours: diffInSeconds / 3600,
            formattedDiff: `${hours}h ${minutes}m ${seconds}s`
        };
    }
}

const time1 = new Orario(14, 30, 0);
const time2 = new Orario(12, 0, 0);
const result1 = time1.calculateDifference(time2);

console.log(`Diff in ms: ${result1.diffInMs}`);
console.log(`Diff in seconds: ${result1.diffInSeconds}`);
console.log(`Diff in minutes: ${result1.diffInMinutes}`);
console.log(`Diff in hours: ${result1.diffInHours}`);

const time3 = new Orario(9, 15, 30);
const time4 = new Orario(10, 0, 0);
const result2 = time3.calculateDifference(time4);

console.log(`Diff in seconds: ${result2.diffInSeconds}`);
console.log(`Diff formattata: ${result2.formattedDiff}`);

