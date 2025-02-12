import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    return (
        <Clock
            title={`ex04: Clock Component II: ${ticks}`}
            hours={currentTime.hours}
            minutes={currentTime.minutes}
            seconds={currentTime.seconds} />
    );
}