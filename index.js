const RadioStation = require('./RadioSation');
const Listener = require('./Listener');

const station = new RadioStation();


const himanshu = new Listener('himanshu');
const manish = new Listener('manisha');
const rajat = new Listener('rajat');

himanshu.listen(station);
manish.listen(station);
rajat.listen(station);

station.play('Mere mehboob quayamat hogi - kishore kumar');

setTimeout(() => {
    station.pouse()
}, 2000);

setTimeout(() => {
    station.play('Aane se uske aye bahar - md-rafi');
}, 8000);

setTimeout(() => {
    station.stop()
}, 5000);