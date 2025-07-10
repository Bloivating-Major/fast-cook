import { images } from "@/constants";
import { Redirect, Slot, useSegments } from "expo-router";
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

export default function AuthLayout() {
    const isAuthenticated = false;
    const segments = useSegments();
    const route = segments[segments.length - 1];
    const backgroundImage = route === "sign-up" ? images.registerGraphic : images.loginGraphic;

    if (isAuthenticated) return <Redirect href="/" />

    return (
        <ScrollView
            className="bg-white flex-1"
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                {/* Top Graphic */}
                <View className="w-full relative" style={{ height: Dimensions.get('window').height / 2.25 }}>
                    <ImageBackground source={backgroundImage} className="size-full rounded-b-lg" resizeMode="stretch" />
                    <Image source={images.logo} className="self-center size-32 absolute -bottom-6 z-10" />
                </View>

                {/* Slot for actual screen */}
                <Slot />

            </KeyboardAvoidingView>
        </ScrollView>
    )
}
