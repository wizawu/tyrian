declare namespace javax {
    namespace imageio {
        namespace plugins {
            namespace jpeg {
                class JPEGHuffmanTable {
                    public static StdDCLuminance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
                    public static StdDCChrominance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
                    public static StdACLuminance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
                    public static StdACChrominance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
                    public constructor(arg0: short[], arg1: short[])
                    public getLengths(): short[]
                    public getValues(): short[]
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}