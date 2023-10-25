import { getIn } from "formik";

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      borderColor: "hsl(0, 100%, 66%)",
    };
  }
}

function addSpaceInAWord(text = "") {
  return text.toString().replace(/\d{4}(?=.)/g, "$& ");
}

export { getStyles, addSpaceInAWord };
