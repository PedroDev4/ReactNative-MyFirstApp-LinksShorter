import React from "react";
import { Text, TouchableOpacity, TouchableWithoutFeedback, Share } from "react-native";

import {
  ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl, View
} from "./styles";
import { Feather } from "@expo/vector-icons"
import Clipboard from "expo-clipboard";


// Criando Component
export default function ModalLink({ OnClose }) {

  function copyLink() {
    Clipboard.setString("https://seulink.com")
    alert('Link copiado com sucesso!')
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link: https://seulink.com`
      });

      if (result.action == Share.sharedAction) {
        if (result.activityType) { // Tratativa no IOS
          console.log("activityType");
        } else {
          console.log("Compartilhado com Sucesso!");
        }
      } else if (result.action == Share.dismissedAction) {
        console.log("Modal Fechado"); // Android
      }

    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <ModalContainer>

      <TouchableWithoutFeedback onPress={OnClose}>
        <View />
      </TouchableWithoutFeedback>
      <Container>

        <Header>

          <TouchableOpacity onPress={OnClose}>
            <Feather
              name="x"
              color="#212743"
              size={30}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShare}>
            <Feather
              name="share"
              color="#212743"
              size={30}
            />
          </TouchableOpacity>

        </Header>


        <LinkArea>

          <Title> Link Encurtado </Title>
          <LongUrl numberOfLines={1}> https://sujeitoprogramador.com.br </LongUrl>

          <ShortLinkArea activeOpacity={1}
            onPress={copyLink}>

            <ShortLinkUrl numberOfLines={1}> https://bit.ly/1103w93a </ShortLinkUrl>

            <TouchableOpacity onPress={copyLink}>

              <Feather
                name="copy"
                color="#FFF"
                size={25}
              />

            </TouchableOpacity>

          </ShortLinkArea>

        </LinkArea>

      </Container>

    </ModalContainer >
  )

}