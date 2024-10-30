import React, { useState } from "react";
import * as Yup from "yup";
import { Box } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateTimeInputForm from "../Common/DateTimeInputForm";
import ModalActions from "../Common/ModalBottom";
import ImageForm from "../Common/ImageForm";
import dayjs, { Dayjs } from "dayjs";
import { convertToBase64, makeTitleCase } from "../../Utils";
import { WebinarAPIEntity } from "../../Data/DataSource/API/Entity/WebinarAPIEntity";
import { FormValues } from "../../Common/interfaces";
import ErrorDisplay from "../Common/ErrorDisplay";

const formConfig = {
  instructorDetails: [
    {
      name: "instructorName",
      label: "Instructor Name",
      placeholder: "Type the instructor name",
      required: true,
    },
    {
      name: "instructorRole",
      label: "Instructor Role",
      placeholder: "Type the instructor role",
      required: true,
    },
    {
      name: "instructorCompany",
      label: "Instructor Company",
      placeholder: "Type the instructor company",
      required: true,
    },
  ],
  topicsField: [
    {
      name: "topic",
      label: "Topics",
      placeholder: "Type the topics",
      required: true,
    },
  ],
  imageField: [
    {
      name: "instructorImage",
      label: "Instructor Image",
      type: "file",
      required: true,
    },
  ],
  webinarDetails: [
    {
      name: "webinarTitle",
      label: "Webinar Title",
      placeholder: "Type the webinar title",
      required: true,
      type: "text",
    },
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
      icon: <CalendarTodayIcon />,
      required: true,
    },
    {
      name: "startTime",
      label: "Start Time",
      type: "time",
      icon: <AccessTimeIcon />,
      required: true,
    },
    {
      name: "endTime",
      label: "End Time",
      type: "time",
      icon: <AccessTimeIcon />,
      required: true,
    },
  ],
};

// Validation Schema
const validationSchema = Yup.object().shape({
  webinarTitle: Yup.string()
    .required("Webinar Title is required")
    .min(5, "Title must be at least 5 characters long"),

  instructorName: Yup.string().required("Instructor Name is required"),

  instructorRole: Yup.string().required("Instructor Role is required"),

  instructorCompany: Yup.string().required("Instructor Company is required"),

  instructorImage: Yup.mixed().required("Instructor Image is required"),

  topic: Yup.string()
    .required("Topic is required")
    .min(5, "Topic must be at least 5 characters long"),

  // Date and Time Validation
  startDate: Yup.string()
  .required("Start Date is required")
  .test("is-valid-date", "Invalid date format for Start Date", (value) => {
    const parsedDate = Date.parse(value);
    return !isNaN(parsedDate);
  })
  .test("is-not-past-date", "Start Date cannot be in the past", (value) => {
    const parsedDate = Date.parse(value);
    return parsedDate >= Date.now();
  }),

  startTime: Yup.string()
    .required("Start Time is required")
    .test(
      "is-valid-time",
      "Invalid time format for Start Time",
      (value) => !isNaN(Date.parse(value))
    ),

  endTime: Yup.string()
    .required("End Time is required")
    .test(
      "is-valid-time",
      "Invalid time format for End Time",
      (value) => !isNaN(Date.parse(value))
    )
    .test(
      "is-after-start-time",
      "End Time must be after Start Time",
      function (value) {
        const { startTime } = this.parent;
        return new Date(value) > new Date(startTime);
      }
    ),
});

interface ICustomForm {
  createWebinars: (value: WebinarAPIEntity) => void;
  toggleModal: () => void;
  initialFormValues: (FormValues & { id: number }) | undefined;
  updateWebinar: (id: string, value: WebinarAPIEntity) => void;
}

const CustomForm: React.FC<ICustomForm> = ({
  createWebinars,
  toggleModal,
  initialFormValues,
  updateWebinar,
}) => {
  const [formValues, setFormValues] = useState<FormValues>(
    initialFormValues || {
      instructorName: "",
      instructorRole: "",
      instructorCompany: "",
      instructorImage: null,
      topic: "",
      webinarTitle: "",
      startDate: "",
      startTime: "",
      endTime: "",
    }
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [imagePreview, setImagePreview] = useState<string | null>(
    initialFormValues?.instructorImage
      ? URL.createObjectURL(initialFormValues.instructorImage)
      : null
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | { name: string; value: Dayjs }
  ) => {
    let name: string;
    let value: any;

    // Check if the event is a ChangeEvent from an input
    if ("target" in event) {
      // Standard input change event
      name = event.target.name;
      value = event.target.value;
    } else {
      // Custom object from DatePicker or TimePicker
      name = event.name;
      value = dayjs(event.value).format(); // Ensure this value is in the desired format
    }

    // Update form values
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      const file = event.currentTarget.files[0];
      setFormValues((prev) => ({ ...prev, instructorImage: file }));

      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setImagePreview(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const validate = async () => {
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      return true;
    } catch (err) {
      
      if (err instanceof Yup.ValidationError) {
        const validationErrors = err.inner.reduce(
          (acc: any, error: Yup.ValidationError) => {
            if (error.path) {
              acc[error.path] = error.message;
            }
            return acc;
          },
          {}
        );

        setErrors(validationErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const isValid = await validate();

    if (isValid) {
      const base64String = await convertToBase64(formValues.instructorImage!);
      const valuesToSubmit = {
        ...formValues,
        instructorImage: base64String,
        topic: makeTitleCase(formValues.topic),
      };

      if (initialFormValues) {
        updateWebinar(`${initialFormValues.id}`, valuesToSubmit);
      } else {
        createWebinars(valuesToSubmit);
      }
      toggleModal();
    }
  };

  return (
    <form>
     <ErrorDisplay errorMessages={Object.values(errors)} />
      <Box>
        <ImageForm
          values={formValues}
          errors={errors}
          touched={{}}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          formConfig={formConfig}
          imagePreview={imagePreview}
        />

        <DateTimeInputForm
          values={formValues}
          errors={errors}
          touched={{}}
          handleChange={handleChange}
          formConfig={formConfig.webinarDetails}
        />

        <ModalActions
          cancelHandler={toggleModal}
          submitHandler={handleSubmit}
          submitBtnConfig={{
            name: initialFormValues ? "Update Webinar" : "Create Webinar",
          }}
        />
      </Box>
    </form>
  );
};

export default CustomForm;
