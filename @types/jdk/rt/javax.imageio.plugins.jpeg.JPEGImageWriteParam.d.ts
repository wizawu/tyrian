declare namespace javax {
    namespace imageio {
        namespace plugins {
            namespace jpeg {
                class JPEGImageWriteParam extends javax.imageio.ImageWriteParam {
                    public constructor(arg0: java.util.Locale)
                    public unsetCompression(): void
                    public isCompressionLossless(): boolean
                    public getCompressionQualityDescriptions(): java.lang.String[]
                    public getCompressionQualityValues(): float[]
                    public areTablesSet(): boolean
                    public setEncodeTables(arg0: javax.imageio.plugins.jpeg.JPEGQTable[], arg1: javax.imageio.plugins.jpeg.JPEGHuffmanTable[], arg2: javax.imageio.plugins.jpeg.JPEGHuffmanTable[]): void
                    public unsetEncodeTables(): void
                    public getQTables(): javax.imageio.plugins.jpeg.JPEGQTable[]
                    public getDCHuffmanTables(): javax.imageio.plugins.jpeg.JPEGHuffmanTable[]
                    public getACHuffmanTables(): javax.imageio.plugins.jpeg.JPEGHuffmanTable[]
                    public setOptimizeHuffmanTables(arg0: boolean): void
                    public getOptimizeHuffmanTables(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}