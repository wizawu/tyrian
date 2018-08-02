declare namespace javax {
    namespace imageio {
        class ImageReadParam extends javax.imageio.IIOParam {
            protected canSetSourceRenderSize: boolean
            protected sourceRenderSize: java.awt.Dimension
            protected destination: java.awt.image.BufferedImage
            protected destinationBands: int[]
            protected minProgressivePass: int
            protected numProgressivePasses: int
            public constructor()
            public setDestinationType(arg0: javax.imageio.ImageTypeSpecifier): void
            public setDestination(arg0: java.awt.image.BufferedImage): void
            public getDestination(): java.awt.image.BufferedImage
            public setDestinationBands(arg0: int[]): void
            public getDestinationBands(): int[]
            public canSetSourceRenderSize(): boolean
            public setSourceRenderSize(arg0: java.awt.Dimension): void
            public getSourceRenderSize(): java.awt.Dimension
            public setSourceProgressivePasses(arg0: int, arg1: int): void
            public getSourceMinProgressivePass(): int
            public getSourceMaxProgressivePass(): int
            public getSourceNumProgressivePasses(): int
            public static class: java.lang.Class<any>
        }
    }
}