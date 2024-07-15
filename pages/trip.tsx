import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import ActionBar from "@/components/common/ActionBar";
import Button from "@/components/ui/Button/Button";
import ViewTripLayout from "@/components/modules/Trips/ViewTripLayout";
import TripDetailsCard from "@/components/modules/Trips/TripDetailsCard";
import OriginIcon from "@/components/icons/OriginIcon";
import DestinationIcon from "@/components/icons/DestinationIcon";
import CashIcon from '@/components/icons/CashIcon';
import WalletIcon from "@/components/icons/WalletIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import CarOccupantDetailsCard from "@/components/modules/Trips/CarOccupantDetailsCard";
import ViewFeed from "@/components/modules/Trips/ViewFeed";
import { useViewTripQuery } from "@/api-services/tripsService";
import { useRouter } from "next/router";
import RatingIcon from "@/components/icons/RatingIcon";
import styles from '@/styles/styleMap.module.css';

import { io } from "socket.io-client";
import TimesIcon from "@/components/icons/TimesIcon";
import AppHead from "@/components/common/AppHead";
import TripRatingCard from "@/components/modules/Trips/TripRatingCard";
import { capitalizeAllFirstLetters } from "@/utils";
import RouteMap from "@/components/common/AppMap/RouteMap";
import Navbar from "@/components/common/Navbar";
const socket = io("https://rideservice-dev.up.railway.app");

const ViewTrip: NextPage = () => {
  const [isFeed, setIsFeed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [currentCardSubTitle, setCurrentCardSubTitle] = useState("");
  const { id, tab, reason } = router.query;
  const [data, setData] = useState<any>()
  const tabOptions = [undefined, "pending", "active", "completed", "declined"];
  const cardSubTitleMap: Record<string, string> = {
    pending: "Driving to rider",
    active: "Driving to destination",
    completed: "Trip completed",
    declined: "Cancelled order",
  };
  enum Tab {
    TRIP_ORDERS,
    PENDING_TRIPS,
    ACTIVE_TRIPS,
    COMPLETED_TRIPS,
    CANCELLED_ORDERS,
  }
  
  const [liveLocation, setLiveLocation] = useState<{
    lat: number;
    lng: number;
    address: string;
  } | null>(null);

  useEffect(() => {
    if (tab === undefined) {
      setCurrentCardSubTitle("Looking for driver");
    } else {
      setCurrentCardSubTitle(cardSubTitleMap[`${tab}`]);
    }
  }, [tab]);

  useEffect(() => {
    if (id) {
      setIsLoading(true)
      const fetchData = async () => {
        const dataInit  = await useViewTripQuery(String(id));
        setData(dataInit)
        setIsLoading(false)
      }
      fetchData()
    }
  }, [id])
  
  useEffect(() => {
    if (data) {
      console.log({data})
      socket.on("connect", () => {
        joinRoom(data.orderId);
      });
    }

    socket.on("driver-location", (data: { lat: number; long: number }) => {
      const location = { lat: data.lat, lng: data.long, address: "" };
      setLiveLocation(location);
    });

    return () => {
      socket.disconnect();
      setLiveLocation(null);
    };
  }, [data]);

  const joinRoom = (orderId: string) => {
    socket.emit("join-room", [orderId]);
  };

  return (
    <>
      <AppHead title="Kabukabu | Trips" />
      <div className="h-screen bg-[#F8F8F8]">
        <ViewTripLayout
          mainComponents={
            <>
              <div className={styles.app}>
                <div className="w-full h-full">
                  {data?.startPoint && data?.endPoint && (
                    <>
                      <RouteMap start={
                          liveLocation
                          ? {lat: liveLocation.lng, lng: liveLocation.lat}
                          : {lat: data?.startPoint[1], lng: data?.startPoint[0]}
                        } 
                        end={{lat: data?.endPoint[1], lng: data?.endPoint[0]}} 
                      />
                    </>
                  )}
                </div>
                {
                  data &&
                  <div className={styles.overlay}>
                    <div className="flex bg-[#FDFDFD] w-full gap-5 rounded-lg">
                      <div className="flex w-full gap-4">
                        <TripDetailsCard
                          data={data}
                        />
                      </div>
                    </div>
                  </div>
                }
                
              </div>
              <div className="w-full h-[20vh]">
                <Navbar />
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default ViewTrip;

const location = {
  address: "",
  lat: 6.532954,
  lng: 3.36739,
};

const raiseSosData = [
  {
    topLocation: "Lekki Phase 1 RRS",
    subLocation: "Admiralty way, Lekki Phase 1",
    isChecked: false,
  },
  {
    topLocation: "Lekki Phase 1 RRS",
    subLocation: "Admiralty way, Lekki Phase 1",
    isChecked: false,
  },
  {
    topLocation: "Lekki Phase 1 RRS",
    subLocation: "Admiralty way, Lekki Phase 1",
    isChecked: true,
  },
  {
    topLocation: "Lekki Phase 1 RRS",
    subLocation: "Admiralty way, Lekki Phase 1",
    isChecked: true,
  },
];
