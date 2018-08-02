declare namespace sun {
    namespace util {
        namespace resources {
            abstract class OpenListResourceBundle extends java.util.ResourceBundle {
                protected constructor()
                protected handleGetObject(arg0: java.lang.String | string): java.lang.Object
                public getKeys(): java.util.Enumeration<java.lang.String>
                protected handleKeySet(): java.util.Set<java.lang.String>
                public keySet(): java.util.Set<java.lang.String>
                protected getContents(): java.lang.Object[][]
                protected createMap<K, V>(arg0: int): java.util.Map<K, V>
                protected createSet<E>(): java.util.Set<E>
                public static class: java.lang.Class<any>
            }
        }
    }
}