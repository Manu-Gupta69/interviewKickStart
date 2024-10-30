import { WebinarRepositoryImpl } from "../../Data/Repository/WebinarRepositoryImpl";
import LocalDBDataSource from "../../Data/DataSource/API/DB/browserDB";
import { WebinarAPIEntity } from "../../Data/DataSource/API/Entity/WebinarAPIEntity";
import { WebinarUseCase } from "../../Domain/UseCase/Webinar/WebinarUseCase";
import { useState, useEffect } from "react";
import { Webinar } from "../../Domain/Model/Webinar";
import { FormValues } from "../../Common/interfaces";
import { base64ToImageFile } from "../../Utils";

export default function useWebinar() {
  const [webinars, setWebinars] = useState<Webinar[] | WebinarAPIEntity[]>([]);
  const [selectedWebinar, setSelectedWebinar] = useState<(FormValues & { id: number })>();

  const db = new LocalDBDataSource<WebinarAPIEntity>("webinar");
  const webinarRepo = new WebinarRepositoryImpl(db);
  const webinarUseCase = new WebinarUseCase(webinarRepo);

  const getWebinars = async () => {
    const allWebinars = await webinarUseCase.invokeGetAll();
    setWebinars(allWebinars);
  };

  const getWebinarById = (id: number) => {
    const webinar = webinars.find((item, index) => {
      const webinarWithId = item as Webinar;
      return webinarWithId.id === id;
    }) as Webinar;
    if (webinar) {
      const _webinar  = {
        ...webinar,
        instructorImage: base64ToImageFile(webinar.instructorImage, "image")
      };
      setSelectedWebinar(_webinar);
    }
  };

  const createWebinars = (value: WebinarAPIEntity) => {
    webinarUseCase.invokeCreate(value);
    getWebinars();
  };

  const deleteWebinarById = (id: string) => {
    webinarUseCase.invokeRemove(id);
    getWebinars();
  };

  const updateWebinarById = (id: string, value: WebinarAPIEntity) => {
    webinarUseCase.invokeUpdate(id, value);
    getWebinars();
  };

  useEffect(() => {
    getWebinars();
  }, []);

  return {
    webinars,
    createWebinars,
    setWebinars,
    deleteWebinarById,
    getWebinarById,
    selectedWebinar,
    setSelectedWebinar,
    updateWebinarById,
  };
}
