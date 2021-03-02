declare namespace java {
  namespace beans {

    class FeatureDescriptor {
      public constructor()
      public getName(): java.lang.String
      public setName(arg0: java.lang.String | string): void
      public getDisplayName(): java.lang.String
      public setDisplayName(arg0: java.lang.String | string): void
      public isExpert(): boolean
      public setExpert(arg0: boolean | java.lang.Boolean): void
      public isHidden(): boolean
      public setHidden(arg0: boolean | java.lang.Boolean): void
      public isPreferred(): boolean
      public setPreferred(arg0: boolean | java.lang.Boolean): void
      public getShortDescription(): java.lang.String
      public setShortDescription(arg0: java.lang.String | string): void
      public setValue(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      public getValue(arg0: java.lang.String | string): java.lang.Object
      public attributeNames(): java.util.Enumeration<java.lang.String>
      constructor(arg0: java.beans.FeatureDescriptor, arg1: java.beans.FeatureDescriptor)
      constructor(arg0: java.beans.FeatureDescriptor)
      setTransient(arg0: java.beans.Transient): void
      isTransient(): boolean
      setClass0(arg0: java.lang.Class<unknown>): void
      getClass0(): java.lang.Class<unknown>
      static getSoftReference<T>(arg0: T): java.lang.ref.Reference<T>
      static getWeakReference<T>(arg0: T): java.lang.ref.Reference<T>
      static getReturnType(arg0: java.lang.Class<unknown>, arg1: java.lang.reflect.Method): java.lang.Class<unknown>
      static getParameterTypes(arg0: java.lang.Class<unknown>, arg1: java.lang.reflect.Method): java.lang.Class<unknown>[]
      public toString(): java.lang.String
      appendTo(arg0: java.lang.StringBuilder): void
      static appendTo(arg0: java.lang.StringBuilder, arg1: java.lang.String | string, arg2: java.lang.ref.Reference<unknown>): void
      static appendTo(arg0: java.lang.StringBuilder, arg1: java.lang.String | string, arg2: java.lang.Object | any): void
      static appendTo(arg0: java.lang.StringBuilder, arg1: java.lang.String | string, arg2: boolean | java.lang.Boolean): void
    }

  }
}
