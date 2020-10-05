class Scale {


    static hourInMs = 3.6 * 10 ** 6;

    static getRange(period, days, start) {

        const startDateTime = this.splitDateTime(start);

        const finishDateTime = startDateTime.getTime() + days * 24 * this.hourInMs;
        const finishDate = new Date(finishDateTime);
        finishDate.setUTCHours(23, 59, 59, 999);

        const times = [];

        for (let i = startDateTime.getTime(); i < finishDate.getTime(); i += period * this.hourInMs) {
            times.push(new Date(i));
        }

        return times
    }

    static splitDateTime(dateTime) {
        const splited = dateTime.split(".");
        const time = new Date;
        time.setFullYear(+splited[2], +splited[1] - 1, +splited[0]);
        time.setUTCHours(+splited[3], +splited[4], 0, 0);

        return time;
    }

    static compareRanges(...ranges) {

        return ranges.reduce((p, c, i, a) => a[p].length > c.length ? p : i, 0);


    }

}


// console.log(Scale.getRange(12.5, 5, "29.12.2010.05.15"));

console.log(Scale.compareRanges([14, '23'], [5, 4, 3, 2], [14, '23'], [11], [5, 4, 3, 2]));


