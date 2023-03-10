import { decode } from "@/utils/json";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import {
  Button,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import { FormValues } from ".";
import { format } from "@/utils/date";

interface Props {}

const Event: NextPage<Props> = (props) => {
  const router = useRouter();

  const [event, setEvent] = useState<null | FormValues>(null);

  const { setValue, onCopy } = useClipboard("");

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

  useEffect(() => {
    if (event) {
      const text = `${event.title}
${format(event.start)}
${
  event?.description
    ? `${event.description}
`
    : ""
}
Lisää tapahtuma kalenteriisi:
${window.location.href}`;

      setValue(text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);

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
            <StatNumber>{format(event.start)}</StatNumber>
          </Stat>
          {event.end && (
            <Stat w="full">
              <StatLabel>Päättyy</StatLabel>
              <StatNumber>{format(event.end)}</StatNumber>
            </Stat>
          )}
          {event.location && (
            <Stat w="full">
              <StatLabel>Paikka</StatLabel>
              <StatNumber>{event.location}</StatNumber>
            </Stat>
          )}
          <Text mt="4 !important">
            Lisää tapahtuma kalenteriisi allaolevalla painikkeella
          </Text>
          <AddToCalendarButton
            label="Lisää kalenteriisi"
            name={event.title}
            description={event.description}
            startDate={event.start}
            endDate={event.end}
            location={event.location}
            options={["Google", "Microsoft365", "Outlook.com", "ical"]}
          />
          <Button variant="ghost" onClick={onCopy}>
            Kopioi leikepöydälle
          </Button>
        </>
      )}
    </>
  );
};

export default Event;
