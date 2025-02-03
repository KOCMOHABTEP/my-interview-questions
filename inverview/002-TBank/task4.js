// Реализовать класс EventEmitter, с возможностью подписки на разные события, отписки, и оповещения о событии для всех подписчиков.

class EventEmitter {
    // Реализовать класс
    events = [];

    addEvent(name, cb) {
        this.events.push({
            name,
            cb
        })

        return this
    };

    unsubscribe(name, cb) {
        this.events.filter((ev) => ev.name === name && ev.cb === cb);

        return this;
    }

    send(name, payload) {
        const events = this.events.filter(ev => ev.name === name);

        for (let i = 0; i < events.length; i++) {
            try {
                const event = events[i];
                event.cb(payload);
            } catch (e) {
                // console.log(e)
            }

        }

        return this
    }
}

const emitter = new EventEmitter();

const cb1 = () => console.log('cb1');
const cb2 = () => console.log('cb2');
const cb3 = () => {throw  new Error('err')};
const cb4 = (payload) => console.log('cb2', payload);

emitter
    .addEvent('event', cb1)
    .addEvent('event', cb2)
    .addEvent('event', cb3)
    .addEvent('smth', cb4)
    .send('smth', {data: 1})
    .send('event')
    .unsubscribe('event', cb2)
    .send('event')
