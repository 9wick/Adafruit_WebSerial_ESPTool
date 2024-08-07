import { ChipFamily } from "../const.js";
interface Stub {
    text: number[];
    data: number[];
    text_start: number;
    entry: number;
    data_start: number;
}
export declare const getStubCode: (chipFamily: ChipFamily) => Promise<Stub>;
export {};
