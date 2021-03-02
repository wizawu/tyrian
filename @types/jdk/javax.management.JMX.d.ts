declare namespace javax {
  namespace management {

    class JMX {
      static readonly proof: javax.management.JMX
      public static readonly DEFAULT_VALUE_FIELD: java.lang.String
      public static readonly IMMUTABLE_INFO_FIELD: java.lang.String
      public static readonly INTERFACE_CLASS_NAME_FIELD: java.lang.String
      public static readonly LEGAL_VALUES_FIELD: java.lang.String
      public static readonly MAX_VALUE_FIELD: java.lang.String
      public static readonly MIN_VALUE_FIELD: java.lang.String
      public static readonly MXBEAN_FIELD: java.lang.String
      public static readonly OPEN_TYPE_FIELD: java.lang.String
      public static readonly ORIGINAL_TYPE_FIELD: java.lang.String
      public static newMBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>): T
      public static newMBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>, arg3: boolean | java.lang.Boolean): T
      public static newMXBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>): T
      public static newMXBeanProxy<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName, arg2: java.lang.Class<T>, arg3: boolean | java.lang.Boolean): T
      public static isMXBeanInterface(arg0: java.lang.Class<unknown>): boolean
    }

  }
}
