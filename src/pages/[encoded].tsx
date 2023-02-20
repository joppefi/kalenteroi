import { decode } from "@/utils/json";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";

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
    <div>
      {JSON.stringify(event)}

      {event && (
        <AddToCalendarButton
          name={event.title}
          description={event.description}
          startDate={event.start}
          endDate={event.end}
          location={event.location}
          options={["google", "apple"]}
        />
      )}
    </div>
  );
};

export default Event;
