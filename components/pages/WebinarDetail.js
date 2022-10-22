import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles.js";
import {cntAtom, appliedAtom} from "../../recoilStates";
import {useRecoilState, useRecoilValue} from "recoil";

const WebinarDetail = ({route}) => {
    const { webinar } = route.params
    const {tutor, title, id, formatted_start_time, thumbnail_url } = webinar
    const {image_url: tutorImageUrl, name: tutorName} = tutor;
    const cnt = useRecoilValue(cntAtom);
    const [applied, setApplied] = useRecoilState(appliedAtom);

    const apply = () => {
        console.log(applied)

        setApplied(prev => {
            const cp = {...prev};
            cp[id] = true

            return cp
        })
    }

    const cancel = () => {
        setApplied(prev => {
            const cp = {...prev}
            cp[id] = false

            return cp
        })
    }

    return <View>
        <Text>{cnt}</Text>
        {applied[id] && <Text>wow!</Text>}
        <Text>{id} detail</Text>
        <Text>{formatted_start_time}</Text>
        <Image
            style={styles.customImageDetail}
            source={{
                uri: thumbnail_url,
            }}
        />
        <Text>tutor</Text>
        <Text>{tutorName}</Text>
        <Image
            style={styles.customImage}
            source={{
                uri: tutorImageUrl,
            }}>
        </Image>

        <TouchableOpacity onPress={e => {applied[id] === true ? cancel() : apply()}} style={styles.customButton}>

        </TouchableOpacity>
    </View>
}


export default WebinarDetail;