declare namespace javax {
  namespace management {

    class ObjectName implements java.lang.Comparable<javax.management.ObjectName>, javax.management.QueryExp {

      public static readonly WILDCARD: javax.management.ObjectName
      public static getInstance(arg0: java.lang.String): javax.management.ObjectName
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): javax.management.ObjectName
      public static getInstance(arg0: java.lang.String, arg1: java.util.Hashtable<java.lang.String,java.lang.String>): javax.management.ObjectName
      public static getInstance(arg0: javax.management.ObjectName): javax.management.ObjectName
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.util.Hashtable<java.lang.String,java.lang.String>)
      public isPattern(): boolean
      public isDomainPattern(): boolean
      public isPropertyPattern(): boolean
      public isPropertyListPattern(): boolean
      public isPropertyValuePattern(): boolean
      public isPropertyValuePattern(arg0: java.lang.String): boolean
      public getCanonicalName(): java.lang.String
      public getDomain(): java.lang.String
      public getKeyProperty(arg0: java.lang.String): java.lang.String
      public getKeyPropertyList(): java.util.Hashtable<java.lang.String,java.lang.String>
      public getKeyPropertyListString(): java.lang.String
      public getCanonicalKeyPropertyListString(): java.lang.String
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public static quote(arg0: java.lang.String): java.lang.String
      public static unquote(arg0: java.lang.String): java.lang.String
      public apply(arg0: javax.management.ObjectName): boolean
      public setMBeanServer(arg0: javax.management.MBeanServer): void
      public compareTo(arg0: javax.management.ObjectName): int
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
