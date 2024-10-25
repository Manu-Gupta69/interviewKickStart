import { WebinarAPIEntity } from "../../../Data/DataSource/API/Entity/WebinarAPIEntity";
import { IWebinarRepository } from "../../RepositoryInterface/IWebinarRepository";
import { IWebinarUseCase } from "./IWebinarUseCase";


export class WebinarUseCase implements IWebinarUseCase {
  private webinarRepo: IWebinarRepository;
  constructor(_webinarRepo: IWebinarRepository) {
    this.webinarRepo = _webinarRepo;
  }

  async invokeCreate(value: WebinarAPIEntity) {
    const created = this.webinarRepo.createWebinar(value);
    return created;
  }

  async invokeUpdate(id: string , value : WebinarAPIEntity){
    return this.webinarRepo.updateWebinar(id, value);
  }

  async invokeRemove(value : string) {
    return this.webinarRepo.removeWebinar(value);
  }

  async invokeGetAll(){
    return this.webinarRepo.getWebinars();
  }


}
