interface Options {
    debug: boolean;
    watch: boolean;
}
export default function (output: string, args: string[], { debug, watch }: Options): void;
export {};
