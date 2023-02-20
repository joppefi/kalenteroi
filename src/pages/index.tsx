import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputProps,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import { Field, Form, Formik, FieldProps } from "formik";
import { encode } from "@/utils/json";
import { useRouter } from "next/router";

export interface FormValues {
  title: string;
  description?: string;
  start: string;
  end?: string;
  location?: string;
}

const Home = () => {
  const router = useRouter();

  const handleSubmit = async (values: FormValues) => {
    const encoded = await encode(values);
    router.push(`/${encoded}`);
  };

  return (
    <Formik<FormValues>
      initialValues={{
        title: "",
        description: undefined,
        start: new Date(new Date().setMinutes(0, 0, 0)).toISOString(),
        end: undefined,
        location: undefined,
      }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form style={{ width: "100%" }}>
          <Heading size="md" w="full" textAlign="center">
            Kalenteroi
          </Heading>

          <Field name="title">
            {({ field }: FieldProps<FormValues>) => (
              <FormControl>
                <FormLabel>Tapahtuman nimi</FormLabel>
                <Input {...(field as unknown as InputProps)}></Input>
              </FormControl>
            )}
          </Field>

          <Field name="description">
            {({ field }: FieldProps<FormValues>) => (
              <FormControl>
                <FormLabel>Kuvaus</FormLabel>
                <Textarea {...(field as unknown as TextareaProps)}></Textarea>
              </FormControl>
            )}
          </Field>

          <Field name="start">
            {({ field }: FieldProps<FormValues>) => (
              <FormControl>
                <FormLabel>Alkaa</FormLabel>
                <Input {...(field as unknown as InputProps)}></Input>
              </FormControl>
            )}
          </Field>

          <Field name="end">
            {({ field }: FieldProps<FormValues>) => (
              <FormControl>
                <FormLabel>Päättyy</FormLabel>
                <Input {...(field as unknown as InputProps)}></Input>
              </FormControl>
            )}
          </Field>

          <Field name="location">
            {({ field }: FieldProps<FormValues>) => (
              <FormControl>
                <FormLabel>Paikka</FormLabel>
                <Input {...(field as unknown as InputProps)}></Input>
              </FormControl>
            )}
          </Field>

          <Button w="full" marginTop="4" type="submit">
            Luo tapahtuma
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Home;
