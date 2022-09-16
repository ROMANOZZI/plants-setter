import React from 'react'
import './App.css';
import{ref as sRef,set,onValue, update} from 'firebase/database'
import startFireBase from './components/fb-config';
function App() {
  const HumidityRef=sRef(startFireBase(),'/HUMIDITY');
  const TempratureRef=sRef(startFireBase(),'/TEMPERATURE');
  let updateRate=0;
 
  setInterval(()=>{updateRate++},2000);

  const [Humidity,setHumidity]=React.useState();
  const [Temp,setTemp]=React.useState();
  React.useEffect(()=>{
   
  onValue(HumidityRef,(SnapShot)=>{
    setHumidity(SnapShot.val());
   
  }) 
  onValue(TempratureRef,(SnapShot)=>{
    setTemp(SnapShot.val());
   
  }) 
  },[startFireBase()])
 /* onValue(HumidityRef,(x)=>{
    const setter=(value)=>setHumidity(value);
  setter(x.val())});*/
  return (
    <div className="App">
     <h1>temprature: {Temp} c</h1>
     <h1>Humidity: {Humidity} %</h1>
    </div>
  );
}

export default App;
