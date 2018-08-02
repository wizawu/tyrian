declare namespace java {
    namespace awt {
        namespace image {
            abstract class BufferStrategy {
                public constructor()
                public getCapabilities(): java.awt.BufferCapabilities
                public getDrawGraphics(): java.awt.Graphics
                public contentsLost(): boolean
                public contentsRestored(): boolean
                public show(): void
                public dispose(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}