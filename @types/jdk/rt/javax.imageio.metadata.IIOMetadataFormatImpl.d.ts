declare namespace javax {
    namespace imageio {
        namespace metadata {
            abstract class IIOMetadataFormatImpl implements javax.imageio.metadata.IIOMetadataFormat {
                public static readonly standardMetadataFormatName: string
                public constructor(arg0: java.lang.String | string, arg1: int)
                public constructor(arg0: java.lang.String | string, arg1: int, arg2: int)
                protected setResourceBaseName(arg0: java.lang.String | string): void
                protected getResourceBaseName(): string
                protected addElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): void
                protected addElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int): void
                protected addChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                protected removeElement(arg0: java.lang.String | string): void
                protected addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: boolean, arg4: java.lang.String | string): void
                protected addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: boolean, arg4: java.lang.String | string, arg5: java.util.List<java.lang.String>): void
                protected addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: boolean, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: boolean, arg8: boolean): void
                protected addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: boolean, arg4: int, arg5: int): void
                protected addBooleanAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean, arg3: boolean): void
                protected removeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                protected addObjectValue<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>, arg2: boolean, arg3: T): void
                protected addObjectValue<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>, arg2: boolean, arg3: T, arg4: java.util.List<T>): void
                protected addObjectValue<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.Class<T>, arg2: T, arg3: java.lang.Comparable<T> | java.lang.Comparable$$Lambda<T>, arg4: java.lang.Comparable<T> | java.lang.Comparable$$Lambda<T>, arg5: boolean, arg6: boolean): void
                protected addObjectValue<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: int, arg3: int): void
                protected removeObjectValue<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): void
                public getRootName<T extends java.lang.Comparable<T>>(): string
                public abstract canNodeAppear<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: javax.imageio.ImageTypeSpecifier): boolean
                public getElementMinChildren<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): int
                public getElementMaxChildren<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): int
                public getElementDescription<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.util.Locale): string
                public getChildPolicy<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): int
                public getChildNames<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): java.lang.String[]
                public getAttributeNames<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): java.lang.String[]
                public getAttributeValueType<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                public getAttributeDataType<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                public isAttributeRequired<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                public getAttributeDefaultValue<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                public getAttributeEnumerations<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String[]
                public getAttributeMinValue<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                public getAttributeMaxValue<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                public getAttributeListMinLength<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                public getAttributeListMaxLength<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                public getAttributeDescription<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.Locale): string
                public getObjectValueType<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): int
                public getObjectClass<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): java.lang.Class<any>
                public getObjectDefaultValue<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): java.lang.Object
                public getObjectEnumerations<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): java.lang.Object[]
                public getObjectMinValue<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): java.lang.Comparable<any>
                public getObjectMaxValue<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): java.lang.Comparable<any>
                public getObjectArrayMinLength<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): int
                public getObjectArrayMaxLength<T extends java.lang.Comparable<T>>(arg0: java.lang.String | string): int
                public static getStandardFormatInstance<T extends java.lang.Comparable<T>>(): javax.imageio.metadata.IIOMetadataFormat
                public static class: java.lang.Class<any>
            }
            interface IIOMetadataFormatImpl$$Lambda implements javax.imageio.metadata.IIOMetadataFormat {
                (arg0: java.lang.String | string, arg1: javax.imageio.ImageTypeSpecifier): boolean
            }
        }
    }
}