import { useEffect, useState } from "react";
import Hi from "./assets/Components/IntroductionToReact/Hi";
import MyApp from "./assets/Components/IntroductionToReact/MyApp";
import FirstMessage from "./assets/Components/IntroductionToReact/FirstMessage";
import ButtonAdd from "./assets/Components/IntroductionToReact/ButtonAdd";
import UserProfile from "./assets/Components/IntroductionToReact/UserProfile";
import AdminAndLogin from "./assets/Components/IntroductionToReact/AdminAndLogin";
import CounterIncreaseDecrease from "./assets/Components/IntroductionToReact/CounterIncreaseDecrease";
import UseStateIntroduction from "./assets/Components/UseStateExamples/UseStateIntroduction";
import ThemeChange from "./assets/Components/UseStateExamples/ThemeChange";
import TitleChange from "./assets/Components/UseStateExamples/TitleChange";
import PrintTheReceivedData from "./assets/Components/UseStateExamples/PrintTheReceivedData";
import ShowHide from "./assets/Components/UseStateExamples/ShowHide";
import MapMethodAndKey from "./assets/Components/UseStateExamples/MapMethodAndKey";
import UseEffectUse from "./assets/Components/UseEffect/UseEffectUse";
import UseEffectConsoleLog from "./assets/Components/UseEffect/UseEffectConsoleLog";
import UseEffectDependencies from "./assets/Components/UseEffect/UseEffectDependencies";
import UseEffectDependenciesTitleChange from "./assets/Components/UseEffect/UseEffectDependenciesTitleChange";
import UseEffectApi from "./assets/Components/UseEffect/UseEffectApi";
import UseEffectProducts from "./assets/Components/UseEffect/UseEffectProducts";

export default function App() {

  // state : mevcut değer
  // setState : değeri güncelleyen fonksiyon
  // initialValue : başlangıç değeri (sayı, string, bool, array, obj olabilir)
  // const [state, setState] = useState(initialValue);

  return (
    <>
      <FirstMessage />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ButtonAdd />
      <br />
      <br />
      <br />
      <br />
      <br />
      <UserProfile />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AdminAndLogin />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CounterIncreaseDecrease />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Hi />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MyApp />
      <br />
      <br />
      <br />
      <br />
      <br />
      <UseStateIntroduction />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ThemeChange />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TitleChange />
      <br />
      <br />
      <br />
      <br />
      <br />
      <PrintTheReceivedData />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ShowHide />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MapMethodAndKey />
      <br />
      <br />
      <br />
      <br />
      <br />
      <UseEffectUse />
      <br />
      <br />
      <br />
      <br />
      <br />
      <UseEffectConsoleLog />
      <br />
      <br />
      <br />
      <br />
      <br />
      <UseEffectDependencies />
      <br />
      <br />
      <br />
      <br />
      <br />
      <UseEffectDependenciesTitleChange />
      <br />
      <br />
      <br />
      <br />
      <br />
      <UseEffectApi />
      <br />
      <br />
      <br />
      <br />
      <br />
      <UseEffectProducts />
    </>
  )
}