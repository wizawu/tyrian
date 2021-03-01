declare namespace java {
  namespace util {
    namespace prefs {

      abstract class AbstractPreferences extends java.util.prefs.Preferences {

        static readonly CODE_POINT_U0000: int
        readonly parent: java.util.prefs.AbstractPreferences
        protected newNode: boolean
        protected readonly lock: java.lang.Object
        protected constructor(arg0: java.util.prefs.AbstractPreferences, arg1: java.lang.String)
        public put(arg0: java.lang.String, arg1: java.lang.String): void
        public get(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        public remove(arg0: java.lang.String): void
        public clear(): void
        public putInt(arg0: java.lang.String, arg1: int): void
        public getInt(arg0: java.lang.String, arg1: int): int
        public putLong(arg0: java.lang.String, arg1: long): void
        public getLong(arg0: java.lang.String, arg1: long): long
        public putBoolean(arg0: java.lang.String, arg1: boolean): void
        public getBoolean(arg0: java.lang.String, arg1: boolean): boolean
        public putFloat(arg0: java.lang.String, arg1: float): void
        public getFloat(arg0: java.lang.String, arg1: float): float
        public putDouble(arg0: java.lang.String, arg1: double): void
        public getDouble(arg0: java.lang.String, arg1: double): double
        public putByteArray(arg0: java.lang.String, arg1: byte[]): void
        public getByteArray(arg0: java.lang.String, arg1: byte[]): byte[]
        public keys(): java.lang.String[]
        public childrenNames(): java.lang.String[]
        protected readonly cachedChildren(): java.util.prefs.AbstractPreferences[]
        public parent(): java.util.prefs.Preferences
        public node(arg0: java.lang.String): java.util.prefs.Preferences
        public nodeExists(arg0: java.lang.String): boolean
        public removeNode(): void
        public name(): java.lang.String
        public absolutePath(): java.lang.String
        public isUserNode(): boolean
        public addPreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener): void
        public removePreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener): void
        public addNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
        public removeNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
        protected abstract putSpi(arg0: java.lang.String, arg1: java.lang.String): void
        protected abstract getSpi(arg0: java.lang.String): java.lang.String
        protected abstract removeSpi(arg0: java.lang.String): void
        protected abstract removeNodeSpi(): void
        protected abstract keysSpi(): java.lang.String[]
        protected abstract childrenNamesSpi(): java.lang.String[]
        protected getChild(arg0: java.lang.String): java.util.prefs.AbstractPreferences
        protected abstract childSpi(arg0: java.lang.String): java.util.prefs.AbstractPreferences
        public toString(): java.lang.String
        public sync(): void
        protected abstract syncSpi(): void
        public flush(): void
        protected abstract flushSpi(): void
        protected isRemoved(): boolean
        prefListeners(): java.util.prefs.PreferenceChangeListener[]
        nodeListeners(): java.util.prefs.NodeChangeListener[]
        public exportNode(arg0: java.io.OutputStream): void
        public exportSubtree(arg0: java.io.OutputStream): void
      }

    }
  }
}
