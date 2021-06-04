import React from 'react';
import { View, Text } from 'react-native';

import Menu from "../../components/Menu"
import ListItem from "../../components/ListItem"
import StatusBarPage from "../../components/statusBarPage"
import { Container, Title, ListLinks } from "./styles";

export default function MyLinks() {

    return (
        <Container>

            <StatusBarPage barStyle="light-content" backgroundColor="#132742" />

            <Menu />

            <Title> Meus Links </Title>

            <ListLinks
                // Dados da lista
                data={[{ id: 1, link: 'test.com' }, { id: 2, link: 'otherlink.com.b' }]}
                // Identificador de id para cada item da lista; 
                keyExtractor={(item) => String(item.id)}
                // Indicando qual item renderizar e qual o component vai renderizar
                renderItem={({ item }) => <ListItem data={item} />}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}

            />

        </Container>
    )

}