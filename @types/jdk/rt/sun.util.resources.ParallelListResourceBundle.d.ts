declare namespace sun {
    namespace util {
        namespace resources {
            abstract class ParallelListResourceBundle extends java.util.ResourceBundle {
                protected constructor()
                protected getContents(): java.lang.Object[][]
                public setParallelContents(arg0: sun.util.resources.OpenListResourceBundle): void
                protected handleGetObject(arg0: java.lang.String | string): java.lang.Object
                public getKeys(): java.util.Enumeration<java.lang.String>
                public containsKey(arg0: java.lang.String | string): boolean
                protected handleKeySet(): java.util.Set<java.lang.String>
                public keySet(): java.util.Set<java.lang.String>
                public static class: java.lang.Class<any>
            }
        }
    }
}