declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace jpeg {

        class JPEGHuffmanTable {

          public static readonly StdDCLuminance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
          public static readonly StdDCChrominance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
          public static readonly StdACLuminance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
          public static readonly StdACChrominance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
          public constructor(arg0: short[], arg1: short[])
          public getLengths(): short[]
          public getValues(): short[]
          public toString(): java.lang.String
        }

      }
    }
  }
}
