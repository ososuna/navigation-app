import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  bigButton: {
    alignItems: 'center',
    backgroundColor: '#5856D6',
    borderRadius: 20,
    height: 100,
    width: 100,
    justifyContent: 'center',
    marginRight: 10,
  },
  bigButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 300,
    height: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 20,
  },
  menuBtn: {
    marginVertical: 10,
  },
});
