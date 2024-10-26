import { WebinarRepositoryImpl } from "../../Data/Repository/WebinarRepositoryImpl";
import LocalDBDataSource from "../../Data/DataSource/API/DB/browserDB";
import { WebinarAPIEntity } from "../../Data/DataSource/API/Entity/WebinarAPIEntity";
import { WebinarUseCase } from "../../Domain/UseCase/Webinar/WebinarUseCase";
import { useState ,useEffect } from "react";
import { Webinar } from "../../Domain/Model/Webinar";

export default function useWebinar() {
const [webinars , setWebinars] = useState<Webinar[] | WebinarAPIEntity[]>([]);   
const db = new LocalDBDataSource<WebinarAPIEntity>('webinar');
const webinarRepo = new WebinarRepositoryImpl(db);
const webinarUseCase = new WebinarUseCase(webinarRepo);

  const getWebinars = async () => {
    const allWebinars =  await webinarUseCase.invokeGetAll();
    setWebinars(allWebinars);
  };

  const createWebinars = (value: WebinarAPIEntity) => {
    return webinarUseCase.invokeCreate(value);
  };

  useEffect(()=>{
    getWebinars();
  },[])

  return {webinars , createWebinars };
}

