// import { MainPage, Step_1, Step_2, Step_3 } from ".";
import MainPage from "./pages/IntroPage.js";
import Step1 from "./components/St1PersonalData.js";
import Step2 from "./components/Step2.js";
import Step3 from "./components/Step3.js";

export const routes = [
  {
    path: '/',
    Component: MainPage
  },
  {
    path: '/step/1',
    Component: Step1
  },
  {
    path: '/step/2',
    Component: Step2
  },
  {
    path: '/step/3',
    Component: Step3
  },
]