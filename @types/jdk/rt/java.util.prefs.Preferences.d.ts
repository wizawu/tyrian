declare namespace java {
    namespace util {
        namespace prefs {
abstract class Preferences {
    public static MAX_KEY_LENGTH: int
    public static MAX_VALUE_LENGTH: int
    public static MAX_NAME_LENGTH: int
    public static userNodeForPackage(arg0: java.lang.Class<any>): java.util.prefs.Preferences
    public static systemNodeForPackage(arg0: java.lang.Class<any>): java.util.prefs.Preferences
    public static userRoot(): java.util.prefs.Preferences
    public static systemRoot(): java.util.prefs.Preferences
    protected constructor()
    public put(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public get(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public remove(arg0: java.lang.String | string): void
    public clear(): void
    public putInt(arg0: java.lang.String | string, arg1: int): void
    public getInt(arg0: java.lang.String | string, arg1: int): int
    public putLong(arg0: java.lang.String | string, arg1: long): void
    public getLong(arg0: java.lang.String | string, arg1: long): long
    public putBoolean(arg0: java.lang.String | string, arg1: boolean): void
    public getBoolean(arg0: java.lang.String | string, arg1: boolean): boolean
    public putFloat(arg0: java.lang.String | string, arg1: float): void
    public getFloat(arg0: java.lang.String | string, arg1: float): float
    public putDouble(arg0: java.lang.String | string, arg1: double): void
    public getDouble(arg0: java.lang.String | string, arg1: double): double
    public putByteArray(arg0: java.lang.String | string, arg1: byte[]): void
    public getByteArray(arg0: java.lang.String | string, arg1: byte[]): byte[]
    public keys(): java.lang.String[]
    public childrenNames(): java.lang.String[]
    public parent(): java.util.prefs.Preferences
    public node(arg0: java.lang.String | string): java.util.prefs.Preferences
    public nodeExists(arg0: java.lang.String | string): boolean
    public removeNode(): void
    public name(): string
    public absolutePath(): string
    public isUserNode(): boolean
    public toString(): string
    public flush(): void
    public sync(): void
    public addPreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener): void
    public removePreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener): void
    public addNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
    public removeNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
    public exportNode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public exportSubtree(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public static importPreferences(arg0: java.io.InputStream): void
    public static class: java.lang.Class<any>
}

        }
    }
}