import { decode } from "@/utils/json";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

interface Props {}

const Event: NextPage<Props> = (props) => {
  const router = useRouter();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    const decodeParams = async () => {
      const encoded = router.query.encoded as string;
      const decoded = await decode(encoded);
      setEvent(decoded);
    };

    if (router.query.encoded) {
      decodeParams();
    }
  }, [router.query.encoded]);

  return (
    <>
      {event && (
        <>
          <Stat w="full">
            <StatLabel>Tapahtuma</StatLabel>
            <StatNumber>{event.title}</StatNumber>
          </Stat>
          {event.description && (
            <Stat w="full">
              <StatLabel>Kuvaus</StatLabel>
              <StatNumber>{event.description}</StatNumber>
            </Stat>
          )}
          <Stat w="full">
            <StatLabel>Alkaa</StatLabel>
            <StatNumber>{event.start}</StatNumber>
          </Stat>
          {event.end && (
            <Stat w="full">
              <StatLabel>Päättyy</StatLabel>
              <StatNumber>{event.end}</StatNumber>
            </Stat>
          )}
          {event.location && (
            <Stat w="full">
              <StatLabel>Paikka</StatLabel>
              <StatNumber>{event.location}</StatNumber>
            </Stat>
          )}
          <AddToCalendarButton
            label="Lisää kalenteriisi"
            name={event.title}
            description={event.description}
            startDate={event.start}
            endDate={event.end}
            location={event.location}
            options={["Google", "Apple", "Microsoft365", "Outlook.com"]}
          />
        </>
      )}
    </>
  );
};

export default Event;
