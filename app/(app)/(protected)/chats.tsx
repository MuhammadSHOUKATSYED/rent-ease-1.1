import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import {MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Chats() {
	const router = useRouter();

	return (
		<View className="flex-1 bg-white">
			{/* Header */}
			<View className="flex-row items-center justify-between p-4 border-b border-gray-200 bg-white mt-8">
				<Text className="text-lg font-semibold" style={{ fontSize: 25}}>Chats</Text>
			</View>

			{/* No Messages Section */}
			<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
				<MaterialIcons name="message" size={80} color="lightgray" />
				<Text className="text-xl font-semibold mt-4">No messages yet?</Text>
				<Text className="text-center mt-2 text-gray-600">
					Find something you like and start a conversation!
				</Text>
				<TouchableOpacity
					className="bg-[#9455f4] px-6 py-3 rounded-full mt-5"
					onPress={() => router.push("/(protected)/")}
				>
					<Text className="text-white font-semibold">Explore the latest rentals</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}
