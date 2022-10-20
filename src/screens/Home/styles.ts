import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    fontSize: 24,
    color: '#FDFCFE',
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  listTitle: {
    color: "#FDFCFE",
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 28,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 34,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  }
})