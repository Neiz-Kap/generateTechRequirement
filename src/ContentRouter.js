import React from 'react'
import { Route, Routes } from 'react-router'
// import { routes } from './routes'
import IntroPage from "./pages/IntroPage.js";
import MultiForm from "./pages/MultiForm.js";
// import St1PersonalData from "./components/St1PersonalData.js";
// import Step2 from "./components/Step2.js";
// import Step3 from "./components/Step3.js";

const ContentRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<IntroPage />} />
      <Route path={'/step/:step'} element={<MultiForm />} />
      {/* <Route path={'/step/1'} element={<St1PersonalData />} /> */}
      {/* <Route path={'/step/2'} element={<Step2 />} />
      <Route path={'/step/3'} element={<Step3 />} /> */}
      {/* {
        routes.map(({ path, Component }) =>
          <Route key={path} path={path} element={<Component />} />
        )
      } */}
    </Routes>
  )
}
// https://www.youtube.com/watch?v=0auS9DNTmzE
export default ContentRouter
