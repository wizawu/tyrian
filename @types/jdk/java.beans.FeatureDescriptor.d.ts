declare namespace java {
  namespace beans {

    class FeatureDescriptor {
      public constructor()
      public getName(): java.lang.String
      public setName(arg0: java.lang.String): void
      public getDisplayName(): java.lang.String
      public setDisplayName(arg0: java.lang.String): void
      public isExpert(): boolean
      public setExpert(arg0: boolean): void
      public isHidden(): boolean
      public setHidden(arg0: boolean): void
      public isPreferred(): boolean
      public setPreferred(arg0: boolean): void
      public getShortDescription(): java.lang.String
      public setShortDescription(arg0: java.lang.String): void
      public setValue(arg0: java.lang.String, arg1: java.lang.Object): void
      public getValue(arg0: java.lang.String): java.lang.Object
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
      static appendTo(arg0: java.lang.StringBuilder, arg1: java.lang.String, arg2: java.lang.ref.Reference<unknown>): void
      static appendTo(arg0: java.lang.StringBuilder, arg1: java.lang.String, arg2: java.lang.Object): void
      static appendTo(arg0: java.lang.StringBuilder, arg1: java.lang.String, arg2: boolean): void
    }

  }
}
