declare namespace java {
  namespace io {

    class ObjectStreamClass implements java.io.Serializable {
      public static readonly NO_FIELDS: java.io.ObjectStreamField[]
      public static lookup(arg0: java.lang.Class<unknown>): java.io.ObjectStreamClass
      public static lookupAny(arg0: java.lang.Class<unknown>): java.io.ObjectStreamClass
      public getName(): java.lang.String
      public getSerialVersionUID(): long
      public forClass(): java.lang.Class<unknown>
      public getFields(): java.io.ObjectStreamField[]
      public getField(arg0: java.lang.String): java.io.ObjectStreamField
      public toString(): java.lang.String
      static lookup(arg0: java.lang.Class<unknown>, arg1: boolean): java.io.ObjectStreamClass
      constructor()
      initProxy(arg0: java.lang.Class<unknown>, arg1: java.lang.ClassNotFoundException, arg2: java.io.ObjectStreamClass): void
      initNonProxy(arg0: java.io.ObjectStreamClass, arg1: java.lang.Class<unknown>, arg2: java.lang.ClassNotFoundException, arg3: java.io.ObjectStreamClass): void
      readNonProxy(arg0: java.io.ObjectInputStream): void
      writeNonProxy(arg0: java.io.ObjectOutputStream): void
      getResolveException(): java.lang.ClassNotFoundException
      checkInitialized(): void
      checkDeserialize(): void
      checkSerialize(): void
      checkDefaultSerialize(): void
      getSuperDesc(): java.io.ObjectStreamClass
      getLocalDesc(): java.io.ObjectStreamClass
      getFields(arg0: boolean): java.io.ObjectStreamField[]
      getField(arg0: java.lang.String, arg1: java.lang.Class<unknown>): java.io.ObjectStreamField
      isProxy(): boolean
      isEnum(): boolean
      isExternalizable(): boolean
      isSerializable(): boolean
      hasBlockExternalData(): boolean
      hasWriteObjectData(): boolean
      isInstantiable(): boolean
      hasWriteObjectMethod(): boolean
      hasReadObjectMethod(): boolean
      hasReadObjectNoDataMethod(): boolean
      hasWriteReplaceMethod(): boolean
      hasReadResolveMethod(): boolean
      newInstance(): java.lang.Object
      invokeWriteObject(arg0: java.lang.Object, arg1: java.io.ObjectOutputStream): void
      invokeReadObject(arg0: java.lang.Object, arg1: java.io.ObjectInputStream): void
      invokeReadObjectNoData(arg0: java.lang.Object): void
      invokeWriteReplace(arg0: java.lang.Object): java.lang.Object
      invokeReadResolve(arg0: java.lang.Object): java.lang.Object
      getClassDataLayout(): java.io.ObjectStreamClass$ClassDataSlot[]
      getPrimDataSize(): int
      getNumObjFields(): int
      getPrimFieldValues(arg0: java.lang.Object, arg1: byte[]): void
      setPrimFieldValues(arg0: java.lang.Object, arg1: byte[]): void
      getObjFieldValues(arg0: java.lang.Object, arg1: java.lang.Object[]): void
      checkObjFieldValueTypes(arg0: java.lang.Object, arg1: java.lang.Object[]): void
      setObjFieldValues(arg0: java.lang.Object, arg1: java.lang.Object[]): void
      static processQueue(arg0: java.lang.ref.ReferenceQueue<java.lang.Class<unknown>>, arg1: java.util.concurrent.ConcurrentMap<java.lang.ref.WeakReference<java.lang.Class<unknown>>,unknown>): void
    }

  }
}
