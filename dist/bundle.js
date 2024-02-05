!function(e){"use strict";const t=()=>({targetFlowRate:document.getElementById("target-flow-rate"),ActualFlowRate:document.getElementById("actual-flow-rate"),rotation:document.getElementById("rotation-angle"),StartSw:document.getElementById("StartSw"),FwdDirSw:document.getElementById("FwdDirSw"),SweepMotorLoad:document.getElementById("sweep-motor-load"),SweepMotorSpeed:document.getElementById("sweep-speed"),TracMotorSpeed:document.getElementById("tractor-motor-load"),TracMotorLoad:document.getElementById("tractor-motor-load"),tracSlider:document.getElementById("needle-slider-tractor"),sweepSlider:document.getElementById("needleSlider")}),a=e=>{const a=t();console.log(e);const o=e.Data.map((({Name:e,TagValue:t,DataType:o})=>"ActualFlowRate"==e?{Name:e,TagValue:a.ActualFlowRate.value,DataType:o}:"SatrtSw"==e?{Name:e,TagValue:a.StartSw.value,DataType:o}:void 0));return{DeviceId:"Machine1",TimeStamp:`${new Date(Date.now()).toLocaleDateString()} ${new Date(Date.now()).toLocaleTimeString()}`,Data:o}};var o=document.getElementById("needleGauge"),n=document.getElementById("needleSlider"),r=document.getElementById("sliderValue");const l=e=>{o.innerHTML="";const t=document.createElementNS("http://www.w3.org/2000/svg","circle");t.setAttribute("cx","150"),t.setAttribute("cy","180"),t.setAttribute("r","85"),t.setAttribute("fill","#eee"),t.setAttribute("stroke","#333"),t.setAttribute("stroke-width","2"),t.setAttribute("transform","rotate(-90 150 180)"),o.appendChild(t);for(var a=1;a<=10;a++){const e=a/10*Math.PI+1.5*Math.PI,t=150+95*Math.cos(e),n=180+95*Math.sin(e),r=document.createElementNS("http://www.w3.org/2000/svg","text");r.setAttribute("x",t.toString()),r.setAttribute("y",n.toString()),r.setAttribute("text-anchor","middle"),r.setAttribute("alignment-baseline","middle"),r.setAttribute("style","font-family: sans-serif"),r.textContent=a.toString(),r.setAttribute("transform","rotate(-90 150 180)"),o.appendChild(r)}var n=e*Math.PI+1.5*Math.PI,l=150+80*Math.cos(n),d=180+80*Math.sin(n),s=document.createElementNS("http://www.w3.org/2000/svg","line");s.setAttribute("x1","150"),s.setAttribute("y1","180"),s.setAttribute("x2",l.toString()),s.setAttribute("y2",d.toString()),s.setAttribute("stroke","#6eb3ee"),s.setAttribute("stroke-width","3"),s.setAttribute("transform","rotate(-90 150 180)"),o.appendChild(s),r.textContent=e.toFixed(2)};n.addEventListener("input",(function(){var e=parseFloat(n.value);l(e)})),n.onchange=()=>{},l(parseFloat(n.value));let d,s=0,c=["stop"];const u=()=>c,i=e=>{c=e},m=()=>{clearInterval(d),"stop"!==u()&&i("stop")};function w(e,t){t?(console.log("passed cur"),s=(t+e)%360):(s=(s+e)%360,line.setAttribute("transform",`rotate(${s} 50 50)`))}const g=()=>{"reverse"!==u()&&"forward"!==u()||m(),document.getElementById("StartSw").checked?document.getElementById("FwdDirSw").checked?(m(),"forward"!==u()&&i("forward"),d=setInterval((()=>w(.07)),50)):(m(),"reverse"!==u()&&i("revserse"),d=setInterval((()=>w(-.07)),50)):m()},S=e=>{const o=t();var n;o.ActualFlowRate.value=e.Data[0].TagValue,o.targetFlowRate.value=360,o.rotation.value=e.Data[8].TagValue,n=e.Data[8].TagValue,s=parseInt(n),1===e.Data[2].TagValue?o.FwdDirSw.setAttribute("checked",!0):o.FwdDirSw.removeAttribute("checked",!0),1===e.Data[1].TagValue?o.StartSw.setAttribute("checked",!0):o.StartSw.removeAttribute("checked",!0),o.SweepMotorLoad.value="6",o.SweepMotorLoad.focus(),o.sweepSlider.value=.6,o.sweepSlider.dispatchEvent(new Event("input",{bubbles:!0})),o.tracSlider.value=.6,o.tracSlider.dispatchEvent(new Event("input",{bubbles:!0})),o.StartSw.dispatchEvent(new Event("change",{bubbles:!0})),a(e)},p=async()=>{(async()=>{const e=new Paho.MQTT.Client("54.157.3.103",1883,"myClientId"),t="toWeb";e.connect({userName:"username",password:"password",useSSL:!0,onSuccess:async()=>{await e.subscribe(t,{onSuccess:async()=>{console.log(`subscribing on topic: ${t}`)}}),e.onMessageArrived=async e=>{const t=JSON.parse(e.payloadString);S(t)}},onFailure:async e=>{console.log("Failed to conncet"),console.log(e)}})})()};document.getElementById("line");const T=document.getElementById("StartSw"),y=document.getElementById("FwdDirSw");document.getElementById("full-stop");const E=document.getElementById("needleSlider"),v=document.getElementById("needle-slider-tractor");E.value=.4,v.value=.4;window.addEventListener("load",(async()=>{await p();a({DeviceId:"Machine1",TimeStamp:"2/2/2024 1:42:10 PM",Data:[{Name:"ActualFlowRate",TagValue:0,DataType:"DT_INTEGER2"},{Name:"StartSw",TagValue:1,DataType:"DT_BIT"},{Name:"FwdDirSw",TagValue:1,DataType:"DT_BIT"},{Name:"SweepMotorSpeed",TagValue:20,DataType:"DT_INTEGER2"},{Name:"SweepMotorLoad",TagValue:10,DataType:"DT_INTEGER2"},{Name:"TargetFlowRate",TagValue:10,DataType:"DT_INTEGER2"},{Name:"TracMotorSpeed",TagValue:10,DataType:"DT_INTEGER2"},{Name:"TracMotorLoad",TagValue:10,DataType:"DT_INTEGER2"},{Name:"Rotation",TagValue:300,DataType:"DT_INTEGER2"}]})})),T.addEventListener("change",(()=>{g()})),y.addEventListener("change",(()=>{g()})),e.updateNeedle=(e,t)=>{const a=parseFloat(t/10);E.value=a},Object.defineProperty(e,"__esModule",{value:!0})}({});