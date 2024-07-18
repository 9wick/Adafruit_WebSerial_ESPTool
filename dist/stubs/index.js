import { CHIP_FAMILY_ESP32, CHIP_FAMILY_ESP32S2, CHIP_FAMILY_ESP32S3, CHIP_FAMILY_ESP8266, CHIP_FAMILY_ESP32C2, CHIP_FAMILY_ESP32C3, CHIP_FAMILY_ESP32C6, CHIP_FAMILY_ESP32H2 } from "../const.js";
import { toByteArray } from "../util.js";
export const getStubCode = async (chipFamily) => {
    let stubcode;
    if (chipFamily == CHIP_FAMILY_ESP32) {
        stubcode = await import("./esp32.json", { assert: { type: "json" } });
    }
    else if (chipFamily == CHIP_FAMILY_ESP32S2) {
        stubcode = await import("./esp32s2.json", { assert: { type: "json" } });
    }
    else if (chipFamily == CHIP_FAMILY_ESP32S3) {
        stubcode = await import("./esp32s3.json", { assert: { type: "json" } });
    }
    else if (chipFamily == CHIP_FAMILY_ESP8266) {
        stubcode = await import("./esp8266.json", { assert: { type: "json" } });
    }
    else if (chipFamily == CHIP_FAMILY_ESP32C2) {
        stubcode = await import("./esp32c2.json", { assert: { type: "json" } });
    }
    else if (chipFamily == CHIP_FAMILY_ESP32C3) {
        stubcode = await import("./esp32c3.json", { assert: { type: "json" } });
    }
    else if (chipFamily == CHIP_FAMILY_ESP32C6) {
        stubcode = await import("./esp32c6.json", { assert: { type: "json" } });
    }
    else if (chipFamily == CHIP_FAMILY_ESP32H2) {
        stubcode = await import("./esp32h2.json", { assert: { type: "json" } });
    }
    // Base64 decode the text and data
    return {
        ...stubcode.default,
        text: toByteArray(atob(stubcode.default.text)),
        data: toByteArray(atob(stubcode.default.data)),
    };
};
