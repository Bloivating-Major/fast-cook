import { Redirect, Slot, Tabs } from "expo-router";

export default function TabLayout() {
    const isAuthenticated = false;

    if(!isAuthenticated) return <Redirect href="/sign-in" />

    return (
      <Slot />
    );
}