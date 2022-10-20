import { Text, TouchableOpacity, View } from "react-native";

import { styles } from './styles';

interface ParticipantCardProps {
  name: string;
  onRemove: () => void;
}

export function ParticipantCard({ name, onRemove }: ParticipantCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={onRemove}
      >
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
}