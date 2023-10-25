import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Label } from "@/components/Label/Label";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addSpaceInAWord, getStyles } from "@/utils/functionUtils";

const inter = Inter({ subsets: ["latin"] });
const CreditCardSchema = Yup.object().shape({
  cardName: Yup.string()
    .min(5, "Too short")
    .max(20, "Too Long")
    .required("Required"),
  cardNumber: Yup.number()
    .min(1000000000000000, "Must be exactly 16 characters")
    .max(9999999999999999n, "Must be exactly 16 characters")
    .required("Required"),
  expMonth: Yup.number().min(1, "Too short").max(12).required("Required"),
  expYear: Yup.number().min(10, "Too short").max(99).required("Required"),
  cvc: Yup.number().min(100, "Too short").max(999).required("Required"),
});

const SpanError = ({ errorName }) => {
  return (
    <span>
      {errorName}
      <Image
        src="/images/icon-warning.svg"
        alt="icon warning"
        width={12}
        height={12}
      />
    </span>
  );
};

const SubmitSuccessfull = () => {
  return (
    <div className={styles.successfull}>
      <Image
        alt="icon complete"
        src="/images/icon-complete.svg"
        width={0}
        height={0}
        style={{ width: "20%", height: "auto" }}
      />
      <h5>Thank you !</h5>
      <span>We've added your card details</span>
    </div>
  );
};

export default function Home() {
  const formik = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvc: "",
    },
    validationSchema: CreditCardSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive card details form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <aside className={styles.left}>
          <div className={styles.creditCardContainer}>
            <picture className={styles.cardFront}>
              <Image
                src="/images/bg-card-front.png"
                alt="creditcard front"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <div className={styles.cardFrontContent}>
                <Image
                  src="/images/card-logo.svg"
                  alt="Logo"
                  width={0}
                  height={0}
                  style={{ width: "20%", height: "auto" }}
                />
                <p>
                  {addSpaceInAWord(formik.values.cardNumber) ||
                    "0000 0000 0000 0000"}
                </p>
                <span>{formik.values.cardName || "Franklin Huichi"}</span>
                <span>{`${formik.values.expMonth || "00"}/${
                  formik.values.expYear || "00"
                }`}</span>
              </div>
            </picture>
            <picture className={styles.cardBack}>
              <Image
                src="/images/bg-card-back.png"
                alt="creditcard back"
                width={0}
                height={0}
                priority={true}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <div className={styles.cardBackContent}>
                <p>{formik.values.cvc || "000"}</p>
              </div>
            </picture>
          </div>
        </aside>
        <aside className={styles.right}>
          <form className={styles.cardForm} onSubmit={formik.handleSubmit}>
            {formik.isSubmitting ? (
              <SubmitSuccessfull />
            ) : (
              <>
                <p>
                  <Label>Cardholder Name</Label>
                  <Input
                    name="cardName"
                    type="text"
                    placeholder="e.g. Franklin Huichi"
                    value={formik.values.cardName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={getStyles(formik.errors, "cardName")}
                  />
                  {formik.touched.cardName && formik.errors.cardName ? (
                    <SpanError errorName={formik.errors.cardName} />
                  ) : null}
                </p>
                <p>
                  <Label>Card Number</Label>
                  <Input
                    name="cardNumber"
                    type="number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    style={getStyles(formik.errors, "cardNumber")}
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.cardNumber && formik.errors.cardNumber ? (
                    <SpanError errorName={formik.errors.cardNumber} />
                  ) : null}
                </p>
                <p>
                  <Label>Exp. Date (MM/YY)</Label>
                  <Input
                    name="expMonth"
                    type="number"
                    placeholder="MM"
                    value={formik.values.expMonth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={getStyles(formik.errors, "expMonth")}
                  />
                  <Input
                    name="expYear"
                    type="number"
                    placeholder="YY"
                    value={formik.values.expYear}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={getStyles(formik.errors, "expYear")}
                  />
                </p>
                <p>
                  <Label>Cvc</Label>
                  <Input
                    name="cvc"
                    type="number"
                    placeholder="e.g. 123"
                    value={formik.values.cvc}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={getStyles(formik.errors, "cvc")}
                  />
                </p>
              </>
            )}
            <Button type="submit" disabled={formik.isSubmitting} style={{ height: '6rem'}}>
              {!formik.isSubmitting ? "Confirm" : "Continue"}
            </Button>
          </form>
        </aside>
        {/* Thank you! We've added your card details Continue
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div> */}
      </main>
    </>
  );
}
