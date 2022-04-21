import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import Navigate from './navigation/AppNavigator'

const url = 'http://localhost:3000/orders'

export default function App() { 
  
  return (
    <Navigate />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 28,
  }
});
