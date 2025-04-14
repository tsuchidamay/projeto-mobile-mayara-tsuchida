import { StyleSheet, Image, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';//api

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
        source={require('@/assets/images/foto-home.jpg')}
        style={styles.headerImage}
      />
    }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Características da Culinária Italiana:</ThemedText>
      </ThemedView>
      <ThemedText>Essas características ajudam a definir a rica e variada culinária italiana, que é apreciada em todo o mundo!
      </ThemedText>

      <Collapsible title="Simplicidade:">
        <ThemedText>
        A culinária italiana valoriza a simplicidade, utilizando poucos ingredientes de alta qualidade para criar pratos saborosos.
        </ThemedText>
      </Collapsible>
      
      <Collapsible title="Frescor dos Ingredientes:">
        <ThemedText>
        A ênfase em ingredientes frescos e sazonais é fundamental, com destaque para vegetais, ervas, queijos e carnes locais.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Variedade Regional:">
        <ThemedText>
        Cada região da Itália tem suas próprias especialidades e tradições culinárias, refletindo a diversidade cultural e geográfica do país.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Uso de Azeite de Oliva:">
        <ThemedText>
        O azeite de oliva é um ingrediente essencial, utilizado tanto para cozinhar quanto para temperar saladas e pratos.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Massas e Pães:">
        <ThemedText>
        A massa é um dos pilares da culinária italiana, com uma infinidade de formas e preparações, além de pães artesanais, como ciabatta e focaccia.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Molhos Ricos:">
        <ThemedText>
        Os molhos, como o marinara, pesto e ragù, são fundamentais, muitas vezes preparados com ingredientes frescos e cozidos lentamente para intensificar os sabores.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
