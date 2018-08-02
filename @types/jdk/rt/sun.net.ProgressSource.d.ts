declare namespace sun {
    namespace net {
class ProgressSource {
    public constructor(arg0: java.net.URL, arg1: java.lang.String | string)
    public constructor(arg0: java.net.URL, arg1: java.lang.String | string, arg2: long)
    public connected(): boolean
    public close(): void
    public getURL(): java.net.URL
    public getMethod(): string
    public getContentType(): string
    public setContentType(arg0: java.lang.String | string): void
    public getProgress(): long
    public getExpected(): long
    public getState(): sun.net.ProgressSource$State
    public beginTracking(): void
    public finishTracking(): void
    public updateProgress(arg0: long, arg1: long): void
    public clone(): java.lang.Object
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}