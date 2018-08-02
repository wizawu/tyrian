declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
interface PropertyDescriptor {
    GENERIC: int
    DATA: int
    ACCESSOR: int
    CONFIGURABLE: string
    ENUMERABLE: string
    WRITABLE: string
    VALUE: string
    GET: string
    SET: string
    isConfigurable(): boolean
    isEnumerable(): boolean
    isWritable(): boolean
    getValue(): java.lang.Object
    getGetter(): jdk.nashorn.internal.runtime.ScriptFunction
    getSetter(): jdk.nashorn.internal.runtime.ScriptFunction
    setConfigurable(arg0: boolean): void
    setEnumerable(arg0: boolean): void
    setWritable(arg0: boolean): void
    setValue(arg0: java.lang.Object): void
    setGetter(arg0: java.lang.Object): void
    setSetter(arg0: java.lang.Object): void
    fillFrom(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.PropertyDescriptor
    type(): int
    has(arg0: java.lang.Object): boolean
    hasAndEquals(arg0: jdk.nashorn.internal.runtime.PropertyDescriptor): boolean
}

            }
        }
    }
}