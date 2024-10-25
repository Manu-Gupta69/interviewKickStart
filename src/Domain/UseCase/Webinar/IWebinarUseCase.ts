import { WebinarAPIEntity } from "../../../Data/DataSource/API/Entity/WebinarAPIEntity";
import { Webinar } from "../../Model/Webinar";

export interface IWebinarUseCase {
    invokeCreate: (value: WebinarAPIEntity) => Promise<Webinar | WebinarAPIEntity>;
    invokeUpdate: (id :string , value: WebinarAPIEntity) => Promise<Webinar | WebinarAPIEntity | undefined>;
    invokeRemove: (value: string) => Promise<boolean>;
    invokeGetAll:() => Promise<Webinar[] | WebinarAPIEntity[]>
  }