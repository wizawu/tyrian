interface Options {
    inspect?: string;
    watch: boolean;
}
export default function (output: string, args: string[], { inspect, watch }: Options): void;
export {};
