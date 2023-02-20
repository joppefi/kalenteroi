import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

interface Props {}

const Event: NextPage<Props> = (props) => {
  const router = useRouter();

  console.log(router.query);

  return <div>Event</div>;
};

export default Event;
