declare namespace javax {
  namespace swing {
    class SizeRequirements implements java.io.Serializable {
      public minimum: int
      public preferred: int
      public maximum: int
      public alignment: float
      public constructor()
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Float
      )
      public toString(): java.lang.String
      public static getTiledSizeRequirements(arg0: javax.swing.SizeRequirements[]): javax.swing.SizeRequirements
      public static getAlignedSizeRequirements(arg0: javax.swing.SizeRequirements[]): javax.swing.SizeRequirements
      public static calculateTiledPositions(
        arg0: number | java.lang.Integer,
        arg1: javax.swing.SizeRequirements,
        arg2: javax.swing.SizeRequirements[],
        arg3: number[] | java.lang.Integer[],
        arg4: number[] | java.lang.Integer[]
      ): void
      public static calculateTiledPositions(
        arg0: number | java.lang.Integer,
        arg1: javax.swing.SizeRequirements,
        arg2: javax.swing.SizeRequirements[],
        arg3: number[] | java.lang.Integer[],
        arg4: number[] | java.lang.Integer[],
        arg5: boolean | java.lang.Boolean
      ): void
      public static calculateAlignedPositions(
        arg0: number | java.lang.Integer,
        arg1: javax.swing.SizeRequirements,
        arg2: javax.swing.SizeRequirements[],
        arg3: number[] | java.lang.Integer[],
        arg4: number[] | java.lang.Integer[]
      ): void
      public static calculateAlignedPositions(
        arg0: number | java.lang.Integer,
        arg1: javax.swing.SizeRequirements,
        arg2: javax.swing.SizeRequirements[],
        arg3: number[] | java.lang.Integer[],
        arg4: number[] | java.lang.Integer[],
        arg5: boolean | java.lang.Boolean
      ): void
      public static adjustSizes(arg0: number | java.lang.Integer, arg1: javax.swing.SizeRequirements[]): number[]
    }
  }
}
