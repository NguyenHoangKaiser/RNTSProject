import { createTheme } from '@rneui/themed';

const COLORS = {
  PRIMARY: '#5DB075',
  SECONDARY: '#F4A460',
  BUTTON_TEXT: '#fff',
  GRAY_BACKGROUND: '#f6f6f6',
  GRAY_BORDER: '#bdbdbd',
  GRAY_TEXT: '#666666',
  // GRAY_BG_INPUT: '#E8E8E8',
};

const FONT = {
  MEDIUM: 'Inter-Medium',
  ITALIC: 'Inter-Italic',
  REGULAR: 'Inter-Regular',
  BOLD: 'Inter-Bold',
  LIGHT: 'Inter-Light',
};

const theme = createTheme({
  // Colors customization
  lightColors: {
    primary: '#5DB075',
  },
  darkColors: {},
  mode: 'light',
  // Components customization
  components: {
    Text: {
      style: {
        fontFamily: FONT.REGULAR,
        fontSize: 16,
      },
      h3Style: {
        fontFamily: FONT.BOLD,
        fontSize: 30,
      },
    },
    Button: {
      buttonStyle: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: '#fff',
      },
      titleStyle: {
        fontSize: 16,
        fontFamily: FONT.BOLD,
      },
    },
    Input: {
      containerStyle: {
        paddingHorizontal: 0,
        marginBottom: 4,
      },
      inputContainerStyle: {
        backgroundColor: COLORS.GRAY_BACKGROUND,
        borderWidth: 1,
        borderColor: COLORS.GRAY_BORDER,
        borderRadius: 8,
        paddingHorizontal: 4,
      },
      inputStyle: { fontSize: 16, fontFamily: FONT.MEDIUM },
      errorStyle: { fontFamily: FONT.MEDIUM },
    },
    SearchBar: {
      placeholder: 'Search',
      containerStyle: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingVertical: 8,
        borderColor: 'transparent',
        padding: 0,
        minHeight: 50,
      },
      inputContainerStyle: {
        minHeight: 50,
        backgroundColor: COLORS.GRAY_BACKGROUND,
        borderRadius: 25,
        borderColor: COLORS.GRAY_BORDER,
        borderWidth: 1,
        borderBottomWidth: 1,
      },
      inputStyle: { color: COLORS.GRAY_TEXT },
    },
    CheckBox: {
      iconType: 'material-community',
      checkedIcon: 'checkbox-marked',
      uncheckedIcon: 'checkbox-blank-outline',
      checkedColor: COLORS.PRIMARY,
      textStyle: {
        fontSize: 14,
        fontFamily: FONT.MEDIUM,
        fontWeight: '400',
        color: COLORS.GRAY_TEXT,
      },
    },
  },
});

export { COLORS, FONT, theme };
