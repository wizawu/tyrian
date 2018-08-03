declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                class AccessorPropertyDescriptor extends jdk.nashorn.internal.runtime.ScriptObject implements jdk.nashorn.internal.runtime.PropertyDescriptor {
                    public configurable: java.lang.Object
                    public enumerable: java.lang.Object
                    public get: java.lang.Object
                    public set: java.lang.Object
                    public isConfigurable(): boolean
                    public isEnumerable(): boolean
                    public isWritable(): boolean
                    public getValue(): java.lang.Object
                    public getGetter(): jdk.nashorn.internal.runtime.ScriptFunction
                    public getSetter(): jdk.nashorn.internal.runtime.ScriptFunction
                    public setConfigurable(arg0: boolean): void
                    public setEnumerable(arg0: boolean): void
                    public setWritable(arg0: boolean): void
                    public setValue(arg0: java.lang.Object): void
                    public setGetter(arg0: java.lang.Object): void
                    public setSetter(arg0: java.lang.Object): void
                    public fillFrom(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public type(): int
                    public hasAndEquals(arg0: jdk.nashorn.internal.runtime.PropertyDescriptor): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public toString(): string
                    public static public hashCode(): int
                    public static $clinit$(): void
                    public G$configurable(): java.lang.Object
                    public S$configurable(arg0: java.lang.Object): void
                    public G$enumerable(): java.lang.Object
                    public S$enumerable(arg0: java.lang.Object): void
                    public G$get(): java.lang.Object
                    public S$get(arg0: java.lang.Object): void
                    public G$set(): java.lang.Object
                    public S$set(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}