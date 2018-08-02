declare namespace java {
    namespace awt {
        class Component$FlipBufferStrategy extends java.awt.image.BufferStrategy {
            protected numBuffers: int
            protected caps: java.awt.BufferCapabilities
            protected drawBuffer: java.awt.Image
            protected drawVBuffer: java.awt.image.VolatileImage
            protected validatedContents: boolean
            protected constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.BufferCapabilities)
            protected createBuffers(arg0: int, arg1: java.awt.BufferCapabilities): void
            protected getBackBuffer(): java.awt.Image
            protected flip(arg0: java.awt.BufferCapabilities$FlipContents): void
            protected destroyBuffers(): void
            public getCapabilities(): java.awt.BufferCapabilities
            public getDrawGraphics(): java.awt.Graphics
            protected revalidate(): void
            public contentsLost(): boolean
            public contentsRestored(): boolean
            public show(): void
            public dispose(): void
            public static class: java.lang.Class<any>
        }
    }
}