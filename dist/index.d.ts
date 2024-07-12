import { Logger } from "./const.js";
import { ESPLoader } from "./esp_loader.js";
export type { Logger } from "./const.js";
export { ESPLoader } from "./esp_loader.js";
export { CHIP_FAMILY_ESP32, CHIP_FAMILY_ESP32S2, CHIP_FAMILY_ESP32S3, CHIP_FAMILY_ESP8266, CHIP_FAMILY_ESP32C3, CHIP_FAMILY_ESP32C6, CHIP_FAMILY_ESP32H2, ESP_ROM_BAUD } from "./const.js";
export declare const connect: (logger: Logger) => Promise<ESPLoader>;
