import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

import FarmSummary from './FarmSummary';
import QuickActions from './QuickActions';
import MilkProduction from './MilkProduction';
import FooterNavigation from './FooterNavigation';

export default function FarmerDashboard() {
  const [totalMilk, setTotalMilk] = useState(0); // 🔥 main state

  return (
    <>
      <Stack.Screen
        options={{
          title: 'খামার বন্ধু',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />

      <SafeAreaView style={styles.container} edges={['bottom']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* 🔥 totalMilk pass */}
          <FarmSummary totalMilk={totalMilk} />

          <QuickActions />

          {/* 🔥 child → parent data */}
          <MilkProduction onTotalChange={setTotalMilk} />
        </ScrollView>

        <FooterNavigation />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingBottom: 70,
  },
});
