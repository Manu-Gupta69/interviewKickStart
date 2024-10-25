import { IWebinarRepository } from "../../Domain/RepositoryInterface/IWebinarRepository";
import { Webinar } from "../../Domain/Model/Webinar";
import IWebinarDataSource from "../DataSource/API/DB/IWebinarDataSource";
import { WebinarAPIEntity } from "../DataSource/API/Entity/WebinarAPIEntity";

export class WebinarRepositoryImpl implements IWebinarRepository {
  private dataSource: IWebinarDataSource<WebinarAPIEntity>;

  constructor(dataSource: IWebinarDataSource<WebinarAPIEntity>) {
    this.dataSource = dataSource;
  }

  async createWebinar(webinarBody: WebinarAPIEntity): Promise<Webinar | WebinarAPIEntity> {

    return this.dataSource.create(webinarBody);
  }

  async getWebinars(): Promise<Webinar[] | WebinarAPIEntity[]> {
    return this.dataSource.getAll();
  }

  async removeWebinar(id: string): Promise<boolean> {
    return this.dataSource.removeById(id);
  }

  async updateWebinar(id: string, value: Webinar): Promise<Webinar | WebinarAPIEntity | undefined> {
    return this.dataSource.updateByField(id, value);
  }
}
