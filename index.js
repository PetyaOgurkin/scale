import Timeline from './Timeline.js'


document.querySelector('#gen').addEventListener('click', () => {



    const r1 = Timeline.getRange("aqua", 12, 5, '12.09.2020.06.00');
    const r2 = Timeline.getRange("terra", 6, 5, '12.09.2020.03.00');
    const r3 = Timeline.getRange("modis", 4, 5, '12.09.2020.00.00');
    const r4 = Timeline.getRange("sentinel", 3, 5, '12.09.2020.04.00');

    Timeline.compareRanges(4, r1, r2, r3, r4)

})




const timeline = document.querySelector('#timeline');

timeline.addEventListener('change', () => {
    console.log(timeline.value);
})

