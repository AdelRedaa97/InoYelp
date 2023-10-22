import {StyleSheet} from 'react-native';
import typography from '../../../theme/typography';

export const styles = StyleSheet.create({
  input: {
    marginVertical: 16,
  },
  cost: {
    flex: 1,
    fontSize: typography.fontSize.fs18,
    fontFamily: typography.fontFamily.Tajawal_Bold,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
});
