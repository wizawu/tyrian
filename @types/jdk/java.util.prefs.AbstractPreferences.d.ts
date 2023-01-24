declare namespace java {
  namespace util {
    namespace prefs {
      abstract class AbstractPreferences extends java.util.prefs.Preferences {
        static readonly CODE_POINT_U0000: int
        readonly parent: java.util.prefs.AbstractPreferences
        protected newNode: boolean
        protected readonly lock: java.lang.Object
        protected constructor(arg0: java.util.prefs.AbstractPreferences, arg1: java.lang.String | string)
        public put(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        public get(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        public remove(arg0: java.lang.String | string): void
        public clear(): void
        public putInt(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
        public getInt(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
        public putLong(arg0: java.lang.String | string, arg1: number | java.lang.Long): void
        public getLong(arg0: java.lang.String | string, arg1: number | java.lang.Long): number
        public putBoolean(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
        public getBoolean(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): boolean
        public putFloat(arg0: java.lang.String | string, arg1: number | java.lang.Float): void
        public getFloat(arg0: java.lang.String | string, arg1: number | java.lang.Float): number
        public putDouble(arg0: java.lang.String | string, arg1: number | java.lang.Double): void
        public getDouble(arg0: java.lang.String | string, arg1: number | java.lang.Double): number
        public putByteArray(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[]): void
        public getByteArray(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[]): number[]
        public keys(): java.lang.String[]
        public childrenNames(): java.lang.String[]
        protected cachedChildren(): java.util.prefs.AbstractPreferences[]
        public parent(): java.util.prefs.Preferences
        public node(arg0: java.lang.String | string): java.util.prefs.Preferences
        public nodeExists(arg0: java.lang.String | string): boolean
        public removeNode(): void
        public name(): java.lang.String
        public absolutePath(): java.lang.String
        public isUserNode(): boolean
        public addPreferenceChangeListener(
          arg0: java.util.prefs.PreferenceChangeListener | java.util.prefs.PreferenceChangeListener$$lambda
        ): void
        public removePreferenceChangeListener(
          arg0: java.util.prefs.PreferenceChangeListener | java.util.prefs.PreferenceChangeListener$$lambda
        ): void
        public addNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
        public removeNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
        protected abstract putSpi(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        protected abstract getSpi(arg0: java.lang.String | string): java.lang.String
        protected abstract removeSpi(arg0: java.lang.String | string): void
        protected abstract removeNodeSpi(): void
        protected abstract keysSpi(): java.lang.String[]
        protected abstract childrenNamesSpi(): java.lang.String[]
        protected getChild(arg0: java.lang.String | string): java.util.prefs.AbstractPreferences
        protected abstract childSpi(arg0: java.lang.String | string): java.util.prefs.AbstractPreferences
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
