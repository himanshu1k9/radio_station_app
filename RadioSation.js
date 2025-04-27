const EventEmitter = require('events');

class RadioStation extends EventEmitter
{
    play(song)
    {
        console.log(`Now Playing ${song}`);
        this.emit('play', song);
    }

    pouse()
    {
        console.log(`Poused`);
        this.emit('pouse');
    }

    stop()
    {
        console.log('Stoped');
        this.emit('stop');
    }
}

module.exports = RadioStation;