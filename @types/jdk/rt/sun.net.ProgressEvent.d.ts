declare namespace sun {
    namespace net {
class ProgressEvent extends java.util.EventObject {
    public constructor(arg0: sun.net.ProgressSource, arg1: java.net.URL, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: sun.net.ProgressSource$State, arg5: long, arg6: long)
    public getURL(): java.net.URL
    public getMethod(): string
    public getContentType(): string
    public getProgress(): long
    public getExpected(): long
    public getState(): sun.net.ProgressSource$State
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}