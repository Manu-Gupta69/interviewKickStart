import { Webinar } from "../../Domain/Model/Webinar";
import { WebinarRepositoryImpl } from "../../Data/Repository/WebinarRepositoryImpl";
import LocalDBDataSource from "../../Data/DataSource/API/DB/browserDB";
import { WebinarAPIEntity } from "../../Data/DataSource/API/Entity/WebinarAPIEntity";
import { WebinarUseCase } from "../../Domain/UseCase/Webinar/WebinarUseCase";

export default function useWebinar() {
const db = new LocalDBDataSource<WebinarAPIEntity>('webinar');
const webinarRepo = new WebinarRepositoryImpl(db);
const webinarUseCase = new WebinarUseCase(webinarRepo);

  const getWebinars = () => {
    return webinarUseCase.invokeGetAll();
  };

  const createWebinars = (value: WebinarAPIEntity) => {
    return webinarUseCase.invokeCreate(value);
  };

  return { getWebinars, createWebinars };
}

