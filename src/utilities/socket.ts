import io, { Socket } from 'socket.io-client';
import store from '../store';
import { setBattery } from '../store/slices/battery';
import { setCurcuit } from '../store/slices/curcuit';
import { setHumidity } from '../store/slices/humidity';
import { setTemperature } from '../store/slices/temperature';

let socket: Socket | undefined;

export const initSocket = () => {

    if (!socket) {
        socket = io(import.meta.env.VITE_API_URL + '/sensor', { transports: ['websocket'] });

    }
    socket.on('connect', () => {
        console.log('socket connected');
    })

    socket.on('temperature', (data: any) => {
        // const { temperature } = store.getState()
        store.dispatch(setTemperature({name:'control', value:data.value}))
    })

    socket.on('humidity', (data: any) => {
        store.dispatch(setHumidity({name:'humidity', value:data.value}))
    })

    socket.on('battery', (data: any) => {

        store.dispatch(setBattery(data))
    })

    socket.on('curcuit1', (data: any) => {

        const { name, value }: { name: string, value: string } = data;

        store.dispatch(setCurcuit({ position: 'curcuit1', name,value}))
    })
}

export default socket;

