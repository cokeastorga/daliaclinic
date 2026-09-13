"use client";

import React, { useState, createContext, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import AppointmentModal from "./AppointmentModal";

interface ModalContextType {
  openAppointment: (serviceId?: string) => void;
  closeAppointment: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openAppointment: () => {},
  closeAppointment: () => {},
});

export const useAppointmentModal = () => useContext(ModalContext);

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const openAppointment = (serviceId?: string) => {
    setSelectedService(serviceId);
    setModalOpen(true);
  };

  const closeAppointment = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openAppointment, closeAppointment }}>
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenAppointment={() => openAppointment()} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <AppointmentModal
          isOpen={modalOpen}
          onClose={closeAppointment}
          preselectedService={selectedService}
        />
      </div>
    </ModalContext.Provider>
  );
}
