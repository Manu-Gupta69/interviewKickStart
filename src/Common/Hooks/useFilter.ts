import { useEffect, useState } from "react";
import { Webinar } from "../../Domain/Model/Webinar";
import { evalutateExpression } from "../../Utils";
import { FilterObject } from "../interfaces";
import { WebinarAPIEntity } from "../../Data/DataSource/API/Entity/WebinarAPIEntity";

export default function useFilter(webinars: Webinar[] | WebinarAPIEntity[]) {
  const [expression, setExpression] = useState<FilterObject>({});
  const [filteredData, setFilteredData] = useState<
    Webinar[] | WebinarAPIEntity[]
  >([]);

  useEffect(() => {
    const expressionButInArray = Object.values(expression);
    console.log(expressionButInArray , "check")
    if (expressionButInArray.length) {
      const filteredData = webinars.filter(
        (webinar: Webinar | WebinarAPIEntity) => {
          console.log(webinar, "web");
          let res = expressionButInArray.some((expression) => {
            return evalutateExpression(expression, webinar);
          });

          console.log(res);
          return res;
        }
      );
      setFilteredData((prev) => filteredData);
    }else setFilteredData([])
  }, [expression]);

  return { expression, setExpression, filteredData };
}
