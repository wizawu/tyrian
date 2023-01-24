declare namespace java {
  namespace awt {
    class GridBagLayoutInfo implements java.io.Serializable {
      width: int
      height: int
      startx: int
      starty: int
      minWidth: int[]
      minHeight: int[]
      weightX: double[]
      weightY: double[]
      hasBaseline: boolean
      baselineType: short[]
      maxAscent: int[]
      maxDescent: int[]
      constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      hasConstantDescent(arg0: number | java.lang.Integer): boolean
      hasBaseline(arg0: number | java.lang.Integer): boolean
    }
  }
}
