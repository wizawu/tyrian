declare namespace jdk {
    namespace nashorn {
        namespace api {
            namespace scripting {
interface JSObject {
    call(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
    newObject(...arg0: java.lang.Object[]): java.lang.Object
    eval(arg0: java.lang.String | string): java.lang.Object
    getMember(arg0: java.lang.String | string): java.lang.Object
    getSlot(arg0: int): java.lang.Object
    hasMember(arg0: java.lang.String | string): boolean
    hasSlot(arg0: int): boolean
    removeMember(arg0: java.lang.String | string): void
    setMember(arg0: java.lang.String | string, arg1: java.lang.Object): void
    setSlot(arg0: int, arg1: java.lang.Object): void
    keySet(): java.util.Set<java.lang.String>
    values(): java.util.Collection<java.lang.Object>
    isInstance(arg0: java.lang.Object): boolean
    isInstanceOf(arg0: java.lang.Object): boolean
    getClassName(): string
    isFunction(): boolean
    isStrictFunction(): boolean
    isArray(): boolean
    toNumber(): double
}

            }
        }
    }
}