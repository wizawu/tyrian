declare namespace javax {
  namespace management {
    namespace openmbean {

      class OpenMBeanParameterInfoSupport extends javax.management.MBeanParameterInfo implements javax.management.openmbean.OpenMBeanParameterInfo {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<unknown>)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<unknown>, arg3: javax.management.Descriptor)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<T>, arg3: T)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<T>, arg3: T, arg4: T[])
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<T>, arg3: T, arg4: java.lang.Comparable<T>, arg5: java.lang.Comparable<T>)
        public getOpenType(): javax.management.openmbean.OpenType<unknown>
        public getDefaultValue(): java.lang.Object
        public getLegalValues(): java.util.Set<unknown>
        public getMinValue(): java.lang.Comparable<unknown>
        public getMaxValue(): java.lang.Comparable<unknown>
        public hasDefaultValue(): boolean
        public hasLegalValues(): boolean
        public hasMinValue(): boolean
        public hasMaxValue(): boolean
        public isValue(arg0: java.lang.Object): boolean
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
      }

    }
  }
}
