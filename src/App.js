import React, {useState} from 'react';
import './App.css';
import Ras1 from './sounds/ras1.mp4';
import Ras2 from './sounds/ras2.mp4';
import Ras3 from './sounds/ras3.mp4';
import Ras4 from './sounds/ras4.mp4';
import TiaPlacut from './sounds/tiaplacut.aac';
import Pill from './sounds/pill.aac';
import TajDq from './sounds/tajdq.mp4';
import Cuiplmiipasa from './sounds/cuiplmiipasa.mp4';
import Tenmm from './sounds/tenmm.mp4';
import Tomabeat2 from './sounds/tomabeat2.mp4';
import Tomabeat1 from './sounds/tomabeat.mp4';
import Mhm from './sounds/mhm.mp4';
import Politicos from './sounds/politicos.mp4';
import Pizda from './sounds/pizda.mp4';
import Cacat from './sounds/cacat.mp4';
import Criza from './sounds/crizamanelistica.mp4';
import Ratata from './sounds/ratata.mp4';
import LeonteBeat from './sounds/leontebeat.mp4';
import ProstRau from './sounds/prostrau.mp4';
import Borsa from './sounds/borsa.mp4';
import Prost1 from './sounds/prost1.mp4';
import Poet from './sounds/poet.mp4';


const cuiplmiipasa = new Audio(Cuiplmiipasa);
const tajdq = new Audio(TajDq);
const pill = new Audio(Pill);
const tiaplacut = new Audio(TiaPlacut);
const politicos = new Audio(Politicos);
const mhm = new Audio(Mhm);
const tomabeat1 = new Audio(Tomabeat1);
const tomabeat2 = new Audio(Tomabeat2);
const tenmm = new Audio(Tenmm);
const leontebeat = new Audio(LeonteBeat);
const ratata = new Audio(Ratata);
const criza = new Audio(Criza);
const cacat = new Audio(Cacat);
const pizda = new Audio(Pizda);
const prostrau = new Audio(ProstRau);
const borsa = new Audio(Borsa);
const prost1 = new Audio(Prost1);
const poet = new Audio(Poet);
const ras1 = new Audio(Ras1);
const ras2 = new Audio(Ras2);
const ras3 = new Audio(Ras3);
const ras4 = new Audio(Ras4);






function App() {

  const [current, setCurrent] = useState();
  
  const playSound = (sound) => {
      sound.play();
      sound.volume = 0.5;
  }
  
  const stopSound = () => {
    switch(current){
      case 'ras1':
        ras1.pause();
        ras1.currentTime = 0;
        break;

      case 'ras2':
        ras2.pause();
        ras2.currentTime = 0;
        break;
        
      case 'ras3':
        ras3.pause();
        ras3.currentTime = 0;
        break;

      case 'ras4':
        ras4.pause();
        ras4.currentTime = 0;
        break;

      case 'tiaplacut':
        tiaplacut.pause();
        tiaplacut.currentTime = 0;
        break;

      case 'pill':
        pill.pause();
        pill.currentTime = 0;
        break;

      case 'poet':
        poet.pause();
        poet.currentTime = 0;
        break;
      
      case 'prost1':
        prost1.pause();
        prost1.currentTime = 0;
        break;
        
      case 'borsa':
        borsa.pause();
        borsa.currentTime = 0;
        break;
        
      case 'prostrau':
        prostrau.pause();
        prostrau.currentTime = 0;
        break;
        
      case 'leontebeat':
        leontebeat.pause();
        leontebeat.currentTime = 0;
        break;
        
      case 'ratata':
        ratata.pause();
        ratata.currentTime = 0;
        break;
        
      case 'criza':
        criza.pause();
        criza.currentTime = 0;
        break;
        
      case 'cacat':
        cacat.pause();
        cacat.currentTime = 0;
        break;
        
      case 'pizda':
        pizda.pause();
        pizda.currentTime = 0;
        break;
        
      case 'politicos':
        politicos.pause();
        politicos.currentTime = 0;
        break;
      
      case 'mhm':
        mhm.pause();
        mhm.currentTime = 0;
        break;
    
      case 'tomabeat1':
        tomabeat1.pause();
        tomabeat1.currentTime = 0;
        break;
        
      case 'tomabeat2':
        tomabeat2.pause();
        tomabeat2.currentTime = 0;
        break;
        
      case 'tenmm':
        tenmm.pause();
        tenmm.currentTime = 0;
        break;
        
      case 'cuiplmiipasa':
        cuiplmiipasa.pause();
        cuiplmiipasa.currentTime = 0;
        break;
        
      case 'tajdq':
        tajdq.pause();
        tajdq.currentTime = 0;
        break;
        
      default: 
        return;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Autiştii</h1>
        <h2>The Horias</h2>
      </header>
      <div className="stop-div">
        <img src={require('./img/stop.svg')} alt="STOP" className="play-btn stop-btn" onClick={() => stopSound()}/>
      </div>
      <div className="wrapper">
        <div className="card" onClick={() => {stopSound();playSound(ras1); setCurrent('ras1')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          {/* <img src={require('./img/new.svg')} alt="New" className="new-btn"/> */}
          <span className="txt">Râs 1</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(ras2); setCurrent('ras2')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Râs 2</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(ras3); setCurrent('ras3')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Râs 3</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(ras4); setCurrent('ras4')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Râs 4</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(pill); setCurrent('pill')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">PILL</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(tiaplacut); setCurrent('tiaplacut')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Ţi-a plăcut?</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(prost1); setCurrent('prost1')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Prost</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(prostrau); setCurrent('prostrau')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Prost rău</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(ratata); setCurrent('ratata')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Ratatata</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(poet); setCurrent('poet')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Poet</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(tomabeat1); setCurrent('tomabeat1')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Toma beat 1</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(tomabeat2); setCurrent('tomabeat2')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Toma beat 2</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(leontebeat); setCurrent('leontebeat')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Leonte beat </span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(criza); setCurrent('criza')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">CRIZĂ MANELISTICĂ</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(cuiplmiipasa); setCurrent('cuiplmiipasa')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Cui plm îi pasă?</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(tenmm); setCurrent('tenmm')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">'Te-n morţii tăi</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(tajdq); setCurrent('tajdq')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Taj dq</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(mhm); setCurrent('mhm')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Mhmmmmm</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(borsa); setCurrent('borsa')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">BORŞAAAA</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(cacat); setCurrent('cacat')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Căcat</span>
        </div>
        <div className="card" onClick={() => {stopSound();playSound(pizda); setCurrent('pizda')}}>
          <img src={require('./img/video.svg')} alt="PLAY" className="play-btn"/>
          <span className="txt">Pizdă?</span>
        </div>
        
      </div>
    </div>
  );
}

export default App;
