import { getIn } from "formik";

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      borderColor: "hsl(0, 100%, 66%)",
    };
  }
}

export { getStyles };
