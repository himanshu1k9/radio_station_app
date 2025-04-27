class Listener 
{
    constructor(name)
    {
        this.name = name;
    }

    listen(station)
    {
        station.on('play', (song) => 
        {
            console.log(`${this.name} is listening ${song}`);
        });

        station.on('pouse', () => 
        {
            console.log(`${this.name} is waiting for resume`);
        });

        station.on('stop', () => 
        {
            console.log(`${this.name} has left the station`);
        });
    }
}

module.exports = Listener;