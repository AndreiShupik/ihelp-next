// // src/pages/_app.jsx
// import "../styles/main.scss";
// import { rubik, chivo } from "@/components/layout/Fonts";
// import { appWithTranslation } from "next-i18next";
// //-------- PhotoOfCHanges styles --------
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "../features/home/PhotoOfChanges.scss";
// //-------

// import DefaultLayout from "../components/layout/DefaultLayout";

// export default function App({ Component, pageProps }) {
//   const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

//   // return <main className={`${chivo.className} ${rubik.className}`}>{getLayout(<Component {...pageProps} />)}</main>;
//   return <main className={rubik.className}>{getLayout(<Component {...pageProps} />)}</main>;
// }

// src/pages/_app.jsx
import { ModalProvider, useModal } from "@/components/ui/ModalActions/ModalContext";
import Modal from "@/components/ui/ModalActions/ModalActions";
import CtaForm from "../components/ui/CtaForm/CtaForm";

import "../styles/main.scss";
// import { rubik, chivo } from "@/components/layout/Fonts";
import { appWithTranslation } from "next-i18next";
//-------- PhotoOfCHanges styles --------
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../features/home/PhotoOfChanges.scss";
//-------

import DefaultLayout from "../components/layout/DefaultLayout";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  // return <main className={rubik.className}>{getLayout(<Component {...pageProps} />)}</main>;
  return (
    <ModalProvider>
      <main>{getLayout(<Component {...pageProps} />)}</main>
      <GlobalModal />
    </ModalProvider>
  );
}

// ✅ Global modal to display forms dynamically
function GlobalModal() {
  const { modalType, closeModal } = useModal();

  const modalMap = {
    donate: null, // show all projects
    partner: "Стати партнером",
    volunteer: "Стати волонтером",
    ihelp: "Я допомагаю", // ✅ new option
  };

  return (
    <Modal isOpen={!!modalType} onClose={closeModal}>
      <CtaForm page="Default" modalType={modalType} defaultOpen={modalMap[modalType]} onClose={closeModal} />
    </Modal>
  );
}

// Wrap and export with appWithTranslation
export default appWithTranslation(App);
