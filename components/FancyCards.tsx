import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={styles.centeredView}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Dices Rolling</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 8,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
  },
  cardImage: {
    height: 180,
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#000000',
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
    fontWeight: '100',
  },
});
