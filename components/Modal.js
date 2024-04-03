"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <dialog
        ref={modalRef}
        onClose={onHide}
        className="relative shadow-teal-700 mx-80 shadow-md border border-teal-600 flex flex-col p-10 rounded-md dark:bg-black dark:bg-opacity-90 dark:text-gray-100"
      >
        <span
          onClick={onHide}
          className="absolute top-3 right-3 flex justify-end cursor-pointer"
        >
          <Image
            src="/assets/icons/xmark.svg"
            className=""
            alt="close"
            width={30}
            height={30}
          />
        </span>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
