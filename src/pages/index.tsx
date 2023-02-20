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

type FormValues = any;

const Home = () => {
  const handleSubmit = (values) => {
    console.log(values);
    console.log(JSON.stringify(values));
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

          <FormControl>
            <FormLabel>Start date</FormLabel>
            <Input></Input>
          </FormControl>

          <FormControl>
            <FormLabel>End date</FormLabel>
            <Input></Input>
          </FormControl>
          <Button w="full" marginTop="4" type="submit">
            Create
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Home;
