declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace util {
                        class RepositoryId {
                            public static kInitialValueTag: int
                            public static kNoTypeInfo: int
                            public static kSingleRepTypeInfo: int
                            public static kPartialListTypeInfo: int
                            public static kChunkedMask: int
                            public static kPreComputed_StandardRMIUnchunked: int
                            public static kPreComputed_CodeBaseRMIUnchunked: int
                            public static kPreComputed_StandardRMIChunked: int
                            public static kPreComputed_CodeBaseRMIChunked: int
                            public static kPreComputed_StandardRMIUnchunked_NoRep: int
                            public static kPreComputed_CodeBaseRMIUnchunked_NoRep: int
                            public static kPreComputed_StandardRMIChunked_NoRep: int
                            public static kPreComputed_CodeBaseRMIChunked_NoRep: int
                            public static kWStringValueVersion: string
                            public static kWStringValueHash: string
                            public static kWStringStubValue: string
                            public static kWStringTypeStr: string
                            public static kWStringValueRepID: string
                            public static kAnyRepID: string
                            public static kClassDescValueHash: string
                            public static kClassDescStubValue: string
                            public static kClassDescTypeStr: string
                            public static kClassDescValueRepID: string
                            public static kObjectValueHash: string
                            public static kObjectStubValue: string
                            public static kSequenceValueHash: string
                            public static kPrimitiveSequenceValueHash: string
                            public static kSerializableValueHash: string
                            public static kSerializableStubValue: string
                            public static kExternalizableValueHash: string
                            public static kExternalizableStubValue: string
                            public static kRemoteValueHash: string
                            public static kRemoteStubValue: string
                            public static kRemoteTypeStr: string
                            public static kRemoteValueRepID: string
                            public static cache: com.sun.corba.se.impl.util.RepositoryIdCache
                            public static kjava_rmi_Remote: string
                            public static korg_omg_CORBA_Object: string
                            public static kNoParamTypes: java.lang.Class[]
                            public static kNoArgs: java.lang.Object[]
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