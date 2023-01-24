declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace jpeg {
        class JPEGQTable {
          public static readonly K1Luminance: javax.imageio.plugins.jpeg.JPEGQTable
          public static readonly K1Div2Luminance: javax.imageio.plugins.jpeg.JPEGQTable
          public static readonly K2Chrominance: javax.imageio.plugins.jpeg.JPEGQTable
          public static readonly K2Div2Chrominance: javax.imageio.plugins.jpeg.JPEGQTable
          public constructor(arg0: number[] | java.lang.Integer[])
          public getTable(): number[]
          public getScaledInstance(
            arg0: number | java.lang.Float,
            arg1: boolean | java.lang.Boolean
          ): javax.imageio.plugins.jpeg.JPEGQTable
          public toString(): java.lang.String
        }
      }
    }
  }
}
