import { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  Alert 
} from "react-native";
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { ParticipantCard } from "../../components/ParticipantCard";

import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert('Participante já existe', 'Já existe um participante com esse nome na lista!');
    }

    setParticipants([...participants, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(participants.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  const currentDate = new Date();
  const NewDate = format(
    currentDate,
    "EEEE',' dd 'de' LLLL Y", {
      locale: ptBR,
    }
  );
  const formattedDate = NewDate[0].toUpperCase() + NewDate.substr(1)

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>{formattedDate}</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.listTitle}>
        Participantes
      </Text>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
        <ParticipantCard 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? {'\r'}
            Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}