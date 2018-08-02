declare namespace javax {
    namespace xml {
        namespace bind {
class JAXBElement<T> implements java.io.Serializable {
    protected name: javax.xml.namespace.QName
    protected declaredType: java.lang.Class<T>
    protected scope: java.lang.Class
    protected value: T
    protected nil: boolean
    public constructor(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, arg2: java.lang.Class, arg3: T)
    public constructor(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, arg2: T)
    public getDeclaredType(): java.lang.Class<T>
    public getName(): javax.xml.namespace.QName
    public setValue(arg0: T): void
    public getValue(): T
    public getScope(): java.lang.Class
    public isNil(): boolean
    public setNil(arg0: boolean): void
    public isGlobalScope(): boolean
    public isTypeSubstituted(): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}