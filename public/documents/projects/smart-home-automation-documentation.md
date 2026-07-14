# SCALABLE SMART HOME AUTOMATION SYSTEM

## Flutter Application, ESP32 Parent Hub and ESP32 Child Nodes

---

## Abstract

This project presents a scalable, local-first smart home automation system developed using a Flutter mobile application and multiple ESP32 devices. The system follows a Parent-Child architecture. One ESP32 operates as the Parent or Room Hub, while other ESP32 devices operate as Child Nodes.

The Parent device manages the mobile application connection, local Wi-Fi hotspot, router Wi-Fi connection, HTTP JSON APIs, light relay, fan control and registered Child Nodes. A Child Node can monitor environmental conditions using an LDR sensor, measure battery voltage and control a curtain through a servo motor.

The Flutter application communicates with the Parent through a local HTTP JSON API. The Parent and Child devices communicate using ESP-NOW in the current unified firmware. BLE is used for device configuration and provisioning. Therefore, the system can operate without a cloud server or active internet connection.

The design is scalable because new Child Nodes can be registered under the Parent, device information can be exposed dynamically to the Flutter application, and the user interface can be generated from the device manifest rather than being permanently hard-coded.

---

# 1. Introduction

Smart home automation allows electrical appliances and mechanical devices to be controlled through sensors, embedded controllers and mobile applications. Many existing smart home systems depend on internet connectivity, cloud platforms and external service providers. When internet connectivity is unavailable, these systems may lose automation, monitoring or remote-control capabilities.

The proposed project addresses this problem by developing a local-first smart home system. It uses ESP32 microcontrollers and a Flutter application to control household devices within the local network.

The system contains two main embedded roles:

1. **Parent Device:** The central Room Hub that controls local appliances and manages Child Nodes.
2. **Child Device:** A distributed device that controls a curtain and reads local sensor information.

The Parent-Child structure allows the system to grow without redesigning the complete application or replacing the central controller.

---

# 2. Project Objectives

The primary objective of this project is to design and implement a scalable smart home automation platform that operates locally and supports multiple ESP32 devices.

The specific objectives are:

* To control lights, fans and curtains through a Flutter mobile application.
* To create a Parent-Child device architecture.
* To allow one Parent device to manage multiple Child devices.
* To operate without requiring a cloud server.
* To provide a local Wi-Fi hotspot when a router connection is unavailable.
* To support router Wi-Fi connection for normal home-network operation.
* To configure ESP32 devices using BLE.
* To transfer sensor status and device commands using ESP-NOW.
* To create a dynamic device dashboard in the mobile application.
* To automate curtain movement based on ambient light.
* To prevent rapid device switching through stable-delay logic.
* To support pairing, device registration, deletion and configuration reset.
* To provide a foundation for future sensor and actuator nodes.

---

# 3. System Overview

The project consists of three primary layers:

1. Flutter Mobile Application
2. ESP32 Parent or Room Hub
3. ESP32 Child or Curtain Node

The basic communication flow is:

```text
Flutter Mobile Application
            |
            | Local HTTP JSON API
            |
ESP32 Parent / Room Hub
            |
            | ESP-NOW
            |
ESP32 Child / Curtain Node
```

BLE is used during configuration:

```text
Flutter Mobile Application
            |
            | Bluetooth Low Energy
            |
ESP32 Parent or Child Configuration
```

The Parent acts as the main coordinator. It receives commands from the application, controls its locally connected appliances and forwards commands to appropriate Child Nodes.

The Child device reads sensor data, performs local automation, controls the servo and reports its latest status to the Parent.

---

# 4. System Architecture

## 4.1 Parent-Child Architecture

The system uses a hierarchical architecture.

```text
Parent: ESP32 Room Hub
|
|-- Local Light
|-- Local Fan
|-- Child Node 1: Curtain Controller
|-- Child Node 2: Future Curtain Controller
|-- Child Node 3: Future Sensor Node
|-- Child Node 4: Future Relay Node
|-- Child Node 5: Future Safety Node
|-- Child Node 6: Future Energy Node
```

The current unified firmware defines a maximum of six registered Child slots. This number can be changed according to memory, communication traffic and application requirements.

## 4.2 Parent Device Responsibilities

The Parent performs the following responsibilities:

* Starts a local Wi-Fi hotspot.
* Connects to home router Wi-Fi when configured.
* Runs the local HTTP server.
* Provides device and status information to the Flutter application.
* Controls the local light relay.
* Controls fan speed through a triac-based circuit.
* Stores registered Child information.
* Receives status messages from Child devices.
* Tracks online and offline Child status.
* Sends servo and mode commands to Child devices.
* Provides BLE configuration support.
* Stores configuration in ESP32 Preferences memory.

## 4.3 Child Device Responsibilities

The Child performs the following responsibilities:

* Reads ambient light through an LDR.
* Reads battery voltage through an ADC voltage divider.
* Controls the curtain servo.
* Supports automatic and manual modes.
* Sends status information to the Parent.
* Receives commands from the Parent.
* Detects whether the Parent connection is healthy.
* Stores Parent MAC address and configuration.
* Supports BLE configuration.
* Returns to an unconfigured state after reset.

## 4.4 Communication Layers

The system uses three communication mechanisms.

### HTTP JSON API

Used between the Flutter application and the Parent device.

### ESP-NOW

Used between the Parent and Child devices. ESP-NOW provides direct ESP32-to-ESP32 communication without requiring a separate cloud server.

### Bluetooth Low Energy

Used for initial role selection, Wi-Fi configuration, device naming, Parent MAC configuration and factory reset.

---

# 5. Hardware Components

## 5.1 Parent Device Components

| Component               | Purpose                                   |
| ----------------------- | ----------------------------------------- |
| ESP32 development board | Main Parent controller                    |
| Relay module            | Controls room light                       |
| Triac circuit           | Controls AC fan speed                     |
| Zero-cross detector     | Detects AC waveform crossing              |
| Fan enable circuit      | Enables or disables fan output            |
| Status LED              | Displays operating or configuration state |
| Boot button             | Enters configuration mode                 |
| Power supply            | Powers the ESP32 and control circuits     |

## 5.2 Child Device Components

| Component               | Purpose                             |
| ----------------------- | ----------------------------------- |
| ESP32 development board | Child controller                    |
| LDR sensor              | Measures ambient light              |
| Voltage divider         | Measures battery voltage            |
| Servo motor             | Opens and closes the curtain        |
| Indicator LED           | Displays transition or device state |
| Boot button             | Enters configuration mode           |
| Battery or DC supply    | Provides power to the Child         |

## 5.3 Parent Pin Configuration

| ESP32 Pin | Connected Device    | Purpose               |
| --------- | ------------------- | --------------------- |
| GPIO 27   | Light relay         | Light ON/OFF          |
| GPIO 26   | Parent status LED   | Device status         |
| GPIO 25   | Triac control       | Fan speed control     |
| GPIO 32   | Zero-cross detector | AC synchronization    |
| GPIO 33   | Fan enable          | Fan output enable     |
| GPIO 0    | Boot button         | Configuration trigger |
| GPIO 2    | Board LED           | General indication    |

## 5.4 Child Pin Configuration

| ESP32 Pin | Connected Device | Purpose                     |
| --------- | ---------------- | --------------------------- |
| GPIO 35   | LDR sensor       | Ambient-light ADC input     |
| GPIO 34   | Battery divider  | Battery-voltage ADC input   |
| GPIO 26   | Servo signal     | Curtain position control    |
| GPIO 33   | Transition LED   | Sensor stability indication |
| GPIO 0    | Boot button      | Configuration trigger       |
| GPIO 2    | Board LED        | Child state indication      |

---

# 6. Working Principle

The complete system works through the following sequence:

1. The Parent ESP32 starts.
2. It loads its saved configuration from Preferences memory.
3. The Parent starts its local hotspot and HTTP server.
4. If router credentials are stored, it attempts to connect to the home Wi-Fi network.
5. Registered Child information is loaded from persistent storage.
6. Each Child starts and loads its role and Parent MAC address.
7. The Child initializes its LDR, battery ADC and servo.
8. The Child sends sensor and actuator status to the Parent through ESP-NOW.
9. The Parent stores the received status and marks the Child online.
10. The Flutter application connects to the Parent through the local network.
11. The app requests the current device manifest and status.
12. The user controls a light, fan or curtain from the app.
13. Local Parent outputs are controlled directly.
14. Curtain commands are sent to the required Child.
15. The Child executes the command and reports its updated status.
16. The app refreshes the dashboard and displays the new state.

---

# 7. Network Topology

## 7.1 Parent Hotspot Mode

The Parent can operate as a Wi-Fi access point.

```text
Mobile Phone
     |
Parent ESP32 Hotspot
     |
Local HTTP API
```

This mode is useful when:

* No home router is available.
* The internet connection is unavailable.
* The system is being installed.
* The Parent is being configured.
* A local-only connection is required.

## 7.2 Home Router Mode

The Parent can also connect to the home Wi-Fi router.

```text
Mobile Phone
     |
Home Wi-Fi Router
     |
ESP32 Parent
     |
ESP-NOW
     |
ESP32 Child
```

In this mode, the mobile phone and Parent must be connected to the same local network.

## 7.3 BLE Configuration Mode

BLE configuration mode is used to configure the device without manually opening an embedded web page.

Typical BLE configuration commands include:

```text
INFO
WIFI_SCAN
WIFI_TRY
ROLE MOTHER
ROLE CHILD
DEVICE_NAME
AP_SSID
AP_PASS
STA_SSID
STA_PASS
MOTHER_MAC
FORGET_CHILD
SAVE
RESETCFG
```

In the project documentation, the firmware term **Mother** is equivalent to **Parent**, and the firmware term **Child** represents a Child Node.

## 7.4 ESP-NOW Channel Requirement

The Parent and Child must use the same Wi-Fi channel for reliable ESP-NOW communication. If the Parent connects to a router operating on a different channel, channel compatibility must be checked during Wi-Fi configuration.

---

# 8. Flutter Application Features

The Flutter application acts as the primary user interface.

## 8.1 Device Discovery

The application discovers or connects to the Parent through:

* Parent hotspot IP address
* Saved local IP address
* Local hostname or mDNS
* BLE configuration discovery

## 8.2 Dynamic Dashboard

The dashboard can be built from device information received from the Parent.

It may display:

* Device name
* Parent or Child role
* Online or offline state
* Light state
* Fan speed
* LDR voltage
* Battery voltage
* Curtain angle
* Manual or automatic mode
* Configuration status

## 8.3 Appliance Control

The application supports:

* Light ON/OFF
* Fan speed adjustment
* Curtain open
* Curtain close
* Custom servo angle
* Manual mode
* Automatic mode

## 8.4 Device Configuration

The application can configure:

* Device role
* Device name
* Hotspot SSID
* Hotspot password
* Router SSID
* Router password
* Parent MAC address
* ESP-NOW channel

## 8.5 Device Management

The app can support:

* Viewing registered Child devices
* Viewing online Child count
* Adding or configuring a Child
* Renaming a Child
* Removing a Child
* Resetting device configuration

## 8.6 Debugging Support

An API log screen can display:

* Request method
* Endpoint
* Request payload
* Response status
* Response body
* Network errors
* Timeout information

---

# 9. Parent Firmware Features

The Parent firmware contains the central coordination logic.

## 9.1 Role Management

The same firmware can run as:

* Unconfigured device
* Parent device
* Child device

The selected role is stored in ESP32 Preferences.

## 9.2 Local HTTP Server

The Parent runs an HTTP server that provides JSON data to the Flutter application.

## 9.3 Parent Hotspot

The Parent creates a local Wi-Fi access point. This hotspot remains useful even when router Wi-Fi is not configured.

## 9.4 Router Wi-Fi Connection

The Parent can connect to a configured router and expose its HTTP API through the local network.

## 9.5 Child Registry

The Parent stores Child information such as:

* MAC address
* Display name
* Configuration date
* Latest status
* Last received time
* Online state

## 9.6 Online and Offline Detection

A Child is considered online when the Parent has recently received a valid status message.

If no status is received within the defined timeout, the Child is marked offline.

## 9.7 Local Output Control

The Parent controls:

* Light relay
* Fan enable output
* Triac fan speed
* Status LEDs

## 9.8 Persistent Configuration

The Parent stores configuration in non-volatile Preferences memory. The configuration remains available after restart or power failure.

---

# 10. Child Firmware Features

## 10.1 LDR Measurement

The Child reads analog voltage from the LDR circuit.

The sensor value is used to determine whether the environment is dark or bright.

## 10.2 Battery Measurement

Battery voltage is measured using:

```text
Battery Voltage =
ADC Voltage × Divider Ratio × Calibration Factor
```

The battery must not be connected directly to the ESP32 ADC pin. A suitable voltage divider is required.

## 10.3 Servo Control

The servo supports angles between 0 and 180 degrees.

Typical curtain positions are:

```text
Closed position = 0 degrees
Open position   = 90 degrees
```

These values can be adjusted according to the curtain mechanism.

## 10.4 Automatic Mode

In automatic mode, the Child moves the curtain according to the stable light condition.

## 10.5 Manual Mode

In manual mode, automatic sensor control is suspended. The servo follows commands received from the Parent.

## 10.6 Parent Link Monitoring

The Child records successful message transmission time. If communication is not successful within the configured timeout, the Parent link is considered unhealthy.

## 10.7 Status Reporting

A Child status message contains information such as:

```text
Message type
Dark or bright state
LDR voltage
Battery voltage
Servo angle
Manual mode state
```

## 10.8 Command Processing

A Child can process commands such as:

```text
Set servo angle
Enable automatic mode
Enable manual mode
Reset configuration
```

---

# 11. API Specification

The exact endpoint names may be adjusted according to the final Flutter and firmware implementation. The following API structure represents the recommended project interface.

## 11.1 Get Device Manifest

```http
GET /api/devices
```

### Purpose

Returns Parent and Child device information for building the dashboard.

### Example Response

```json
{
  "ok": true,
  "devices": [
    {
      "id": "parent",
      "name": "Room Hub",
      "role": "parent",
      "online": true,
      "outputs": [
        {
          "id": "light",
          "type": "switch",
          "state": true
        },
        {
          "id": "fan",
          "type": "range",
          "value": 60
        }
      ]
    },
    {
      "id": "child-01",
      "name": "Curtain Node",
      "role": "child",
      "online": true,
      "sensors": {
        "ldrVoltage": 1.26,
        "batteryVoltage": 3.94
      },
      "servoAngle": 90,
      "manualMode": false
    }
  ]
}
```

## 11.2 Get Child List

```http
GET /api/nodes
```

### Purpose

Returns registered and online Child information.

## 11.3 Control Parent Output

```http
POST /api/device/control
```

### Example Request

```json
{
  "deviceId": "parent",
  "output": "light",
  "value": true
}
```

## 11.4 Set Fan Speed

```http
POST /api/device/control
```

### Example Request

```json
{
  "deviceId": "parent",
  "output": "fan",
  "value": 60
}
```

## 11.5 Set Curtain Angle

```http
POST /api/device/control
```

### Example Request

```json
{
  "deviceId": "child-01",
  "output": "servo",
  "value": 90
}
```

## 11.6 Change Automation Mode

```http
POST /api/device/auto
```

### Example Request

```json
{
  "deviceId": "child-01",
  "enabled": true
}
```

## 11.7 Update Automation Settings

```http
POST /api/device/settings
```

### Example Request

```json
{
  "deviceId": "child-01",
  "threshold": 1.5,
  "condition": "below",
  "stableDelayMs": 2000
}
```

## 11.8 Wi-Fi Scan

```http
GET /api/wifi/scan
```

## 11.9 Save Wi-Fi

```http
POST /api/wifi/save
```

### Example Request

```json
{
  "ssid": "Home WiFi",
  "password": "example-password"
}
```

---

# 12. Pairing and Configuration Process

In the current unified architecture, a Child can be configured using BLE and registered using its MAC address.

## 12.1 Parent Configuration

1. Power on the ESP32.
2. Enter BLE configuration mode.
3. Select the Parent role.
4. Set the device name.
5. Configure hotspot credentials.
6. Configure router credentials if required.
7. Save the configuration.
8. Restart the ESP32.
9. Record the Parent MAC address and ESP-NOW channel.

## 12.2 Child Configuration

1. Power on the Child ESP32.
2. Enter BLE configuration mode.
3. Select the Child role.
4. Set the Child device name.
5. Configure the Parent MAC address.
6. Configure the same ESP-NOW channel as the Parent.
7. Save the configuration.
8. Restart the Child.
9. The Child begins sending status to the Parent.

## 12.3 Parent Registration

When the Parent receives status from an approved or configured Child, it stores the Child MAC address and device information in its registry.

## 12.4 Pairing Validation

The Parent should validate:

* MAC address format
* Available Child slot
* ESP-NOW channel compatibility
* Duplicate Child registration
* Valid status-message size
* Supported message type

---

# 13. Automation Logic

## 13.1 Light-Based Curtain Automation

The LDR voltage is compared with a configured threshold.

Example:

```text
Threshold = 1.5 V
```

When low voltage represents darkness:

```text
LDR voltage < threshold
        =
Dark condition
```

When high voltage represents darkness, the condition can be reversed.

## 13.2 Stable-Delay Logic

Sensor values may fluctuate because of:

* Shadows
* Moving people
* Vehicle headlights
* Electrical noise
* Temporary light changes

The servo should not move immediately after every small sensor change.

The system waits for the new condition to remain stable.

```text
Sensor condition changes
          |
Start stable timer
          |
Condition remains unchanged
          |
Stable delay completed
          |
Apply curtain action
```

The current logic uses approximately two seconds of stability before applying the final state.

## 13.3 Automatic Curtain Rule

A typical automation rule is:

```text
Bright environment → Open curtain
Dark environment   → Close curtain
```

The rule can be reversed according to the installation requirement.

## 13.4 Manual Override

When the user sends a servo command:

1. Child enters manual mode.
2. Automatic LDR control is suspended.
3. Servo moves to the requested angle.
4. Manual mode remains active until auto mode is enabled again.

---

# 14. Delete, Forget and Unpair Protocol

## 14.1 Remove One Child from Parent

The user selects a Child using its MAC address.

The Parent:

1. Finds the matching Child slot.
2. Removes the ESP-NOW peer.
3. Clears stored status.
4. Clears the display name.
5. Removes the Child from Preferences.
6. Updates the application device list.

## 14.2 Remove All Children

The Parent can remove all registered Child devices through the `FORGET_CHILD` configuration command.

## 14.3 Reset Child Configuration

The Parent can send a reset command to a Child.

The Child then:

1. Clears Preferences.
2. Removes the Parent MAC configuration.
3. Restarts.
4. Returns to the unconfigured state.
5. Becomes available for new configuration.

## 14.4 Offline Child Removal

A Child may be removed from the Parent even when it is offline. However, the offline Child still contains its old Parent configuration.

Therefore, the Child should later be manually reset before pairing it with another Parent.

---

# 15. Wi-Fi Setup

## 15.1 Hotspot Configuration

The Parent hotspot requires:

* SSID between 1 and 31 characters
* Password between 8 and 63 characters

Default development credentials should be changed before final deployment.

## 15.2 Router Wi-Fi Configuration

The user performs the following steps:

1. Connects to the ESP32 through BLE.
2. Sends `WIFI_SCAN`.
3. Selects a compatible network.
4. Sends the router SSID.
5. Sends the router password.
6. Sends `WIFI_TRY`.
7. Checks the returned IP address.
8. Saves and restarts the device.

## 15.3 Channel Compatibility

The router channel and ESP-NOW channel must be compatible. The application should show:

* Router channel
* Required ESP-NOW channel
* Compatibility state
* Signal strength
* Security type

## 15.4 Connection Failure Handling

Possible errors include:

* Router not found
* Incorrect password
* Unsupported channel
* Weak signal
* Connection timeout
* IP allocation failure

The application should display clear error messages instead of only showing a generic connection failure.

---

# 16. Scalability Analysis

## 16.1 Device Scalability

The Parent-Child architecture supports the addition of multiple distributed nodes.

A new node can be developed for:

* Curtains
* Door locks
* Gas sensors
* Motion sensors
* Temperature sensors
* Energy meters
* Water-level monitoring
* Additional relays
* Security alarms

## 16.2 Application Scalability

The Flutter application should not permanently define every device screen.

Instead, the Parent sends a device manifest containing:

* Device ID
* Device name
* Device role
* Sensor types
* Output types
* Current values
* Supported commands
* Automation capabilities

The application uses this information to generate the dashboard dynamically.

## 16.3 Firmware Scalability

A unified firmware reduces maintenance because the same source code supports Parent and Child roles.

However, future versions should separate common logic into modules such as:

```text
Configuration Manager
BLE Provisioning Manager
Wi-Fi Manager
ESP-NOW Manager
HTTP API Manager
Parent Device Manager
Child Sensor Manager
Automation Engine
Persistent Storage Manager
```

## 16.4 Communication Scalability

ESP-NOW is suitable for low-latency communication between nearby ESP32 devices. However, as the number of Child devices and message frequency increase, communication traffic also increases.

Scalability can be improved by:

* Reducing unnecessary status transmissions
* Sending only changed values
* Adding message sequence numbers
* Adding acknowledgement and retry logic
* Using different update intervals
* Prioritizing critical commands
* Avoiding large payloads

## 16.5 Current Capacity

The current firmware defines six Child slots.

This limit is suitable for a prototype or a single room. For a full building, multiple Parent devices may be used.

```text
Home Controller
|
|-- Parent Hub: Living Room
|-- Parent Hub: Bedroom
|-- Parent Hub: Kitchen
|-- Parent Hub: Office
```

Each Parent can manage its own Child devices.

## 16.6 Scalability Compared with Cloud Systems

A cloud or MQTT-based system is generally stronger for:

* Remote internet access
* Multiple buildings
* Centralized data storage
* Large numbers of connected users
* Historical analytics

The proposed system is stronger for:

* Offline operation
* Local privacy
* Low operating cost
* Fast local response
* Simple installation
* Independence from cloud providers

The most suitable future architecture is hybrid:

```text
Local control remains active
          +
Optional MQTT or cloud synchronization
```

This ensures that automation continues even when the internet is unavailable.

---

# 17. Limitations

The current system has the following limitations:

1. Remote internet control is not included.
2. Communication does not currently use application-level encryption.
3. ESP-NOW peers must use a compatible Wi-Fi channel.
4. The current firmware has a fixed maximum Child count.
5. Device authentication is based mainly on configuration and MAC identity.
6. HTTP communication is not protected by HTTPS.
7. The system has limited environmental sensors.
8. The servo requires a stable external power supply.
9. AC fan control requires careful electrical isolation.
10. Historical sensor data is not stored.
11. Automatic firmware update is not included.
12. Device commands may require stronger acknowledgement and retry handling.
13. BLE credentials and development passwords must be secured before production.
14. The current automation is rule-based rather than machine-learning based.

---

# 18. Future Improvements

Future versions may include:

## 18.1 Security Improvements

* API authentication token
* Device-specific secret
* Encrypted ESP-NOW communication
* Secure BLE provisioning
* HTTPS gateway
* Replay protection
* Signed command messages

## 18.2 Cloud Integration

* Optional MQTT broker
* Firebase or custom backend
* Remote monitoring
* Push notifications
* Historical data storage
* Multiple-user access

## 18.3 Device Improvements

* Temperature and humidity sensor
* PIR motion sensor
* Gas and smoke sensor
* Door and window sensor
* Smart lock
* Energy meter
* Water leakage sensor

## 18.4 Firmware Improvements

* Over-the-air firmware update
* Modular source-code structure
* Command acknowledgement
* Message retry
* Message sequence number
* Watchdog recovery
* Dynamic Child limit
* Automatic channel negotiation

## 18.5 Application Improvements

* User authentication
* Room grouping
* Device icons
* Automation schedule
* Sunrise and sunset rules
* Voice assistant integration
* Notification center
* Energy-consumption charts
* Device firmware-version display

## 18.6 Smart Automation

Future automation may use:

* Time schedules
* User presence
* Light intensity trends
* Temperature
* Weather data
* Energy price
* User behaviour patterns

---

# 19. Conclusion

The Scalable Smart Home Automation System successfully demonstrates a local-first Parent-Child architecture using Flutter and ESP32 devices.

The ESP32 Parent functions as the central Room Hub. It provides the local network, HTTP API, appliance control and Child registry. The ESP32 Child functions as a distributed curtain controller with LDR sensing, battery monitoring and servo control.

The use of HTTP JSON APIs simplifies Flutter integration, while ESP-NOW provides direct communication between the Parent and Child devices. BLE configuration makes initial installation and device provisioning easier.

The main strength of the project is its scalable structure. The system is not limited to one fixed controller with permanently connected sensors. New Child device types can be added under the Parent, and the Flutter dashboard can be generated dynamically from the device manifest.

Although the current system requires improvements in authentication, encryption, remote access and large-scale networking, it provides a strong foundation for a secure, modular and expandable smart home automation platform.

The project achieves its primary goals of local appliance control, automatic curtain operation, distributed sensing, mobile application integration and Parent-Child device management without depending on a mandatory cloud service.
