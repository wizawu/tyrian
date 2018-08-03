declare namespace javax {
    namespace management {
        class ObjectName implements java.lang.Comparable<javax.management.ObjectName> , javax.management.QueryExp {
            public static readonly WILDCARD: javax.management.ObjectName
            public static getInstance(arg0: java.lang.String | string): javax.management.ObjectName
            public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.management.ObjectName
            public static getInstance(arg0: java.lang.String | string, arg1: java.util.Hashtable<java.lang.String, java.lang.String>): javax.management.ObjectName
            public static getInstance(arg0: javax.management.ObjectName): javax.management.ObjectName
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.util.Hashtable<java.lang.String, java.lang.String>)
            public isPattern(): boolean
            public isDomainPattern(): boolean
            public isPropertyPattern(): boolean
            public isPropertyListPattern(): boolean
            public isPropertyValuePattern(): boolean
            public isPropertyValuePattern(arg0: java.lang.String | string): boolean
            public getCanonicalName(): string
            public getDomain(): string
            public getKeyProperty(arg0: java.lang.String | string): string
            public getKeyPropertyList(): java.util.Hashtable<java.lang.String, java.lang.String>
            public getKeyPropertyListString(): string
            public getCanonicalKeyPropertyListString(): string
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static quote(arg0: java.lang.String | string): string
            public static unquote(arg0: java.lang.String | string): string
            public apply(arg0: javax.management.ObjectName): boolean
            public setMBeanServer(arg0: javax.management.MBeanServer): void
            public compareTo(arg0: javax.management.ObjectName): int
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}