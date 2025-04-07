import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">A História da Culinária Italiana:</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Como e onde começou:</ThemedText>
        <ThemedText>
        A história da culinária italiana é rica e diversificada, refletindo a evolução cultural e social do país ao longo dos séculos. Influenciada por civilizações antigas, como os romanos e os etruscos, a cozinha italiana começou a se formar com a introdução de ingredientes como trigo, azeite de oliva e vinho. Durante a Idade Média, a culinária foi enriquecida por influências árabes e bizantinas, que trouxeram especiarias e novos métodos de preparo. O Renascimento marcou um período de grande inovação gastronômica, com a valorização da apresentação dos pratos e a utilização de ingredientes frescos. Com a unificação da Itália no século XIX, as tradições regionais se consolidaram, resultando em uma culinária variada que hoje é celebrada mundialmente, destacando-se pela simplicidade, frescor e sabor.
        </ThemedText>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
