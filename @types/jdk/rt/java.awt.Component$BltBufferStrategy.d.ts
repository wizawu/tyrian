declare namespace java {
    namespace awt {
        class Component$BltBufferStrategy extends java.awt.image.BufferStrategy {
            protected caps: java.awt.BufferCapabilities
            protected backBuffers: java.awt.image.VolatileImage[]
            protected validatedContents: boolean
            protected width: int
            protected height: int
            protected constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.BufferCapabilities)
            public dispose(): void
            protected createBackBuffers(arg0: int): void
            public getCapabilities(): java.awt.BufferCapabilities
            public getDrawGraphics(): java.awt.Graphics
            public show(): void
            protected revalidate(): void
            public contentsLost(): boolean
            public contentsRestored(): boolean
            public static class: java.lang.Class<any>
        }
    }
}