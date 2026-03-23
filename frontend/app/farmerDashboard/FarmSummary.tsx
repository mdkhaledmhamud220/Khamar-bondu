import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { toBanglaNumber } from '../utils/banglaNumber';
import { useFarm } from '../context/FarmContext';

import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';

type Props = {
  totalMilk?: number;
};

const FarmSummary = ({ totalMilk = 0 }: Props) => {
  const { todayCost } = useFarm();

  const pricePerLiter = 50; // 🔥 প্রতি লিটার দাম
  const income = totalMilk * pricePerLiter;
  const profit = income - todayCost;

  return (
    <View style={styles.container}>
      {/* 🔥 Header */}
      <View style={styles.headerCard}>
        <View style={styles.headerTop}>
          <View style={styles.profileRow}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={22} color="white" />
            </View>

            <View>
              <Text style={styles.role}>স্বাগতম খামারি</Text>
              <Text style={styles.name}>আব্দুল করিম</Text>
            </View>
          </View>

          <View style={styles.notification}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
        </View>

        <View style={styles.farmBox}>
          <Text style={styles.farmLabel}>খামারের নাম</Text>
          <Text style={styles.farmName}>সবুজ মেঘেরি ফার্ম</Text>
        </View>
      </View>

      {/* 🔹 Title */}
      <Text style={styles.title}>সারসংক্ষেপ</Text>

      {/* 🔹 Row 1 */}
      <View style={styles.row}>
        <View style={[styles.card, styles.blue]}>
          <MaterialCommunityIcons name="cow" size={26} color="white" />
          <Text style={styles.cardValue}>{toBanglaNumber(45)}</Text>
          <Text style={styles.cardLabel}>মোট গরু</Text>
        </View>

        <View style={[styles.card, styles.purple]}>
          <MaterialCommunityIcons name="bottle-tonic" size={26} color="white" />
          <Text style={styles.cardValue}>
            {toBanglaNumber(totalMilk)} লিটার
          </Text>
          <Text style={styles.cardLabel}>আজকের দুধ</Text>
        </View>
      </View>

      {/* 🔹 Row 2 */}
      <View style={styles.row}>
        <View style={[styles.card, styles.green]}>
          <FontAwesome5 name="chart-line" size={22} color="white" />
          <Text style={styles.cardValue}>৳ {toBanglaNumber(income)}</Text>
          <Text style={styles.cardLabel}>আজকের আয়</Text>
        </View>

        <View style={[styles.card, styles.orange]}>
          <FontAwesome5 name="chart-line" size={22} color="white" />
          <Text style={styles.cardValue}>৳ {toBanglaNumber(todayCost)}</Text>
          <Text style={styles.cardLabel}>আজকের খরচ</Text>
        </View>
      </View>

      {/* 🔹 Profit */}
      <View style={styles.profitCard}>
  
        <Text style={styles.cardValue}>৳ {toBanglaNumber(profit)}</Text>
        <Text style={styles.cardLabel}>আজকের লাভ</Text>
      </View>
    </View>
  );
};

export default FarmSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eef3ef',
    padding: 16,
  },

  headerCard: {
    backgroundColor: '#17b45b',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2dd17c',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  role: {
    color: 'white',
    fontSize: 13,
  },

  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  notification: {
    position: 'relative',
  },

  farmBox: {
    marginTop: 12,
    backgroundColor: '#2cc56e',
    padding: 10,
    borderRadius: 10,
  },

  farmLabel: {
    color: 'white',
    fontSize: 12,
  },

  farmName: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  card: {
    width: '48%',
    padding: 16,
    borderRadius: 16,
  },

  cardValue: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
  },

  cardLabel: {
    color: 'white',
    fontSize: 13,
  },

  blue: { backgroundColor: '#4f8ef7' },
  purple: { backgroundColor: '#a167f5' },
  green: { backgroundColor: '#1fc16b' },
  orange: { backgroundColor: '#f57c2f' },

  profitCard: {
    backgroundColor: '#13b86a',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 8,
  },
});
