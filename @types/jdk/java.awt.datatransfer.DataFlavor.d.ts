declare namespace java {
  namespace awt {
    namespace datatransfer {

      class DataFlavor implements java.io.Externalizable, java.lang.Cloneable {
        public static readonly stringFlavor: java.awt.datatransfer.DataFlavor
        public static readonly imageFlavor: java.awt.datatransfer.DataFlavor
        public static readonly plainTextFlavor: java.awt.datatransfer.DataFlavor
        public static readonly javaSerializedObjectMimeType: java.lang.String
        public static readonly javaFileListFlavor: java.awt.datatransfer.DataFlavor
        public static readonly javaJVMLocalObjectMimeType: java.lang.String
        public static readonly javaRemoteObjectMimeType: java.lang.String
        public static selectionHtmlFlavor: java.awt.datatransfer.DataFlavor
        public static fragmentHtmlFlavor: java.awt.datatransfer.DataFlavor
        public static allHtmlFlavor: java.awt.datatransfer.DataFlavor
        atom: int
        mimeType: java.awt.datatransfer.MimeType
        protected static tryToLoadClass(arg0: java.lang.String, arg1: java.lang.ClassLoader): java.lang.Class<unknown>
        public constructor()
        public constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.ClassLoader)
        public constructor(arg0: java.lang.String)
        public toString(): java.lang.String
        public static getTextPlainUnicodeFlavor(): java.awt.datatransfer.DataFlavor
        public static selectBestTextFlavor(arg0: java.awt.datatransfer.DataFlavor[]): java.awt.datatransfer.DataFlavor
        public getReaderForText(arg0: java.awt.datatransfer.Transferable): java.io.Reader
        public getMimeType(): java.lang.String
        public getRepresentationClass(): java.lang.Class<unknown>
        public getHumanPresentableName(): java.lang.String
        public getPrimaryType(): java.lang.String
        public getSubType(): java.lang.String
        public getParameter(arg0: java.lang.String): java.lang.String
        public setHumanPresentableName(arg0: java.lang.String): void
        public equals(arg0: java.lang.Object): boolean
        public equals(arg0: java.awt.datatransfer.DataFlavor): boolean
        public equals(arg0: java.lang.String): boolean
        public hashCode(): int
        public match(arg0: java.awt.datatransfer.DataFlavor): boolean
        public isMimeTypeEqual(arg0: java.lang.String): boolean
        public isMimeTypeEqual(arg0: java.awt.datatransfer.DataFlavor): boolean
        public isMimeTypeSerializedObject(): boolean
        public getDefaultRepresentationClass(): java.lang.Class<unknown>
        public getDefaultRepresentationClassAsString(): java.lang.String
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
        protected normalizeMimeTypeParameter(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        protected normalizeMimeType(arg0: java.lang.String): java.lang.String
      }

    }
  }
}
