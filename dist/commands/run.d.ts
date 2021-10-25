interface Options {
    inspectBrk: boolean;
    watch: boolean;
}
export default function (output: string, args: string[], { inspectBrk, watch }: Options): void;
export declare function checkRuntime(): [Runtime, string];
export {};
