declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace jpeg {
        class JPEGHuffmanTable {
          public static readonly StdDCLuminance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
          public static readonly StdDCChrominance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
          public static readonly StdACLuminance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
          public static readonly StdACChrominance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
          public constructor(arg0: number[] | java.lang.Short[], arg1: number[] | java.lang.Short[])
          public getLengths(): number[]
          public getValues(): number[]
          public toString(): java.lang.String
        }
      }
    }
  }
}
