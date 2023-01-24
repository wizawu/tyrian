declare namespace java {
  namespace lang {
    abstract class ClassValue<T> {
      readonly hashCodeForCache: int
      static readonly HASH_MASK: int
      readonly identity: java.lang.ClassValue$Identity
      protected constructor()
      protected abstract computeValue(arg0: java.lang.Class<unknown>): T
      public get(arg0: java.lang.Class<unknown>): T
      public remove(arg0: java.lang.Class<unknown>): void
      put(arg0: java.lang.Class<unknown>, arg1: T): void
      castEntry(arg0: java.lang.ClassValue$Entry<unknown>): java.lang.ClassValue$Entry<T>
      match(arg0: java.lang.ClassValue$Entry<unknown>): boolean
      version(): java.lang.ClassValue$Version<T>
      bumpVersion(): void
      static makeEntry<T>(arg0: java.lang.ClassValue$Version<T>, arg1: T): java.lang.ClassValue$Entry<T>
    }
  }
}
