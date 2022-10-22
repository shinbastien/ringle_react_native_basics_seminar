import axios from "axios";
import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import { useState, useEffect } from "react";
import styles from "../../styles.js";
import {useRecoilState} from "recoil";
import { cntAtom, appliedAtom } from "../../recoilStates";

const url = 'https://qa2.ringleserver.com/api/v4/student/landing/webinar';


const WebinarList = ({navigation}) => {
    // const [cnt, setCnt] = useState(0);
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    const [webinars, setWebinars] = useState([]);
    const [cnt, setCnt] = useRecoilState(cntAtom);
    const [applied, setApplied] = useRecoilState(appliedAtom)

    useEffect(() => {
        //http reqeust!
        axios.get(url)
            .then (function (response) {
                // handle success
                console.log(response)
                console.log(response.data);

                const {success, webinars:_webinars } = response.data;
                if (response.data.success) {
                    setWebinars(_webinars);
                }
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {
                // always executed
            })
    }, [])

    const increaseCnt = (evt) => {
        // setCnt(cnt + 1);
        console.log(evt);
        setCnt(prev => prev +1)
    }

    const decreaseCnt = () => {
        setCnt(prev => prev - 1)
    }

    const onChangeNumber = (e) => {
        console.log('on change number!!!');
        console.log(e);
        setNumber(e);
    }

    const submit = () => {
        alert(number);
    }

    const onChangAge = (e) => {
        setAge(e);
    }

    const onChangeName = (e) => {
        setName(e);
    }

    const renderItem = ({item: webinar}) => {
        return <View style={applied[webinar.id] === true ? styles.view1 : styles.view2}>
            <TouchableOpacity onPress={e => goToPage(webinar)}>
                <Text>{webinar.id}</Text>
                <Text>{webinar.title}</Text>
                <Text>{webinar.formatted_start_time}</Text>
                <Image
                    style={styles.customImage}
                    source={{
                        uri: webinar.image_url,
                    }}
                />
            </TouchableOpacity>
        </View>
    }

    const goToPage = (webinar) => {
        navigation.navigate("WebinarDetail", {webinar: webinar})
    }

    return (
        <View style={styles.container}>
            <View style={styles.customView}>
                <Text style={styles.customText}>hi!</Text>
            </View>
            {
                <FlatList
                    data={webinars}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            }
            <Text>{webinars.length > 0 && webinars[0].title}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />

            <TouchableOpacity
                style={styles.customButton}
                onPress={e => submit()}>
                <Text>submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={e => increaseCnt()}
                style={styles.customButton}>
                <Text style={styles.textInButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={e => decreaseCnt()}
                style={styles.customButton}>
                <Text style={styles.textInButton}>-</Text>
            </TouchableOpacity>
            <Text>{cnt}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default WebinarList;