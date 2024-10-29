export interface FormValues {
  instructorName: string;
  instructorRole: string;
  instructorCompany: string;
  instructorImage: File | null; // Adjusted to allow null
  topic: string;
  webinarTitle: string;
  startDate: string;
  startTime: string;
  endTime: string;
}

export interface filterExpresssions {
  key: string;
  operation: string;
  value: any;
}

export interface FilterObject  {
  [key: string]: filterExpresssions;
};
