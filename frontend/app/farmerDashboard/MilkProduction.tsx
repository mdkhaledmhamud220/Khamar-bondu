import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { toBanglaNumber } from '../utils/banglaNumber';

interface CowData {
  id: string;
  name: string;
  morning: number;
  evening: number;
}

interface Props {
  onTotalChange?: (total: number) => void; // ✅ Parent update
}

const MilkProduction: React.FC<Props> = ({ onTotalChange }) => {
  const data: CowData[] = [
    { id: '#৫২৩', name: 'কালো গাভী', morning: 8, evening: 7 },
    { id: '#৪৫৬', name: 'সাদা গাভী', morning: 9, evening: 8 },
    { id: '#৭৬১', name: 'বাদামী গাভী', morning: 7, evening: 6 },
    { id: '#১০১', name: 'চিত্রা গাভী', morning: 10, evening: 9 },
  ];

  // 🔥 Total milk calculation
  const totalMilk = data.reduce(
    (sum, cow) => sum + cow.morning + cow.evening,
    0,
  );

  // 🔥 Update parent if callback provided
  useEffect(() => {
    if (onTotalChange) onTotalChange(totalMilk);
  }, [totalMilk]);

  const renderItem = ({ item, index }: { item: CowData; index: number }) => (
    <View style={[styles.row, index % 2 === 1 && styles.altRow]}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{toBanglaNumber(item.morning)} লি</Text>
      <Text style={styles.cell}>{toBanglaNumber(item.evening)} লি</Text>
      <Text style={styles.cell}>
        {toBanglaNumber(item.morning + item.evening)} লি
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 🔥 Title Section */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>আজকের দুধ উৎপাদন</Text>
        <View style={styles.totalBadge}>
          <Ionicons name="flask-outline" size={16} color="#7c3aed" />
          <Text style={styles.totalText}>
            {toBanglaNumber(totalMilk)} লিটার
          </Text>
        </View>
      </View>

      {/* 🔥 Table */}
      <View style={styles.tableCard}>
        <View style={styles.header}>
          <Text style={styles.headerCell}>আইডি</Text>
          <Text style={styles.headerCell}>নাম</Text>
          <Text style={styles.headerCell}>সকাল</Text>
          <Text style={styles.headerCell}>সন্ধ্যা</Text>
          <Text style={styles.headerCell}>মোট</Text>
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export default MilkProduction;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, marginTop: 5, marginBottom: 0 },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: { fontSize: 17, fontWeight: 'bold', color: '#222' },
  totalBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ede9fe',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  totalText: {
    marginLeft: 5,
    fontSize: 13,
    color: '#7c3aed',
    fontWeight: 'bold',
  },
  tableCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#a855f7',
    paddingVertical: 12,
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  row: { flexDirection: 'row', paddingVertical: 12, alignItems: 'center' },
  altRow: { backgroundColor: '#f9fafb' },
  cell: { flex: 1, textAlign: 'center', fontSize: 13, color: '#333' },
});
