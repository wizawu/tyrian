declare namespace javax {
  namespace management {
    namespace openmbean {

      class OpenMBeanAttributeInfoSupport extends javax.management.MBeanAttributeInfo implements javax.management.openmbean.OpenMBeanAttributeInfo {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<unknown>, arg3: boolean, arg4: boolean, arg5: boolean)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<unknown>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: javax.management.Descriptor)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T, arg7: T[])
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T, arg7: java.lang.Comparable<T>, arg8: java.lang.Comparable<T>)
        static check(arg0: javax.management.openmbean.OpenMBeanParameterInfo): void
        static compare(arg0: java.lang.Object, arg1: java.lang.Object): int
        static makeDescriptor<T>(arg0: javax.management.openmbean.OpenType<T>, arg1: T, arg2: T[], arg3: java.lang.Comparable<T>, arg4: java.lang.Comparable<T>): javax.management.Descriptor
        static makeDescriptor<T>(arg0: javax.management.openmbean.OpenType<T>, arg1: T, arg2: java.util.Set<T>, arg3: java.lang.Comparable<T>, arg4: java.lang.Comparable<T>): javax.management.Descriptor
        static valueFrom<T>(arg0: javax.management.Descriptor, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<T>): T
        static valuesFrom<T>(arg0: javax.management.Descriptor, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<T>): java.util.Set<T>
        static comparableValueFrom<T>(arg0: javax.management.Descriptor, arg1: java.lang.String, arg2: javax.management.openmbean.OpenType<T>): java.lang.Comparable<unknown>
        static cast<T>(arg0: java.lang.Object): T
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
        static isValue(arg0: javax.management.openmbean.OpenMBeanParameterInfo, arg1: java.lang.Object): boolean
        public equals(arg0: java.lang.Object): boolean
        static equal(arg0: javax.management.openmbean.OpenMBeanParameterInfo, arg1: javax.management.openmbean.OpenMBeanParameterInfo): boolean
        public hashCode(): int
        static hashCode(arg0: javax.management.openmbean.OpenMBeanParameterInfo): int
        public toString(): java.lang.String
        static toString(arg0: javax.management.openmbean.OpenMBeanParameterInfo): java.lang.String
      }

    }
  }
}
