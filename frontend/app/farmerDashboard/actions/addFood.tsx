import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFarm } from '../../context/FarmContext'; // 🔥 context

const AddFood = () => {
  const { addCost } = useFarm(); // 🔥 main hook

  const [selectedGroup, setSelectedGroup] = useState('bachur');

  const [grass, setGrass] = useState('');
  const [bran, setBran] = useState('');
  const [feed, setFeed] = useState('');

  // 🔥 cost per kg
  const grassCost = 2;
  const branCost = 30;
  const feedCost = 40;

  // 🔥 calculation
  const totalGrass = Number(grass) * grassCost || 0;
  const totalBran = Number(bran) * branCost || 0;
  const totalFeed = Number(feed) * feedCost || 0;

  const total = totalGrass + totalBran + totalFeed;

  // 🔄 reset when group changes
  useEffect(() => {
    setGrass('');
    setBran('');
    setFeed('');
  }, [selectedGroup]);

  // 💾 Save handler
  const handleSave = () => {
    const data = {
      group: selectedGroup,
      grass,
      bran,
      feed,
      totalCost: total,
    };

    console.log('Saved Data:', data);

    // 🔥 Dashboard এ cost যোগ হবে
    addCost(total);

    // 🔥 reset after save
    setGrass('');
    setBran('');
    setFeed('');
  };

  // 🎯 dynamic title
  const getTitle = () => {
    if (selectedGroup === 'bachur') return 'বাছুরের খাবার';
    if (selectedGroup === 'gavi') return 'গাভীর খাবার';
    if (selectedGroup === 'shar') return 'ষাঁড় গরুর খাবার';
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={22} color="white" />
        <Text style={styles.headerTitle}>{getTitle()}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, selectedGroup === 'bachur' && styles.activeTab]}
            onPress={() => setSelectedGroup('bachur')}
          >
            <Text style={selectedGroup === 'bachur' && styles.activeText}>
              বাছুর
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedGroup === 'gavi' && styles.activeTab]}
            onPress={() => setSelectedGroup('gavi')}
          >
            <Text style={selectedGroup === 'gavi' && styles.activeText}>
              গাভী
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedGroup === 'shar' && styles.activeTab]}
            onPress={() => setSelectedGroup('shar')}
          >
            <Text style={selectedGroup === 'shar' && styles.activeText}>
              ষাঁড় গরু
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>ঘাস (কেজি)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={grass}
            onChangeText={setGrass}
            placeholder="0"
          />

          <Text style={styles.label}>ভুসি (কেজি)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={bran}
            onChangeText={setBran}
            placeholder="0"
          />

          <Text style={styles.label}>দানাদার খাবার (কেজি)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={feed}
            onChangeText={setFeed}
            placeholder="0"
          />
        </View>

        {/* Cost Box */}
        <View style={styles.costBox}>
          <Text style={styles.costTitle}>খরচের হিসাব</Text>

          <View style={styles.row}>
            <Text>ঘাস</Text>
            <Text>{totalGrass.toFixed(2)} টাকা</Text>
          </View>

          <View style={styles.row}>
            <Text>ভুসি</Text>
            <Text>{totalBran.toFixed(2)} টাকা</Text>
          </View>

          <View style={styles.row}>
            <Text>দানাদার</Text>
            <Text>{totalFeed.toFixed(2)} টাকা</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalText}>মোট খরচ</Text>
            <Text style={styles.totalText}>{total.toFixed(2)} টাকা</Text>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>সংরক্ষণ করুন</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddFood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    backgroundColor: '#2e7d32',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },

  headerTitle: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },

  tab: {
    backgroundColor: '#e5e7eb',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  activeTab: {
    backgroundColor: '#2e7d32',
  },

  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },

  form: {
    paddingHorizontal: 16,
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 13,
  },

  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  costBox: {
    backgroundColor: '#e8f5e9',
    margin: 16,
    padding: 15,
    borderRadius: 12,
  },

  costTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  totalText: {
    fontWeight: 'bold',
    color: '#2e7d32',
  },

  button: {
    backgroundColor: '#2e7d32',
    margin: 16,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
