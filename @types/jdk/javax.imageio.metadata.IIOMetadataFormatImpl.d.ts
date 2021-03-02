declare namespace javax {
  namespace imageio {
    namespace metadata {

      abstract class IIOMetadataFormatImpl implements javax.imageio.metadata.IIOMetadataFormat {
        public static readonly standardMetadataFormatName: java.lang.String
        public constructor(arg0: java.lang.String, arg1: int)
        public constructor(arg0: java.lang.String, arg1: int, arg2: int)
        protected setResourceBaseName(arg0: java.lang.String): void
        protected getResourceBaseName(): java.lang.String
        protected addElement(arg0: java.lang.String, arg1: java.lang.String, arg2: int): void
        protected addElement(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: int): void
        protected addChildElement(arg0: java.lang.String, arg1: java.lang.String): void
        protected removeElement(arg0: java.lang.String): void
        protected addAttribute(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: boolean, arg4: java.lang.String): void
        protected addAttribute(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: boolean, arg4: java.lang.String, arg5: java.util.List<java.lang.String>): void
        protected addAttribute(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: boolean, arg4: java.lang.String, arg5: java.lang.String, arg6: java.lang.String, arg7: boolean, arg8: boolean): void
        protected addAttribute(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: boolean, arg4: int, arg5: int): void
        protected addBooleanAttribute(arg0: java.lang.String, arg1: java.lang.String, arg2: boolean, arg3: boolean): void
        protected removeAttribute(arg0: java.lang.String, arg1: java.lang.String): void
        protected addObjectValue<T>(arg0: java.lang.String, arg1: java.lang.Class<T>, arg2: boolean, arg3: T): void
        protected addObjectValue<T>(arg0: java.lang.String, arg1: java.lang.Class<T>, arg2: boolean, arg3: T, arg4: java.util.List<T>): void
        protected addObjectValue<T extends java.lang.Comparable<unknown>>(arg0: java.lang.String, arg1: java.lang.Class<T>, arg2: T, arg3: java.lang.Comparable<unknown>, arg4: java.lang.Comparable<unknown>, arg5: boolean, arg6: boolean): void
        protected addObjectValue(arg0: java.lang.String, arg1: java.lang.Class<unknown>, arg2: int, arg3: int): void
        protected removeObjectValue(arg0: java.lang.String): void
        public getRootName(): java.lang.String
        public abstract canNodeAppear(arg0: java.lang.String, arg1: javax.imageio.ImageTypeSpecifier): boolean
        public getElementMinChildren(arg0: java.lang.String): int
        public getElementMaxChildren(arg0: java.lang.String): int
        public getElementDescription(arg0: java.lang.String, arg1: java.util.Locale): java.lang.String
        public getChildPolicy(arg0: java.lang.String): int
        public getChildNames(arg0: java.lang.String): java.lang.String[]
        public getAttributeNames(arg0: java.lang.String): java.lang.String[]
        public getAttributeValueType(arg0: java.lang.String, arg1: java.lang.String): int
        public getAttributeDataType(arg0: java.lang.String, arg1: java.lang.String): int
        public isAttributeRequired(arg0: java.lang.String, arg1: java.lang.String): boolean
        public getAttributeDefaultValue(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        public getAttributeEnumerations(arg0: java.lang.String, arg1: java.lang.String): java.lang.String[]
        public getAttributeMinValue(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        public getAttributeMaxValue(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        public getAttributeListMinLength(arg0: java.lang.String, arg1: java.lang.String): int
        public getAttributeListMaxLength(arg0: java.lang.String, arg1: java.lang.String): int
        public getAttributeDescription(arg0: java.lang.String, arg1: java.lang.String, arg2: java.util.Locale): java.lang.String
        public getObjectValueType(arg0: java.lang.String): int
        public getObjectClass(arg0: java.lang.String): java.lang.Class<unknown>
        public getObjectDefaultValue(arg0: java.lang.String): java.lang.Object
        public getObjectEnumerations(arg0: java.lang.String): java.lang.Object[]
        public getObjectMinValue(arg0: java.lang.String): java.lang.Comparable<unknown>
        public getObjectMaxValue(arg0: java.lang.String): java.lang.Comparable<unknown>
        public getObjectArrayMinLength(arg0: java.lang.String): int
        public getObjectArrayMaxLength(arg0: java.lang.String): int
        public static getStandardFormatInstance(): javax.imageio.metadata.IIOMetadataFormat
      }

    }
  }
}
