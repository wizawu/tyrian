declare namespace java {
    namespace awt {
        namespace datatransfer {
            class DataFlavor implements java.io.Externalizable , java.lang.Cloneable {
                public static stringFlavor: java.awt.datatransfer.DataFlavor
                public static imageFlavor: java.awt.datatransfer.DataFlavor
                public static plainTextFlavor: java.awt.datatransfer.DataFlavor
                public static javaSerializedObjectMimeType: string
                public static javaFileListFlavor: java.awt.datatransfer.DataFlavor
                public static javaJVMLocalObjectMimeType: string
                public static javaRemoteObjectMimeType: string
                public static selectionHtmlFlavor: java.awt.datatransfer.DataFlavor
                public static fragmentHtmlFlavor: java.awt.datatransfer.DataFlavor
                public static allHtmlFlavor: java.awt.datatransfer.DataFlavor
                protected static tryToLoadClass(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): java.lang.Class<any>
                public constructor()
                public constructor(arg0: java.lang.Class<any>, arg1: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader)
                public constructor(arg0: java.lang.String | string)
                public toString(): string
                public static getTextPlainUnicodeFlavor(): java.awt.datatransfer.DataFlavor
                public static selectBestTextFlavor(arg0: java.awt.datatransfer.DataFlavor[]): java.awt.datatransfer.DataFlavor
                public getReaderForText(arg0: java.awt.datatransfer.Transferable): java.io.Reader
                public getMimeType(): string
                public getRepresentationClass(): java.lang.Class<any>
                public getHumanPresentableName(): string
                public getPrimaryType(): string
                public getSubType(): string
                public getParameter(arg0: java.lang.String | string): string
                public setHumanPresentableName(arg0: java.lang.String | string): void
                public equals(arg0: java.lang.Object): boolean
                public equals(arg0: java.awt.datatransfer.DataFlavor): boolean
                public equals(arg0: java.lang.String | string): boolean
                public hashCode(): int
                public match(arg0: java.awt.datatransfer.DataFlavor): boolean
                public isMimeTypeEqual(arg0: java.lang.String | string): boolean
                public isMimeTypeEqual(arg0: java.awt.datatransfer.DataFlavor): boolean
                public isMimeTypeSerializedObject(): boolean
                public getDefaultRepresentationClass(): java.lang.Class<any>
                public getDefaultRepresentationClassAsString(): string
                public isRepresentationClassInputStream(): boolean
                public isRepresentationClassReader(): boolean
                public isRepresentationClassCharBuffer(): boolean
                public isRepresentationClassByteBuffer(): boolean
                public isRepresentationClassSerializable(): boolean
                public isRepresentationClassRemote(): boolean
                public isFlavorSerializedObjectType(): boolean
                public isFlavorRemoteObjectType(): boolean
                public isFlavorJavaFileListType(): boolean
                public isFlavorTextType(): boolean
                public writeExternal(arg0: java.io.ObjectOutput): void
                public readExternal(arg0: java.io.ObjectInput): void
                public clone(): java.lang.Object
                protected normalizeMimeTypeParameter(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                protected normalizeMimeType(arg0: java.lang.String | string): string
                public static class: java.lang.Class<any>
            }
        }
    }
}