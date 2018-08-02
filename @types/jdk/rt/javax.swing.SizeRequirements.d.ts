declare namespace javax {
    namespace swing {
        class SizeRequirements implements java.io.Serializable {
            public minimum: int
            public preferred: int
            public maximum: int
            public alignment: float
            public constructor()
            public constructor(arg0: int, arg1: int, arg2: int, arg3: float)
            public toString(): string
            public static getTiledSizeRequirements(arg0: javax.swing.SizeRequirements[]): javax.swing.SizeRequirements
            public static getAlignedSizeRequirements(arg0: javax.swing.SizeRequirements[]): javax.swing.SizeRequirements
            public static calculateTiledPositions(arg0: int, arg1: javax.swing.SizeRequirements, arg2: javax.swing.SizeRequirements[], arg3: int[], arg4: int[]): void
            public static calculateTiledPositions(arg0: int, arg1: javax.swing.SizeRequirements, arg2: javax.swing.SizeRequirements[], arg3: int[], arg4: int[], arg5: boolean): void
            public static calculateAlignedPositions(arg0: int, arg1: javax.swing.SizeRequirements, arg2: javax.swing.SizeRequirements[], arg3: int[], arg4: int[]): void
            public static calculateAlignedPositions(arg0: int, arg1: javax.swing.SizeRequirements, arg2: javax.swing.SizeRequirements[], arg3: int[], arg4: int[], arg5: boolean): void
            public static adjustSizes(arg0: int, arg1: javax.swing.SizeRequirements[]): int[]
            public static class: java.lang.Class<any>
        }
    }
}