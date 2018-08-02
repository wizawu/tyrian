declare namespace java {
    namespace rmi {
        namespace activation {
class ActivationDesc implements java.io.Serializable {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject<any>)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject<any>, arg3: boolean)
    public constructor(arg0: java.rmi.activation.ActivationGroupID, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.rmi.MarshalledObject<any>)
    public constructor(arg0: java.rmi.activation.ActivationGroupID, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.rmi.MarshalledObject<any>, arg4: boolean)
    public getGroupID(): java.rmi.activation.ActivationGroupID
    public getClassName(): string
    public getLocation(): string
    public getData(): java.rmi.MarshalledObject<any>
    public getRestartMode(): boolean
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

        }
    }
}