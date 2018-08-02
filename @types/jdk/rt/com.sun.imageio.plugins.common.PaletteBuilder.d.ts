declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace common {
                    class PaletteBuilder {
                        protected static MAXLEVEL: int
                        protected src: java.awt.image.RenderedImage
                        protected srcColorModel: java.awt.image.ColorModel
                        protected srcRaster: java.awt.image.Raster
                        protected requiredSize: int
                        protected root: com.sun.imageio.plugins.common.PaletteBuilder$ColorNode
                        protected numNodes: int
                        protected maxNodes: int
                        protected currLevel: int
                        protected currSize: int
                        protected reduceList: com.sun.imageio.plugins.common.PaletteBuilder$ColorNode[]
                        protected palette: com.sun.imageio.plugins.common.PaletteBuilder$ColorNode[]
                        protected transparency: int
                        protected transColor: com.sun.imageio.plugins.common.PaletteBuilder$ColorNode
                        public static createIndexedImage(arg0: java.awt.image.RenderedImage): java.awt.image.RenderedImage
                        public static createIndexColorModel(arg0: java.awt.image.RenderedImage): java.awt.image.IndexColorModel
                        public static canCreatePalette(arg0: javax.imageio.ImageTypeSpecifier): boolean
                        public static canCreatePalette(arg0: java.awt.image.RenderedImage): boolean
                        protected getIndexedImage(): java.awt.image.RenderedImage
                        protected constructor(arg0: java.awt.image.RenderedImage)
                        protected constructor(arg0: java.awt.image.RenderedImage, arg1: int)
                        protected findColorIndex(arg0: com.sun.imageio.plugins.common.PaletteBuilder$ColorNode, arg1: java.awt.Color): int
                        protected buildPalette(): void
                        protected insertNode(arg0: com.sun.imageio.plugins.common.PaletteBuilder$ColorNode, arg1: java.awt.Color, arg2: int): com.sun.imageio.plugins.common.PaletteBuilder$ColorNode
                        protected getIndexColorModel(): java.awt.image.IndexColorModel
                        protected findPaletteEntry(arg0: com.sun.imageio.plugins.common.PaletteBuilder$ColorNode, arg1: int, arg2: byte[], arg3: byte[], arg4: byte[]): int
                        protected getBranchIndex(arg0: java.awt.Color, arg1: int): int
                        protected reduceTree(): void
                        protected freeTree(arg0: com.sun.imageio.plugins.common.PaletteBuilder$ColorNode): com.sun.imageio.plugins.common.PaletteBuilder$ColorNode
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}