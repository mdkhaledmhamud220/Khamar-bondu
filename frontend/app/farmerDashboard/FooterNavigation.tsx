import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router'; // ✅ add

interface Item {
  icon: any;
  label: string;
  active?: boolean;
  route?: string; // ✅ add
}

const FooterNavigation: React.FC = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter(); // ✅ add

  const items: Item[] = [
    { icon: 'home', label: 'হোম', active: true, route: '/' },
    { icon: 'paw', label: 'গরু', route: '/farmerDashboard/cows' },
    { icon: 'leaf', label: 'খাবার', route: '/farmerDashboard/actions/addFood' }, // ✅ main target
    {
      icon: 'medkit',
      label: 'স্বাস্থ্য',
      route: '/farmerDashboard/actions/addMedicine',
    },
    { icon: 'cart', label: 'মার্কেট', route: '/farmerDashboard/market' },
    { icon: 'person', label: 'প্রোফাইল', route: '/profile' },
  ];

  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom }]}>
      <View style={styles.topBorder} />

      <View style={styles.footer}>
        {items.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.item}
            onPress={() => {
              if (item.route) {
                router.push(item.route as any); // ✅ navigation
              }
            }}
          >
            <Ionicons
              name={item.icon}
              size={22}
              color={item.active ? '#1c8f4a' : '#777'}
            />
            <Text
              style={[styles.text, { color: item.active ? '#1c8f4a' : '#777' }]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default FooterNavigation;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },

  topBorder: {
    height: 1,
    backgroundColor: '#e5e7eb',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
  },

  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  text: {
    fontSize: 11,
    marginTop: 3,
  },
});
