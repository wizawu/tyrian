declare namespace javax {
    namespace xml {
        namespace bind {
            abstract class SchemaOutputResolver {
                public constructor()
                public abstract createOutput(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.transform.Result
                public static class: java.lang.Class<any>
            }
            interface SchemaOutputResolver$$Lambda {
                (arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.transform.Result
            }
        }
    }
}