declare namespace java {
    namespace awt {
        abstract class Image {
            protected accelerationPriority: float
            public static UndefinedProperty: java.lang.Object
            public static SCALE_DEFAULT: int
            public static SCALE_FAST: int
            public static SCALE_SMOOTH: int
            public static SCALE_REPLICATE: int
            public static SCALE_AREA_AVERAGING: int
            public constructor()
            public getWidth(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
            public getHeight(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
            public getSource(): java.awt.image.ImageProducer
            public getGraphics(): java.awt.Graphics
            public getProperty(arg0: java.lang.String | string, arg1: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): java.lang.Object
            public getScaledInstance(arg0: int, arg1: int, arg2: int): java.awt.Image
            public flush(): void
            public getCapabilities(arg0: java.awt.GraphicsConfiguration): java.awt.ImageCapabilities
            public setAccelerationPriority(arg0: float): void
            public getAccelerationPriority(): float
            public static class: java.lang.Class<any>
        }
    }
}