import { WebinarAPIEntity } from "../../Data/DataSource/API/Entity/WebinarAPIEntity";
import { Webinar } from "../Model/Webinar";

export interface IWebinarRepository {
  getWebinars(): Promise<Webinar[] | WebinarAPIEntity[]>;
  createWebinar(value: WebinarAPIEntity): Promise<Webinar | WebinarAPIEntity>;
  removeWebinar(id: string): Promise<boolean>;
  updateWebinar(id: string ,value: WebinarAPIEntity): Promise<Webinar | WebinarAPIEntity | undefined>;
}
