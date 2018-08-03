declare namespace java {
    namespace awt {
        abstract class GraphicsConfigTemplate implements java.io.Serializable {
            public static readonly REQUIRED: int
            public static readonly PREFERRED: int
            public static readonly UNNECESSARY: int
            public constructor()
            public abstract getBestConfiguration(arg0: java.awt.GraphicsConfiguration[]): java.awt.GraphicsConfiguration
            public abstract isGraphicsConfigSupported(arg0: java.awt.GraphicsConfiguration): boolean
            public static class: java.lang.Class<any>
        }
    }
}