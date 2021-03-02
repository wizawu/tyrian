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
        public abstract put(arg0: java.lang.String, arg1: java.lang.String): void
        public abstract get(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        public abstract remove(arg0: java.lang.String): void
        public abstract clear(): void
        public abstract putInt(arg0: java.lang.String, arg1: int): void
        public abstract getInt(arg0: java.lang.String, arg1: int): int
        public abstract putLong(arg0: java.lang.String, arg1: long): void
        public abstract getLong(arg0: java.lang.String, arg1: long): long
        public abstract putBoolean(arg0: java.lang.String, arg1: boolean): void
        public abstract getBoolean(arg0: java.lang.String, arg1: boolean): boolean
        public abstract putFloat(arg0: java.lang.String, arg1: float): void
        public abstract getFloat(arg0: java.lang.String, arg1: float): float
        public abstract putDouble(arg0: java.lang.String, arg1: double): void
        public abstract getDouble(arg0: java.lang.String, arg1: double): double
        public abstract putByteArray(arg0: java.lang.String, arg1: byte[]): void
        public abstract getByteArray(arg0: java.lang.String, arg1: byte[]): byte[]
        public abstract keys(): java.lang.String[]
        public abstract childrenNames(): java.lang.String[]
        public abstract parent(): java.util.prefs.Preferences
        public abstract node(arg0: java.lang.String): java.util.prefs.Preferences
        public abstract nodeExists(arg0: java.lang.String): boolean
        public abstract removeNode(): void
        public abstract name(): java.lang.String
        public abstract absolutePath(): java.lang.String
        public abstract isUserNode(): boolean
        public abstract toString(): java.lang.String
        public abstract flush(): void
        public abstract sync(): void
        public abstract addPreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener): void
        public abstract removePreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener): void
        public abstract addNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
        public abstract removeNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
        public abstract exportNode(arg0: java.io.OutputStream): void
        public abstract exportSubtree(arg0: java.io.OutputStream): void
        public static importPreferences(arg0: java.io.InputStream): void
      }

    }
  }
}
