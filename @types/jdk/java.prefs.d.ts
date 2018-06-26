declare namespace java {
    namespace util {
        namespace prefs {
            abstract class AbstractPreferences extends java.util.prefs.Preferences {
                protected newNode: boolean
                protected lock: java.lang.Object
                protected constructor(arg0: java.util.prefs.AbstractPreferences, arg1: java.lang.String | string)
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
                protected cachedChildren(): java.util.prefs.AbstractPreferences[]
                public parent(): java.util.prefs.Preferences
                public node(arg0: java.lang.String | string): java.util.prefs.Preferences
                public nodeExists(arg0: java.lang.String | string): boolean
                public removeNode(): void
                public name(): string
                public absolutePath(): string
                public isUserNode(): boolean
                public addPreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener): void
                public removePreferenceChangeListener(arg0: java.util.prefs.PreferenceChangeListener): void
                public addNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
                public removeNodeChangeListener(arg0: java.util.prefs.NodeChangeListener): void
                protected putSpi(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                protected getSpi(arg0: java.lang.String | string): string
                protected removeSpi(arg0: java.lang.String | string): void
                protected removeNodeSpi(): void
                protected keysSpi(): java.lang.String[]
                protected childrenNamesSpi(): java.lang.String[]
                protected getChild(arg0: java.lang.String | string): java.util.prefs.AbstractPreferences
                protected childSpi(arg0: java.lang.String | string): java.util.prefs.AbstractPreferences
                public toString(): string
                public sync(): void
                protected syncSpi(): void
                public flush(): void
                protected flushSpi(): void
                protected isRemoved(): boolean
                public exportNode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public exportSubtree(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public static class: java.lang.Class<any>
            }
            class BackingStoreException extends java.lang.Exception {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.Throwable)
                public static class: java.lang.Class<any>
            }
            class Base64 {
                public static main(arg0: java.lang.String[]): void
                public static class: java.lang.Class<any>
            }
            class InvalidPreferencesFormatException extends java.lang.Exception {
                public constructor(arg0: java.lang.Throwable)
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                public static class: java.lang.Class<any>
            }
            class NodeChangeEvent extends java.util.EventObject {
                public constructor(arg0: java.util.prefs.Preferences, arg1: java.util.prefs.Preferences)
                public getParent(): java.util.prefs.Preferences
                public getChild(): java.util.prefs.Preferences
                public static class: java.lang.Class<any>
            }
            interface NodeChangeListener extends java.util.EventListener {
                childAdded(arg0: java.util.prefs.NodeChangeEvent): void
                childRemoved(arg0: java.util.prefs.NodeChangeEvent): void
            }
            class PreferenceChangeEvent extends java.util.EventObject {
                public constructor(arg0: java.util.prefs.Preferences, arg1: java.lang.String | string, arg2: java.lang.String | string)
                public getNode(): java.util.prefs.Preferences
                public getKey(): string
                public getNewValue(): string
                public static class: java.lang.Class<any>
            }
            interface PreferenceChangeListener extends java.util.EventListener {
                preferenceChange(arg0: java.util.prefs.PreferenceChangeEvent): void
            }
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
            interface PreferencesFactory {
                systemRoot(): java.util.prefs.Preferences
                userRoot(): java.util.prefs.Preferences
            }
            class XmlSupport {
                public static class: java.lang.Class<any>
            }
        }
    }
}
