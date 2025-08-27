import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useVideoEditor } from "../hooks/useVideoEditor";
import { COLORS, SIZES, STYLES } from "../constants/theme";

const HomeScreen = () => {
  const { openVideoEditor } = useVideoEditor();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Video Editor</Text>
        <Text style={styles.subtitle}>Click on {'"+"'} to choose a video and start editing it.</Text>
      </View>

      <TouchableOpacity style={styles.fab} onPress={openVideoEditor}>
        <AntDesign name="plus" size={SIZES.icon} color={COLORS.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.padding,
  },
  title: {
    fontSize: SIZES.title,
    fontWeight: "bold",
    color: COLORS.primaryText,
    marginBottom: SIZES.marginBottom,
  },
  subtitle: {
    fontSize: SIZES.subtitle,
    color: COLORS.secondaryText,
    textAlign: "center",
    lineHeight: 24,
  },
  fab: {
    position: "absolute",
    width: SIZES.fab,
    height: SIZES.fab,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 30,
    backgroundColor: COLORS.accent,
    borderRadius: SIZES.borderRadius,
    ...STYLES.shadow,
  },
});

export default HomeScreen;
