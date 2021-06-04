import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons"
import StatusBarPage from '../../components/statusBarPage';
import Menu from "../../components/Menu"
import ModalLink from "../../components/ModalLink";

import {
    ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput,
    BoxIcon, Input, ButtonLink, ButtonLinkText
} from "./styles";

export default function Home() {

    // nome da variavel , função atribuidora
    const [input, setVariable] = useState(''); // useState é uma variavél
    const [modalVisible, setModalVisible] = useState(false);

    function handleShortLink() {
        setModalVisible(true);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <LinearGradient colors={['#1ddbb9', '#132742']} style={{ flex: 1, justifyContent: 'center' }}>

                <StatusBarPage barStyle="light-content" backgroundColor="#1ddbb9" />

                <Menu />

                <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'position'}
                    enabled
                >

                    <ContainerLogo>
                        <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
                    </ContainerLogo>

                    <ContainerContent>
                        <Title> SujeitoLink </Title>
                        <SubTitle> Cole seu link para encurtar. </SubTitle>

                        <ContainerInput>
                            <BoxIcon>
                                <Feather name="link" size={22} color="#FFF" />
                            </BoxIcon>
                            <Input placeholder=" Cole seu link aqui... "
                                placeholderTextColor="white"
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='url'
                                value={input} // Atribuindo o value do input a variavel
                                onChangeText={(text) => setVariable(text)} // Sempre q mudar vai atualizar a variable
                            />
                        </ContainerInput>

                        <ButtonLink onPress={handleShortLink}>
                            <ButtonLinkText> Gerar Link </ButtonLinkText>
                        </ButtonLink>

                    </ContainerContent>

                </KeyboardAvoidingView>

                <Modal visible={modalVisible} transparent animationType="slide">

                    <ModalLink OnClose={() => setModalVisible(false)} />

                </Modal>

            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}