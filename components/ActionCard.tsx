import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript in 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            repellendus reprehenderit consequuntur beatae ex vitae odit corporis
            aperiam inventore qui natus magnam officiis quasi earum cumque,
            omnis, in accusantium. Atque!
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://socioverse.online')}>
            <Text style={styles.link}>Read more</Text>
          </TouchableOpacity>
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
  card: {
    width: 350,
    height: 340,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: '#333',
    shadowOpacity: 0.5,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {},
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 8,
    backgroundColor: '#CAD5E2',
    width: '50%',
  },
  link: {
    fontSize: 16,
    color: '#EF5354',
    fontWeight: 'bold',
  },
});
