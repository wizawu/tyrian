declare namespace java {
    namespace awt {
        abstract class GraphicsConfigTemplate implements java.io.Serializable {
            public static REQUIRED: int
            public static PREFERRED: int
            public static UNNECESSARY: int
            public constructor()
            public getBestConfiguration(arg0: java.awt.GraphicsConfiguration[]): java.awt.GraphicsConfiguration
            public isGraphicsConfigSupported(arg0: java.awt.GraphicsConfiguration): boolean
            public static class: java.lang.Class<any>
        }
    }
}