declare namespace java {
  namespace util {
    namespace prefs {

      abstract class Preferences {
        public static readonly MAX_KEY_LENGTH: int
        public static readonly MAX_VALUE_LENGTH: int
        public static readonly MAX_NAME_LENGTH: int
        public static userNodeForPackage(arg0: java.lang.Class<unknown>): java.util.prefs.Preferences
        public static systemNodeForPackage(arg0: java.lang.Class<unknown>): java.util.prefs.Preferences
        public static userRoot(): java.util.prefs.Preferences
        public static systemRoot(): java.util.prefs.Preferences
        protected constructor()
        public abstract put(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        public abstract get(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        public abstract remove(arg0: java.lang.String | string): void
        public abstract clear(): void
        public abstract putInt(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
        public abstract getInt(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
        public abstract putLong(arg0: java.lang.String | string, arg1: number | java.lang.Long): void
        public abstract getLong(arg0: java.lang.String | string, arg1: number | java.lang.Long): number
        public abstract putBoolean(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
        public abstract getBoolean(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): boolean
        public abstract putFloat(arg0: java.lang.String | string, arg1: number | java.lang.Float): void
        public abstract getFloat(arg0: java.lang.String | string, arg1: number | java.lang.Float): number
        public abstract putDouble(arg0: java.lang.String | string, arg1: number | java.lang.Double): void
        public abstract getDouble(arg0: java.lang.String | string, arg1: number | java.lang.Double): number
        public abstract putByteArray(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[]): void
        public abstract getByteArray(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[]): number[]
        public abstract keys(): java.lang.String[]
        public abstract childrenNames(): java.lang.String[]
        public abstract parent(): java.util.prefs.Preferences
        public abstract node(arg0: java.lang.String | string): java.util.prefs.Preferences
        public abstract nodeExists(arg0: java.lang.String | string): boolean
        public abstract removeNode(): void
        public abstract name(): java.lang.String
        public abstract absolutePath(): java.lang.String
        public abstract isUserNode(): boolean
        public abstract toString(): java.lang.String
        public abstract flush(): void
        public abstract sync(): void
        public abstract addPreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener | java.util.prefs.PreferenceChangeListener$$lambda): void
        public abstract removePreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener | java.util.prefs.PreferenceChangeListener$$lambda): void
        public abstract addNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
        public abstract removeNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
        public abstract exportNode(arg0: java.io.OutputStream): void
        public abstract exportSubtree(arg0: java.io.OutputStream): void
        public static importPreferences(arg0: java.io.InputStream): void
      }

    }
  }
}
