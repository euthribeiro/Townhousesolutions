import React, { useState } from 'react';
import { View, TouchableOpacity, Text, LayoutAnimation, Platform, UIManager} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

import styles from './style';
import { defaultColors } from '../../styles';

export default function Accordian({ title, status, children }){

  const [expanded, setExpanded] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(oldState => !oldState);
  }

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={()=> toggleExpand()}>
          <View style={styles.rowTitle}>
            {status === 2 && (
              <AntDesign name="warning" size={16} color={defaultColors.warning} />
            )}
            {status === 1 && (
              <AntDesign name="checkcircleo" size={16} color="#017015" />
            )}
            {status === 0 && (
              <AntDesign name="clockcircleo" size={16} color={defaultColors.dark} />
            )}
            <Text style={[styles.title]}>{title}</Text>
          </View>
          <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={defaultColors.dark} />
      </TouchableOpacity>
      <View style={styles.parentHr}/>
      {expanded &&
          <View style={{}}>
            {children}
          </View>
        }
    </View>
  )
}
