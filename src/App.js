import React from "react";
import Index from "./Component/Index";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { serviceData } from "./Component/ServiceUrban/Service";
import { S_data } from "./Component/NewAndNoteWorthhy/NewAndNoteWorthy";
import AirPurifier from "./Component/ProvidingService/AirPurifier/AirPurifier";
import NativeWaterPurifier from "./Component/ProvidingService/NativeWaterPurifier/NativeWaterPurifier";
import NativeSmartLock from "./Component/ProvidingService/NativeSmartlock/NativeSmartLocks";
import HomePainting from "./Component/ProvidingService/HomePainting/HomePainitng";
import BookYourAppoinment from "./Component/BookYourAppointment/BookYourAppointment";
import LaserHair from "./Component/ProvidingService/LaserHairRemoval/LaserHair";

const data = serviceData;

const data_S = S_data;

const App = () => {
  return (<BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Index />} />
        <Route path = {"/" + data[0].id} element = {<BookYourAppoinment />} />
        <Route path = {"/" + data[1].id} element = {<BookYourAppoinment />} />
        <Route path = {"/" + data[2].id} element = {<BookYourAppoinment />} />
        <Route path = {"/" + data[3].id} element = {<BookYourAppoinment />} />
        <Route path = {"/" + data[4].id} element = {<BookYourAppoinment />} />
        <Route path = {"/" + data[5].id} element = {<BookYourAppoinment />} />
        

        <Route path = {"/ServicePRoviding/" + data_S[0].id} element = {<AirPurifier />} />
        <Route path = {"/ServicePRoviding/" + data_S[1].id} element = {<NativeWaterPurifier />} />
        <Route path = {"/ServicePRoviding/" + data_S[2].id} element = {<NativeSmartLock />} />
        <Route path = {"/ServicePRoviding/" + data_S[3].id} element = {<HomePainting />} />
        <Route path = {"/ServicePRoviding/" + data_S[4].id} element = {<LaserHair />} />
        <Route path = {"/ServicePRoviding/" + data_S[5].id} element = {<Index />} />
        <Route path = {"/ServicePRoviding/" + data_S[6].id} element = {<Index />} />
        <Route path = {"/ServicePRoviding/" + data_S[7].id} element = {<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;