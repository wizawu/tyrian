declare namespace javax {
  namespace imageio {
    namespace metadata {

      abstract class IIOMetadataFormatImpl implements javax.imageio.metadata.IIOMetadataFormat {
        public static readonly standardMetadataFormatName: java.lang.String
        public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
        public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        protected setResourceBaseName(arg0: java.lang.String | string): void
        protected getResourceBaseName(): java.lang.String
        protected addElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer): void
        protected addElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
        protected addChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        protected removeElement(arg0: java.lang.String | string): void
        protected addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean, arg4: java.lang.String | string): void
        protected addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean, arg4: java.lang.String | string, arg5: java.util.List<java.lang.String>): void
        protected addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: boolean | java.lang.Boolean, arg8: boolean | java.lang.Boolean): void
        protected addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
        protected addBooleanAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean): void
        protected removeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        protected addObjectValue<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>, arg2: boolean | java.lang.Boolean, arg3: T): void
        protected addObjectValue<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>, arg2: boolean | java.lang.Boolean, arg3: T, arg4: java.util.List<T>): void
        protected addObjectValue<T extends java.lang.Comparable<unknown>>(arg0: java.lang.String | string, arg1: java.lang.Class<T>, arg2: T, arg3: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>, arg4: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>, arg5: boolean | java.lang.Boolean, arg6: boolean | java.lang.Boolean): void
        protected addObjectValue(arg0: java.lang.String | string, arg1: java.lang.Class<unknown>, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
        protected removeObjectValue(arg0: java.lang.String | string): void
        public getRootName(): java.lang.String
        public abstract canNodeAppear(arg0: java.lang.String | string, arg1: javax.imageio.ImageTypeSpecifier): boolean
        public getElementMinChildren(arg0: java.lang.String | string): number
        public getElementMaxChildren(arg0: java.lang.String | string): number
        public getElementDescription(arg0: java.lang.String | string, arg1: java.util.Locale): java.lang.String
        public getChildPolicy(arg0: java.lang.String | string): number
        public getChildNames(arg0: java.lang.String | string): java.lang.String[]
        public getAttributeNames(arg0: java.lang.String | string): java.lang.String[]
        public getAttributeValueType(arg0: java.lang.String | string, arg1: java.lang.String | string): number
        public getAttributeDataType(arg0: java.lang.String | string, arg1: java.lang.String | string): number
        public isAttributeRequired(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
        public getAttributeDefaultValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        public getAttributeEnumerations(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String[]
        public getAttributeMinValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        public getAttributeMaxValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        public getAttributeListMinLength(arg0: java.lang.String | string, arg1: java.lang.String | string): number
        public getAttributeListMaxLength(arg0: java.lang.String | string, arg1: java.lang.String | string): number
        public getAttributeDescription(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.Locale): java.lang.String
        public getObjectValueType(arg0: java.lang.String | string): number
        public getObjectClass(arg0: java.lang.String | string): java.lang.Class<unknown>
        public getObjectDefaultValue(arg0: java.lang.String | string): java.lang.Object
        public getObjectEnumerations(arg0: java.lang.String | string): java.lang.Object[]
        public getObjectMinValue(arg0: java.lang.String | string): java.lang.Comparable<unknown>
        public getObjectMaxValue(arg0: java.lang.String | string): java.lang.Comparable<unknown>
        public getObjectArrayMinLength(arg0: java.lang.String | string): number
        public getObjectArrayMaxLength(arg0: java.lang.String | string): number
        public static getStandardFormatInstance(): javax.imageio.metadata.IIOMetadataFormat
      }

    }
  }
}
