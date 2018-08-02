declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
class RepIdDelegator implements com.sun.corba.se.impl.orbutil.RepositoryIdStrings , com.sun.corba.se.impl.orbutil.RepositoryIdUtility , com.sun.corba.se.impl.orbutil.RepositoryIdInterface {
    public createForAnyType(arg0: java.lang.Class): string
    public createForJavaType(arg0: java.io.Serializable): string
    public createForJavaType(arg0: java.lang.Class): string
    public createSequenceRepID(arg0: java.lang.Object): string
    public createSequenceRepID(arg0: java.lang.Class): string
    public getFromString(arg0: java.lang.String | string): com.sun.corba.se.impl.orbutil.RepositoryIdInterface
    public isChunkedEncoding(arg0: int): boolean
    public isCodeBasePresent(arg0: int): boolean
    public getClassDescValueRepId(): string
    public getWStringValueRepId(): string
    public getTypeInfo(arg0: int): int
    public getStandardRMIChunkedNoRepStrId(): int
    public getCodeBaseRMIChunkedNoRepStrId(): int
    public getStandardRMIChunkedId(): int
    public getCodeBaseRMIChunkedId(): int
    public getStandardRMIUnchunkedId(): int
    public getCodeBaseRMIUnchunkedId(): int
    public getStandardRMIUnchunkedNoRepStrId(): int
    public getCodeBaseRMIUnchunkedNoRepStrId(): int
    public getClassFromType(): java.lang.Class
    public getClassFromType(arg0: java.lang.String | string): java.lang.Class
    public getClassFromType(arg0: java.lang.Class, arg1: java.lang.String | string): java.lang.Class
    public getClassName(): string
    public constructor()
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}