import {
  Section,
  Img,
  Text,
  Heading,
  Button,
  Html,
  Head,
  Body,
  Font,
} from "@react-email/components";

import React from "react";

const ConnectMeEmail = ({ name, email, purpose, message }: any) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Body style={{ padding: "0 12rem" }}>
        <Section
          style={{
            marginTop: 16,
            marginBottom: 16,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Img
            alt="Braun Collection"
            height={320}
            src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              width: "100%",
              borderRadius: 12,
              objectFit: "cover",
            }}
          />
          <Section style={{ marginTop: 32, textAlign: "center" }}>
            <Text
              style={{
                marginTop: 16,
                fontSize: 18,
                lineHeight: "28px",
                fontWeight: 600,
                color: "rgb(79,70,229)",
              }}>
              Portfolio Reminder
            </Text>
            <Heading
              as="h1"
              style={{
                fontSize: 36,
                lineHeight: "40px",
                fontWeight: 400,
                letterSpacing: 0.4,
                color: "rgb(17,24,39)",
              }}>
              Hi, My Name is{" "}
              <span style={{ fontWeight: 600, color: "rgb(79, 70, 229)" }}>
                {name}.
              </span>{" "}
              <br />
              <p style={{ fontSize: "20px" }}>I'm interested in {purpose}.</p>
            </Heading>
            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                lineHeight: "24px",
                color: "rgb(107,114,128)",
                textAlign: "justify",
              }}>
              {message}
            </Text>
            <Button
              href={`mailto:${email}`}
              style={{
                marginTop: 16,
                borderRadius: 8,
                backgroundColor: "rgb(79,70,229)",
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 12,
                paddingBottom: 12,
                fontWeight: 600,
                color: "rgb(255,255,255)",
              }}>
              Connect Via E-mail
            </Button>
          </Section>
        </Section>
      </Body>
    </Html>
  );
};

export { ConnectMeEmail };
