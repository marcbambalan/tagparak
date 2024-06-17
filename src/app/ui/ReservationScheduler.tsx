"use client";

import { Scheduler, Toast } from "devextreme-react";
import { SchedulerTypes } from "devextreme-react/cjs/scheduler";
import { useCallback, useEffect, useState } from "react";

const views: SchedulerTypes.ViewType[] = ["day", "week", "month", "agenda"];

export default function ReservationScheduler() {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  useEffect(() => {
    setIsSnackbarVisible(true);
  }, []);

  const handleContentReady = useCallback(
    (e: SchedulerTypes.ContentReadyEvent) => {
      // the scrollTo method does not work on the agenda view
      const currentView = e.component.option("currentView");
      if (currentView !== "agenda") {
        // scroll to current time/date
        e.component.scrollTo(new Date());
      }
    },
    [],
  );

  const handleSnackbarHiding = useCallback(
    () => setIsSnackbarVisible(false),
    [setIsSnackbarVisible],
  );

  return (
    <>
      <Scheduler
        id="reservationScheduler"
        views={views}
        defaultCurrentView="week"
        onContentReady={handleContentReady}
      />
      <Toast
        visible={isSnackbarVisible}
        message="Scheduler features are not yet implemented"
        onHiding={handleSnackbarHiding}
        type="warning"
        displayTime={1000}
      />
    </>
  );
}
