declare namespace java {
    namespace awt {
        namespace datatransfer {
            class Clipboard {
                protected owner: java.awt.datatransfer.ClipboardOwner
                protected contents: java.awt.datatransfer.Transferable
                public constructor(arg0: java.lang.String | string)
                public getName(): string
                public setContents(arg0: java.awt.datatransfer.Transferable, arg1: java.awt.datatransfer.ClipboardOwner | java.awt.datatransfer.ClipboardOwner$$Lambda): void
                public getContents(arg0: java.lang.Object): java.awt.datatransfer.Transferable
                public getAvailableDataFlavors(): java.awt.datatransfer.DataFlavor[]
                public isDataFlavorAvailable(arg0: java.awt.datatransfer.DataFlavor): boolean
                public getData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
                public addFlavorListener(arg0: java.awt.datatransfer.FlavorListener): void
                public removeFlavorListener(arg0: java.awt.datatransfer.FlavorListener): void
                public getFlavorListeners(): java.awt.datatransfer.FlavorListener[]
                public static class: java.lang.Class<any>
            }
            interface ClipboardOwner {
                lostOwnership(arg0: java.awt.datatransfer.Clipboard, arg1: java.awt.datatransfer.Transferable): void
            }
            interface ClipboardOwner$$Lambda {
                (arg0: java.awt.datatransfer.Clipboard, arg1: java.awt.datatransfer.Transferable): void
            }
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
            class FlavorEvent extends java.util.EventObject {
                public constructor(arg0: java.awt.datatransfer.Clipboard)
                public static class: java.lang.Class<any>
            }
            interface FlavorListener extends java.util.EventListener {
                flavorsChanged(arg0: java.awt.datatransfer.FlavorEvent): void
            }
            interface FlavorMap {
                getNativesForFlavors(arg0: java.awt.datatransfer.DataFlavor[]): java.util.Map<java.awt.datatransfer.DataFlavor, java.lang.String>
                getFlavorsForNatives(arg0: java.lang.String[]): java.util.Map<java.lang.String, java.awt.datatransfer.DataFlavor>
            }
            interface FlavorTable extends java.awt.datatransfer.FlavorMap {
                getNativesForFlavor(arg0: java.awt.datatransfer.DataFlavor): java.util.List<java.lang.String>
                getFlavorsForNative(arg0: java.lang.String | string): java.util.List<java.awt.datatransfer.DataFlavor>
            }
            class MimeType implements java.io.Externalizable , java.lang.Cloneable {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.awt.datatransfer.MimeTypeParameterList)
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public getPrimaryType(): string
                public getSubType(): string
                public getParameters(): java.awt.datatransfer.MimeTypeParameterList
                public getParameter(arg0: java.lang.String | string): string
                public setParameter(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public removeParameter(arg0: java.lang.String | string): void
                public toString(): string
                public getBaseType(): string
                public match(arg0: java.awt.datatransfer.MimeType): boolean
                public match(arg0: java.lang.String | string): boolean
                public writeExternal(arg0: java.io.ObjectOutput): void
                public readExternal(arg0: java.io.ObjectInput): void
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class MimeTypeParameterList implements java.lang.Cloneable {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                protected parse(arg0: java.lang.String | string): void
                public size(): int
                public isEmpty(): boolean
                public get(arg0: java.lang.String | string): string
                public set(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public remove(arg0: java.lang.String | string): void
                public getNames(): java.util.Enumeration<java.lang.String>
                public toString(): string
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class MimeTypeParseException extends java.lang.Exception {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class StringSelection implements java.awt.datatransfer.Transferable , java.awt.datatransfer.ClipboardOwner {
                public constructor(arg0: java.lang.String | string)
                public getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
                public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
                public getTransferData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
                public lostOwnership(arg0: java.awt.datatransfer.Clipboard, arg1: java.awt.datatransfer.Transferable): void
                public static class: java.lang.Class<any>
            }
            class StringSelection$$Lambda implements java.awt.datatransfer.Transferable , java.awt.datatransfer.ClipboardOwner {
                public constructor(arg0: java.lang.String | string)
            }
            class SystemFlavorMap implements java.awt.datatransfer.FlavorMap , java.awt.datatransfer.FlavorTable {
                public static getDefaultFlavorMap(): java.awt.datatransfer.FlavorMap
                public getNativesForFlavor(arg0: java.awt.datatransfer.DataFlavor): java.util.List<java.lang.String>
                public getFlavorsForNative(arg0: java.lang.String | string): java.util.List<java.awt.datatransfer.DataFlavor>
                public getNativesForFlavors(arg0: java.awt.datatransfer.DataFlavor[]): java.util.Map<java.awt.datatransfer.DataFlavor, java.lang.String>
                public getFlavorsForNatives(arg0: java.lang.String[]): java.util.Map<java.lang.String, java.awt.datatransfer.DataFlavor>
                public addUnencodedNativeForFlavor(arg0: java.awt.datatransfer.DataFlavor, arg1: java.lang.String | string): void
                public setNativesForFlavor(arg0: java.awt.datatransfer.DataFlavor, arg1: java.lang.String[]): void
                public addFlavorForUnencodedNative(arg0: java.lang.String | string, arg1: java.awt.datatransfer.DataFlavor): void
                public setFlavorsForNative(arg0: java.lang.String | string, arg1: java.awt.datatransfer.DataFlavor[]): void
                public static encodeJavaMIMEType(arg0: java.lang.String | string): string
                public static encodeDataFlavor(arg0: java.awt.datatransfer.DataFlavor): string
                public static isJavaMIMEType(arg0: java.lang.String | string): boolean
                public static decodeJavaMIMEType(arg0: java.lang.String | string): string
                public static decodeDataFlavor(arg0: java.lang.String | string): java.awt.datatransfer.DataFlavor
                public static class: java.lang.Class<any>
            }
            interface Transferable {
                getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
                isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
                getTransferData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
            }
            class UnsupportedFlavorException extends java.lang.Exception {
                public constructor(arg0: java.awt.datatransfer.DataFlavor)
                public static class: java.lang.Class<any>
            }
        }
    }
}
