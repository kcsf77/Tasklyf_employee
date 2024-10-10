import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Modal, StyleSheet, ImageBackground, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';

const ProInfoScreen = ({ navigation }) => {
    const [typeOfService, setTypeOfService] = useState('');
    const [areaOfService, setAreaOfService] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState(3);
    const [file, setFile] = useState(null);
    const [availabilityStart, setAvailabilityStart] = useState(new Date());
    const [availabilityEnd, setAvailabilityEnd] = useState(new Date());
    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);

    const [selectedDays, setSelectedDays] = useState({});
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);

    const onDayPress = (day) => {
        const newSelectedDays = { ...selectedDays };
        newSelectedDays[day.dateString] = {
            selected: !newSelectedDays[day.dateString]?.selected,
            marked: true,
        };

        setSelectedDays(newSelectedDays);
    };

    const toggleCalendar = () => {
        setIsCalendarVisible(!isCalendarVisible);
    };


    // File Picker function


    // Handle start and end time pickers
    const onChangeStartTime = (event, selectedDate) => {
        setShowStartTimePicker(false);
        if (selectedDate) {
            // Create a new Date object and set seconds and milliseconds to 0
            const dateWithoutSeconds = new Date(selectedDate);
            dateWithoutSeconds.setSeconds(0);
            dateWithoutSeconds.setMilliseconds(0);

            setAvailabilityStart(dateWithoutSeconds);
        }
    };

    const onChangeEndTime = (event, selectedDate) => {
        setShowEndTimePicker(false);
        if (selectedDate) {
            // Create a new Date object and set seconds and milliseconds to 0
            const dateWithoutSeconds = new Date(selectedDate);
            dateWithoutSeconds.setSeconds(0);
            dateWithoutSeconds.setMilliseconds(0);

            setAvailabilityEnd(dateWithoutSeconds);
        }
    };

    const handleSubmit = () => {
        Alert.alert("Submission", "Your application has been submitted successfully!", [
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]);
    };


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/bg.png')}
                style={styles.backgroundImage}
                blurRadius={5}
            >
                <View style={styles.overlay} />
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{ opacity: 1 }}
                    />
                </View>

                <View style={styles.InfoContainer}>
                    <Text style={styles.Title}>Professional Information</Text>

                    <Text style={styles.label}>Type of Service</Text>

                    <RNPickerSelect
                        onValueChange={(value) => setTypeOfService(value)}
                        items={[
                            { label: 'Plumbing', value: 'plumbing' },
                            { label: 'Electrical', value: 'electrical' },
                           
                        ]}
                        style={{
                            inputIOS: styles.inputIOS,   // Styles for iOS
                            inputAndroid: styles.inputAndroid,   // Styles for Android
                            iconContainer: {
                                top: 15,
                                right: 15,

                            },

                        }}
                        Icon={() => {
                            return <Icon name="chevron-down" size={24} color="blue" />;
                        }}
                        useNativeAndroidPickerStyle={false} // Allows custom styling on Android
                    />


                    <Text style={styles.label}>Certifications/Licenses</Text>
                    <TouchableOpacity style={styles.attachFileButton} >
                        <View style={styles.iconTextContainer}>
                            <Icon name="attach" size={20} color="#000" style={styles.icon} />
                            <Text style={styles.attachFileText}>{file ? file.name : 'Attach file'}</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Years of Experience */}
                    <Text style={styles.label}>Years of experience</Text>
                    <View style={styles.yearsContainer}>
                        <TouchableOpacity onPress={() => setYearsOfExperience(Math.max(0, yearsOfExperience - 1))}>
                            <Text style={styles.minusButton}>-</Text>
                        </TouchableOpacity>

                        <Text style={styles.yearsText}>{yearsOfExperience}</Text>

                        <TouchableOpacity onPress={() => setYearsOfExperience(yearsOfExperience + 1)}>
                            <Text style={styles.plusButton}>+</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Availability Schedule */}
                    <Text style={styles.label}>Availability Schedule</Text>

                    <TouchableOpacity style={styles.calendarButton} onPress={toggleCalendar}>
                <Icon name="calendar-outline" size={30} color="blue" />
                <Text style={styles.calendarText}>Select Days</Text>
            </TouchableOpacity>

            {/* Modal for Calendar */}
            <Modal
                visible={isCalendarVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={toggleCalendar}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.calendarContainer}>
                        <Calendar
                            onDayPress={onDayPress}
                            markingType={'multi-dot'}
                            markedDates={selectedDays}
                        />
                        <TouchableOpacity style={styles.closeButton} onPress={toggleCalendar}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>




                    <View style={styles.timeSchedule}>
                        <TouchableOpacity
                            style={styles.timeButton}
                            onPress={() => setShowStartTimePicker(true)}
                        >
                            <Icon name="time-outline" size={30} color="#000" style={styles.iconStart} />

                            <View style={styles.inner}>
                                <Text style={{ color: "blue", fontSize: 10 }}>Start</Text>
                                <Text style={{ fontWeight: "bold" }}>{availabilityStart.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                            </View>

                            <Icon name="chevron-down" size={30} color="#000" style={styles.iconEnd} />

                        </TouchableOpacity>

                        {showStartTimePicker && (
                            <DateTimePicker
                                value={availabilityStart}
                                mode="time"
                                display="default"
                                onChange={onChangeStartTime}
                            />
                        )}


                        <TouchableOpacity
                            style={styles.timeButton}
                            onPress={() => setShowEndTimePicker(true)}
                        >
                            <Icon name="time-outline" size={30} color="#000" style={styles.iconStart} />

                            <View style={styles.inner}>
                                <Text style={{ color: "blue", fontSize: 10 }}>End</Text>
                                <Text style={{ fontWeight: "bold" }}>{availabilityEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                            </View>

                            <Icon name="chevron-down" size={30} color="#000" style={styles.iconEnd} />
                        </TouchableOpacity>

                        {showEndTimePicker && (
                            <DateTimePicker
                                value={availabilityEnd}
                                mode="time"
                                display="default"
                                onChange={onChangeEndTime}
                            />
                        )}
                    </View>

                    {/* Area of Service Dropdown */}
                    <Text>Area of Service</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setAreaOfService(value)}
                        items={[
                            { label: 'City 1', value: 'city1' },
                            { label: 'City 2', value: 'city2' },
                            // Add more options as needed
                        ]}

                        style={{
                            inputIOS: styles.inputIOS,   // Styles for iOS
                            inputAndroid: styles.inputAndroid,   // Styles for Android
                            iconContainer: {
                                top: 15,
                                right: 15,

                            },

                        }}
                        Icon={() => {
                            return <Icon name="chevron-down" size={24} color="blue" />;
                        }}
                        useNativeAndroidPickerStyle={false} // Allows custom styling on Android
                    />

                    {/* Submit Button */}
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        height: '100%',
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc', // Border color for iOS
        borderRadius: 8,
        color: '#000', // Text color
        paddingRight: 30, // To ensure the text is not behind the icon
        backgroundColor: '#fff', // White background like in the image
        width: '100%', // Make the picker full width
        height: 50, // Give it a similar height as in the image
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc', // Border color for Android
        borderRadius: 8,
        color: '#000', // Text color
        paddingRight: 30, // To ensure the text is not behind the icon
        backgroundColor: '#fff', // White background like in the image
        width: '100%', // Make the picker full width
        height: 50, // Give it a similar height as in the image
    },

    logoContainer: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 200,
    },
    InfoContainer: {
        width: '100%',
        padding: 40,
        backgroundColor: '#fff',
        borderRadius: 30,
        elevation: 3,
        height: '100%',
        marginTop: 30,
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'start',
    },
    label: {
        fontSize: 14,
        color: '#888',
        marginTop: 2
    },
    attachFileButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 13,
        borderRadius: 10,
        alignItems: 'center',
    },
    attachFileText: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold"
    },
    icon: {
        color: "blue"
    },
    iconEnd: {
        color: "blue",

    },
    iconStart: {
        color: "blue"
    },

    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    timeSchedule: {
        flexDirection: 'row',  // Arrange the buttons in a row
        justifyContent: 'center',  // Center the buttons horizontally
        alignItems: 'center',  // Align items vertically
        marginVertical: 10,  // Vertical margin for spacing
        width: '100%',

    },
    timeButton: {
        justifyContent: "space-between",
        flex: 1,
        padding: 2,
        marginHorizontal: 10,  // Add space between the buttons
        borderWidth: 1,  // Add border to each button
        borderColor: '#ccc',  // Border color
        borderRadius: 5,  // Rounded corners
        alignItems: 'center',  // Center the text inside the button
        flexDirection: 'row',
    },

    calendarButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
     
    },
    calendarText: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold"
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    calendarContainer: {
        width: '80%', // Set width of the calendar container
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5, // For Android shadow
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    yearsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    minusButton: {
        fontSize: 24,
        paddingHorizontal: 20,
        paddingVertical: 10,

        textAlign: 'center',
        color: '#007AFF',
    },
    plusButton: {
        fontSize: 23,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: 'center',
        color: '#007AFF',
    },
    yearsText: {
        fontSize: 20,
        marginHorizontal: 20,
    },
    submitButton: {
        backgroundColor: '#3399FF',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
        marginTop:10
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },


});

export default ProInfoScreen;
