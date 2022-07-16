import io, { Socket } from 'socket.io-client';
import store from '../store';
import { changeHumidity } from '../store/slices/humidity';
import { changeTemperature } from '../store/slices/temperature';

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
        store.dispatch(changeTemperature({name:'control', value:data.value}))
    })

    socket.on('humidity', (data: any) => {
        // const { temperature } = store.getState()
        store.dispatch(changeHumidity({name:'humidity', value:data.value}))
    })
}

export default socket;

