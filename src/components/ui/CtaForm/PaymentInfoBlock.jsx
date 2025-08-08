// PaymentInfoBlock.jsx
import React from "react";
import * as styles from "./CtaForm.module.scss";
import CopyBlock from "./CopyBlock";

function PaymentInfoBlock({ page, copiedValue, setCopiedValue, data, blockStyle }) {
  const getAccountBlockClass = (value) =>
    `${styles.accountBlock} ${copiedValue === value ? styles.active : ""} ${
      page !== "Default" ? styles.mainColor : ""
    }`;

  return (
    <section className={`${styles.paymentInfo} ${blockStyle}`}>
      <h4>БФ &quot;Я допомагаю&quot;</h4>
      <p>
        <strong>ЄДРПОУ:</strong> {data.edrpou}
      </p>
      <p>
        <strong>Призначення платежу:</strong> {data.purpose}
      </p>

      {data.accounts.map((acc) => (
        <div
          key={acc.value}
          className={getAccountBlockClass(acc.value)}
          onClick={() => {
            navigator.clipboard.writeText(acc.value);
            setCopiedValue(acc.value);
          }}
        >
          <span>
            <strong>{acc.label}:</strong>
            <br /> {acc.value}
          </span>
          <CopyBlock value={acc.value} copiedValue={copiedValue} />
        </div>
      ))}

      {data.bankLink && (
        <div className={styles.bankLink}>
          <strong>{data.bankLink.label}</strong>
          <br />
          <a href={data.bankLink.url} target="_blank" rel="noopener noreferrer">
            {data.bankLink.url}
          </a>
        </div>
      )}

      {data.crypto && (
        <div className={styles.crypto}>
          <strong>Донати в криптовалюті:</strong>
          {data.crypto.map((cryptoAcc) => (
            <div
              key={cryptoAcc.value}
              className={getAccountBlockClass(cryptoAcc.value)}
              onClick={() => {
                navigator.clipboard.writeText(cryptoAcc.value);
                setCopiedValue(cryptoAcc.value);
              }}
            >
              <span>
                <strong>{cryptoAcc.label}:</strong> {cryptoAcc.value}
              </span>
              <CopyBlock value={cryptoAcc.value} copiedValue={copiedValue} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default PaymentInfoBlock;
