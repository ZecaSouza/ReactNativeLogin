import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Signin from './pages/Signin';

export default function App() {
  return (
    <>
      <Signin></Signin>
      <StatusBar style="light" />
    </>
  );
}

