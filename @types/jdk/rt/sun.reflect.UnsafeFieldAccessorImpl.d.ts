declare namespace sun {
    namespace reflect {
abstract class UnsafeFieldAccessorImpl extends sun.reflect.FieldAccessorImpl {
    protected field: java.lang.reflect.Field
    protected fieldOffset: long
    protected isFinal: boolean
    protected ensureObj(arg0: java.lang.Object): void
    protected newGetIllegalArgumentException(arg0: java.lang.String | string): java.lang.IllegalArgumentException
    protected throwFinalFieldIllegalAccessException(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    protected throwFinalFieldIllegalAccessException(arg0: java.lang.Object): void
    protected throwFinalFieldIllegalAccessException(arg0: boolean): void
    protected throwFinalFieldIllegalAccessException(arg0: char): void
    protected throwFinalFieldIllegalAccessException(arg0: byte): void
    protected throwFinalFieldIllegalAccessException(arg0: short): void
    protected throwFinalFieldIllegalAccessException(arg0: int): void
    protected throwFinalFieldIllegalAccessException(arg0: long): void
    protected throwFinalFieldIllegalAccessException(arg0: float): void
    protected throwFinalFieldIllegalAccessException(arg0: double): void
    protected newGetBooleanIllegalArgumentException(): java.lang.IllegalArgumentException
    protected newGetByteIllegalArgumentException(): java.lang.IllegalArgumentException
    protected newGetCharIllegalArgumentException(): java.lang.IllegalArgumentException
    protected newGetShortIllegalArgumentException(): java.lang.IllegalArgumentException
    protected newGetIntIllegalArgumentException(): java.lang.IllegalArgumentException
    protected newGetLongIllegalArgumentException(): java.lang.IllegalArgumentException
    protected newGetFloatIllegalArgumentException(): java.lang.IllegalArgumentException
    protected newGetDoubleIllegalArgumentException(): java.lang.IllegalArgumentException
    protected getSetMessage(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    protected throwSetIllegalArgumentException(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    protected throwSetIllegalArgumentException(arg0: java.lang.Object): void
    protected throwSetIllegalArgumentException(arg0: boolean): void
    protected throwSetIllegalArgumentException(arg0: byte): void
    protected throwSetIllegalArgumentException(arg0: char): void
    protected throwSetIllegalArgumentException(arg0: short): void
    protected throwSetIllegalArgumentException(arg0: int): void
    protected throwSetIllegalArgumentException(arg0: long): void
    protected throwSetIllegalArgumentException(arg0: float): void
    protected throwSetIllegalArgumentException(arg0: double): void
    public static class: java.lang.Class<any>
}

    }
}