import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardLabel}>Dices Rolling</Text>
          <Text style={styles.cardDescription}>
            Rolling dices in a Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint, aperiam. Assumenda tempora nesciunt rem.
            Aliquam nulla at explicabo, obcaecati sed ducimus ipsam laudantium
            unde quod, officia aspernatur blanditiis enim mollitia.
          </Text>
          <Text style={styles.cardFooter}>This is the card Footer</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
