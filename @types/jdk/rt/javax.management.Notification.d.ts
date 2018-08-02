declare namespace javax {
    namespace management {
class Notification extends java.util.EventObject {
    protected source: java.lang.Object
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: long)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: long, arg4: java.lang.String | string)
    public setSource(arg0: java.lang.Object): void
    public getSequenceNumber(): long
    public setSequenceNumber(arg0: long): void
    public getType(): string
    public getTimeStamp(): long
    public setTimeStamp(arg0: long): void
    public getMessage(): string
    public getUserData(): java.lang.Object
    public setUserData(arg0: java.lang.Object): void
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}