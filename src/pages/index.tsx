import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik, FieldAttributes } from "formik";
import { decode, encode } from "@/utils/json";
import { useRouter } from "next/router";

type FormValues = any;

const Home = () => {
  const router = useRouter();

  const handleSubmit = async (values) => {
    const encoded = await encode(values);
    router.push(`/${encoded}`);
  };

  return (
    <Formik<FormValues> initialValues={{ title: "" }} onSubmit={handleSubmit}>
      {(props) => (
        <Form style={{ width: "100%" }}>
          <Heading size="md" w="full" textAlign="center">
            Kalenteroi
          </Heading>

          <Field name="title">
            {({ field }: FieldAttributes<FormValues>) => (
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input {...field}></Input>
              </FormControl>
            )}
          </Field>

          <Field name="description">
            {({ field }: FieldAttributes<FormValues>) => (
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea {...field}></Textarea>
              </FormControl>
            )}
          </Field>

          <Field name="start">
            {({ field }: FieldAttributes<FormValues>) => (
              <FormControl>
                <FormLabel>Start date</FormLabel>
                <Input {...field}></Input>
              </FormControl>
            )}
          </Field>

          <Field name="end">
            {({ field }: FieldAttributes<FormValues>) => (
              <FormControl>
                <FormLabel>End date</FormLabel>
                <Input {...field}></Input>
              </FormControl>
            )}
          </Field>

          <Field name="location">
            {({ field }: FieldAttributes<FormValues>) => (
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input {...field}></Input>
              </FormControl>
            )}
          </Field>

          <Button w="full" marginTop="4" type="submit">
            Create
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Home;
