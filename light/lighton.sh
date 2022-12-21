#/bin/bash
mosquitto_pub -h 192.168.1.13 -t cmnd/printer_light/Power -m "On" -d
