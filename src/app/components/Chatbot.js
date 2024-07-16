'use client'

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import React from "react";

const theme = { 
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#8bca84",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#8bca84",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

function chatbot() {
  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: ({ previousValue }) => `Hi ${previousValue}, nice to meet you!`,
      end: true,
    },
  ];

  const botAvatarUrl =
    "https://img.lovepik.com/free-png/20211129/lovepik-robot-avatar-png-image_401191268_wh1200.png"; 
  const userAvatarUrl =
    "https://img.lovepik.com/element/45004/1169.png_300.png"; 
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating={true}
          botDelay={1000}
          headerTitle="LearnMore"
          botAvatar={botAvatarUrl}
          userAvatar={userAvatarUrl}
        />
      </ThemeProvider>
    </div>
  );
}

export default chatbot;
