declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace util {
                        class RepositoryId {
                            public static readonly kInitialValueTag: int
                            public static readonly kNoTypeInfo: int
                            public static readonly kSingleRepTypeInfo: int
                            public static readonly kPartialListTypeInfo: int
                            public static readonly kChunkedMask: int
                            public static readonly kPreComputed_StandardRMIUnchunked: int
                            public static readonly kPreComputed_CodeBaseRMIUnchunked: int
                            public static readonly kPreComputed_StandardRMIChunked: int
                            public static readonly kPreComputed_CodeBaseRMIChunked: int
                            public static readonly kPreComputed_StandardRMIUnchunked_NoRep: int
                            public static readonly kPreComputed_CodeBaseRMIUnchunked_NoRep: int
                            public static readonly kPreComputed_StandardRMIChunked_NoRep: int
                            public static readonly kPreComputed_CodeBaseRMIChunked_NoRep: int
                            public static readonly kWStringValueVersion: string
                            public static readonly kWStringValueHash: string
                            public static readonly kWStringStubValue: string
                            public static readonly kWStringTypeStr: string
                            public static readonly kWStringValueRepID: string
                            public static readonly kAnyRepID: string
                            public static readonly kClassDescValueHash: string
                            public static readonly kClassDescStubValue: string
                            public static readonly kClassDescTypeStr: string
                            public static readonly kClassDescValueRepID: string
                            public static readonly kObjectValueHash: string
                            public static readonly kObjectStubValue: string
                            public static readonly kSequenceValueHash: string
                            public static readonly kPrimitiveSequenceValueHash: string
                            public static readonly kSerializableValueHash: string
                            public static readonly kSerializableStubValue: string
                            public static readonly kExternalizableValueHash: string
                            public static readonly kExternalizableStubValue: string
                            public static readonly kRemoteValueHash: string
                            public static readonly kRemoteStubValue: string
                            public static readonly kRemoteTypeStr: string
                            public static readonly kRemoteValueRepID: string
                            public static readonly cache: com.sun.corba.se.impl.util.RepositoryIdCache
                            public static readonly kjava_rmi_Remote: string
                            public static readonly korg_omg_CORBA_Object: string
                            public static readonly kNoParamTypes: java.lang.Class[]
                            public static readonly kNoArgs: java.lang.Object[]
                            public getUnqualifiedName(): string
                            public getDefinedInId(): string
                            public getTypeString(): string
                            public getVersionString(): string
                            public getSerialVersionUID(): string
                            public getActualSerialVersionUID(): string
                            public getSerialVersionUIDAsLong(): long
                            public getActualSerialVersionUIDAsLong(): long
                            public isRMIValueType(): boolean
                            public isIDLType(): boolean
                            public getRepositoryId(): string
                            public static getByteArray(arg0: java.lang.String | string): byte[]
                            public static setByteArray(arg0: java.lang.String | string, arg1: byte[]): void
                            public isSequence(): boolean
                            public isSupportedFormat(): boolean
                            public getClassName(): string
                            public getAnyClassFromType(): java.lang.Class
                            public getClassFromType(): java.lang.Class
                            public getClassFromType(arg0: java.lang.Class, arg1: java.lang.String | string): java.lang.Class
                            public getClassFromType(arg0: java.lang.String | string): java.lang.Class
                            public toString(): string
                            public static useFullValueDescription(arg0: java.lang.Class, arg1: java.lang.String | string): boolean
                            public static createSequenceRepID(arg0: java.lang.Object): string
                            public static createSequenceRepID(arg0: java.lang.Class): string
                            public static createForSpecialCase(arg0: java.lang.Class): string
                            public static createForSpecialCase(arg0: java.io.Serializable): string
                            public static createForJavaType(arg0: java.io.Serializable): string
                            public static createForJavaType(arg0: java.lang.Class): string
                            public static createForIDLType(arg0: java.lang.Class, arg1: int, arg2: int): string
                            public static createForAnyType(arg0: java.lang.Class): string
                            public static isAbstractBase(arg0: java.lang.Class): boolean
                            public static isAnyRequired(arg0: java.lang.Class): boolean
                            public static fromHex(arg0: java.lang.String | string): long
                            public static convertToISOLatin1(arg0: java.lang.String | string): string
                            public static computeValueTag(arg0: boolean, arg1: int, arg2: boolean): int
                            public static isCodeBasePresent(arg0: int): boolean
                            public static getTypeInfo(arg0: int): int
                            public static isChunkedEncoding(arg0: int): boolean
                            public static getServerURL(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}