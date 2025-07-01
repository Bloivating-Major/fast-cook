import { Redirect, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
    const isAuthenticated = false;

    if (isAuthenticated) return <Redirect href="/" />

    return (
        <SafeAreaView className="p-4">
            <Slot />
        </SafeAreaView>
    )
}
