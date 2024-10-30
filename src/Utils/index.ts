import { filterExpresssions } from "../Common/interfaces";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "";
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate.replace(",", " •");
};

export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export const base64ToImageFile = (base64: string, fileName: string): File => {
  // Split the base64 string into the metadata and the actual data
  const [metadata, data] = base64.split(",");
  const mimeType = metadata.match(/:(.*?);/)?.[1] || "";

  // Decode the base64 data
  const byteCharacters = atob(data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  // Create and return a file object
  return new File([byteArray], fileName, { type: mimeType });
};

export const evalutateExpression = (
  expression: filterExpresssions,
  obj: any
) => {
  const { key, operation, value } = expression;

  const propValue = obj[key];

  switch (operation) {
    case "greater_than":
      return propValue > value;
    case "less_than":
      return propValue < value;
    case "between":
      return propValue >= value[0] && propValue <= value[1];
    case "equal":
    default:
      return propValue === value;
  }
};

export const makeTitleCase = (str: string): string => {
  let result = "";
  let capitalize = true;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === " ") {
      result += char;
      capitalize = true;
    } else if (capitalize) {
      result += char.toUpperCase();
      capitalize = false;
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
};
