import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Button({ style, textStyle, text, onPress }) {
  return (
    <TouchableOpacity style={style}>
      <Text style={textStyle} onPress={onPress}>{text}</Text>
    </TouchableOpacity>
  )
};

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  style: {},
  textStyle: {},
  onPress: () => {},
}
