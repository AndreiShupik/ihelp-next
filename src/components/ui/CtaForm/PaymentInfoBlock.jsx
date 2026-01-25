// PaymentInfoBlock.jsx
import React from "react";
import { useTranslation } from "next-i18next";

import * as styles from "./CtaForm.module.scss";
import CopyBlock from "./CopyBlock";

function PaymentInfoBlock({ page, copiedValue, setCopiedValue, data, blockStyle }) {
  const { t } = useTranslation("payment");

  const getAccountBlockClass = (value) =>
    `${styles.accountBlock} ${copiedValue === value ? styles.active : ""} ${
      page !== "Default" ? styles.mainColor : ""
    }`;

  return (
    <section className={`${styles.paymentInfo} ${blockStyle}`}>
      {/* <h4>БФ &quot;Я допомагаю&quot;</h4>
      <p>
        <strong>Призначення платежу:</strong> {data.purpose}
      </p>
      <p>
        <strong>ЄДРПОУ:</strong> {data.edrpou}
      </p> */}

      {data.bankUAH && (
        <>
          <h4>{t("bankUAH.title")}:</h4>
          <div
            key={data.bankUAH.edrpou}
            className={getAccountBlockClass(data.bankUAH.iban)}
            onClick={() => {
              navigator.clipboard.writeText(data.bankUAH.iban);
              setCopiedValue(data.bankUAH.iban);
            }}
          >
            <section>
              <h4>{data.bankUAH.beneficiary}</h4>
              <p>
                <strong>{t("bankUAH.edrpou")}:</strong> {data.bankUAH.edrpou}
              </p>
              <p>
                <strong>IBAN:</strong>
                <br /> {data.bankUAH.iban}
              </p>
              <p>
                <strong>{t("bankUAH.bank")}: </strong> {data.bankUAH.bank}
              </p>
              <p>
                <strong>{t("paymentPurpose")}:</strong>
                <br /> {data.bankUAH.purpose}
              </p>
              <CopyBlock value={data.bankUAH.iban} copiedValue={copiedValue} />
            </section>
          </div>
          <p className={styles.donateNow}>
            <a href={data.bankUAH.link} target="blank">
              {t("bankUAH.onlineDonation")}
            </a>
            <br />
          </p>
        </>
      )}

      {data.bankUSD && (
        <>
          <h4>{t("bankUSD.title")}:</h4>
          <div
            key={data.bankUSD.edrpou}
            className={getAccountBlockClass(data.bankUSD.iban)}
            onClick={() => {
              navigator.clipboard.writeText(data.bankUSD.iban);
              setCopiedValue(data.bankUSD.iban);
            }}
          >
            <section>
              <h4>Beneficiary: {data.bankUSD.beneficiary}</h4>
              <p>
                <strong>IBAN:</strong>
                <br /> {data.bankUSD.iban}
              </p>
              <p>
                <strong>Bank:</strong> {data.bankUSD.bank}
              </p>
              <p>
                <strong>SWIFT:</strong> {data.bankUSD.swift}
              </p>
              <p>
                <strong>Correspondent bank:</strong> {data.bankUSD.correspondent}
              </p>
              <p>
                <strong>SWIFT:</strong> {data.bankUSD.correspondentSwift}
              </p>
              <p>
                <strong>Account:</strong> {data.bankUSD.account}
              </p>
              <p>
                <strong>{t("paymentPurpose")}</strong>
                <br /> {data.bankUSD.purpose}
              </p>
              <CopyBlock value={data.bankUSD.iban} copiedValue={copiedValue} />
            </section>
          </div>
        </>
      )}

      {data.monobankCard && (
        <>
          <h4>{t("monobankCard.title")}:</h4>
          <div
            className={`${getAccountBlockClass(data.monobankCard)} ${styles.paymentBlock}`}
            onClick={() => {
              navigator.clipboard.writeText(data.monobankCard);
              setCopiedValue(data.monobankCard);
            }}
          >
            <p>{data.monobankCard}</p>

            <CopyBlock value={data.monobankCard} copiedValue={copiedValue} />
          </div>
        </>
      )}

      {data.bankLink && (
        <>
          <h4>{t("monobankJar.title")}:</h4>
          <div className={`${styles.bankLink}`}>
            <a href={data.bankLink} target="_blank" rel="noopener noreferrer">
              {data.bankLink}
            </a>
          </div>
        </>
      )}

      {data.payPal && (
        <>
          <h4>PayPal:</h4>
          <div
            className={`${getAccountBlockClass(data.payPal)} ${styles.paymentBlock}`}
            onClick={() => {
              navigator.clipboard.writeText(data.payPal);
              setCopiedValue(data.payPal);
            }}
          >
            <p>{data.payPal}</p>

            <CopyBlock value={data.payPal} copiedValue={copiedValue} />
          </div>
        </>
      )}

      {/* {data.crypto && (
        <div className={styles.crypto}>
          <strong>{t("crypto.title")}:</strong>
          {data.crypto.map((cryptoAcc) => (
            <div
              key={cryptoAcc.value}
              className={getAccountBlockClass(cryptoAcc.value)}
              onClick={() => {
                navigator.clipboard.writeText(cryptoAcc.value);
                setCopiedValue(cryptoAcc.value);
              }}
            >
              <span className={styles.breakable}>
                <strong>{cryptoAcc.label}:</strong> {cryptoAcc.value}
              </span>
              <CopyBlock value={cryptoAcc.value} copiedValue={copiedValue} />
            </div>
          ))}
        </div>
      )} */}
    </section>
  );
}

export default PaymentInfoBlock;
