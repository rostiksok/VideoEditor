import { Alert } from "react-native";
import { VESDK } from "react-native-videoeditorsdk";
import * as ImagePicker from "expo-image-picker";

export const useVideoEditor = () => {
  const openVideoEditor = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert("Permission required", "You need to grant access to your media library to continue.");
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      });

      if (pickerResult.canceled) {
        console.log("User canceled video picker");
        return;
      }

      if (pickerResult.assets && pickerResult.assets.length > 0) {
        const videoUri = pickerResult.assets[0].uri;
        const editorResult = await VESDK.openEditor(videoUri);

        if (editorResult) {
          console.log("Edited video saved to:", editorResult.video);
          Alert.alert("Success!", "Your edited video has been saved.");
        } else {
          console.log("User canceled the editor.");
        }
      }
    } catch (error) {
      console.error("An error occurred during the video editing process:", error);
    }
  };

  return { openVideoEditor };
};
